import{A as S,B as f,_ as j,g as B,l as y,W as m,C as N,D as U,E as g,X as O,Y as p,o as r,c as t,a as C,K as n,F as A,J as b,t as L,i as l,L as u,j as o,n as _,V,Z as E,r as x,b as F,w as R,d as T,$ as W}from"./BQyYDYMr.js";const X={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},Y={wrapper:"relative",base:"group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",ring:"focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",padding:"px-2.5 py-1.5",width:"w-full",rounded:"rounded-md",font:"font-medium",size:"text-sm",active:"text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",label:"truncate relative",icon:{base:"flex-shrink-0 w-5 h-5 relative",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"2xs"},badge:{base:"flex-shrink-0 ml-auto relative rounded",color:"gray",variant:"solid",size:"xs"},divider:{wrapper:{base:"p-2"}}},v=S(f.ui.strategy,f.ui.divider,X),Z=B({components:{UIcon:y,UAvatar:m},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>v.default.size,validator(e){return Object.keys(v.border.size.horizontal).includes(e)||Object.keys(v.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:d}=N("divider",U(e,"ui"),v),c=g(()=>O(p(s.value.wrapper.base,s.value.wrapper[e.orientation]),e.class)),h=g(()=>p(s.value.container.base,s.value.container[e.orientation])),k=g(()=>p(s.value.border.base,s.value.border[e.orientation],s.value.border.size[e.orientation][e.size],s.value.border.type[e.type]));return{ui:s,attrs:d,wrapperClass:c,containerClass:h,borderClass:k}}});function q(e,s,d,c,h,k){const w=y,z=m;return r(),t("div",u({class:e.wrapperClass},e.attrs),[C("div",{class:n(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(r(),t(A,{key:0},[C("div",{class:n(e.containerClass)},[b(e.$slots,"default",{},()=>[e.label?(r(),t("span",{key:0,class:n(e.ui.label)},L(e.label),3)):e.icon?(r(),l(w,{key:1,name:e.icon,class:n(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(r(),l(z,u({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):o("",!0)])],2),C("div",{class:n(e.borderClass)},null,2)],64)):o("",!0)],16)}const D=j(Z,[["render",q]]),G=S(f.ui.strategy,f.ui.verticalNavigation,Y),H=B({components:{UIcon:y,UAvatar:m,UBadge:_,ULink:V,UDivider:D},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:d}=N("verticalNavigation",U(e,"ui"),G,U(e,"class")),c=g(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:s,attrs:d,sections:c,getULinkProps:E,twMerge:O,twJoin:p}}}),Q={key:0,class:"sr-only"};function ee(e,s,d,c,h,k){const w=m,z=y,I=_,J=V,K=D;return r(),t("nav",u({class:e.ui.wrapper},e.attrs),[(r(!0),t(A,null,x(e.sections,(M,$)=>(r(),t("ul",{key:`section${$}`},[(r(!0),t(A,null,x(M,(a,P)=>(r(),t("li",{key:`section${$}-${P}`},[F(J,u({ref_for:!0},e.getULinkProps(a),{class:[e.ui.base,e.ui.padding,e.ui.width,e.ui.ring,e.ui.rounded,e.ui.font,e.ui.size],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:a.click,onKeyup:s[0]||(s[0]=W(i=>i.target.blur(),["enter"]))}),{default:R(({isActive:i})=>[b(e.$slots,"avatar",{link:a,isActive:i},()=>[a.avatar?(r(),l(w,u({key:0,ref_for:!0},{size:e.ui.avatar.size,...a.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):o("",!0)]),b(e.$slots,"icon",{link:a,isActive:i},()=>[a.icon?(r(),l(z,{key:0,name:a.icon,class:n(e.twMerge(e.twJoin(e.ui.icon.base,i?e.ui.icon.active:e.ui.icon.inactive),a.iconClass))},null,8,["name","class"])):o("",!0)]),b(e.$slots,"default",{link:a,isActive:i},()=>[a.label?(r(),t("span",{key:0,class:n(e.twMerge(e.ui.label,a.labelClass))},[i?(r(),t("span",Q," Current page: ")):o("",!0),T(" "+L(a.label),1)],2)):o("",!0)]),b(e.$slots,"badge",{link:a,isActive:i},()=>[a.badge?(r(),l(I,u({key:0,ref_for:!0},{size:e.ui.badge.size,color:e.ui.badge.color,variant:e.ui.badge.variant,...typeof a.badge=="string"||typeof a.badge=="number"?{label:a.badge}:a.badge},{class:e.ui.badge.base}),null,16,["class"])):o("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])]))),128)),$<e.sections.length-1?(r(),l(K,{key:0,ui:e.ui.divider},null,8,["ui"])):o("",!0)]))),128))],16)}const re=j(H,[["render",ee]]);export{re as _};
