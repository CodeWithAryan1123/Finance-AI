import{r as x,b as Ja,a as Ga}from"./vendor-92c95717.js";import{u as Xt,a as we,L as Ka,B as Xa,R as Zt,b as re,N as Qt}from"./router-38277efd.js";import{A as Y,m as j}from"./animations-6ca97e44.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var ea={exports:{}},We={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Za=x,Qa=Symbol.for("react.element"),er=Symbol.for("react.fragment"),tr=Object.prototype.hasOwnProperty,ar=Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rr={key:!0,ref:!0,__self:!0,__source:!0};function ta(t,a,r){var n,i={},o=null,s=null;r!==void 0&&(o=""+r),a.key!==void 0&&(o=""+a.key),a.ref!==void 0&&(s=a.ref);for(n in a)tr.call(a,n)&&!rr.hasOwnProperty(n)&&(i[n]=a[n]);if(t&&t.defaultProps)for(n in a=t.defaultProps,a)i[n]===void 0&&(i[n]=a[n]);return{$$typeof:Qa,type:t,key:o,ref:s,props:i,_owner:ar.current}}We.Fragment=er;We.jsx=ta;We.jsxs=ta;ea.exports=We;var e=ea.exports,pt={},Mt=Ja;pt.createRoot=Mt.createRoot,pt.hydrateRoot=Mt.hydrateRoot;let nr={data:""},ir=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||nr,sr=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,or=/\/\*[^]*?\*\/|  +/g,Dt=/\n+/g,ne=(t,a)=>{let r="",n="",i="";for(let o in t){let s=t[o];o[0]=="@"?o[1]=="i"?r=o+" "+s+";":n+=o[1]=="f"?ne(s,o):o+"{"+ne(s,o[1]=="k"?"":a)+"}":typeof s=="object"?n+=ne(s,a?a.replace(/([^,])+/g,c=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,c):c?c+" "+l:l)):o):s!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=ne.p?ne.p(o,s):o+":"+s+";")}return r+(a&&i?a+"{"+i+"}":i)+n},ee={},aa=t=>{if(typeof t=="object"){let a="";for(let r in t)a+=r+aa(t[r]);return a}return t},cr=(t,a,r,n,i)=>{let o=aa(t),s=ee[o]||(ee[o]=(l=>{let d=0,m=11;for(;d<l.length;)m=101*m+l.charCodeAt(d++)>>>0;return"go"+m})(o));if(!ee[s]){let l=o!==t?t:(d=>{let m,f,S=[{}];for(;m=sr.exec(d.replace(or,""));)m[4]?S.shift():m[3]?(f=m[3].replace(Dt," ").trim(),S.unshift(S[0][f]=S[0][f]||{})):S[0][m[1]]=m[2].replace(Dt," ").trim();return S[0]})(t);ee[s]=ne(i?{["@keyframes "+s]:l}:l,r?"":"."+s)}let c=r&&ee.g?ee.g:null;return r&&(ee.g=ee[s]),((l,d,m,f)=>{f?d.data=d.data.replace(f,l):d.data.indexOf(l)===-1&&(d.data=m?l+d.data:d.data+l)})(ee[s],a,n,c),s},lr=(t,a,r)=>t.reduce((n,i,o)=>{let s=a[o];if(s&&s.call){let c=s(r),l=c&&c.props&&c.props.className||/^go/.test(c)&&c;s=l?"."+l:c&&typeof c=="object"?c.props?"":ne(c,""):c===!1?"":c}return n+i+(s??"")},"");function Je(t){let a=this||{},r=t.call?t(a.p):t;return cr(r.unshift?r.raw?lr(r,[].slice.call(arguments,1),a.p):r.reduce((n,i)=>Object.assign(n,i&&i.call?i(a.p):i),{}):r,ir(a.target),a.g,a.o,a.k)}let ra,mt,ut;Je.bind({g:1});let ae=Je.bind({k:1});function dr(t,a,r,n){ne.p=a,ra=t,mt=r,ut=n}function ie(t,a){let r=this||{};return function(){let n=arguments;function i(o,s){let c=Object.assign({},o),l=c.className||i.className;r.p=Object.assign({theme:mt&&mt()},c),r.o=/ *go\d+/.test(l),c.className=Je.apply(r,n)+(l?" "+l:""),a&&(c.ref=s);let d=t;return t[0]&&(d=c.as||t,delete c.as),ut&&d[0]&&ut(c),ra(d,c)}return a?a(i):i}}var pr=t=>typeof t=="function",Ue=(t,a)=>pr(t)?t(a):t,mr=(()=>{let t=0;return()=>(++t).toString()})(),na=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let a=matchMedia("(prefers-reduced-motion: reduce)");t=!a||a.matches}return t}})(),ur=20,wt="default",ia=(t,a)=>{let{toastLimit:r}=t.settings;switch(a.type){case 0:return{...t,toasts:[a.toast,...t.toasts].slice(0,r)};case 1:return{...t,toasts:t.toasts.map(s=>s.id===a.toast.id?{...s,...a.toast}:s)};case 2:let{toast:n}=a;return ia(t,{type:t.toasts.find(s=>s.id===n.id)?1:0,toast:n});case 3:let{toastId:i}=a;return{...t,toasts:t.toasts.map(s=>s.id===i||i===void 0?{...s,dismissed:!0,visible:!1}:s)};case 4:return a.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==a.toastId)};case 5:return{...t,pausedAt:a.time};case 6:let o=a.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+o}))}}},Oe=[],sa={toasts:[],pausedAt:void 0,settings:{toastLimit:ur}},Q={},oa=(t,a=wt)=>{Q[a]=ia(Q[a]||sa,t),Oe.forEach(([r,n])=>{r===a&&n(Q[a])})},ca=t=>Object.keys(Q).forEach(a=>oa(t,a)),gr=t=>Object.keys(Q).find(a=>Q[a].toasts.some(r=>r.id===t)),Ge=(t=wt)=>a=>{oa(a,t)},hr={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},fr=(t={},a=wt)=>{let[r,n]=x.useState(Q[a]||sa),i=x.useRef(Q[a]);x.useEffect(()=>(i.current!==Q[a]&&n(Q[a]),Oe.push([a,n]),()=>{let s=Oe.findIndex(([c])=>c===a);s>-1&&Oe.splice(s,1)}),[a]);let o=r.toasts.map(s=>{var c,l,d;return{...t,...t[s.type],...s,removeDelay:s.removeDelay||((c=t[s.type])==null?void 0:c.removeDelay)||(t==null?void 0:t.removeDelay),duration:s.duration||((l=t[s.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||hr[s.type],style:{...t.style,...(d=t[s.type])==null?void 0:d.style,...s.style}}});return{...r,toasts:o}},xr=(t,a="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:a,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(r==null?void 0:r.id)||mr()}),ke=t=>(a,r)=>{let n=xr(a,t,r);return Ge(n.toasterId||gr(n.id))({type:2,toast:n}),n.id},_=(t,a)=>ke("blank")(t,a);_.error=ke("error");_.success=ke("success");_.loading=ke("loading");_.custom=ke("custom");_.dismiss=(t,a)=>{let r={type:3,toastId:t};a?Ge(a)(r):ca(r)};_.dismissAll=t=>_.dismiss(void 0,t);_.remove=(t,a)=>{let r={type:4,toastId:t};a?Ge(a)(r):ca(r)};_.removeAll=t=>_.remove(void 0,t);_.promise=(t,a,r)=>{let n=_.loading(a.loading,{...r,...r==null?void 0:r.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let o=a.success?Ue(a.success,i):void 0;return o?_.success(o,{id:n,...r,...r==null?void 0:r.success}):_.dismiss(n),i}).catch(i=>{let o=a.error?Ue(a.error,i):void 0;o?_.error(o,{id:n,...r,...r==null?void 0:r.error}):_.dismiss(n)}),t};var br=1e3,yr=(t,a="default")=>{let{toasts:r,pausedAt:n}=fr(t,a),i=x.useRef(new Map).current,o=x.useCallback((f,S=br)=>{if(i.has(f))return;let z=setTimeout(()=>{i.delete(f),s({type:4,toastId:f})},S);i.set(f,z)},[]);x.useEffect(()=>{if(n)return;let f=Date.now(),S=r.map(z=>{if(z.duration===1/0)return;let p=(z.duration||0)+z.pauseDuration-(f-z.createdAt);if(p<0){z.visible&&_.dismiss(z.id);return}return setTimeout(()=>_.dismiss(z.id,a),p)});return()=>{S.forEach(z=>z&&clearTimeout(z))}},[r,n,a]);let s=x.useCallback(Ge(a),[a]),c=x.useCallback(()=>{s({type:5,time:Date.now()})},[s]),l=x.useCallback((f,S)=>{s({type:1,toast:{id:f,height:S}})},[s]),d=x.useCallback(()=>{n&&s({type:6,time:Date.now()})},[n,s]),m=x.useCallback((f,S)=>{let{reverseOrder:z=!1,gutter:p=8,defaultPosition:h}=S||{},u=r.filter(T=>(T.position||h)===(f.position||h)&&T.height),w=u.findIndex(T=>T.id===f.id),b=u.filter((T,v)=>v<w&&T.visible).length;return u.filter(T=>T.visible).slice(...z?[b+1]:[0,b]).reduce((T,v)=>T+(v.height||0)+p,0)},[r]);return x.useEffect(()=>{r.forEach(f=>{if(f.dismissed)o(f.id,f.removeDelay);else{let S=i.get(f.id);S&&(clearTimeout(S),i.delete(f.id))}})},[r,o]),{toasts:r,handlers:{updateHeight:l,startPause:c,endPause:d,calculateOffset:m}}},vr=ae`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,jr=ae`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,wr=ae`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,kr=ie("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${vr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${jr} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${wr} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Nr=ae`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Sr=ie("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Nr} 1s linear infinite;
`,zr=ae`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ar=ae`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Er=ie("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${zr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ar} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Cr=ie("div")`
  position: absolute;
`,Tr=ie("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Rr=ae`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Mr=ie("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Rr} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Dr=({toast:t})=>{let{icon:a,type:r,iconTheme:n}=t;return a!==void 0?typeof a=="string"?x.createElement(Mr,null,a):a:r==="blank"?null:x.createElement(Tr,null,x.createElement(Sr,{...n}),r!=="loading"&&x.createElement(Cr,null,r==="error"?x.createElement(kr,{...n}):x.createElement(Er,{...n})))},Pr=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Or=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Ir="0%{opacity:0;} 100%{opacity:1;}",$r="0%{opacity:1;} 100%{opacity:0;}",Fr=ie("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Lr=ie("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Br=(t,a)=>{let r=t.includes("top")?1:-1,[n,i]=na()?[Ir,$r]:[Pr(r),Or(r)];return{animation:a?`${ae(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${ae(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ur=x.memo(({toast:t,position:a,style:r,children:n})=>{let i=t.height?Br(t.position||a||"top-center",t.visible):{opacity:0},o=x.createElement(Dr,{toast:t}),s=x.createElement(Lr,{...t.ariaProps},Ue(t.message,t));return x.createElement(Fr,{className:t.className,style:{...i,...r,...t.style}},typeof n=="function"?n({icon:o,message:s}):x.createElement(x.Fragment,null,o,s))});dr(x.createElement);var Hr=({id:t,className:a,style:r,onHeightUpdate:n,children:i})=>{let o=x.useCallback(s=>{if(s){let c=()=>{let l=s.getBoundingClientRect().height;n(t,l)};c(),new MutationObserver(c).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[t,n]);return x.createElement("div",{ref:o,className:a,style:r},i)},_r=(t,a)=>{let r=t.includes("top"),n=r?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:na()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${a*(r?1:-1)}px)`,...n,...i}},qr=Je`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ee=16,Yr=({reverseOrder:t,position:a="top-center",toastOptions:r,gutter:n,children:i,toasterId:o,containerStyle:s,containerClassName:c})=>{let{toasts:l,handlers:d}=yr(r,o);return x.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:Ee,left:Ee,right:Ee,bottom:Ee,pointerEvents:"none",...s},className:c,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(m=>{let f=m.position||a,S=d.calculateOffset(m,{reverseOrder:t,gutter:n,defaultPosition:a}),z=_r(f,S);return x.createElement(Hr,{id:m.id,key:m.id,onHeightUpdate:d.updateHeight,className:m.visible?qr:"",style:z},m.type==="custom"?Ue(m.message,m):i?i(m):x.createElement(Ur,{toast:m,position:f}))}))},$=_;const la=x.createContext(),Vr=()=>{const t=x.useContext(la);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},Wr=({children:t})=>{const[a,r]=x.useState("light");x.useEffect(()=>{const o=localStorage.getItem("theme");if(o)r(o);else{const s=window.matchMedia("(prefers-color-scheme: dark)").matches;r(s?"dark":"light")}},[]),x.useEffect(()=>{document.documentElement.setAttribute("data-theme",a),localStorage.setItem("theme",a)},[a]);const i={theme:a,setTheme:r,toggleTheme:()=>{r(o=>o==="light"?"dark":"light")},isDark:a==="dark"};return e.jsx(la.Provider,{value:i,children:t})},da=x.createContext(),Ke=()=>{const t=x.useContext(da);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},Jr=({children:t})=>{const[a,r]=x.useState(null),[n,i]=x.useState(null),[o,s]=x.useState(!1),[c,l]=x.useState(!0);x.useEffect(()=>{const z=localStorage.getItem("authToken"),p=localStorage.getItem("user");z&&p&&(i(z),r(JSON.parse(p)),s(!0)),l(!1)},[]);const S={user:a,token:n,isAuthenticated:o,loading:c,login:async z=>{try{const p={id:1,name:"Guest User",email:"guest@financeai.com",avatar:null},h="demo-token-"+Date.now();return r(p),i(h),s(!0),localStorage.setItem("authToken",h),localStorage.setItem("user",JSON.stringify(p)),{success:!0,user:p}}catch(p){return console.error("Login failed:",p),{success:!1,error:p.message}}},logout:()=>{r(null),i(null),s(!1),localStorage.removeItem("authToken"),localStorage.removeItem("user")},updateUser:z=>{r(z),localStorage.setItem("user",JSON.stringify(z))}};return e.jsx(da.Provider,{value:S,children:t})};function pa(t,a){return function(){return t.apply(a,arguments)}}const{toString:Gr}=Object.prototype,{getPrototypeOf:kt}=Object,{iterator:Xe,toStringTag:ma}=Symbol,Ze=(t=>a=>{const r=Gr.call(a);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),K=t=>(t=t.toLowerCase(),a=>Ze(a)===t),Qe=t=>a=>typeof a===t,{isArray:xe}=Array,ge=Qe("undefined");function Ne(t){return t!==null&&!ge(t)&&t.constructor!==null&&!ge(t.constructor)&&J(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const ua=K("ArrayBuffer");function Kr(t){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(t):a=t&&t.buffer&&ua(t.buffer),a}const Xr=Qe("string"),J=Qe("function"),ga=Qe("number"),Se=t=>t!==null&&typeof t=="object",Zr=t=>t===!0||t===!1,Ie=t=>{if(Ze(t)!=="object")return!1;const a=kt(t);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(ma in t)&&!(Xe in t)},Qr=t=>{if(!Se(t)||Ne(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},en=K("Date"),tn=K("File"),an=K("Blob"),rn=K("FileList"),nn=t=>Se(t)&&J(t.pipe),sn=t=>{let a;return t&&(typeof FormData=="function"&&t instanceof FormData||J(t.append)&&((a=Ze(t))==="formdata"||a==="object"&&J(t.toString)&&t.toString()==="[object FormData]"))},on=K("URLSearchParams"),[cn,ln,dn,pn]=["ReadableStream","Request","Response","Headers"].map(K),mn=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ze(t,a,{allOwnKeys:r=!1}={}){if(t===null||typeof t>"u")return;let n,i;if(typeof t!="object"&&(t=[t]),xe(t))for(n=0,i=t.length;n<i;n++)a.call(null,t[n],n,t);else{if(Ne(t))return;const o=r?Object.getOwnPropertyNames(t):Object.keys(t),s=o.length;let c;for(n=0;n<s;n++)c=o[n],a.call(null,t[c],c,t)}}function ha(t,a){if(Ne(t))return null;a=a.toLowerCase();const r=Object.keys(t);let n=r.length,i;for(;n-- >0;)if(i=r[n],a===i.toLowerCase())return i;return null}const ce=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),fa=t=>!ge(t)&&t!==ce;function gt(){const{caseless:t,skipUndefined:a}=fa(this)&&this||{},r={},n=(i,o)=>{const s=t&&ha(r,o)||o;Ie(r[s])&&Ie(i)?r[s]=gt(r[s],i):Ie(i)?r[s]=gt({},i):xe(i)?r[s]=i.slice():(!a||!ge(i))&&(r[s]=i)};for(let i=0,o=arguments.length;i<o;i++)arguments[i]&&ze(arguments[i],n);return r}const un=(t,a,r,{allOwnKeys:n}={})=>(ze(a,(i,o)=>{r&&J(i)?t[o]=pa(i,r):t[o]=i},{allOwnKeys:n}),t),gn=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),hn=(t,a,r,n)=>{t.prototype=Object.create(a.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:a.prototype}),r&&Object.assign(t.prototype,r)},fn=(t,a,r,n)=>{let i,o,s;const c={};if(a=a||{},t==null)return a;do{for(i=Object.getOwnPropertyNames(t),o=i.length;o-- >0;)s=i[o],(!n||n(s,t,a))&&!c[s]&&(a[s]=t[s],c[s]=!0);t=r!==!1&&kt(t)}while(t&&(!r||r(t,a))&&t!==Object.prototype);return a},xn=(t,a,r)=>{t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=a.length;const n=t.indexOf(a,r);return n!==-1&&n===r},bn=t=>{if(!t)return null;if(xe(t))return t;let a=t.length;if(!ga(a))return null;const r=new Array(a);for(;a-- >0;)r[a]=t[a];return r},yn=(t=>a=>t&&a instanceof t)(typeof Uint8Array<"u"&&kt(Uint8Array)),vn=(t,a)=>{const n=(t&&t[Xe]).call(t);let i;for(;(i=n.next())&&!i.done;){const o=i.value;a.call(t,o[0],o[1])}},jn=(t,a)=>{let r;const n=[];for(;(r=t.exec(a))!==null;)n.push(r);return n},wn=K("HTMLFormElement"),kn=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,i){return n.toUpperCase()+i}),Pt=(({hasOwnProperty:t})=>(a,r)=>t.call(a,r))(Object.prototype),Nn=K("RegExp"),xa=(t,a)=>{const r=Object.getOwnPropertyDescriptors(t),n={};ze(r,(i,o)=>{let s;(s=a(i,o,t))!==!1&&(n[o]=s||i)}),Object.defineProperties(t,n)},Sn=t=>{xa(t,(a,r)=>{if(J(t)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=t[r];if(J(n)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},zn=(t,a)=>{const r={},n=i=>{i.forEach(o=>{r[o]=!0})};return xe(t)?n(t):n(String(t).split(a)),r},An=()=>{},En=(t,a)=>t!=null&&Number.isFinite(t=+t)?t:a;function Cn(t){return!!(t&&J(t.append)&&t[ma]==="FormData"&&t[Xe])}const Tn=t=>{const a=new Array(10),r=(n,i)=>{if(Se(n)){if(a.indexOf(n)>=0)return;if(Ne(n))return n;if(!("toJSON"in n)){a[i]=n;const o=xe(n)?[]:{};return ze(n,(s,c)=>{const l=r(s,i+1);!ge(l)&&(o[c]=l)}),a[i]=void 0,o}}return n};return r(t,0)},Rn=K("AsyncFunction"),Mn=t=>t&&(Se(t)||J(t))&&J(t.then)&&J(t.catch),ba=((t,a)=>t?setImmediate:a?((r,n)=>(ce.addEventListener("message",({source:i,data:o})=>{i===ce&&o===r&&n.length&&n.shift()()},!1),i=>{n.push(i),ce.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",J(ce.postMessage)),Dn=typeof queueMicrotask<"u"?queueMicrotask.bind(ce):typeof process<"u"&&process.nextTick||ba,Pn=t=>t!=null&&J(t[Xe]),g={isArray:xe,isArrayBuffer:ua,isBuffer:Ne,isFormData:sn,isArrayBufferView:Kr,isString:Xr,isNumber:ga,isBoolean:Zr,isObject:Se,isPlainObject:Ie,isEmptyObject:Qr,isReadableStream:cn,isRequest:ln,isResponse:dn,isHeaders:pn,isUndefined:ge,isDate:en,isFile:tn,isBlob:an,isRegExp:Nn,isFunction:J,isStream:nn,isURLSearchParams:on,isTypedArray:yn,isFileList:rn,forEach:ze,merge:gt,extend:un,trim:mn,stripBOM:gn,inherits:hn,toFlatObject:fn,kindOf:Ze,kindOfTest:K,endsWith:xn,toArray:bn,forEachEntry:vn,matchAll:jn,isHTMLForm:wn,hasOwnProperty:Pt,hasOwnProp:Pt,reduceDescriptors:xa,freezeMethods:Sn,toObjectSet:zn,toCamelCase:kn,noop:An,toFiniteNumber:En,findKey:ha,global:ce,isContextDefined:fa,isSpecCompliantForm:Cn,toJSONObject:Tn,isAsyncFn:Rn,isThenable:Mn,setImmediate:ba,asap:Dn,isIterable:Pn};function I(t,a,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",a&&(this.code=a),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i,this.status=i.status?i.status:null)}g.inherits(I,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:g.toJSONObject(this.config),code:this.code,status:this.status}}});const ya=I.prototype,va={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{va[t]={value:t}});Object.defineProperties(I,va);Object.defineProperty(ya,"isAxiosError",{value:!0});I.from=(t,a,r,n,i,o)=>{const s=Object.create(ya);g.toFlatObject(t,s,function(m){return m!==Error.prototype},d=>d!=="isAxiosError");const c=t&&t.message?t.message:"Error",l=a==null&&t?t.code:a;return I.call(s,c,l,r,n,i),t&&s.cause==null&&Object.defineProperty(s,"cause",{value:t,configurable:!0}),s.name=t&&t.name||"Error",o&&Object.assign(s,o),s};const On=null;function ht(t){return g.isPlainObject(t)||g.isArray(t)}function ja(t){return g.endsWith(t,"[]")?t.slice(0,-2):t}function Ot(t,a,r){return t?t.concat(a).map(function(i,o){return i=ja(i),!r&&o?"["+i+"]":i}).join(r?".":""):a}function In(t){return g.isArray(t)&&!t.some(ht)}const $n=g.toFlatObject(g,{},null,function(a){return/^is[A-Z]/.test(a)});function et(t,a,r){if(!g.isObject(t))throw new TypeError("target must be an object");a=a||new FormData,r=g.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,u){return!g.isUndefined(u[h])});const n=r.metaTokens,i=r.visitor||m,o=r.dots,s=r.indexes,l=(r.Blob||typeof Blob<"u"&&Blob)&&g.isSpecCompliantForm(a);if(!g.isFunction(i))throw new TypeError("visitor must be a function");function d(p){if(p===null)return"";if(g.isDate(p))return p.toISOString();if(g.isBoolean(p))return p.toString();if(!l&&g.isBlob(p))throw new I("Blob is not supported. Use a Buffer instead.");return g.isArrayBuffer(p)||g.isTypedArray(p)?l&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function m(p,h,u){let w=p;if(p&&!u&&typeof p=="object"){if(g.endsWith(h,"{}"))h=n?h:h.slice(0,-2),p=JSON.stringify(p);else if(g.isArray(p)&&In(p)||(g.isFileList(p)||g.endsWith(h,"[]"))&&(w=g.toArray(p)))return h=ja(h),w.forEach(function(T,v){!(g.isUndefined(T)||T===null)&&a.append(s===!0?Ot([h],v,o):s===null?h:h+"[]",d(T))}),!1}return ht(p)?!0:(a.append(Ot(u,h,o),d(p)),!1)}const f=[],S=Object.assign($n,{defaultVisitor:m,convertValue:d,isVisitable:ht});function z(p,h){if(!g.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+h.join("."));f.push(p),g.forEach(p,function(w,b){(!(g.isUndefined(w)||w===null)&&i.call(a,w,g.isString(b)?b.trim():b,h,S))===!0&&z(w,h?h.concat(b):[b])}),f.pop()}}if(!g.isObject(t))throw new TypeError("data must be an object");return z(t),a}function It(t){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(n){return a[n]})}function Nt(t,a){this._pairs=[],t&&et(t,this,a)}const wa=Nt.prototype;wa.append=function(a,r){this._pairs.push([a,r])};wa.toString=function(a){const r=a?function(n){return a.call(this,n,It)}:It;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function Fn(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function ka(t,a,r){if(!a)return t;const n=r&&r.encode||Fn;g.isFunction(r)&&(r={serialize:r});const i=r&&r.serialize;let o;if(i?o=i(a,r):o=g.isURLSearchParams(a)?a.toString():new Nt(a,r).toString(n),o){const s=t.indexOf("#");s!==-1&&(t=t.slice(0,s)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class Ln{constructor(){this.handlers=[]}use(a,r,n){return this.handlers.push({fulfilled:a,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){g.forEach(this.handlers,function(n){n!==null&&a(n)})}}const $t=Ln,Na={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Bn=typeof URLSearchParams<"u"?URLSearchParams:Nt,Un=typeof FormData<"u"?FormData:null,Hn=typeof Blob<"u"?Blob:null,_n={isBrowser:!0,classes:{URLSearchParams:Bn,FormData:Un,Blob:Hn},protocols:["http","https","file","blob","url","data"]},St=typeof window<"u"&&typeof document<"u",ft=typeof navigator=="object"&&navigator||void 0,qn=St&&(!ft||["ReactNative","NativeScript","NS"].indexOf(ft.product)<0),Yn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Vn=St&&window.location.href||"http://localhost",Wn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:St,hasStandardBrowserEnv:qn,hasStandardBrowserWebWorkerEnv:Yn,navigator:ft,origin:Vn},Symbol.toStringTag,{value:"Module"})),V={...Wn,..._n};function Jn(t,a){return et(t,new V.classes.URLSearchParams,{visitor:function(r,n,i,o){return V.isNode&&g.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...a})}function Gn(t){return g.matchAll(/\w+|\[(\w*)]/g,t).map(a=>a[0]==="[]"?"":a[1]||a[0])}function Kn(t){const a={},r=Object.keys(t);let n;const i=r.length;let o;for(n=0;n<i;n++)o=r[n],a[o]=t[o];return a}function Sa(t){function a(r,n,i,o){let s=r[o++];if(s==="__proto__")return!0;const c=Number.isFinite(+s),l=o>=r.length;return s=!s&&g.isArray(i)?i.length:s,l?(g.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!c):((!i[s]||!g.isObject(i[s]))&&(i[s]=[]),a(r,n,i[s],o)&&g.isArray(i[s])&&(i[s]=Kn(i[s])),!c)}if(g.isFormData(t)&&g.isFunction(t.entries)){const r={};return g.forEachEntry(t,(n,i)=>{a(Gn(n),i,r,0)}),r}return null}function Xn(t,a,r){if(g.isString(t))try{return(a||JSON.parse)(t),g.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(t)}const zt={transitional:Na,adapter:["xhr","http","fetch"],transformRequest:[function(a,r){const n=r.getContentType()||"",i=n.indexOf("application/json")>-1,o=g.isObject(a);if(o&&g.isHTMLForm(a)&&(a=new FormData(a)),g.isFormData(a))return i?JSON.stringify(Sa(a)):a;if(g.isArrayBuffer(a)||g.isBuffer(a)||g.isStream(a)||g.isFile(a)||g.isBlob(a)||g.isReadableStream(a))return a;if(g.isArrayBufferView(a))return a.buffer;if(g.isURLSearchParams(a))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let c;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Jn(a,this.formSerializer).toString();if((c=g.isFileList(a))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return et(c?{"files[]":a}:a,l&&new l,this.formSerializer)}}return o||i?(r.setContentType("application/json",!1),Xn(a)):a}],transformResponse:[function(a){const r=this.transitional||zt.transitional,n=r&&r.forcedJSONParsing,i=this.responseType==="json";if(g.isResponse(a)||g.isReadableStream(a))return a;if(a&&g.isString(a)&&(n&&!this.responseType||i)){const s=!(r&&r.silentJSONParsing)&&i;try{return JSON.parse(a,this.parseReviver)}catch(c){if(s)throw c.name==="SyntaxError"?I.from(c,I.ERR_BAD_RESPONSE,this,null,this.response):c}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:V.classes.FormData,Blob:V.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};g.forEach(["delete","get","head","post","put","patch"],t=>{zt.headers[t]={}});const At=zt,Zn=g.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Qn=t=>{const a={};let r,n,i;return t&&t.split(`
`).forEach(function(s){i=s.indexOf(":"),r=s.substring(0,i).trim().toLowerCase(),n=s.substring(i+1).trim(),!(!r||a[r]&&Zn[r])&&(r==="set-cookie"?a[r]?a[r].push(n):a[r]=[n]:a[r]=a[r]?a[r]+", "+n:n)}),a},Ft=Symbol("internals");function ye(t){return t&&String(t).trim().toLowerCase()}function $e(t){return t===!1||t==null?t:g.isArray(t)?t.map($e):String(t)}function ei(t){const a=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(t);)a[n[1]]=n[2];return a}const ti=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ct(t,a,r,n,i){if(g.isFunction(n))return n.call(this,a,r);if(i&&(a=r),!!g.isString(a)){if(g.isString(n))return a.indexOf(n)!==-1;if(g.isRegExp(n))return n.test(a)}}function ai(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,r,n)=>r.toUpperCase()+n)}function ri(t,a){const r=g.toCamelCase(" "+a);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+r,{value:function(i,o,s){return this[n].call(this,a,i,o,s)},configurable:!0})})}class tt{constructor(a){a&&this.set(a)}set(a,r,n){const i=this;function o(c,l,d){const m=ye(l);if(!m)throw new Error("header name must be a non-empty string");const f=g.findKey(i,m);(!f||i[f]===void 0||d===!0||d===void 0&&i[f]!==!1)&&(i[f||l]=$e(c))}const s=(c,l)=>g.forEach(c,(d,m)=>o(d,m,l));if(g.isPlainObject(a)||a instanceof this.constructor)s(a,r);else if(g.isString(a)&&(a=a.trim())&&!ti(a))s(Qn(a),r);else if(g.isObject(a)&&g.isIterable(a)){let c={},l,d;for(const m of a){if(!g.isArray(m))throw TypeError("Object iterator must return a key-value pair");c[d=m[0]]=(l=c[d])?g.isArray(l)?[...l,m[1]]:[l,m[1]]:m[1]}s(c,r)}else a!=null&&o(r,a,n);return this}get(a,r){if(a=ye(a),a){const n=g.findKey(this,a);if(n){const i=this[n];if(!r)return i;if(r===!0)return ei(i);if(g.isFunction(r))return r.call(this,i,n);if(g.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,r){if(a=ye(a),a){const n=g.findKey(this,a);return!!(n&&this[n]!==void 0&&(!r||ct(this,this[n],n,r)))}return!1}delete(a,r){const n=this;let i=!1;function o(s){if(s=ye(s),s){const c=g.findKey(n,s);c&&(!r||ct(n,n[c],c,r))&&(delete n[c],i=!0)}}return g.isArray(a)?a.forEach(o):o(a),i}clear(a){const r=Object.keys(this);let n=r.length,i=!1;for(;n--;){const o=r[n];(!a||ct(this,this[o],o,a,!0))&&(delete this[o],i=!0)}return i}normalize(a){const r=this,n={};return g.forEach(this,(i,o)=>{const s=g.findKey(n,o);if(s){r[s]=$e(i),delete r[o];return}const c=a?ai(o):String(o).trim();c!==o&&delete r[o],r[c]=$e(i),n[c]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const r=Object.create(null);return g.forEach(this,(n,i)=>{n!=null&&n!==!1&&(r[i]=a&&g.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,r])=>a+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static concat(a,...r){const n=new this(a);return r.forEach(i=>n.set(i)),n}static accessor(a){const n=(this[Ft]=this[Ft]={accessors:{}}).accessors,i=this.prototype;function o(s){const c=ye(s);n[c]||(ri(i,s),n[c]=!0)}return g.isArray(a)?a.forEach(o):o(a),this}}tt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);g.reduceDescriptors(tt.prototype,({value:t},a)=>{let r=a[0].toUpperCase()+a.slice(1);return{get:()=>t,set(n){this[r]=n}}});g.freezeMethods(tt);const G=tt;function lt(t,a){const r=this||At,n=a||r,i=G.from(n.headers);let o=n.data;return g.forEach(t,function(c){o=c.call(r,o,i.normalize(),a?a.status:void 0)}),i.normalize(),o}function za(t){return!!(t&&t.__CANCEL__)}function be(t,a,r){I.call(this,t??"canceled",I.ERR_CANCELED,a,r),this.name="CanceledError"}g.inherits(be,I,{__CANCEL__:!0});function Aa(t,a,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?t(r):a(new I("Request failed with status code "+r.status,[I.ERR_BAD_REQUEST,I.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function ni(t){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return a&&a[1]||""}function ii(t,a){t=t||10;const r=new Array(t),n=new Array(t);let i=0,o=0,s;return a=a!==void 0?a:1e3,function(l){const d=Date.now(),m=n[o];s||(s=d),r[i]=l,n[i]=d;let f=o,S=0;for(;f!==i;)S+=r[f++],f=f%t;if(i=(i+1)%t,i===o&&(o=(o+1)%t),d-s<a)return;const z=m&&d-m;return z?Math.round(S*1e3/z):void 0}}function si(t,a){let r=0,n=1e3/a,i,o;const s=(d,m=Date.now())=>{r=m,i=null,o&&(clearTimeout(o),o=null),t(...d)};return[(...d)=>{const m=Date.now(),f=m-r;f>=n?s(d,m):(i=d,o||(o=setTimeout(()=>{o=null,s(i)},n-f)))},()=>i&&s(i)]}const He=(t,a,r=3)=>{let n=0;const i=ii(50,250);return si(o=>{const s=o.loaded,c=o.lengthComputable?o.total:void 0,l=s-n,d=i(l),m=s<=c;n=s;const f={loaded:s,total:c,progress:c?s/c:void 0,bytes:l,rate:d||void 0,estimated:d&&c&&m?(c-s)/d:void 0,event:o,lengthComputable:c!=null,[a?"download":"upload"]:!0};t(f)},r)},Lt=(t,a)=>{const r=t!=null;return[n=>a[0]({lengthComputable:r,total:t,loaded:n}),a[1]]},Bt=t=>(...a)=>g.asap(()=>t(...a)),oi=V.hasStandardBrowserEnv?((t,a)=>r=>(r=new URL(r,V.origin),t.protocol===r.protocol&&t.host===r.host&&(a||t.port===r.port)))(new URL(V.origin),V.navigator&&/(msie|trident)/i.test(V.navigator.userAgent)):()=>!0,ci=V.hasStandardBrowserEnv?{write(t,a,r,n,i,o){const s=[t+"="+encodeURIComponent(a)];g.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),g.isString(n)&&s.push("path="+n),g.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read(t){const a=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function li(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function di(t,a){return a?t.replace(/\/?\/$/,"")+"/"+a.replace(/^\/+/,""):t}function Ea(t,a,r){let n=!li(a);return t&&(n||r==!1)?di(t,a):a}const Ut=t=>t instanceof G?{...t}:t;function le(t,a){a=a||{};const r={};function n(d,m,f,S){return g.isPlainObject(d)&&g.isPlainObject(m)?g.merge.call({caseless:S},d,m):g.isPlainObject(m)?g.merge({},m):g.isArray(m)?m.slice():m}function i(d,m,f,S){if(g.isUndefined(m)){if(!g.isUndefined(d))return n(void 0,d,f,S)}else return n(d,m,f,S)}function o(d,m){if(!g.isUndefined(m))return n(void 0,m)}function s(d,m){if(g.isUndefined(m)){if(!g.isUndefined(d))return n(void 0,d)}else return n(void 0,m)}function c(d,m,f){if(f in a)return n(d,m);if(f in t)return n(void 0,d)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c,headers:(d,m,f)=>i(Ut(d),Ut(m),f,!0)};return g.forEach(Object.keys({...t,...a}),function(m){const f=l[m]||i,S=f(t[m],a[m],m);g.isUndefined(S)&&f!==c||(r[m]=S)}),r}const Ca=t=>{const a=le({},t);let{data:r,withXSRFToken:n,xsrfHeaderName:i,xsrfCookieName:o,headers:s,auth:c}=a;if(a.headers=s=G.from(s),a.url=ka(Ea(a.baseURL,a.url,a.allowAbsoluteUrls),t.params,t.paramsSerializer),c&&s.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),g.isFormData(r)){if(V.hasStandardBrowserEnv||V.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(g.isFunction(r.getHeaders)){const l=r.getHeaders(),d=["content-type","content-length"];Object.entries(l).forEach(([m,f])=>{d.includes(m.toLowerCase())&&s.set(m,f)})}}if(V.hasStandardBrowserEnv&&(n&&g.isFunction(n)&&(n=n(a)),n||n!==!1&&oi(a.url))){const l=i&&o&&ci.read(o);l&&s.set(i,l)}return a},pi=typeof XMLHttpRequest<"u",mi=pi&&function(t){return new Promise(function(r,n){const i=Ca(t);let o=i.data;const s=G.from(i.headers).normalize();let{responseType:c,onUploadProgress:l,onDownloadProgress:d}=i,m,f,S,z,p;function h(){z&&z(),p&&p(),i.cancelToken&&i.cancelToken.unsubscribe(m),i.signal&&i.signal.removeEventListener("abort",m)}let u=new XMLHttpRequest;u.open(i.method.toUpperCase(),i.url,!0),u.timeout=i.timeout;function w(){if(!u)return;const T=G.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),A={data:!c||c==="text"||c==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:T,config:t,request:u};Aa(function(C){r(C),h()},function(C){n(C),h()},A),u=null}"onloadend"in u?u.onloadend=w:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(w)},u.onabort=function(){u&&(n(new I("Request aborted",I.ECONNABORTED,t,u)),u=null)},u.onerror=function(v){const A=v&&v.message?v.message:"Network Error",k=new I(A,I.ERR_NETWORK,t,u);k.event=v||null,n(k),u=null},u.ontimeout=function(){let v=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const A=i.transitional||Na;i.timeoutErrorMessage&&(v=i.timeoutErrorMessage),n(new I(v,A.clarifyTimeoutError?I.ETIMEDOUT:I.ECONNABORTED,t,u)),u=null},o===void 0&&s.setContentType(null),"setRequestHeader"in u&&g.forEach(s.toJSON(),function(v,A){u.setRequestHeader(A,v)}),g.isUndefined(i.withCredentials)||(u.withCredentials=!!i.withCredentials),c&&c!=="json"&&(u.responseType=i.responseType),d&&([S,p]=He(d,!0),u.addEventListener("progress",S)),l&&u.upload&&([f,z]=He(l),u.upload.addEventListener("progress",f),u.upload.addEventListener("loadend",z)),(i.cancelToken||i.signal)&&(m=T=>{u&&(n(!T||T.type?new be(null,t,u):T),u.abort(),u=null)},i.cancelToken&&i.cancelToken.subscribe(m),i.signal&&(i.signal.aborted?m():i.signal.addEventListener("abort",m)));const b=ni(i.url);if(b&&V.protocols.indexOf(b)===-1){n(new I("Unsupported protocol "+b+":",I.ERR_BAD_REQUEST,t));return}u.send(o||null)})},ui=(t,a)=>{const{length:r}=t=t?t.filter(Boolean):[];if(a||r){let n=new AbortController,i;const o=function(d){if(!i){i=!0,c();const m=d instanceof Error?d:this.reason;n.abort(m instanceof I?m:new be(m instanceof Error?m.message:m))}};let s=a&&setTimeout(()=>{s=null,o(new I(`timeout ${a} of ms exceeded`,I.ETIMEDOUT))},a);const c=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(d=>{d.unsubscribe?d.unsubscribe(o):d.removeEventListener("abort",o)}),t=null)};t.forEach(d=>d.addEventListener("abort",o));const{signal:l}=n;return l.unsubscribe=()=>g.asap(c),l}},gi=ui,hi=function*(t,a){let r=t.byteLength;if(!a||r<a){yield t;return}let n=0,i;for(;n<r;)i=n+a,yield t.slice(n,i),n=i},fi=async function*(t,a){for await(const r of xi(t))yield*hi(r,a)},xi=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const a=t.getReader();try{for(;;){const{done:r,value:n}=await a.read();if(r)break;yield n}}finally{await a.cancel()}},Ht=(t,a,r,n)=>{const i=fi(t,a);let o=0,s,c=l=>{s||(s=!0,n&&n(l))};return new ReadableStream({async pull(l){try{const{done:d,value:m}=await i.next();if(d){c(),l.close();return}let f=m.byteLength;if(r){let S=o+=f;r(S)}l.enqueue(new Uint8Array(m))}catch(d){throw c(d),d}},cancel(l){return c(l),i.return()}},{highWaterMark:2})},_t=64*1024,{isFunction:Ce}=g,bi=(({Request:t,Response:a})=>({Request:t,Response:a}))(g.global),{ReadableStream:qt,TextEncoder:Yt}=g.global,Vt=(t,...a)=>{try{return!!t(...a)}catch{return!1}},yi=t=>{t=g.merge.call({skipUndefined:!0},bi,t);const{fetch:a,Request:r,Response:n}=t,i=a?Ce(a):typeof fetch=="function",o=Ce(r),s=Ce(n);if(!i)return!1;const c=i&&Ce(qt),l=i&&(typeof Yt=="function"?(p=>h=>p.encode(h))(new Yt):async p=>new Uint8Array(await new r(p).arrayBuffer())),d=o&&c&&Vt(()=>{let p=!1;const h=new r(V.origin,{body:new qt,method:"POST",get duplex(){return p=!0,"half"}}).headers.has("Content-Type");return p&&!h}),m=s&&c&&Vt(()=>g.isReadableStream(new n("").body)),f={stream:m&&(p=>p.body)};i&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!f[p]&&(f[p]=(h,u)=>{let w=h&&h[p];if(w)return w.call(h);throw new I(`Response type '${p}' is not supported`,I.ERR_NOT_SUPPORT,u)})});const S=async p=>{if(p==null)return 0;if(g.isBlob(p))return p.size;if(g.isSpecCompliantForm(p))return(await new r(V.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(g.isArrayBufferView(p)||g.isArrayBuffer(p))return p.byteLength;if(g.isURLSearchParams(p)&&(p=p+""),g.isString(p))return(await l(p)).byteLength},z=async(p,h)=>{const u=g.toFiniteNumber(p.getContentLength());return u??S(h)};return async p=>{let{url:h,method:u,data:w,signal:b,cancelToken:T,timeout:v,onDownloadProgress:A,onUploadProgress:k,responseType:C,headers:D,withCredentials:R="same-origin",fetchOptions:y}=Ca(p),N=a||fetch;C=C?(C+"").toLowerCase():"text";let O=gi([b,T&&T.toAbortSignal()],v),F=null;const W=O&&O.unsubscribe&&(()=>{O.unsubscribe()});let oe;try{if(k&&d&&u!=="get"&&u!=="head"&&(oe=await z(D,w))!==0){let q=new r(h,{method:"POST",body:w,duplex:"half"}),de;if(g.isFormData(w)&&(de=q.headers.get("content-type"))&&D.setContentType(de),q.body){const[ot,Ae]=Lt(oe,He(Bt(k)));w=Ht(q.body,_t,ot,Ae)}}g.isString(R)||(R=R?"include":"omit");const H=o&&"credentials"in r.prototype,E={...y,signal:O,method:u.toUpperCase(),headers:D.normalize().toJSON(),body:w,duplex:"half",credentials:H?R:void 0};F=o&&new r(h,E);let P=await(o?N(F,y):N(h,E));const B=m&&(C==="stream"||C==="response");if(m&&(A||B&&W)){const q={};["status","statusText","headers"].forEach(Rt=>{q[Rt]=P[Rt]});const de=g.toFiniteNumber(P.headers.get("content-length")),[ot,Ae]=A&&Lt(de,He(Bt(A),!0))||[];P=new n(Ht(P.body,_t,ot,()=>{Ae&&Ae(),W&&W()}),q)}C=C||"text";let X=await f[g.findKey(f,C)||"text"](P,p);return!B&&W&&W(),await new Promise((q,de)=>{Aa(q,de,{data:X,headers:G.from(P.headers),status:P.status,statusText:P.statusText,config:p,request:F})})}catch(H){throw W&&W(),H&&H.name==="TypeError"&&/Load failed|fetch/i.test(H.message)?Object.assign(new I("Network Error",I.ERR_NETWORK,p,F),{cause:H.cause||H}):I.from(H,H&&H.code,p,F)}}},vi=new Map,Ta=t=>{let a=t?t.env:{};const{fetch:r,Request:n,Response:i}=a,o=[n,i,r];let s=o.length,c=s,l,d,m=vi;for(;c--;)l=o[c],d=m.get(l),d===void 0&&m.set(l,d=c?new Map:yi(a)),m=d;return d};Ta();const xt={http:On,xhr:mi,fetch:{get:Ta}};g.forEach(xt,(t,a)=>{if(t){try{Object.defineProperty(t,"name",{value:a})}catch{}Object.defineProperty(t,"adapterName",{value:a})}});const Wt=t=>`- ${t}`,ji=t=>g.isFunction(t)||t===null||t===!1,Ra={getAdapter:(t,a)=>{t=g.isArray(t)?t:[t];const{length:r}=t;let n,i;const o={};for(let s=0;s<r;s++){n=t[s];let c;if(i=n,!ji(n)&&(i=xt[(c=String(n)).toLowerCase()],i===void 0))throw new I(`Unknown adapter '${c}'`);if(i&&(g.isFunction(i)||(i=i.get(a))))break;o[c||"#"+s]=i}if(!i){const s=Object.entries(o).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let c=r?s.length>1?`since :
`+s.map(Wt).join(`
`):" "+Wt(s[0]):"as no adapter specified";throw new I("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return i},adapters:xt};function dt(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new be(null,t)}function Jt(t){return dt(t),t.headers=G.from(t.headers),t.data=lt.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Ra.getAdapter(t.adapter||At.adapter,t)(t).then(function(n){return dt(t),n.data=lt.call(t,t.transformResponse,n),n.headers=G.from(n.headers),n},function(n){return za(n)||(dt(t),n&&n.response&&(n.response.data=lt.call(t,t.transformResponse,n.response),n.response.headers=G.from(n.response.headers))),Promise.reject(n)})}const Ma="1.12.2",at={};["object","boolean","number","function","string","symbol"].forEach((t,a)=>{at[t]=function(n){return typeof n===t||"a"+(a<1?"n ":" ")+t}});const Gt={};at.transitional=function(a,r,n){function i(o,s){return"[Axios v"+Ma+"] Transitional option '"+o+"'"+s+(n?". "+n:"")}return(o,s,c)=>{if(a===!1)throw new I(i(s," has been removed"+(r?" in "+r:"")),I.ERR_DEPRECATED);return r&&!Gt[s]&&(Gt[s]=!0,console.warn(i(s," has been deprecated since v"+r+" and will be removed in the near future"))),a?a(o,s,c):!0}};at.spelling=function(a){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${a}`),!0)};function wi(t,a,r){if(typeof t!="object")throw new I("options must be an object",I.ERR_BAD_OPTION_VALUE);const n=Object.keys(t);let i=n.length;for(;i-- >0;){const o=n[i],s=a[o];if(s){const c=t[o],l=c===void 0||s(c,o,t);if(l!==!0)throw new I("option "+o+" must be "+l,I.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new I("Unknown option "+o,I.ERR_BAD_OPTION)}}const Fe={assertOptions:wi,validators:at},Z=Fe.validators;class _e{constructor(a){this.defaults=a||{},this.interceptors={request:new $t,response:new $t}}async request(a,r){try{return await this._request(a,r)}catch(n){if(n instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const o=i.stack?i.stack.replace(/^.+\n/,""):"";try{n.stack?o&&!String(n.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+o):n.stack=o}catch{}}throw n}}_request(a,r){typeof a=="string"?(r=r||{},r.url=a):r=a||{},r=le(this.defaults,r);const{transitional:n,paramsSerializer:i,headers:o}=r;n!==void 0&&Fe.assertOptions(n,{silentJSONParsing:Z.transitional(Z.boolean),forcedJSONParsing:Z.transitional(Z.boolean),clarifyTimeoutError:Z.transitional(Z.boolean)},!1),i!=null&&(g.isFunction(i)?r.paramsSerializer={serialize:i}:Fe.assertOptions(i,{encode:Z.function,serialize:Z.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Fe.assertOptions(r,{baseUrl:Z.spelling("baseURL"),withXsrfToken:Z.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s=o&&g.merge(o.common,o[r.method]);o&&g.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),r.headers=G.concat(s,o);const c=[];let l=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(r)===!1||(l=l&&h.synchronous,c.unshift(h.fulfilled,h.rejected))});const d=[];this.interceptors.response.forEach(function(h){d.push(h.fulfilled,h.rejected)});let m,f=0,S;if(!l){const p=[Jt.bind(this),void 0];for(p.unshift(...c),p.push(...d),S=p.length,m=Promise.resolve(r);f<S;)m=m.then(p[f++],p[f++]);return m}S=c.length;let z=r;for(;f<S;){const p=c[f++],h=c[f++];try{z=p(z)}catch(u){h.call(this,u);break}}try{m=Jt.call(this,z)}catch(p){return Promise.reject(p)}for(f=0,S=d.length;f<S;)m=m.then(d[f++],d[f++]);return m}getUri(a){a=le(this.defaults,a);const r=Ea(a.baseURL,a.url,a.allowAbsoluteUrls);return ka(r,a.params,a.paramsSerializer)}}g.forEach(["delete","get","head","options"],function(a){_e.prototype[a]=function(r,n){return this.request(le(n||{},{method:a,url:r,data:(n||{}).data}))}});g.forEach(["post","put","patch"],function(a){function r(n){return function(o,s,c){return this.request(le(c||{},{method:a,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}_e.prototype[a]=r(),_e.prototype[a+"Form"]=r(!0)});const Le=_e;class Et{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(i=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](i);n._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(c=>{n.subscribe(c),o=c}).then(i);return s.cancel=function(){n.unsubscribe(o)},s},a(function(o,s,c){n.reason||(n.reason=new be(o,s,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const r=this._listeners.indexOf(a);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const a=new AbortController,r=n=>{a.abort(n)};return this.subscribe(r),a.signal.unsubscribe=()=>this.unsubscribe(r),a.signal}static source(){let a;return{token:new Et(function(i){a=i}),cancel:a}}}const ki=Et;function Ni(t){return function(r){return t.apply(null,r)}}function Si(t){return g.isObject(t)&&t.isAxiosError===!0}const bt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(bt).forEach(([t,a])=>{bt[a]=t});const zi=bt;function Da(t){const a=new Le(t),r=pa(Le.prototype.request,a);return g.extend(r,Le.prototype,a,{allOwnKeys:!0}),g.extend(r,a,null,{allOwnKeys:!0}),r.create=function(i){return Da(le(t,i))},r}const U=Da(At);U.Axios=Le;U.CanceledError=be;U.CancelToken=ki;U.isCancel=za;U.VERSION=Ma;U.toFormData=et;U.AxiosError=I;U.Cancel=U.CanceledError;U.all=function(a){return Promise.all(a)};U.spread=Ni;U.isAxiosError=Si;U.mergeConfig=le;U.AxiosHeaders=G;U.formToJSON=t=>Sa(g.isHTMLForm(t)?new FormData(t):t);U.getAdapter=Ra.getAdapter;U.HttpStatusCode=zi;U.default=U;const Ai=U,Ei=x.createContext(),Ci=()=>{const t=window.location.hostname,a=window.location.port,r=window.location.protocol;return t!=="localhost"&&t!=="127.0.0.1"?`${r}//${t}${a?`:${a}`:""}`:a==="3000"?`http://${t}:5000`:a==="5500"?`http://${t}:5000`:a==="5000"?`http://${t}:5000`:"http://localhost:5000"},yt=Ci(),L=Ai.create({baseURL:yt,timeout:1e4,headers:{"Content-Type":"application/json"}});L.interceptors.request.use(t=>{var r;const a=localStorage.getItem("authToken");return a&&(t.headers.Authorization=`Bearer ${a}`),console.log(`🚀 API Request: ${(r=t.method)==null?void 0:r.toUpperCase()} ${t.url}`),t},t=>(console.error("Request interceptor error:",t),Promise.reject(t)));L.interceptors.response.use(t=>(console.log(`✅ API Response: ${t.status} ${t.config.url}`),t),t=>{var a,r,n,i;return console.error(`❌ API Error: ${(a=t.response)==null?void 0:a.status} ${(r=t.config)==null?void 0:r.url}`,(n=t.response)==null?void 0:n.data),((i=t.response)==null?void 0:i.status)===401&&(localStorage.removeItem("authToken"),localStorage.removeItem("user"),window.location.href="/login"),Promise.reject(t)});const Ti=({children:t})=>{const c={api:L,transactions:{getAll:()=>L.get("/api/transactions"),create:l=>L.post("/api/transactions",l),update:(l,d)=>L.put(`/api/transactions/${l}`,d),delete:l=>L.delete(`/api/transactions/${l}`),connectBank:l=>L.post("/api/transactions/auto-fetch/connect",l),verifyOtp:l=>L.post("/api/transactions/auto-fetch/verify-otp",l),resendOtp:l=>L.post("/api/transactions/auto-fetch/resend-otp",l),disconnectBank:()=>L.post("/api/transactions/auto-fetch/disconnect")},budgets:{getAll:()=>L.get("/api/budgets"),create:l=>L.post("/api/budgets",l),update:(l,d)=>L.put(`/api/budgets/${l}`,d),delete:l=>L.delete(`/api/budgets/${l}`)},advanced:{scanReceipt:l=>L.post("/api/advanced/receipt-scan",l,{headers:{"Content-Type":"multipart/form-data"}}),createRecurring:l=>L.post("/api/advanced/recurring",l),getInsights:()=>L.get("/api/advanced/insights"),getAnalytics:(l="monthly")=>L.get(`/api/advanced/analytics?period=${l}`),categorizeTransactions:l=>L.post("/api/advanced/categorize",{transactions:l}),detectRecurring:()=>L.get("/api/advanced/detect-recurring")},auth:{login:l=>L.post("/api/auth/login",l),register:l=>L.post("/api/auth/register",l),logout:()=>L.post("/api/auth/logout"),refreshToken:()=>L.post("/api/auth/refresh"),forgotPassword:l=>L.post("/api/auth/forgot-password",{email:l}),resetPassword:l=>L.post("/api/auth/reset-password",l)},payments:{createOrder:l=>L.post("/api/payments/create-order",l),verifyPayment:l=>L.post("/api/payments/verify",l),getPaymentHistory:()=>L.get("/api/payments/history")},customCall:async(l,d={})=>{try{return(await L(l,d)).data}catch(m){throw m}},baseURL:yt};return console.log("%c🔧 API Configuration","background: #3b82f6; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;"),console.log(`Frontend URL: ${window.location.origin}`),console.log(`Backend API URL: ${yt}`),e.jsx(Ei.Provider,{value:c,children:t})},Pa=x.createContext(),rt=()=>{const t=x.useContext(Pa);if(!t)throw new Error("useTransactions must be used within a TransactionsProvider");return t},Ri=({children:t})=>{const[a,r]=x.useState([]),[n,i]=x.useState(!0),o=[{id:1,type:"income",amount:85e3,description:"Salary Credit",date:"2025-09-16",category:"Salary",paymentMethod:"bank_transfer",status:"completed"},{id:2,type:"expense",amount:2500,description:"Grocery Shopping",date:"2025-09-15",category:"Food & Dining",paymentMethod:"credit_card",status:"completed"},{id:3,type:"expense",amount:15e3,description:"Rent Payment",date:"2025-09-01",category:"Bills & Utilities",paymentMethod:"bank_transfer",status:"completed"},{id:4,type:"income",amount:12e3,description:"Freelance Project",date:"2025-09-10",category:"Freelance",paymentMethod:"bank_transfer",status:"completed"},{id:5,type:"expense",amount:800,description:"Movie Night",date:"2025-09-12",category:"Entertainment",paymentMethod:"credit_card",status:"completed"},{id:6,type:"expense",amount:450,description:"Gas Station",date:"2025-09-14",category:"Transportation",paymentMethod:"debit_card",status:"completed"},{id:7,type:"income",amount:3500,description:"Investment Dividend",date:"2025-09-05",category:"Investment",paymentMethod:"bank_transfer",status:"completed"},{id:8,type:"expense",amount:1200,description:"Online Shopping",date:"2025-09-13",category:"Shopping",paymentMethod:"credit_card",status:"completed"}];x.useEffect(()=>{(async()=>{try{i(!0),await new Promise(p=>setTimeout(p,1e3)),r(o)}catch(p){console.error("Error loading transactions:",p)}finally{i(!1)}})()},[]);const S={transactions:a,loading:n,addTransaction:z=>{const p={id:Date.now(),...z,amount:parseFloat(z.amount),paymentMethod:"manual",status:"completed"};return r(h=>[p,...h]),p},updateTransaction:(z,p)=>{r(h=>h.map(u=>u.id===z?{...u,...p}:u))},deleteTransaction:z=>{r(p=>p.filter(h=>h.id!==z))},getTransactionsByType:z=>a.filter(p=>p.type===z),getTransactionsByDateRange:(z,p)=>a.filter(h=>{const u=new Date(h.date);return u>=new Date(z)&&u<=new Date(p)}),getTotals:()=>{const z=a.filter(h=>h.type==="income").reduce((h,u)=>h+u.amount,0),p=a.filter(h=>h.type==="expense").reduce((h,u)=>h+u.amount,0);return{income:z,expenses:p,balance:z-p}}};return e.jsx(Pa.Provider,{value:S,children:t})},Oa=x.createContext(),nt=()=>{const t=x.useContext(Oa);if(!t)throw new Error("useAI must be used within an AIProvider");return t},Mi=({children:t})=>{const{transactions:a,getTotals:r}=rt(),[n,i]=x.useState({spendingPatterns:[],savingsOpportunities:[],budgetRecommendations:[],anomalies:[],predictions:{},trends:{}}),[o,s]=x.useState([]),[c,l]=x.useState(!1),d=()=>{if(!a.length)return[];const v={},A={},k={};return a.forEach(C=>{if(C.type==="expense"){const D=C.category,R=new Date(C.date).toISOString().slice(0,7),y=new Date(C.date).getDay();v[D]=(v[D]||0)+C.amount,A[R]=(A[R]||0)+C.amount,k[y]=(k[y]||0)+C.amount}}),{categorySpending:v,monthlySpending:A,dailySpending:k,topCategories:Object.entries(v).sort(([,C],[,D])=>D-C).slice(0,5),averageDaily:Object.values(k).reduce((C,D)=>C+D,0)/7,averageMonthly:Object.values(A).reduce((C,D)=>C+D,0)/Object.keys(A).length||0}},m=()=>{if(!a.length)return[];const v=[],A=d(),k=A.averageDaily;return a.forEach(C=>{C.type==="expense"&&C.amount>k*3&&v.push({type:"high_spending",transaction:C,message:`Unusually high expense: ₹${C.amount} on ${C.category}`,severity:"high",date:C.date})}),Object.entries(A.categorySpending).forEach(([C,D])=>{const R=a.filter(N=>N.category===C&&N.type==="expense"),y=D/R.length;R.forEach(N=>{N.amount>y*2.5&&v.push({type:"category_spike",transaction:N,message:`High spending in ${C}: ₹${N.amount}`,severity:"medium",date:N.date})})}),v.sort((C,D)=>new Date(D.date)-new Date(C.date))},f=()=>{const v=d(),A=[];["entertainment","utilities","subscriptions"].forEach(R=>{const y=v.categorySpending[R]||0;y>2e3&&A.push({type:"subscription_optimization",category:R,message:`Review ${R} subscriptions - potential savings of ₹${Math.floor(y*.2)}`,potentialSaving:Math.floor(y*.2),priority:"high"})});const C=v.categorySpending.food||0;C>5e3&&A.push({type:"food_optimization",category:"food",message:`Consider meal planning - potential monthly savings of ₹${Math.floor(C*.15)}`,potentialSaving:Math.floor(C*.15),priority:"medium"});const D=v.categorySpending.transport||0;return D>3e3&&A.push({type:"transport_optimization",category:"transport",message:`Explore carpooling or public transport - save up to ₹${Math.floor(D*.25)}`,potentialSaving:Math.floor(D*.25),priority:"medium"}),A.sort((R,y)=>y.potentialSaving-R.potentialSaving)},S=()=>{const v=d(),A=Object.values(v.categorySpending).reduce((D,R)=>D+R,0),k=[],C=a.filter(D=>D.type==="income").reduce((D,R)=>D+R.amount,0);if(C>0){const D=C*.5,R=C*.3,y=C*.2;k.push({type:"50_30_20_rule",title:"Budget Allocation Recommendation",needs:D,wants:R,savings:y,currentSpending:A,message:A>D+R?`You're overspending by ₹${A-(D+R)}`:"Good job! You're within the recommended spending limits"})}return Object.entries(v.categorySpending).forEach(([D,R])=>{const y=R/A*100;let N;switch(D){case"food":N=15;break;case"transport":N=10;break;case"entertainment":N=5;break;case"shopping":N=10;break;default:N=8}y>N*1.5&&k.push({type:"category_budget",category:D,currentSpending:R,currentPercentage:y,recommendedPercentage:N,message:`Consider reducing ${D} spending by ${Math.floor(y-N)}%`})}),k},z=()=>{if(a.length<10)return{};const v=d(),A={},k=Object.values(v.monthlySpending);if(k.length>=2){const C=k[k.length-1]-k[k.length-2];A.nextMonth=Math.max(0,k[k.length-1]+C)}return Object.entries(v.categorySpending).forEach(([C,D])=>{const R=a.filter(N=>N.category===C),y=D/Math.max(1,new Set(R.map(N=>N.date.slice(0,7))).size);A[C]=y}),A},p=()=>{const v=d(),A=m(),k=f(),C=[];if(v.averageDaily>0){const R=new Date().toISOString().slice(0,10),y=a.filter(N=>N.date===R&&N.type==="expense").reduce((N,O)=>N+O.amount,0);y>v.averageDaily*2&&C.push({id:`high-spending-${Date.now()}`,type:"warning",title:"High Spending Alert",message:`You've spent ₹${y} today, which is ${Math.floor(y/v.averageDaily*100)}% above your daily average`,action:"Review expenses",priority:"high",timestamp:new Date})}return k.slice(0,2).forEach(R=>{C.push({id:`savings-${R.type}-${Date.now()}`,type:"success",title:"Savings Opportunity",message:R.message,action:"Optimize spending",priority:R.priority,timestamp:new Date})}),A.filter(R=>{const y=new Date(R.date),N=new Date;return N.setDate(N.getDate()-3),y>N}).slice(0,1).forEach(R=>{C.push({id:`anomaly-${R.type}-${Date.now()}`,type:"warning",title:"Unusual Activity",message:R.message,action:"Review transaction",priority:R.severity,timestamp:new Date})}),C},h=async()=>{if(a.length!==0){l(!0);try{await new Promise(y=>setTimeout(y,1500));const v=d(),A=m(),k=f(),C=S(),D=z();i({spendingPatterns:v,savingsOpportunities:k,budgetRecommendations:C,anomalies:A,predictions:D,trends:{isSpendingIncreasing:v.monthlySpending?Object.values(v.monthlySpending).slice(-2).reduce((y,N,O,F)=>O===1?N>F[0]:y,!1):!1,topSpendingDay:v.dailySpending?Object.entries(v.dailySpending).reduce((y,[N,O])=>O>y.amount?{day:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][N],amount:O}:y,{day:"Unknown",amount:0}):{day:"Unknown",amount:0}}});const R=p();s(y=>[...R,...y].slice(0,10)),k.length>0&&$.success(`AI Analysis Complete! Found ${k.length} savings opportunities.`,{duration:4e3,icon:"🤖"})}catch(v){console.error("AI Analysis Error:",v),$.error("AI analysis failed. Please try again.")}finally{l(!1)}}},u=(v,A)=>{const k=v.toLowerCase();return k.includes("uber")||k.includes("ola")||k.includes("petrol")||k.includes("fuel")||k.includes("metro")?"transport":k.includes("swiggy")||k.includes("zomato")||k.includes("restaurant")||k.includes("food")||k.includes("cafe")?"food":k.includes("netflix")||k.includes("spotify")||k.includes("amazon prime")||k.includes("subscription")?"entertainment":k.includes("electricity")||k.includes("water")||k.includes("gas")||k.includes("internet")||k.includes("mobile")?"utilities":k.includes("amazon")||k.includes("flipkart")||k.includes("shopping")||k.includes("mall")?"shopping":k.includes("medical")||k.includes("doctor")||k.includes("pharmacy")||k.includes("hospital")?"health":k.includes("salary")||k.includes("freelance")||k.includes("bonus")?"salary":A>1e4?"major_expense":"other"},w=v=>{s(A=>A.filter(k=>k.id!==v))},b=(v,A,k)=>{const C=(v-A)/k,R=d().averageMonthly||0;return{monthlyRequired:C,isAchievable:C<R*.3,suggestions:[`Save ₹${C.toFixed(0)} monthly to reach your goal`,"Consider reducing entertainment spending by 20%","Look for better deals on subscriptions","Set up automatic transfers to savings account"]}};x.useEffect(()=>{if(a.length>0){const v=setTimeout(()=>{h()},2e3);return()=>clearTimeout(v)}},[a]);const T={aiInsights:n,notifications:o,isAnalyzing:c,runAIAnalysis:h,autoCategorizTransaction:u,dismissNotification:w,getAIRecommendationForGoal:b,analyzeSpendingPatterns:d,detectAnomalies:m,generateSavingsOpportunities:f};return e.jsx(Oa.Provider,{value:T,children:t})},Ia=x.createContext(),Di=()=>{const t=x.useContext(Ia);if(!t)throw new Error("useNotifications must be used within a NotificationProvider");return t},Pi=({children:t})=>{const[a,r]=x.useState([{id:1,title:"Budget Alert",message:"You have exceeded 80% of your food budget",type:"warning",time:"5m ago",read:!1,timestamp:new Date(Date.now()-3e5)},{id:2,title:"New Transaction",message:"Payment received: ₹2,500",type:"success",time:"10m ago",read:!1,timestamp:new Date(Date.now()-6e5)},{id:3,title:"Goal Achievement",message:"Congratulations! You reached your savings goal",type:"success",time:"1h ago",read:!1,timestamp:new Date(Date.now()-36e5)}]),[n,i]=x.useState(0);x.useEffect(()=>{const p=a.filter(h=>!h.read).length;i(p)},[a]);const o=p=>{const h={id:Date.now(),timestamp:new Date,read:!1,time:"Just now",...p};switch(r(u=>[h,...u]),p.type){case"success":$.success(p.title);break;case"warning":$.error(p.title);break;case"error":$.error(p.title);break;default:$(p.title)}},z={notifications:a,unreadCount:n,addNotification:o,markAsRead:p=>{r(h=>h.map(u=>u.id===p?{...u,read:!0}:u))},markAllAsRead:()=>{r(p=>p.map(h=>({...h,read:!0})))},removeNotification:p=>{r(h=>h.filter(u=>u.id!==p))},clearAllNotifications:()=>{r([])},generateBudgetAlert:(p,h)=>{o({title:"Budget Alert",message:`You have used ${h}% of your ${p} budget`,type:h>90?"error":"warning"})},generateTransactionAlert:(p,h)=>{o({title:"New Transaction",message:`${h}: ₹${p.toLocaleString()}`,type:"success"})},generateGoalAlert:(p,h)=>{o({title:"Goal Progress",message:`${p}: ${h}% completed`,type:h>=100?"success":"info"})}};return e.jsx(Ia.Provider,{value:z,children:t})};var Oi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Ii=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),M=(t,a)=>{const r=x.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,children:c,...l},d)=>x.createElement("svg",{ref:d,...Oi,width:i,height:i,stroke:n,strokeWidth:s?Number(o)*24/Number(i):o,className:`lucide lucide-${Ii(t)}`,...l},[...a.map(([m,f])=>x.createElement(m,f)),...(Array.isArray(c)?c:[c])||[]]));return r.displayName=`${t}`,r},ue=M("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),qe=M("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]),$i=M("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]),pe=M("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),Fi=M("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),it=M("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),Ye=M("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]),Be=M("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),$a=M("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]),Ct=M("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),Li=M("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),Te=M("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]),Fa=M("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),Bi=M("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Re=M("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]),je=M("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),Ui=M("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),se=M("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]),vt=M("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),La=M("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),Ba=M("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Ua=M("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]),Hi=M("Fingerprint",[["path",{d:"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",key:"1jc9o5"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",key:"1mxgy1"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",key:"1fgabc"}]]),Me=M("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),ve=M("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),_i=M("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),qi=M("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]),Ha=M("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),jt=M("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),Yi=M("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),Vi=M("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Wi=M("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]),Ji=M("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Gi=M("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]),Ki=M("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),Xi=M("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]),_a=M("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]),qa=M("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]),he=M("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),me=M("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),Ya=M("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),Zi=M("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),Qi=M("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),es=M("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),De=M("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]),ts=M("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),as=M("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),rs=M("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]),te=M("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),Ve=M("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),Va=M("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]),fe=M("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),ns=M("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]),Kt=M("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),Tt=M("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),is=M("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]),st=M("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Pe=M("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),ss=({isOpen:t,onToggle:a})=>{var p;const r=Xt(),n=we(),{logout:i,user:o}=Ke(),[s,c]=x.useState(!1),[l,d]=x.useState(!1);x.useEffect(()=>{const h=()=>{c(window.innerWidth<=768),d(window.innerWidth<=1024&&window.innerWidth>768)};return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),x.useEffect(()=>{if(s&&t){const h=u=>{!u.target.closest(".sidebar")&&!u.target.closest(".menu-toggle")&&a()};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)}},[s,t,a]);const m=[{path:"/",icon:ve,label:"Dashboard",color:"#3b82f6"},{path:"/transactions",icon:je,label:"Transactions",color:"#10b981"},{path:"/budgets",icon:te,label:"Budgets",color:"#f59e0b"},{path:"/analytics",icon:it,label:"Analytics",color:"#8b5cf6"}],f=async()=>{try{const h=$.loading("Logging out...");await i(),$.dismiss(h),$.success("Logged out successfully!"),s&&t&&a(),n("/login")}catch(h){console.error("Logout failed:",h),$.error("Failed to logout. Please try again.")}},S={open:{width:s?"100%":l?260:280,x:0,transition:{duration:.3,ease:"easeInOut"}},closed:{width:s?"100%":l?70:80,x:s?"-100%":0,transition:{duration:.3,ease:"easeInOut"}}},z={open:{opacity:1,x:0,transition:{duration:.2}},closed:{opacity:0,x:-20,transition:{duration:.2}}};return e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:s&&t&&e.jsx(j.div,{className:"sidebar-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:a})}),e.jsxs(j.aside,{className:`sidebar ${s?"mobile":""} ${l?"tablet":""}`,variants:S,animate:t?"open":"closed",initial:!1,children:[e.jsxs("div",{className:"sidebar-content",children:[s&&e.jsx("div",{className:"mobile-header",children:e.jsx(j.button,{className:"close-btn",onClick:a,whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsx(st,{size:20})})}),e.jsx("div",{className:"sidebar-header",children:e.jsxs(j.div,{className:"logo",whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx("div",{className:"logo-icon",children:e.jsx(is,{size:s?28:24})}),e.jsx(Y,{children:(t||s)&&e.jsx(j.span,{className:"logo-text",variants:z,initial:"closed",animate:"open",exit:"closed",children:"FinanceAI"})})]})}),e.jsx("nav",{className:"sidebar-nav",children:e.jsx("ul",{className:"nav-list",children:m.map((h,u)=>{const w=h.icon,b=r.pathname===h.path;return e.jsx(j.li,{className:"nav-item",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:u*.1},children:e.jsxs(Ka,{to:h.path,className:`nav-link ${b?"active":""}`,style:{"--accent-color":h.color},children:[e.jsx(j.div,{className:"nav-icon",whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(w,{size:20})}),e.jsx(Y,{children:(t||s)&&e.jsx(j.span,{className:"nav-text",variants:z,initial:"closed",animate:"open",exit:"closed",children:h.label})}),b&&e.jsx(j.div,{className:"active-indicator",layoutId:"activeIndicator",initial:{opacity:0},animate:{opacity:1},transition:{type:"spring",stiffness:380,damping:30}})]})},h.path)})})}),e.jsx("div",{className:"sidebar-footer",children:e.jsxs("div",{className:"user-section",children:[e.jsxs(j.div,{className:"user-avatar",whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx("div",{className:"avatar-circle",children:o!=null&&o.avatar?e.jsx("img",{src:o.avatar,alt:o.name}):e.jsx("span",{children:((p=o==null?void 0:o.name)==null?void 0:p.charAt(0))||"G"})}),e.jsx(Y,{children:(t||s)&&e.jsxs(j.div,{className:"user-info",variants:z,initial:"closed",animate:"open",exit:"closed",children:[e.jsx("div",{className:"user-name",children:(o==null?void 0:o.name)||"Guest User"}),e.jsx("div",{className:"user-email",children:(o==null?void 0:o.email)||"guest@financeai.com"})]})})]}),e.jsxs(j.button,{className:"logout-btn",onClick:f,whileHover:{scale:1.05},whileTap:{scale:.95},title:"Logout",children:[e.jsx(Yi,{size:18}),e.jsx(Y,{children:(t||s)&&e.jsx(j.span,{variants:z,initial:"closed",animate:"open",exit:"closed",children:"Logout"})})]})]})})]}),e.jsx("style",{jsx:!0,children:`
        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 99;
        }

        .sidebar {
          position: fixed;
          left: 0;
          top: 0;
          height: 100vh;
          background: var(--sidebar-bg);
          border-right: 1px solid var(--border-color);
          backdrop-filter: blur(20px);
          z-index: 100;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .sidebar.mobile {
          width: 85% !important;
          max-width: 320px;
          transform: translateX(-100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sidebar.mobile.open {
          transform: translateX(0);
        }

        .sidebar.tablet {
          width: 260px;
        }

        .mobile-header {
          display: flex;
          justify-content: flex-end;
          padding: 1rem 1.5rem 0;
        }

        .close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: none;
          background: var(--card-bg);
          border-radius: var(--border-radius-md);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .close-btn:hover {
          background: var(--bg-tertiary);
        }

        .sidebar-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 1.5rem 0;
        }

        .sidebar-header {
          padding: 0 1.5rem;
          margin-bottom: 2rem;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: var(--shadow-md);
        }

        .logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .sidebar-nav {
          flex: 1;
          padding: 0 1rem;
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .sidebar-nav::-webkit-scrollbar {
          display: none;
        }

        .nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          text-decoration: none;
          color: var(--text-secondary);
          border-radius: var(--border-radius-md);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          min-height: 48px;
        }

        .nav-link:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          transform: translateX(4px);
        }

        .nav-link.active {
          background: var(--accent-color);
          color: white;
          box-shadow: var(--shadow-md);
        }

        .nav-icon {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-text {
          font-weight: 500;
          white-space: nowrap;
          font-size: 0.95rem;
        }

        .active-indicator {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 20px;
          background: white;
          border-radius: 2px;
        }

        .sidebar-footer {
          padding: 0 1.5rem;
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
          margin-top: auto;
        }

        .user-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .user-avatar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: var(--border-radius-md);
          transition: background 0.2s ease;
        }

        .user-avatar:hover {
          background: var(--bg-tertiary);
        }

        .avatar-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          overflow: hidden;
          flex-shrink: 0;
        }

        .avatar-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .user-info {
          overflow: hidden;
          flex: 1;
        }

        .user-name {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.9rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .user-email {
          font-size: 0.8rem;
          color: var(--text-tertiary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .logout-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: none;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
          justify-content: flex-start;
          font-size: 0.9rem;
          min-height: 44px;
        }

        .logout-btn:hover {
          background: var(--error);
          color: white;
          border-color: var(--error);
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .sidebar {
            width: 260px;
          }
        }

        @media (max-width: 1024px) {
          .sidebar:not(.mobile) {
            width: 70px;
          }
          
          .sidebar:not(.mobile) .nav-text,
          .sidebar:not(.mobile) .logo-text,
          .sidebar:not(.mobile) .user-info {
            display: none;
          }
          
          .sidebar:not(.mobile) .nav-link {
            justify-content: center;
            padding: 0.75rem;
          }
          
          .sidebar:not(.mobile) .user-avatar {
            justify-content: center;
            padding: 0.5rem;
          }
          
          .sidebar:not(.mobile) .logout-btn {
            justify-content: center;
            padding: 0.75rem;
          }
          
          .sidebar:not(.mobile) .sidebar-header {
            padding: 0 1rem;
          }
          
          .sidebar:not(.mobile) .sidebar-footer {
            padding: 0 1rem;
            padding-top: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 85% !important;
            max-width: 320px;
            transform: translateX(-100%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .sidebar.mobile {
            transform: translateX(-100%);
          }

          .sidebar.mobile.open {
            transform: translateX(0);
          }
          
          .mobile-header {
            display: flex;
          }
          
          .nav-link {
            padding: 1rem 1.5rem;
            font-size: 1rem;
          }
          
          .nav-icon {
            width: 24px;
            height: 24px;
          }
          
          .logo-icon {
            width: 44px;
            height: 44px;
          }
          
          .avatar-circle {
            width: 44px;
            height: 44px;
          }
        }

        @media (max-width: 480px) {
          .sidebar {
            width: 90% !important;
            max-width: 280px;
          }
          
          .sidebar-content {
            padding: 1rem 0;
          }
          
          .sidebar-header {
            padding: 0 1rem;
            margin-bottom: 1.5rem;
          }
          
          .nav-link {
            padding: 0.875rem 1rem;
            margin: 0 0.5rem;
          }
          
          .sidebar-footer {
            padding: 0 1rem;
            padding-top: 1rem;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .sidebar {
            border-right: 2px solid var(--border-color);
          }
          
          .nav-link {
            border: 1px solid transparent;
          }
          
          .nav-link:focus {
            border-color: var(--text-accent);
            outline: 2px solid var(--text-accent);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .sidebar {
            transition: none;
          }
          
          .nav-link {
            transition: none;
          }
          
          .nav-link:hover {
            transform: none;
          }
        }
      `})]})]})},os=({onMenuToggle:t,onChatbotToggle:a,isChatbotOpen:r})=>{var y;const[n,i]=x.useState(!1),[o,s]=x.useState(!1),[c,l]=x.useState({type:"expense",amount:"",description:"",category:"",date:new Date().toISOString().split("T")[0]}),{theme:d,toggleTheme:m}=Vr(),{user:f}=Ke(),{addTransaction:S}=rt(),{autoCategorizTransaction:z}=nt(),{notifications:p,unreadCount:h,markAsRead:u,markAllAsRead:w}=Di(),b=we(),T=x.useRef(null);x.useEffect(()=>{const N=F=>{T.current&&!T.current.contains(F.target)&&i(!1)},O=F=>{F.key==="Escape"&&i(!1)};return n&&(document.addEventListener("mousedown",N),document.addEventListener("keydown",O)),()=>{document.removeEventListener("mousedown",N),document.removeEventListener("keydown",O)}},[n]);const v=N=>{N.read||u(N.id)},A=()=>{s(!0)},k=()=>{b("/settings")},C=()=>{s(!1),l({type:"expense",amount:"",description:"",category:"",date:new Date().toISOString().split("T")[0]})},D=N=>{const{name:O,value:F}=N.target;l(W=>({...W,[O]:F}))},R=N=>{if(N.preventDefault(),!c.amount||!c.description){$.error("Please fill in amount and description");return}try{let O=c.category;(!O||O==="")&&(O=z(c.description,c.amount),$.info(`AI categorized as: ${O}`,{icon:"🤖"}));const F={...c,category:O},W=S(F);$.success(`${c.type==="expense"?"Expense":"Income"} added successfully!`),C()}catch(O){console.error("Error adding transaction:",O),$.error("Failed to add transaction. Please try again.")}};return e.jsxs(j.header,{className:"header",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},children:[e.jsxs("div",{className:"header-content",children:[e.jsxs("div",{className:"header-left",children:[e.jsx(j.button,{className:"menu-toggle",onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsx(Ji,{size:20})}),e.jsxs("div",{className:"header-title",children:[e.jsxs("h1",{children:["Welcome back, ",((y=f==null?void 0:f.name)==null?void 0:y.split(" ")[0])||"Guest","!"]}),e.jsx("p",{className:"header-subtitle",children:"Here's what's happening with your finances today"})]})]}),e.jsxs("div",{className:"header-right",children:[e.jsxs(j.button,{className:"quick-add-btn",onClick:A,whileHover:{scale:1.05},whileTap:{scale:.95},title:"Quick Add Transaction",children:[e.jsx(he,{size:18}),e.jsx("span",{children:"Add"})]}),e.jsx(j.button,{className:"theme-toggle",onClick:m,whileHover:{scale:1.05},whileTap:{scale:.95},title:`Switch to ${d==="light"?"dark":"light"} mode`,children:e.jsx(Y,{mode:"wait",children:d==="light"?e.jsx(j.div,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.2},children:e.jsx(Ki,{size:18})},"moon"):e.jsx(j.div,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.2},children:e.jsx(as,{size:18})},"sun")})}),e.jsxs("div",{className:"notifications-container",ref:T,children:[e.jsxs(j.button,{className:"notification-btn",onClick:()=>i(!n),whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx(Ye,{size:18}),h>0&&e.jsx(j.span,{className:"notification-badge",initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:500,damping:30},children:h})]}),e.jsx(Y,{children:n&&e.jsxs(j.div,{className:"notifications-dropdown",initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.2},children:[e.jsxs("div",{className:"dropdown-header",children:[e.jsx("h3",{children:"Notifications"}),e.jsx("button",{className:"mark-all-read",onClick:w,children:"Mark all read"})]}),e.jsx("div",{className:"notifications-list",children:p.length===0?e.jsx("div",{className:"empty-notifications",children:e.jsx("p",{children:"No notifications"})}):p.map((N,O)=>e.jsxs(j.div,{className:`notification-item ${N.type} ${N.read?"read":"unread"}`,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:O*.1},onClick:()=>v(N),style:{cursor:"pointer"},children:[e.jsxs("div",{className:"notification-content",children:[e.jsx("h4",{children:N.title}),e.jsx("p",{children:N.message}),e.jsx("span",{className:"notification-time",children:N.time})]}),!N.read&&e.jsx("div",{className:"unread-dot"})]},N.id))}),e.jsx("div",{className:"dropdown-footer",children:e.jsx("button",{className:"view-all-btn",children:"View all notifications"})})]})})]}),e.jsxs(j.button,{className:`ai-chatbot-btn ${r?"active":""}`,onClick:a,whileHover:{scale:1.05},whileTap:{scale:.95},title:"AI Financial Assistant",children:[e.jsx(Be,{size:18}),e.jsx("span",{children:"AI Assistant"})]}),e.jsx(j.button,{className:"settings-btn",onClick:k,whileHover:{scale:1.05},whileTap:{scale:.95},title:"Settings",children:e.jsx(Qi,{size:18})})]})]}),e.jsx(Y,{children:o&&e.jsxs(e.Fragment,{children:[e.jsx(j.div,{className:"modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:C}),e.jsxs(j.div,{className:"add-modal",initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{duration:.2},children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h2",{children:"Add Transaction"}),e.jsx("button",{className:"modal-close",onClick:C,children:e.jsx(st,{size:20})})]}),e.jsxs("form",{onSubmit:R,className:"modal-form",children:[e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Type"}),e.jsxs("select",{name:"type",value:c.type,onChange:D,className:"form-select",children:[e.jsx("option",{value:"expense",children:"Expense"}),e.jsx("option",{value:"income",children:"Income"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Amount *"}),e.jsxs("div",{className:"input-group",children:[e.jsx(se,{size:18,className:"input-icon"}),e.jsx("input",{type:"number",name:"amount",value:c.amount,onChange:D,placeholder:"0.00",className:"form-input",min:"0",step:"0.01",required:!0})]})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Description *"}),e.jsxs("div",{className:"input-group",children:[e.jsx(ns,{size:18,className:"input-icon"}),e.jsx("input",{type:"text",name:"description",value:c.description,onChange:D,placeholder:"Enter transaction description",className:"form-input",required:!0})]})]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Category *"}),e.jsxs("div",{className:"input-group",children:[e.jsx(rs,{size:18,className:"input-icon"}),e.jsxs("select",{name:"category",value:c.category,onChange:D,className:"form-select",required:!0,children:[e.jsx("option",{value:"",children:"Select category"}),c.type==="expense"?e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"Food & Dining",children:"Food & Dining"}),e.jsx("option",{value:"Transportation",children:"Transportation"}),e.jsx("option",{value:"Shopping",children:"Shopping"}),e.jsx("option",{value:"Entertainment",children:"Entertainment"}),e.jsx("option",{value:"Bills & Utilities",children:"Bills & Utilities"}),e.jsx("option",{value:"Healthcare",children:"Healthcare"}),e.jsx("option",{value:"Education",children:"Education"}),e.jsx("option",{value:"Other",children:"Other"})]}):e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"Salary",children:"Salary"}),e.jsx("option",{value:"Freelance",children:"Freelance"}),e.jsx("option",{value:"Investment",children:"Investment"}),e.jsx("option",{value:"Gift",children:"Gift"}),e.jsx("option",{value:"Other",children:"Other"})]})]})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Date"}),e.jsxs("div",{className:"input-group",children:[e.jsx(Ct,{size:18,className:"input-icon"}),e.jsx("input",{type:"date",name:"date",value:c.date,onChange:D,className:"form-input"})]})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{type:"button",onClick:C,className:"btn-secondary",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn-primary",children:"Add Transaction"})]})]})]})]})}),e.jsx("style",{jsx:!0,children:`
        .header {
          position: fixed;
          top: 0;
          left: var(--sidebar-width);
          right: 0;
          height: var(--header-height);
          background: var(--header-bg);
          border-bottom: 1px solid var(--border-color);
          backdrop-filter: blur(20px);
          z-index: 90;
          transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .header-content {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          gap: 2rem;
          max-width: 100%;
          overflow: hidden;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }

        .menu-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: none;
          background: var(--card-bg);
          border-radius: var(--border-radius-md);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;
        }

        .menu-toggle:hover {
          background: var(--bg-tertiary);
        }

        .header-title {
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }

        .header-title h1 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.2;
        }

        .header-subtitle {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.2;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .quick-add-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: white;
          border: none;
          border-radius: var(--border-radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .quick-add-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .ai-chatbot-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          color: white;
          border: none;
          border-radius: var(--border-radius-md);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ai-chatbot-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .ai-chatbot-btn.active {
          background: linear-gradient(135deg, #a855f7, #c084fc);
          box-shadow: var(--shadow-md);
        }

        .theme-toggle,
        .settings-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: none;
          background: var(--card-bg);
          border-radius: var(--border-radius-md);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .theme-toggle:hover,
        .settings-btn:hover {
          background: var(--bg-tertiary);
        }

        .notifications-container {
          position: relative;
          z-index: 1002 !important;
        }

        .notification-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: none;
          background: var(--card-bg);
          border-radius: var(--border-radius-md);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .notification-btn:hover {
          background: var(--bg-tertiary);
        }

        .notification-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 18px;
          height: 18px;
          background: var(--error);
          color: white;
          border-radius: 50%;
          font-size: 0.7rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--header-bg);
        }

        .notifications-dropdown {
          position: fixed;
          top: var(--header-height, 72px);
          right: 2rem;
          width: 320px;
          background: var(--card-bg, #ffffff);
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: var(--border-radius-lg, 16px);
          box-shadow: var(--shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04));
          backdrop-filter: blur(20px);
          overflow: hidden;
          z-index: 1003 !important;
        }

        .dropdown-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .dropdown-header h3 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .mark-all-read {
          font-size: 0.8rem;
          color: var(--text-accent);
          background: none;
          border: none;
          cursor: pointer;
        }

        .notifications-list {
          max-height: 300px;
          overflow-y: auto;
        }

        .notification-item {
          padding: 1rem;
          border-bottom: 1px solid var(--border-color);
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .notification-item:hover {
          background: var(--bg-tertiary);
        }

        .notification-item:last-child {
          border-bottom: none;
        }

        .notification-content h4 {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }

        .notification-content p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin: 0 0 0.5rem 0;
          line-height: 1.4;
        }

        .notification-time {
          font-size: 0.7rem;
          color: var(--text-tertiary);
        }

        .notification-item.warning h4 {
          color: var(--warning);
        }

        .notification-item.success h4 {
          color: var(--success);
        }

        .notification-item.unread {
          background: rgba(59, 130, 246, 0.05);
          border-left: 3px solid var(--info);
        }

        .notification-item.read {
          opacity: 0.7;
        }

        .unread-dot {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 8px;
          height: 8px;
          background: var(--info);
          border-radius: 50%;
        }

        .empty-notifications {
          padding: 2rem 1rem;
          text-align: center;
          color: var(--text-secondary);
        }

        .empty-notifications p {
          margin: 0;
          font-size: 0.9rem;
        }

        .dropdown-footer {
          padding: 0.75rem 1rem;
          border-top: 1px solid var(--border-color);
          text-align: center;
        }

        .view-all-btn {
          font-size: 0.9rem;
          color: var(--text-accent);
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 1000;
        }

        .add-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-xl);
          width: 90%;
          max-width: 500px;
          max-height: 90vh;
          overflow-y: auto;
          z-index: 1001;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .modal-header h2 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .modal-close {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: var(--bg-tertiary);
          border-radius: 8px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close:hover {
          background: var(--bg-quaternary);
          color: var(--text-primary);
        }

        .modal-form {
          padding: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .input-group {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 0.75rem;
          color: var(--text-tertiary);
          z-index: 1;
        }

        .form-input,
        .form-select {
          width: 100%;
          padding: 0.75rem 0.75rem 0.75rem 2.5rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--input-bg);
          color: var(--text-primary);
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .form-input:focus,
        .form-select:focus {
          outline: none;
          border-color: var(--text-accent);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-select {
          cursor: pointer;
        }

        .modal-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        .btn-secondary,
        .btn-primary {
          padding: 0.75rem 1.5rem;
          border-radius: var(--border-radius-md);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          font-size: 0.95rem;
        }

        .btn-secondary {
          background: var(--bg-tertiary);
          color: var(--text-secondary);
        }

        .btn-secondary:hover {
          background: var(--bg-quaternary);
          color: var(--text-primary);
        }

        .btn-primary {
          background: var(--text-accent);
          color: white;
        }

        .btn-primary:hover {
          background: #2563eb;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        @media (max-width: 1200px) {
          .header-content {
            padding: 0 1.5rem;
            gap: 1.5rem;
          }
        }

        @media (max-width: 1024px) {
          .header-content {
            padding: 0 1rem;
            gap: 1rem;
          }
          
          .header-subtitle {
            display: none;
          }
          
          .quick-add-btn span {
            display: none;
          }
          
          .header-title h1 {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: flex;
          }

          .header {
            left: 0;
          }

          .header-content {
            padding: 0 1rem;
            gap: 0.75rem;
          }

          .header-title h1 {
            font-size: 1.2rem;
          }
          
          .header-left {
            gap: 0.75rem;
          }
          
          .header-right {
            gap: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .header-content {
            padding: 0 0.75rem;
          }
          
          .add-modal {
            width: 95%;
            max-height: 95vh;
          }
          
          .modal-header,
          .modal-form {
            padding: 1rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          
          .modal-actions {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .btn-secondary,
          .btn-primary {
            width: 100%;
          }
          
          .header-title h1 {
            font-size: 1.1rem;
          }
          
          .quick-add-btn {
            padding: 0.5rem;
            min-width: 40px;
          }
          
          .theme-toggle,
          .settings-btn,
          .notification-btn,
          .ai-chatbot-btn {
            width: 36px;
            height: 36px;
          }
          
          .ai-chatbot-btn span {
            display: none;
          }
          
          .notifications-dropdown {
            width: calc(100vw - 2rem);
            right: 1rem;
            left: 1rem;
            width: auto;
          }
        }
      `})]})},Wa=()=>e.jsxs("div",{className:"loading-screen",children:[e.jsxs("div",{className:"loading-container",children:[e.jsxs(j.div,{className:"loading-logo",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5},children:[e.jsx("div",{className:"logo-icon",children:e.jsx(j.div,{className:"logo-gradient",animate:{rotate:360},transition:{duration:2,repeat:1/0,ease:"linear"},children:"💰"})}),e.jsx("h1",{className:"logo-text",children:"FinanceAI"})]}),e.jsx(j.div,{className:"loading-progress",initial:{width:0},animate:{width:"100%"},transition:{duration:1.5,ease:"easeInOut"},children:e.jsx("div",{className:"progress-bar",children:e.jsx(j.div,{className:"progress-fill",initial:{width:"0%"},animate:{width:"100%"},transition:{duration:1.5,ease:"easeInOut"}})})}),e.jsx(j.p,{className:"loading-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},children:"Initializing your financial dashboard..."})]}),e.jsx("style",{jsx:!0,children:`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-mid) 50%, var(--bg-gradient-end) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        
        .loading-container {
          text-align: center;
          max-width: 400px;
          padding: 2rem;
        }
        
        .loading-logo {
          margin-bottom: 3rem;
        }
        
        .logo-icon {
          margin-bottom: 1rem;
        }
        
        .logo-gradient {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }
        
        .logo-text {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }
        
        .loading-progress {
          margin-bottom: 2rem;
        }
        
        .progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6);
          border-radius: 2px;
        }
        
        .loading-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          margin: 0;
        }
      `})]}),cs=({isOpen:t,onToggle:a})=>{const[r,n]=x.useState(!1),[i,o]=x.useState([{id:1,type:"bot",message:"Hi! I'm your AI financial advisor. I can help you with investments, savings tips, and budget planning. Try asking me about saving for a specific item or investment advice!",timestamp:new Date().toLocaleTimeString()}]),[s,c]=x.useState(""),[l,d]=x.useState(!1),m=x.useRef(null),{transactions:f,getTotals:S}=rt(),{aiInsights:z,getAIRecommendationForGoal:p}=nt(),h=()=>{var v;(v=m.current)==null||v.scrollIntoView({behavior:"smooth"})};x.useEffect(()=>{h()},[i]);const u=v=>{var W,oe,H,E;const A=v.toLowerCase(),k=S(),C=z,D=C.spendingPatterns||{},R=C.savingsOpportunities||[],y=C.anomalies||[];C.predictions;const N=f.filter(P=>P.type==="income"&&new Date(P.date).getMonth()===new Date().getMonth()).reduce((P,B)=>P+B.amount,0),O=D.averageMonthly||0,F=N>0?((N-O)/N*100).toFixed(1):0;if(A.includes("invest")||A.includes("investment"))return F>20?`🤖 AI Analysis: Excellent investment potential detected!

💼 Your Financial Profile:
• Savings rate: ${F}% (Excellent!)
• Monthly surplus: ₹${N-O}
• Risk tolerance: Medium-High (based on spending patterns)

� AI Recommendations:
• Equity exposure: 70% (SIP in diversified funds)
• Debt allocation: 20% (PPF, ELSS for tax benefits)
• Emergency fund: 10% (liquid funds)
• Suggested monthly SIP: ₹${Math.round((N-O)*.6)}

🎯 Next Steps:
1. Start with index funds (Nifty 50, Sensex)
2. Consider tax-saving ELSS funds
3. Set up automated SIPs
4. Review portfolio quarterly

⚠️ AI Alert: Based on your spending on ${((oe=(W=D.topCategories)==null?void 0:W[0])==null?void 0:oe[0])||"entertainment"}, ensure 6-month emergency fund first!`:`🤖 AI Analysis: Investment readiness requires improvement.

📊 Current Status:
• Savings rate: ${F}% (Target: 20%+)
• Top spending: ${((H=D.topCategories)==null?void 0:H.map(([P,B])=>`${P} (₹${B})`).join(", "))||"Various categories"}

💡 AI Savings Opportunities:
${R.slice(0,3).map(P=>`• ${P.message}`).join(`
`)||"• Track expenses for better insights"}

🎯 3-Month Action Plan:
1. Month 1: Track all expenses, identify leaks
2. Month 2: Implement top 2 savings opportunities  
3. Month 3: Build emergency fund, then invest

🚀 Quick Wins: Start with ₹${Math.max(1e3,Math.round(N*.05))} monthly savings!`;if(A.includes("save")||A.includes("saving")){const P=R.slice(0,3);return`🤖 AI-Powered Savings Analysis:

💰 Current Financial Health:
• Savings rate: ${F}% (${F>20?"Excellent!":F>10?"Good, can improve":"Needs attention"})
• Monthly income: ₹${N.toLocaleString()}
• Monthly expenses: ₹${O.toFixed(0)}
• Potential monthly savings: ₹${(N-O).toFixed(0)}

🎯 AI-Identified Opportunities:
${P.length>0?P.map(B=>`• ${B.message} (Save ₹${B.potentialSaving})`).join(`
`):"• Build consistent tracking for better insights"}

📊 Spending Breakdown:
${((E=D.topCategories)==null?void 0:E.map(([B,X],q)=>`${q+1}. ${B}: ₹${X.toLocaleString()}`).join(`
`))||"Add more transactions for analysis"}

⚡ Quick Actions:
• Set up ₹${Math.round(N*.15)} auto-transfer to savings
• Review and cancel unused subscriptions  
• Use 50/30/20 rule: Needs/Wants/Savings
${y.length>0?`• Check recent unusual expense: ${y[0].message}`:""}`}if(A.includes("ipad")||A.includes("buy")||A.includes("purchase")){const P=A.includes("ipad")?800:500,B=Math.max(0,N-O),X=B>0?Math.ceil(P/B):1/0;if(B>0){const q=X<=3?`Go for it! You're saving well and can afford this purchase.

💡 Smart purchase tips:
• Wait for sales (Black Friday, back-to-school)
• Consider refurbished models (save 15-20%)
• Set up a dedicated "iPad fund" account
• Maybe delay 1 month to get accessories too!`:`Consider waiting or adjusting your budget:

💡 Options to speed this up:
• Increase income with side hustle
• Reduce expenses temporarily
• Save specifically for this goal
• Consider a less expensive model

Would you like help creating a savings plan for this purchase?`;return`💻 iPad Purchase Plan ($${P}):

📊 Your Financial Position:
• Monthly savings available: $${B}
• Time needed: ${X} month${X!==1?"s":""}

${X<=3?"✅":"⚠️"} ${q}`}else return`🚨 Budget Alert: You're currently spending more than you earn!

Before buying an iPad, let's fix your finances:

📋 Action Plan:
1. Track every expense for 2 weeks
2. Identify unnecessary spending
3. Create a balanced budget
4. Build emergency savings first

💡 iPad alternatives while you save:
• Use smartphone/computer for now
• Look into payment plans (but avoid high interest)
• Set this as a reward for reaching savings goals

Want help creating a budget that includes room for fun purchases?`}if(A.includes("budget")||A.includes("spending"))return`📊 Your Financial Snapshot:

💰 Monthly Income: $${N}
💸 Monthly Expenses: $${O}
💾 Monthly Savings: $${N-O}
📈 Savings Rate: ${F}%

🎯 Ideal Budget (50/30/20 rule):
• Needs (50%): $${(N*.5).toFixed(2)}
• Wants (30%): $${(N*.3).toFixed(2)}
• Savings (20%): $${(N*.2).toFixed(2)}

${F>=20?"🎉 Great job! You're exceeding the savings target!":F>=10?"👍 Good progress, try to reach 20% savings rate":"🔄 Focus on increasing savings - every dollar counts!"}

Need help optimizing any specific category?`;if(A.includes("emergency")||A.includes("fund")){const P=O*6,B=k.totalIncome-k.totalExpenses;return`🚨 Emergency Fund Analysis:

🎯 Target: $${P.toFixed(2)} (6 months expenses)
💰 Current position: $${B>0?B.toFixed(2):"0"}
📅 Time to build: ${monthlySavings>0?Math.ceil(P/monthlySavings):"∞"} months

💡 Emergency fund strategy:
• Start with $1,000 mini-emergency fund
• Save in high-yield savings account
• Don't invest emergency funds
• Use only for true emergencies

${B>=P?"🎉 Congratulations! Your emergency fund is fully funded!":`Next step: Save $${(P-Math.max(0,B)).toFixed(2)} more`}`}return`I'm here to help with your finances! Ask me about:

💼 Investment Strategies
• Portfolio allocation advice
• Risk assessment
• Long-term wealth building

💰 Savings Tips  
• Budget optimization
• Expense reduction
• Emergency fund planning

🛍️ Purchase Planning
• Saving for specific items
• Smart buying strategies
• Timing recommendations

📊 Financial Analysis
• Spending pattern insights
• Budget recommendations
• Goal setting

What would you like to explore first?`},w=async()=>{if(!s.trim())return;const v={id:Date.now(),type:"user",message:s,timestamp:new Date().toLocaleTimeString()};o(k=>[...k,v]),c(""),d(!0),await new Promise(k=>setTimeout(k,1e3+Math.random()*1e3));const A={id:Date.now()+1,type:"bot",message:u(s),timestamp:new Date().toLocaleTimeString()};o(k=>[...k,A]),d(!1)},b=v=>{v.key==="Enter"&&!v.shiftKey&&(v.preventDefault(),w())},T={hidden:{opacity:0,scale:.8,y:20},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:300,damping:30}},exit:{opacity:0,scale:.8,y:20,transition:{duration:.2}}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{jsx:!0,children:`
        .ai-chatbot-container {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 1000;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .ai-chatbot {
          position: absolute;
          bottom: 80px;
          right: 0;
          width: 320px;
          height: 450px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: height 0.3s ease;
        }

        .ai-chatbot.minimized {
          height: 60px;
          overflow: hidden;
        }

        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          flex-shrink: 0;
          min-height: 60px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .chat-header:hover {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          transform: translateY(-1px);
        }

        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
          min-width: 0;
        }

        .bot-avatar {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bot-info {
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
          min-width: 0;
          flex: 1;
        }

        .bot-info h3 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .bot-status {
          font-size: 0.8rem;
          opacity: 0.9;
          color: rgba(255, 255, 255, 0.8);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .chat-controls {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          flex-shrink: 0;
        }

        .chat-control-btn {
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          backdrop-filter: blur(10px);
          font-size: 16px;
          flex-shrink: 0;
        }

        .chat-control-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }

        .minimize-btn:hover {
          background: rgba(34, 197, 94, 0.3);
        }

        .close-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }

        .chat-messages {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: rgba(248, 250, 252, 0.8);
        }

        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 3px;
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }

        .message {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          animation: slideIn 0.3s ease;
        }

        .message.user {
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .message.bot .message-avatar {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
        }

        .message.user .message-avatar {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
        }

        .message-content {
          max-width: 75%;
          padding: 0.6rem 0.8rem;
          border-radius: 12px;
          line-height: 1.4;
          font-size: 0.85rem;
          word-wrap: break-word;
          white-space: pre-wrap;
        }

        .message.bot .message-content {
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-top-left-radius: 4px;
        }

        .message.user .message-content {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border-top-right-radius: 4px;
        }

        .message-time {
          font-size: 0.7rem;
          opacity: 0.6;
          margin-top: 0.25rem;
        }

        .typing-indicator {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
        }

        .typing-dots {
          display: flex;
          gap: 4px;
          padding: 0.75rem 1rem;
          background: white;
          border-radius: 16px;
          border-top-left-radius: 4px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .typing-dot {
          width: 8px;
          height: 8px;
          background: #94a3b8;
          border-radius: 50%;
          animation: typing 1.4s infinite;
        }

        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .chat-input {
          padding: 1rem;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
        }

        .input-container {
          display: flex;
          gap: 0.75rem;
          align-items: flex-end;
        }

        .message-input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 2px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          font-size: 0.9rem;
          resize: none;
          max-height: 100px;
          background: white;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .message-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .send-btn {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border: none;
          border-radius: 12px;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .send-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 480px) {
          .ai-chatbot-container {
            bottom: 1rem;
            right: 1rem;
          }

          .ai-chatbot {
            position: fixed;
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            border-radius: 0;
            bottom: 0;
          }

          .ai-chatbot.minimized {
            height: 50px;
            width: 280px;
            right: 1rem;
            left: auto;
            bottom: 4rem;
            border-radius: 12px;
            position: absolute;
          }

          .chat-header {
            border-radius: 0;
          }

          .chat-toggle-btn {
            width: 45px;
            height: 45px;
          }
        }
      `}),e.jsx("div",{className:"ai-chatbot-container",children:e.jsx(Y,{children:t&&e.jsxs(j.div,{className:`ai-chatbot ${r?"minimized":""}`,variants:T,initial:"hidden",animate:"visible",exit:"exit",children:[e.jsxs("div",{className:"chat-header",onClick:r?()=>n(!1):void 0,children:[e.jsxs("div",{className:"chat-header-info",children:[e.jsx("div",{className:"bot-avatar",children:e.jsx(Be,{size:20})}),e.jsxs("div",{className:"bot-info",children:[e.jsx("h3",{children:"AI Financial Advisor"}),e.jsx("span",{className:"bot-status",children:r?"Click to expand":"Online"})]})]}),e.jsxs("div",{className:"chat-controls",children:[e.jsx("button",{className:"chat-control-btn minimize-btn",onClick:v=>{v.stopPropagation(),n(!r)},title:r?"Expand chat":"Minimize chat",children:r?e.jsx(Wi,{size:16}):e.jsx(Gi,{size:16})}),e.jsx("button",{className:"chat-control-btn close-btn",onClick:v=>{v.stopPropagation(),a()},title:"Close chat",children:e.jsx(st,{size:16})})]})]}),!r&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"chat-messages",children:[i.map(v=>e.jsxs("div",{className:`message ${v.type}`,children:[e.jsx("div",{className:"message-avatar",children:v.type==="bot"?e.jsx(Be,{size:16}):e.jsx(Tt,{size:16})}),e.jsxs("div",{children:[e.jsx("div",{className:"message-content",children:v.message}),e.jsx("div",{className:"message-time",children:v.timestamp})]})]},v.id)),l&&e.jsxs("div",{className:"typing-indicator",children:[e.jsx("div",{className:"message-avatar",children:e.jsx(Be,{size:16})}),e.jsxs("div",{className:"typing-dots",children:[e.jsx("div",{className:"typing-dot"}),e.jsx("div",{className:"typing-dot"}),e.jsx("div",{className:"typing-dot"})]})]}),e.jsx("div",{ref:m})]}),e.jsx("div",{className:"chat-input",children:e.jsxs("div",{className:"input-container",children:[e.jsx("textarea",{className:"message-input",placeholder:"Ask me about investments, savings, or 'I want to buy an iPad'...",value:s,onChange:v=>c(v.target.value),onKeyPress:b,disabled:l,rows:1}),e.jsx("button",{className:"send-btn",onClick:w,disabled:!s.trim()||l,title:"Send message",children:e.jsx(Zi,{size:18})})]})})]})]})})})]})},ls=()=>{const{notifications:t,dismissNotification:a}=nt(),[r,n]=x.useState([]);x.useState(0),x.useEffect(()=>{t.length>0&&t.filter(d=>!r.find(m=>m.id===d.id)).forEach((d,m)=>{setTimeout(()=>{n(f=>[...f,d]),(d.priority==="low"||d.priority==="medium")&&setTimeout(()=>{a(d.id),n(f=>f.filter(S=>S.id!==d.id))},8e3)},m*2e3)})},[t]),x.useEffect(()=>{n(l=>l.filter(d=>t.find(m=>m.id===d.id)))},[t]);const i=l=>{switch(l){case"success":return e.jsx(Fa,{size:20});case"warning":return e.jsx(ue,{size:20});case"info":return e.jsx(_i,{size:20});case"savings":return e.jsx(se,{size:20});case"goal":return e.jsx(te,{size:20});case"insight":return e.jsx(Ha,{size:20});case"prediction":return e.jsx(fe,{size:20});default:return e.jsx(Ye,{size:20})}},o=(l,d)=>{const m={success:"from-green-500 to-emerald-500",warning:"from-yellow-500 to-orange-500",info:"from-blue-500 to-cyan-500",savings:"from-purple-500 to-pink-500",goal:"from-indigo-500 to-purple-500",insight:"from-amber-500 to-yellow-500",prediction:"from-teal-500 to-green-500"};return d==="high"?"from-red-500 to-pink-500":m[l]||"from-gray-500 to-slate-500"},s=l=>{switch(l.type){case"savings":$.success("Opening savings recommendations...",{icon:"💰"});break;case"warning":$.info("Opening expense analysis...",{icon:"📊"});break;case"goal":$.success("Opening goal tracking...",{icon:"🎯"});break;default:$.info("Action completed!",{icon:"✅"})}a(l.id),n(d=>d.filter(m=>m.id!==l.id))},c=l=>{a(l),n(d=>d.filter(m=>m.id!==l))};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"ai-notifications-container",children:e.jsx(Y,{children:r.map((l,d)=>e.jsxs(j.div,{className:`ai-notification ${l.type} priority-${l.priority}`,initial:{opacity:0,x:400,scale:.8},animate:{opacity:1,x:0,scale:1,y:d*90},exit:{opacity:0,x:400,scale:.8,transition:{duration:.3}},transition:{type:"spring",stiffness:300,damping:30},layout:!0,children:[e.jsx("div",{className:`notification-gradient bg-gradient-to-r ${o(l.type,l.priority)}`}),e.jsxs("div",{className:"notification-content",children:[e.jsxs("div",{className:"notification-header",children:[e.jsx("div",{className:"notification-icon",children:i(l.type)}),e.jsxs("div",{className:"notification-meta",children:[e.jsx("h4",{className:"notification-title",children:l.title}),e.jsx("span",{className:"notification-time",children:new Date(l.timestamp).toLocaleTimeString()})]}),e.jsx("button",{className:"notification-close",onClick:()=>c(l.id),children:e.jsx(st,{size:16})})]}),e.jsx("p",{className:"notification-message",children:l.message}),l.action&&e.jsx("div",{className:"notification-actions",children:e.jsx("button",{className:"notification-action-btn",onClick:()=>s(l),children:l.action})})]}),l.priority==="high"&&e.jsx("div",{className:"priority-pulse"})]},l.id))})}),r.length>0&&e.jsxs(j.div,{className:"ai-insights-summary",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0,scale:0},children:[e.jsx("div",{className:"ai-summary-icon",children:e.jsx($a,{size:20})}),e.jsx("div",{className:"ai-summary-text",children:e.jsxs("span",{children:[r.length," AI insights"]})})]}),e.jsx("style",{jsx:!0,children:`
        .ai-notifications-container {
          position: fixed;
          top: 100px;
          right: 20px;
          z-index: 1000;
          pointer-events: none;
        }

        .ai-notification {
          width: 380px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 16px;
          overflow: hidden;
          position: relative;
          pointer-events: auto;
        }

        .ai-notification.priority-high {
          border: 2px solid #ef4444;
          box-shadow: 0 20px 60px rgba(239, 68, 68, 0.2);
        }

        .notification-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }

        .notification-content {
          padding: 20px;
        }

        .notification-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
        }

        .notification-icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
        }

        .notification-meta {
          flex: 1;
        }

        .notification-title {
          font-size: 16px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 4px 0;
        }

        .notification-time {
          font-size: 12px;
          color: #6b7280;
        }

        .notification-close {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          border: none;
          background: rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #6b7280;
          transition: all 0.2s ease;
        }

        .notification-close:hover {
          background: rgba(0, 0, 0, 0.1);
          color: #374151;
        }

        .notification-message {
          color: #4b5563;
          font-size: 14px;
          line-height: 1.5;
          margin: 0 0 16px 0;
        }

        .notification-actions {
          display: flex;
          gap: 8px;
        }

        .notification-action-btn {
          padding: 8px 16px;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .notification-action-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .priority-pulse {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 2px solid #ef4444;
          border-radius: 16px;
          animation: priorityPulse 2s infinite;
          pointer-events: none;
        }

        @keyframes priorityPulse {
          0%, 100% {
            opacity: 0;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.02);
          }
        }

        .ai-insights-summary {
          position: fixed;
          bottom: 120px;
          right: 20px;
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          color: white;
          padding: 12px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 8px 32px rgba(139, 92, 246, 0.3);
          backdrop-filter: blur(10px);
          z-index: 999;
        }

        .ai-summary-icon {
          animation: pulse 2s infinite;
        }

        .ai-summary-text span {
          font-size: 14px;
          font-weight: 500;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        /* Dark mode styles */
        @media (prefers-color-scheme: dark) {
          .ai-notification {
            background: rgba(17, 24, 39, 0.95);
            border: 1px solid rgba(55, 65, 81, 0.3);
          }

          .notification-title {
            color: #f9fafb;
          }

          .notification-message {
            color: #d1d5db;
          }

          .notification-icon {
            background: linear-gradient(135deg, #374151, #4b5563);
            color: #d1d5db;
          }

          .notification-close {
            background: rgba(255, 255, 255, 0.05);
            color: #d1d5db;
          }

          .notification-close:hover {
            background: rgba(255, 255, 255, 0.1);
            color: #f3f4f6;
          }
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .ai-notifications-container {
            right: 10px;
            left: 10px;
            top: 80px;
          }

          .ai-notification {
            width: 100%;
          }

          .ai-insights-summary {
            bottom: 100px;
            right: 10px;
          }
        }
      `})]})},ds=()=>{var z,p,h;const{aiInsights:t,isAnalyzing:a,runAIAnalysis:r}=nt(),[n,i]=x.useState(null),[o,s]=x.useState(!1),c=[{id:"spending_patterns",title:"Spending Analysis",icon:e.jsx(qa,{size:20}),color:"from-blue-500 to-cyan-500",data:t.spendingPatterns},{id:"savings_opportunities",title:"Savings Opportunities",icon:e.jsx(se,{size:20}),color:"from-green-500 to-emerald-500",data:t.savingsOpportunities},{id:"anomalies",title:"Unusual Activity",icon:e.jsx(ue,{size:20}),color:"from-red-500 to-orange-500",data:t.anomalies},{id:"predictions",title:"AI Predictions",icon:e.jsx(fe,{size:20}),color:"from-purple-500 to-pink-500",data:t.predictions}],l=({data:u})=>{var w,b,T;return e.jsxs("div",{className:"insight-detail",children:[e.jsx("h4",{children:"Spending Analysis"}),((w=u==null?void 0:u.topCategories)==null?void 0:w.length)>0?e.jsxs("div",{className:"spending-breakdown",children:[u.topCategories.map(([v,A],k)=>e.jsxs("div",{className:"category-item",children:[e.jsxs("div",{className:"category-info",children:[e.jsx("span",{className:"category-name",children:v}),e.jsxs("span",{className:"category-amount",children:["₹",A.toLocaleString()]})]}),e.jsx("div",{className:"category-bar",children:e.jsx("div",{className:"category-fill",style:{width:`${A/u.topCategories[0][1]*100}%`,background:`hsl(${k*60}, 70%, 60%)`}})})]},v)),e.jsxs("div",{className:"spending-summary",children:[e.jsxs("p",{children:["Average daily spending: ₹",((b=u.averageDaily)==null?void 0:b.toFixed(0))||0]}),e.jsxs("p",{children:["Average monthly spending: ₹",((T=u.averageMonthly)==null?void 0:T.toFixed(0))||0]})]})]}):e.jsx("p",{children:"Add more transactions to see spending patterns"})]})},d=({data:u})=>e.jsxs("div",{className:"insight-detail",children:[e.jsx("h4",{children:"AI-Powered Savings Suggestions"}),(u==null?void 0:u.length)>0?e.jsx("div",{className:"savings-list",children:u.map((w,b)=>e.jsxs(j.div,{className:`savings-item priority-${w.priority}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:b*.1},children:[e.jsx("div",{className:"savings-icon",children:e.jsx(Ha,{size:16})}),e.jsxs("div",{className:"savings-content",children:[e.jsx("p",{children:w.message}),e.jsxs("div",{className:"savings-amount",children:["Potential Savings: ₹",w.potentialSaving]})]})]},b))}):e.jsx("p",{children:"No specific savings opportunities identified yet"})]}),m=({data:u})=>e.jsxs("div",{className:"insight-detail",children:[e.jsx("h4",{children:"Unusual Transaction Activity"}),(u==null?void 0:u.length)>0?e.jsx("div",{className:"anomalies-list",children:u.slice(0,5).map((w,b)=>e.jsxs(j.div,{className:`anomaly-item severity-${w.severity}`,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:b*.1},children:[e.jsx("div",{className:"anomaly-icon",children:e.jsx(ue,{size:16})}),e.jsxs("div",{className:"anomaly-content",children:[e.jsx("p",{children:w.message}),e.jsx("span",{className:"anomaly-date",children:new Date(w.date).toLocaleDateString()})]})]},b))}):e.jsx("p",{children:"No unusual activity detected"})]}),f=({data:u})=>e.jsxs("div",{className:"insight-detail",children:[e.jsx("h4",{children:"AI Financial Predictions"}),u&&Object.keys(u).length>0?e.jsxs("div",{className:"predictions-grid",children:[u.nextMonth&&e.jsxs("div",{className:"prediction-card",children:[e.jsxs("div",{className:"prediction-header",children:[e.jsx(Ct,{size:16}),e.jsx("span",{children:"Next Month Forecast"})]}),e.jsxs("div",{className:"prediction-value",children:["₹",u.nextMonth.toFixed(0)]})]}),Object.entries(u).filter(([w])=>w!=="nextMonth").map(([w,b])=>e.jsxs("div",{className:"prediction-card",children:[e.jsxs("div",{className:"prediction-header",children:[e.jsx(it,{size:16}),e.jsx("span",{children:w})]}),e.jsxs("div",{className:"prediction-value",children:["₹",b.toFixed(0),"/mo"]})]},w))]}):e.jsx("p",{children:"Building prediction models from your transaction data..."})]}),S=u=>{switch(u.id){case"spending_patterns":return e.jsx(l,{data:u.data});case"savings_opportunities":return e.jsx(d,{data:u.data});case"anomalies":return e.jsx(m,{data:u.data});case"predictions":return e.jsx(f,{data:u.data});default:return e.jsx("div",{children:"Insight details not available"})}};return e.jsxs("div",{className:"ai-insights-dashboard",children:[e.jsxs("div",{className:"insights-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsxs("div",{className:"ai-badge",children:[e.jsx($a,{size:20}),e.jsx("span",{children:"AI Insights"}),a&&e.jsx("div",{className:"analyzing-pulse"})]}),e.jsx("h3",{children:"Financial Intelligence"})]}),e.jsxs("div",{className:"header-actions",children:[e.jsxs("button",{className:"refresh-btn",onClick:r,disabled:a,children:[e.jsx(me,{size:16,className:a?"spinning":""}),a?"Analyzing...":"Refresh"]}),e.jsx("button",{className:"expand-btn",onClick:()=>s(!o),children:o?e.jsx(La,{size:16}):e.jsx(Ba,{size:16})})]})]}),e.jsxs("div",{className:"ai-quick-stats",children:[e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(ts,{size:16})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("span",{className:"stat-value",children:((z=t.savingsOpportunities)==null?void 0:z.length)||0}),e.jsx("span",{className:"stat-label",children:"Opportunities"})]})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(ue,{size:16})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("span",{className:"stat-value",children:((p=t.anomalies)==null?void 0:p.length)||0}),e.jsx("span",{className:"stat-label",children:"Alerts"})]})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(fe,{size:16})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("span",{className:"stat-value",children:(h=t.trends)!=null&&h.isSpendingIncreasing?"↗":"↘"}),e.jsx("span",{className:"stat-label",children:"Trend"})]})]})]}),e.jsx("div",{className:"insights-grid",children:c.map((u,w)=>{var b;return e.jsxs(j.div,{className:`insight-card ${(n==null?void 0:n.id)===u.id?"selected":""}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:w*.1},onClick:()=>i((n==null?void 0:n.id)===u.id?null:u),children:[e.jsx("div",{className:`card-gradient bg-gradient-to-r ${u.color}`}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"card-icon",children:u.icon}),e.jsx("h4",{children:u.title})]}),e.jsxs("div",{className:"card-preview",children:[u.id==="spending_patterns"&&((b=u.data)==null?void 0:b.topCategories)&&e.jsxs("span",{children:[u.data.topCategories.length," categories analyzed"]}),u.id==="savings_opportunities"&&u.data&&e.jsxs("span",{children:[u.data.length," opportunities found"]}),u.id==="anomalies"&&u.data&&e.jsxs("span",{children:[u.data.length," alerts detected"]}),u.id==="predictions"&&u.data&&e.jsxs("span",{children:[Object.keys(u.data).length," predictions available"]})]})]})]},u.id)})}),e.jsx(Y,{children:n&&e.jsx(j.div,{className:"insight-detail-panel",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:S(n)})}),e.jsx("style",{jsx:!0,children:`
        .ai-insights-dashboard {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 24px;
        }

        .insights-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ai-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          color: white;
          padding: 8px 12px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 500;
          position: relative;
        }

        .analyzing-pulse {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 12px;
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          animation: pulse 2s infinite;
          opacity: 0.6;
        }

        .insights-header h3 {
          margin: 0;
          color: #111827;
          font-size: 18px;
        }

        .header-actions {
          display: flex;
          gap: 8px;
        }

        .refresh-btn, .expand-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .refresh-btn:hover, .expand-btn:hover {
          background: rgba(255, 255, 255, 1);
          transform: translateY(-1px);
        }

        .refresh-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .ai-quick-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .stat-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
        }

        .stat-label {
          font-size: 12px;
          color: #6b7280;
        }

        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }

        .insight-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .insight-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
        }

        .insight-card.selected {
          border-color: #8b5cf6;
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(139, 92, 246, 0.2);
        }

        .card-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .card-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
        }

        .card-header h4 {
          margin: 0;
          color: #111827;
          font-size: 16px;
        }

        .card-preview {
          color: #6b7280;
          font-size: 14px;
        }

        .insight-detail-panel {
          background: rgba(248, 250, 252, 0.8);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .insight-detail h4 {
          margin: 0 0 20px 0;
          color: #111827;
          font-size: 18px;
        }

        .spending-breakdown, .savings-list, .anomalies-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .category-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .category-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .category-name {
          font-weight: 500;
          color: #374151;
          text-transform: capitalize;
        }

        .category-amount {
          font-weight: 600;
          color: #111827;
        }

        .category-bar {
          height: 8px;
          background: #f3f4f6;
          border-radius: 4px;
          overflow: hidden;
        }

        .category-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .spending-summary {
          margin-top: 16px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .spending-summary p {
          margin: 4px 0;
          color: #6b7280;
          font-size: 14px;
        }

        .savings-item, .anomaly-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .savings-item.priority-high {
          border-left: 4px solid #10b981;
        }

        .anomaly-item.severity-high {
          border-left: 4px solid #ef4444;
        }

        .savings-icon, .anomaly-icon {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          flex-shrink: 0;
        }

        .savings-content, .anomaly-content {
          flex: 1;
        }

        .savings-content p, .anomaly-content p {
          margin: 0 0 8px 0;
          color: #374151;
          font-size: 14px;
        }

        .savings-amount {
          font-weight: 600;
          color: #10b981;
          font-size: 13px;
        }

        .anomaly-date {
          font-size: 12px;
          color: #6b7280;
        }

        .predictions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .prediction-card {
          padding: 16px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .prediction-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          color: #6b7280;
          font-size: 14px;
        }

        .prediction-value {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
        }

        /* Dark mode */
        @media (prefers-color-scheme: dark) {
          .ai-insights-dashboard {
            background: rgba(17, 24, 39, 0.8);
          }

          .insights-header h3 {
            color: #f9fafb;
          }

          .stat-value, .card-header h4, .insight-detail h4 {
            color: #f9fafb;
          }

          .category-name, .savings-content p, .anomaly-content p {
            color: #d1d5db;
          }
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .ai-quick-stats {
            grid-template-columns: 1fr;
          }

          .insights-grid {
            grid-template-columns: 1fr;
          }

          .predictions-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},ps=()=>{const t=we(),[a,r]=x.useState({totalBalance:125e3,monthlyIncome:85e3,monthlyExpenses:45e3,savingsRate:47}),[n,i]=x.useState([{id:1,type:"income",amount:85e3,description:"Salary Credit",date:"2025-09-16",category:"Income"},{id:2,type:"expense",amount:2500,description:"Grocery Shopping",date:"2025-09-15",category:"Food"},{id:3,type:"expense",amount:1200,description:"Fuel",date:"2025-09-14",category:"Transportation"},{id:4,type:"income",amount:5e3,description:"Freelance Project",date:"2025-09-13",category:"Income"}]),[o,s]=x.useState([{category:"Food",spent:12500,budget:15e3,color:"#10b981"},{category:"Transportation",spent:8e3,budget:1e4,color:"#3b82f6"},{category:"Entertainment",spent:4500,budget:5e3,color:"#f59e0b"},{category:"Shopping",spent:6e3,budget:8e3,color:"#8b5cf6"}]),c={hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.1,staggerChildren:.1}}},l={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:100}}},d=()=>{$.success("Navigating to Transactions page..."),t("/transactions")},m=()=>{$.success("Navigating to Budget Management..."),t("/budgets")},f=p=>{$.success("Opening transaction details..."),t("/transactions",{state:{highlightTransaction:p}})},S=(p,h)=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),f(h))},z=()=>{$.success("Opening quick add transaction..."),t("/transactions?action=add")};return e.jsxs(j.div,{className:"dashboard",variants:c,initial:"hidden",animate:"visible",children:[e.jsxs("div",{className:"stats-grid",children:[e.jsxs(j.div,{className:"stat-card income",variants:l,children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(fe,{size:24})}),e.jsxs("div",{className:"stat-trend positive",children:[e.jsx(pe,{size:16}),"+12.5%"]})]}),e.jsxs("div",{className:"stat-content",children:[e.jsx("h3",{children:"Total Balance"}),e.jsxs("p",{className:"stat-value",children:["₹",a.totalBalance.toLocaleString()]}),e.jsx("span",{className:"stat-label",children:"Available balance"})]})]}),e.jsxs(j.div,{className:"stat-card income",variants:l,children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(se,{size:24})}),e.jsxs("div",{className:"stat-trend positive",children:[e.jsx(pe,{size:16}),"+8.2%"]})]}),e.jsxs("div",{className:"stat-content",children:[e.jsx("h3",{children:"Monthly Income"}),e.jsxs("p",{className:"stat-value",children:["₹",a.monthlyIncome.toLocaleString()]}),e.jsx("span",{className:"stat-label",children:"This month"})]})]}),e.jsxs(j.div,{className:"stat-card expense",variants:l,children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(je,{size:24})}),e.jsxs("div",{className:"stat-trend negative",children:[e.jsx(qe,{size:16}),"+5.1%"]})]}),e.jsxs("div",{className:"stat-content",children:[e.jsx("h3",{children:"Monthly Expenses"}),e.jsxs("p",{className:"stat-value",children:["₹",a.monthlyExpenses.toLocaleString()]}),e.jsx("span",{className:"stat-label",children:"This month"})]})]}),e.jsxs(j.div,{className:"stat-card savings",variants:l,children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(te,{size:24})}),e.jsxs("div",{className:"stat-trend positive",children:[e.jsx(pe,{size:16}),"+2.3%"]})]}),e.jsxs("div",{className:"stat-content",children:[e.jsx("h3",{children:"Savings Rate"}),e.jsxs("p",{className:"stat-value",children:[a.savingsRate,"%"]}),e.jsx("span",{className:"stat-label",children:"Of total income"})]})]})]}),e.jsx(ds,{}),e.jsxs("div",{className:"dashboard-content",children:[e.jsxs(j.div,{className:"card transactions-card",variants:l,children:[e.jsxs("div",{className:"card-header",children:[e.jsx("h2",{children:"Recent Transactions"}),e.jsx(j.button,{className:"btn btn-secondary",onClick:d,whileHover:{scale:1.05},whileTap:{scale:.95},children:"View All"})]}),e.jsx("div",{className:"card-body",children:e.jsx("div",{className:"transactions-list",children:n.map((p,h)=>e.jsxs(j.div,{className:"transaction-item clickable",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:h*.1},onClick:()=>f(p.id),onKeyDown:u=>S(u,p.id),tabIndex:0,role:"button","aria-label":`View details for ${p.description} transaction`,whileHover:{scale:1.02,backgroundColor:"var(--bg-tertiary)"},whileTap:{scale:.98},children:[e.jsx("div",{className:"transaction-icon",children:p.type==="income"?e.jsx(pe,{size:20,className:"income-icon"}):e.jsx(qe,{size:20,className:"expense-icon"})}),e.jsxs("div",{className:"transaction-details",children:[e.jsx("h4",{children:p.description}),e.jsxs("p",{children:[p.category," • ",p.date]})]}),e.jsxs("div",{className:`transaction-amount ${p.type}`,children:[p.type==="income"?"+":"-","₹",p.amount.toLocaleString()]})]},p.id))})})]}),e.jsxs(j.div,{className:"card budget-card",variants:l,children:[e.jsxs("div",{className:"card-header",children:[e.jsx("h2",{children:"Budget Overview"}),e.jsx(j.button,{className:"btn btn-secondary",onClick:m,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Manage"})]}),e.jsx("div",{className:"card-body",children:e.jsx("div",{className:"budget-list",children:o.map((p,h)=>{const u=p.spent/p.budget*100;return e.jsxs(j.div,{className:"budget-item",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:h*.1},children:[e.jsxs("div",{className:"budget-header",children:[e.jsx("span",{className:"budget-category",children:p.category}),e.jsxs("span",{className:"budget-amount",children:["₹",p.spent.toLocaleString()," / ₹",p.budget.toLocaleString()]})]}),e.jsxs("div",{className:"budget-progress",children:[e.jsx("div",{className:"progress-bar",children:e.jsx(j.div,{className:"progress-fill",style:{backgroundColor:p.color,width:`${Math.min(u,100)}%`},initial:{width:0},animate:{width:`${Math.min(u,100)}%`},transition:{duration:1,delay:h*.2}})}),e.jsxs("span",{className:`budget-percentage ${u>90?"warning":""}`,children:[u.toFixed(0),"%"]})]})]},p.category)})})})]})]}),e.jsx(j.button,{className:"fab",onClick:z,whileHover:{scale:1.1},whileTap:{scale:.9},initial:{scale:0},animate:{scale:1},transition:{delay:.5,type:"spring",stiffness:500,damping:30},title:"Quick Add Transaction",children:e.jsx(he,{size:24})}),e.jsx("style",{jsx:!0,children:`
        .dashboard {
          padding: 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 1.5rem;
          backdrop-filter: blur(20px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6);
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .stat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: white;
        }

        .stat-trend {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .stat-trend.positive {
          background: rgba(16, 185, 129, 0.1);
          color: var(--success);
        }

        .stat-trend.negative {
          background: rgba(239, 68, 68, 0.1);
          color: var(--error);
        }

        .stat-content h3 {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0 0 0.5rem 0;
          font-weight: 500;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
          line-height: 1.2;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .dashboard-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .transactions-card,
        .budget-card {
          height: fit-content;
        }

        .transactions-list,
        .budget-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .transaction-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--bg-secondary);
          border-radius: var(--border-radius-md);
          border: 1px solid var(--border-color);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .transaction-item.clickable {
          cursor: pointer;
        }

        .transaction-item:hover {
          background: var(--bg-tertiary);
          transform: translateX(4px);
          box-shadow: var(--shadow-md);
        }

        .transaction-item.clickable:hover {
          border-color: var(--text-accent);
        }

        .transaction-item.clickable:focus {
          outline: 2px solid var(--text-accent);
          outline-offset: 2px;
          border-color: var(--text-accent);
        }

        .transaction-item.clickable:active {
          transform: translateX(2px) scale(0.98);
        }

        .transaction-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-tertiary);
        }

        .income-icon {
          color: var(--success);
        }

        .expense-icon {
          color: var(--error);
        }

        .transaction-details {
          flex: 1;
        }

        .transaction-details h4 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }

        .transaction-details p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .transaction-amount {
          font-weight: 700;
          font-size: 1rem;
        }

        .transaction-amount.income {
          color: var(--success);
        }

        .transaction-amount.expense {
          color: var(--error);
        }

        .budget-item {
          padding: 1rem;
          background: var(--bg-secondary);
          border-radius: var(--border-radius-md);
          border: 1px solid var(--border-color);
        }

        .budget-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .budget-category {
          font-weight: 600;
          color: var(--text-primary);
        }

        .budget-amount {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .budget-progress {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .progress-bar {
          flex: 1;
          height: 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .budget-percentage {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          min-width: 35px;
          text-align: right;
        }

        .budget-percentage.warning {
          color: var(--warning);
        }

        @media (max-width: 1024px) {
          .dashboard-content {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Floating Action Button */
        .fab {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          border: none;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: var(--shadow-lg);
          z-index: 1000;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fab:hover {
          box-shadow: var(--shadow-xl);
          transform: translateY(-2px);
        }

        .fab:active {
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .fab {
            bottom: 1.5rem;
            right: 1.5rem;
            width: 52px;
            height: 52px;
          }
        }

        @media (max-width: 480px) {
          .fab {
            bottom: 1rem;
            right: 1rem;
            width: 48px;
            height: 48px;
          }
        }
      `})]})},ms=()=>{const t=Xt();we();const{transactions:a,loading:r,addTransaction:n,updateTransaction:i,deleteTransaction:o}=rt(),[s,c]=x.useState([]),[l,d]=x.useState(""),[m,f]=x.useState("all"),[S,z]=x.useState("all"),[p,h]=x.useState("all"),[u,w]=x.useState(!1),[b,T]=x.useState(null),[v,A]=x.useState(!1),[k,C]=x.useState({type:"expense",amount:"",description:"",category:"Food & Dining",date:new Date().toISOString().split("T")[0]}),D=["all","Food & Dining","Transportation","Bills & Utilities","Entertainment","Shopping","Healthcare","Education","Salary","Freelance"],R=()=>{let E=a;if(l&&(E=E.filter(P=>P.description.toLowerCase().includes(l.toLowerCase())||P.category.toLowerCase().includes(l.toLowerCase()))),m!=="all"&&(E=E.filter(P=>P.category===m)),S!=="all"&&(E=E.filter(P=>P.type===S)),p!=="all"){const P=new Date;E=E.filter(B=>{const X=new Date(B.date),q=Math.floor((P-X)/(1e3*60*60*24));switch(p){case"today":return q===0;case"week":return q<=7;case"month":return q<=30;case"year":return q<=365;default:return!0}})}c(E)};x.useEffect(()=>{var P;const E=(P=t.state)==null?void 0:P.highlightTransaction;E&&(T(E),$.success(`Highlighting transaction #${E}`))},[t.state]),x.useEffect(()=>{R()},[l,m,S,p,a]);const y=()=>{A(!0)},N=E=>{if(E.preventDefault(),!k.amount||!k.description){$.error("Please fill in all required fields");return}try{n(k),$.success("Transaction added successfully!"),C({type:"expense",amount:"",description:"",category:"Food & Dining",date:new Date().toISOString().split("T")[0]}),A(!1)}catch{$.error("Failed to add transaction")}},O=(E,P)=>{C(B=>({...B,[E]:P}))},F=E=>{$.success(`Editing transaction: ${E.description}`)},W=E=>{window.confirm("Are you sure you want to delete this transaction?")&&(o(E),$.success("Transaction deleted successfully"))},oe=()=>{d(""),f("all"),z("all"),h("all"),$.success("Filters cleared")},H={totalIncome:s.filter(E=>E.type==="income").reduce((E,P)=>E+P.amount,0),totalExpenses:s.filter(E=>E.type==="expense").reduce((E,P)=>E+P.amount,0),totalTransactions:s.length};return e.jsxs(j.div,{className:"transactions-page",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{className:"header-content",children:[e.jsx("h1",{children:"Transactions"}),e.jsx("p",{children:"Manage and track your financial transactions"})]}),e.jsxs(j.button,{className:"btn btn-primary add-btn",onClick:y,whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx(he,{size:20}),"Add Transaction"]})]}),e.jsxs("div",{className:"stats-overview",children:[e.jsxs(j.div,{className:"stat-card income",whileHover:{scale:1.02},children:[e.jsx("div",{className:"stat-icon",children:e.jsx(pe,{size:24})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("p",{className:"stat-label",children:"Total Income"}),e.jsxs("p",{className:"stat-value",children:["+₹",H.totalIncome.toLocaleString()]})]})]}),e.jsxs(j.div,{className:"stat-card expense",whileHover:{scale:1.02},children:[e.jsx("div",{className:"stat-icon",children:e.jsx(qe,{size:24})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("p",{className:"stat-label",children:"Total Expenses"}),e.jsxs("p",{className:"stat-value",children:["-₹",H.totalExpenses.toLocaleString()]})]})]}),e.jsxs(j.div,{className:"stat-card balance",whileHover:{scale:1.02},children:[e.jsx("div",{className:"stat-icon",children:e.jsx(se,{size:24})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("p",{className:"stat-label",children:"Net Balance"}),e.jsxs("p",{className:"stat-value",children:["₹",(H.totalIncome-H.totalExpenses).toLocaleString()]})]})]}),e.jsxs(j.div,{className:"stat-card total",whileHover:{scale:1.02},children:[e.jsx("div",{className:"stat-icon",children:e.jsx(je,{size:24})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("p",{className:"stat-label",children:"Total Transactions"}),e.jsx("p",{className:"stat-value",children:H.totalTransactions})]})]})]}),e.jsxs("div",{className:"filters-section",children:[e.jsxs("div",{className:"search-container",children:[e.jsx(Ya,{size:20,className:"search-icon"}),e.jsx("input",{type:"text",placeholder:"Search transactions...",value:l,onChange:E=>d(E.target.value),className:"search-input"})]}),e.jsxs("div",{className:"filter-controls",children:[e.jsxs("button",{className:`filter-btn ${u?"active":""}`,onClick:()=>w(!u),children:[e.jsx(Ua,{size:18}),"Filters"]}),(l||m!=="all"||S!=="all"||p!=="all")&&e.jsx("button",{className:"clear-filters-btn",onClick:oe,children:"Clear Filters"})]})]}),e.jsx(Y,{children:u&&e.jsx(j.div,{className:"advanced-filters",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:e.jsxs("div",{className:"filter-row",children:[e.jsxs("div",{className:"filter-group",children:[e.jsx("label",{children:"Category"}),e.jsx("select",{value:m,onChange:E=>f(E.target.value),children:D.map(E=>e.jsx("option",{value:E,children:E==="all"?"All Categories":E},E))})]}),e.jsxs("div",{className:"filter-group",children:[e.jsx("label",{children:"Type"}),e.jsxs("select",{value:S,onChange:E=>z(E.target.value),children:[e.jsx("option",{value:"all",children:"All Types"}),e.jsx("option",{value:"income",children:"Income"}),e.jsx("option",{value:"expense",children:"Expense"})]})]}),e.jsxs("div",{className:"filter-group",children:[e.jsx("label",{children:"Date Range"}),e.jsxs("select",{value:p,onChange:E=>h(E.target.value),children:[e.jsx("option",{value:"all",children:"All Time"}),e.jsx("option",{value:"today",children:"Today"}),e.jsx("option",{value:"week",children:"This Week"}),e.jsx("option",{value:"month",children:"This Month"}),e.jsx("option",{value:"year",children:"This Year"})]})]})]})})}),e.jsx("div",{className:"transactions-container",children:r?e.jsxs("div",{className:"loading-state",children:[e.jsx(j.div,{className:"loading-spinner",animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}}),e.jsx("p",{children:"Loading transactions..."})]}):s.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx(je,{size:64,className:"empty-icon"}),e.jsx("h3",{children:"No transactions found"}),e.jsx("p",{children:"Try adjusting your filters or add your first transaction"}),e.jsxs("button",{className:"btn btn-primary",onClick:y,children:[e.jsx(he,{size:20}),"Add Transaction"]})]}):e.jsx("div",{className:"transactions-list",children:s.map((E,P)=>e.jsx(j.div,{className:`transaction-item ${E.type} ${b===E.id?"highlighted":""}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:P*.05},whileHover:{scale:1.01},children:e.jsxs("div",{className:"transaction-main",children:[e.jsx("div",{className:"transaction-icon",children:E.type==="income"?e.jsx(pe,{size:20,className:"income-icon"}):e.jsx(qe,{size:20,className:"expense-icon"})}),e.jsxs("div",{className:"transaction-details",children:[e.jsx("h4",{children:E.description}),e.jsxs("div",{className:"transaction-meta",children:[e.jsx("span",{className:"category",children:E.category}),e.jsx("span",{className:"separator",children:"•"}),e.jsx("span",{className:"date",children:new Date(E.date).toLocaleDateString()}),e.jsx("span",{className:"separator",children:"•"}),e.jsx("span",{className:"payment-method",children:E.paymentMethod.replace("_"," ")})]})]}),e.jsxs("div",{className:`transaction-amount ${E.type}`,children:[E.type==="income"?"+":"-","₹",E.amount.toLocaleString()]}),e.jsxs("div",{className:"transaction-actions",children:[e.jsx("button",{className:"action-btn edit",onClick:()=>F(E),title:"Edit transaction",children:e.jsx(_a,{size:16})}),e.jsx("button",{className:"action-btn delete",onClick:()=>W(E.id),title:"Delete transaction",children:e.jsx(Ve,{size:16})})]})]})},E.id))})}),e.jsx("style",{jsx:!0,children:`
        .transactions-page {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          gap: 1rem;
        }

        .header-content h1 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
        }

        .header-content p {
          color: var(--text-secondary);
          margin: 0;
        }

        .add-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          white-space: nowrap;
        }

        .stats-overview {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          backdrop-filter: blur(20px);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .stat-card.income .stat-icon {
          background: linear-gradient(135deg, #10b981, #065f46);
        }

        .stat-card.expense .stat-icon {
          background: linear-gradient(135deg, #ef4444, #991b1b);
        }

        .stat-card.balance .stat-icon {
          background: linear-gradient(135deg, #3b82f6, #1e40af);
        }

        .stat-card.total .stat-icon {
          background: linear-gradient(135deg, #8b5cf6, #5b21b6);
        }

        .stat-content {
          flex: 1;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0 0 0.25rem 0;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .filters-section {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .search-container {
          position: relative;
          flex: 1;
          min-width: 300px;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-tertiary);
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 3rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--card-bg);
          color: var(--text-primary);
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--text-accent);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .filter-controls {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--card-bg);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover,
        .filter-btn.active {
          border-color: var(--text-accent);
          color: var(--text-accent);
        }

        .clear-filters-btn {
          padding: 0.75rem 1rem;
          border: none;
          border-radius: var(--border-radius-md);
          background: var(--error);
          color: white;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .clear-filters-btn:hover {
          background: #dc2626;
        }

        .advanced-filters {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }

        .filter-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .filter-group label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .filter-group select {
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--bg-secondary);
          color: var(--text-primary);
          cursor: pointer;
        }

        .transactions-container {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
        }

        .loading-state,
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          text-align: center;
        }

        .loading-spinner {
          width: 32px;
          height: 32px;
          border: 3px solid var(--border-color);
          border-top: 3px solid var(--text-accent);
          border-radius: 50%;
          margin-bottom: 1rem;
        }

        .empty-icon {
          color: var(--text-tertiary);
          margin-bottom: 1rem;
        }

        .empty-state h3 {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
        }

        .empty-state p {
          color: var(--text-secondary);
          margin: 0 0 1.5rem 0;
        }

        .transactions-list {
          divide-y: 1px solid var(--border-color);
        }

        .transaction-item {
          padding: 1.5rem;
          transition: all 0.2s ease;
          border-left: 4px solid transparent;
        }

        .transaction-item:hover {
          background: var(--bg-tertiary);
        }

        .transaction-item.highlighted {
          border-left-color: var(--text-accent);
          background: rgba(59, 130, 246, 0.05);
        }

        .transaction-main {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .transaction-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .transaction-item.income .transaction-icon {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }

        .transaction-item.expense .transaction-icon {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .transaction-details {
          flex: 1;
          min-width: 0;
        }

        .transaction-details h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }

        .transaction-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .separator {
          color: var(--text-tertiary);
        }

        .transaction-amount {
          font-size: 1.125rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .transaction-amount.income {
          color: #10b981;
        }

        .transaction-amount.expense {
          color: #ef4444;
        }

        .transaction-actions {
          display: flex;
          gap: 0.5rem;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .transaction-item:hover .transaction-actions {
          opacity: 1;
        }

        .action-btn {
          width: 32px;
          height: 32px;
          border: none;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-btn.edit {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .action-btn.edit:hover {
          background: rgba(59, 130, 246, 0.2);
        }

        .action-btn.delete {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .action-btn.delete:hover {
          background: rgba(239, 68, 68, 0.2);
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-content {
          background: var(--card-bg);
          border-radius: 12px;
          width: 100%;
          max-width: 500px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 1.5rem 1rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .modal-header h2 {
          margin: 0;
          color: var(--text-primary);
          font-size: 1.5rem;
          font-weight: 600;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .close-btn:hover {
          background: var(--hover-bg);
          color: var(--text-primary);
        }

        .transaction-form {
          padding: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          background: var(--input-bg);
          color: var(--text-primary);
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }

        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          margin-top: 2rem;
        }

        .btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-primary {
          background: var(--primary-color);
          color: white;
        }

        .btn-primary:hover {
          background: var(--primary-hover);
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: var(--secondary-bg);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }

        .btn-secondary:hover {
          background: var(--hover-bg);
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: stretch;
          }

          .stats-overview {
            grid-template-columns: repeat(2, 1fr);
          }

          .filters-section {
            flex-direction: column;
          }

          .search-container {
            min-width: auto;
          }

          .filter-row {
            grid-template-columns: 1fr;
          }

          .transaction-main {
            flex-wrap: wrap;
            gap: 0.75rem;
          }

          .transaction-actions {
            opacity: 1;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .modal-content {
            margin: 0.5rem;
            max-height: 95vh;
          }

          .modal-header,
          .transaction-form {
            padding: 1rem;
          }

          .form-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .stats-overview {
            grid-template-columns: 1fr;
          }

          .transaction-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }

          .separator {
            display: none;
          }
        }
      `}),e.jsx(Y,{children:v&&e.jsx(j.div,{className:"modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>A(!1),children:e.jsxs(j.div,{className:"modal-content",initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:E=>E.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h2",{children:"Add New Transaction"}),e.jsx("button",{className:"close-btn",onClick:()=>A(!1),children:"×"})]}),e.jsxs("form",{onSubmit:N,className:"transaction-form",children:[e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Type *"}),e.jsxs("select",{value:k.type,onChange:E=>O("type",E.target.value),required:!0,children:[e.jsx("option",{value:"expense",children:"Expense"}),e.jsx("option",{value:"income",children:"Income"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Amount *"}),e.jsx("input",{type:"number",step:"0.01",value:k.amount,onChange:E=>O("amount",E.target.value),placeholder:"0.00",required:!0})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Description *"}),e.jsx("input",{type:"text",value:k.description,onChange:E=>O("description",E.target.value),placeholder:"Enter transaction description",required:!0})]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Category"}),e.jsx("select",{value:k.category,onChange:E=>O("category",E.target.value),children:D.filter(E=>E!=="all").map(E=>e.jsx("option",{value:E,children:E},E))})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Date"}),e.jsx("input",{type:"date",value:k.date,onChange:E=>O("date",E.target.value)})]})]}),e.jsxs("div",{className:"form-actions",children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>A(!1),children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Add Transaction"})]})]})]})})})]})},us=()=>{we();const[t,a]=x.useState([]),[r,n]=x.useState([]),[i,o]=x.useState(!0),[s,c]=x.useState(""),[l,d]=x.useState("all"),[m,f]=x.useState("all"),[S,z]=x.useState(!1),p=[{id:1,category:"Food & Dining",budgetAmount:15e3,spentAmount:12500,period:"monthly",startDate:"2025-09-01",endDate:"2025-09-30",color:"#10b981",status:"on-track",transactions:23,lastUpdated:"2025-09-18"},{id:2,category:"Transportation",budgetAmount:1e4,spentAmount:8e3,period:"monthly",startDate:"2025-09-01",endDate:"2025-09-30",color:"#3b82f6",status:"on-track",transactions:15,lastUpdated:"2025-09-17"},{id:3,category:"Entertainment",budgetAmount:5e3,spentAmount:4500,period:"monthly",startDate:"2025-09-01",endDate:"2025-09-30",color:"#f59e0b",status:"warning",transactions:8,lastUpdated:"2025-09-16"},{id:4,category:"Shopping",budgetAmount:8e3,spentAmount:6e3,period:"monthly",startDate:"2025-09-01",endDate:"2025-09-30",color:"#8b5cf6",status:"on-track",transactions:12,lastUpdated:"2025-09-15"},{id:5,category:"Healthcare",budgetAmount:3e3,spentAmount:3200,period:"monthly",startDate:"2025-09-01",endDate:"2025-09-30",color:"#ef4444",status:"exceeded",transactions:5,lastUpdated:"2025-09-14"},{id:6,category:"Education",budgetAmount:12e3,spentAmount:5e3,period:"quarterly",startDate:"2025-07-01",endDate:"2025-09-30",color:"#06b6d4",status:"under-budget",transactions:3,lastUpdated:"2025-09-10"}],h=["all","on-track","warning","exceeded","under-budget"],u=["all","weekly","monthly","quarterly","yearly"],w=async()=>{o(!0);try{await new Promise(N=>setTimeout(N,1e3));const y=p.map(N=>{const O=N.spentAmount/N.budgetAmount*100;let F="on-track";return O>100?F="exceeded":O>85?F="warning":O<50&&(F="under-budget"),{...N,status:F,percentage:O}});a(y),n(y)}catch{$.error("Failed to fetch budgets")}finally{o(!1)}},b=()=>{let y=t;s&&(y=y.filter(N=>N.category.toLowerCase().includes(s.toLowerCase()))),l!=="all"&&(y=y.filter(N=>N.status===l)),m!=="all"&&(y=y.filter(N=>N.period===m)),n(y)};x.useEffect(()=>{w()},[]),x.useEffect(()=>{b()},[s,l,m,t]);const T=()=>{$.success("Opening create budget form...")},v=y=>{$.success(`Editing budget for ${y.category}`)},A=y=>{window.confirm("Are you sure you want to delete this budget?")&&(a(t.filter(N=>N.id!==y)),$.success("Budget deleted successfully"))},k=()=>{c(""),d("all"),f("all"),$.success("Filters cleared")},C=y=>{switch(y){case"exceeded":return e.jsx(ue,{size:20,className:"status-icon exceeded"});case"warning":return e.jsx(ue,{size:20,className:"status-icon warning"});case"on-track":return e.jsx(Fa,{size:20,className:"status-icon on-track"});case"under-budget":return e.jsx(Va,{size:20,className:"status-icon under-budget"});default:return e.jsx(te,{size:20,className:"status-icon"})}},D=y=>{switch(y){case"exceeded":return"Budget Exceeded";case"warning":return"Close to Limit";case"on-track":return"On Track";case"under-budget":return"Under Budget";default:return"Unknown"}},R={totalBudgets:r.length,totalBudgetAmount:r.reduce((y,N)=>y+N.budgetAmount,0),totalSpent:r.reduce((y,N)=>y+N.spentAmount,0),exceededBudgets:r.filter(y=>y.status==="exceeded").length};return e.jsxs(j.div,{className:"budgets-page",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{className:"header-content",children:[e.jsx("h1",{children:"Budget Management"}),e.jsx("p",{children:"Track and manage your spending budgets"})]}),e.jsxs(j.button,{className:"btn btn-primary add-btn",onClick:T,whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx(he,{size:20}),"Create Budget"]})]}),e.jsxs("div",{className:"stats-overview",children:[e.jsxs(j.div,{className:"stat-card total",whileHover:{scale:1.02},children:[e.jsx("div",{className:"stat-icon",children:e.jsx(te,{size:24})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("p",{className:"stat-label",children:"Total Budgets"}),e.jsx("p",{className:"stat-value",children:R.totalBudgets})]})]}),e.jsxs(j.div,{className:"stat-card budget",whileHover:{scale:1.02},children:[e.jsx("div",{className:"stat-icon",children:e.jsx(se,{size:24})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("p",{className:"stat-label",children:"Total Budget"}),e.jsxs("p",{className:"stat-value",children:["₹",R.totalBudgetAmount.toLocaleString()]})]})]}),e.jsxs(j.div,{className:"stat-card spent",whileHover:{scale:1.02},children:[e.jsx("div",{className:"stat-icon",children:e.jsx(fe,{size:24})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("p",{className:"stat-label",children:"Total Spent"}),e.jsxs("p",{className:"stat-value",children:["₹",R.totalSpent.toLocaleString()]})]})]}),e.jsxs(j.div,{className:"stat-card remaining",whileHover:{scale:1.02},children:[e.jsx("div",{className:"stat-icon",children:e.jsx(it,{size:24})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("p",{className:"stat-label",children:"Remaining"}),e.jsxs("p",{className:"stat-value",children:["₹",(R.totalBudgetAmount-R.totalSpent).toLocaleString()]})]})]})]}),e.jsxs("div",{className:"filters-section",children:[e.jsxs("div",{className:"search-container",children:[e.jsx(Ya,{size:20,className:"search-icon"}),e.jsx("input",{type:"text",placeholder:"Search budgets...",value:s,onChange:y=>c(y.target.value),className:"search-input"})]}),e.jsxs("div",{className:"filter-controls",children:[e.jsxs("button",{className:`filter-btn ${S?"active":""}`,onClick:()=>z(!S),children:[e.jsx(Ua,{size:18}),"Filters"]}),(s||l!=="all"||m!=="all")&&e.jsx("button",{className:"clear-filters-btn",onClick:k,children:"Clear Filters"})]})]}),e.jsx(Y,{children:S&&e.jsx(j.div,{className:"advanced-filters",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:e.jsxs("div",{className:"filter-row",children:[e.jsxs("div",{className:"filter-group",children:[e.jsx("label",{children:"Status"}),e.jsx("select",{value:l,onChange:y=>d(y.target.value),children:h.map(y=>e.jsx("option",{value:y,children:y==="all"?"All Statuses":D(y)},y))})]}),e.jsxs("div",{className:"filter-group",children:[e.jsx("label",{children:"Period"}),e.jsx("select",{value:m,onChange:y=>f(y.target.value),children:u.map(y=>e.jsx("option",{value:y,children:y==="all"?"All Periods":y.charAt(0).toUpperCase()+y.slice(1)},y))})]})]})})}),e.jsx("div",{className:"budgets-container",children:i?e.jsxs("div",{className:"loading-state",children:[e.jsx(j.div,{className:"loading-spinner",animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}}),e.jsx("p",{children:"Loading budgets..."})]}):r.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx(te,{size:64,className:"empty-icon"}),e.jsx("h3",{children:"No budgets found"}),e.jsx("p",{children:"Create your first budget to start tracking your spending"}),e.jsxs("button",{className:"btn btn-primary",onClick:T,children:[e.jsx(he,{size:20}),"Create Budget"]})]}):e.jsx("div",{className:"budgets-grid",children:r.map((y,N)=>e.jsxs(j.div,{className:`budget-card ${y.status}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:N*.1},whileHover:{scale:1.02,y:-4},children:[e.jsxs("div",{className:"budget-header",children:[e.jsxs("div",{className:"budget-category",children:[e.jsx("div",{className:"category-icon",style:{backgroundColor:y.color},children:e.jsx(te,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{children:y.category}),e.jsx("p",{className:"budget-period",children:y.period})]})]}),e.jsxs("div",{className:"budget-actions",children:[e.jsx("button",{className:"action-btn edit",onClick:()=>v(y),title:"Edit budget",children:e.jsx(_a,{size:16})}),e.jsx("button",{className:"action-btn delete",onClick:()=>A(y.id),title:"Delete budget",children:e.jsx(Ve,{size:16})})]})]}),e.jsxs("div",{className:"budget-amounts",children:[e.jsxs("div",{className:"amount-row",children:[e.jsx("span",{className:"amount-label",children:"Spent"}),e.jsxs("span",{className:"amount-value spent",children:["₹",y.spentAmount.toLocaleString()]})]}),e.jsxs("div",{className:"amount-row",children:[e.jsx("span",{className:"amount-label",children:"Budget"}),e.jsxs("span",{className:"amount-value budget",children:["₹",y.budgetAmount.toLocaleString()]})]}),e.jsxs("div",{className:"amount-row",children:[e.jsx("span",{className:"amount-label",children:"Remaining"}),e.jsxs("span",{className:`amount-value remaining ${y.spentAmount>y.budgetAmount?"exceeded":""}`,children:["₹",(y.budgetAmount-y.spentAmount).toLocaleString()]})]})]}),e.jsxs("div",{className:"budget-progress",children:[e.jsxs("div",{className:"progress-header",children:[e.jsx("span",{className:"progress-label",children:"Progress"}),e.jsxs("span",{className:`progress-percentage ${y.status}`,children:[Math.round(y.percentage),"%"]})]}),e.jsx("div",{className:"progress-bar",children:e.jsx(j.div,{className:`progress-fill ${y.status}`,initial:{width:0},animate:{width:`${Math.min(y.percentage,100)}%`},transition:{duration:1,delay:N*.1},style:{backgroundColor:y.color}})})]}),e.jsxs("div",{className:"budget-status",children:[C(y.status),e.jsx("span",{className:`status-text ${y.status}`,children:D(y.status)})]}),e.jsxs("div",{className:"budget-meta",children:[e.jsxs("div",{className:"meta-item",children:[e.jsx(Ct,{size:14}),e.jsxs("span",{children:["Ends ",new Date(y.endDate).toLocaleDateString()]})]}),e.jsxs("div",{className:"meta-item",children:[e.jsx(je,{size:14}),e.jsxs("span",{children:[y.transactions," transactions"]})]})]})]},y.id))})}),e.jsx("style",{jsx:!0,children:`
        .budgets-page {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          gap: 1rem;
        }

        .header-content h1 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
        }

        .header-content p {
          color: var(--text-secondary);
          margin: 0;
        }

        .add-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          white-space: nowrap;
        }

        .stats-overview {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          backdrop-filter: blur(20px);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .stat-card.total .stat-icon {
          background: linear-gradient(135deg, #8b5cf6, #5b21b6);
        }

        .stat-card.budget .stat-icon {
          background: linear-gradient(135deg, #3b82f6, #1e40af);
        }

        .stat-card.spent .stat-icon {
          background: linear-gradient(135deg, #f59e0b, #d97706);
        }

        .stat-card.remaining .stat-icon {
          background: linear-gradient(135deg, #10b981, #065f46);
        }

        .stat-content {
          flex: 1;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0 0 0.25rem 0;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .filters-section {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .search-container {
          position: relative;
          flex: 1;
          min-width: 300px;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-tertiary);
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 3rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--card-bg);
          color: var(--text-primary);
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--text-accent);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .filter-controls {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--card-bg);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover,
        .filter-btn.active {
          border-color: var(--text-accent);
          color: var(--text-accent);
        }

        .clear-filters-btn {
          padding: 0.75rem 1rem;
          border: none;
          border-radius: var(--border-radius-md);
          background: var(--error);
          color: white;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .clear-filters-btn:hover {
          background: #dc2626;
        }

        .advanced-filters {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }

        .filter-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .filter-group label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .filter-group select {
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--bg-secondary);
          color: var(--text-primary);
          cursor: pointer;
        }

        .budgets-container {
          min-height: 400px;
        }

        .loading-state,
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          text-align: center;
        }

        .loading-spinner {
          width: 32px;
          height: 32px;
          border: 3px solid var(--border-color);
          border-top: 3px solid var(--text-accent);
          border-radius: 50%;
          margin-bottom: 1rem;
        }

        .empty-icon {
          color: var(--text-tertiary);
          margin-bottom: 1rem;
        }

        .empty-state h3 {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
        }

        .empty-state p {
          color: var(--text-secondary);
          margin: 0 0 1.5rem 0;
        }

        .budgets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .budget-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 1.5rem;
          backdrop-filter: blur(20px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .budget-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: #10b981;
        }

        .budget-card.warning::before {
          background: #f59e0b;
        }

        .budget-card.exceeded::before {
          background: #ef4444;
        }

        .budget-card.under-budget::before {
          background: #06b6d4;
        }

        .budget-card:hover {
          box-shadow: var(--shadow-xl);
        }

        .budget-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .budget-category {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .category-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .budget-category h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .budget-period {
          font-size: 0.875rem;
          color: var(--text-secondary);
          text-transform: capitalize;
          margin: 0;
        }

        .budget-actions {
          display: flex;
          gap: 0.5rem;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .budget-card:hover .budget-actions {
          opacity: 1;
        }

        .action-btn {
          width: 32px;
          height: 32px;
          border: none;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-btn.edit {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .action-btn.edit:hover {
          background: rgba(59, 130, 246, 0.2);
        }

        .action-btn.delete {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .action-btn.delete:hover {
          background: rgba(239, 68, 68, 0.2);
        }

        .budget-amounts {
          margin-bottom: 1.5rem;
        }

        .amount-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .amount-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .amount-value {
          font-weight: 600;
          color: var(--text-primary);
        }

        .amount-value.spent {
          color: #f59e0b;
        }

        .amount-value.remaining.exceeded {
          color: #ef4444;
        }

        .budget-progress {
          margin-bottom: 1.5rem;
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .progress-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .progress-percentage {
          font-size: 0.875rem;
          font-weight: 600;
        }

        .progress-percentage.on-track {
          color: #10b981;
        }

        .progress-percentage.warning {
          color: #f59e0b;
        }

        .progress-percentage.exceeded {
          color: #ef4444;
        }

        .progress-percentage.under-budget {
          color: #06b6d4;
        }

        .progress-bar {
          height: 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .budget-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          padding: 0.75rem;
          background: var(--bg-tertiary);
          border-radius: var(--border-radius-md);
        }

        .status-icon.exceeded {
          color: #ef4444;
        }

        .status-icon.warning {
          color: #f59e0b;
        }

        .status-icon.on-track {
          color: #10b981;
        }

        .status-icon.under-budget {
          color: #06b6d4;
        }

        .status-text {
          font-size: 0.875rem;
          font-weight: 500;
        }

        .status-text.exceeded {
          color: #ef4444;
        }

        .status-text.warning {
          color: #f59e0b;
        }

        .status-text.on-track {
          color: #10b981;
        }

        .status-text.under-budget {
          color: #06b6d4;
        }

        .budget-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: stretch;
          }

          .stats-overview {
            grid-template-columns: repeat(2, 1fr);
          }

          .filters-section {
            flex-direction: column;
          }

          .search-container {
            min-width: auto;
          }

          .filter-row {
            grid-template-columns: 1fr;
          }

          .budgets-grid {
            grid-template-columns: 1fr;
          }

          .budget-actions {
            opacity: 1;
          }
        }

        @media (max-width: 480px) {
          .stats-overview {
            grid-template-columns: 1fr;
          }

          .budget-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .budget-actions {
            align-self: flex-end;
          }
        }
      `})]})},gs=()=>{const[t,a]=x.useState("monthly"),[r,n]=x.useState("spending"),[i,o]=x.useState(!1),c={weekly:{overview:{totalIncome:28750,totalExpenses:21875,totalSavings:6875,savingsRate:23.9,previousPeriod:{totalIncome:27500,totalExpenses:20500,totalSavings:7e3,savingsRate:25.5}},spendingByCategory:[{category:"Food & Dining",amount:6250,color:"#10b981",icon:Re,percentage:28.6},{category:"Transportation",amount:3750,color:"#3b82f6",icon:Te,percentage:17.1},{category:"Shopping",amount:3e3,color:"#8b5cf6",icon:De,percentage:13.7},{category:"Entertainment",amount:2500,color:"#f59e0b",icon:Pe,percentage:11.4},{category:"Healthcare",amount:2e3,color:"#ef4444",icon:Me,percentage:9.1},{category:"Housing",amount:4375,color:"#06b6d4",icon:ve,percentage:20}],trends:[{period:"Mon",income:4e3,expenses:3e3,savings:1e3},{period:"Tue",income:4200,expenses:3100,savings:1100},{period:"Wed",income:4100,expenses:3200,savings:900},{period:"Thu",income:4300,expenses:3300,savings:1e3},{period:"Fri",income:4500,expenses:3500,savings:1e3},{period:"Sat",income:3900,expenses:2900,savings:1e3},{period:"Sun",income:3750,expenses:2875,savings:875}],budgetPerformance:[{category:"Food & Dining",budget:7500,spent:6250,status:"good"},{category:"Transportation",budget:4500,spent:3750,status:"good"},{category:"Shopping",budget:2500,spent:3e3,status:"over"},{category:"Entertainment",budget:3e3,spent:2500,status:"good"},{category:"Healthcare",budget:2e3,spent:2e3,status:"exact"}]},monthly:{overview:{totalIncome:125e3,totalExpenses:87500,totalSavings:37500,savingsRate:30,previousPeriod:{totalIncome:118e3,totalExpenses:82e3,totalSavings:36e3,savingsRate:30.5}},spendingByCategory:[{category:"Food & Dining",amount:25e3,color:"#10b981",icon:Re,percentage:28.6},{category:"Transportation",amount:15e3,color:"#3b82f6",icon:Te,percentage:17.1},{category:"Shopping",amount:12e3,color:"#8b5cf6",icon:De,percentage:13.7},{category:"Entertainment",amount:1e4,color:"#f59e0b",icon:Pe,percentage:11.4},{category:"Healthcare",amount:8e3,color:"#ef4444",icon:Me,percentage:9.1},{category:"Housing",amount:17500,color:"#06b6d4",icon:ve,percentage:20}],trends:[{period:"Jan",income:98e3,expenses:72e3,savings:26e3},{period:"Feb",income:105e3,expenses:78e3,savings:27e3},{period:"Mar",income:112e3,expenses:82e3,savings:3e4},{period:"Apr",income:108e3,expenses:79e3,savings:29e3},{period:"May",income:115e3,expenses:85e3,savings:3e4},{period:"Jun",income:118e3,expenses:82e3,savings:36e3},{period:"Jul",income:122e3,expenses:88e3,savings:34e3},{period:"Aug",income:125e3,expenses:87500,savings:37500}],budgetPerformance:[{category:"Food & Dining",budget:3e4,spent:25e3,status:"good"},{category:"Transportation",budget:18e3,spent:15e3,status:"good"},{category:"Shopping",budget:1e4,spent:12e3,status:"over"},{category:"Entertainment",budget:12e3,spent:1e4,status:"good"},{category:"Healthcare",budget:8e3,spent:8e3,status:"exact"}]},quarterly:{overview:{totalIncome:375e3,totalExpenses:262500,totalSavings:112500,savingsRate:30,previousPeriod:{totalIncome:354e3,totalExpenses:246e3,totalSavings:108e3,savingsRate:30.5}},spendingByCategory:[{category:"Food & Dining",amount:75e3,color:"#10b981",icon:Re,percentage:28.6},{category:"Transportation",amount:45e3,color:"#3b82f6",icon:Te,percentage:17.1},{category:"Shopping",amount:36e3,color:"#8b5cf6",icon:De,percentage:13.7},{category:"Entertainment",amount:3e4,color:"#f59e0b",icon:Pe,percentage:11.4},{category:"Healthcare",amount:24e3,color:"#ef4444",icon:Me,percentage:9.1},{category:"Housing",amount:52500,color:"#06b6d4",icon:ve,percentage:20}],trends:[{period:"Q1",income:315e3,expenses:232e3,savings:83e3},{period:"Q2",income:341e3,expenses:244e3,savings:97e3},{period:"Q3",income:375e3,expenses:262500,savings:112500}],budgetPerformance:[{category:"Food & Dining",budget:9e4,spent:75e3,status:"good"},{category:"Transportation",budget:54e3,spent:45e3,status:"good"},{category:"Shopping",budget:3e4,spent:36e3,status:"over"},{category:"Entertainment",budget:36e3,spent:3e4,status:"good"},{category:"Healthcare",budget:24e3,spent:24e3,status:"exact"}]},yearly:{overview:{totalIncome:15e5,totalExpenses:105e4,totalSavings:45e4,savingsRate:30,previousPeriod:{totalIncome:1416e3,totalExpenses:984e3,totalSavings:432e3,savingsRate:30.5}},spendingByCategory:[{category:"Food & Dining",amount:3e5,color:"#10b981",icon:Re,percentage:28.6},{category:"Transportation",amount:18e4,color:"#3b82f6",icon:Te,percentage:17.1},{category:"Shopping",amount:144e3,color:"#8b5cf6",icon:De,percentage:13.7},{category:"Entertainment",amount:12e4,color:"#f59e0b",icon:Pe,percentage:11.4},{category:"Healthcare",amount:96e3,color:"#ef4444",icon:Me,percentage:9.1},{category:"Housing",amount:21e4,color:"#06b6d4",icon:ve,percentage:20}],trends:[{period:"2021",income:12e5,expenses:9e5,savings:3e5},{period:"2022",income:132e4,expenses:95e4,savings:37e4},{period:"2023",income:1416e3,expenses:984e3,savings:432e3},{period:"2024",income:15e5,expenses:105e4,savings:45e4}],budgetPerformance:[{category:"Food & Dining",budget:36e4,spent:3e5,status:"good"},{category:"Transportation",budget:216e3,spent:18e4,status:"good"},{category:"Shopping",budget:12e4,spent:144e3,status:"over"},{category:"Entertainment",budget:144e3,spent:12e4,status:"good"},{category:"Healthcare",budget:96e3,spent:96e3,status:"exact"}]}}[t],l=w=>{w!==t&&(o(!0),setTimeout(()=>{a(w),o(!1)},800))},d=(w,b)=>((w-b)/b*100).toFixed(1),m=w=>w>=0?e.jsx(Fi,{size:16}):e.jsx($i,{size:16}),f=(w,b=!1)=>b?w>=0?"#ef4444":"#10b981":w>=0?"#10b981":"#ef4444",S=()=>{o(!0),setTimeout(()=>{o(!1)},1500)},z=()=>{const w=JSON.stringify(c,null,2),b=new Blob([w],{type:"application/json"}),T=URL.createObjectURL(b),v=document.createElement("a");v.href=T,v.download="analytics-data.json",v.click()},p=d(c.overview.totalIncome,c.overview.previousPeriod.totalIncome),h=d(c.overview.totalExpenses,c.overview.previousPeriod.totalExpenses),u=d(c.overview.totalSavings,c.overview.previousPeriod.totalSavings);return e.jsxs(j.div,{className:"analytics-page",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{className:"header-content",children:[e.jsx("h1",{children:"Financial Analytics"}),e.jsx("p",{children:"Comprehensive insights into your financial patterns"})]}),e.jsxs("div",{className:"header-actions",children:[e.jsxs(j.button,{className:"btn btn-secondary refresh-btn",onClick:S,disabled:i,whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx(me,{size:18,className:i?"spinning":""}),"Refresh"]}),e.jsxs(j.button,{className:"btn btn-primary export-btn",onClick:z,whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx(vt,{size:18}),"Export"]})]})]}),e.jsxs("div",{className:"period-selector",children:[e.jsx("div",{className:"selector-group",children:["weekly","monthly","quarterly","yearly"].map(w=>e.jsx(j.button,{className:`period-btn ${t===w?"active":""}`,onClick:()=>l(w),disabled:i,whileHover:{scale:1.05},whileTap:{scale:.95},children:w.charAt(0).toUpperCase()+w.slice(1)},w))}),i&&e.jsxs(j.div,{className:"loading-indicator",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsx("div",{className:"loading-spinner"}),e.jsx("span",{children:"Updating data..."})]})]}),e.jsxs("div",{className:"overview-stats",children:[e.jsxs(j.div,{className:"stat-card income",whileHover:{scale:1.02},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(fe,{size:24})}),e.jsxs("div",{className:"stat-change",style:{color:f(p)},children:[m(p),Math.abs(p),"%"]})]}),e.jsxs("div",{className:"stat-content",children:[e.jsx("h3",{children:"Total Income"}),e.jsxs("p",{className:"stat-value",children:["₹",c.overview.totalIncome.toLocaleString()]}),e.jsxs("p",{className:"stat-subtitle",children:["vs ₹",c.overview.previousPeriod.totalIncome.toLocaleString()," last period"]})]})]}),e.jsxs(j.div,{className:"stat-card expenses",whileHover:{scale:1.02},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(Va,{size:24})}),e.jsxs("div",{className:"stat-change",style:{color:f(h,!0)},children:[m(h),Math.abs(h),"%"]})]}),e.jsxs("div",{className:"stat-content",children:[e.jsx("h3",{children:"Total Expenses"}),e.jsxs("p",{className:"stat-value",children:["₹",c.overview.totalExpenses.toLocaleString()]}),e.jsxs("p",{className:"stat-subtitle",children:["vs ₹",c.overview.previousPeriod.totalExpenses.toLocaleString()," last period"]})]})]}),e.jsxs(j.div,{className:"stat-card savings",whileHover:{scale:1.02},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(se,{size:24})}),e.jsxs("div",{className:"stat-change",style:{color:f(u)},children:[m(u),Math.abs(u),"%"]})]}),e.jsxs("div",{className:"stat-content",children:[e.jsx("h3",{children:"Total Savings"}),e.jsxs("p",{className:"stat-value",children:["₹",c.overview.totalSavings.toLocaleString()]}),e.jsxs("p",{className:"stat-subtitle",children:["vs ₹",c.overview.previousPeriod.totalSavings.toLocaleString()," last period"]})]})]}),e.jsxs(j.div,{className:"stat-card savings-rate",whileHover:{scale:1.02},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(te,{size:24})}),e.jsx("div",{className:"savings-rate-indicator",children:e.jsx("div",{className:"rate-circle",children:e.jsxs("span",{children:[c.overview.savingsRate,"%"]})})})]}),e.jsxs("div",{className:"stat-content",children:[e.jsx("h3",{children:"Savings Rate"}),e.jsxs("p",{className:"stat-value",children:[c.overview.savingsRate,"%"]}),e.jsx("p",{className:"stat-subtitle",children:"of total income"})]})]})]}),e.jsxs("div",{className:"charts-section",children:[e.jsxs("div",{className:"chart-selector",children:[e.jsxs("button",{className:`chart-btn ${r==="spending"?"active":""}`,onClick:()=>n("spending"),children:[e.jsx(qa,{size:18}),"Spending by Category"]}),e.jsxs("button",{className:`chart-btn ${r==="trends"?"active":""}`,onClick:()=>n("trends"),children:[e.jsx(it,{size:18}),"Monthly Trends"]}),e.jsxs("button",{className:`chart-btn ${r==="budget"?"active":""}`,onClick:()=>n("budget"),children:[e.jsx(te,{size:18}),"Budget Performance"]})]}),e.jsxs(Y,{mode:"wait",children:[r==="spending"&&e.jsxs(j.div,{className:"chart-container",initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:[e.jsx("h3",{children:"Spending by Category"}),e.jsx("div",{className:"spending-chart",children:e.jsx("div",{className:"spending-categories",children:c.spendingByCategory.map((w,b)=>{const T=w.icon;return e.jsxs(j.div,{className:"category-item",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:b*.1},whileHover:{scale:1.05},children:[e.jsxs("div",{className:"category-header",children:[e.jsx("div",{className:"category-icon",style:{backgroundColor:w.color},children:e.jsx(T,{size:20})}),e.jsxs("div",{className:"category-info",children:[e.jsx("h4",{children:w.category}),e.jsxs("p",{children:["₹",w.amount.toLocaleString()]})]}),e.jsxs("div",{className:"category-percentage",children:[w.percentage,"%"]})]}),e.jsx("div",{className:"category-bar",children:e.jsx(j.div,{className:"category-fill",style:{backgroundColor:w.color},initial:{width:0},animate:{width:`${w.percentage}%`},transition:{duration:1,delay:b*.1}})})]},w.category)})})})]},"spending"),r==="trends"&&e.jsxs(j.div,{className:"chart-container",initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:[e.jsxs("h3",{children:[t.charAt(0).toUpperCase()+t.slice(1)," Financial Trends"]}),e.jsxs("div",{className:"trends-chart",children:[e.jsxs("div",{className:"chart-legend",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color income"}),e.jsx("span",{children:"Income"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color expenses"}),e.jsx("span",{children:"Expenses"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color savings"}),e.jsx("span",{children:"Savings"})]})]}),e.jsx("div",{className:"chart-bars",children:c.trends.map((w,b)=>{const T=Math.max(...c.trends.map(v=>v.income));return e.jsxs(j.div,{className:"trend-bar",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:b*.1},children:[e.jsxs("div",{className:"bar-container",children:[e.jsx(j.div,{className:"bar income",initial:{height:0},animate:{height:`${w.income/T*100}%`},transition:{duration:1,delay:b*.1}}),e.jsx(j.div,{className:"bar expenses",initial:{height:0},animate:{height:`${w.expenses/T*100}%`},transition:{duration:1,delay:b*.1+.2}}),e.jsx(j.div,{className:"bar savings",initial:{height:0},animate:{height:`${w.savings/T*100}%`},transition:{duration:1,delay:b*.1+.4}})]}),e.jsx("div",{className:"trend-label",children:w.period}),e.jsxs("div",{className:"trend-values",children:[e.jsxs("div",{className:"value income",children:["₹",(w.income/1e3).toFixed(0),"k"]}),e.jsxs("div",{className:"value expenses",children:["₹",(w.expenses/1e3).toFixed(0),"k"]}),e.jsxs("div",{className:"value savings",children:["₹",(w.savings/1e3).toFixed(0),"k"]})]})]},w.period)})})]})]},"trends"),r==="budget"&&e.jsxs(j.div,{className:"chart-container",initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:[e.jsx("h3",{children:"Budget Performance Analysis"}),e.jsx("div",{className:"budget-chart",children:c.budgetPerformance.map((w,b)=>{const T=w.spent/w.budget*100,v=w.status;return e.jsxs(j.div,{className:`budget-item ${v}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:b*.1},whileHover:{scale:1.02},children:[e.jsxs("div",{className:"budget-info",children:[e.jsx("h4",{children:w.category}),e.jsxs("div",{className:"budget-amounts",children:[e.jsxs("span",{className:"spent",children:["₹",w.spent.toLocaleString()]}),e.jsx("span",{className:"separator",children:"/"}),e.jsxs("span",{className:"budget",children:["₹",w.budget.toLocaleString()]})]})]}),e.jsxs("div",{className:"budget-progress",children:[e.jsx("div",{className:"progress-bar",children:e.jsx(j.div,{className:`progress-fill ${v}`,initial:{width:0},animate:{width:`${Math.min(T,100)}%`},transition:{duration:1,delay:b*.1}})}),e.jsxs("div",{className:`progress-percentage ${v}`,children:[T.toFixed(0),"%"]})]}),e.jsxs("div",{className:`status-indicator ${v}`,children:[v==="good"&&"✓",v==="over"&&"⚠",v==="exact"&&"="]})]},w.category)})})]},"budget")]})]}),e.jsx("style",{jsx:!0,children:`
        .analytics-page {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          gap: 1rem;
        }

        .header-content h1 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
        }

        .header-content p {
          color: var(--text-secondary);
          margin: 0;
        }

        .header-actions {
          display: flex;
          gap: 0.75rem;
        }

        .refresh-btn,
        .export-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          white-space: nowrap;
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .period-selector {
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .selector-group {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .period-btn {
          padding: 0.75rem 1.5rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--card-bg);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
          font-weight: 500;
          position: relative;
          overflow: hidden;
        }

        .period-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .period-btn:not(:disabled):hover {
          border-color: var(--text-accent);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .period-btn.active {
          border-color: var(--text-accent);
          background: var(--text-accent);
          color: white;
          box-shadow: var(--shadow-lg);
        }

        .period-btn.active::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(255,255,255,0.1), transparent);
          pointer-events: none;
        }

        .loading-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid var(--border-color);
          border-top: 2px solid var(--text-accent);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .overview-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 2rem;
          backdrop-filter: blur(20px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
        }

        .stat-card.income::before {
          background: linear-gradient(135deg, #10b981, #065f46);
        }

        .stat-card.expenses::before {
          background: linear-gradient(135deg, #ef4444, #991b1b);
        }

        .stat-card.savings::before {
          background: linear-gradient(135deg, #3b82f6, #1e40af);
        }

        .stat-card.savings-rate::before {
          background: linear-gradient(135deg, #8b5cf6, #5b21b6);
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .stat-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .stat-card.income .stat-icon {
          background: linear-gradient(135deg, #10b981, #065f46);
        }

        .stat-card.expenses .stat-icon {
          background: linear-gradient(135deg, #ef4444, #991b1b);
        }

        .stat-card.savings .stat-icon {
          background: linear-gradient(135deg, #3b82f6, #1e40af);
        }

        .stat-card.savings-rate .stat-icon {
          background: linear-gradient(135deg, #8b5cf6, #5b21b6);
        }

        .stat-change {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.5rem 0.75rem;
          border-radius: var(--border-radius-md);
          background: var(--bg-tertiary);
        }

        .savings-rate-indicator {
          display: flex;
          align-items: center;
        }

        .rate-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: conic-gradient(#8b5cf6 0% 30%, var(--bg-tertiary) 30% 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .rate-circle::before {
          content: '';
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--card-bg);
          position: absolute;
        }

        .rate-circle span {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-primary);
          z-index: 1;
        }

        .stat-content h3 {
          font-size: 1rem;
          color: var(--text-secondary);
          margin: 0 0 0.5rem 0;
          font-weight: 500;
        }

        .stat-value {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }

        .stat-subtitle {
          font-size: 0.875rem;
          color: var(--text-tertiary);
          margin: 0;
        }

        .charts-section {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 2rem;
          backdrop-filter: blur(20px);
        }

        .chart-selector {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .chart-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--bg-secondary);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .chart-btn:hover,
        .chart-btn.active {
          border-color: var(--text-accent);
          background: var(--text-accent);
          color: white;
        }

        .chart-container h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 1.5rem 0;
        }

        .spending-categories {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .category-item {
          padding: 1rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--bg-secondary);
          transition: all 0.2s ease;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }

        .category-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .category-info {
          flex: 1;
        }

        .category-info h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }

        .category-info p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .category-percentage {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .category-bar {
          height: 6px;
          background: var(--bg-tertiary);
          border-radius: 3px;
          overflow: hidden;
        }

        .category-fill {
          height: 100%;
          border-radius: 3px;
          transition: width 0.5s ease;
        }

        .trends-chart {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .chart-legend {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-primary);
        }

        .legend-color {
          width: 16px;
          height: 16px;
          border-radius: 4px;
        }

        .legend-color.income {
          background: #10b981;
        }

        .legend-color.expenses {
          background: #ef4444;
        }

        .legend-color.savings {
          background: #3b82f6;
        }

        .chart-bars {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          gap: 1rem;
          padding: 2rem 0;
        }

        .trend-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .bar-container {
          height: 150px;
          display: flex;
          align-items: flex-end;
          gap: 4px;
          width: 100%;
          justify-content: center;
        }

        .bar {
          width: 16px;
          border-radius: 2px 2px 0 0;
          transition: height 0.5s ease;
        }

        .bar.income {
          background: #10b981;
        }

        .bar.expenses {
          background: #ef4444;
        }

        .bar.savings {
          background: #3b82f6;
        }

        .trend-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .trend-values {
          display: flex;
          flex-direction: column;
          gap: 2px;
          align-items: center;
        }

        .value {
          font-size: 0.75rem;
          font-weight: 500;
        }

        .value.income {
          color: #10b981;
        }

        .value.expenses {
          color: #ef4444;
        }

        .value.savings {
          color: #3b82f6;
        }

        .budget-chart {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .budget-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--bg-secondary);
          transition: all 0.2s ease;
        }

        .budget-item.good {
          border-left: 4px solid #10b981;
        }

        .budget-item.over {
          border-left: 4px solid #ef4444;
        }

        .budget-item.exact {
          border-left: 4px solid #f59e0b;
        }

        .budget-info {
          flex: 1;
        }

        .budget-info h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
        }

        .budget-amounts {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .spent {
          font-weight: 600;
          color: var(--text-primary);
        }

        .separator {
          color: var(--text-tertiary);
        }

        .budget {
          color: var(--text-secondary);
        }

        .budget-progress {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 200px;
        }

        .progress-bar {
          height: 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .progress-fill.good {
          background: #10b981;
        }

        .progress-fill.over {
          background: #ef4444;
        }

        .progress-fill.exact {
          background: #f59e0b;
        }

        .progress-percentage {
          text-align: center;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .progress-percentage.good {
          color: #10b981;
        }

        .progress-percentage.over {
          color: #ef4444;
        }

        .progress-percentage.exact {
          color: #f59e0b;
        }

        .status-indicator {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: white;
        }

        .status-indicator.good {
          background: #10b981;
        }

        .status-indicator.over {
          background: #ef4444;
        }

        .status-indicator.exact {
          background: #f59e0b;
        }

        @media (max-width: 1024px) {
          .chart-bars {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: stretch;
          }

          .header-actions {
            justify-content: flex-end;
          }

          .overview-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .chart-bars {
            grid-template-columns: repeat(3, 1fr);
          }

          .budget-item {
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }

          .budget-progress {
            min-width: auto;
          }

          .period-btn {
            flex: 1;
            min-width: 0;
            padding: 0.6rem 1rem;
            font-size: 0.875rem;
          }

          .selector-group {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .overview-stats {
            grid-template-columns: 1fr;
          }

          .chart-bars {
            grid-template-columns: repeat(2, 1fr);
          }

          .chart-selector {
            flex-direction: column;
          }

          .chart-btn {
            justify-content: center;
          }

          .selector-group {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .period-btn {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }

          .stat-card {
            padding: 1.25rem;
          }

          .stat-value {
            font-size: 1.5rem;
          }

          .header-actions {
            flex-direction: column;
            gap: 0.5rem;
          }

          .refresh-btn,
          .export-btn {
            justify-content: center;
            padding: 0.75rem 1rem;
          }

          .loading-indicator {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }

        @media (max-width: 320px) {
          .trend-values {
            font-size: 0.65rem;
          }

          .bar {
            width: 12px;
          }

          .bar-container {
            height: 120px;
            gap: 2px;
          }

          .category-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .category-percentage {
            align-self: flex-end;
          }
        }
      `})]})},hs=()=>{const[t,a]=x.useState("profile"),[r,n]=x.useState({}),[i,o]=x.useState(!1),[s,c]=x.useState({profile:{firstName:"Guest",lastName:"User",email:"guest@financeai.com",phone:"+91 9876543210",avatar:"https://ui-avatars.com/api/?name=Guest+User&background=3b82f6&color=fff&size=200"},security:{twoFactorEnabled:!0,biometricEnabled:!1,sessionTimeout:30,loginNotifications:!0},notifications:{transactionAlerts:!0,budgetAlerts:!0,billReminders:!0,emailNotifications:!0,pushNotifications:!0},preferences:{theme:"light",currency:"INR",language:"en",dateFormat:"DD/MM/YYYY",defaultPage:"dashboard"},privacy:{dataSharing:!1,analyticsOptIn:!0,marketingOptIn:!1}}),l=[{id:"profile",label:"Profile",icon:Tt,color:"#3b82f6"},{id:"security",label:"Security",icon:es,color:"#ef4444"},{id:"notifications",label:"Notifications",icon:Ye,color:"#f59e0b"},{id:"preferences",label:"Preferences",icon:Xi,color:"#8b5cf6"},{id:"financial",label:"Financial",icon:se,color:"#10b981"},{id:"privacy",label:"Privacy",icon:jt,color:"#6b7280"},{id:"data",label:"Data & Backup",icon:Ui,color:"#06b6d4"}],d=(b,T,v)=>{c(A=>({...A,[b]:{...A[b],[T]:v}})),$.success("Setting updated successfully")},m=b=>{const T=b.target.files[0];if(T){if(T.size>5*1024*1024){$.error("Image size should be less than 5MB");return}if(!T.type.startsWith("image/")){$.error("Please select a valid image file");return}o(!0);const v=new FileReader;v.onload=A=>{setTimeout(()=>{d("profile","avatar",A.target.result),o(!1),$.success("Profile picture updated successfully")},1e3)},v.readAsDataURL(T)}b.target.value=""},f=()=>{n(b=>({...b,export:!0})),setTimeout(()=>{const b=JSON.stringify(s,null,2),T=new Blob([b],{type:"application/json"}),v=URL.createObjectURL(T),A=document.createElement("a");A.href=v,A.download="financeai-settings.json",A.click(),n(k=>({...k,export:!1})),$.success("Data exported successfully")},2e3)},S=()=>e.jsxs(j.div,{className:"settings-section",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{children:"Profile Information"}),e.jsx("p",{children:"Manage your personal information and profile settings"})]}),e.jsxs("div",{className:"profile-section",children:[e.jsxs("div",{className:"profile-avatar",children:[e.jsx("img",{src:s.profile.avatar,alt:"Profile"}),e.jsxs("label",{className:`avatar-upload ${i?"uploading":""}`,htmlFor:"avatar-input",children:[i?e.jsx(me,{size:16,className:"spinning"}):e.jsx(Li,{size:16}),e.jsx("input",{id:"avatar-input",type:"file",accept:"image/*",onChange:m,disabled:i,style:{display:"none"}})]}),i&&e.jsx("div",{className:"upload-overlay",children:e.jsxs("div",{className:"upload-progress",children:[e.jsx(me,{size:24,className:"spinning"}),e.jsx("span",{children:"Uploading..."})]})})]}),e.jsxs("div",{className:"profile-form",children:[e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"First Name"}),e.jsx("input",{type:"text",value:s.profile.firstName,onChange:b=>d("profile","firstName",b.target.value)})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Last Name"}),e.jsx("input",{type:"text",value:s.profile.lastName,onChange:b=>d("profile","lastName",b.target.value)})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Email Address"}),e.jsx("input",{type:"email",value:s.profile.email,onChange:b=>d("profile","email",b.target.value)})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Phone Number"}),e.jsx("input",{type:"tel",value:s.profile.phone,onChange:b=>d("profile","phone",b.target.value)})]})]})]})]}),z=()=>e.jsxs(j.div,{className:"settings-section",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{children:"Security Settings"}),e.jsx("p",{children:"Protect your account with advanced security features"})]}),e.jsxs("div",{className:"security-grid",children:[e.jsxs("div",{className:"security-card",children:[e.jsxs("div",{className:"security-info",children:[e.jsx("div",{className:"security-icon",children:e.jsx(qi,{size:24})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Two-Factor Authentication"}),e.jsx("p",{children:"Add an extra layer of security to your account"})]})]}),e.jsxs("div",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:s.security.twoFactorEnabled,onChange:b=>d("security","twoFactorEnabled",b.target.checked)}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"security-card",children:[e.jsxs("div",{className:"security-info",children:[e.jsx("div",{className:"security-icon",children:e.jsx(Hi,{size:24})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Biometric Login"}),e.jsx("p",{children:"Use fingerprint or face recognition"})]})]}),e.jsxs("div",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:s.security.biometricEnabled,onChange:b=>d("security","biometricEnabled",b.target.checked)}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"security-card",children:[e.jsxs("div",{className:"security-info",children:[e.jsx("div",{className:"security-icon",children:e.jsx(Ye,{size:24})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Login Notifications"}),e.jsx("p",{children:"Get notified of new login attempts"})]})]}),e.jsxs("div",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:s.security.loginNotifications,onChange:b=>d("security","loginNotifications",b.target.checked)}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"security-card full-width",children:[e.jsxs("div",{className:"security-info",children:[e.jsx("div",{className:"security-icon",children:e.jsx(me,{size:24})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Session Timeout"}),e.jsx("p",{children:"Automatically logout after inactivity"})]})]}),e.jsxs("select",{value:s.security.sessionTimeout,onChange:b=>d("security","sessionTimeout",parseInt(b.target.value)),children:[e.jsx("option",{value:15,children:"15 minutes"}),e.jsx("option",{value:30,children:"30 minutes"}),e.jsx("option",{value:60,children:"1 hour"}),e.jsx("option",{value:120,children:"2 hours"})]})]}),e.jsxs("div",{className:"password-section",children:[e.jsxs("div",{className:"password-info",children:[e.jsx(jt,{size:24}),e.jsxs("div",{children:[e.jsx("h3",{children:"Change Password"}),e.jsx("p",{children:"Update your account password"})]})]}),e.jsx("button",{className:"btn btn-secondary",children:"Change Password"})]})]})]}),p=()=>e.jsxs(j.div,{className:"settings-section",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{children:"Notification Preferences"}),e.jsx("p",{children:"Choose how you want to be notified"})]}),e.jsxs("div",{className:"notification-groups",children:[e.jsxs("div",{className:"notification-group",children:[e.jsx("h3",{children:"Financial Alerts"}),e.jsxs("div",{className:"notification-list",children:[e.jsxs("div",{className:"notification-item",children:[e.jsxs("div",{className:"notification-info",children:[e.jsx("h4",{children:"Transaction Alerts"}),e.jsx("p",{children:"Get notified for all transactions"})]}),e.jsxs("div",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:s.notifications.transactionAlerts,onChange:b=>d("notifications","transactionAlerts",b.target.checked)}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"notification-item",children:[e.jsxs("div",{className:"notification-info",children:[e.jsx("h4",{children:"Budget Alerts"}),e.jsx("p",{children:"Warnings when approaching budget limits"})]}),e.jsxs("div",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:s.notifications.budgetAlerts,onChange:b=>d("notifications","budgetAlerts",b.target.checked)}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"notification-item",children:[e.jsxs("div",{className:"notification-info",children:[e.jsx("h4",{children:"Bill Reminders"}),e.jsx("p",{children:"Reminders for upcoming bills"})]}),e.jsxs("div",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:s.notifications.billReminders,onChange:b=>d("notifications","billReminders",b.target.checked)}),e.jsx("span",{className:"toggle-slider"})]})]})]})]}),e.jsxs("div",{className:"notification-group",children:[e.jsx("h3",{children:"Communication"}),e.jsxs("div",{className:"notification-list",children:[e.jsxs("div",{className:"notification-item",children:[e.jsxs("div",{className:"notification-info",children:[e.jsx("h4",{children:"Email Notifications"}),e.jsx("p",{children:"Receive important updates via email"})]}),e.jsxs("div",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:s.notifications.emailNotifications,onChange:b=>d("notifications","emailNotifications",b.target.checked)}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"notification-item",children:[e.jsxs("div",{className:"notification-info",children:[e.jsx("h4",{children:"Push Notifications"}),e.jsx("p",{children:"Instant notifications on your device"})]}),e.jsxs("div",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:s.notifications.pushNotifications,onChange:b=>d("notifications","pushNotifications",b.target.checked)}),e.jsx("span",{className:"toggle-slider"})]})]})]})]})]})]}),h=()=>e.jsxs(j.div,{className:"settings-section",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{children:"App Preferences"}),e.jsx("p",{children:"Customize your app experience"})]}),e.jsxs("div",{className:"preferences-grid",children:[e.jsxs("div",{className:"preference-group",children:[e.jsx("h3",{children:"Display"}),e.jsxs("div",{className:"preference-item",children:[e.jsx("label",{children:"Theme"}),e.jsxs("select",{value:s.preferences.theme,onChange:b=>d("preferences","theme",b.target.value),children:[e.jsx("option",{value:"light",children:"Light"}),e.jsx("option",{value:"dark",children:"Dark"}),e.jsx("option",{value:"auto",children:"Auto"})]})]}),e.jsxs("div",{className:"preference-item",children:[e.jsx("label",{children:"Language"}),e.jsxs("select",{value:s.preferences.language,onChange:b=>d("preferences","language",b.target.value),children:[e.jsx("option",{value:"en",children:"English"}),e.jsx("option",{value:"hi",children:"Hindi"}),e.jsx("option",{value:"es",children:"Spanish"}),e.jsx("option",{value:"fr",children:"French"})]})]})]}),e.jsxs("div",{className:"preference-group",children:[e.jsx("h3",{children:"Financial"}),e.jsxs("div",{className:"preference-item",children:[e.jsx("label",{children:"Currency"}),e.jsxs("select",{value:s.preferences.currency,onChange:b=>d("preferences","currency",b.target.value),children:[e.jsx("option",{value:"INR",children:"Indian Rupee (₹)"}),e.jsx("option",{value:"USD",children:"US Dollar ($)"}),e.jsx("option",{value:"EUR",children:"Euro (€)"}),e.jsx("option",{value:"GBP",children:"British Pound (£)"})]})]}),e.jsxs("div",{className:"preference-item",children:[e.jsx("label",{children:"Date Format"}),e.jsxs("select",{value:s.preferences.dateFormat,onChange:b=>d("preferences","dateFormat",b.target.value),children:[e.jsx("option",{value:"DD/MM/YYYY",children:"DD/MM/YYYY"}),e.jsx("option",{value:"MM/DD/YYYY",children:"MM/DD/YYYY"}),e.jsx("option",{value:"YYYY-MM-DD",children:"YYYY-MM-DD"})]})]}),e.jsxs("div",{className:"preference-item",children:[e.jsx("label",{children:"Default Page"}),e.jsxs("select",{value:s.preferences.defaultPage,onChange:b=>d("preferences","defaultPage",b.target.value),children:[e.jsx("option",{value:"dashboard",children:"Dashboard"}),e.jsx("option",{value:"transactions",children:"Transactions"}),e.jsx("option",{value:"budgets",children:"Budgets"}),e.jsx("option",{value:"analytics",children:"Analytics"})]})]})]})]})]}),u=()=>e.jsxs(j.div,{className:"settings-section",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{children:"Data Management"}),e.jsx("p",{children:"Export, backup, and manage your data"})]}),e.jsxs("div",{className:"data-actions",children:[e.jsxs("div",{className:"data-card",children:[e.jsx("div",{className:"data-icon",children:e.jsx(vt,{size:32})}),e.jsxs("div",{className:"data-content",children:[e.jsx("h3",{children:"Export Data"}),e.jsx("p",{children:"Download your financial data"}),e.jsx("button",{className:"btn btn-primary",onClick:f,disabled:r.export,children:r.export?e.jsxs(e.Fragment,{children:[e.jsx(me,{size:16,className:"spinning"}),"Exporting..."]}):e.jsxs(e.Fragment,{children:[e.jsx(vt,{size:16}),"Export"]})})]})]}),e.jsxs("div",{className:"data-card",children:[e.jsx("div",{className:"data-icon",children:e.jsx(Kt,{size:32})}),e.jsxs("div",{className:"data-content",children:[e.jsx("h3",{children:"Import Data"}),e.jsx("p",{children:"Import from other apps"}),e.jsxs("button",{className:"btn btn-secondary",children:[e.jsx(Kt,{size:16}),"Import"]})]})]}),e.jsxs("div",{className:"data-card danger",children:[e.jsx("div",{className:"data-icon",children:e.jsx(Ve,{size:32})}),e.jsxs("div",{className:"data-content",children:[e.jsx("h3",{children:"Delete Account"}),e.jsx("p",{children:"Permanently delete your account"}),e.jsxs("button",{className:"btn btn-danger",children:[e.jsx(Ve,{size:16}),"Delete"]})]})]})]})]}),w=()=>{switch(t){case"profile":return e.jsx(S,{});case"security":return e.jsx(z,{});case"notifications":return e.jsx(p,{});case"preferences":return e.jsx(h,{});case"financial":return e.jsx(h,{});case"privacy":return e.jsx(p,{});case"data":return e.jsx(u,{});default:return e.jsx(S,{})}};return e.jsxs(j.div,{className:"settings-page",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsxs("div",{className:"settings-container",children:[e.jsxs("div",{className:"settings-sidebar",children:[e.jsxs("div",{className:"sidebar-header",children:[e.jsx("h1",{children:"Settings"}),e.jsx("p",{children:"Manage your account preferences"})]}),e.jsx("nav",{className:"settings-nav",children:l.map(b=>{const T=b.icon;return e.jsxs(j.button,{className:`nav-item ${t===b.id?"active":""}`,onClick:()=>a(b.id),whileHover:{x:4},whileTap:{scale:.98},children:[e.jsx("div",{className:"nav-icon",style:{color:b.color},children:e.jsx(T,{size:20})}),e.jsx("span",{children:b.label}),e.jsx(Bi,{size:16,className:"nav-arrow"})]},b.id)})})]}),e.jsx("div",{className:"settings-content",children:e.jsx(Y,{mode:"wait",children:w()})})]}),e.jsx("style",{jsx:!0,children:`
        .settings-page {
          padding: 0;
        }

        .settings-container {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .settings-sidebar {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: 2rem;
          height: fit-content;
          position: sticky;
          top: 2rem;
          backdrop-filter: blur(20px);
        }

        .sidebar-header h1 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
        }

        .sidebar-header p {
          color: var(--text-secondary);
          margin: 0 0 2rem 0;
          font-size: 0.9rem;
        }

        .settings-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border: none;
          border-radius: var(--border-radius-md);
          background: transparent;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          width: 100%;
        }

        .nav-item:hover {
          background: var(--bg-tertiary);
        }

        .nav-item.active {
          background: var(--bg-tertiary);
          border-left: 3px solid var(--text-accent);
        }

        .nav-icon {
          width: 20px;
          height: 20px;
        }

        .nav-arrow {
          margin-left: auto;
          opacity: 0.5;
          transition: opacity 0.2s ease;
        }

        .nav-item:hover .nav-arrow,
        .nav-item.active .nav-arrow {
          opacity: 1;
        }

        .settings-content {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          backdrop-filter: blur(20px);
        }

        .settings-section {
          padding: 2rem;
        }

        .section-header {
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .section-header h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
        }

        .section-header p {
          color: var(--text-secondary);
          margin: 0;
        }

        /* Profile Section */
        .profile-section {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }

        .profile-avatar {
          position: relative;
          margin-bottom: 1rem;
        }

        .profile-avatar img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--border-color);
          transition: all 0.2s ease;
        }

        .upload-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .upload-progress {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .upload-progress span {
          font-size: 0.75rem;
          font-weight: 500;
        }

        .avatar-upload {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 32px;
          height: 32px;
          background: var(--text-accent);
          border: none;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .avatar-upload:hover:not(.uploading) {
          transform: scale(1.1);
          background: #2563eb;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .avatar-upload.uploading {
          background: #6b7280;
          cursor: not-allowed;
        }

        .profile-form {
          flex: 1;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .form-group input,
        .form-group select {
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--bg-secondary);
          color: var(--text-primary);
          transition: all 0.2s ease;
        }

        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--text-accent);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        /* Security Section */
        .security-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .security-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          transition: all 0.2s ease;
        }

        .security-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .security-card.full-width {
          grid-column: 1 / -1;
        }

        .security-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .security-icon {
          width: 48px;
          height: 48px;
          background: var(--bg-tertiary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-accent);
        }

        .security-info h3 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }

        .security-info p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .password-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
        }

        .password-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        /* Toggle Switch */
        .toggle-switch {
          position: relative;
          width: 48px;
          height: 24px;
          display: inline-block;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--bg-tertiary);
          transition: 0.3s;
          border-radius: 24px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
        }

        input:checked + .toggle-slider {
          background-color: var(--text-accent);
        }

        input:checked + .toggle-slider:before {
          transform: translateX(24px);
        }

        /* Notifications Section */
        .notification-groups {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .notification-group h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 1rem 0;
        }

        .notification-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .notification-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
        }

        .notification-info h4 {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-primary);
          margin: 0 0 0.25rem 0;
        }

        .notification-info p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Preferences Section */
        .preferences-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .preference-group h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 1rem 0;
        }

        .preference-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .preference-item label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        /* Data Section */
        .data-actions {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .data-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          transition: all 0.2s ease;
        }

        .data-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .data-card.danger {
          border-color: #fee2e2;
          background: #fef2f2;
        }

        .data-icon {
          width: 64px;
          height: 64px;
          background: var(--bg-tertiary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-accent);
          margin-bottom: 1rem;
        }

        .data-card.danger .data-icon {
          background: #fee2e2;
          color: #dc2626;
        }

        .data-content h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
        }

        .data-content p {
          color: var(--text-secondary);
          margin: 0 0 1.5rem 0;
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: var(--border-radius-md);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-primary {
          background: var(--text-accent);
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          background: #2563eb;
          transform: translateY(-1px);
          box-shadow: var(--shadow-md);
        }

        .btn-secondary {
          background: var(--bg-tertiary);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }

        .btn-secondary:hover {
          background: var(--bg-secondary);
          border-color: var(--text-accent);
        }

        .btn-danger {
          background: #dc2626;
          color: white;
        }

        .btn-danger:hover {
          background: #b91c1c;
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .settings-container {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .settings-sidebar {
            position: static;
            order: 2;
          }

          .settings-nav {
            flex-direction: row;
            overflow-x: auto;
            gap: 1rem;
            padding-bottom: 1rem;
          }

          .nav-item {
            min-width: 200px;
            justify-content: center;
          }

          .nav-arrow {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .profile-section {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .preferences-grid {
            grid-template-columns: 1fr;
          }

          .data-actions {
            grid-template-columns: 1fr;
          }

          .settings-nav {
            flex-direction: column;
            overflow-x: visible;
          }

          .nav-item {
            min-width: auto;
            justify-content: flex-start;
          }

          .nav-arrow {
            display: block;
          }
        }

        @media (max-width: 480px) {
          .settings-section {
            padding: 1rem;
          }

          .security-card {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .notification-item {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .password-section {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `})]})},fs=()=>{const[t,a]=x.useState(!0),[r,n]=x.useState(!1),[i,o]=x.useState({email:"guest@financeai.com",password:"demo123",name:""}),[s,c]=x.useState(!1),{login:l}=Ke(),d=async f=>{f.preventDefault(),c(!0);try{const S=await l(i);S.success?$.success("Welcome to FinanceAI!"):$.error(S.error||"Login failed")}catch{$.error("Something went wrong")}finally{c(!1)}},m=f=>{o({...i,[f.target.name]:f.target.value})};return e.jsxs("div",{className:"auth-container",children:[e.jsxs(j.div,{className:"auth-card",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},children:[e.jsxs("div",{className:"auth-header",children:[e.jsxs(j.div,{className:"logo",initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},children:[e.jsx("div",{className:"logo-icon",children:"💰"}),e.jsx("h1",{children:"FinanceAI"})]}),e.jsx(j.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},children:t?"Welcome back!":"Create your account"})]}),e.jsxs(j.form,{className:"auth-form",onSubmit:d,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},children:[!t&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Name"}),e.jsxs("div",{className:"input-container",children:[e.jsx(Tt,{size:18,className:"input-icon"}),e.jsx("input",{type:"text",name:"name",value:i.name,onChange:m,className:"form-input",placeholder:"Enter your name",required:!t})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Email"}),e.jsxs("div",{className:"input-container",children:[e.jsx(Vi,{size:18,className:"input-icon"}),e.jsx("input",{type:"email",name:"email",value:i.email,onChange:m,className:"form-input",placeholder:"Enter your email",required:!0})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Password"}),e.jsxs("div",{className:"input-container",children:[e.jsx(jt,{size:18,className:"input-icon"}),e.jsx("input",{type:r?"text":"password",name:"password",value:i.password,onChange:m,className:"form-input",placeholder:"Enter your password",required:!0}),e.jsx("button",{type:"button",className:"password-toggle",onClick:()=>n(!r),children:r?e.jsx(La,{size:18}):e.jsx(Ba,{size:18})})]})]}),e.jsx(j.button,{type:"submit",className:"auth-submit",disabled:s,whileHover:{scale:1.02},whileTap:{scale:.98},children:s?"Please wait...":t?"Sign In":"Sign Up"})]}),e.jsx(j.div,{className:"auth-footer",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:e.jsxs("p",{children:[t?"Don't have an account? ":"Already have an account? ",e.jsx("button",{type:"button",className:"auth-toggle",onClick:()=>a(!t),children:t?"Sign Up":"Sign In"})]})}),e.jsxs("div",{className:"demo-notice",children:[e.jsx("p",{children:"🎯 Demo Account"}),e.jsx("p",{children:"Email: guest@financeai.com"}),e.jsx("p",{children:"Password: demo123"})]})]}),e.jsx("style",{jsx:!0,children:`
        .auth-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-mid) 50%, var(--bg-gradient-end) 100%);
        }

        .auth-card {
          width: 100%;
          max-width: 400px;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-xl);
          padding: 2.5rem;
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow-xl);
        }

        .auth-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .logo-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .logo h1 {
          font-size: 1.75rem;
          font-weight: 700;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .auth-header p {
          color: var(--text-secondary);
          margin: 0;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .input-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-tertiary);
          z-index: 2;
        }

        .form-input {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 3rem;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--bg-secondary);
          color: var(--text-primary);
          font-size: 0.95rem;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--text-accent);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .password-toggle {
          position: absolute;
          right: 1rem;
          background: none;
          border: none;
          color: var(--text-tertiary);
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 4px;
          transition: color 0.2s ease;
        }

        .password-toggle:hover {
          color: var(--text-secondary);
        }

        .auth-submit {
          width: 100%;
          padding: 0.875rem;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: white;
          border: none;
          border-radius: var(--border-radius-md);
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 0.5rem;
        }

        .auth-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .auth-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .auth-footer {
          text-align: center;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }

        .auth-footer p {
          color: var(--text-secondary);
          margin: 0;
        }

        .auth-toggle {
          background: none;
          border: none;
          color: var(--text-accent);
          cursor: pointer;
          font-weight: 600;
          text-decoration: underline;
        }

        .demo-notice {
          margin-top: 1.5rem;
          padding: 1rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: var(--border-radius-md);
          text-align: center;
        }

        .demo-notice p {
          margin: 0.25rem 0;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .demo-notice p:first-child {
          font-weight: 600;
          color: var(--text-accent);
        }
      `})]})};function xs(){const[t,a]=x.useState(!0);return x.useEffect(()=>{(async()=>{try{await new Promise(n=>setTimeout(n,2e3))}catch(n){console.error("App initialization failed:",n)}finally{a(!1)}})()},[]),t?e.jsx(Wa,{}):e.jsx(Xa,{children:e.jsx(Wr,{children:e.jsx(Jr,{children:e.jsx(bs,{})})})})}const bs=()=>{const{isAuthenticated:t,loading:a}=Ke();return a?e.jsx(Wa,{}):e.jsx(Ti,{children:e.jsx(Ri,{children:e.jsx(Pi,{children:e.jsxs(Mi,{children:[e.jsx(Y,{mode:"wait",children:t?e.jsx(ys,{}):e.jsx(vs,{})}),e.jsx(Yr,{position:"top-right",toastOptions:{duration:4e3,style:{background:"var(--card-bg)",color:"var(--text-primary)",border:"1px solid var(--border-color)",borderRadius:"12px",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.1)"},success:{iconTheme:{primary:"var(--success-color)",secondary:"white"}},error:{iconTheme:{primary:"var(--error-color)",secondary:"white"}}}})]})})})})},ys=()=>{const[t,a]=x.useState(!0),[r,n]=x.useState(!1),[i,o]=x.useState(!1);return x.useEffect(()=>{const s=()=>{const c=window.innerWidth<=768;o(c),c&&a(!1)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),e.jsxs(j.div,{className:"app-layout",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[e.jsx(ss,{isOpen:t,onToggle:()=>a(!t)}),e.jsxs("div",{className:`main-content ${t?"sidebar-open":"sidebar-closed"} ${i?"mobile":""}`,children:[e.jsx(os,{onMenuToggle:()=>a(!t),onChatbotToggle:()=>n(!r),isChatbotOpen:r}),e.jsx(j.main,{className:"page-container",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{duration:.4,delay:.1},children:e.jsxs(Zt,{children:[e.jsx(re,{path:"/",element:e.jsx(ps,{})}),e.jsx(re,{path:"/transactions",element:e.jsx(ms,{})}),e.jsx(re,{path:"/budgets",element:e.jsx(us,{})}),e.jsx(re,{path:"/analytics",element:e.jsx(gs,{})}),e.jsx(re,{path:"/settings",element:e.jsx(hs,{})}),e.jsx(re,{path:"*",element:e.jsx(Qt,{to:"/",replace:!0})})]})}),e.jsx(cs,{isOpen:r,onToggle:()=>n(!r)}),e.jsx(ls,{})]})]})},vs=()=>e.jsx(j.div,{className:"auth-layout",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.5},children:e.jsxs(Zt,{children:[e.jsx(re,{path:"/login",element:e.jsx(fs,{})}),e.jsx(re,{path:"*",element:e.jsx(Qt,{to:"/login",replace:!0})})]})});pt.createRoot(document.getElementById("root")).render(e.jsx(Ga.StrictMode,{children:e.jsx(xs,{})}));
//# sourceMappingURL=index-2c2505e7.js.map
