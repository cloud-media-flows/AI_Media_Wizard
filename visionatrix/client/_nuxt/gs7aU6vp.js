import{_ as C,o as r,c as u,s as v,d,t as k,v as w,f as M,y as j,A as D,B as p,z as $,K as z,D as B,C as N,q as l,b as V,w as h,a as g,l as y,F as E,r as L,i as U,ar as K,bk as F,U as J,au as P,J as q,bl as H}from"./CmwA6g_f.js";const I={base:"inline-flex items-center justify-center text-gray-900 dark:text-white",padding:"px-1",size:{xs:"h-4 min-w-[16px] text-[10px]",sm:"h-5 min-w-[20px] text-[11px]",md:"h-6 min-w-[24px] text-[12px]"},rounded:"rounded",font:"font-medium font-sans",background:"bg-gray-100 dark:bg-gray-800",ring:"ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",default:{size:"sm"}},m=D(p.ui.strategy,p.ui.kbd,I),R=M({inheritAttrs:!1,props:{value:{type:String,default:null},size:{type:String,default:()=>m.default.size,validator(e){return Object.keys(m.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:i}=j("kbd",$(e,"ui"),m),o=z(()=>B(N(t.value.base,t.value.size[e.size],t.value.padding,t.value.rounded,t.value.font,t.value.background,t.value.ring),e.class));return{ui:t,attrs:i,kbdClass:o}}});function G(e,t,i,o,f,c){return r(),u("kbd",w({class:e.kbdClass},e.attrs),[v(e.$slots,"default",{},()=>[d(k(e.value),1)])],16)}const S=C(R,[["render",G]]),b=D(p.ui.strategy,p.ui.tooltip,F),Q=M({components:{UKbd:S},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:()=>b.default.openDelay},closeDelay:{type:Number,default:()=>b.default.closeDelay},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:i}=j("tooltip",$(e,"ui"),b,$(e,"class")),o=z(()=>J({},e.popper,t.value.popper)),[f,c]=P(o.value),n=q(!1);let s=null,a=null;const T=z(()=>!!(H().text||e.text));function O(){a&&(clearTimeout(a),a=null),!n.value&&(s=s||setTimeout(()=>{n.value=!0,s=null},e.openDelay))}function A(){s&&(clearTimeout(s),s=null),n.value&&(a=a||setTimeout(()=>{n.value=!1,a=null},e.closeDelay))}return{ui:t,attrs:i,popper:o,trigger:f,container:c,open:n,onMouseEnter:O,onMouseLeave:A,isVisible:T}}});function W(e,t,i,o,f,c){const n=S;return r(),u("div",w({ref:"trigger",class:e.ui.wrapper},e.attrs,{onMouseenter:t[0]||(t[0]=(...s)=>e.onMouseEnter&&e.onMouseEnter(...s)),onMouseleave:t[1]||(t[1]=(...s)=>e.onMouseLeave&&e.onMouseLeave(...s))}),[v(e.$slots,"default",{open:e.open},()=>[t[2]||(t[2]=d(" Hover "))]),e.open&&!e.prevent&&e.isVisible?(r(),u("div",{key:0,ref:"container",class:l([e.ui.container,e.ui.width])},[V(K,w({appear:""},e.ui.transition),{default:h(()=>{var s;return[g("div",null,[e.popper.arrow?(r(),u("div",{key:0,"data-popper-arrow":"",class:l(Object.values(e.ui.arrow))},null,2)):y("",!0),g("div",{class:l([e.ui.base,e.ui.background,e.ui.color,e.ui.rounded,e.ui.shadow,e.ui.ring])},[v(e.$slots,"text",{},()=>[d(k(e.text),1)]),(s=e.shortcuts)!=null&&s.length?(r(),u("span",{key:0,class:l(e.ui.shortcuts)},[g("span",{class:l(e.ui.middot)},"·",2),(r(!0),u(E,null,L(e.shortcuts,a=>(r(),U(n,{key:a,size:"xs"},{default:h(()=>[d(k(a),1)]),_:2},1024))),128))],2)):y("",!0)],2)])]}),_:3},16)],2)):y("",!0)],16)}const Y=C(Q,[["render",W]]);export{Y as _,S as a};
