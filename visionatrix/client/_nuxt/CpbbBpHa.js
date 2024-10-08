import{_ as me}from"./pZXm_jt8.js";import{a as pe,_ as fe}from"./DiO0DTFX.js";import{y as ge,z as te,_ as ye,f as ie,k as ue,l as x,A as ve,B as oe,C,D as be,E as ae,x as W,G as Z,o as n,c as p,a as r,H as M,I as d,t as v,i as V,b as k,J as j,F as z,r as K,h as L,K as ke,d as S,L as se,u as he,M as we,N as Se,O as _e,n as le,g as Ve,P as Be,w as c,p as Ce,j as m,Q as J,R as F,v as ne,m as $e,S as Ue,T as Ae}from"./C1mV8gVh.js";import{a as de,_ as Oe}from"./NaNOyV1q.js";import{_ as ce}from"./0qQhUDMT.js";const Te={wrapper:"relative overflow-x-auto",base:"min-w-full table-fixed",divide:"divide-y divide-gray-300 dark:divide-gray-700",thead:"relative",tbody:"divide-y divide-gray-200 dark:divide-gray-800",caption:"sr-only",tr:{base:"",selected:"bg-gray-50 dark:bg-gray-800/50",active:"hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"},th:{base:"text-left rtl:text-right",padding:"px-4 py-3.5",color:"text-gray-900 dark:text-white",font:"font-semibold",size:"text-sm"},td:{base:"whitespace-nowrap",padding:"px-4 py-4",color:"text-gray-500 dark:text-gray-400",font:"",size:"text-sm"},checkbox:{padding:"ps-4"},loadingState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"},emptyState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"},expand:{icon:"transform transition-transform duration-200"},progress:{wrapper:"absolute inset-x-0 -bottom-[0.5px] p-0"},default:{sortAscIcon:"i-heroicons-bars-arrow-up-20-solid",sortDescIcon:"i-heroicons-bars-arrow-down-20-solid",sortButton:{icon:"i-heroicons-arrows-up-down-20-solid",trailing:!0,square:!0,color:"gray",variant:"ghost",class:"-m-1.5"},expandButton:{icon:"i-heroicons-chevron-down",color:"gray",variant:"ghost",size:"xs",class:"-my-1.5 align-middle"},checkbox:{color:"primary"},progress:{color:"primary",animation:"carousel"},loadingState:{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},emptyState:{icon:"i-heroicons-circle-stack-20-solid",label:"No items."}}};function Ie(e){return e?e[0].toUpperCase()+e.slice(1):""}const O=ge(te.ui.strategy,te.ui.table,Te);function Re(e,i){return e===i}function re(e,i,T){return e===i?0:T==="asc"?e<i?-1:1:e>i?-1:1}const De=ie({components:{UIcon:ue,UButton:x,UProgress:de,UCheckbox:ce},inheritAttrs:!1,props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>Re},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortMode:{type:String,default:"auto"},sortButton:{type:Object,default:()=>O.default.sortButton},sortAscIcon:{type:String,default:()=>O.default.sortAscIcon},sortDescIcon:{type:String,default:()=>O.default.sortDescIcon},expandButton:{type:Object,default:()=>O.default.expandButton},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>O.default.loadingState},emptyState:{type:Object,default:()=>O.default.emptyState},caption:{type:String,default:null},progress:{type:Object,default:()=>O.default.progress},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","update:sort"],setup(e,{emit:i,attrs:T}){const{ui:$,attrs:I}=ve("table",oe(e,"ui"),O,oe(e,"class")),R=C(()=>e.columns??Object.keys(e.rows[0]??{}).map(t=>({key:t,label:Ie(t),sortable:!1,class:void 0,sort:re}))),u=be(e,"sort",i,{passive:!0,defaultValue:ae({},e.sort,{column:null,direction:"asc"})}),b=W([]),D={column:u.value.column,direction:null},U=C(()=>{var B;if(!((B=u.value)!=null&&B.column)||e.sortMode==="manual")return e.rows;const{column:t,direction:y}=u.value;return e.rows.slice().sort((H,q)=>{var s;const X=Z(H,t),Y=Z(q,t);return(((s=R.value.find(P=>P.key===t))==null?void 0:s.sort)??re)(X,Y,y)})}),a=C({get(){return e.modelValue},set(t){i("update:modelValue",t)}}),g=C(()=>a.value&&a.value.length>0&&a.value.length<e.rows.length),f=C(()=>e.emptyState===null?null:{...$.value.default.emptyState,...e.emptyState}),N=C(()=>e.loadingState===null?null:{...$.value.default.loadingState,...e.loadingState});function _(t,y){if(typeof e.by=="string"){const B=e.by;return(t==null?void 0:t[B])===(y==null?void 0:y[B])}return e.by(t,y)}function A(t){return e.modelValue?a.value.some(y=>_(se(y),se(t))):!1}function Q(t){if(u.value.column===t.key){const y=!t.direction||t.direction==="asc"?"desc":"asc";u.value.direction===y?u.value=ae({},D,{column:null,direction:"asc"}):u.value={column:u.value.column,direction:u.value.direction==="asc"?"desc":"asc"}}else u.value={column:t.key,direction:t.direction||"asc"}}function G(t){T.onSelect&&T.onSelect(t)}function h(){e.rows.forEach(t=>{A(t)||a.value.push(t)})}function o(t){t?h():a.value=[]}function l(t,y,B=""){return Z(t,y,B)}function w(t){b.value.includes(t)?b.value=b.value.filter(y=>y!==t):b.value.push(t)}function E(t){if(t.sortable){if(u.value.column!==t.key)return"none";if(u.value.direction==="asc")return"ascending";if(u.value.direction==="desc")return"descending"}}return{ui:$,attrs:I,sort:u,columns:R,rows:U,selected:a,indeterminate:g,emptyState:f,loadingState:N,openedRows:b,isSelected:A,onSort:Q,onSelect:G,onChange:o,getRowData:l,toggleOpened:w,getAriaSort:E}}}),Me=["aria-sort"],je={key:1},Fe={key:0},We={key:0},Le=["colspan"],Ne={key:1},Pe=["colspan"],ze=["onClick"],Ge={key:0},Ee={colspan:"100%"};function He(e,i,T,$,I,R){const u=ce,b=x,D=de,U=ue;return n(),p("div",j({class:e.ui.wrapper},e.attrs),[r("table",{class:d([e.ui.base,e.ui.divide])},[e.$slots.caption||e.caption?M(e.$slots,"caption",{key:0},()=>[r("caption",{class:d(e.ui.caption)},v(e.caption),3)]):V("",!0),r("thead",{class:d(e.ui.thead)},[r("tr",{class:d(e.ui.tr.base)},[e.modelValue?(n(),p("th",{key:0,scope:"col",class:d(e.ui.checkbox.padding)},[k(u,j({"model-value":e.indeterminate||e.selected.length===e.rows.length,indeterminate:e.indeterminate},e.ui.default.checkbox,{"aria-label":"Select all",onChange:e.onChange}),null,16,["model-value","indeterminate","onChange"])],2)):V("",!0),e.$slots.expand?(n(),p("th",{key:1,scope:"col",class:d(e.ui.tr.base)},i[2]||(i[2]=[r("span",{class:"sr-only"},"Expand",-1)]),2)):V("",!0),(n(!0),p(z,null,K(e.columns,(a,g)=>(n(),p("th",{key:g,scope:"col",class:d([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,a.class]),"aria-sort":e.getAriaSort(a)},[M(e.$slots,`${a.key}-header`,{column:a,sort:e.sort,onSort:e.onSort},()=>[a.sortable?(n(),L(b,j({key:0,ref_for:!0},{...e.ui.default.sortButton||{},...e.sortButton},{icon:!e.sort.column||e.sort.column!==a.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:a[e.columnAttribute],onClick:f=>e.onSort(a)}),null,16,["icon","label","onClick"])):(n(),p("span",je,v(a[e.columnAttribute]),1))])],10,Me))),128))],2),e.loading&&e.progress?(n(),p("tr",Fe,[r("td",{colspan:0,class:d(e.ui.progress.wrapper)},[k(D,j({...e.ui.default.progress||{},...e.progress},{size:"2xs"}),null,16)],2)])):V("",!0)],2),r("tbody",{class:d(e.ui.tbody)},[e.loadingState&&e.loading&&!e.rows.length?(n(),p("tr",We,[r("td",{colspan:e.columns.length+(e.modelValue?1:0)},[M(e.$slots,"loading-state",{},()=>[r("div",{class:d(e.ui.loadingState.wrapper)},[e.loadingState.icon?(n(),L(U,{key:0,name:e.loadingState.icon,class:d(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):V("",!0),r("p",{class:d(e.ui.loadingState.label)},v(e.loadingState.label),3)],2)])],8,Le)])):e.emptyState&&!e.rows.length?(n(),p("tr",Ne,[r("td",{colspan:e.columns.length+(e.modelValue?1:0)},[M(e.$slots,"empty-state",{},()=>[r("div",{class:d(e.ui.emptyState.wrapper)},[e.emptyState.icon?(n(),L(U,{key:0,name:e.emptyState.icon,class:d(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):V("",!0),r("p",{class:d(e.ui.emptyState.label)},v(e.emptyState.label),3)],2)])],8,Pe)])):(n(!0),p(z,{key:2},K(e.rows,(a,g)=>(n(),p(z,{key:g},[r("tr",{class:d([e.ui.tr.base,e.isSelected(a)&&e.ui.tr.selected,e.$attrs.onSelect&&e.ui.tr.active,a==null?void 0:a.class]),onClick:()=>e.onSelect(a)},[e.modelValue?(n(),p("td",{key:0,class:d(e.ui.checkbox.padding)},[k(u,j({modelValue:e.selected,"onUpdate:modelValue":i[0]||(i[0]=f=>e.selected=f),value:a,ref_for:!0},e.ui.default.checkbox,{"aria-label":"Select row",onClick:i[1]||(i[1]=ke(()=>{},["stop"]))}),null,16,["modelValue","value"])],2)):V("",!0),e.$slots.expand?(n(),p("td",{key:1,class:d([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size])},[k(b,j({ref_for:!0},{...e.ui.default.expandButton||{},...e.expandButton},{ui:{icon:{base:[e.ui.expand.icon,e.openedRows.includes(g)&&"rotate-180"]}},onClick:f=>e.toggleOpened(g)}),null,16,["ui","onClick"])],2)):V("",!0),(n(!0),p(z,null,K(e.columns,(f,N)=>{var _;return n(),p("td",{key:N,class:d([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size,f==null?void 0:f.rowClass,(_=a[f.key])==null?void 0:_.class])},[M(e.$slots,`${f.key}-data`,{column:f,row:a,index:g,getRowData:A=>e.getRowData(a,f.key,A)},()=>[S(v(e.getRowData(a,f.key)),1)])],2)}),128))],10,ze),e.openedRows.includes(g)?(n(),p("tr",Ge,[r("td",Ee,[M(e.$slots,"expand",{row:a,index:g})])])):V("",!0)],64))),128))],2)],2)],16)}const Je=ye(De,[["render",He]]),Ke={class:"flex flex-col md:flex-row"},Qe={class:"px-5 md:w-4/5"},qe={class:"flex flex-col lg:flex-row px-3 py-3.5 border-b border-gray-200 dark:border-gray-700"},Xe={class:"flex"},Ye={key:0,class:"flex flex-col md:flex-row items-center"},Ze={key:0},xe={class:"p-4 flex flex-wrap max-w-64 max-h-60 overflow-y-auto"},lt=ie({__name:"workers",setup(e){he({title:"Workers - Visionatrix",meta:[{name:"description",content:"Workers - Visionatrix"}]});const i=we();Se(()=>{i.startPolling()}),_e(()=>{i.stopPolling()});const T=[{label:"Settings",icon:"i-heroicons-cog-6-tooth-20-solid",to:"/settings"},{label:"Workers information",icon:"i-heroicons-chart-bar-16-solid",to:"/settings/workers"}],$=[{id:"worker_status",label:"Worker status",sortable:!0},{id:"id",label:"ID"},{id:"worker_id",label:"Worker ID"},{id:"worker_version",label:"Worker version",sortable:!0},{id:"last_seen",label:"Last seen",sortable:!0},{id:"tasks_to_give",label:"Tasks to give",sortable:!1},{id:"os",label:"OS",sortable:!0},{id:"version",label:"Python Version",sortable:!0},{id:"device_name",label:"Device name"},{id:"device_type",label:"Device type",sortable:!0},{id:"vram_total",label:"VRAM total",sortable:!0},{id:"vram_free",label:"VRAM free",sortable:!0},{id:"torch_vram_total",label:"Torch VRAM total",sortable:!0},{id:"torch_vram_free",label:"Torch VRAM free",sortable:!0},{id:"ram_total",label:"RAM total",sortable:!0},{id:"ram_free",label:"RAM free",sortable:!0}],I=$.map(o=>({key:o.id,label:o.label,sortable:o.sortable||!1,class:""})),R=localStorage.getItem("selectedColumns");let u=null;if(R!==null){const o=JSON.parse(R);u=I.filter(l=>o.includes(l.key)),u.sort(D)}const b=W(u||[...I]);le(b,o=>{localStorage.setItem("selectedColumns",JSON.stringify(Object.values(I).filter(l=>o.includes(l)).map(l=>l.key))),o.sort(D)});function D(o,l){return $.findIndex(w=>w.id===o.key)-$.findIndex(w=>w.id===l.key)}const U=Ve(),a=C(()=>U.flows.map(o=>({label:o.display_name,value:o.name}))),g=W([]);Be(()=>{if(U.flows.length===0){U.fetchFlows().then(()=>{g.value=[...a.value]});return}g.value=[...a.value]});const f=W(!1);function N(){f.value=!0,Promise.all(h.value.map(o=>i.setTasksToGive(o.worker_id,g.value.map(l=>l.value)))).then(()=>{ne().add({title:"Tasks to give updated",description:"Tasks to give updated successfully"}),h.value=[]}).catch(()=>{ne().add({title:"Failed to update tasks to give",description:"Try again"})}).finally(()=>{f.value=!1,i.loadWorkers()})}const _=W(""),A=C(()=>i.$state.workers),Q=C(()=>A.value.filter(o=>Object.values(o).some(l=>String(l).toLowerCase().includes(_.value.toLowerCase()))));function G(o){return new Date().getTime()-new Date(o.last_seen).getTime()<=12e4?"Online":"Offline"}const h=W([]);return le(A,o=>{if(h.value.length>0){const l=h.value.map(w=>w.id);h.value=o.filter(w=>l.includes(w.id))}}),(o,l)=>{const w=me,E=pe,t=fe,y=x,B=Oe,H=$e,q=Ae,X=Ue,Y=Je,ee=Ce;return n(),L(ee,{class:"lg:h-dvh"},{default:c(()=>[r("div",Ke,[k(w,{links:T,class:"md:w-1/5"}),r("div",Qe,[l[6]||(l[6]=r("h2",{class:"mb-3 text-xl"},"Workers",-1)),r("div",qe,[r("div",Xe,[k(E,{modelValue:m(b),"onUpdate:modelValue":l[0]||(l[0]=s=>J(b)?b.value=s:null),class:"mr-3",options:m(I),multiple:""},null,8,["modelValue","options"]),k(t,{modelValue:m(_),"onUpdate:modelValue":l[1]||(l[1]=s=>J(_)?_.value=s:null),placeholder:"Filter workers..."},null,8,["modelValue"])]),m(h).length>=1?(n(),p("div",Ye,[k(E,{modelValue:m(g),"onUpdate:modelValue":l[2]||(l[2]=s=>J(g)?g.value=s:null),class:"mr-3 my-3 lg:mx-3 lg:my-0 w-full max-w-64",options:m(a),multiple:""},{label:c(()=>l[4]||(l[4]=[r("span",null,"Tasks to give",-1)])),_:1},8,["modelValue","options"]),k(B,{text:"Flows available for worker to get tasks"},{default:c(()=>[k(y,{icon:"i-heroicons-check-16-solid",variant:"outline",color:"cyan",size:"sm",loading:m(f),onClick:N},{default:c(()=>l[5]||(l[5]=[S(" Update tasks to give ")])),_:1},8,["loading"])]),_:1})])):V("",!0)]),k(Y,{modelValue:m(h),"onUpdate:modelValue":l[3]||(l[3]=s=>J(h)?h.value=s:null),columns:m(b),rows:m(_)===""?m(A):m(Q),loading:m(i).$state.loading},{"worker_status-data":c(({row:s})=>[k(H,{variant:"solid",color:G(s)==="Online"?"green":"red"},{default:c(()=>[S(v(G(s)),1)]),_:2},1032,["color"])]),"tasks_to_give-data":c(({row:s})=>[s.tasks_to_give.length===0?(n(),p("span",Ze,"All")):(n(),L(X,{key:1,popper:{placement:"bottom"}},{panel:c(()=>[r("div",xe,[(n(!0),p(z,null,K(s.tasks_to_give,P=>(n(),L(H,{key:P,class:"mr-2 mb-2",variant:"solid",color:"cyan"},{default:c(()=>[k(q,{class:"hover:underline",to:`/workflows/${P}`},{default:c(()=>[S(v(P),1)]),_:2},1032,["to"])]),_:2},1024))),128))])]),default:c(()=>[k(y,{icon:"i-heroicons-list-bullet-16-solid",variant:"outline",color:"gray",size:"sm"},{default:c(()=>[r("span",null,v(s.tasks_to_give.length)+" selected",1)]),_:2},1024)]),_:2},1024))]),"last_seen-data":c(({row:s})=>[S(v(new Date(s.last_seen).toLocaleString()),1)]),"vram_total-data":c(({row:s})=>[S(v(("formatBytes"in o?o.formatBytes:m(F))(s.vram_total)),1)]),"vram_free-data":c(({row:s})=>[S(v(("formatBytes"in o?o.formatBytes:m(F))(s.vram_free)),1)]),"torch_vram_total-data":c(({row:s})=>[S(v(("formatBytes"in o?o.formatBytes:m(F))(s.torch_vram_total)),1)]),"torch_vram_free-data":c(({row:s})=>[S(v(("formatBytes"in o?o.formatBytes:m(F))(s.torch_vram_free)),1)]),"ram_total-data":c(({row:s})=>[S(v(("formatBytes"in o?o.formatBytes:m(F))(s.ram_total)),1)]),"ram_free-data":c(({row:s})=>[S(v(("formatBytes"in o?o.formatBytes:m(F))(s.ram_free)),1)]),_:1},8,["modelValue","columns","rows","loading"])])])]),_:1})}}});export{lt as default};
