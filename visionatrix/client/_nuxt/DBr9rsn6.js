import{_ as F}from"./DPGP-RdN.js";import{g as S,u as A,s as G,v as I,h as C,x as w,j as P,w as i,q as z,o as _,a as n,b as s,i as l,c as v,k as x,d as f,y as u,m as N,l as q}from"./EjWvrupd.js";import{_ as B}from"./CtfWt0OQ.js";import{_ as O}from"./C3GMve0h.js";import"./JPuN3IRV.js";const j={class:"flex flex-col md:flex-row"},E={class:"px-5 pb-5 md:w-4/5"},H=n("h2",{class:"mb-3 text-xl"},"Settings",-1),$={key:0,class:"admin-settings mb-3"},L=n("h3",{class:"mb-3"},"Admin settings",-1),R={class:"flex items-center"},T=n("p",{class:"text-amber-400"},[n("span",null,"Access tokens are required for "),n("a",{class:"hover:underline underline-offset-4",href:"https://visionatrix.github.io/VixFlowsDocs/GatedModels.html",target:"_blank"},"gated models"),f(". ")],-1),D={key:1,class:"upload-flow mb-5 py-4 rounded-md"},W=n("h3",{class:"mb-3 text-xl font-bold"},"Upload Flow",-1),J=n("p",{class:"text-gray-400 text-sm mb-3"}," Upload a Visionatrix workflow file (.json) to add it to the available flows. On successful upload of the valid workflow file, the installation will start automatically. ",-1),K={class:"flex items-center space-x-3"},Q={class:"user-settings mb-3"},X=n("h3",{class:"mb-3"},"User settings",-1),le=S({__name:"index",setup(Y){A({title:"Settings - Visionatrix",meta:[{name:"description",content:"Settings - Visionatrix"}]});const k=[{label:"Settings",icon:"i-heroicons-cog-6-tooth-20-solid",to:"/settings"},{label:"Workers information",icon:"i-heroicons-chart-bar-16-solid",to:"/settings/workers"}],p=G(),t=I();function y(){console.debug("Saving settings",t.settingsMap.value),Promise.all(Object.keys(t.settingsMap).map(o=>t.settingsMap[o].admin&&p.isAdmin?t.saveGlobalSetting(t.settingsMap[o].key,t.settingsMap[o].value,t.settingsMap[o].sensitive):t.saveUserSetting(t.settingsMap[o].key,t.settingsMap[o].value))).then(()=>{u().add({title:"Settings saved",description:"Settings saved successfully"})}).catch(o=>{u().add({title:"Error saving setting",description:o.message})})}const b=C(),m=w(null),g=w(!1);function V(){const o=m.value.$refs.input.files[0]||null;if(!o){u().add({title:"No file selected",description:"Please select a file to upload"});return}g.value=!0,b.uploadFlow(o).then(e=>{console.debug("uploadFlow",e);const r=u();if("error"in e&&(e==null?void 0:e.error)!==""){r.add({title:"Error uploading flow",description:e.error});return}else r.add({title:"Flow uploaded",description:"Flow uploaded successfully"});m.value.$refs.input.value=""}).catch(e=>{console.debug("uploadFlow error",e),u().add({title:"Error uploading flow",description:e.message})}).finally(()=>{g.value=!1})}return(o,e)=>{const r=F,U=N,d=B,c=O,h=q,M=z;return _(),P(M,{class:"lg:h-dvh"},{default:i(()=>[n("div",j,[s(r,{links:k,class:"md:w-1/5"}),n("div",E,[H,l(p).isAdmin?(_(),v("div",$,[L,n("div",R,[s(U,{name:"i-heroicons-question-mark-circle",class:"mr-2 text-amber-400"}),T]),s(c,{size:"md",class:"py-3",label:"Huggingface Auth token",description:"Bearer authentication token from your Huggingface account to allow downloading gated models with limited access"},{default:i(()=>[s(d,{modelValue:l(t).settingsMap.huggingface_auth_token.value,"onUpdate:modelValue":e[0]||(e[0]=a=>l(t).settingsMap.huggingface_auth_token.value=a),placeholder:"Huggingface Auth token",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md"},null,8,["modelValue"])]),_:1}),s(c,{size:"md",class:"py-3",label:"Gemini API key",description:"Global Gemini API key, required for Flows where ComfyUI-Gemini Node is used"},{default:i(()=>[s(d,{modelValue:l(t).settingsMap.gemini_token.value,"onUpdate:modelValue":e[1]||(e[1]=a=>l(t).settingsMap.gemini_token.value=a),placeholder:"Gemini API key",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md"},null,8,["modelValue"])]),_:1}),s(c,{size:"md",class:"py-3",label:"Proxy",description:"Proxy configuration string (to access Gemini)"},{default:i(()=>[s(d,{modelValue:l(t).settingsMap.proxy.value,"onUpdate:modelValue":e[2]||(e[2]=a=>l(t).settingsMap.proxy.value=a),placeholder:"Proxy",class:"w-full",type:"text",size:"md"},null,8,["modelValue"])]),_:1}),s(c,{size:"md",class:"py-3",label:"Ollama URL",description:"URL to server where Ollama is running, required for flows using node with it"},{default:i(()=>[s(d,{modelValue:l(t).settingsMap.ollama_url.value,"onUpdate:modelValue":e[3]||(e[3]=a=>l(t).settingsMap.ollama_url.value=a),placeholder:"Ollama URL",class:"w-full",type:"text",size:"md"},null,8,["modelValue"])]),_:1})])):x("",!0),l(p).isAdmin?(_(),v("div",D,[W,J,n("div",K,[s(d,{ref_key:"flowFileInput",ref:m,type:"file",accept:".json",class:"w-auto",onChange:o.handleFileUpload},null,8,["onChange"]),s(h,{icon:"i-heroicons-arrow-up-tray-16-solid",variant:"outline",loading:l(g),onClick:V},{default:i(()=>[f(" Upload Flow ")]),_:1},8,["loading"])])])):x("",!0),n("div",Q,[X,s(c,{size:"md",class:"py-3",label:"Gemini API key",description:"Gemini API key, required for Flows where ComfyUI-Gemini Node is used"},{default:i(()=>[s(d,{modelValue:l(t).settingsMap.gemini_token_user.value,"onUpdate:modelValue":e[4]||(e[4]=a=>l(t).settingsMap.gemini_token_user.value=a),placeholder:"Gemini API key",class:"w-full",type:"password",icon:"i-heroicons-shield-check",size:"md"},null,8,["modelValue"])]),_:1})]),s(h,{icon:"i-heroicons-check-16-solid",onClick:y},{default:i(()=>[f(" Save ")]),_:1})])])]),_:1})}}});export{le as default};
