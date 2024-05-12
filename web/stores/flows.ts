export const useFlowsStore = defineStore('flowsStore', {
	state: () => ({
		loading: {
			flows_available: false,
			flows_installed: false,
			tasks_history: false,
			current_flow: true,
		},
		page: 1,
		pageSize: 9,
		running: <FlowRunning[]>[],
		installing: <FlowInstalling[]>[],
		resultsPage: 1,
		resultsPageSize: 5,
		flow_results_filter: '',
		flow_results: <FlowResult[]>[],
		flows_available: <Flow[]>[],
		flows_installed: <Flow[]>[],
		sub_flows: <Flow[]>[],
		flows_favorite: <string[]>[],
		current_flow: <Flow>{},
		showNotificationChip: false,
		runningInterval: <any>{},
	}),
	getters: {
		flows(state): Flow[] {
			return [
				...state.flows_installed,
				...state.flows_available,
			]
		},
		paginatedFlows(state) {
			return paginate([
				...state.flows_installed,
				...state.flows_available,
			], state.page, state.pageSize) as Flow[]
		},
		flowByName() {
			return (name: string) => this.flows.find(flow => flow.name === name)
		},
		flowResultsByName(state) {
			return (name: string) => {
				if (state.flow_results_filter !== '') {
					return state.flow_results.filter(flow => flow.flow_name === name && flow.input_params_mapped['prompt'].includes(state.flow_results_filter))
				}
				return state.flow_results.filter(flow => flow.flow_name === name)
			}
		},
		flowResultsByNamePaginated(state) {
			return (name: string) => {
				if (state.flow_results_filter !== '') {
					return paginate(state.flow_results.filter(flow => flow.flow_name === name && flow.input_params_mapped['prompt'].includes(state.flow_results_filter)).reverse(), state.resultsPage, state.resultsPageSize) as FlowResult[]
				}
				return paginate(state.flow_results.filter(flow => flow.flow_name === name).reverse(), state.resultsPage, state.resultsPageSize) as FlowResult[]
			}	
		},
		flowInstallingByName(state) {
			return (name: string) => state.installing.find(flow => flow.flow_name === name) ?? null
		},
		flowsRunningByName(state) {
			return (name: string) => state.running.filter(flow => flow.flow_name === name) ?? null
		},
		flowsRunningByNameWithErrors(state) {
			return (name: string) => state.running.filter(flow => flow.flow_name === name && flow.error) ?? null
		},
		currentFlow(state): Flow {
			return state.current_flow
		},
		isFlowFavorite(state) {
			return (name: string) => state.flows_favorite.includes(name)
		},
		isFlowInstalled(state) {
			return (name: string) => state.flows_installed.filter(flow => flow.name === name).length > 0
		},
	},
	actions: {
		async fetchFlows() {
			await Promise.all([
				this.fetchFlowsAvailable(),
				this.fetchFlowsInstalled(),
			])
				.then(() => {
					this.loadFavorites()
					this.loadUserOptions()
					this.fetchFlowResults().then((tasks_history) => {
						this.initFlowResultsData(tasks_history)
					}).then(() => {
						this.restorePollingProcesses()
					})
				})
				.then(() => {
					const route = useRoute()
					if (route.params.name) {
						this.loading.current_flow = true
						this.setCurrentFlow(<string>route.params.name)
					}
				})
		},

		async fetchFlowsAvailable() {
			const { $apiFetch } = useNuxtApp()
			this.loading.flows_available = true
			const flows = await $apiFetch('/flows-available', {
				method: 'GET',
				timeout: 15000,
			}).then((res) => {
				console.debug('available_flows: ', res)
				this.loading.flows_available = false
				this.flows_available = <Flow[]>res
				this.flows_available.sort(this.sortByFlowNameCallback)
			}).catch((e) => {
				console.debug('error fetching flows:', e)
				this.loading.flows_available = false
				const toast = useToast()
				toast.add({
					title: 'Failed to fetch available flows',
					description: e.message,
					timeout: 0,
				})
			})
			return flows
		},

		async fetchFlowsInstalled() {
			const { $apiFetch } = useNuxtApp()
			console.debug('fetching installed flows')
			this.loading.flows_installed = true
			const flows = await $apiFetch('/flows-installed', {
				method: 'GET',
				timeout: 15000,
			}).then((res) => {
				console.debug('installed_flows: ', res)
				this.loading.flows_installed = false
				this.flows_installed = <Flow[]>res
				this.flows_installed.sort(this.sortByFlowNameCallback)
			}).catch((e) => {
				console.debug('error fetching installed flows:', e)
				this.loading.flows_installed = false
				const toast = useToast()
				toast.add({
					title: 'Failed to fetch installed flows',
					description: e.message,
					timeout: 0,
				})
			})
			return flows
		},

		async fetchFlowResults(): Promise<TasksHistory> {
			const { $apiFetch } = useNuxtApp()
			this.loading.tasks_history = true
			return await $apiFetch('/tasks-progress', {
				method: 'GET',
			}).then((res) => {
				this.loading.tasks_history = false
				return <TasksHistory>res
			})
		},

		initFlowResultsData(res: TasksHistory) {
			console.debug('tasks_history:', res)

			const runningFlows: FlowRunning[] = []
			const finishedFlows: FlowResult[] = []

			Object.keys(res).forEach((task_id) => {
				const task = <TaskHistoryItem>res[task_id]
				if (task.progress < 100) {
					runningFlows.push(<FlowRunning>{
						task_id: task_id,
						flow_name: task.name,
						progress: task.progress,
						input_prompt: <string>task.input_params?.prompt || '',
						seed: <string>task.input_params?.seed || '',
						input_params_mapped: task.input_params || null,
						error: task?.error || null,
						outputs: task.outputs,
					})
				} else if (task.progress === 100) {
					finishedFlows.push(<FlowResult>{
						task_id: task_id,
						flow_name: task.name,
						output_params: task.outputs,
						input_params_mapped: task.input_params || null,
						execution_time: task.execution_time || 0,
					})
				}
			})
			if (runningFlows && runningFlows.length > 0) {
				console.debug('loading running flows:', runningFlows)
				this.running = <FlowRunning[]>runningFlows ?? []
			}
			console.debug('loading finished flows:', finishedFlows)
			this.flow_results = <FlowResult[]>finishedFlows ?? []
		},

		async setupFlow(flow: Flow) {
			const { $apiFetch } = useNuxtApp()
			return await $apiFetch(`/flow?name=${flow.name}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
			}).then((res) => {
				console.debug(res)
				this.installing.push({
					flow_name: flow.name,
					progress: 0,
				})
				this.startFlowInstallingPolling(flow.name)
			}).catch((e) => {
				console.debug(e)
				const toast = useToast()
				toast.add({
					title: 'Failed to setup flow - ' + flow.display_name,
					description: e.message,
					timeout: 5000,
				})
			})
		},

		async getFlowsInstallProgress() {
			const { $apiFetch } = useNuxtApp()
			return await $apiFetch('/flow-progress-install', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
		},

		async deleteFlow(flow: Flow) {
			const { $apiFetch } = useNuxtApp()
			const response = await $apiFetch(`/flow?name=${flow.name}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			}).then((res) => {
				console.debug(res)
				this.fetchFlows()
			})
			return response
		},

		async runFlow(flow: Flow, input_params: FlowInputParam[]|any[], count: number = 1) {
			const formData = new FormData()

			console.debug('input_params:', input_params)

			const input_params_mapped: any = {}
			input_params.forEach(param => {
				const paramName = Object.keys(param)[0]
				if (param[paramName].type !== 'image' && param[paramName].value !== '')
					input_params_mapped[paramName] = param[paramName].value
			})
			console.debug('input_params_mapped:', input_params_mapped)

			formData.append('name', flow.name)
			formData.append('count', count.toString())
			formData.append('input_params', JSON.stringify(input_params_mapped))


			const file_input_params = input_params.filter(param => {
				const paramName = Object.keys(param)[0]
				return param[paramName].type === 'image' 
					&& (param[paramName].value instanceof File || typeof param[paramName].value === 'string')
			})
			console.debug('file_input_params:', file_input_params)
			if (file_input_params.length > 0) {
				file_input_params.forEach(param => {
					const paramName = Object.keys(param)[0]
					console.debug('file:', param[paramName].value)
					formData.append('files', param[paramName].value)
				})
			}

			console.debug('form_data:', formData)

			const { $apiFetch } = useNuxtApp()
			return await $apiFetch('/task', {
				method: 'POST',
				headers: {
					'Access-Control-Allow-Origin': '*',
				},
				body: formData,
			}).then((res: any) => {
				// Adding started flow to running list
				res.tasks_ids.forEach((task_id: number, index: number) => {
					this.running.push({
						task_id: task_id.toString(),
						flow_name: flow.name,
						progress: 0,
						input_params_mapped: {
							...input_params_mapped,
							seed: Number(input_params_mapped['seed']) + index,
						},
						outputs: [], // outputs are dynamic and populated later by polling task progress
					})
				})
				this.startFlowProgressPolling(flow.name)
			}).catch((e) => {
				console.debug(e)
				const toast = useToast()
				toast.add({
					title: 'Failed to run flow - ' + flow.display_name,
					description: e.message,
					timeout: 5000,
				})
			})
		},

		async fetchSubFlows(input_type: string) {
			if (this.sub_flows.length > 0) {
				return
			}
			const { $apiFetch } = useNuxtApp()
			return $apiFetch(`/flows-sub-flows?input_type=${input_type}`).then((res) => {
				this.sub_flows = <Flow[]>res
			})
		},

		async restartFlow(running: FlowRunning) {
			const { $apiFetch } = useNuxtApp()
			return $apiFetch(`/task-restart?task_id=${running.task_id}`, {
				method: 'POST',
			}).then((res: any) => {
				if (res.error !== '') {
					const toast = useToast()
					toast.add({
						title: 'Failed to restart flow',
						description: res.error,
						timeout: 5000,
					})
					return
				}
				const runningFlow = this.running.find(flow => flow.task_id === running.task_id)
				if (!runningFlow) {
					return
				}
				runningFlow.error = ''
				runningFlow.progress = 0
				this.startFlowProgressPolling(running.flow_name)
			})
		},

		async deleteFlowResults(flow_name: string) {
			const { $apiFetch } = useNuxtApp()
			return await $apiFetch(`/tasks?name=${flow_name}`, {
				method: 'DELETE',
			}).then((res: any) => {
				if (res?.error !== '') {
					const toast = useToast()
					toast.add({
						title: 'Failed to delete flow results',
						description: res.error,
						timeout: 5000,
					})
					return
				}
				this.flow_results = this.flow_results.filter(flow => flow.flow_name !== flow_name)
			})
		},

		async cancelRunningFlows(flow_name: string) {
			const { $apiFetch } = useNuxtApp()
			return await $apiFetch(`/tasks-queue?name=${flow_name}`, {
				method: 'DELETE',
			}).then((res: any) => {
				if (res.error !== '') {
					const toast = useToast()
					toast.add({
						title: `Failed to cancel ${flow_name} running flows`,
						description: res.error,
						timeout: 5000,
					})
					return
				}
			}).finally(() => {
				this.running = this.running.filter(flow => flow.flow_name !== flow_name)
				if (this.running.length === 0) {
					this.showNotificationChip = false
				}
			})
		},

		async cancelRunningFlow(running: FlowRunning) {
			const { $apiFetch } = useNuxtApp()
			return await $apiFetch(`/task-queue?task_id=${running.task_id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			}).then((res: any) => {
				if (res.error !== '') {
					const toast = useToast()
					toast.add({
						title: 'Failed to cancel running flow',
						description: res.error,
						timeout: 5000,
					})
					return
				}
				this.running = this.running.filter(flow => flow.task_id !== running.task_id)
				if (this.running.length === 0) {
					this.showNotificationChip = false
				}
			})
		},

		async getFlowsProgress(flow_name?: string): Promise<TasksHistory> {
			const { $apiFetch } = useNuxtApp()
			const url = flow_name ? `/tasks-progress-short?name=${flow_name}` : '/tasks-progress'
			return await $apiFetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
		},

		async fetchFlowComfy(task_id: string) {
			const { $apiFetch } = useNuxtApp()
			return await $apiFetch(`/task-progress?task_id=${task_id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
		},

		setCurrentFlow(name: string) {
			this.current_flow = <Flow>this.flowByName(name)
			if (this.current_flow) {
				useHead({
					title: `${this.current_flow.display_name} - Workflows - Visionatrix`,
					meta: [
						{
							name: 'description',
							content: 'Workflows - Visionatrix',
						},
					],
				})
			}
			this.loading.current_flow = false
		},

		async restorePollingProcesses() {
			// Restore installing flow polling
			await this.getFlowsInstallProgress().then((progress: any) => {
				Object.keys(progress).forEach(flow_name => {
					if (progress[flow_name].progress < 100) {
						this.installing.push({
							flow_name: flow_name,
							progress: <number> progress[flow_name].progress
						})
						this.startFlowInstallingPolling(flow_name)
					}
				})
			})
			Array.from(new Set(this.running.map(flow => flow.flow_name))).forEach(flow_name => {
				this.startFlowProgressPolling(flow_name)
			})
		},

		startFlowInstallingPolling(flow_name: string) {
			if (this.installing.length === 0) {
				return
			}
			let failedAttempts = 0
			this.showNotificationChip = true
			const interval = setInterval(async () => {
				await this.getFlowsInstallProgress().then((progress: any) => {
					if (failedAttempts > 3) {
						clearInterval(interval)
						return
					}

					const flowInstalling = this.flowInstallingByName(flow_name)
					if (!flowInstalling || !(flow_name in progress)) {
						clearInterval(interval)
						failedAttempts++
						return
					}
					flowInstalling.progress = <number> progress[flow_name].progress
					if (progress[flow_name].error) {
						clearInterval(interval)
						flowInstalling.error = progress[flow_name].error
					}
					if (progress[flow_name].progress === 100) {
						clearInterval(interval)
						// Remove finished flow from installing list
						this.installing = this.installing.filter(flow => flow.flow_name !== flow_name)
						this.fetchFlows()
					}
				}).catch ((e) => {
					console.debug(e)
					failedAttempts++
				})
			}, 3000)
		},

		startFlowProgressPolling(flow_name: string) {
			this.showNotificationChip = true
			if (flow_name in this.runningInterval
				&& this.runningInterval[flow_name] !== null
				&& this.running.some(flow => flow.flow_name === flow_name)
			) {
				// Polling already running for this flow
				return
			}
			this.runningInterval[flow_name] = setInterval(async () => {
				await this.getFlowsProgress(flow_name).then((progress: TasksHistory[]|any) => {
					Object.keys(progress).forEach((task_id: string) => {
						const runningFlow = this.running.find(flow => Number(flow.task_id) === Number(task_id))
						if (!runningFlow) {
							return
						}
						runningFlow.progress = <number>progress[task_id].progress
						// progress[task_id].error = 'Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... Test error message... '
						if (progress[task_id].error && progress[task_id].error !== '') {
							runningFlow.error = progress[task_id].error
							return
						}
						if (progress[task_id].execution_time) {
							runningFlow.execution_time = progress[task_id].execution_time
						}
						// update input_params_mapped with new values
						runningFlow.input_params_mapped = {
							...runningFlow.input_params_mapped,
							...progress[task_id].input_params,
						}
						if (progress[task_id].progress === 100) {
							// Remove finished flow from running list
							this.running = this.running.filter(flow => Number(flow.task_id) !== Number(task_id))
							if (this.running.filter(flow => flow.flow_name === flow_name).length === 0) {
								this.showNotificationChip = false
								clearInterval(this.runningInterval[flow_name])
								this.runningInterval[flow_name] = null
							}
							// Save flow results history
							const flow = <Flow>this.flowByName(runningFlow.flow_name)
							this.flow_results.push({
								task_id: task_id.toString(),
								flow_name: flow.name,
								output_params: progress[task_id].outputs,
								input_params_mapped: runningFlow.input_params_mapped,
								execution_time: progress[task_id]?.execution_time || 0,
							})
						}
					})
				}).catch((e): any => {
					console.debug('Failed to fetch running flow progress: ', e)
					clearInterval(this.runningInterval[flow_name])
					this.runningInterval[flow_name] = null
				})
			}, 3000)
		},

		deleteFlowHistory(task_id: string) {
			const { $apiFetch } = useNuxtApp()
			$apiFetch(`/task?task_id=${task_id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			}).then((res: any) => {
				if (res.error !== '') {
					const toast = useToast()
					toast.add({
						title: 'Failed to delete flow history item',
						description: res.error,
						timeout: 5000,
					})
					return
				}
				this.flow_results = this.flow_results.filter(flow => flow.task_id !== task_id)
			})
		},

		loadFavorites() {
			const favorite_flows = localStorage.getItem('favorite_flows')
			if (favorite_flows) {
				this.flows_favorite = JSON.parse(favorite_flows).filter((fav: string) => {
					return this.flows_installed.find(flow => flow.name === fav)
				})
				// If there are were filtered out flows that are not installed anymore - update local storage
				if (this.flows_favorite.length !== JSON.parse(favorite_flows).length) {
					localStorage.setItem('favorite_flows', JSON.stringify(this.flows_favorite))
				}
				this.flows_installed.sort(this.sortByFavoriteCallback)
			}
		},

		markFlowFavorite(flow: Flow) {
			const favorite = this.flows_favorite.find(fav => fav === flow.name)
			if (favorite) {
				this.flows_favorite = this.flows_favorite.filter(fav => fav !== flow.name)
				this.flows_installed.sort(this.sortByFlowNameCallback)
			} else {
				this.flows_favorite.push(flow.name)
				this.flows_installed.sort(this.sortByFavoriteCallback)
			}
			localStorage.setItem('favorite_flows', JSON.stringify(this.flows_favorite))
		},

		sortByFlowNameCallback(a: Flow, b: Flow) {
			if (a.name.split(' ')[0].toLowerCase() > b.name.split(' ')[0].toLowerCase()) {
				return -1
			} else if (a.name.split(' ')[0].toLowerCase() < b.name.split(' ')[0].toLowerCase()) {
				return 1
			} else {
				return 0
			}
		},

		sortByFavoriteCallback(a: Flow, b: Flow) {
			const favoriteA = this.flows_favorite.find(fav => fav === a.name)
			const favoriteB = this.flows_favorite.find(fav => fav === b.name)
			if (favoriteA && !favoriteB) {
				return -1
			} else if (!favoriteA && favoriteB) {
				return 1
			} else {
				return 0
			}
		},

		loadUserOptions() {
			const user_options = localStorage.getItem('user_options')
			if (user_options) {
				const options = JSON.parse(user_options)
				this.resultsPageSize = Number(options.resultsPageSize)
			}
		},

		saveUserOptions() {
			localStorage.setItem('user_options', JSON.stringify({
				resultsPageSize: this.resultsPageSize,
			}))
		},
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useFlowsStore, import.meta.hot))
}


export interface Flow {
	id: string
	name: string
	display_name: string
	description: string
	author: string
	homepage: string
	license: string
	documentation: string
	models: Model[]
	input_params: FlowInputParam[]
	available?: boolean
}

export interface Model {
	name: string
	save_path: string
	url: string
	license: string
	homepage: string
	hash: string
}

export interface FlowInputParam {
	id: any
	name: string
	display_name: string
	type: string
	optional: boolean
	options?: any[]
	advanced?: boolean
	default?: any
	min?: number
	max?: number
	step?: number
	source_input_name?: string
}

export interface FlowOutputParam {
	type: string
	comfy_node_id: number
}

export interface FlowInstalling {
	flow_name: string
	progress: number
	error?: string
}

export interface FlowRunning {
	task_id: string
	flow_name: string
	progress: number
	input_params_mapped: TaskHistoryInputParam
	outputs: FlowOutputParam[]
	error?: string
	execution_time?: number
}

export interface FlowProgress {
	task_id: string
	progress: number
	error?: string
	flow?: any
	name: string
	flow_comfy?: any
	outputs: FlowOutputParam[]
	execution_time?: number
}

export interface FlowResult {
	task_id: string
	flow_name: string
	output_params: FlowOutputParam[]
	input_params_mapped: TaskHistoryInputParam
	execution_time: number
}

export interface TasksHistory {
	[task_id: string]: TaskHistoryItem
}

export interface TaskHistoryInputParam {
	[name: string]: any
}

export interface TaskHistoryItem {
	name: string
	input_params: TaskHistoryInputParam
	progress: number
	error?: string
	outputs: FlowOutputParam[]
	execution_time: number
}
