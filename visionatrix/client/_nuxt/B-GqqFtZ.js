import{_ as me}from"./Cxi6yAQ_.js";import{a as pe,_ as fe}from"./uC1bH057.js";import{z as ge,A as te,_ as ye,f as ie,k as ue,l as x,B as ve,C as oe,D as C,E as be,G as ae,x as W,H as Z,o as n,c as f,a as r,I as j,J as c,t as v,i as V,b as k,K as M,F as z,r as K,h as L,L as ke,d as S,M as se,u as he,N as we,O as Se,P as _e,n as le,g as Ve,y as Be,w as m,p as Ce,j as p,Q as J,R as F,v as ne,m as $e,S as Ue,T as Ae}from"./ChTpfitl.js";import{a as de,_ as Oe}from"./BEPiUDQv.js";import{_ as ce}from"./BV_wKtaJ.js";const Te={wrapper:"relative overflow-x-auto",base:"min-w-full table-fixed",divide:"divide-y divide-gray-300 dark:divide-gray-700",thead:"relative",tbody:"divide-y divide-gray-200 dark:divide-gray-800",caption:"sr-only",tr:{base:"",selected:"bg-gray-50 dark:bg-gray-800/50",active:"hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"},th:{base:"text-left rtl:text-right",padding:"px-4 py-3.5",color:"text-gray-900 dark:text-white",font:"font-semibold",size:"text-sm"},td:{base:"whitespace-nowrap",padding:"px-4 py-4",color:"text-gray-500 dark:text-gray-400",font:"",size:"text-sm"},checkbox:{padding:"ps-4"},loadingState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"},emptyState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"},expand:{icon:"transform transition-transform duration-200"},progress:{wrapper:"absolute inset-x-0 -bottom-[0.5px] p-0"},default:{sortAscIcon:"i-heroicons-bars-arrow-up-20-solid",sortDescIcon:"i-heroicons-bars-arrow-down-20-solid",sortButton:{icon:"i-heroicons-arrows-up-down-20-solid",trailing:!0,square:!0,color:"gray",variant:"ghost",class:"-m-1.5"},expandButton:{icon:"i-heroicons-chevron-down",color:"gray",variant:"ghost",size:"xs",class:"-my-1.5 align-middle"},checkbox:{color:"primary"},progress:{color:"primary",animation:"carousel"},loadingState:{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},emptyState:{icon:"i-heroicons-circle-stack-20-solid",label:"No items."}}};function Ie(e){return e?e[0].toUpperCase()+e.slice(1):""}const O=ge(te.ui.strategy,te.ui.table,Te);function Re(e,u){return e===u}function re(e,u,T){return e===u?0:T==="asc"?e<u?-1:1:e>u?-1:1}const De=ie({components:{UIcon:ue,UButton:x,UProgress:de,UCheckbox:ce},inheritAttrs:!1,props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>Re},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortMode:{type:String,default:"auto"},sortButton:{type:Object,default:()=>O.default.sortButton},sortAscIcon:{type:String,default:()=>O.default.sortAscIcon},sortDescIcon:{type:String,default:()=>O.default.sortDescIcon},expandButton:{type:Object,default:()=>O.default.expandButton},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>O.default.loadingState},emptyState:{type:Object,default:()=>O.default.emptyState},caption:{type:String,default:null},progress:{type:Object,default:()=>O.default.progress},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","update:sort"],setup(e,{emit:u,attrs:T}){const{ui:$,attrs:I}=ve("table",oe(e,"ui"),O,oe(e,"class")),R=C(()=>e.columns??Object.keys(e.rows[0]??{}).map(t=>({key:t,label:Ie(t),sortable:!1,class:void 0,sort:re}))),i=be(e,"sort",u,{passive:!0,defaultValue:ae({},e.sort,{column:null,direction:"asc"})}),b=W([]),D={column:i.value.column,direction:null},U=C(()=>{var B;if(!((B=i.value)!=null&&B.column)||e.sortMode==="manual")return e.rows;const{column:t,direction:d}=i.value;return e.rows.slice().sort((H,q)=>{var s;const X=Z(H,t),Y=Z(q,t);return(((s=R.value.find(P=>P.key===t))==null?void 0:s.sort)??re)(X,Y,d)})}),a=C({get(){return e.modelValue},set(t){u("update:modelValue",t)}}),y=C(()=>a.value&&a.value.length>0&&a.value.length<e.rows.length),g=C(()=>e.emptyState===null?null:{...$.value.default.emptyState,...e.emptyState}),N=C(()=>e.loadingState===null?null:{...$.value.default.loadingState,...e.loadingState});function _(t,d){if(typeof e.by=="string"){const B=e.by;return(t==null?void 0:t[B])===(d==null?void 0:d[B])}return e.by(t,d)}function A(t){return e.modelValue?a.value.some(d=>_(se(d),se(t))):!1}function Q(t){if(i.value.column===t.key){const d=!t.direction||t.direction==="asc"?"desc":"asc";i.value.direction===d?i.value=ae({},D,{column:null,direction:"asc"}):i.value={column:i.value.column,direction:i.value.direction==="asc"?"desc":"asc"}}else i.value={column:t.key,direction:t.direction||"asc"}}function G(t){T.onSelect&&T.onSelect(t)}function h(){const t=[...a.value];e.rows.forEach(d=>{A(d)||t.push(d)}),a.value=t}function o(t){t?h():a.value=[]}function l(t,d,B=""){return Z(t,d,B)}function w(t){b.value.includes(t)?b.value=b.value.filter(d=>d!==t):b.value.push(t)}function E(t){if(t.sortable){if(i.value.column!==t.key)return"none";if(i.value.direction==="asc")return"ascending";if(i.value.direction==="desc")return"descending"}}return{ui:$,attrs:I,sort:i,columns:R,rows:U,selected:a,indeterminate:y,emptyState:g,loadingState:N,openedRows:b,isSelected:A,onSort:Q,onSelect:G,onChange:o,getRowData:l,toggleOpened:w,getAriaSort:E}}}),je=["aria-sort"],Me={key:1},Fe={key:0},We={key:0},Le=["colspan"],Ne={key:1},Pe=["colspan"],ze=["onClick"],Ge={key:0},Ee={colspan:"100%"};function He(e,u,T,$,I,R){const i=ce,b=x,D=de,U=ue;return n(),f("div",M({class:e.ui.wrapper},e.attrs),[r("table",{class:c([e.ui.base,e.ui.divide])},[e.$slots.caption||e.caption?j(e.$slots,"caption",{key:0},()=>[r("caption",{class:c(e.ui.caption)},v(e.caption),3)]):V("",!0),r("thead",{class:c(e.ui.thead)},[r("tr",{class:c(e.ui.tr.base)},[e.modelValue?(n(),f("th",{key:0,scope:"col",class:c(e.ui.checkbox.padding)},[k(i,M({"model-value":e.indeterminate||e.selected.length===e.rows.length,indeterminate:e.indeterminate},e.ui.default.checkbox,{"aria-label":"Select all",onChange:e.onChange}),null,16,["model-value","indeterminate","onChange"])],2)):V("",!0),e.$slots.expand?(n(),f("th",{key:1,scope:"col",class:c(e.ui.tr.base)},u[1]||(u[1]=[r("span",{class:"sr-only"},"Expand",-1)]),2)):V("",!0),(n(!0),f(z,null,K(e.columns,(a,y)=>(n(),f("th",{key:y,scope:"col",class:c([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,a.class]),"aria-sort":e.getAriaSort(a)},[j(e.$slots,`${a.key}-header`,{column:a,sort:e.sort,onSort:e.onSort},()=>[a.sortable?(n(),L(b,M({key:0,ref_for:!0},{...e.ui.default.sortButton||{},...e.sortButton},{icon:!e.sort.column||e.sort.column!==a.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:a[e.columnAttribute],onClick:g=>e.onSort(a)}),null,16,["icon","label","onClick"])):(n(),f("span",Me,v(a[e.columnAttribute]),1))])],10,je))),128))],2),e.loading&&e.progress?(n(),f("tr",Fe,[r("td",{colspan:0,class:c(e.ui.progress.wrapper)},[k(D,M({...e.ui.default.progress||{},...e.progress},{size:"2xs"}),null,16)],2)])):V("",!0)],2),r("tbody",{class:c(e.ui.tbody)},[e.loadingState&&e.loading&&!e.rows.length?(n(),f("tr",We,[r("td",{colspan:e.columns.length+(e.modelValue?1:0)+(e.$slots.expand?1:0)},[j(e.$slots,"loading-state",{},()=>[r("div",{class:c(e.ui.loadingState.wrapper)},[e.loadingState.icon?(n(),L(U,{key:0,name:e.loadingState.icon,class:c(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):V("",!0),r("p",{class:c(e.ui.loadingState.label)},v(e.loadingState.label),3)],2)])],8,Le)])):e.emptyState&&!e.rows.length?(n(),f("tr",Ne,[r("td",{colspan:e.columns.length+(e.modelValue?1:0)+(e.$slots.expand?1:0)},[j(e.$slots,"empty-state",{},()=>[r("div",{class:c(e.ui.emptyState.wrapper)},[e.emptyState.icon?(n(),L(U,{key:0,name:e.emptyState.icon,class:c(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):V("",!0),r("p",{class:c(e.ui.emptyState.label)},v(e.emptyState.label),3)],2)])],8,Pe)])):(n(!0),f(z,{key:2},K(e.rows,(a,y)=>(n(),f(z,{key:y},[r("tr",{class:c([e.ui.tr.base,e.isSelected(a)&&e.ui.tr.selected,e.$attrs.onSelect&&e.ui.tr.active,a==null?void 0:a.class]),onClick:()=>e.onSelect(a)},[e.modelValue?(n(),f("td",{key:0,class:c(e.ui.checkbox.padding)},[k(i,M({modelValue:e.selected,"onUpdate:modelValue":u[0]||(u[0]=g=>e.selected=g),value:a,ref_for:!0},e.ui.default.checkbox,{"aria-label":"Select row",onClickCapture:ke(()=>e.onSelect(a),["stop"])}),null,16,["modelValue","value","onClickCapture"])],2)):V("",!0),e.$slots.expand?(n(),f("td",{key:1,class:c([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size])},[k(b,M({ref_for:!0},{...e.ui.default.expandButton||{},...e.expandButton},{ui:{icon:{base:[e.ui.expand.icon,e.openedRows.includes(y)&&"rotate-180"].join(" ")}},onClick:g=>e.toggleOpened(y)}),null,16,["ui","onClick"])],2)):V("",!0),(n(!0),f(z,null,K(e.columns,(g,N)=>{var _;return n(),f("td",{key:N,class:c([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size,g==null?void 0:g.rowClass,(_=a[g.key])==null?void 0:_.class])},[j(e.$slots,`${g.key}-data`,{column:g,row:a,index:y,getRowData:A=>e.getRowData(a,g.key,A)},()=>[S(v(e.getRowData(a,g.key)),1)])],2)}),128))],10,ze),e.openedRows.includes(y)?(n(),f("tr",Ge,[r("td",Ee,[j(e.$slots,"expand",{row:a,index:y})])])):V("",!0)],64))),128))],2)],2)],16)}const Je=ye(De,[["render",He]]),Ke={class:"flex flex-col md:flex-row"},Qe={class:"px-5 md:w-4/5"},qe={class:"flex flex-col lg:flex-row px-3 py-3.5 border-b border-gray-200 dark:border-gray-700"},Xe={class:"flex"},Ye={key:0,class:"flex flex-col md:flex-row items-center"},Ze={key:0},xe={class:"p-4 flex flex-wrap max-w-64 max-h-60 overflow-y-auto"},lt=ie({__name:"workers",setup(e){he({title:"Workers - Visionatrix",meta:[{name:"description",content:"Workers - Visionatrix"}]});const u=we();Se(()=>{u.startPolling()}),_e(()=>{u.stopPolling()});const T=[{label:"Settings",icon:"i-heroicons-cog-6-tooth-20-solid",to:"/settings"},{label:"Workers information",icon:"i-heroicons-chart-bar-16-solid",to:"/settings/workers"}],$=[{id:"worker_status",label:"Worker status",sortable:!0},{id:"id",label:"ID"},{id:"worker_id",label:"Worker ID"},{id:"worker_version",label:"Worker version",sortable:!0},{id:"last_seen",label:"Last seen",sortable:!0},{id:"tasks_to_give",label:"Tasks to give",sortable:!1},{id:"os",label:"OS",sortable:!0},{id:"version",label:"Python Version",sortable:!0},{id:"device_name",label:"Device name"},{id:"device_type",label:"Device type",sortable:!0},{id:"vram_total",label:"VRAM total",sortable:!0},{id:"vram_free",label:"VRAM free",sortable:!0},{id:"torch_vram_total",label:"Torch VRAM total",sortable:!0},{id:"torch_vram_free",label:"Torch VRAM free",sortable:!0},{id:"ram_total",label:"RAM total",sortable:!0},{id:"ram_free",label:"RAM free",sortable:!0}],I=$.map(o=>({key:o.id,label:o.label,sortable:o.sortable||!1,class:""})),R=localStorage.getItem("selectedColumns");let i=null;if(R!==null){const o=JSON.parse(R);i=I.filter(l=>o.includes(l.key)),i.sort(D)}const b=W(i||[...I]);le(b,o=>{localStorage.setItem("selectedColumns",JSON.stringify(Object.values(I).filter(l=>o.includes(l)).map(l=>l.key))),o.sort(D)});function D(o,l){return $.findIndex(w=>w.id===o.key)-$.findIndex(w=>w.id===l.key)}const U=Ve(),a=C(()=>U.flows.map(o=>({label:o.display_name,value:o.name}))),y=W([]);Be(()=>{if(U.flows.length===0){U.fetchFlows().then(()=>{y.value=[...a.value]});return}y.value=[...a.value]});const g=W(!1);function N(){g.value=!0,Promise.all(h.value.map(o=>u.setTasksToGive(o.worker_id,y.value.map(l=>l.value)))).then(()=>{ne().add({title:"Tasks to give updated",description:"Tasks to give updated successfully"}),h.value=[]}).catch(()=>{ne().add({title:"Failed to update tasks to give",description:"Try again"})}).finally(()=>{g.value=!1,u.loadWorkers()})}const _=W(""),A=C(()=>u.$state.workers),Q=C(()=>A.value.filter(o=>Object.values(o).some(l=>String(l).toLowerCase().includes(_.value.toLowerCase()))));function G(o){return new Date().getTime()-new Date(o.last_seen).getTime()<=12e4?"Online":"Offline"}const h=W([]);return le(A,o=>{if(h.value.length>0){const l=h.value.map(w=>w.id);h.value=o.filter(w=>l.includes(w.id))}}),(o,l)=>{const w=me,E=pe,t=fe,d=x,B=Oe,H=$e,q=Ae,X=Ue,Y=Je,ee=Ce;return n(),L(ee,{class:"lg:h-dvh"},{default:m(()=>[r("div",Ke,[k(w,{links:T,class:"md:w-1/5"}),r("div",Qe,[l[6]||(l[6]=r("h2",{class:"mb-3 text-xl"},"Workers",-1)),r("div",qe,[r("div",Xe,[k(E,{modelValue:p(b),"onUpdate:modelValue":l[0]||(l[0]=s=>J(b)?b.value=s:null),class:"mr-3",options:p(I),multiple:""},null,8,["modelValue","options"]),k(t,{modelValue:p(_),"onUpdate:modelValue":l[1]||(l[1]=s=>J(_)?_.value=s:null),placeholder:"Filter workers..."},null,8,["modelValue"])]),p(h).length>=1?(n(),f("div",Ye,[k(E,{modelValue:p(y),"onUpdate:modelValue":l[2]||(l[2]=s=>J(y)?y.value=s:null),class:"mr-3 my-3 lg:mx-3 lg:my-0 w-full max-w-64",options:p(a),multiple:""},{label:m(()=>l[4]||(l[4]=[r("span",null,"Tasks to give",-1)])),_:1},8,["modelValue","options"]),k(B,{text:"Flows available for worker to get tasks"},{default:m(()=>[k(d,{icon:"i-heroicons-check-16-solid",variant:"outline",color:"cyan",size:"sm",loading:p(g),onClick:N},{default:m(()=>l[5]||(l[5]=[S(" Update tasks to give ")])),_:1},8,["loading"])]),_:1})])):V("",!0)]),k(Y,{modelValue:p(h),"onUpdate:modelValue":l[3]||(l[3]=s=>J(h)?h.value=s:null),columns:p(b),rows:p(_)===""?p(A):p(Q),loading:p(u).$state.loading},{"worker_status-data":m(({row:s})=>[k(H,{variant:"solid",color:G(s)==="Online"?"green":"red"},{default:m(()=>[S(v(G(s)),1)]),_:2},1032,["color"])]),"tasks_to_give-data":m(({row:s})=>[s.tasks_to_give.length===0?(n(),f("span",Ze,"All")):(n(),L(X,{key:1,popper:{placement:"bottom"}},{panel:m(()=>[r("div",xe,[(n(!0),f(z,null,K(s.tasks_to_give,P=>(n(),L(H,{key:P,class:"mr-2 mb-2",variant:"solid",color:"cyan"},{default:m(()=>[k(q,{class:"hover:underline",to:`/workflows/${P}`},{default:m(()=>[S(v(P),1)]),_:2},1032,["to"])]),_:2},1024))),128))])]),default:m(()=>[k(d,{icon:"i-heroicons-list-bullet-16-solid",variant:"outline",color:"gray",size:"sm"},{default:m(()=>[r("span",null,v(s.tasks_to_give.length)+" selected",1)]),_:2},1024)]),_:2},1024))]),"last_seen-data":m(({row:s})=>[S(v(new Date(s.last_seen).toLocaleString()),1)]),"vram_total-data":m(({row:s})=>[S(v(("formatBytes"in o?o.formatBytes:p(F))(s.vram_total)),1)]),"vram_free-data":m(({row:s})=>[S(v(("formatBytes"in o?o.formatBytes:p(F))(s.vram_free)),1)]),"torch_vram_total-data":m(({row:s})=>[S(v(("formatBytes"in o?o.formatBytes:p(F))(s.torch_vram_total)),1)]),"torch_vram_free-data":m(({row:s})=>[S(v(("formatBytes"in o?o.formatBytes:p(F))(s.torch_vram_free)),1)]),"ram_total-data":m(({row:s})=>[S(v(("formatBytes"in o?o.formatBytes:p(F))(s.ram_total)),1)]),"ram_free-data":m(({row:s})=>[S(v(("formatBytes"in o?o.formatBytes:p(F))(s.ram_free)),1)]),_:1},8,["modelValue","columns","rows","loading"])])])]),_:1})}}});export{lt as default};
