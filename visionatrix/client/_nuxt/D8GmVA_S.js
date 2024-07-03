import{_ as C,a as T,b as I}from"./C_6N4ztI.js";import{_ as z,a as L}from"./ChxkvuxE.js";import{g as j,h as N,o as s,c as i,b as a,w as c,a as n,i as _,j as F,d as x,t as g,k as t,F as y,r as S,l as W,m as q,n as A,u as D,q as M}from"./Dd5BwFVf.js";import"./BVk1dbK_.js";const O={class:"p-4 w-full md:w-6/12 lg:w-4/12 z-[10]"},P={class:"flex flex-grow justify-between"},E=["title"],H={class:"flex flex-col items-between text-sm"},G=["title"],J={class:"flex flex-row flex-wrap items-center mb-2"},K={class:"flex flex-row items-center"},Q=n("b",null,"Author:",-1),R=["href"],X={class:"flex flex-row items-center mb-2"},Y=["href"],Z={key:1},ee={class:"flex flex-row items-center"},te=n("b",null,"Tags:",-1),oe=j({__name:"ListItem",props:{flow:{type:Object,required:!0}},setup(o){const e=N();return(B,r)=>{const m=W,w=C,h=q,p=A,k=z;return s(),i("div",O,[a(k,{as:"div",class:"hover:shadow-md"},{header:c(()=>{var l,d,f,u;return[n("div",P,[n("h2",{class:"text-xl font-bold text-ellipsis flex items-center",title:(l=o.flow)==null?void 0:l.display_name},[(d=o.flow)!=null&&d.private?(s(),_(w,{key:0,text:"This flow is local, manually added"},{default:c(()=>[a(m,{name:"i-heroicons-lock-closed",class:"mr-2"})]),_:1})):F("",!0),x(" "+g((f=o.flow)==null?void 0:f.display_name),1)],8,E),t(e).isFlowInstalled((u=o.flow)==null?void 0:u.name)?(s(),_(w,{key:0,text:"Mark flow as favorite",popper:{placement:"top"},"open-delay":500},{default:c(()=>[a(h,{icon:t(e).isFlowFavorite(o.flow.name)?"i-heroicons-star-16-solid":"i-heroicons-star",variant:"outline",color:"yellow",onClick:r[0]||(r[0]=b=>t(e).markFlowFavorite(o.flow))},null,8,["icon"])]),_:1})):F("",!0)])]}),footer:c(()=>{var l;return[a(h,{to:`/workflows/${(l=o.flow)==null?void 0:l.name}`,icon:"i-heroicons-arrow-up-right-16-solid",class:"flex justify-center dark:bg-slate-500 bg-slate-500 dark:hover:bg-slate-700 hover:bg-slate-700 dark:text-white"},{default:c(()=>[x(" Open ")]),_:1},8,["to"])]}),default:c(()=>{var l,d,f,u,b,v,$,V;return[n("div",H,[n("p",{class:"text-md text-slate-400 truncate text-ellipsis mb-2",title:(l=o.flow)==null?void 0:l.description},g((d=o.flow)==null?void 0:d.description),9,G),n("p",J,[n("span",K,[a(m,{name:"i-heroicons-user-16-solid",class:"mr-1"}),Q,x("  ")]),n("a",{class:"hover:underline flex flex-row items-center",href:(f=o.flow)==null?void 0:f.homepage,rel:"noopener",target:"_blank"},g((u=o.flow)==null?void 0:u.author),9,R)]),n("p",X,[a(m,{name:"i-heroicons-document-text",class:"mr-1"}),(b=o.flow)!=null&&b.documentation?(s(),i("a",{key:0,class:"hover:underline",href:(v=o.flow)==null?void 0:v.documentation,rel:"noopener",target:"_blank"},"Documentation",8,Y)):(s(),i("span",Z,"No documentation"))]),n("p",ee,[a(m,{name:"i-heroicons-tag",class:"mr-1"}),te,x("  "),(($=o.flow)==null?void 0:$.tags.length)>0?(s(!0),i(y,{key:0},S((V=o.flow)==null?void 0:V.tags,U=>(s(),_(p,{key:U,label:U,color:"white",variant:"solid",class:"m-1"},null,8,["label"]))),128)):(s(),_(p,{key:1,label:"No tags",color:"white",variant:"solid",class:"m-1"}))])])]}),_:1})])}}}),se={class:"w-full sticky z-[100] top-1 flex flex-col md:flex-row justify-center items-center my-1"},le={key:0,class:"truncate"},ne={key:1},ae={class:"flex flex-wrap justify-center items-center mb-10"},ie={key:2,class:"text-center text-slate-500"},de=j({__name:"index",setup(o){D({title:"Workflows - Visionatrix",meta:[{name:"description",content:"Workflows - Visionatrix"}]});const e=N();return(B,r)=>{const m=T,w=I,h=L,p=oe,k=M;return s(),_(k,{class:"lg:h-dvh"},{default:c(()=>[t(e).$state.loading.flows_available||t(e).loading.flows_installed||t(e).$state.loading.tasks_history?(s(),_(m,{key:0})):t(e).flows.length>0?(s(),i(y,{key:1},[n("div",se,[a(w,{modelValue:t(e).$state.flows_tags_filter,"onUpdate:modelValue":r[0]||(r[0]=l=>t(e).$state.flows_tags_filter=l),class:"mb-1 md:mr-3 md:mb-0",options:t(e).flowsTags,multiple:"",searchable:""},{label:c(()=>[t(e).$state.flows_tags_filter.length>0?(s(),i("span",le,g(t(e).$state.flows_tags_filter.join(",")),1)):(s(),i("span",ne,"Select tags to filter"))]),_:1},8,["modelValue","options"]),a(h,{modelValue:t(e).$state.page,"onUpdate:modelValue":r[1]||(r[1]=l=>t(e).$state.page=l),"page-count":t(e).$state.pageSize,total:t(e).flows.length},null,8,["modelValue","page-count","total"])]),n("div",ae,[(s(!0),i(y,null,S(t(e).paginatedFlows,l=>(s(),_(p,{key:l.name,flow:l},null,8,["flow"]))),128))])],64)):(s(),i("p",ie," No flows available "))]),_:1})}}});export{de as default};
