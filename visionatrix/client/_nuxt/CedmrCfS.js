import{_ as K}from"./BsPb4SUV.js";import{_ as Z}from"./0WB7VeWV.js";import{_ as q}from"./B23bJk9k.js";import{f as E,u as Q,R as X,I as Y,S as ee,T as te,K as k,q as I,g as oe,s as U,J as se,o as f,i as C,w as a,a as d,b as n,p as s,O as g,c as D,k as ae,m as le,d as r,l as ne,t as i,L as p,N as re,F as ie,r as ue,j as de,z as me,v as ce,M as W}from"./DBZEk4gD.js";import{_ as _e}from"./BHLPTLeB.js";import"./DEZzGQPm.js";const fe={class:"flex flex-col md:flex-row"},pe={class:"px-5 md:w-4/5"},ve={class:"flex flex-col lg:flex-row px-3 py-3.5 border-b border-gray-200 dark:border-gray-700"},ke={class:"flex"},be={key:0,class:"flex flex-col md:flex-row items-center"},ge={key:0},ye={class:"p-4 flex flex-wrap max-w-64 max-h-60 overflow-y-auto"},Ue=E({__name:"workers",setup(we){Q({title:"Workers - Visionatrix",meta:[{name:"description",content:"Workers - Visionatrix"}]});const m=X(),L=Y();ee(()=>{m.startPolling()}),te(()=>{m.stopPolling()});const y=[{id:"worker_status",label:"Worker status",sortable:!0},{id:"id",label:"ID"},{id:"worker_id",label:"Worker ID"},{id:"worker_version",label:"Worker version",sortable:!0},{id:"last_seen",label:"Last seen",sortable:!0},{id:"tasks_to_give",label:"Tasks to give",sortable:!1},{id:"os",label:"OS",sortable:!0},{id:"version",label:"Python Version",sortable:!0},{id:"device_name",label:"Device name"},{id:"device_type",label:"Device type",sortable:!0},{id:"vram_total",label:"VRAM total",sortable:!0},{id:"vram_free",label:"VRAM free",sortable:!0},{id:"torch_vram_total",label:"Torch VRAM total",sortable:!0},{id:"torch_vram_free",label:"Torch VRAM free",sortable:!0},{id:"ram_total",label:"RAM total",sortable:!0},{id:"ram_free",label:"RAM free",sortable:!0}],b=y.map(e=>({key:e.id,label:e.label,sortable:e.sortable||!1,class:""})),M=localStorage.getItem("selectedColumns");let w=null;if(M!==null){const e=JSON.parse(M);w=b.filter(t=>e.includes(t.key)),w.sort(O)}const c=k(w||[...b]);c.value.unshift({key:"",label:"",sortable:!1,class:""}),I(c,e=>{localStorage.setItem("selectedColumns",JSON.stringify(Object.values(b).filter(t=>e.includes(t)).map(t=>t.key))),e.sort(O)});function O(e,t){return y.findIndex(l=>l.id===e.key)-y.findIndex(l=>l.id===t.key)}const x=oe(),V=U(()=>x.flows.map(e=>({label:e.display_name,value:e.name}))),_=k([]);se(()=>{if(x.flows.length===0){x.fetchFlows().then(()=>{_.value=[...V.value]});return}_.value=[...V.value]});const T=k(!1);function N(){T.value=!0,Promise.all(u.value.map(e=>m.setTasksToGive(e.worker_id,_.value.map(t=>t.value)))).then(()=>{W().add({title:"Tasks to give updated",description:"Tasks to give updated successfully"}),u.value=[]}).catch(()=>{W().add({title:"Failed to update tasks to give",description:"Try again"})}).finally(()=>{T.value=!1,m.loadWorkers()})}const v=k(""),h=U(()=>m.$state.workers),P=U(()=>h.value.filter(e=>Object.values(e).some(t=>String(t).toLowerCase().includes(v.value.toLowerCase()))));function R(e){const t=new Date(e.last_seen.includes("Z")?e.last_seen:e.last_seen+"Z");return new Date().getTime()-t.getTime()<=60*5*1e3?"Online":"Offline"}const u=k([]);return I(h,e=>{if(u.value.length>0){const t=u.value.map(l=>l.id);u.value=e.filter(l=>t.includes(l.id))}}),(e,t)=>{const l=K,S=Z,$=q,A=le,G=ae,F=de,j=me,z=re,J=_e,H=ce;return f(),C(H,{class:"lg:h-dvh"},{default:a(()=>[d("div",fe,[n(l,{links:s(L).links,class:"md:w-1/5"},null,8,["links"]),d("div",pe,[t[6]||(t[6]=d("h2",{class:"mb-3 text-xl"},"Workers",-1)),d("div",ve,[d("div",ke,[n(S,{modelValue:s(c),"onUpdate:modelValue":t[0]||(t[0]=o=>g(c)?c.value=o:null),class:"mr-3",options:s(b),multiple:""},null,8,["modelValue","options"]),n($,{modelValue:s(v),"onUpdate:modelValue":t[1]||(t[1]=o=>g(v)?v.value=o:null),placeholder:"Filter workers..."},null,8,["modelValue"])]),s(u).length>=1?(f(),D("div",be,[n(S,{modelValue:s(_),"onUpdate:modelValue":t[2]||(t[2]=o=>g(_)?_.value=o:null),class:"mr-3 my-3 lg:mx-3 lg:my-0 w-full max-w-64 min-w-64",options:s(V),multiple:""},{label:a(()=>t[4]||(t[4]=[d("span",null,"Tasks to give",-1)])),_:1},8,["modelValue","options"]),n(G,{text:"Flows available for worker to get tasks"},{default:a(()=>[n(A,{icon:"i-heroicons-check-16-solid",variant:"outline",color:"cyan",size:"sm",loading:s(T),onClick:N},{default:a(()=>t[5]||(t[5]=[r(" Update tasks to give ")])),_:1},8,["loading"])]),_:1})])):ne("",!0)]),n(J,{modelValue:s(u),"onUpdate:modelValue":t[3]||(t[3]=o=>g(u)?u.value=o:null),columns:s(c),rows:s(v)===""?s(h):s(P),loading:s(m).$state.loading},{"worker_status-data":a(({row:o})=>[n(F,{variant:"solid",color:R(o)==="Online"?"green":"red"},{default:a(()=>[r(i(R(o)),1)]),_:2},1032,["color"])]),"tasks_to_give-data":a(({row:o})=>[o.tasks_to_give.length===0?(f(),D("span",ge,"All")):(f(),C(z,{key:1,popper:{placement:"bottom"}},{panel:a(()=>[d("div",ye,[(f(!0),D(ie,null,ue(o.tasks_to_give,B=>(f(),C(F,{key:B,class:"mr-2 mb-2",variant:"solid",color:"cyan"},{default:a(()=>[n(j,{class:"hover:underline",to:`/workflows/${B}`},{default:a(()=>[r(i(B),1)]),_:2},1032,["to"])]),_:2},1024))),128))])]),default:a(()=>[n(A,{icon:"i-heroicons-list-bullet-16-solid",variant:"outline",color:"gray",size:"sm"},{default:a(()=>[d("span",null,i(o.tasks_to_give.length)+" selected",1)]),_:2},1024)]),_:2},1024))]),"last_seen-data":a(({row:o})=>[r(i(new Date(o.last_seen).toLocaleString()),1)]),"vram_total-data":a(({row:o})=>[r(i(("formatBytes"in e?e.formatBytes:s(p))(o.vram_total)),1)]),"vram_free-data":a(({row:o})=>[r(i(("formatBytes"in e?e.formatBytes:s(p))(o.vram_free)),1)]),"torch_vram_total-data":a(({row:o})=>[r(i(("formatBytes"in e?e.formatBytes:s(p))(o.torch_vram_total)),1)]),"torch_vram_free-data":a(({row:o})=>[r(i(("formatBytes"in e?e.formatBytes:s(p))(o.torch_vram_free)),1)]),"ram_total-data":a(({row:o})=>[r(i(("formatBytes"in e?e.formatBytes:s(p))(o.ram_total)),1)]),"ram_free-data":a(({row:o})=>[r(i(("formatBytes"in e?e.formatBytes:s(p))(o.ram_free)),1)]),_:1},8,["modelValue","columns","rows","loading"])])])]),_:1})}}});export{Ue as default};
