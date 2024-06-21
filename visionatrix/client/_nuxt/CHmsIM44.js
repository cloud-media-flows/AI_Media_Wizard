import{y as P,z as k,b9 as D,_ as A,g as M,l as S,A as G,B as O,C as h,o,c as $,J as b,j as y,I as p,k as g,F as E,r as J,W as X,X as H,w as R,H as w,aN as K}from"./Ci5lPSp7.js";const Q={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},T={wrapper:"flex items-center -space-x-px",base:"",rounded:"first:rounded-s-md last:rounded-e-md",default:{size:"sm",activeButton:{color:"primary"},inactiveButton:{color:"white"},firstButton:{color:"white",class:"rtl:[&_span:first-child]:rotate-180",icon:"i-heroicons-chevron-double-left-20-solid"},lastButton:{color:"white",class:"rtl:[&_span:last-child]:rotate-180",icon:"i-heroicons-chevron-double-right-20-solid"},prevButton:{color:"white",class:"rtl:[&_span:first-child]:rotate-180",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"white",class:"rtl:[&_span:last-child]:rotate-180",icon:"i-heroicons-chevron-right-20-solid"}}},d=P(k.ui.strategy,k.ui.pagination,T),Y=P(k.ui.strategy,k.ui.button,D),Z=M({components:{UButton:S},inheritAttrs:!1,props:{modelValue:{type:Number,required:!0},pageCount:{type:Number,default:10},total:{type:Number,required:!0},max:{type:Number,default:7,validate(e){return e>=5&&e<Number.MAX_VALUE}},disabled:{type:Boolean,default:!1},size:{type:String,default:()=>d.default.size,validator(e){return Object.keys(Y.size).includes(e)}},activeButton:{type:Object,default:()=>d.default.activeButton},inactiveButton:{type:Object,default:()=>d.default.inactiveButton},showFirst:{type:Boolean,default:!1},showLast:{type:Boolean,default:!1},firstButton:{type:Object,default:()=>d.default.firstButton},lastButton:{type:Object,default:()=>d.default.lastButton},prevButton:{type:Object,default:()=>d.default.prevButton},nextButton:{type:Object,default:()=>d.default.nextButton},divider:{type:String,default:"…"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:s}){const{ui:m,attrs:B}=G("pagination",O(e,"ui"),d,O(e,"class")),n=h({get(){return e.modelValue},set(a){s("update:modelValue",a)}}),v=h(()=>Array.from({length:Math.ceil(e.total/e.pageCount)},(a,l)=>l+1)),c=h(()=>{const a=v.value.length,l=n.value,N=Math.max(e.max,5),u=Math.floor((Math.min(N,a)-5)/2),j=l-u,z=l+u,F=j-1>1,L=z+1<a,t=[];if(a<=N){for(let i=1;i<=a;i++)t.push(i);return t}if(t.push(1),F&&t.push(e.divider),!L){const i=l+u+2-a;for(let f=l-u-i;f<=l-u-1;f++)t.push(f)}for(let i=Math.max(2,j);i<=Math.min(a,z);i++)t.push(i);if(!F){const i=1-(l-u-2);for(let f=l+u+1;f<=l+u+i;f++)t.push(f)}return L&&t.push(e.divider),z<a&&t.push(a),t.length>=3&&t[1]===e.divider&&t[2]===3&&(t[1]=2),t.length>=3&&t[t.length-2]===e.divider&&t[t.length-1]===t.length&&(t[t.length-2]=t.length-1),t}),r=h(()=>n.value>1),C=h(()=>n.value<v.value.length);function V(){r.value&&(n.value=1)}function I(){C.value&&(n.value=v.value.length)}function U(a){typeof a!="string"&&(n.value=a)}function W(){r.value&&n.value--}function q(){C.value&&n.value++}return{ui:m,attrs:B,currentPage:n,pages:v,displayedPages:c,canGoLastOrNext:C,canGoFirstOrPrev:r,onClickPrev:W,onClickNext:q,onClickPage:U,onClickFirst:V,onClickLast:I}}});function _(e,s,m,B,n,v){const c=S;return o(),$("div",p({class:e.ui.wrapper},e.attrs),[b(e.$slots,"first",{onClick:e.onClickFirst},()=>[e.firstButton&&e.showFirst?(o(),y(c,p({key:0,size:e.size,disabled:!e.canGoFirstOrPrev||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.firstButton||{},...e.firstButton},{ui:{rounded:""},"aria-label":"First",onClick:e.onClickFirst}),null,16,["size","disabled","class","onClick"])):g("",!0)]),b(e.$slots,"prev",{onClick:e.onClickPrev},()=>[e.prevButton?(o(),y(c,p({key:0,size:e.size,disabled:!e.canGoFirstOrPrev||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.prevButton||{},...e.prevButton},{ui:{rounded:""},"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["size","disabled","class","onClick"])):g("",!0)]),(o(!0),$(E,null,J(e.displayedPages,(r,C)=>(o(),y(c,p({key:`${r}-${C}`,size:e.size,disabled:e.disabled,label:`${r}`,ref_for:!0},r===e.currentPage?{...e.ui.default.activeButton||{},...e.activeButton}:{...e.ui.default.inactiveButton||{},...e.inactiveButton},{class:[{"pointer-events-none":typeof r=="string","z-[1]":r===e.currentPage},e.ui.base,e.ui.rounded],ui:{rounded:""},onClick:()=>e.onClickPage(r)}),null,16,["size","disabled","label","class","onClick"]))),128)),b(e.$slots,"next",{onClick:e.onClickNext},()=>[e.nextButton?(o(),y(c,p({key:0,size:e.size,disabled:!e.canGoLastOrNext||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.nextButton||{},...e.nextButton},{ui:{rounded:""},"aria-label":"Next",onClick:e.onClickNext}),null,16,["size","disabled","class","onClick"])):g("",!0)]),b(e.$slots,"last",{onClick:e.onClickLast},()=>[e.lastButton&&e.showLast?(o(),y(c,p({key:0,size:e.size,disabled:!e.canGoLastOrNext||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.lastButton||{},...e.lastButton},{ui:{rounded:""},"aria-label":"Last",onClick:e.onClickLast}),null,16,["size","disabled","class","onClick"])):g("",!0)])],16)}const se=A(Z,[["render",_]]),x=P(k.ui.strategy,k.ui.card,Q),ee=M({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:m}=G("card",O(e,"ui"),x),B=h(()=>X(H(s.value.base,s.value.rounded,s.value.divide,s.value.ring,s.value.shadow,s.value.background),e.class));return{ui:s,attrs:m,cardClass:B}}});function te(e,s,m,B,n,v){return o(),y(K(e.$attrs.onSubmit?"form":e.as),p({class:e.cardClass},e.attrs),{default:R(()=>[e.$slots.header?(o(),$("div",{key:0,class:w([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[b(e.$slots,"header")],2)):g("",!0),e.$slots.default?(o(),$("div",{key:1,class:w([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[b(e.$slots,"default")],2)):g("",!0),e.$slots.footer?(o(),$("div",{key:2,class:w([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[b(e.$slots,"footer")],2)):g("",!0)]),_:3},16,["class"])}const ne=A(ee,[["render",te]]);export{ne as _,se as a};