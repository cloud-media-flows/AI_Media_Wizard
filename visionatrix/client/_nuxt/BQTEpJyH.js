import{y as M,z as p,_ as U,f as J,A as R,B as O,ah as te,C as r,x as ie,aO as re,ag as ue,o as n,c as t,a as B,I as o,H as c,bg as $,J as m,F as f,d as C,t as y,i as k,bh as se,bi as oe,k as D,bj as de,V as ge,W as S,r as P,b as T,G as L}from"./rXSiPqFZ.js";import{g as ve}from"./BNRAIBT5.js";const ce={wrapper:"",inner:"",label:{wrapper:"flex content-center items-center justify-between",base:"block font-medium text-gray-700 dark:text-gray-200",required:"after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},container:"mt-1 relative",description:"text-gray-500 dark:text-gray-400",hint:"text-gray-500 dark:text-gray-400",help:"mt-2 text-gray-500 dark:text-gray-400",error:"mt-2 text-red-500 dark:text-red-400",default:{size:"sm"}},w=M(p.ui.strategy,p.ui.formGroup,ce),fe=J({inheritAttrs:!1,props:{name:{type:String,default:null},size:{type:String,default:null,validator(e){return Object.keys(w.size).includes(e)}},label:{type:String,default:null},description:{type:String,default:null},required:{type:Boolean,default:!1},help:{type:String,default:null},error:{type:[String,Boolean],default:null},hint:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},eagerValidation:{type:Boolean,default:!1}},setup(e){const{ui:s,attrs:h}=R("formGroup",O(e,"ui"),w,O(e,"class")),a=te("form-errors",null),I=r(()=>{var i,g;return e.error&&typeof e.error=="string"||typeof e.error=="boolean"?e.error:(g=(i=a==null?void 0:a.value)==null?void 0:i.find(u=>u.path===e.name))==null?void 0:g.message}),z=r(()=>s.value.size[e.size??w.default.size]),b=ie(re());return ue("form-group",{error:I,inputId:b,name:r(()=>e.name),size:r(()=>e.size),eagerValidation:r(()=>e.eagerValidation)}),{ui:s,attrs:h,inputId:b,size:z,error:I}}}),be=["for"];function me(e,s,h,a,I,z){return n(),t("div",m({class:e.ui.wrapper},e.attrs),[B("div",{class:o(e.ui.inner)},[e.label||e.$slots.label?(n(),t("div",{key:0,class:o([e.ui.label.wrapper,e.size])},[B("label",{for:e.inputId,class:o([e.ui.label.base,e.required?e.ui.label.required:""])},[e.$slots.label?c(e.$slots,"label",$(m({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(n(),t(f,{key:1},[C(y(e.label),1)],64))],10,be),e.hint||e.$slots.hint?(n(),t("span",{key:0,class:o([e.ui.hint])},[e.$slots.hint?c(e.$slots,"hint",$(m({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(n(),t(f,{key:1},[C(y(e.hint),1)],64))],2)):k("",!0)],2)):k("",!0),e.description||e.$slots.description?(n(),t("p",{key:1,class:o([e.ui.description,e.size])},[e.$slots.description?c(e.$slots,"description",$(m({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(n(),t(f,{key:1},[C(y(e.description),1)],64))],2)):k("",!0)],2),B("div",{class:o([e.label?e.ui.container:""])},[c(e.$slots,"default",$(se({error:e.error}))),typeof e.error=="string"&&e.error?(n(),t("p",{key:0,class:o([e.ui.error,e.size])},[e.$slots.error?c(e.$slots,"error",$(m({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(n(),t(f,{key:1},[C(y(e.error),1)],64))],2)):e.help||e.$slots.help?(n(),t("p",{key:1,class:o([e.ui.help,e.size])},[e.$slots.help?c(e.$slots,"help",$(m({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(n(),t(f,{key:1},[C(y(e.help),1)],64))],2)):k("",!0)],2)],16)}const Ce=U(fe,[["render",me]]),d=M(p.ui.strategy,p.ui.select,oe),ye=J({components:{UIcon:D},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>d.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>d.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},size:{type:String,default:null,validator(e){return Object.keys(d.size).includes(e)}},color:{type:String,default:()=>d.default.color,validator(e){return[...p.ui.colors,...Object.keys(d.color)].includes(e)}},variant:{type:String,default:()=>d.default.variant,validator(e){return[...Object.keys(d.variant),...Object.values(d.color).flatMap(s=>Object.keys(s))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:s,slots:h}){const{ui:a,attrs:I}=R("select",O(e,"ui"),d,O(e,"class")),{size:z,rounded:b}=de({ui:a,props:e}),{emitFormChange:i,inputId:g,color:u,size:N,name:H}=ve(e,d),v=r(()=>z.value??N.value),E=l=>{s("update:modelValue",l.target.value)},K=l=>{s("change",l.target.value),i()},Q=l=>L(l,e.valueAttribute,""),X=l=>L(l,e.optionAttribute,""),q=l=>["string","number","boolean"].includes(typeof l)?{[e.valueAttribute]:l,[e.optionAttribute]:l}:{...l,[e.valueAttribute]:Q(l),[e.optionAttribute]:X(l)},G=r(()=>e.options.map(l=>q(l))),W=r(()=>e.placeholder?[{[e.valueAttribute]:"",[e.optionAttribute]:e.placeholder,disabled:!0},...G.value]:G.value),Y=r(()=>{const l=q(e.modelValue),A=W.value.find(j=>j[e.valueAttribute]===l[e.valueAttribute]);return A?A[e.valueAttribute]:""}),Z=r(()=>{var A,j;const l=((j=(A=a.value.color)==null?void 0:A[u.value])==null?void 0:j[e.variant])||a.value.variant[e.variant];return ge(S(a.value.base,a.value.form,b.value,a.value.size[v.value],e.padded?a.value.padding[v.value]:"p-0",l==null?void 0:l.replaceAll("{color}",u.value),(V.value||h.leading)&&a.value.leading.padding[v.value],(F.value||h.trailing)&&a.value.trailing.padding[v.value]),e.placeholder&&!e.modelValue&&a.value.placeholder,e.selectClass)}),V=r(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),F=r(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),_=r(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),x=r(()=>e.loading&&!V.value?e.loadingIcon:e.trailingIcon||e.icon),ee=r(()=>S(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[v.value])),ae=r(()=>S(a.value.icon.base,u.value&&p.ui.colors.includes(u.value)&&a.value.icon.color.replaceAll("{color}",u.value),a.value.icon.size[v.value],e.loading&&a.value.icon.loading)),le=r(()=>S(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[v.value])),ne=r(()=>S(a.value.icon.base,u.value&&p.ui.colors.includes(u.value)&&a.value.icon.color.replaceAll("{color}",u.value),a.value.icon.size[v.value],e.loading&&!V.value&&a.value.icon.loading));return{ui:a,attrs:I,name:H,inputId:g,normalizedOptionsWithPlaceholder:W,normalizedValue:Y,isLeading:V,isTrailing:F,selectClass:Z,leadingIconName:_,leadingIconClass:ae,leadingWrapperIconClass:ee,trailingIconName:x,trailingIconClass:ne,trailingWrapperIconClass:le,onInput:E,onChange:K}}}),pe=["id","name","value","required","disabled"],he=["value","label"],Ie=["value","selected","disabled","textContent"],$e=["value","selected","disabled","textContent"];function ke(e,s,h,a,I,z){const b=D;return n(),t("div",{class:o(e.ui.wrapper)},[B("select",m({id:e.inputId,name:e.name,value:e.modelValue,required:e.required,disabled:e.disabled,class:e.selectClass},e.attrs,{onInput:s[0]||(s[0]=(...i)=>e.onInput&&e.onInput(...i)),onChange:s[1]||(s[1]=(...i)=>e.onChange&&e.onChange(...i))}),[(n(!0),t(f,null,P(e.normalizedOptionsWithPlaceholder,(i,g)=>(n(),t(f,null,[i.children?(n(),t("optgroup",{key:`${i[e.valueAttribute]}-optgroup-${g}`,value:i[e.valueAttribute],label:i[e.optionAttribute]},[(n(!0),t(f,null,P(i.children,(u,N)=>(n(),t("option",{key:`${u[e.valueAttribute]}-${g}-${N}`,value:u[e.valueAttribute],selected:u[e.valueAttribute]===e.normalizedValue,disabled:u.disabled,textContent:y(u[e.optionAttribute])},null,8,Ie))),128))],8,he)):(n(),t("option",{key:`${i[e.valueAttribute]}-${g}`,value:i[e.valueAttribute],selected:i[e.valueAttribute]===e.normalizedValue,disabled:i.disabled,textContent:y(i[e.optionAttribute])},null,8,$e))],64))),256))],16,pe),e.isLeading&&e.leadingIconName||e.$slots.leading?(n(),t("span",{key:0,class:o(e.leadingWrapperIconClass)},[c(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[T(b,{name:e.leadingIconName,class:o(e.leadingIconClass)},null,8,["name","class"])],!0)],2)):k("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(n(),t("span",{key:1,class:o(e.trailingWrapperIconClass)},[c(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[T(b,{name:e.trailingIconName,class:o(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])],!0)],2)):k("",!0)],2)}const Se=U(ye,[["render",ke],["__scopeId","data-v-9f80dc9e"]]);export{Ce as _,Se as a};
