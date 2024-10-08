import{_ as B,a as C}from"./CKiYCkfS.js";import{_ as I,a as T}from"./CO3-dXmr.js";import{_ as M,a as L}from"./DqtKSI6Q.js";import{g as F,h as N,o,c as i,b as c,w as m,a,i as _,j as $,d as x,t as w,k as t,F as b,r as j,l as W,m as q,n as A,u as D,q as O,s as P}from"./BQyYDYMr.js";const E={class:"p-4 w-full md:w-6/12 lg:w-4/12 z-[10]"},H={class:"flex flex-grow justify-between"},G=["title"],J={class:"flex flex-col items-between text-sm"},K=["title"],Q={class:"flex flex-row flex-wrap items-center mb-2"},R={class:"flex flex-row items-center"},X=a("b",null,"Author:",-1),Y=["href"],Z={class:"flex flex-row items-center mb-2"},ee=["href"],te={key:1},oe={class:"flex flex-row items-center"},se=a("b",null,"Tags:",-1),le=F({__name:"ListItem",props:{flow:{type:Object,required:!0}},setup(s){const e=N();return(z,r)=>{const f=W,p=B,h=q,g=A,k=M;return o(),i("div",E,[c(k,{as:"div",class:"hover:shadow-md"},{header:m(()=>{var n,l,d,u;return[a("div",H,[a("h2",{class:"text-xl font-bold text-ellipsis flex items-center",title:(n=s.flow)==null?void 0:n.display_name},[(l=s.flow)!=null&&l.private?(o(),_(p,{key:0,text:"This flow is local, manually added"},{default:m(()=>[c(f,{name:"i-heroicons-lock-closed",class:"mr-2"})]),_:1})):$("",!0),x(" "+w((d=s.flow)==null?void 0:d.display_name),1)],8,G),t(e).isFlowInstalled((u=s.flow)==null?void 0:u.name)?(o(),_(p,{key:0,text:"Mark flow as favorite",popper:{placement:"top"},"open-delay":500},{default:m(()=>[c(h,{icon:t(e).isFlowFavorite(s.flow.name)?"i-heroicons-star-16-solid":"i-heroicons-star",variant:"outline",color:"yellow",onClick:r[0]||(r[0]=y=>t(e).markFlowFavorite(s.flow))},null,8,["icon"])]),_:1})):$("",!0)])]}),footer:m(()=>{var n;return[c(h,{to:`/workflows/${(n=s.flow)==null?void 0:n.name}`,icon:"i-heroicons-arrow-up-right-16-solid",class:"flex justify-center dark:bg-slate-500 bg-slate-500 dark:hover:bg-slate-700 hover:bg-slate-700 dark:text-white"},{default:m(()=>[x(" Open ")]),_:1},8,["to"])]}),default:m(()=>{var n,l,d,u,y,v,V,S;return[a("div",J,[a("p",{class:"text-md text-slate-400 truncate text-ellipsis mb-2",title:(n=s.flow)==null?void 0:n.description},w((l=s.flow)==null?void 0:l.description),9,K),a("p",Q,[a("span",R,[c(f,{name:"i-heroicons-user-16-solid",class:"mr-1"}),X,x("  ")]),a("a",{class:"hover:underline flex flex-row items-center",href:(d=s.flow)==null?void 0:d.homepage,rel:"noopener",target:"_blank"},w((u=s.flow)==null?void 0:u.author),9,Y)]),a("p",Z,[c(f,{name:"i-heroicons-document-text",class:"mr-1"}),(y=s.flow)!=null&&y.documentation?(o(),i("a",{key:0,class:"hover:underline",href:(v=s.flow)==null?void 0:v.documentation,rel:"noopener",target:"_blank"},"Documentation",8,ee)):(o(),i("span",te,"No documentation"))]),a("p",oe,[c(f,{name:"i-heroicons-tag",class:"mr-1"}),se,x("  "),((V=s.flow)==null?void 0:V.tags.length)>0?(o(!0),i(b,{key:0},j((S=s.flow)==null?void 0:S.tags,U=>(o(),_(g,{key:U,label:U,color:"white",variant:"solid",class:"m-1"},null,8,["label"]))),128)):(o(),_(g,{key:1,label:"No tags",color:"white",variant:"solid",class:"m-1"}))])])]}),_:1})])}}}),ae={class:"w-full sticky z-[100] top-1 flex flex-col md:flex-row justify-center items-center my-1"},ne={key:0,class:"truncate"},ie={key:1},re={key:0,class:"flex flex-wrap justify-center items-center mb-10"},ce={key:1,class:"text-center text-slate-500 my-5"},ue=F({__name:"index",setup(s){D({title:"Workflows - Visionatrix",meta:[{name:"description",content:"Workflows - Visionatrix"}]});const e=N();return O(()=>e.paginatedFlows,()=>{e.flows.length<=e.$state.pageSize?e.$state.page=1:e.$state.page>Math.ceil(e.flows.length/e.$state.pageSize)&&(e.$state.page=Math.ceil(e.flows.length/e.$state.pageSize))}),(z,r)=>{const f=C,p=I,h=L,g=T,k=le,n=P;return o(),_(n,{class:"lg:h-dvh"},{default:m(()=>[t(e).$state.loading.flows_available||t(e).loading.flows_installed||t(e).$state.loading.tasks_history?(o(),_(f,{key:0})):(o(),i(b,{key:1},[a("div",ae,[c(p,{modelValue:t(e).$state.flows_search_filter,"onUpdate:modelValue":r[0]||(r[0]=l=>t(e).$state.flows_search_filter=l),icon:"i-heroicons-magnifying-glass-20-solid",color:"white",class:"mb-1 md:mr-3 md:mb-0",label:"Filter by prompt",trailing:!0,placeholder:"Search flows"},null,8,["modelValue"]),t(e).flows.length>t(e).$state.pageSize?(o(),_(h,{key:0,modelValue:t(e).$state.page,"onUpdate:modelValue":r[1]||(r[1]=l=>t(e).$state.page=l),class:"mb-1 md:mr-3 md:mb-0","page-count":t(e).$state.pageSize,total:t(e).flows.length},null,8,["modelValue","page-count","total"])):$("",!0),c(g,{modelValue:t(e).$state.flows_tags_filter,"onUpdate:modelValue":r[2]||(r[2]=l=>t(e).$state.flows_tags_filter=l),options:t(e).flowsTags,multiple:"",searchable:""},{label:m(()=>[t(e).$state.flows_tags_filter.length>0?(o(),i("span",ne,w(t(e).$state.flows_tags_filter.join(",")),1)):(o(),i("span",ie,"Select tags to filter"))]),_:1},8,["modelValue","options"])]),t(e).flows.length>0?(o(),i("div",re,[(o(!0),i(b,null,j(t(e).paginatedFlows,l=>(o(),_(k,{key:l.name,flow:l},null,8,["flow"]))),128))])):(o(),i("p",ce,w(t(e).$state.flows_search_filter||t(e).$state.flows_tags_filter?"No flows found":"No flows available"),1))],64))]),_:1})}}});export{ue as default};
