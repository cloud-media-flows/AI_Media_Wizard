import{_ as me}from"./DFGQGn-c.js";import{a as ie,b as fe,_ as pe}from"./Yur3e65b.js";import{_ as ge}from"./Tqbs6VtV.js";import{y as ye,z as te,_ as ve,g as ue,m as de,l as x,A as be,B as oe,C as B,D as ke,E as ae,G as Z,o as n,c as f,a as u,H as F,I as m,t as g,k as I,b as k,J as W,F as H,r as J,j as M,K as he,d as S,L as se,u as _e,M as Se,N as we,O as Ve,P as L,Q as le,h as Be,R as Ce,w as d,q as $e,i as c,S as E,T as R,x as ne,n as Ue,U as Ae,V as Te}from"./BygqZOH6.js";import{_ as ce}from"./DOXkrt-H.js";import"./pe0DEn50.js";const Ie={wrapper:"relative overflow-x-auto",base:"min-w-full table-fixed",divide:"divide-y divide-gray-300 dark:divide-gray-700",thead:"relative",tbody:"divide-y divide-gray-200 dark:divide-gray-800",caption:"sr-only",tr:{base:"",selected:"bg-gray-50 dark:bg-gray-800/50",active:"hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"},th:{base:"text-left rtl:text-right",padding:"px-4 py-3.5",color:"text-gray-900 dark:text-white",font:"font-semibold",size:"text-sm"},td:{base:"whitespace-nowrap",padding:"px-4 py-4",color:"text-gray-500 dark:text-gray-400",font:"",size:"text-sm"},checkbox:{padding:"ps-4"},loadingState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"},emptyState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"},progress:{wrapper:"absolute inset-x-0 -bottom-[0.5px] p-0"},default:{sortAscIcon:"i-heroicons-bars-arrow-up-20-solid",sortDescIcon:"i-heroicons-bars-arrow-down-20-solid",sortButton:{icon:"i-heroicons-arrows-up-down-20-solid",trailing:!0,square:!0,color:"gray",variant:"ghost",class:"-m-1.5"},checkbox:{color:"primary"},progress:{color:"primary",animation:"carousel"},loadingState:{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},emptyState:{icon:"i-heroicons-circle-stack-20-solid",label:"No items."}}};function Oe(e){return e?e[0].toUpperCase()+e.slice(1):""}const T=ye(te.ui.strategy,te.ui.table,Ie);function De(e,i){return e===i}function re(e,i,$){return e===i?0:$==="asc"?e<i?-1:1:e>i?-1:1}const Re=ue({components:{UIcon:de,UButton:x,UProgress:ie,UCheckbox:ce},inheritAttrs:!1,props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>De},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortMode:{type:String,default:"auto"},sortButton:{type:Object,default:()=>T.default.sortButton},sortAscIcon:{type:String,default:()=>T.default.sortAscIcon},sortDescIcon:{type:String,default:()=>T.default.sortDescIcon},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>T.default.loadingState},emptyState:{type:Object,default:()=>T.default.emptyState},caption:{type:String,default:null},progress:{type:Object,default:()=>T.default.progress},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","update:sort"],setup(e,{emit:i,attrs:$}){const{ui:C,attrs:U}=be("table",oe(e,"ui"),T,oe(e,"class")),O=B(()=>e.columns??Object.keys(e.rows[0]??{}).map(t=>({key:t,label:Oe(t),sortable:!1,class:void 0,sort:re}))),r=ke(e,"sort",i,{passive:!0,defaultValue:ae({},e.sort,{column:null,direction:"asc"})}),w={column:r.value.column,direction:null},D=B(()=>{var V;if(!((V=r.value)!=null&&V.column)||e.sortMode==="manual")return e.rows;const{column:t,direction:p}=r.value;return e.rows.slice().sort((P,K)=>{var z;const G=Z(P,t),Q=Z(K,t);return(((z=O.value.find(X=>X.key===t))==null?void 0:z.sort)??re)(G,Q,p)})}),y=B({get(){return e.modelValue},set(t){i("update:modelValue",t)}}),s=B(()=>y.value&&y.value.length>0&&y.value.length<e.rows.length),b=B(()=>e.emptyState===null?null:{...C.value.default.emptyState,...e.emptyState}),v=B(()=>e.loadingState===null?null:{...C.value.default.loadingState,...e.loadingState});function j(t,p){if(typeof e.by=="string"){const V=e.by;return(t==null?void 0:t[V])===(p==null?void 0:p[V])}return e.by(t,p)}function h(t){return e.modelValue?y.value.some(p=>j(se(p),se(t))):!1}function A(t){if(r.value.column===t.key){const p=!t.direction||t.direction==="asc"?"desc":"asc";r.value.direction===p?r.value=ae({},w,{column:null,direction:"asc"}):r.value={column:r.value.column,direction:r.value.direction==="asc"?"desc":"asc"}}else r.value={column:t.key,direction:t.direction||"asc"}}function q(t){$.onSelect&&$.onSelect(t)}function N(){e.rows.forEach(t=>{h(t)||y.value.push(t)})}function _(t){t?N():y.value=[]}function o(t,p,V=""){return Z(t,p,V)}function l(t){if(t.sortable){if(r.value.column!==t.key)return"none";if(r.value.direction==="asc")return"ascending";if(r.value.direction==="desc")return"descending"}}return{ui:C,attrs:U,sort:r,columns:O,rows:D,selected:y,indeterminate:s,emptyState:b,loadingState:v,isSelected:h,onSort:A,onSelect:q,onChange:_,getRowData:o,getAriaSort:l}}}),Me=["aria-sort"],je={key:1},Fe={key:0},We={key:0},Le=["colspan"],Ne={key:1},Pe=["colspan"],Ge=["onClick"];function ze(e,i,$,C,U,O){const r=ce,w=x,D=ie,y=de;return n(),f("div",W({class:e.ui.wrapper},e.attrs),[u("table",{class:m([e.ui.base,e.ui.divide])},[e.$slots.caption||e.caption?F(e.$slots,"caption",{key:0},()=>[u("caption",{class:m(e.ui.caption)},g(e.caption),3)]):I("",!0),u("thead",{class:m(e.ui.thead)},[u("tr",{class:m(e.ui.tr.base)},[e.modelValue?(n(),f("th",{key:0,scope:"col",class:m(e.ui.checkbox.padding)},[k(r,W({"model-value":e.indeterminate||e.selected.length===e.rows.length,indeterminate:e.indeterminate},e.ui.default.checkbox,{"aria-label":"Select all",onChange:e.onChange}),null,16,["model-value","indeterminate","onChange"])],2)):I("",!0),(n(!0),f(H,null,J(e.columns,(s,b)=>(n(),f("th",{key:b,scope:"col",class:m([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,s.class]),"aria-sort":e.getAriaSort(s)},[F(e.$slots,`${s.key}-header`,{column:s,sort:e.sort,onSort:e.onSort},()=>[s.sortable?(n(),M(w,W({key:0,ref_for:!0},{...e.ui.default.sortButton||{},...e.sortButton},{icon:!e.sort.column||e.sort.column!==s.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:s[e.columnAttribute],onClick:v=>e.onSort(s)}),null,16,["icon","label","onClick"])):(n(),f("span",je,g(s[e.columnAttribute]),1))])],10,Me))),128))],2),e.loading&&e.progress?(n(),f("tr",Fe,[u("td",{colspan:0,class:m(e.ui.progress.wrapper)},[k(D,W({...e.ui.default.progress||{},...e.progress},{size:"2xs"}),null,16)],2)])):I("",!0)],2),u("tbody",{class:m(e.ui.tbody)},[e.loadingState&&e.loading&&!e.rows.length?(n(),f("tr",We,[u("td",{colspan:e.columns.length+(e.modelValue?1:0)},[F(e.$slots,"loading-state",{},()=>[u("div",{class:m(e.ui.loadingState.wrapper)},[e.loadingState.icon?(n(),M(y,{key:0,name:e.loadingState.icon,class:m(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):I("",!0),u("p",{class:m(e.ui.loadingState.label)},g(e.loadingState.label),3)],2)])],8,Le)])):e.emptyState&&!e.rows.length?(n(),f("tr",Ne,[u("td",{colspan:e.columns.length+(e.modelValue?1:0)},[F(e.$slots,"empty-state",{},()=>[u("div",{class:m(e.ui.emptyState.wrapper)},[e.emptyState.icon?(n(),M(y,{key:0,name:e.emptyState.icon,class:m(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):I("",!0),u("p",{class:m(e.ui.emptyState.label)},g(e.emptyState.label),3)],2)])],8,Pe)])):(n(!0),f(H,{key:2},J(e.rows,(s,b)=>(n(),f("tr",{key:b,class:m([e.ui.tr.base,e.isSelected(s)&&e.ui.tr.selected,e.$attrs.onSelect&&e.ui.tr.active,s==null?void 0:s.class]),onClick:()=>e.onSelect(s)},[e.modelValue?(n(),f("td",{key:0,class:m(e.ui.checkbox.padding)},[k(r,W({modelValue:e.selected,"onUpdate:modelValue":i[0]||(i[0]=v=>e.selected=v),value:s,ref_for:!0},e.ui.default.checkbox,{"aria-label":"Select row",onClick:i[1]||(i[1]=he(()=>{},["stop"]))}),null,16,["modelValue","value"])],2)):I("",!0),(n(!0),f(H,null,J(e.columns,(v,j)=>{var h;return n(),f("td",{key:j,class:m([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size,(h=s[v.key])==null?void 0:h.class])},[F(e.$slots,`${v.key}-data`,{column:v,row:s,index:b,getRowData:A=>e.getRowData(s,v.key,A)},()=>[S(g(e.getRowData(s,v.key)),1)])],2)}),128))],10,Ge))),128))],2)],2)],16)}const Ee=ve(Re,[["render",ze]]),He={class:"flex flex-col md:flex-row"},Je={class:"px-5 md:w-4/5"},qe=u("h2",{class:"mb-3 text-xl"},"Workers",-1),Ke={class:"flex flex-col lg:flex-row px-3 py-3.5 border-b border-gray-200 dark:border-gray-700"},Qe={class:"flex"},Xe={key:0,class:"flex flex-col md:flex-row items-center"},Ye=u("span",null,"Tasks to give",-1),Ze={key:0},xe={class:"p-4 flex flex-wrap max-w-64"},nt=ue({__name:"workers",setup(e){_e({title:"Workers - Visionatrix",meta:[{name:"description",content:"Workers - Visionatrix"}]});const i=Se();we(()=>{i.startPolling()}),Ve(()=>{i.stopPolling()});const $=[{label:"Settings",icon:"i-heroicons-cog-6-tooth-20-solid",to:"/settings"},{label:"Workers information",icon:"i-heroicons-chart-bar-16-solid",to:"/settings/workers"}],C=[{id:"worker_status",label:"Worker status",sortable:!0},{id:"id",label:"ID"},{id:"worker_id",label:"Worker ID"},{id:"worker_version",label:"Worker version",sortable:!0},{id:"last_seen",label:"Last seen",sortable:!0},{id:"tasks_to_give",label:"Tasks to give",sortable:!1},{id:"os",label:"OS",sortable:!0},{id:"version",label:"Python Version",sortable:!0},{id:"device_name",label:"Device name"},{id:"device_type",label:"Device type",sortable:!0},{id:"vram_total",label:"VRAM total",sortable:!0},{id:"vram_free",label:"VRAM free",sortable:!0},{id:"torch_vram_total",label:"Torch VRAM total",sortable:!0},{id:"torch_vram_free",label:"Torch VRAM free",sortable:!0},{id:"ram_total",label:"RAM total",sortable:!0},{id:"ram_free",label:"RAM free",sortable:!0}],U=C.map(o=>({key:o.id,label:o.label,sortable:o.sortable||!1,class:""})),O=localStorage.getItem("selectedColumns");let r=null;if(O!==null){const o=JSON.parse(O);r=U.filter(l=>o.includes(l.key)),r.sort(D)}const w=L(r||[...U]);le(w,o=>{localStorage.setItem("selectedColumns",JSON.stringify(Object.values(U).filter(l=>o.includes(l)).map(l=>l.key))),o.sort(D)});function D(o,l){return C.findIndex(t=>t.id===o.key)-C.findIndex(t=>t.id===l.key)}const y=Be(),s=B(()=>y.flows.map(o=>({label:o.display_name,value:o.name}))),b=L([]);Ce(()=>{if(y.flows.length===0){y.fetchFlows().then(()=>{b.value=[...s.value]});return}b.value=[...s.value]});const v=L(!1);function j(){v.value=!0,Promise.all(_.value.map(o=>i.setTasksToGive(o.worker_id,b.value.map(l=>l.value)))).then(()=>{ne().add({title:"Tasks to give updated",description:"Tasks to give updated successfully"}),_.value=[]}).catch(()=>{ne().add({title:"Failed to update tasks to give",description:"Try again"})}).finally(()=>{v.value=!1,i.loadWorkers()})}const h=L(""),A=B(()=>i.$state.workers),q=B(()=>A.value.filter(o=>Object.values(o).some(l=>String(l).toLowerCase().includes(h.value.toLowerCase()))));function N(o){return new Date().getTime()-new Date(o.last_seen).getTime()<=12e4?"Online":"Offline"}const _=L([]);return le(A,o=>{if(_.value.length>0){const l=_.value.map(t=>t.id);_.value=o.filter(t=>l.includes(t.id))}}),(o,l)=>{const t=me,p=fe,V=ge,P=x,K=pe,G=Ue,Q=Te,ee=Ae,z=Ee,X=$e;return n(),M(X,{class:"lg:h-dvh"},{default:d(()=>[u("div",He,[k(t,{links:$,class:"md:w-1/5"}),u("div",Je,[qe,u("div",Ke,[u("div",Qe,[k(p,{modelValue:c(w),"onUpdate:modelValue":l[0]||(l[0]=a=>E(w)?w.value=a:null),class:"mr-3",options:c(U),multiple:""},null,8,["modelValue","options"]),k(V,{modelValue:c(h),"onUpdate:modelValue":l[1]||(l[1]=a=>E(h)?h.value=a:null),placeholder:"Filter workers..."},null,8,["modelValue"])]),c(_).length>=1?(n(),f("div",Xe,[k(p,{modelValue:c(b),"onUpdate:modelValue":l[2]||(l[2]=a=>E(b)?b.value=a:null),class:"mr-3 my-3 lg:mx-3 lg:my-0 w-full max-w-64",options:c(s),multiple:""},{label:d(()=>[Ye]),_:1},8,["modelValue","options"]),k(K,{text:"Flows available for worker to get tasks"},{default:d(()=>[k(P,{icon:"i-heroicons-check-16-solid",variant:"outline",color:"cyan",size:"sm",loading:c(v),onClick:j},{default:d(()=>[S(" Update tasks to give ")]),_:1},8,["loading"])]),_:1})])):I("",!0)]),k(z,{modelValue:c(_),"onUpdate:modelValue":l[3]||(l[3]=a=>E(_)?_.value=a:null),columns:c(w),rows:c(h)===""?c(A):c(q),loading:c(i).$state.loading},{"worker_status-data":d(({row:a})=>[k(G,{variant:"solid",color:N(a)==="Online"?"green":"red"},{default:d(()=>[S(g(N(a)),1)]),_:2},1032,["color"])]),"tasks_to_give-data":d(({row:a})=>[a.tasks_to_give.length===0?(n(),f("span",Ze,"All")):(n(),M(ee,{key:1,popper:{placement:"bottom"}},{panel:d(()=>[u("div",xe,[(n(!0),f(H,null,J(a.tasks_to_give,Y=>(n(),M(G,{key:Y,class:"mr-2 mb-2",variant:"solid",color:"cyan"},{default:d(()=>[k(Q,{class:"hover:underline",to:`/workflows/${Y}`},{default:d(()=>[S(g(Y),1)]),_:2},1032,["to"])]),_:2},1024))),128))])]),default:d(()=>[k(P,{icon:"i-heroicons-list-bullet-16-solid",variant:"outline",color:"gray",size:"sm"},{default:d(()=>[u("span",null,g(a.tasks_to_give.length)+" selected",1)]),_:2},1024)]),_:2},1024))]),"last_seen-data":d(({row:a})=>[S(g(new Date(a.last_seen).toLocaleString()),1)]),"vram_total-data":d(({row:a})=>[S(g(("formatBytes"in o?o.formatBytes:c(R))(a.vram_total)),1)]),"vram_free-data":d(({row:a})=>[S(g(("formatBytes"in o?o.formatBytes:c(R))(a.vram_free)),1)]),"torch_vram_total-data":d(({row:a})=>[S(g(("formatBytes"in o?o.formatBytes:c(R))(a.torch_vram_total)),1)]),"torch_vram_free-data":d(({row:a})=>[S(g(("formatBytes"in o?o.formatBytes:c(R))(a.torch_vram_free)),1)]),"ram_total-data":d(({row:a})=>[S(g(("formatBytes"in o?o.formatBytes:c(R))(a.ram_total)),1)]),"ram_free-data":d(({row:a})=>[S(g(("formatBytes"in o?o.formatBytes:c(R))(a.ram_free)),1)]),_:1},8,["modelValue","columns","rows","loading"])])])]),_:1})}}});export{nt as default};
