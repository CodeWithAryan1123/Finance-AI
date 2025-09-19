import{r as y,b as Wa,a as Ja}from"./vendor-92c95717.js";import{u as Xt,a as we,L as Ga,B as Ka,R as Zt,b as ae,N as Qt}from"./router-38277efd.js";import{A as H,m as j}from"./animations-6ca97e44.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();var ea={exports:{}},We={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=y,Za=Symbol.for("react.element"),Qa=Symbol.for("react.fragment"),er=Object.prototype.hasOwnProperty,tr=Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ar={key:!0,ref:!0,__self:!0,__source:!0};function ta(t,a,r){var n,s={},o=null,i=null;r!==void 0&&(o=""+r),a.key!==void 0&&(o=""+a.key),a.ref!==void 0&&(i=a.ref);for(n in a)er.call(a,n)&&!ar.hasOwnProperty(n)&&(s[n]=a[n]);if(t&&t.defaultProps)for(n in a=t.defaultProps,a)s[n]===void 0&&(s[n]=a[n]);return{$$typeof:Za,type:t,key:o,ref:i,props:s,_owner:tr.current}}We.Fragment=Qa;We.jsx=ta;We.jsxs=ta;ea.exports=We;var e=ea.exports,pt={},Mt=Wa;pt.createRoot=Mt.createRoot,pt.hydrateRoot=Mt.hydrateRoot;let rr={data:""},nr=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||rr,sr=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ir=/\/\*[^]*?\*\/|  +/g,Pt=/\n+/g,re=(t,a)=>{let r="",n="",s="";for(let o in t){let i=t[o];o[0]=="@"?o[1]=="i"?r=o+" "+i+";":n+=o[1]=="f"?re(i,o):o+"{"+re(i,o[1]=="k"?"":a)+"}":typeof i=="object"?n+=re(i,a?a.replace(/([^,])+/g,c=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,c):c?c+" "+l:l)):o):i!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=re.p?re.p(o,i):o+":"+i+";")}return r+(a&&s?a+"{"+s+"}":s)+n},Z={},aa=t=>{if(typeof t=="object"){let a="";for(let r in t)a+=r+aa(t[r]);return a}return t},or=(t,a,r,n,s)=>{let o=aa(t),i=Z[o]||(Z[o]=(l=>{let d=0,p=11;for(;d<l.length;)p=101*p+l.charCodeAt(d++)>>>0;return"go"+p})(o));if(!Z[i]){let l=o!==t?t:(d=>{let p,f,E=[{}];for(;p=sr.exec(d.replace(ir,""));)p[4]?E.shift():p[3]?(f=p[3].replace(Pt," ").trim(),E.unshift(E[0][f]=E[0][f]||{})):E[0][p[1]]=p[2].replace(Pt," ").trim();return E[0]})(t);Z[i]=re(s?{["@keyframes "+i]:l}:l,r?"":"."+i)}let c=r&&Z.g?Z.g:null;return r&&(Z.g=Z[i]),((l,d,p,f)=>{f?d.data=d.data.replace(f,l):d.data.indexOf(l)===-1&&(d.data=p?l+d.data:d.data+l)})(Z[i],a,n,c),i},cr=(t,a,r)=>t.reduce((n,s,o)=>{let i=a[o];if(i&&i.call){let c=i(r),l=c&&c.props&&c.props.className||/^go/.test(c)&&c;i=l?"."+l:c&&typeof c=="object"?c.props?"":re(c,""):c===!1?"":c}return n+s+(i??"")},"");function Je(t){let a=this||{},r=t.call?t(a.p):t;return or(r.unshift?r.raw?cr(r,[].slice.call(arguments,1),a.p):r.reduce((n,s)=>Object.assign(n,s&&s.call?s(a.p):s),{}):r,nr(a.target),a.g,a.o,a.k)}let ra,ut,mt;Je.bind({g:1});let ee=Je.bind({k:1});function lr(t,a,r,n){re.p=a,ra=t,ut=r,mt=n}function ne(t,a){let r=this||{};return function(){let n=arguments;function s(o,i){let c=Object.assign({},o),l=c.className||s.className;r.p=Object.assign({theme:ut&&ut()},c),r.o=/ *go\d+/.test(l),c.className=Je.apply(r,n)+(l?" "+l:""),a&&(c.ref=i);let d=t;return t[0]&&(d=c.as||t,delete c.as),mt&&d[0]&&mt(c),ra(d,c)}return a?a(s):s}}var dr=t=>typeof t=="function",Ue=(t,a)=>dr(t)?t(a):t,pr=(()=>{let t=0;return()=>(++t).toString()})(),na=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let a=matchMedia("(prefers-reduced-motion: reduce)");t=!a||a.matches}return t}})(),ur=20,wt="default",sa=(t,a)=>{let{toastLimit:r}=t.settings;switch(a.type){case 0:return{...t,toasts:[a.toast,...t.toasts].slice(0,r)};case 1:return{...t,toasts:t.toasts.map(i=>i.id===a.toast.id?{...i,...a.toast}:i)};case 2:let{toast:n}=a;return sa(t,{type:t.toasts.find(i=>i.id===n.id)?1:0,toast:n});case 3:let{toastId:s}=a;return{...t,toasts:t.toasts.map(i=>i.id===s||s===void 0?{...i,dismissed:!0,visible:!1}:i)};case 4:return a.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(i=>i.id!==a.toastId)};case 5:return{...t,pausedAt:a.time};case 6:let o=a.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(i=>({...i,pauseDuration:i.pauseDuration+o}))}}},De=[],ia={toasts:[],pausedAt:void 0,settings:{toastLimit:ur}},X={},oa=(t,a=wt)=>{X[a]=sa(X[a]||ia,t),De.forEach(([r,n])=>{r===a&&n(X[a])})},ca=t=>Object.keys(X).forEach(a=>oa(t,a)),mr=t=>Object.keys(X).find(a=>X[a].toasts.some(r=>r.id===t)),Ge=(t=wt)=>a=>{oa(a,t)},gr={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},hr=(t={},a=wt)=>{let[r,n]=y.useState(X[a]||ia),s=y.useRef(X[a]);y.useEffect(()=>(s.current!==X[a]&&n(X[a]),De.push([a,n]),()=>{let i=De.findIndex(([c])=>c===a);i>-1&&De.splice(i,1)}),[a]);let o=r.toasts.map(i=>{var c,l,d;return{...t,...t[i.type],...i,removeDelay:i.removeDelay||((c=t[i.type])==null?void 0:c.removeDelay)||(t==null?void 0:t.removeDelay),duration:i.duration||((l=t[i.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||gr[i.type],style:{...t.style,...(d=t[i.type])==null?void 0:d.style,...i.style}}});return{...r,toasts:o}},fr=(t,a="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:a,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(r==null?void 0:r.id)||pr()}),ke=t=>(a,r)=>{let n=fr(a,t,r);return Ge(n.toasterId||mr(n.id))({type:2,toast:n}),n.id},U=(t,a)=>ke("blank")(t,a);U.error=ke("error");U.success=ke("success");U.loading=ke("loading");U.custom=ke("custom");U.dismiss=(t,a)=>{let r={type:3,toastId:t};a?Ge(a)(r):ca(r)};U.dismissAll=t=>U.dismiss(void 0,t);U.remove=(t,a)=>{let r={type:4,toastId:t};a?Ge(a)(r):ca(r)};U.removeAll=t=>U.remove(void 0,t);U.promise=(t,a,r)=>{let n=U.loading(a.loading,{...r,...r==null?void 0:r.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let o=a.success?Ue(a.success,s):void 0;return o?U.success(o,{id:n,...r,...r==null?void 0:r.success}):U.dismiss(n),s}).catch(s=>{let o=a.error?Ue(a.error,s):void 0;o?U.error(o,{id:n,...r,...r==null?void 0:r.error}):U.dismiss(n)}),t};var xr=1e3,br=(t,a="default")=>{let{toasts:r,pausedAt:n}=hr(t,a),s=y.useRef(new Map).current,o=y.useCallback((f,E=xr)=>{if(s.has(f))return;let S=setTimeout(()=>{s.delete(f),i({type:4,toastId:f})},E);s.set(f,S)},[]);y.useEffect(()=>{if(n)return;let f=Date.now(),E=r.map(S=>{if(S.duration===1/0)return;let u=(S.duration||0)+S.pauseDuration-(f-S.createdAt);if(u<0){S.visible&&U.dismiss(S.id);return}return setTimeout(()=>U.dismiss(S.id,a),u)});return()=>{E.forEach(S=>S&&clearTimeout(S))}},[r,n,a]);let i=y.useCallback(Ge(a),[a]),c=y.useCallback(()=>{i({type:5,time:Date.now()})},[i]),l=y.useCallback((f,E)=>{i({type:1,toast:{id:f,height:E}})},[i]),d=y.useCallback(()=>{n&&i({type:6,time:Date.now()})},[n,i]),p=y.useCallback((f,E)=>{let{reverseOrder:S=!1,gutter:u=8,defaultPosition:x}=E||{},g=r.filter(T=>(T.position||x)===(f.position||x)&&T.height),w=g.findIndex(T=>T.id===f.id),b=g.filter((T,v)=>v<w&&T.visible).length;return g.filter(T=>T.visible).slice(...S?[b+1]:[0,b]).reduce((T,v)=>T+(v.height||0)+u,0)},[r]);return y.useEffect(()=>{r.forEach(f=>{if(f.dismissed)o(f.id,f.removeDelay);else{let E=s.get(f.id);E&&(clearTimeout(E),s.delete(f.id))}})},[r,o]),{toasts:r,handlers:{updateHeight:l,startPause:c,endPause:d,calculateOffset:p}}},yr=ee`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,vr=ee`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,jr=ee`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,wr=ne("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${yr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${vr} 0.15s ease-out forwards;
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
    animation: ${jr} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,kr=ee`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Nr=ne("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${kr} 1s linear infinite;
`,Sr=ee`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,zr=ee`
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
}`,Er=ne("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Sr} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${zr} 0.2s ease-out forwards;
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
`,Ar=ne("div")`
  position: absolute;
`,Tr=ne("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Cr=ee`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Rr=ne("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Cr} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Mr=({toast:t})=>{let{icon:a,type:r,iconTheme:n}=t;return a!==void 0?typeof a=="string"?y.createElement(Rr,null,a):a:r==="blank"?null:y.createElement(Tr,null,y.createElement(Nr,{...n}),r!=="loading"&&y.createElement(Ar,null,r==="error"?y.createElement(wr,{...n}):y.createElement(Er,{...n})))},Pr=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Or=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Dr="0%{opacity:0;} 100%{opacity:1;}",Ir="0%{opacity:1;} 100%{opacity:0;}",Fr=ne("div")`
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
`,Lr=ne("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,$r=(t,a)=>{let r=t.includes("top")?1:-1,[n,s]=na()?[Dr,Ir]:[Pr(r),Or(r)];return{animation:a?`${ee(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${ee(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Br=y.memo(({toast:t,position:a,style:r,children:n})=>{let s=t.height?$r(t.position||a||"top-center",t.visible):{opacity:0},o=y.createElement(Mr,{toast:t}),i=y.createElement(Lr,{...t.ariaProps},Ue(t.message,t));return y.createElement(Fr,{className:t.className,style:{...s,...r,...t.style}},typeof n=="function"?n({icon:o,message:i}):y.createElement(y.Fragment,null,o,i))});lr(y.createElement);var Ur=({id:t,className:a,style:r,onHeightUpdate:n,children:s})=>{let o=y.useCallback(i=>{if(i){let c=()=>{let l=i.getBoundingClientRect().height;n(t,l)};c(),new MutationObserver(c).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[t,n]);return y.createElement("div",{ref:o,className:a,style:r},s)},Hr=(t,a)=>{let r=t.includes("top"),n=r?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:na()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${a*(r?1:-1)}px)`,...n,...s}},_r=Je`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ae=16,qr=({reverseOrder:t,position:a="top-center",toastOptions:r,gutter:n,children:s,toasterId:o,containerStyle:i,containerClassName:c})=>{let{toasts:l,handlers:d}=br(r,o);return y.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:Ae,left:Ae,right:Ae,bottom:Ae,pointerEvents:"none",...i},className:c,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(p=>{let f=p.position||a,E=d.calculateOffset(p,{reverseOrder:t,gutter:n,defaultPosition:a}),S=Hr(f,E);return y.createElement(Ur,{id:p.id,key:p.id,onHeightUpdate:d.updateHeight,className:p.visible?_r:"",style:S},p.type==="custom"?Ue(p.message,p):s?s(p):y.createElement(Br,{toast:p,position:f}))}))},O=U;const la=y.createContext(),Yr=()=>{const t=y.useContext(la);if(!t)throw new Error("useTheme must be used within a ThemeProvider");return t},Vr=({children:t})=>{const[a,r]=y.useState("light");y.useEffect(()=>{const o=localStorage.getItem("theme");if(o)r(o);else{const i=window.matchMedia("(prefers-color-scheme: dark)").matches;r(i?"dark":"light")}},[]),y.useEffect(()=>{document.documentElement.setAttribute("data-theme",a),localStorage.setItem("theme",a)},[a]);const s={theme:a,setTheme:r,toggleTheme:()=>{r(o=>o==="light"?"dark":"light")},isDark:a==="dark"};return e.jsx(la.Provider,{value:s,children:t})},da=y.createContext(),Ke=()=>{const t=y.useContext(da);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},Wr=({children:t})=>{const[a,r]=y.useState(null),[n,s]=y.useState(null),[o,i]=y.useState(!1),[c,l]=y.useState(!0);y.useEffect(()=>{const S=localStorage.getItem("authToken"),u=localStorage.getItem("user");if(S&&u)s(S),r(JSON.parse(u)),i(!0);else{const x={id:1,name:"Guest User",email:"guest@financeai.com",avatar:null},g="demo-token-"+Date.now();r(x),s(g),i(!0),localStorage.setItem("authToken",g),localStorage.setItem("user",JSON.stringify(x))}l(!1)},[]);const E={user:a,token:n,isAuthenticated:o,loading:c,login:async S=>{try{const u={id:1,name:"Guest User",email:"guest@financeai.com",avatar:null},x="demo-token-"+Date.now();return r(u),s(x),i(!0),localStorage.setItem("authToken",x),localStorage.setItem("user",JSON.stringify(u)),{success:!0,user:u}}catch(u){return console.error("Login failed:",u),{success:!1,error:u.message}}},logout:async()=>{try{return r(null),s(null),i(!1),localStorage.removeItem("authToken"),localStorage.removeItem("user"),localStorage.removeItem("transactions"),localStorage.removeItem("budgets"),localStorage.removeItem("userPreferences"),{success:!0}}catch(S){return console.error("Logout error:",S),{success:!1,error:S.message}}},updateUser:S=>{r(S),localStorage.setItem("user",JSON.stringify(S))}};return e.jsx(da.Provider,{value:E,children:t})};function pa(t,a){return function(){return t.apply(a,arguments)}}const{toString:Jr}=Object.prototype,{getPrototypeOf:kt}=Object,{iterator:Xe,toStringTag:ua}=Symbol,Ze=(t=>a=>{const r=Jr.call(a);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),G=t=>(t=t.toLowerCase(),a=>Ze(a)===t),Qe=t=>a=>typeof a===t,{isArray:he}=Array,ue=Qe("undefined");function Ne(t){return t!==null&&!ue(t)&&t.constructor!==null&&!ue(t.constructor)&&Y(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const ma=G("ArrayBuffer");function Gr(t){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(t):a=t&&t.buffer&&ma(t.buffer),a}const Kr=Qe("string"),Y=Qe("function"),ga=Qe("number"),Se=t=>t!==null&&typeof t=="object",Xr=t=>t===!0||t===!1,Ie=t=>{if(Ze(t)!=="object")return!1;const a=kt(t);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(ua in t)&&!(Xe in t)},Zr=t=>{if(!Se(t)||Ne(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Qr=G("Date"),en=G("File"),tn=G("Blob"),an=G("FileList"),rn=t=>Se(t)&&Y(t.pipe),nn=t=>{let a;return t&&(typeof FormData=="function"&&t instanceof FormData||Y(t.append)&&((a=Ze(t))==="formdata"||a==="object"&&Y(t.toString)&&t.toString()==="[object FormData]"))},sn=G("URLSearchParams"),[on,cn,ln,dn]=["ReadableStream","Request","Response","Headers"].map(G),pn=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ze(t,a,{allOwnKeys:r=!1}={}){if(t===null||typeof t>"u")return;let n,s;if(typeof t!="object"&&(t=[t]),he(t))for(n=0,s=t.length;n<s;n++)a.call(null,t[n],n,t);else{if(Ne(t))return;const o=r?Object.getOwnPropertyNames(t):Object.keys(t),i=o.length;let c;for(n=0;n<i;n++)c=o[n],a.call(null,t[c],c,t)}}function ha(t,a){if(Ne(t))return null;a=a.toLowerCase();const r=Object.keys(t);let n=r.length,s;for(;n-- >0;)if(s=r[n],a===s.toLowerCase())return s;return null}const ie=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),fa=t=>!ue(t)&&t!==ie;function gt(){const{caseless:t,skipUndefined:a}=fa(this)&&this||{},r={},n=(s,o)=>{const i=t&&ha(r,o)||o;Ie(r[i])&&Ie(s)?r[i]=gt(r[i],s):Ie(s)?r[i]=gt({},s):he(s)?r[i]=s.slice():(!a||!ue(s))&&(r[i]=s)};for(let s=0,o=arguments.length;s<o;s++)arguments[s]&&ze(arguments[s],n);return r}const un=(t,a,r,{allOwnKeys:n}={})=>(ze(a,(s,o)=>{r&&Y(s)?t[o]=pa(s,r):t[o]=s},{allOwnKeys:n}),t),mn=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),gn=(t,a,r,n)=>{t.prototype=Object.create(a.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:a.prototype}),r&&Object.assign(t.prototype,r)},hn=(t,a,r,n)=>{let s,o,i;const c={};if(a=a||{},t==null)return a;do{for(s=Object.getOwnPropertyNames(t),o=s.length;o-- >0;)i=s[o],(!n||n(i,t,a))&&!c[i]&&(a[i]=t[i],c[i]=!0);t=r!==!1&&kt(t)}while(t&&(!r||r(t,a))&&t!==Object.prototype);return a},fn=(t,a,r)=>{t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=a.length;const n=t.indexOf(a,r);return n!==-1&&n===r},xn=t=>{if(!t)return null;if(he(t))return t;let a=t.length;if(!ga(a))return null;const r=new Array(a);for(;a-- >0;)r[a]=t[a];return r},bn=(t=>a=>t&&a instanceof t)(typeof Uint8Array<"u"&&kt(Uint8Array)),yn=(t,a)=>{const n=(t&&t[Xe]).call(t);let s;for(;(s=n.next())&&!s.done;){const o=s.value;a.call(t,o[0],o[1])}},vn=(t,a)=>{let r;const n=[];for(;(r=t.exec(a))!==null;)n.push(r);return n},jn=G("HTMLFormElement"),wn=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),Ot=(({hasOwnProperty:t})=>(a,r)=>t.call(a,r))(Object.prototype),kn=G("RegExp"),xa=(t,a)=>{const r=Object.getOwnPropertyDescriptors(t),n={};ze(r,(s,o)=>{let i;(i=a(s,o,t))!==!1&&(n[o]=i||s)}),Object.defineProperties(t,n)},Nn=t=>{xa(t,(a,r)=>{if(Y(t)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=t[r];if(Y(n)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Sn=(t,a)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return he(t)?n(t):n(String(t).split(a)),r},zn=()=>{},En=(t,a)=>t!=null&&Number.isFinite(t=+t)?t:a;function An(t){return!!(t&&Y(t.append)&&t[ua]==="FormData"&&t[Xe])}const Tn=t=>{const a=new Array(10),r=(n,s)=>{if(Se(n)){if(a.indexOf(n)>=0)return;if(Ne(n))return n;if(!("toJSON"in n)){a[s]=n;const o=he(n)?[]:{};return ze(n,(i,c)=>{const l=r(i,s+1);!ue(l)&&(o[c]=l)}),a[s]=void 0,o}}return n};return r(t,0)},Cn=G("AsyncFunction"),Rn=t=>t&&(Se(t)||Y(t))&&Y(t.then)&&Y(t.catch),ba=((t,a)=>t?setImmediate:a?((r,n)=>(ie.addEventListener("message",({source:s,data:o})=>{s===ie&&o===r&&n.length&&n.shift()()},!1),s=>{n.push(s),ie.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",Y(ie.postMessage)),Mn=typeof queueMicrotask<"u"?queueMicrotask.bind(ie):typeof process<"u"&&process.nextTick||ba,Pn=t=>t!=null&&Y(t[Xe]),h={isArray:he,isArrayBuffer:ma,isBuffer:Ne,isFormData:nn,isArrayBufferView:Gr,isString:Kr,isNumber:ga,isBoolean:Xr,isObject:Se,isPlainObject:Ie,isEmptyObject:Zr,isReadableStream:on,isRequest:cn,isResponse:ln,isHeaders:dn,isUndefined:ue,isDate:Qr,isFile:en,isBlob:tn,isRegExp:kn,isFunction:Y,isStream:rn,isURLSearchParams:sn,isTypedArray:bn,isFileList:an,forEach:ze,merge:gt,extend:un,trim:pn,stripBOM:mn,inherits:gn,toFlatObject:hn,kindOf:Ze,kindOfTest:G,endsWith:fn,toArray:xn,forEachEntry:yn,matchAll:vn,isHTMLForm:jn,hasOwnProperty:Ot,hasOwnProp:Ot,reduceDescriptors:xa,freezeMethods:Nn,toObjectSet:Sn,toCamelCase:wn,noop:zn,toFiniteNumber:En,findKey:ha,global:ie,isContextDefined:fa,isSpecCompliantForm:An,toJSONObject:Tn,isAsyncFn:Cn,isThenable:Rn,setImmediate:ba,asap:Mn,isIterable:Pn};function P(t,a,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",a&&(this.code=a),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s,this.status=s.status?s.status:null)}h.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:h.toJSONObject(this.config),code:this.code,status:this.status}}});const ya=P.prototype,va={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{va[t]={value:t}});Object.defineProperties(P,va);Object.defineProperty(ya,"isAxiosError",{value:!0});P.from=(t,a,r,n,s,o)=>{const i=Object.create(ya);h.toFlatObject(t,i,function(p){return p!==Error.prototype},d=>d!=="isAxiosError");const c=t&&t.message?t.message:"Error",l=a==null&&t?t.code:a;return P.call(i,c,l,r,n,s),t&&i.cause==null&&Object.defineProperty(i,"cause",{value:t,configurable:!0}),i.name=t&&t.name||"Error",o&&Object.assign(i,o),i};const On=null;function ht(t){return h.isPlainObject(t)||h.isArray(t)}function ja(t){return h.endsWith(t,"[]")?t.slice(0,-2):t}function Dt(t,a,r){return t?t.concat(a).map(function(s,o){return s=ja(s),!r&&o?"["+s+"]":s}).join(r?".":""):a}function Dn(t){return h.isArray(t)&&!t.some(ht)}const In=h.toFlatObject(h,{},null,function(a){return/^is[A-Z]/.test(a)});function et(t,a,r){if(!h.isObject(t))throw new TypeError("target must be an object");a=a||new FormData,r=h.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,g){return!h.isUndefined(g[x])});const n=r.metaTokens,s=r.visitor||p,o=r.dots,i=r.indexes,l=(r.Blob||typeof Blob<"u"&&Blob)&&h.isSpecCompliantForm(a);if(!h.isFunction(s))throw new TypeError("visitor must be a function");function d(u){if(u===null)return"";if(h.isDate(u))return u.toISOString();if(h.isBoolean(u))return u.toString();if(!l&&h.isBlob(u))throw new P("Blob is not supported. Use a Buffer instead.");return h.isArrayBuffer(u)||h.isTypedArray(u)?l&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function p(u,x,g){let w=u;if(u&&!g&&typeof u=="object"){if(h.endsWith(x,"{}"))x=n?x:x.slice(0,-2),u=JSON.stringify(u);else if(h.isArray(u)&&Dn(u)||(h.isFileList(u)||h.endsWith(x,"[]"))&&(w=h.toArray(u)))return x=ja(x),w.forEach(function(T,v){!(h.isUndefined(T)||T===null)&&a.append(i===!0?Dt([x],v,o):i===null?x:x+"[]",d(T))}),!1}return ht(u)?!0:(a.append(Dt(g,x,o),d(u)),!1)}const f=[],E=Object.assign(In,{defaultVisitor:p,convertValue:d,isVisitable:ht});function S(u,x){if(!h.isUndefined(u)){if(f.indexOf(u)!==-1)throw Error("Circular reference detected in "+x.join("."));f.push(u),h.forEach(u,function(w,b){(!(h.isUndefined(w)||w===null)&&s.call(a,w,h.isString(b)?b.trim():b,x,E))===!0&&S(w,x?x.concat(b):[b])}),f.pop()}}if(!h.isObject(t))throw new TypeError("data must be an object");return S(t),a}function It(t){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(n){return a[n]})}function Nt(t,a){this._pairs=[],t&&et(t,this,a)}const wa=Nt.prototype;wa.append=function(a,r){this._pairs.push([a,r])};wa.toString=function(a){const r=a?function(n){return a.call(this,n,It)}:It;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function Fn(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function ka(t,a,r){if(!a)return t;const n=r&&r.encode||Fn;h.isFunction(r)&&(r={serialize:r});const s=r&&r.serialize;let o;if(s?o=s(a,r):o=h.isURLSearchParams(a)?a.toString():new Nt(a,r).toString(n),o){const i=t.indexOf("#");i!==-1&&(t=t.slice(0,i)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class Ln{constructor(){this.handlers=[]}use(a,r,n){return this.handlers.push({fulfilled:a,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){h.forEach(this.handlers,function(n){n!==null&&a(n)})}}const Ft=Ln,Na={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$n=typeof URLSearchParams<"u"?URLSearchParams:Nt,Bn=typeof FormData<"u"?FormData:null,Un=typeof Blob<"u"?Blob:null,Hn={isBrowser:!0,classes:{URLSearchParams:$n,FormData:Bn,Blob:Un},protocols:["http","https","file","blob","url","data"]},St=typeof window<"u"&&typeof document<"u",ft=typeof navigator=="object"&&navigator||void 0,_n=St&&(!ft||["ReactNative","NativeScript","NS"].indexOf(ft.product)<0),qn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Yn=St&&window.location.href||"http://localhost",Vn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:St,hasStandardBrowserEnv:_n,hasStandardBrowserWebWorkerEnv:qn,navigator:ft,origin:Yn},Symbol.toStringTag,{value:"Module"})),_={...Vn,...Hn};function Wn(t,a){return et(t,new _.classes.URLSearchParams,{visitor:function(r,n,s,o){return _.isNode&&h.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...a})}function Jn(t){return h.matchAll(/\w+|\[(\w*)]/g,t).map(a=>a[0]==="[]"?"":a[1]||a[0])}function Gn(t){const a={},r=Object.keys(t);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],a[o]=t[o];return a}function Sa(t){function a(r,n,s,o){let i=r[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),l=o>=r.length;return i=!i&&h.isArray(s)?s.length:i,l?(h.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!c):((!s[i]||!h.isObject(s[i]))&&(s[i]=[]),a(r,n,s[i],o)&&h.isArray(s[i])&&(s[i]=Gn(s[i])),!c)}if(h.isFormData(t)&&h.isFunction(t.entries)){const r={};return h.forEachEntry(t,(n,s)=>{a(Jn(n),s,r,0)}),r}return null}function Kn(t,a,r){if(h.isString(t))try{return(a||JSON.parse)(t),h.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(t)}const zt={transitional:Na,adapter:["xhr","http","fetch"],transformRequest:[function(a,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=h.isObject(a);if(o&&h.isHTMLForm(a)&&(a=new FormData(a)),h.isFormData(a))return s?JSON.stringify(Sa(a)):a;if(h.isArrayBuffer(a)||h.isBuffer(a)||h.isStream(a)||h.isFile(a)||h.isBlob(a)||h.isReadableStream(a))return a;if(h.isArrayBufferView(a))return a.buffer;if(h.isURLSearchParams(a))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let c;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Wn(a,this.formSerializer).toString();if((c=h.isFileList(a))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return et(c?{"files[]":a}:a,l&&new l,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),Kn(a)):a}],transformResponse:[function(a){const r=this.transitional||zt.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(h.isResponse(a)||h.isReadableStream(a))return a;if(a&&h.isString(a)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(a,this.parseReviver)}catch(c){if(i)throw c.name==="SyntaxError"?P.from(c,P.ERR_BAD_RESPONSE,this,null,this.response):c}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_.classes.FormData,Blob:_.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};h.forEach(["delete","get","head","post","put","patch"],t=>{zt.headers[t]={}});const Et=zt,Xn=h.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Zn=t=>{const a={};let r,n,s;return t&&t.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||a[r]&&Xn[r])&&(r==="set-cookie"?a[r]?a[r].push(n):a[r]=[n]:a[r]=a[r]?a[r]+", "+n:n)}),a},Lt=Symbol("internals");function ye(t){return t&&String(t).trim().toLowerCase()}function Fe(t){return t===!1||t==null?t:h.isArray(t)?t.map(Fe):String(t)}function Qn(t){const a=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(t);)a[n[1]]=n[2];return a}const es=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ct(t,a,r,n,s){if(h.isFunction(n))return n.call(this,a,r);if(s&&(a=r),!!h.isString(a)){if(h.isString(n))return a.indexOf(n)!==-1;if(h.isRegExp(n))return n.test(a)}}function ts(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,r,n)=>r.toUpperCase()+n)}function as(t,a){const r=h.toCamelCase(" "+a);["get","set","has"].forEach(n=>{Object.defineProperty(t,n+r,{value:function(s,o,i){return this[n].call(this,a,s,o,i)},configurable:!0})})}class tt{constructor(a){a&&this.set(a)}set(a,r,n){const s=this;function o(c,l,d){const p=ye(l);if(!p)throw new Error("header name must be a non-empty string");const f=h.findKey(s,p);(!f||s[f]===void 0||d===!0||d===void 0&&s[f]!==!1)&&(s[f||l]=Fe(c))}const i=(c,l)=>h.forEach(c,(d,p)=>o(d,p,l));if(h.isPlainObject(a)||a instanceof this.constructor)i(a,r);else if(h.isString(a)&&(a=a.trim())&&!es(a))i(Zn(a),r);else if(h.isObject(a)&&h.isIterable(a)){let c={},l,d;for(const p of a){if(!h.isArray(p))throw TypeError("Object iterator must return a key-value pair");c[d=p[0]]=(l=c[d])?h.isArray(l)?[...l,p[1]]:[l,p[1]]:p[1]}i(c,r)}else a!=null&&o(r,a,n);return this}get(a,r){if(a=ye(a),a){const n=h.findKey(this,a);if(n){const s=this[n];if(!r)return s;if(r===!0)return Qn(s);if(h.isFunction(r))return r.call(this,s,n);if(h.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,r){if(a=ye(a),a){const n=h.findKey(this,a);return!!(n&&this[n]!==void 0&&(!r||ct(this,this[n],n,r)))}return!1}delete(a,r){const n=this;let s=!1;function o(i){if(i=ye(i),i){const c=h.findKey(n,i);c&&(!r||ct(n,n[c],c,r))&&(delete n[c],s=!0)}}return h.isArray(a)?a.forEach(o):o(a),s}clear(a){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const o=r[n];(!a||ct(this,this[o],o,a,!0))&&(delete this[o],s=!0)}return s}normalize(a){const r=this,n={};return h.forEach(this,(s,o)=>{const i=h.findKey(n,o);if(i){r[i]=Fe(s),delete r[o];return}const c=a?ts(o):String(o).trim();c!==o&&delete r[o],r[c]=Fe(s),n[c]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const r=Object.create(null);return h.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=a&&h.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,r])=>a+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static concat(a,...r){const n=new this(a);return r.forEach(s=>n.set(s)),n}static accessor(a){const n=(this[Lt]=this[Lt]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=ye(i);n[c]||(as(s,i),n[c]=!0)}return h.isArray(a)?a.forEach(o):o(a),this}}tt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);h.reduceDescriptors(tt.prototype,({value:t},a)=>{let r=a[0].toUpperCase()+a.slice(1);return{get:()=>t,set(n){this[r]=n}}});h.freezeMethods(tt);const J=tt;function lt(t,a){const r=this||Et,n=a||r,s=J.from(n.headers);let o=n.data;return h.forEach(t,function(c){o=c.call(r,o,s.normalize(),a?a.status:void 0)}),s.normalize(),o}function za(t){return!!(t&&t.__CANCEL__)}function fe(t,a,r){P.call(this,t??"canceled",P.ERR_CANCELED,a,r),this.name="CanceledError"}h.inherits(fe,P,{__CANCEL__:!0});function Ea(t,a,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?t(r):a(new P("Request failed with status code "+r.status,[P.ERR_BAD_REQUEST,P.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function rs(t){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return a&&a[1]||""}function ns(t,a){t=t||10;const r=new Array(t),n=new Array(t);let s=0,o=0,i;return a=a!==void 0?a:1e3,function(l){const d=Date.now(),p=n[o];i||(i=d),r[s]=l,n[s]=d;let f=o,E=0;for(;f!==s;)E+=r[f++],f=f%t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),d-i<a)return;const S=p&&d-p;return S?Math.round(E*1e3/S):void 0}}function ss(t,a){let r=0,n=1e3/a,s,o;const i=(d,p=Date.now())=>{r=p,s=null,o&&(clearTimeout(o),o=null),t(...d)};return[(...d)=>{const p=Date.now(),f=p-r;f>=n?i(d,p):(s=d,o||(o=setTimeout(()=>{o=null,i(s)},n-f)))},()=>s&&i(s)]}const He=(t,a,r=3)=>{let n=0;const s=ns(50,250);return ss(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,l=i-n,d=s(l),p=i<=c;n=i;const f={loaded:i,total:c,progress:c?i/c:void 0,bytes:l,rate:d||void 0,estimated:d&&c&&p?(c-i)/d:void 0,event:o,lengthComputable:c!=null,[a?"download":"upload"]:!0};t(f)},r)},$t=(t,a)=>{const r=t!=null;return[n=>a[0]({lengthComputable:r,total:t,loaded:n}),a[1]]},Bt=t=>(...a)=>h.asap(()=>t(...a)),is=_.hasStandardBrowserEnv?((t,a)=>r=>(r=new URL(r,_.origin),t.protocol===r.protocol&&t.host===r.host&&(a||t.port===r.port)))(new URL(_.origin),_.navigator&&/(msie|trident)/i.test(_.navigator.userAgent)):()=>!0,os=_.hasStandardBrowserEnv?{write(t,a,r,n,s,o){const i=[t+"="+encodeURIComponent(a)];h.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),h.isString(n)&&i.push("path="+n),h.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(t){const a=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function cs(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function ls(t,a){return a?t.replace(/\/?\/$/,"")+"/"+a.replace(/^\/+/,""):t}function Aa(t,a,r){let n=!cs(a);return t&&(n||r==!1)?ls(t,a):a}const Ut=t=>t instanceof J?{...t}:t;function oe(t,a){a=a||{};const r={};function n(d,p,f,E){return h.isPlainObject(d)&&h.isPlainObject(p)?h.merge.call({caseless:E},d,p):h.isPlainObject(p)?h.merge({},p):h.isArray(p)?p.slice():p}function s(d,p,f,E){if(h.isUndefined(p)){if(!h.isUndefined(d))return n(void 0,d,f,E)}else return n(d,p,f,E)}function o(d,p){if(!h.isUndefined(p))return n(void 0,p)}function i(d,p){if(h.isUndefined(p)){if(!h.isUndefined(d))return n(void 0,d)}else return n(void 0,p)}function c(d,p,f){if(f in a)return n(d,p);if(f in t)return n(void 0,d)}const l={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(d,p,f)=>s(Ut(d),Ut(p),f,!0)};return h.forEach(Object.keys({...t,...a}),function(p){const f=l[p]||s,E=f(t[p],a[p],p);h.isUndefined(E)&&f!==c||(r[p]=E)}),r}const Ta=t=>{const a=oe({},t);let{data:r,withXSRFToken:n,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=a;if(a.headers=i=J.from(i),a.url=ka(Aa(a.baseURL,a.url,a.allowAbsoluteUrls),t.params,t.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),h.isFormData(r)){if(_.hasStandardBrowserEnv||_.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if(h.isFunction(r.getHeaders)){const l=r.getHeaders(),d=["content-type","content-length"];Object.entries(l).forEach(([p,f])=>{d.includes(p.toLowerCase())&&i.set(p,f)})}}if(_.hasStandardBrowserEnv&&(n&&h.isFunction(n)&&(n=n(a)),n||n!==!1&&is(a.url))){const l=s&&o&&os.read(o);l&&i.set(s,l)}return a},ds=typeof XMLHttpRequest<"u",ps=ds&&function(t){return new Promise(function(r,n){const s=Ta(t);let o=s.data;const i=J.from(s.headers).normalize();let{responseType:c,onUploadProgress:l,onDownloadProgress:d}=s,p,f,E,S,u;function x(){S&&S(),u&&u(),s.cancelToken&&s.cancelToken.unsubscribe(p),s.signal&&s.signal.removeEventListener("abort",p)}let g=new XMLHttpRequest;g.open(s.method.toUpperCase(),s.url,!0),g.timeout=s.timeout;function w(){if(!g)return;const T=J.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),A={data:!c||c==="text"||c==="json"?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:T,config:t,request:g};Ea(function(z){r(z),x()},function(z){n(z),x()},A),g=null}"onloadend"in g?g.onloadend=w:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.indexOf("file:")===0)||setTimeout(w)},g.onabort=function(){g&&(n(new P("Request aborted",P.ECONNABORTED,t,g)),g=null)},g.onerror=function(v){const A=v&&v.message?v.message:"Network Error",k=new P(A,P.ERR_NETWORK,t,g);k.event=v||null,n(k),g=null},g.ontimeout=function(){let v=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const A=s.transitional||Na;s.timeoutErrorMessage&&(v=s.timeoutErrorMessage),n(new P(v,A.clarifyTimeoutError?P.ETIMEDOUT:P.ECONNABORTED,t,g)),g=null},o===void 0&&i.setContentType(null),"setRequestHeader"in g&&h.forEach(i.toJSON(),function(v,A){g.setRequestHeader(A,v)}),h.isUndefined(s.withCredentials)||(g.withCredentials=!!s.withCredentials),c&&c!=="json"&&(g.responseType=s.responseType),d&&([E,u]=He(d,!0),g.addEventListener("progress",E)),l&&g.upload&&([f,S]=He(l),g.upload.addEventListener("progress",f),g.upload.addEventListener("loadend",S)),(s.cancelToken||s.signal)&&(p=T=>{g&&(n(!T||T.type?new fe(null,t,g):T),g.abort(),g=null)},s.cancelToken&&s.cancelToken.subscribe(p),s.signal&&(s.signal.aborted?p():s.signal.addEventListener("abort",p)));const b=rs(s.url);if(b&&_.protocols.indexOf(b)===-1){n(new P("Unsupported protocol "+b+":",P.ERR_BAD_REQUEST,t));return}g.send(o||null)})},us=(t,a)=>{const{length:r}=t=t?t.filter(Boolean):[];if(a||r){let n=new AbortController,s;const o=function(d){if(!s){s=!0,c();const p=d instanceof Error?d:this.reason;n.abort(p instanceof P?p:new fe(p instanceof Error?p.message:p))}};let i=a&&setTimeout(()=>{i=null,o(new P(`timeout ${a} of ms exceeded`,P.ETIMEDOUT))},a);const c=()=>{t&&(i&&clearTimeout(i),i=null,t.forEach(d=>{d.unsubscribe?d.unsubscribe(o):d.removeEventListener("abort",o)}),t=null)};t.forEach(d=>d.addEventListener("abort",o));const{signal:l}=n;return l.unsubscribe=()=>h.asap(c),l}},ms=us,gs=function*(t,a){let r=t.byteLength;if(!a||r<a){yield t;return}let n=0,s;for(;n<r;)s=n+a,yield t.slice(n,s),n=s},hs=async function*(t,a){for await(const r of fs(t))yield*gs(r,a)},fs=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const a=t.getReader();try{for(;;){const{done:r,value:n}=await a.read();if(r)break;yield n}}finally{await a.cancel()}},Ht=(t,a,r,n)=>{const s=hs(t,a);let o=0,i,c=l=>{i||(i=!0,n&&n(l))};return new ReadableStream({async pull(l){try{const{done:d,value:p}=await s.next();if(d){c(),l.close();return}let f=p.byteLength;if(r){let E=o+=f;r(E)}l.enqueue(new Uint8Array(p))}catch(d){throw c(d),d}},cancel(l){return c(l),s.return()}},{highWaterMark:2})},_t=64*1024,{isFunction:Te}=h,xs=(({Request:t,Response:a})=>({Request:t,Response:a}))(h.global),{ReadableStream:qt,TextEncoder:Yt}=h.global,Vt=(t,...a)=>{try{return!!t(...a)}catch{return!1}},bs=t=>{t=h.merge.call({skipUndefined:!0},xs,t);const{fetch:a,Request:r,Response:n}=t,s=a?Te(a):typeof fetch=="function",o=Te(r),i=Te(n);if(!s)return!1;const c=s&&Te(qt),l=s&&(typeof Yt=="function"?(u=>x=>u.encode(x))(new Yt):async u=>new Uint8Array(await new r(u).arrayBuffer())),d=o&&c&&Vt(()=>{let u=!1;const x=new r(_.origin,{body:new qt,method:"POST",get duplex(){return u=!0,"half"}}).headers.has("Content-Type");return u&&!x}),p=i&&c&&Vt(()=>h.isReadableStream(new n("").body)),f={stream:p&&(u=>u.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(u=>{!f[u]&&(f[u]=(x,g)=>{let w=x&&x[u];if(w)return w.call(x);throw new P(`Response type '${u}' is not supported`,P.ERR_NOT_SUPPORT,g)})});const E=async u=>{if(u==null)return 0;if(h.isBlob(u))return u.size;if(h.isSpecCompliantForm(u))return(await new r(_.origin,{method:"POST",body:u}).arrayBuffer()).byteLength;if(h.isArrayBufferView(u)||h.isArrayBuffer(u))return u.byteLength;if(h.isURLSearchParams(u)&&(u=u+""),h.isString(u))return(await l(u)).byteLength},S=async(u,x)=>{const g=h.toFiniteNumber(u.getContentLength());return g??E(x)};return async u=>{let{url:x,method:g,data:w,signal:b,cancelToken:T,timeout:v,onDownloadProgress:A,onUploadProgress:k,responseType:z,headers:M,withCredentials:C="same-origin",fetchOptions:m}=Ta(u),N=a||fetch;z=z?(z+"").toLowerCase():"text";let I=ms([b,T&&T.toAbortSignal()],v),L=null;const q=I&&I.unsubscribe&&(()=>{I.unsubscribe()});let xe;try{if(k&&d&&g!=="get"&&g!=="head"&&(xe=await S(M,w))!==0){let W=new r(x,{method:"POST",body:w,duplex:"half"}),ce;if(h.isFormData(w)&&(ce=W.headers.get("content-type"))&&M.setContentType(ce),W.body){const[ot,Ee]=$t(xe,He(Bt(k)));w=Ht(W.body,_t,ot,Ee)}}h.isString(C)||(C=C?"include":"omit");const V=o&&"credentials"in r.prototype,be={...m,signal:I,method:g.toUpperCase(),headers:M.normalize().toJSON(),body:w,duplex:"half",credentials:V?C:void 0};L=o&&new r(x,be);let F=await(o?N(L,m):N(x,be));const $=p&&(z==="stream"||z==="response");if(p&&(A||$&&q)){const W={};["status","statusText","headers"].forEach(Rt=>{W[Rt]=F[Rt]});const ce=h.toFiniteNumber(F.headers.get("content-length")),[ot,Ee]=A&&$t(ce,He(Bt(A),!0))||[];F=new n(Ht(F.body,_t,ot,()=>{Ee&&Ee(),q&&q()}),W)}z=z||"text";let te=await f[h.findKey(f,z)||"text"](F,u);return!$&&q&&q(),await new Promise((W,ce)=>{Ea(W,ce,{data:te,headers:J.from(F.headers),status:F.status,statusText:F.statusText,config:u,request:L})})}catch(V){throw q&&q(),V&&V.name==="TypeError"&&/Load failed|fetch/i.test(V.message)?Object.assign(new P("Network Error",P.ERR_NETWORK,u,L),{cause:V.cause||V}):P.from(V,V&&V.code,u,L)}}},ys=new Map,Ca=t=>{let a=t?t.env:{};const{fetch:r,Request:n,Response:s}=a,o=[n,s,r];let i=o.length,c=i,l,d,p=ys;for(;c--;)l=o[c],d=p.get(l),d===void 0&&p.set(l,d=c?new Map:bs(a)),p=d;return d};Ca();const xt={http:On,xhr:ps,fetch:{get:Ca}};h.forEach(xt,(t,a)=>{if(t){try{Object.defineProperty(t,"name",{value:a})}catch{}Object.defineProperty(t,"adapterName",{value:a})}});const Wt=t=>`- ${t}`,vs=t=>h.isFunction(t)||t===null||t===!1,Ra={getAdapter:(t,a)=>{t=h.isArray(t)?t:[t];const{length:r}=t;let n,s;const o={};for(let i=0;i<r;i++){n=t[i];let c;if(s=n,!vs(n)&&(s=xt[(c=String(n)).toLowerCase()],s===void 0))throw new P(`Unknown adapter '${c}'`);if(s&&(h.isFunction(s)||(s=s.get(a))))break;o[c||"#"+i]=s}if(!s){const i=Object.entries(o).map(([l,d])=>`adapter ${l} `+(d===!1?"is not supported by the environment":"is not available in the build"));let c=r?i.length>1?`since :
`+i.map(Wt).join(`
`):" "+Wt(i[0]):"as no adapter specified";throw new P("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return s},adapters:xt};function dt(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new fe(null,t)}function Jt(t){return dt(t),t.headers=J.from(t.headers),t.data=lt.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Ra.getAdapter(t.adapter||Et.adapter,t)(t).then(function(n){return dt(t),n.data=lt.call(t,t.transformResponse,n),n.headers=J.from(n.headers),n},function(n){return za(n)||(dt(t),n&&n.response&&(n.response.data=lt.call(t,t.transformResponse,n.response),n.response.headers=J.from(n.response.headers))),Promise.reject(n)})}const Ma="1.12.2",at={};["object","boolean","number","function","string","symbol"].forEach((t,a)=>{at[t]=function(n){return typeof n===t||"a"+(a<1?"n ":" ")+t}});const Gt={};at.transitional=function(a,r,n){function s(o,i){return"[Axios v"+Ma+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,c)=>{if(a===!1)throw new P(s(i," has been removed"+(r?" in "+r:"")),P.ERR_DEPRECATED);return r&&!Gt[i]&&(Gt[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),a?a(o,i,c):!0}};at.spelling=function(a){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${a}`),!0)};function js(t,a,r){if(typeof t!="object")throw new P("options must be an object",P.ERR_BAD_OPTION_VALUE);const n=Object.keys(t);let s=n.length;for(;s-- >0;){const o=n[s],i=a[o];if(i){const c=t[o],l=c===void 0||i(c,o,t);if(l!==!0)throw new P("option "+o+" must be "+l,P.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new P("Unknown option "+o,P.ERR_BAD_OPTION)}}const Le={assertOptions:js,validators:at},K=Le.validators;class _e{constructor(a){this.defaults=a||{},this.interceptors={request:new Ft,response:new Ft}}async request(a,r){try{return await this._request(a,r)}catch(n){if(n instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{n.stack?o&&!String(n.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+o):n.stack=o}catch{}}throw n}}_request(a,r){typeof a=="string"?(r=r||{},r.url=a):r=a||{},r=oe(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:o}=r;n!==void 0&&Le.assertOptions(n,{silentJSONParsing:K.transitional(K.boolean),forcedJSONParsing:K.transitional(K.boolean),clarifyTimeoutError:K.transitional(K.boolean)},!1),s!=null&&(h.isFunction(s)?r.paramsSerializer={serialize:s}:Le.assertOptions(s,{encode:K.function,serialize:K.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Le.assertOptions(r,{baseUrl:K.spelling("baseURL"),withXsrfToken:K.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=o&&h.merge(o.common,o[r.method]);o&&h.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),r.headers=J.concat(i,o);const c=[];let l=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(r)===!1||(l=l&&x.synchronous,c.unshift(x.fulfilled,x.rejected))});const d=[];this.interceptors.response.forEach(function(x){d.push(x.fulfilled,x.rejected)});let p,f=0,E;if(!l){const u=[Jt.bind(this),void 0];for(u.unshift(...c),u.push(...d),E=u.length,p=Promise.resolve(r);f<E;)p=p.then(u[f++],u[f++]);return p}E=c.length;let S=r;for(;f<E;){const u=c[f++],x=c[f++];try{S=u(S)}catch(g){x.call(this,g);break}}try{p=Jt.call(this,S)}catch(u){return Promise.reject(u)}for(f=0,E=d.length;f<E;)p=p.then(d[f++],d[f++]);return p}getUri(a){a=oe(this.defaults,a);const r=Aa(a.baseURL,a.url,a.allowAbsoluteUrls);return ka(r,a.params,a.paramsSerializer)}}h.forEach(["delete","get","head","options"],function(a){_e.prototype[a]=function(r,n){return this.request(oe(n||{},{method:a,url:r,data:(n||{}).data}))}});h.forEach(["post","put","patch"],function(a){function r(n){return function(o,i,c){return this.request(oe(c||{},{method:a,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}_e.prototype[a]=r(),_e.prototype[a+"Form"]=r(!0)});const $e=_e;class At{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{n.subscribe(c),o=c}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},a(function(o,i,c){n.reason||(n.reason=new fe(o,i,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const r=this._listeners.indexOf(a);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const a=new AbortController,r=n=>{a.abort(n)};return this.subscribe(r),a.signal.unsubscribe=()=>this.unsubscribe(r),a.signal}static source(){let a;return{token:new At(function(s){a=s}),cancel:a}}}const ws=At;function ks(t){return function(r){return t.apply(null,r)}}function Ns(t){return h.isObject(t)&&t.isAxiosError===!0}const bt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(bt).forEach(([t,a])=>{bt[a]=t});const Ss=bt;function Pa(t){const a=new $e(t),r=pa($e.prototype.request,a);return h.extend(r,$e.prototype,a,{allOwnKeys:!0}),h.extend(r,a,null,{allOwnKeys:!0}),r.create=function(s){return Pa(oe(t,s))},r}const B=Pa(Et);B.Axios=$e;B.CanceledError=fe;B.CancelToken=ws;B.isCancel=za;B.VERSION=Ma;B.toFormData=et;B.AxiosError=P;B.Cancel=B.CanceledError;B.all=function(a){return Promise.all(a)};B.spread=ks;B.isAxiosError=Ns;B.mergeConfig=oe;B.AxiosHeaders=J;B.formToJSON=t=>Sa(h.isHTMLForm(t)?new FormData(t):t);B.getAdapter=Ra.getAdapter;B.HttpStatusCode=Ss;B.default=B;const zs=B,Es=y.createContext(),As=()=>{const t=window.location.hostname,a=window.location.port;return a==="3000"?`http://${t}:5000`:a==="5500"?`http://${t}:5000`:a==="5000"?`http://${t}:5000`:"http://localhost:5000"},yt=As(),D=zs.create({baseURL:yt,timeout:1e4,headers:{"Content-Type":"application/json"}});D.interceptors.request.use(t=>{var r;const a=localStorage.getItem("authToken");return a&&(t.headers.Authorization=`Bearer ${a}`),console.log(`🚀 API Request: ${(r=t.method)==null?void 0:r.toUpperCase()} ${t.url}`),t},t=>(console.error("Request interceptor error:",t),Promise.reject(t)));D.interceptors.response.use(t=>(console.log(`✅ API Response: ${t.status} ${t.config.url}`),t),t=>{var a,r,n,s;return console.error(`❌ API Error: ${(a=t.response)==null?void 0:a.status} ${(r=t.config)==null?void 0:r.url}`,(n=t.response)==null?void 0:n.data),((s=t.response)==null?void 0:s.status)===401&&(localStorage.removeItem("authToken"),localStorage.removeItem("user"),window.location.href="/login"),Promise.reject(t)});const Ts=({children:t})=>{const c={api:D,transactions:{getAll:()=>D.get("/api/transactions"),create:l=>D.post("/api/transactions",l),update:(l,d)=>D.put(`/api/transactions/${l}`,d),delete:l=>D.delete(`/api/transactions/${l}`),connectBank:l=>D.post("/api/transactions/auto-fetch/connect",l),verifyOtp:l=>D.post("/api/transactions/auto-fetch/verify-otp",l),resendOtp:l=>D.post("/api/transactions/auto-fetch/resend-otp",l),disconnectBank:()=>D.post("/api/transactions/auto-fetch/disconnect")},budgets:{getAll:()=>D.get("/api/budgets"),create:l=>D.post("/api/budgets",l),update:(l,d)=>D.put(`/api/budgets/${l}`,d),delete:l=>D.delete(`/api/budgets/${l}`)},advanced:{scanReceipt:l=>D.post("/api/advanced/receipt-scan",l,{headers:{"Content-Type":"multipart/form-data"}}),createRecurring:l=>D.post("/api/advanced/recurring",l),getInsights:()=>D.get("/api/advanced/insights"),getAnalytics:(l="monthly")=>D.get(`/api/advanced/analytics?period=${l}`),categorizeTransactions:l=>D.post("/api/advanced/categorize",{transactions:l}),detectRecurring:()=>D.get("/api/advanced/detect-recurring")},auth:{login:l=>D.post("/api/auth/login",l),register:l=>D.post("/api/auth/register",l),logout:()=>D.post("/api/auth/logout"),refreshToken:()=>D.post("/api/auth/refresh"),forgotPassword:l=>D.post("/api/auth/forgot-password",{email:l}),resetPassword:l=>D.post("/api/auth/reset-password",l)},payments:{createOrder:l=>D.post("/api/payments/create-order",l),verifyPayment:l=>D.post("/api/payments/verify",l),getPaymentHistory:()=>D.get("/api/payments/history")},customCall:async(l,d={})=>{try{return(await D(l,d)).data}catch(p){throw p}},baseURL:yt};return console.log("%c🔧 API Configuration","background: #3b82f6; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;"),console.log(`Frontend URL: ${window.location.origin}`),console.log(`Backend API URL: ${yt}`),e.jsx(Es.Provider,{value:c,children:t})},Oa=y.createContext(),rt=()=>{const t=y.useContext(Oa);if(!t)throw new Error("useTransactions must be used within a TransactionsProvider");return t},Cs=({children:t})=>{const[a,r]=y.useState([]),[n,s]=y.useState(!0),o=[{id:1,type:"income",amount:85e3,description:"Salary Credit",date:"2025-09-16",category:"Salary",paymentMethod:"bank_transfer",status:"completed"},{id:2,type:"expense",amount:2500,description:"Grocery Shopping",date:"2025-09-15",category:"Food & Dining",paymentMethod:"credit_card",status:"completed"},{id:3,type:"expense",amount:15e3,description:"Rent Payment",date:"2025-09-01",category:"Bills & Utilities",paymentMethod:"bank_transfer",status:"completed"},{id:4,type:"income",amount:12e3,description:"Freelance Project",date:"2025-09-10",category:"Freelance",paymentMethod:"bank_transfer",status:"completed"},{id:5,type:"expense",amount:800,description:"Movie Night",date:"2025-09-12",category:"Entertainment",paymentMethod:"credit_card",status:"completed"},{id:6,type:"expense",amount:450,description:"Gas Station",date:"2025-09-14",category:"Transportation",paymentMethod:"debit_card",status:"completed"},{id:7,type:"income",amount:3500,description:"Investment Dividend",date:"2025-09-05",category:"Investment",paymentMethod:"bank_transfer",status:"completed"},{id:8,type:"expense",amount:1200,description:"Online Shopping",date:"2025-09-13",category:"Shopping",paymentMethod:"credit_card",status:"completed"}];y.useEffect(()=>{(async()=>{try{s(!0),await new Promise(u=>setTimeout(u,1e3)),r(o)}catch(u){console.error("Error loading transactions:",u)}finally{s(!1)}})()},[]);const E={transactions:a,loading:n,addTransaction:S=>{const u={id:Date.now(),...S,amount:parseFloat(S.amount),paymentMethod:"manual",status:"completed"};return r(x=>[u,...x]),u},updateTransaction:(S,u)=>{r(x=>x.map(g=>g.id===S?{...g,...u}:g))},deleteTransaction:S=>{r(u=>u.filter(x=>x.id!==S))},getTransactionsByType:S=>a.filter(u=>u.type===S),getTransactionsByDateRange:(S,u)=>a.filter(x=>{const g=new Date(x.date);return g>=new Date(S)&&g<=new Date(u)}),getTotals:()=>{const S=a.filter(x=>x.type==="income").reduce((x,g)=>x+g.amount,0),u=a.filter(x=>x.type==="expense").reduce((x,g)=>x+g.amount,0);return{income:S,expenses:u,balance:S-u}}};return e.jsx(Oa.Provider,{value:E,children:t})},Da=y.createContext(),nt=()=>{const t=y.useContext(Da);if(!t)throw new Error("useAI must be used within an AIProvider");return t},Rs=({children:t})=>{const{transactions:a,getTotals:r}=rt(),[n,s]=y.useState({spendingPatterns:[],savingsOpportunities:[],budgetRecommendations:[],anomalies:[],predictions:{},trends:{}}),[o,i]=y.useState([]),[c,l]=y.useState(!1),d=()=>{if(!a.length)return[];const v={},A={},k={};return a.forEach(z=>{if(z.type==="expense"){const M=z.category,C=new Date(z.date).toISOString().slice(0,7),m=new Date(z.date).getDay();v[M]=(v[M]||0)+z.amount,A[C]=(A[C]||0)+z.amount,k[m]=(k[m]||0)+z.amount}}),{categorySpending:v,monthlySpending:A,dailySpending:k,topCategories:Object.entries(v).sort(([,z],[,M])=>M-z).slice(0,5),averageDaily:Object.values(k).reduce((z,M)=>z+M,0)/7,averageMonthly:Object.values(A).reduce((z,M)=>z+M,0)/Object.keys(A).length||0}},p=()=>{if(!a.length)return[];const v=[],A=d(),k=A.averageDaily;return a.forEach(z=>{z.type==="expense"&&z.amount>k*3&&v.push({type:"high_spending",transaction:z,message:`Unusually high expense: ₹${z.amount} on ${z.category}`,severity:"high",date:z.date})}),Object.entries(A.categorySpending).forEach(([z,M])=>{const C=a.filter(N=>N.category===z&&N.type==="expense"),m=M/C.length;C.forEach(N=>{N.amount>m*2.5&&v.push({type:"category_spike",transaction:N,message:`High spending in ${z}: ₹${N.amount}`,severity:"medium",date:N.date})})}),v.sort((z,M)=>new Date(M.date)-new Date(z.date))},f=()=>{const v=d(),A=[];["entertainment","utilities","subscriptions"].forEach(C=>{const m=v.categorySpending[C]||0;m>2e3&&A.push({type:"subscription_optimization",category:C,message:`Review ${C} subscriptions - potential savings of ₹${Math.floor(m*.2)}`,potentialSaving:Math.floor(m*.2),priority:"high"})});const z=v.categorySpending.food||0;z>5e3&&A.push({type:"food_optimization",category:"food",message:`Consider meal planning - potential monthly savings of ₹${Math.floor(z*.15)}`,potentialSaving:Math.floor(z*.15),priority:"medium"});const M=v.categorySpending.transport||0;return M>3e3&&A.push({type:"transport_optimization",category:"transport",message:`Explore carpooling or public transport - save up to ₹${Math.floor(M*.25)}`,potentialSaving:Math.floor(M*.25),priority:"medium"}),A.sort((C,m)=>m.potentialSaving-C.potentialSaving)},E=()=>{const v=d(),A=Object.values(v.categorySpending).reduce((M,C)=>M+C,0),k=[],z=a.filter(M=>M.type==="income").reduce((M,C)=>M+C.amount,0);if(z>0){const M=z*.5,C=z*.3,m=z*.2;k.push({type:"50_30_20_rule",title:"Budget Allocation Recommendation",needs:M,wants:C,savings:m,currentSpending:A,message:A>M+C?`You're overspending by ₹${A-(M+C)}`:"Good job! You're within the recommended spending limits"})}return Object.entries(v.categorySpending).forEach(([M,C])=>{const m=C/A*100;let N;switch(M){case"food":N=15;break;case"transport":N=10;break;case"entertainment":N=5;break;case"shopping":N=10;break;default:N=8}m>N*1.5&&k.push({type:"category_budget",category:M,currentSpending:C,currentPercentage:m,recommendedPercentage:N,message:`Consider reducing ${M} spending by ${Math.floor(m-N)}%`})}),k},S=()=>{if(a.length<10)return{};const v=d(),A={},k=Object.values(v.monthlySpending);if(k.length>=2){const z=k[k.length-1]-k[k.length-2];A.nextMonth=Math.max(0,k[k.length-1]+z)}return Object.entries(v.categorySpending).forEach(([z,M])=>{const C=a.filter(N=>N.category===z),m=M/Math.max(1,new Set(C.map(N=>N.date.slice(0,7))).size);A[z]=m}),A},u=()=>{const v=d(),A=p(),k=f(),z=[];if(v.averageDaily>0){const C=new Date().toISOString().slice(0,10),m=a.filter(N=>N.date===C&&N.type==="expense").reduce((N,I)=>N+I.amount,0);m>v.averageDaily*2&&z.push({id:`high-spending-${Date.now()}`,type:"warning",title:"High Spending Alert",message:`You've spent ₹${m} today, which is ${Math.floor(m/v.averageDaily*100)}% above your daily average`,action:"Review expenses",priority:"high",timestamp:new Date})}return k.slice(0,2).forEach(C=>{z.push({id:`savings-${C.type}-${Date.now()}`,type:"success",title:"Savings Opportunity",message:C.message,action:"Optimize spending",priority:C.priority,timestamp:new Date})}),A.filter(C=>{const m=new Date(C.date),N=new Date;return N.setDate(N.getDate()-3),m>N}).slice(0,1).forEach(C=>{z.push({id:`anomaly-${C.type}-${Date.now()}`,type:"warning",title:"Unusual Activity",message:C.message,action:"Review transaction",priority:C.severity,timestamp:new Date})}),z},x=async()=>{if(a.length!==0){l(!0);try{await new Promise(m=>setTimeout(m,1500));const v=d(),A=p(),k=f(),z=E(),M=S();s({spendingPatterns:v,savingsOpportunities:k,budgetRecommendations:z,anomalies:A,predictions:M,trends:{isSpendingIncreasing:v.monthlySpending?Object.values(v.monthlySpending).slice(-2).reduce((m,N,I,L)=>I===1?N>L[0]:m,!1):!1,topSpendingDay:v.dailySpending?Object.entries(v.dailySpending).reduce((m,[N,I])=>I>m.amount?{day:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][N],amount:I}:m,{day:"Unknown",amount:0}):{day:"Unknown",amount:0}}});const C=u();i(m=>[...C,...m].slice(0,10)),k.length>0&&O.success(`AI Analysis Complete! Found ${k.length} savings opportunities.`,{duration:4e3,icon:"🤖"})}catch(v){console.error("AI Analysis Error:",v),O.error("AI analysis failed. Please try again.")}finally{l(!1)}}},g=(v,A)=>{const k=v.toLowerCase();return k.includes("uber")||k.includes("ola")||k.includes("petrol")||k.includes("fuel")||k.includes("metro")?"transport":k.includes("swiggy")||k.includes("zomato")||k.includes("restaurant")||k.includes("food")||k.includes("cafe")?"food":k.includes("netflix")||k.includes("spotify")||k.includes("amazon prime")||k.includes("subscription")?"entertainment":k.includes("electricity")||k.includes("water")||k.includes("gas")||k.includes("internet")||k.includes("mobile")?"utilities":k.includes("amazon")||k.includes("flipkart")||k.includes("shopping")||k.includes("mall")?"shopping":k.includes("medical")||k.includes("doctor")||k.includes("pharmacy")||k.includes("hospital")?"health":k.includes("salary")||k.includes("freelance")||k.includes("bonus")?"salary":A>1e4?"major_expense":"other"},w=v=>{i(A=>A.filter(k=>k.id!==v))},b=(v,A,k)=>{const z=(v-A)/k,C=d().averageMonthly||0;return{monthlyRequired:z,isAchievable:z<C*.3,suggestions:[`Save ₹${z.toFixed(0)} monthly to reach your goal`,"Consider reducing entertainment spending by 20%","Look for better deals on subscriptions","Set up automatic transfers to savings account"]}};y.useEffect(()=>{if(a.length>0){const v=setTimeout(()=>{x()},2e3);return()=>clearTimeout(v)}},[a]);const T={aiInsights:n,notifications:o,isAnalyzing:c,runAIAnalysis:x,autoCategorizTransaction:g,dismissNotification:w,getAIRecommendationForGoal:b,analyzeSpendingPatterns:d,detectAnomalies:p,generateSavingsOpportunities:f};return e.jsx(Da.Provider,{value:T,children:t})};var Ms={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Ps=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),R=(t,a)=>{const r=y.forwardRef(({color:n="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:i,children:c,...l},d)=>y.createElement("svg",{ref:d,...Ms,width:s,height:s,stroke:n,strokeWidth:i?Number(o)*24/Number(s):o,className:`lucide lucide-${Ps(t)}`,...l},[...a.map(([p,f])=>y.createElement(p,f)),...(Array.isArray(c)?c:[c])||[]]));return r.displayName=`${t}`,r},pe=R("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),qe=R("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]),Os=R("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]),le=R("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]),Ds=R("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]),st=R("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),Ye=R("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]),Be=R("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),Ia=R("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]),Tt=R("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),Is=R("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]),Ce=R("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]),Fa=R("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["polyline",{points:"22 4 12 14.01 9 11.01",key:"6xbx8j"}]]),Fs=R("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Re=R("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]),je=R("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]),Ls=R("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),se=R("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]),vt=R("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),La=R("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),$a=R("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Ba=R("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]),$s=R("Fingerprint",[["path",{d:"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",key:"1jc9o5"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",key:"1mxgy1"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",key:"1fgabc"}]]),Me=R("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),ve=R("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]),Bs=R("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),Us=R("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]),Ua=R("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),jt=R("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),Hs=R("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),_s=R("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),qs=R("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]),Ys=R("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Vs=R("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]),Ws=R("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),Js=R("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",key:"1xcu5"}],["circle",{cx:"17.5",cy:"10.5",r:".5",key:"736e4u"}],["circle",{cx:"8.5",cy:"7.5",r:".5",key:"clrty"}],["circle",{cx:"6.5",cy:"12.5",r:".5",key:"1s4xz9"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]),Ha=R("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]),_a=R("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]),me=R("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),de=R("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]),qa=R("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),Gs=R("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),Ks=R("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Xs=R("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),Pe=R("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]),Zs=R("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),Qs=R("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),ei=R("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]),Q=R("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),Ve=R("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),Ya=R("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]),ge=R("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),ti=R("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]),Kt=R("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),Ct=R("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),ai=R("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]),it=R("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Oe=R("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),ri=({isOpen:t,onToggle:a})=>{var u;const r=Xt(),n=we(),{logout:s,user:o}=Ke(),[i,c]=y.useState(!1),[l,d]=y.useState(!1);y.useEffect(()=>{const x=()=>{c(window.innerWidth<=768),d(window.innerWidth<=1024&&window.innerWidth>768)};return x(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]),y.useEffect(()=>{if(i&&t){const x=g=>{!g.target.closest(".sidebar")&&!g.target.closest(".menu-toggle")&&a()};return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)}},[i,t,a]);const p=[{path:"/",icon:ve,label:"Dashboard",color:"#3b82f6"},{path:"/transactions",icon:je,label:"Transactions",color:"#10b981"},{path:"/budgets",icon:Q,label:"Budgets",color:"#f59e0b"},{path:"/analytics",icon:st,label:"Analytics",color:"#8b5cf6"}],f=async()=>{try{const x=O.loading("Logging out...");await s(),O.dismiss(x),O.success("Logged out successfully!"),i&&t&&a(),n("/login")}catch(x){console.error("Logout failed:",x),O.error("Failed to logout. Please try again.")}},E={open:{width:i?"100%":l?260:280,x:0,transition:{duration:.3,ease:"easeInOut"}},closed:{width:i?"100%":l?70:80,x:i?"-100%":0,transition:{duration:.3,ease:"easeInOut"}}},S={open:{opacity:1,x:0,transition:{duration:.2}},closed:{opacity:0,x:-20,transition:{duration:.2}}};return e.jsxs(e.Fragment,{children:[e.jsx(H,{children:i&&t&&e.jsx(j.div,{className:"sidebar-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:a})}),e.jsxs(j.aside,{className:`sidebar ${i?"mobile":""} ${l?"tablet":""}`,variants:E,animate:t?"open":"closed",initial:!1,children:[e.jsxs("div",{className:"sidebar-content",children:[i&&e.jsx("div",{className:"mobile-header",children:e.jsx(j.button,{className:"close-btn",onClick:a,whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsx(it,{size:20})})}),e.jsx("div",{className:"sidebar-header",children:e.jsxs(j.div,{className:"logo",whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx("div",{className:"logo-icon",children:e.jsx(ai,{size:i?28:24})}),e.jsx(H,{children:(t||i)&&e.jsx(j.span,{className:"logo-text",variants:S,initial:"closed",animate:"open",exit:"closed",children:"FinanceAI"})})]})}),e.jsx("nav",{className:"sidebar-nav",children:e.jsx("ul",{className:"nav-list",children:p.map((x,g)=>{const w=x.icon,b=r.pathname===x.path;return e.jsx(j.li,{className:"nav-item",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:g*.1},children:e.jsxs(Ga,{to:x.path,className:`nav-link ${b?"active":""}`,style:{"--accent-color":x.color},children:[e.jsx(j.div,{className:"nav-icon",whileHover:{scale:1.1},whileTap:{scale:.9},children:e.jsx(w,{size:20})}),e.jsx(H,{children:(t||i)&&e.jsx(j.span,{className:"nav-text",variants:S,initial:"closed",animate:"open",exit:"closed",children:x.label})}),b&&e.jsx(j.div,{className:"active-indicator",layoutId:"activeIndicator",initial:{opacity:0},animate:{opacity:1},transition:{type:"spring",stiffness:380,damping:30}})]})},x.path)})})}),e.jsx("div",{className:"sidebar-footer",children:e.jsxs("div",{className:"user-section",children:[e.jsxs(j.div,{className:"user-avatar",whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx("div",{className:"avatar-circle",children:o!=null&&o.avatar?e.jsx("img",{src:o.avatar,alt:o.name}):e.jsx("span",{children:((u=o==null?void 0:o.name)==null?void 0:u.charAt(0))||"G"})}),e.jsx(H,{children:(t||i)&&e.jsxs(j.div,{className:"user-info",variants:S,initial:"closed",animate:"open",exit:"closed",children:[e.jsx("div",{className:"user-name",children:(o==null?void 0:o.name)||"Guest User"}),e.jsx("div",{className:"user-email",children:(o==null?void 0:o.email)||"guest@financeai.com"})]})})]}),e.jsxs(j.button,{className:"logout-btn",onClick:f,whileHover:{scale:1.05},whileTap:{scale:.95},title:"Logout",children:[e.jsx(Hs,{size:18}),e.jsx(H,{children:(t||i)&&e.jsx(j.span,{variants:S,initial:"closed",animate:"open",exit:"closed",children:"Logout"})})]})]})})]}),e.jsx("style",{jsx:!0,children:`
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
      `})]})]})},ni=({onMenuToggle:t,onChatbotToggle:a,isChatbotOpen:r})=>{var A;const[n,s]=y.useState(!1),[o,i]=y.useState(!1),[c,l]=y.useState({type:"expense",amount:"",description:"",category:"",date:new Date().toISOString().split("T")[0]}),{theme:d,toggleTheme:p}=Yr(),{user:f}=Ke(),{addTransaction:E}=rt(),{autoCategorizTransaction:S}=nt(),u=we(),x=[{id:1,title:"Budget Alert",message:"You have exceeded 80% of your food budget",type:"warning",time:"5m ago"},{id:2,title:"New Transaction",message:"Payment received: ₹2,500",type:"success",time:"10m ago"},{id:3,title:"Goal Achievement",message:"Congratulations! You reached your savings goal",type:"success",time:"1h ago"}],g=()=>{i(!0)},w=()=>{u("/settings")},b=()=>{i(!1),l({type:"expense",amount:"",description:"",category:"",date:new Date().toISOString().split("T")[0]})},T=k=>{const{name:z,value:M}=k.target;l(C=>({...C,[z]:M}))},v=k=>{if(k.preventDefault(),!c.amount||!c.description){O.error("Please fill in amount and description");return}try{let z=c.category;(!z||z==="")&&(z=S(c.description,c.amount),O.info(`AI categorized as: ${z}`,{icon:"🤖"}));const M={...c,category:z},C=E(M);O.success(`${c.type==="expense"?"Expense":"Income"} added successfully!`),b()}catch(z){console.error("Error adding transaction:",z),O.error("Failed to add transaction. Please try again.")}};return e.jsxs(j.header,{className:"header",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},children:[e.jsxs("div",{className:"header-content",children:[e.jsxs("div",{className:"header-left",children:[e.jsx(j.button,{className:"menu-toggle",onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsx(Ys,{size:20})}),e.jsxs("div",{className:"header-title",children:[e.jsxs("h1",{children:["Welcome back, ",((A=f==null?void 0:f.name)==null?void 0:A.split(" ")[0])||"Guest","!"]}),e.jsx("p",{className:"header-subtitle",children:"Here's what's happening with your finances today"})]})]}),e.jsxs("div",{className:"header-right",children:[e.jsxs(j.button,{className:"quick-add-btn",onClick:g,whileHover:{scale:1.05},whileTap:{scale:.95},title:"Quick Add Transaction",children:[e.jsx(me,{size:18}),e.jsx("span",{children:"Add"})]}),e.jsx(j.button,{className:"theme-toggle",onClick:p,whileHover:{scale:1.05},whileTap:{scale:.95},title:`Switch to ${d==="light"?"dark":"light"} mode`,children:e.jsx(H,{mode:"wait",children:d==="light"?e.jsx(j.div,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.2},children:e.jsx(Ws,{size:18})},"moon"):e.jsx(j.div,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.2},children:e.jsx(Qs,{size:18})},"sun")})}),e.jsxs("div",{className:"notifications-container",children:[e.jsxs(j.button,{className:"notification-btn",onClick:()=>s(!n),whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx(Ye,{size:18}),x.length>0&&e.jsx(j.span,{className:"notification-badge",initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:500,damping:30},children:x.length})]}),e.jsx(H,{children:n&&e.jsxs(j.div,{className:"notifications-dropdown",initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.2},children:[e.jsxs("div",{className:"dropdown-header",children:[e.jsx("h3",{children:"Notifications"}),e.jsx("button",{className:"mark-all-read",children:"Mark all read"})]}),e.jsx("div",{className:"notifications-list",children:x.map((k,z)=>e.jsx(j.div,{className:`notification-item ${k.type}`,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:z*.1},children:e.jsxs("div",{className:"notification-content",children:[e.jsx("h4",{children:k.title}),e.jsx("p",{children:k.message}),e.jsx("span",{className:"notification-time",children:k.time})]})},k.id))}),e.jsx("div",{className:"dropdown-footer",children:e.jsx("button",{className:"view-all-btn",children:"View all notifications"})})]})})]}),e.jsxs(j.button,{className:`ai-chatbot-btn ${r?"active":""}`,onClick:a,whileHover:{scale:1.05},whileTap:{scale:.95},title:"AI Financial Assistant",children:[e.jsx(Be,{size:18}),e.jsx("span",{children:"AI Assistant"})]}),e.jsx(j.button,{className:"settings-btn",onClick:w,whileHover:{scale:1.05},whileTap:{scale:.95},title:"Settings",children:e.jsx(Ks,{size:18})})]})]}),e.jsx(H,{children:o&&e.jsxs(e.Fragment,{children:[e.jsx(j.div,{className:"modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:b}),e.jsxs(j.div,{className:"add-modal",initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{duration:.2},children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h2",{children:"Add Transaction"}),e.jsx("button",{className:"modal-close",onClick:b,children:e.jsx(it,{size:20})})]}),e.jsxs("form",{onSubmit:v,className:"modal-form",children:[e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Type"}),e.jsxs("select",{name:"type",value:c.type,onChange:T,className:"form-select",children:[e.jsx("option",{value:"expense",children:"Expense"}),e.jsx("option",{value:"income",children:"Income"})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Amount *"}),e.jsxs("div",{className:"input-group",children:[e.jsx(se,{size:18,className:"input-icon"}),e.jsx("input",{type:"number",name:"amount",value:c.amount,onChange:T,placeholder:"0.00",className:"form-input",min:"0",step:"0.01",required:!0})]})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Description *"}),e.jsxs("div",{className:"input-group",children:[e.jsx(ti,{size:18,className:"input-icon"}),e.jsx("input",{type:"text",name:"description",value:c.description,onChange:T,placeholder:"Enter transaction description",className:"form-input",required:!0})]})]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Category *"}),e.jsxs("div",{className:"input-group",children:[e.jsx(ei,{size:18,className:"input-icon"}),e.jsxs("select",{name:"category",value:c.category,onChange:T,className:"form-select",required:!0,children:[e.jsx("option",{value:"",children:"Select category"}),c.type==="expense"?e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"Food & Dining",children:"Food & Dining"}),e.jsx("option",{value:"Transportation",children:"Transportation"}),e.jsx("option",{value:"Shopping",children:"Shopping"}),e.jsx("option",{value:"Entertainment",children:"Entertainment"}),e.jsx("option",{value:"Bills & Utilities",children:"Bills & Utilities"}),e.jsx("option",{value:"Healthcare",children:"Healthcare"}),e.jsx("option",{value:"Education",children:"Education"}),e.jsx("option",{value:"Other",children:"Other"})]}):e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"Salary",children:"Salary"}),e.jsx("option",{value:"Freelance",children:"Freelance"}),e.jsx("option",{value:"Investment",children:"Investment"}),e.jsx("option",{value:"Gift",children:"Gift"}),e.jsx("option",{value:"Other",children:"Other"})]})]})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Date"}),e.jsxs("div",{className:"input-group",children:[e.jsx(Tt,{size:18,className:"input-icon"}),e.jsx("input",{type:"date",name:"date",value:c.date,onChange:T,className:"form-input"})]})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{type:"button",onClick:b,className:"btn-secondary",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn-primary",children:"Add Transaction"})]})]})]})]})}),e.jsx("style",{jsx:!0,children:`
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
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          width: 320px;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-xl);
          backdrop-filter: blur(20px);
          overflow: hidden;
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
            right: -1rem;
          }
        }
      `})]})},Va=()=>e.jsxs("div",{className:"loading-screen",children:[e.jsxs("div",{className:"loading-container",children:[e.jsxs(j.div,{className:"loading-logo",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5},children:[e.jsx("div",{className:"logo-icon",children:e.jsx(j.div,{className:"logo-gradient",animate:{rotate:360},transition:{duration:2,repeat:1/0,ease:"linear"},children:"💰"})}),e.jsx("h1",{className:"logo-text",children:"FinanceAI"})]}),e.jsx(j.div,{className:"loading-progress",initial:{width:0},animate:{width:"100%"},transition:{duration:1.5,ease:"easeInOut"},children:e.jsx("div",{className:"progress-bar",children:e.jsx(j.div,{className:"progress-fill",initial:{width:"0%"},animate:{width:"100%"},transition:{duration:1.5,ease:"easeInOut"}})})}),e.jsx(j.p,{className:"loading-text",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5,duration:.5},children:"Initializing your financial dashboard..."})]}),e.jsx("style",{jsx:!0,children:`
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
      `})]}),si=({isOpen:t,onToggle:a})=>{const[r,n]=y.useState(!1),[s,o]=y.useState([{id:1,type:"bot",message:"Hi! I'm your AI financial advisor. I can help you with investments, savings tips, and budget planning. Try asking me about saving for a specific item or investment advice!",timestamp:new Date().toLocaleTimeString()}]),[i,c]=y.useState(""),[l,d]=y.useState(!1),p=y.useRef(null),{transactions:f,getTotals:E}=rt(),{aiInsights:S,getAIRecommendationForGoal:u}=nt(),x=()=>{var v;(v=p.current)==null||v.scrollIntoView({behavior:"smooth"})};y.useEffect(()=>{x()},[s]);const g=v=>{var q,xe,V,be;const A=v.toLowerCase(),k=E(),z=S,M=z.spendingPatterns||{},C=z.savingsOpportunities||[],m=z.anomalies||[];z.predictions;const N=f.filter(F=>F.type==="income"&&new Date(F.date).getMonth()===new Date().getMonth()).reduce((F,$)=>F+$.amount,0),I=M.averageMonthly||0,L=N>0?((N-I)/N*100).toFixed(1):0;if(A.includes("invest")||A.includes("investment"))return L>20?`🤖 AI Analysis: Excellent investment potential detected!

💼 Your Financial Profile:
• Savings rate: ${L}% (Excellent!)
• Monthly surplus: ₹${N-I}
• Risk tolerance: Medium-High (based on spending patterns)

� AI Recommendations:
• Equity exposure: 70% (SIP in diversified funds)
• Debt allocation: 20% (PPF, ELSS for tax benefits)
• Emergency fund: 10% (liquid funds)
• Suggested monthly SIP: ₹${Math.round((N-I)*.6)}

🎯 Next Steps:
1. Start with index funds (Nifty 50, Sensex)
2. Consider tax-saving ELSS funds
3. Set up automated SIPs
4. Review portfolio quarterly

⚠️ AI Alert: Based on your spending on ${((xe=(q=M.topCategories)==null?void 0:q[0])==null?void 0:xe[0])||"entertainment"}, ensure 6-month emergency fund first!`:`🤖 AI Analysis: Investment readiness requires improvement.

📊 Current Status:
• Savings rate: ${L}% (Target: 20%+)
• Top spending: ${((V=M.topCategories)==null?void 0:V.map(([F,$])=>`${F} (₹${$})`).join(", "))||"Various categories"}

💡 AI Savings Opportunities:
${C.slice(0,3).map(F=>`• ${F.message}`).join(`
`)||"• Track expenses for better insights"}

🎯 3-Month Action Plan:
1. Month 1: Track all expenses, identify leaks
2. Month 2: Implement top 2 savings opportunities  
3. Month 3: Build emergency fund, then invest

🚀 Quick Wins: Start with ₹${Math.max(1e3,Math.round(N*.05))} monthly savings!`;if(A.includes("save")||A.includes("saving")){const F=C.slice(0,3);return`🤖 AI-Powered Savings Analysis:

💰 Current Financial Health:
• Savings rate: ${L}% (${L>20?"Excellent!":L>10?"Good, can improve":"Needs attention"})
• Monthly income: ₹${N.toLocaleString()}
• Monthly expenses: ₹${I.toFixed(0)}
• Potential monthly savings: ₹${(N-I).toFixed(0)}

🎯 AI-Identified Opportunities:
${F.length>0?F.map($=>`• ${$.message} (Save ₹${$.potentialSaving})`).join(`
`):"• Build consistent tracking for better insights"}

📊 Spending Breakdown:
${((be=M.topCategories)==null?void 0:be.map(([$,te],W)=>`${W+1}. ${$}: ₹${te.toLocaleString()}`).join(`
`))||"Add more transactions for analysis"}

⚡ Quick Actions:
• Set up ₹${Math.round(N*.15)} auto-transfer to savings
• Review and cancel unused subscriptions  
• Use 50/30/20 rule: Needs/Wants/Savings
${m.length>0?`• Check recent unusual expense: ${m[0].message}`:""}`}if(A.includes("ipad")||A.includes("buy")||A.includes("purchase")){const F=A.includes("ipad")?800:500,$=Math.max(0,N-I),te=$>0?Math.ceil(F/$):1/0;if($>0){const W=te<=3?`Go for it! You're saving well and can afford this purchase.

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

Would you like help creating a savings plan for this purchase?`;return`💻 iPad Purchase Plan ($${F}):

📊 Your Financial Position:
• Monthly savings available: $${$}
• Time needed: ${te} month${te!==1?"s":""}

${te<=3?"✅":"⚠️"} ${W}`}else return`🚨 Budget Alert: You're currently spending more than you earn!

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
💸 Monthly Expenses: $${I}
💾 Monthly Savings: $${N-I}
📈 Savings Rate: ${L}%

🎯 Ideal Budget (50/30/20 rule):
• Needs (50%): $${(N*.5).toFixed(2)}
• Wants (30%): $${(N*.3).toFixed(2)}
• Savings (20%): $${(N*.2).toFixed(2)}

${L>=20?"🎉 Great job! You're exceeding the savings target!":L>=10?"👍 Good progress, try to reach 20% savings rate":"🔄 Focus on increasing savings - every dollar counts!"}

Need help optimizing any specific category?`;if(A.includes("emergency")||A.includes("fund")){const F=I*6,$=k.totalIncome-k.totalExpenses;return`🚨 Emergency Fund Analysis:

🎯 Target: $${F.toFixed(2)} (6 months expenses)
💰 Current position: $${$>0?$.toFixed(2):"0"}
📅 Time to build: ${monthlySavings>0?Math.ceil(F/monthlySavings):"∞"} months

💡 Emergency fund strategy:
• Start with $1,000 mini-emergency fund
• Save in high-yield savings account
• Don't invest emergency funds
• Use only for true emergencies

${$>=F?"🎉 Congratulations! Your emergency fund is fully funded!":`Next step: Save $${(F-Math.max(0,$)).toFixed(2)} more`}`}return`I'm here to help with your finances! Ask me about:

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

What would you like to explore first?`},w=async()=>{if(!i.trim())return;const v={id:Date.now(),type:"user",message:i,timestamp:new Date().toLocaleTimeString()};o(k=>[...k,v]),c(""),d(!0),await new Promise(k=>setTimeout(k,1e3+Math.random()*1e3));const A={id:Date.now()+1,type:"bot",message:g(i),timestamp:new Date().toLocaleTimeString()};o(k=>[...k,A]),d(!1)},b=v=>{v.key==="Enter"&&!v.shiftKey&&(v.preventDefault(),w())},T={hidden:{opacity:0,scale:.8,y:20},visible:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:300,damping:30}},exit:{opacity:0,scale:.8,y:20,transition:{duration:.2}}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{jsx:!0,children:`
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
      `}),e.jsx("div",{className:"ai-chatbot-container",children:e.jsx(H,{children:t&&e.jsxs(j.div,{className:`ai-chatbot ${r?"minimized":""}`,variants:T,initial:"hidden",animate:"visible",exit:"exit",children:[e.jsxs("div",{className:"chat-header",onClick:r?()=>n(!1):void 0,children:[e.jsxs("div",{className:"chat-header-info",children:[e.jsx("div",{className:"bot-avatar",children:e.jsx(Be,{size:20})}),e.jsxs("div",{className:"bot-info",children:[e.jsx("h3",{children:"AI Financial Advisor"}),e.jsx("span",{className:"bot-status",children:r?"Click to expand":"Online"})]})]}),e.jsxs("div",{className:"chat-controls",children:[e.jsx("button",{className:"chat-control-btn minimize-btn",onClick:v=>{v.stopPropagation(),n(!r)},title:r?"Expand chat":"Minimize chat",children:r?e.jsx(qs,{size:16}):e.jsx(Vs,{size:16})}),e.jsx("button",{className:"chat-control-btn close-btn",onClick:v=>{v.stopPropagation(),a()},title:"Close chat",children:e.jsx(it,{size:16})})]})]}),!r&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"chat-messages",children:[s.map(v=>e.jsxs("div",{className:`message ${v.type}`,children:[e.jsx("div",{className:"message-avatar",children:v.type==="bot"?e.jsx(Be,{size:16}):e.jsx(Ct,{size:16})}),e.jsxs("div",{children:[e.jsx("div",{className:"message-content",children:v.message}),e.jsx("div",{className:"message-time",children:v.timestamp})]})]},v.id)),l&&e.jsxs("div",{className:"typing-indicator",children:[e.jsx("div",{className:"message-avatar",children:e.jsx(Be,{size:16})}),e.jsxs("div",{className:"typing-dots",children:[e.jsx("div",{className:"typing-dot"}),e.jsx("div",{className:"typing-dot"}),e.jsx("div",{className:"typing-dot"})]})]}),e.jsx("div",{ref:p})]}),e.jsx("div",{className:"chat-input",children:e.jsxs("div",{className:"input-container",children:[e.jsx("textarea",{className:"message-input",placeholder:"Ask me about investments, savings, or 'I want to buy an iPad'...",value:i,onChange:v=>c(v.target.value),onKeyPress:b,disabled:l,rows:1}),e.jsx("button",{className:"send-btn",onClick:w,disabled:!i.trim()||l,title:"Send message",children:e.jsx(Gs,{size:18})})]})})]})]})})})]})},ii=()=>{const{notifications:t,dismissNotification:a}=nt(),[r,n]=y.useState([]);y.useState(0),y.useEffect(()=>{t.length>0&&t.filter(d=>!r.find(p=>p.id===d.id)).forEach((d,p)=>{setTimeout(()=>{n(f=>[...f,d]),(d.priority==="low"||d.priority==="medium")&&setTimeout(()=>{a(d.id),n(f=>f.filter(E=>E.id!==d.id))},8e3)},p*2e3)})},[t]),y.useEffect(()=>{n(l=>l.filter(d=>t.find(p=>p.id===d.id)))},[t]);const s=l=>{switch(l){case"success":return e.jsx(Fa,{size:20});case"warning":return e.jsx(pe,{size:20});case"info":return e.jsx(Bs,{size:20});case"savings":return e.jsx(se,{size:20});case"goal":return e.jsx(Q,{size:20});case"insight":return e.jsx(Ua,{size:20});case"prediction":return e.jsx(ge,{size:20});default:return e.jsx(Ye,{size:20})}},o=(l,d)=>{const p={success:"from-green-500 to-emerald-500",warning:"from-yellow-500 to-orange-500",info:"from-blue-500 to-cyan-500",savings:"from-purple-500 to-pink-500",goal:"from-indigo-500 to-purple-500",insight:"from-amber-500 to-yellow-500",prediction:"from-teal-500 to-green-500"};return d==="high"?"from-red-500 to-pink-500":p[l]||"from-gray-500 to-slate-500"},i=l=>{switch(l.type){case"savings":O.success("Opening savings recommendations...",{icon:"💰"});break;case"warning":O.info("Opening expense analysis...",{icon:"📊"});break;case"goal":O.success("Opening goal tracking...",{icon:"🎯"});break;default:O.info("Action completed!",{icon:"✅"})}a(l.id),n(d=>d.filter(p=>p.id!==l.id))},c=l=>{a(l),n(d=>d.filter(p=>p.id!==l))};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"ai-notifications-container",children:e.jsx(H,{children:r.map((l,d)=>e.jsxs(j.div,{className:`ai-notification ${l.type} priority-${l.priority}`,initial:{opacity:0,x:400,scale:.8},animate:{opacity:1,x:0,scale:1,y:d*90},exit:{opacity:0,x:400,scale:.8,transition:{duration:.3}},transition:{type:"spring",stiffness:300,damping:30},layout:!0,children:[e.jsx("div",{className:`notification-gradient bg-gradient-to-r ${o(l.type,l.priority)}`}),e.jsxs("div",{className:"notification-content",children:[e.jsxs("div",{className:"notification-header",children:[e.jsx("div",{className:"notification-icon",children:s(l.type)}),e.jsxs("div",{className:"notification-meta",children:[e.jsx("h4",{className:"notification-title",children:l.title}),e.jsx("span",{className:"notification-time",children:new Date(l.timestamp).toLocaleTimeString()})]}),e.jsx("button",{className:"notification-close",onClick:()=>c(l.id),children:e.jsx(it,{size:16})})]}),e.jsx("p",{className:"notification-message",children:l.message}),l.action&&e.jsx("div",{className:"notification-actions",children:e.jsx("button",{className:"notification-action-btn",onClick:()=>i(l),children:l.action})})]}),l.priority==="high"&&e.jsx("div",{className:"priority-pulse"})]},l.id))})}),r.length>0&&e.jsxs(j.div,{className:"ai-insights-summary",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0,scale:0},children:[e.jsx("div",{className:"ai-summary-icon",children:e.jsx(Ia,{size:20})}),e.jsx("div",{className:"ai-summary-text",children:e.jsxs("span",{children:[r.length," AI insights"]})})]}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},oi=()=>{var S,u,x;const{aiInsights:t,isAnalyzing:a,runAIAnalysis:r}=nt(),[n,s]=y.useState(null),[o,i]=y.useState(!1),c=[{id:"spending_patterns",title:"Spending Analysis",icon:e.jsx(_a,{size:20}),color:"from-blue-500 to-cyan-500",data:t.spendingPatterns},{id:"savings_opportunities",title:"Savings Opportunities",icon:e.jsx(se,{size:20}),color:"from-green-500 to-emerald-500",data:t.savingsOpportunities},{id:"anomalies",title:"Unusual Activity",icon:e.jsx(pe,{size:20}),color:"from-red-500 to-orange-500",data:t.anomalies},{id:"predictions",title:"AI Predictions",icon:e.jsx(ge,{size:20}),color:"from-purple-500 to-pink-500",data:t.predictions}],l=({data:g})=>{var w,b,T;return e.jsxs("div",{className:"insight-detail",children:[e.jsx("h4",{children:"Spending Analysis"}),((w=g==null?void 0:g.topCategories)==null?void 0:w.length)>0?e.jsxs("div",{className:"spending-breakdown",children:[g.topCategories.map(([v,A],k)=>e.jsxs("div",{className:"category-item",children:[e.jsxs("div",{className:"category-info",children:[e.jsx("span",{className:"category-name",children:v}),e.jsxs("span",{className:"category-amount",children:["₹",A.toLocaleString()]})]}),e.jsx("div",{className:"category-bar",children:e.jsx("div",{className:"category-fill",style:{width:`${A/g.topCategories[0][1]*100}%`,background:`hsl(${k*60}, 70%, 60%)`}})})]},v)),e.jsxs("div",{className:"spending-summary",children:[e.jsxs("p",{children:["Average daily spending: ₹",((b=g.averageDaily)==null?void 0:b.toFixed(0))||0]}),e.jsxs("p",{children:["Average monthly spending: ₹",((T=g.averageMonthly)==null?void 0:T.toFixed(0))||0]})]})]}):e.jsx("p",{children:"Add more transactions to see spending patterns"})]})},d=({data:g})=>e.jsxs("div",{className:"insight-detail",children:[e.jsx("h4",{children:"AI-Powered Savings Suggestions"}),(g==null?void 0:g.length)>0?e.jsx("div",{className:"savings-list",children:g.map((w,b)=>e.jsxs(j.div,{className:`savings-item priority-${w.priority}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:b*.1},children:[e.jsx("div",{className:"savings-icon",children:e.jsx(Ua,{size:16})}),e.jsxs("div",{className:"savings-content",children:[e.jsx("p",{children:w.message}),e.jsxs("div",{className:"savings-amount",children:["Potential Savings: ₹",w.potentialSaving]})]})]},b))}):e.jsx("p",{children:"No specific savings opportunities identified yet"})]}),p=({data:g})=>e.jsxs("div",{className:"insight-detail",children:[e.jsx("h4",{children:"Unusual Transaction Activity"}),(g==null?void 0:g.length)>0?e.jsx("div",{className:"anomalies-list",children:g.slice(0,5).map((w,b)=>e.jsxs(j.div,{className:`anomaly-item severity-${w.severity}`,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:b*.1},children:[e.jsx("div",{className:"anomaly-icon",children:e.jsx(pe,{size:16})}),e.jsxs("div",{className:"anomaly-content",children:[e.jsx("p",{children:w.message}),e.jsx("span",{className:"anomaly-date",children:new Date(w.date).toLocaleDateString()})]})]},b))}):e.jsx("p",{children:"No unusual activity detected"})]}),f=({data:g})=>e.jsxs("div",{className:"insight-detail",children:[e.jsx("h4",{children:"AI Financial Predictions"}),g&&Object.keys(g).length>0?e.jsxs("div",{className:"predictions-grid",children:[g.nextMonth&&e.jsxs("div",{className:"prediction-card",children:[e.jsxs("div",{className:"prediction-header",children:[e.jsx(Tt,{size:16}),e.jsx("span",{children:"Next Month Forecast"})]}),e.jsxs("div",{className:"prediction-value",children:["₹",g.nextMonth.toFixed(0)]})]}),Object.entries(g).filter(([w])=>w!=="nextMonth").map(([w,b])=>e.jsxs("div",{className:"prediction-card",children:[e.jsxs("div",{className:"prediction-header",children:[e.jsx(st,{size:16}),e.jsx("span",{children:w})]}),e.jsxs("div",{className:"prediction-value",children:["₹",b.toFixed(0),"/mo"]})]},w))]}):e.jsx("p",{children:"Building prediction models from your transaction data..."})]}),E=g=>{switch(g.id){case"spending_patterns":return e.jsx(l,{data:g.data});case"savings_opportunities":return e.jsx(d,{data:g.data});case"anomalies":return e.jsx(p,{data:g.data});case"predictions":return e.jsx(f,{data:g.data});default:return e.jsx("div",{children:"Insight details not available"})}};return e.jsxs("div",{className:"ai-insights-dashboard",children:[e.jsxs("div",{className:"insights-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsxs("div",{className:"ai-badge",children:[e.jsx(Ia,{size:20}),e.jsx("span",{children:"AI Insights"}),a&&e.jsx("div",{className:"analyzing-pulse"})]}),e.jsx("h3",{children:"Financial Intelligence"})]}),e.jsxs("div",{className:"header-actions",children:[e.jsxs("button",{className:"refresh-btn",onClick:r,disabled:a,children:[e.jsx(de,{size:16,className:a?"spinning":""}),a?"Analyzing...":"Refresh"]}),e.jsx("button",{className:"expand-btn",onClick:()=>i(!o),children:o?e.jsx(La,{size:16}):e.jsx($a,{size:16})})]})]}),e.jsxs("div",{className:"ai-quick-stats",children:[e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(Zs,{size:16})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("span",{className:"stat-value",children:((S=t.savingsOpportunities)==null?void 0:S.length)||0}),e.jsx("span",{className:"stat-label",children:"Opportunities"})]})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(pe,{size:16})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("span",{className:"stat-value",children:((u=t.anomalies)==null?void 0:u.length)||0}),e.jsx("span",{className:"stat-label",children:"Alerts"})]})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(ge,{size:16})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("span",{className:"stat-value",children:(x=t.trends)!=null&&x.isSpendingIncreasing?"↗":"↘"}),e.jsx("span",{className:"stat-label",children:"Trend"})]})]})]}),e.jsx("div",{className:"insights-grid",children:c.map((g,w)=>{var b;return e.jsxs(j.div,{className:`insight-card ${(n==null?void 0:n.id)===g.id?"selected":""}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:w*.1},onClick:()=>s((n==null?void 0:n.id)===g.id?null:g),children:[e.jsx("div",{className:`card-gradient bg-gradient-to-r ${g.color}`}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"card-icon",children:g.icon}),e.jsx("h4",{children:g.title})]}),e.jsxs("div",{className:"card-preview",children:[g.id==="spending_patterns"&&((b=g.data)==null?void 0:b.topCategories)&&e.jsxs("span",{children:[g.data.topCategories.length," categories analyzed"]}),g.id==="savings_opportunities"&&g.data&&e.jsxs("span",{children:[g.data.length," opportunities found"]}),g.id==="anomalies"&&g.data&&e.jsxs("span",{children:[g.data.length," alerts detected"]}),g.id==="predictions"&&g.data&&e.jsxs("span",{children:[Object.keys(g.data).length," predictions available"]})]})]})]},g.id)})}),e.jsx(H,{children:n&&e.jsx(j.div,{className:"insight-detail-panel",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:E(n)})}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},ci=()=>{const t=we(),[a,r]=y.useState({totalBalance:125e3,monthlyIncome:85e3,monthlyExpenses:45e3,savingsRate:47}),[n,s]=y.useState([{id:1,type:"income",amount:85e3,description:"Salary Credit",date:"2025-09-16",category:"Income"},{id:2,type:"expense",amount:2500,description:"Grocery Shopping",date:"2025-09-15",category:"Food"},{id:3,type:"expense",amount:1200,description:"Fuel",date:"2025-09-14",category:"Transportation"},{id:4,type:"income",amount:5e3,description:"Freelance Project",date:"2025-09-13",category:"Income"}]),[o,i]=y.useState([{category:"Food",spent:12500,budget:15e3,color:"#10b981"},{category:"Transportation",spent:8e3,budget:1e4,color:"#3b82f6"},{category:"Entertainment",spent:4500,budget:5e3,color:"#f59e0b"},{category:"Shopping",spent:6e3,budget:8e3,color:"#8b5cf6"}]),c={hidden:{opacity:0},visible:{opacity:1,transition:{delayChildren:.1,staggerChildren:.1}}},l={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:100}}},d=()=>{O.success("Navigating to Transactions page..."),t("/transactions")},p=()=>{O.success("Navigating to Budget Management..."),t("/budgets")},f=u=>{O.success("Opening transaction details..."),t("/transactions",{state:{highlightTransaction:u}})},E=(u,x)=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),f(x))},S=()=>{O.success("Opening quick add transaction..."),t("/transactions?action=add")};return e.jsxs(j.div,{className:"dashboard",variants:c,initial:"hidden",animate:"visible",children:[e.jsxs("div",{className:"stats-grid",children:[e.jsxs(j.div,{className:"stat-card income",variants:l,children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(ge,{size:24})}),e.jsxs("div",{className:"stat-trend positive",children:[e.jsx(le,{size:16}),"+12.5%"]})]}),e.jsxs("div",{className:"stat-content",children:[e.jsx("h3",{children:"Total Balance"}),e.jsxs("p",{className:"stat-value",children:["₹",a.totalBalance.toLocaleString()]}),e.jsx("span",{className:"stat-label",children:"Available balance"})]})]}),e.jsxs(j.div,{className:"stat-card income",variants:l,children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(se,{size:24})}),e.jsxs("div",{className:"stat-trend positive",children:[e.jsx(le,{size:16}),"+8.2%"]})]}),e.jsxs("div",{className:"stat-content",children:[e.jsx("h3",{children:"Monthly Income"}),e.jsxs("p",{className:"stat-value",children:["₹",a.monthlyIncome.toLocaleString()]}),e.jsx("span",{className:"stat-label",children:"This month"})]})]}),e.jsxs(j.div,{className:"stat-card expense",variants:l,children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(je,{size:24})}),e.jsxs("div",{className:"stat-trend negative",children:[e.jsx(qe,{size:16}),"+5.1%"]})]}),e.jsxs("div",{className:"stat-content",children:[e.jsx("h3",{children:"Monthly Expenses"}),e.jsxs("p",{className:"stat-value",children:["₹",a.monthlyExpenses.toLocaleString()]}),e.jsx("span",{className:"stat-label",children:"This month"})]})]}),e.jsxs(j.div,{className:"stat-card savings",variants:l,children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(Q,{size:24})}),e.jsxs("div",{className:"stat-trend positive",children:[e.jsx(le,{size:16}),"+2.3%"]})]}),e.jsxs("div",{className:"stat-content",children:[e.jsx("h3",{children:"Savings Rate"}),e.jsxs("p",{className:"stat-value",children:[a.savingsRate,"%"]}),e.jsx("span",{className:"stat-label",children:"Of total income"})]})]})]}),e.jsx(oi,{}),e.jsxs("div",{className:"dashboard-content",children:[e.jsxs(j.div,{className:"card transactions-card",variants:l,children:[e.jsxs("div",{className:"card-header",children:[e.jsx("h2",{children:"Recent Transactions"}),e.jsx(j.button,{className:"btn btn-secondary",onClick:d,whileHover:{scale:1.05},whileTap:{scale:.95},children:"View All"})]}),e.jsx("div",{className:"card-body",children:e.jsx("div",{className:"transactions-list",children:n.map((u,x)=>e.jsxs(j.div,{className:"transaction-item clickable",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:x*.1},onClick:()=>f(u.id),onKeyDown:g=>E(g,u.id),tabIndex:0,role:"button","aria-label":`View details for ${u.description} transaction`,whileHover:{scale:1.02,backgroundColor:"var(--bg-tertiary)"},whileTap:{scale:.98},children:[e.jsx("div",{className:"transaction-icon",children:u.type==="income"?e.jsx(le,{size:20,className:"income-icon"}):e.jsx(qe,{size:20,className:"expense-icon"})}),e.jsxs("div",{className:"transaction-details",children:[e.jsx("h4",{children:u.description}),e.jsxs("p",{children:[u.category," • ",u.date]})]}),e.jsxs("div",{className:`transaction-amount ${u.type}`,children:[u.type==="income"?"+":"-","₹",u.amount.toLocaleString()]})]},u.id))})})]}),e.jsxs(j.div,{className:"card budget-card",variants:l,children:[e.jsxs("div",{className:"card-header",children:[e.jsx("h2",{children:"Budget Overview"}),e.jsx(j.button,{className:"btn btn-secondary",onClick:p,whileHover:{scale:1.05},whileTap:{scale:.95},children:"Manage"})]}),e.jsx("div",{className:"card-body",children:e.jsx("div",{className:"budget-list",children:o.map((u,x)=>{const g=u.spent/u.budget*100;return e.jsxs(j.div,{className:"budget-item",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:x*.1},children:[e.jsxs("div",{className:"budget-header",children:[e.jsx("span",{className:"budget-category",children:u.category}),e.jsxs("span",{className:"budget-amount",children:["₹",u.spent.toLocaleString()," / ₹",u.budget.toLocaleString()]})]}),e.jsxs("div",{className:"budget-progress",children:[e.jsx("div",{className:"progress-bar",children:e.jsx(j.div,{className:"progress-fill",style:{backgroundColor:u.color,width:`${Math.min(g,100)}%`},initial:{width:0},animate:{width:`${Math.min(g,100)}%`},transition:{duration:1,delay:x*.2}})}),e.jsxs("span",{className:`budget-percentage ${g>90?"warning":""}`,children:[g.toFixed(0),"%"]})]})]},u.category)})})})]})]}),e.jsx(j.button,{className:"fab",onClick:S,whileHover:{scale:1.1},whileTap:{scale:.9},initial:{scale:0},animate:{scale:1},transition:{delay:.5,type:"spring",stiffness:500,damping:30},title:"Quick Add Transaction",children:e.jsx(me,{size:24})}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},li=()=>{const t=Xt();we();const{transactions:a,loading:r,updateTransaction:n,deleteTransaction:s}=rt(),[o,i]=y.useState([]),[c,l]=y.useState(""),[d,p]=y.useState("all"),[f,E]=y.useState("all"),[S,u]=y.useState("all"),[x,g]=y.useState(!1),[w,b]=y.useState(null),T=["all","Food & Dining","Transportation","Bills & Utilities","Entertainment","Shopping","Healthcare","Education","Salary","Freelance"],v=()=>{let m=a;if(c&&(m=m.filter(N=>N.description.toLowerCase().includes(c.toLowerCase())||N.category.toLowerCase().includes(c.toLowerCase()))),d!=="all"&&(m=m.filter(N=>N.category===d)),f!=="all"&&(m=m.filter(N=>N.type===f)),S!=="all"){const N=new Date;m=m.filter(I=>{const L=new Date(I.date),q=Math.floor((N-L)/(1e3*60*60*24));switch(S){case"today":return q===0;case"week":return q<=7;case"month":return q<=30;case"year":return q<=365;default:return!0}})}i(m)};y.useEffect(()=>{var N;const m=(N=t.state)==null?void 0:N.highlightTransaction;m&&(b(m),O.success(`Highlighting transaction #${m}`))},[t.state]),y.useEffect(()=>{v()},[c,d,f,S,a]);const A=()=>{O.success("Opening add transaction form...")},k=m=>{O.success(`Editing transaction: ${m.description}`)},z=m=>{window.confirm("Are you sure you want to delete this transaction?")&&(s(m),O.success("Transaction deleted successfully"))},M=()=>{l(""),p("all"),E("all"),u("all"),O.success("Filters cleared")},C={totalIncome:o.filter(m=>m.type==="income").reduce((m,N)=>m+N.amount,0),totalExpenses:o.filter(m=>m.type==="expense").reduce((m,N)=>m+N.amount,0),totalTransactions:o.length};return e.jsxs(j.div,{className:"transactions-page",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{className:"header-content",children:[e.jsx("h1",{children:"Transactions"}),e.jsx("p",{children:"Manage and track your financial transactions"})]}),e.jsxs(j.button,{className:"btn btn-primary add-btn",onClick:A,whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx(me,{size:20}),"Add Transaction"]})]}),e.jsxs("div",{className:"stats-overview",children:[e.jsxs(j.div,{className:"stat-card income",whileHover:{scale:1.02},children:[e.jsx("div",{className:"stat-icon",children:e.jsx(le,{size:24})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("p",{className:"stat-label",children:"Total Income"}),e.jsxs("p",{className:"stat-value",children:["+₹",C.totalIncome.toLocaleString()]})]})]}),e.jsxs(j.div,{className:"stat-card expense",whileHover:{scale:1.02},children:[e.jsx("div",{className:"stat-icon",children:e.jsx(qe,{size:24})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("p",{className:"stat-label",children:"Total Expenses"}),e.jsxs("p",{className:"stat-value",children:["-₹",C.totalExpenses.toLocaleString()]})]})]}),e.jsxs(j.div,{className:"stat-card balance",whileHover:{scale:1.02},children:[e.jsx("div",{className:"stat-icon",children:e.jsx(se,{size:24})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("p",{className:"stat-label",children:"Net Balance"}),e.jsxs("p",{className:"stat-value",children:["₹",(C.totalIncome-C.totalExpenses).toLocaleString()]})]})]}),e.jsxs(j.div,{className:"stat-card total",whileHover:{scale:1.02},children:[e.jsx("div",{className:"stat-icon",children:e.jsx(je,{size:24})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("p",{className:"stat-label",children:"Total Transactions"}),e.jsx("p",{className:"stat-value",children:C.totalTransactions})]})]})]}),e.jsxs("div",{className:"filters-section",children:[e.jsxs("div",{className:"search-container",children:[e.jsx(qa,{size:20,className:"search-icon"}),e.jsx("input",{type:"text",placeholder:"Search transactions...",value:c,onChange:m=>l(m.target.value),className:"search-input"})]}),e.jsxs("div",{className:"filter-controls",children:[e.jsxs("button",{className:`filter-btn ${x?"active":""}`,onClick:()=>g(!x),children:[e.jsx(Ba,{size:18}),"Filters"]}),(c||d!=="all"||f!=="all"||S!=="all")&&e.jsx("button",{className:"clear-filters-btn",onClick:M,children:"Clear Filters"})]})]}),e.jsx(H,{children:x&&e.jsx(j.div,{className:"advanced-filters",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:e.jsxs("div",{className:"filter-row",children:[e.jsxs("div",{className:"filter-group",children:[e.jsx("label",{children:"Category"}),e.jsx("select",{value:d,onChange:m=>p(m.target.value),children:T.map(m=>e.jsx("option",{value:m,children:m==="all"?"All Categories":m},m))})]}),e.jsxs("div",{className:"filter-group",children:[e.jsx("label",{children:"Type"}),e.jsxs("select",{value:f,onChange:m=>E(m.target.value),children:[e.jsx("option",{value:"all",children:"All Types"}),e.jsx("option",{value:"income",children:"Income"}),e.jsx("option",{value:"expense",children:"Expense"})]})]}),e.jsxs("div",{className:"filter-group",children:[e.jsx("label",{children:"Date Range"}),e.jsxs("select",{value:S,onChange:m=>u(m.target.value),children:[e.jsx("option",{value:"all",children:"All Time"}),e.jsx("option",{value:"today",children:"Today"}),e.jsx("option",{value:"week",children:"This Week"}),e.jsx("option",{value:"month",children:"This Month"}),e.jsx("option",{value:"year",children:"This Year"})]})]})]})})}),e.jsx("div",{className:"transactions-container",children:r?e.jsxs("div",{className:"loading-state",children:[e.jsx(j.div,{className:"loading-spinner",animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}}),e.jsx("p",{children:"Loading transactions..."})]}):o.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx(je,{size:64,className:"empty-icon"}),e.jsx("h3",{children:"No transactions found"}),e.jsx("p",{children:"Try adjusting your filters or add your first transaction"}),e.jsxs("button",{className:"btn btn-primary",onClick:A,children:[e.jsx(me,{size:20}),"Add Transaction"]})]}):e.jsx("div",{className:"transactions-list",children:o.map((m,N)=>e.jsx(j.div,{className:`transaction-item ${m.type} ${w===m.id?"highlighted":""}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:N*.05},whileHover:{scale:1.01},children:e.jsxs("div",{className:"transaction-main",children:[e.jsx("div",{className:"transaction-icon",children:m.type==="income"?e.jsx(le,{size:20,className:"income-icon"}):e.jsx(qe,{size:20,className:"expense-icon"})}),e.jsxs("div",{className:"transaction-details",children:[e.jsx("h4",{children:m.description}),e.jsxs("div",{className:"transaction-meta",children:[e.jsx("span",{className:"category",children:m.category}),e.jsx("span",{className:"separator",children:"•"}),e.jsx("span",{className:"date",children:new Date(m.date).toLocaleDateString()}),e.jsx("span",{className:"separator",children:"•"}),e.jsx("span",{className:"payment-method",children:m.paymentMethod.replace("_"," ")})]})]}),e.jsxs("div",{className:`transaction-amount ${m.type}`,children:[m.type==="income"?"+":"-","₹",m.amount.toLocaleString()]}),e.jsxs("div",{className:"transaction-actions",children:[e.jsx("button",{className:"action-btn edit",onClick:()=>k(m),title:"Edit transaction",children:e.jsx(Ha,{size:16})}),e.jsx("button",{className:"action-btn delete",onClick:()=>z(m.id),title:"Delete transaction",children:e.jsx(Ve,{size:16})})]})]})},m.id))})}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},di=()=>{we();const[t,a]=y.useState([]),[r,n]=y.useState([]),[s,o]=y.useState(!0),[i,c]=y.useState(""),[l,d]=y.useState("all"),[p,f]=y.useState("all"),[E,S]=y.useState(!1),u=[{id:1,category:"Food & Dining",budgetAmount:15e3,spentAmount:12500,period:"monthly",startDate:"2025-09-01",endDate:"2025-09-30",color:"#10b981",status:"on-track",transactions:23,lastUpdated:"2025-09-18"},{id:2,category:"Transportation",budgetAmount:1e4,spentAmount:8e3,period:"monthly",startDate:"2025-09-01",endDate:"2025-09-30",color:"#3b82f6",status:"on-track",transactions:15,lastUpdated:"2025-09-17"},{id:3,category:"Entertainment",budgetAmount:5e3,spentAmount:4500,period:"monthly",startDate:"2025-09-01",endDate:"2025-09-30",color:"#f59e0b",status:"warning",transactions:8,lastUpdated:"2025-09-16"},{id:4,category:"Shopping",budgetAmount:8e3,spentAmount:6e3,period:"monthly",startDate:"2025-09-01",endDate:"2025-09-30",color:"#8b5cf6",status:"on-track",transactions:12,lastUpdated:"2025-09-15"},{id:5,category:"Healthcare",budgetAmount:3e3,spentAmount:3200,period:"monthly",startDate:"2025-09-01",endDate:"2025-09-30",color:"#ef4444",status:"exceeded",transactions:5,lastUpdated:"2025-09-14"},{id:6,category:"Education",budgetAmount:12e3,spentAmount:5e3,period:"quarterly",startDate:"2025-07-01",endDate:"2025-09-30",color:"#06b6d4",status:"under-budget",transactions:3,lastUpdated:"2025-09-10"}],x=["all","on-track","warning","exceeded","under-budget"],g=["all","weekly","monthly","quarterly","yearly"],w=async()=>{o(!0);try{await new Promise(N=>setTimeout(N,1e3));const m=u.map(N=>{const I=N.spentAmount/N.budgetAmount*100;let L="on-track";return I>100?L="exceeded":I>85?L="warning":I<50&&(L="under-budget"),{...N,status:L,percentage:I}});a(m),n(m)}catch{O.error("Failed to fetch budgets")}finally{o(!1)}},b=()=>{let m=t;i&&(m=m.filter(N=>N.category.toLowerCase().includes(i.toLowerCase()))),l!=="all"&&(m=m.filter(N=>N.status===l)),p!=="all"&&(m=m.filter(N=>N.period===p)),n(m)};y.useEffect(()=>{w()},[]),y.useEffect(()=>{b()},[i,l,p,t]);const T=()=>{O.success("Opening create budget form...")},v=m=>{O.success(`Editing budget for ${m.category}`)},A=m=>{window.confirm("Are you sure you want to delete this budget?")&&(a(t.filter(N=>N.id!==m)),O.success("Budget deleted successfully"))},k=()=>{c(""),d("all"),f("all"),O.success("Filters cleared")},z=m=>{switch(m){case"exceeded":return e.jsx(pe,{size:20,className:"status-icon exceeded"});case"warning":return e.jsx(pe,{size:20,className:"status-icon warning"});case"on-track":return e.jsx(Fa,{size:20,className:"status-icon on-track"});case"under-budget":return e.jsx(Ya,{size:20,className:"status-icon under-budget"});default:return e.jsx(Q,{size:20,className:"status-icon"})}},M=m=>{switch(m){case"exceeded":return"Budget Exceeded";case"warning":return"Close to Limit";case"on-track":return"On Track";case"under-budget":return"Under Budget";default:return"Unknown"}},C={totalBudgets:r.length,totalBudgetAmount:r.reduce((m,N)=>m+N.budgetAmount,0),totalSpent:r.reduce((m,N)=>m+N.spentAmount,0),exceededBudgets:r.filter(m=>m.status==="exceeded").length};return e.jsxs(j.div,{className:"budgets-page",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{className:"header-content",children:[e.jsx("h1",{children:"Budget Management"}),e.jsx("p",{children:"Track and manage your spending budgets"})]}),e.jsxs(j.button,{className:"btn btn-primary add-btn",onClick:T,whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx(me,{size:20}),"Create Budget"]})]}),e.jsxs("div",{className:"stats-overview",children:[e.jsxs(j.div,{className:"stat-card total",whileHover:{scale:1.02},children:[e.jsx("div",{className:"stat-icon",children:e.jsx(Q,{size:24})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("p",{className:"stat-label",children:"Total Budgets"}),e.jsx("p",{className:"stat-value",children:C.totalBudgets})]})]}),e.jsxs(j.div,{className:"stat-card budget",whileHover:{scale:1.02},children:[e.jsx("div",{className:"stat-icon",children:e.jsx(se,{size:24})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("p",{className:"stat-label",children:"Total Budget"}),e.jsxs("p",{className:"stat-value",children:["₹",C.totalBudgetAmount.toLocaleString()]})]})]}),e.jsxs(j.div,{className:"stat-card spent",whileHover:{scale:1.02},children:[e.jsx("div",{className:"stat-icon",children:e.jsx(ge,{size:24})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("p",{className:"stat-label",children:"Total Spent"}),e.jsxs("p",{className:"stat-value",children:["₹",C.totalSpent.toLocaleString()]})]})]}),e.jsxs(j.div,{className:"stat-card remaining",whileHover:{scale:1.02},children:[e.jsx("div",{className:"stat-icon",children:e.jsx(st,{size:24})}),e.jsxs("div",{className:"stat-content",children:[e.jsx("p",{className:"stat-label",children:"Remaining"}),e.jsxs("p",{className:"stat-value",children:["₹",(C.totalBudgetAmount-C.totalSpent).toLocaleString()]})]})]})]}),e.jsxs("div",{className:"filters-section",children:[e.jsxs("div",{className:"search-container",children:[e.jsx(qa,{size:20,className:"search-icon"}),e.jsx("input",{type:"text",placeholder:"Search budgets...",value:i,onChange:m=>c(m.target.value),className:"search-input"})]}),e.jsxs("div",{className:"filter-controls",children:[e.jsxs("button",{className:`filter-btn ${E?"active":""}`,onClick:()=>S(!E),children:[e.jsx(Ba,{size:18}),"Filters"]}),(i||l!=="all"||p!=="all")&&e.jsx("button",{className:"clear-filters-btn",onClick:k,children:"Clear Filters"})]})]}),e.jsx(H,{children:E&&e.jsx(j.div,{className:"advanced-filters",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},children:e.jsxs("div",{className:"filter-row",children:[e.jsxs("div",{className:"filter-group",children:[e.jsx("label",{children:"Status"}),e.jsx("select",{value:l,onChange:m=>d(m.target.value),children:x.map(m=>e.jsx("option",{value:m,children:m==="all"?"All Statuses":M(m)},m))})]}),e.jsxs("div",{className:"filter-group",children:[e.jsx("label",{children:"Period"}),e.jsx("select",{value:p,onChange:m=>f(m.target.value),children:g.map(m=>e.jsx("option",{value:m,children:m==="all"?"All Periods":m.charAt(0).toUpperCase()+m.slice(1)},m))})]})]})})}),e.jsx("div",{className:"budgets-container",children:s?e.jsxs("div",{className:"loading-state",children:[e.jsx(j.div,{className:"loading-spinner",animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}}),e.jsx("p",{children:"Loading budgets..."})]}):r.length===0?e.jsxs("div",{className:"empty-state",children:[e.jsx(Q,{size:64,className:"empty-icon"}),e.jsx("h3",{children:"No budgets found"}),e.jsx("p",{children:"Create your first budget to start tracking your spending"}),e.jsxs("button",{className:"btn btn-primary",onClick:T,children:[e.jsx(me,{size:20}),"Create Budget"]})]}):e.jsx("div",{className:"budgets-grid",children:r.map((m,N)=>e.jsxs(j.div,{className:`budget-card ${m.status}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:N*.1},whileHover:{scale:1.02,y:-4},children:[e.jsxs("div",{className:"budget-header",children:[e.jsxs("div",{className:"budget-category",children:[e.jsx("div",{className:"category-icon",style:{backgroundColor:m.color},children:e.jsx(Q,{size:20})}),e.jsxs("div",{children:[e.jsx("h3",{children:m.category}),e.jsx("p",{className:"budget-period",children:m.period})]})]}),e.jsxs("div",{className:"budget-actions",children:[e.jsx("button",{className:"action-btn edit",onClick:()=>v(m),title:"Edit budget",children:e.jsx(Ha,{size:16})}),e.jsx("button",{className:"action-btn delete",onClick:()=>A(m.id),title:"Delete budget",children:e.jsx(Ve,{size:16})})]})]}),e.jsxs("div",{className:"budget-amounts",children:[e.jsxs("div",{className:"amount-row",children:[e.jsx("span",{className:"amount-label",children:"Spent"}),e.jsxs("span",{className:"amount-value spent",children:["₹",m.spentAmount.toLocaleString()]})]}),e.jsxs("div",{className:"amount-row",children:[e.jsx("span",{className:"amount-label",children:"Budget"}),e.jsxs("span",{className:"amount-value budget",children:["₹",m.budgetAmount.toLocaleString()]})]}),e.jsxs("div",{className:"amount-row",children:[e.jsx("span",{className:"amount-label",children:"Remaining"}),e.jsxs("span",{className:`amount-value remaining ${m.spentAmount>m.budgetAmount?"exceeded":""}`,children:["₹",(m.budgetAmount-m.spentAmount).toLocaleString()]})]})]}),e.jsxs("div",{className:"budget-progress",children:[e.jsxs("div",{className:"progress-header",children:[e.jsx("span",{className:"progress-label",children:"Progress"}),e.jsxs("span",{className:`progress-percentage ${m.status}`,children:[Math.round(m.percentage),"%"]})]}),e.jsx("div",{className:"progress-bar",children:e.jsx(j.div,{className:`progress-fill ${m.status}`,initial:{width:0},animate:{width:`${Math.min(m.percentage,100)}%`},transition:{duration:1,delay:N*.1},style:{backgroundColor:m.color}})})]}),e.jsxs("div",{className:"budget-status",children:[z(m.status),e.jsx("span",{className:`status-text ${m.status}`,children:M(m.status)})]}),e.jsxs("div",{className:"budget-meta",children:[e.jsxs("div",{className:"meta-item",children:[e.jsx(Tt,{size:14}),e.jsxs("span",{children:["Ends ",new Date(m.endDate).toLocaleDateString()]})]}),e.jsxs("div",{className:"meta-item",children:[e.jsx(je,{size:14}),e.jsxs("span",{children:[m.transactions," transactions"]})]})]})]},m.id))})}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},pi=()=>{const[t,a]=y.useState("monthly"),[r,n]=y.useState("spending"),[s,o]=y.useState(!1),c={weekly:{overview:{totalIncome:28750,totalExpenses:21875,totalSavings:6875,savingsRate:23.9,previousPeriod:{totalIncome:27500,totalExpenses:20500,totalSavings:7e3,savingsRate:25.5}},spendingByCategory:[{category:"Food & Dining",amount:6250,color:"#10b981",icon:Re,percentage:28.6},{category:"Transportation",amount:3750,color:"#3b82f6",icon:Ce,percentage:17.1},{category:"Shopping",amount:3e3,color:"#8b5cf6",icon:Pe,percentage:13.7},{category:"Entertainment",amount:2500,color:"#f59e0b",icon:Oe,percentage:11.4},{category:"Healthcare",amount:2e3,color:"#ef4444",icon:Me,percentage:9.1},{category:"Housing",amount:4375,color:"#06b6d4",icon:ve,percentage:20}],trends:[{period:"Mon",income:4e3,expenses:3e3,savings:1e3},{period:"Tue",income:4200,expenses:3100,savings:1100},{period:"Wed",income:4100,expenses:3200,savings:900},{period:"Thu",income:4300,expenses:3300,savings:1e3},{period:"Fri",income:4500,expenses:3500,savings:1e3},{period:"Sat",income:3900,expenses:2900,savings:1e3},{period:"Sun",income:3750,expenses:2875,savings:875}],budgetPerformance:[{category:"Food & Dining",budget:7500,spent:6250,status:"good"},{category:"Transportation",budget:4500,spent:3750,status:"good"},{category:"Shopping",budget:2500,spent:3e3,status:"over"},{category:"Entertainment",budget:3e3,spent:2500,status:"good"},{category:"Healthcare",budget:2e3,spent:2e3,status:"exact"}]},monthly:{overview:{totalIncome:125e3,totalExpenses:87500,totalSavings:37500,savingsRate:30,previousPeriod:{totalIncome:118e3,totalExpenses:82e3,totalSavings:36e3,savingsRate:30.5}},spendingByCategory:[{category:"Food & Dining",amount:25e3,color:"#10b981",icon:Re,percentage:28.6},{category:"Transportation",amount:15e3,color:"#3b82f6",icon:Ce,percentage:17.1},{category:"Shopping",amount:12e3,color:"#8b5cf6",icon:Pe,percentage:13.7},{category:"Entertainment",amount:1e4,color:"#f59e0b",icon:Oe,percentage:11.4},{category:"Healthcare",amount:8e3,color:"#ef4444",icon:Me,percentage:9.1},{category:"Housing",amount:17500,color:"#06b6d4",icon:ve,percentage:20}],trends:[{period:"Jan",income:98e3,expenses:72e3,savings:26e3},{period:"Feb",income:105e3,expenses:78e3,savings:27e3},{period:"Mar",income:112e3,expenses:82e3,savings:3e4},{period:"Apr",income:108e3,expenses:79e3,savings:29e3},{period:"May",income:115e3,expenses:85e3,savings:3e4},{period:"Jun",income:118e3,expenses:82e3,savings:36e3},{period:"Jul",income:122e3,expenses:88e3,savings:34e3},{period:"Aug",income:125e3,expenses:87500,savings:37500}],budgetPerformance:[{category:"Food & Dining",budget:3e4,spent:25e3,status:"good"},{category:"Transportation",budget:18e3,spent:15e3,status:"good"},{category:"Shopping",budget:1e4,spent:12e3,status:"over"},{category:"Entertainment",budget:12e3,spent:1e4,status:"good"},{category:"Healthcare",budget:8e3,spent:8e3,status:"exact"}]},quarterly:{overview:{totalIncome:375e3,totalExpenses:262500,totalSavings:112500,savingsRate:30,previousPeriod:{totalIncome:354e3,totalExpenses:246e3,totalSavings:108e3,savingsRate:30.5}},spendingByCategory:[{category:"Food & Dining",amount:75e3,color:"#10b981",icon:Re,percentage:28.6},{category:"Transportation",amount:45e3,color:"#3b82f6",icon:Ce,percentage:17.1},{category:"Shopping",amount:36e3,color:"#8b5cf6",icon:Pe,percentage:13.7},{category:"Entertainment",amount:3e4,color:"#f59e0b",icon:Oe,percentage:11.4},{category:"Healthcare",amount:24e3,color:"#ef4444",icon:Me,percentage:9.1},{category:"Housing",amount:52500,color:"#06b6d4",icon:ve,percentage:20}],trends:[{period:"Q1",income:315e3,expenses:232e3,savings:83e3},{period:"Q2",income:341e3,expenses:244e3,savings:97e3},{period:"Q3",income:375e3,expenses:262500,savings:112500}],budgetPerformance:[{category:"Food & Dining",budget:9e4,spent:75e3,status:"good"},{category:"Transportation",budget:54e3,spent:45e3,status:"good"},{category:"Shopping",budget:3e4,spent:36e3,status:"over"},{category:"Entertainment",budget:36e3,spent:3e4,status:"good"},{category:"Healthcare",budget:24e3,spent:24e3,status:"exact"}]},yearly:{overview:{totalIncome:15e5,totalExpenses:105e4,totalSavings:45e4,savingsRate:30,previousPeriod:{totalIncome:1416e3,totalExpenses:984e3,totalSavings:432e3,savingsRate:30.5}},spendingByCategory:[{category:"Food & Dining",amount:3e5,color:"#10b981",icon:Re,percentage:28.6},{category:"Transportation",amount:18e4,color:"#3b82f6",icon:Ce,percentage:17.1},{category:"Shopping",amount:144e3,color:"#8b5cf6",icon:Pe,percentage:13.7},{category:"Entertainment",amount:12e4,color:"#f59e0b",icon:Oe,percentage:11.4},{category:"Healthcare",amount:96e3,color:"#ef4444",icon:Me,percentage:9.1},{category:"Housing",amount:21e4,color:"#06b6d4",icon:ve,percentage:20}],trends:[{period:"2021",income:12e5,expenses:9e5,savings:3e5},{period:"2022",income:132e4,expenses:95e4,savings:37e4},{period:"2023",income:1416e3,expenses:984e3,savings:432e3},{period:"2024",income:15e5,expenses:105e4,savings:45e4}],budgetPerformance:[{category:"Food & Dining",budget:36e4,spent:3e5,status:"good"},{category:"Transportation",budget:216e3,spent:18e4,status:"good"},{category:"Shopping",budget:12e4,spent:144e3,status:"over"},{category:"Entertainment",budget:144e3,spent:12e4,status:"good"},{category:"Healthcare",budget:96e3,spent:96e3,status:"exact"}]}}[t],l=w=>{w!==t&&(o(!0),setTimeout(()=>{a(w),o(!1)},800))},d=(w,b)=>((w-b)/b*100).toFixed(1),p=w=>w>=0?e.jsx(Ds,{size:16}):e.jsx(Os,{size:16}),f=(w,b=!1)=>b?w>=0?"#ef4444":"#10b981":w>=0?"#10b981":"#ef4444",E=()=>{o(!0),setTimeout(()=>{o(!1)},1500)},S=()=>{const w=JSON.stringify(c,null,2),b=new Blob([w],{type:"application/json"}),T=URL.createObjectURL(b),v=document.createElement("a");v.href=T,v.download="analytics-data.json",v.click()},u=d(c.overview.totalIncome,c.overview.previousPeriod.totalIncome),x=d(c.overview.totalExpenses,c.overview.previousPeriod.totalExpenses),g=d(c.overview.totalSavings,c.overview.previousPeriod.totalSavings);return e.jsxs(j.div,{className:"analytics-page",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsxs("div",{className:"page-header",children:[e.jsxs("div",{className:"header-content",children:[e.jsx("h1",{children:"Financial Analytics"}),e.jsx("p",{children:"Comprehensive insights into your financial patterns"})]}),e.jsxs("div",{className:"header-actions",children:[e.jsxs(j.button,{className:"btn btn-secondary refresh-btn",onClick:E,disabled:s,whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx(de,{size:18,className:s?"spinning":""}),"Refresh"]}),e.jsxs(j.button,{className:"btn btn-primary export-btn",onClick:S,whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.jsx(vt,{size:18}),"Export"]})]})]}),e.jsxs("div",{className:"period-selector",children:[e.jsx("div",{className:"selector-group",children:["weekly","monthly","quarterly","yearly"].map(w=>e.jsx(j.button,{className:`period-btn ${t===w?"active":""}`,onClick:()=>l(w),disabled:s,whileHover:{scale:1.05},whileTap:{scale:.95},children:w.charAt(0).toUpperCase()+w.slice(1)},w))}),s&&e.jsxs(j.div,{className:"loading-indicator",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsx("div",{className:"loading-spinner"}),e.jsx("span",{children:"Updating data..."})]})]}),e.jsxs("div",{className:"overview-stats",children:[e.jsxs(j.div,{className:"stat-card income",whileHover:{scale:1.02},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(ge,{size:24})}),e.jsxs("div",{className:"stat-change",style:{color:f(u)},children:[p(u),Math.abs(u),"%"]})]}),e.jsxs("div",{className:"stat-content",children:[e.jsx("h3",{children:"Total Income"}),e.jsxs("p",{className:"stat-value",children:["₹",c.overview.totalIncome.toLocaleString()]}),e.jsxs("p",{className:"stat-subtitle",children:["vs ₹",c.overview.previousPeriod.totalIncome.toLocaleString()," last period"]})]})]}),e.jsxs(j.div,{className:"stat-card expenses",whileHover:{scale:1.02},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(Ya,{size:24})}),e.jsxs("div",{className:"stat-change",style:{color:f(x,!0)},children:[p(x),Math.abs(x),"%"]})]}),e.jsxs("div",{className:"stat-content",children:[e.jsx("h3",{children:"Total Expenses"}),e.jsxs("p",{className:"stat-value",children:["₹",c.overview.totalExpenses.toLocaleString()]}),e.jsxs("p",{className:"stat-subtitle",children:["vs ₹",c.overview.previousPeriod.totalExpenses.toLocaleString()," last period"]})]})]}),e.jsxs(j.div,{className:"stat-card savings",whileHover:{scale:1.02},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(se,{size:24})}),e.jsxs("div",{className:"stat-change",style:{color:f(g)},children:[p(g),Math.abs(g),"%"]})]}),e.jsxs("div",{className:"stat-content",children:[e.jsx("h3",{children:"Total Savings"}),e.jsxs("p",{className:"stat-value",children:["₹",c.overview.totalSavings.toLocaleString()]}),e.jsxs("p",{className:"stat-subtitle",children:["vs ₹",c.overview.previousPeriod.totalSavings.toLocaleString()," last period"]})]})]}),e.jsxs(j.div,{className:"stat-card savings-rate",whileHover:{scale:1.02},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[e.jsxs("div",{className:"stat-header",children:[e.jsx("div",{className:"stat-icon",children:e.jsx(Q,{size:24})}),e.jsx("div",{className:"savings-rate-indicator",children:e.jsx("div",{className:"rate-circle",children:e.jsxs("span",{children:[c.overview.savingsRate,"%"]})})})]}),e.jsxs("div",{className:"stat-content",children:[e.jsx("h3",{children:"Savings Rate"}),e.jsxs("p",{className:"stat-value",children:[c.overview.savingsRate,"%"]}),e.jsx("p",{className:"stat-subtitle",children:"of total income"})]})]})]}),e.jsxs("div",{className:"charts-section",children:[e.jsxs("div",{className:"chart-selector",children:[e.jsxs("button",{className:`chart-btn ${r==="spending"?"active":""}`,onClick:()=>n("spending"),children:[e.jsx(_a,{size:18}),"Spending by Category"]}),e.jsxs("button",{className:`chart-btn ${r==="trends"?"active":""}`,onClick:()=>n("trends"),children:[e.jsx(st,{size:18}),"Monthly Trends"]}),e.jsxs("button",{className:`chart-btn ${r==="budget"?"active":""}`,onClick:()=>n("budget"),children:[e.jsx(Q,{size:18}),"Budget Performance"]})]}),e.jsxs(H,{mode:"wait",children:[r==="spending"&&e.jsxs(j.div,{className:"chart-container",initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:[e.jsx("h3",{children:"Spending by Category"}),e.jsx("div",{className:"spending-chart",children:e.jsx("div",{className:"spending-categories",children:c.spendingByCategory.map((w,b)=>{const T=w.icon;return e.jsxs(j.div,{className:"category-item",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:b*.1},whileHover:{scale:1.05},children:[e.jsxs("div",{className:"category-header",children:[e.jsx("div",{className:"category-icon",style:{backgroundColor:w.color},children:e.jsx(T,{size:20})}),e.jsxs("div",{className:"category-info",children:[e.jsx("h4",{children:w.category}),e.jsxs("p",{children:["₹",w.amount.toLocaleString()]})]}),e.jsxs("div",{className:"category-percentage",children:[w.percentage,"%"]})]}),e.jsx("div",{className:"category-bar",children:e.jsx(j.div,{className:"category-fill",style:{backgroundColor:w.color},initial:{width:0},animate:{width:`${w.percentage}%`},transition:{duration:1,delay:b*.1}})})]},w.category)})})})]},"spending"),r==="trends"&&e.jsxs(j.div,{className:"chart-container",initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:[e.jsxs("h3",{children:[t.charAt(0).toUpperCase()+t.slice(1)," Financial Trends"]}),e.jsxs("div",{className:"trends-chart",children:[e.jsxs("div",{className:"chart-legend",children:[e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color income"}),e.jsx("span",{children:"Income"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color expenses"}),e.jsx("span",{children:"Expenses"})]}),e.jsxs("div",{className:"legend-item",children:[e.jsx("div",{className:"legend-color savings"}),e.jsx("span",{children:"Savings"})]})]}),e.jsx("div",{className:"chart-bars",children:c.trends.map((w,b)=>{const T=Math.max(...c.trends.map(v=>v.income));return e.jsxs(j.div,{className:"trend-bar",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:b*.1},children:[e.jsxs("div",{className:"bar-container",children:[e.jsx(j.div,{className:"bar income",initial:{height:0},animate:{height:`${w.income/T*100}%`},transition:{duration:1,delay:b*.1}}),e.jsx(j.div,{className:"bar expenses",initial:{height:0},animate:{height:`${w.expenses/T*100}%`},transition:{duration:1,delay:b*.1+.2}}),e.jsx(j.div,{className:"bar savings",initial:{height:0},animate:{height:`${w.savings/T*100}%`},transition:{duration:1,delay:b*.1+.4}})]}),e.jsx("div",{className:"trend-label",children:w.period}),e.jsxs("div",{className:"trend-values",children:[e.jsxs("div",{className:"value income",children:["₹",(w.income/1e3).toFixed(0),"k"]}),e.jsxs("div",{className:"value expenses",children:["₹",(w.expenses/1e3).toFixed(0),"k"]}),e.jsxs("div",{className:"value savings",children:["₹",(w.savings/1e3).toFixed(0),"k"]})]})]},w.period)})})]})]},"trends"),r==="budget"&&e.jsxs(j.div,{className:"chart-container",initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:[e.jsx("h3",{children:"Budget Performance Analysis"}),e.jsx("div",{className:"budget-chart",children:c.budgetPerformance.map((w,b)=>{const T=w.spent/w.budget*100,v=w.status;return e.jsxs(j.div,{className:`budget-item ${v}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:b*.1},whileHover:{scale:1.02},children:[e.jsxs("div",{className:"budget-info",children:[e.jsx("h4",{children:w.category}),e.jsxs("div",{className:"budget-amounts",children:[e.jsxs("span",{className:"spent",children:["₹",w.spent.toLocaleString()]}),e.jsx("span",{className:"separator",children:"/"}),e.jsxs("span",{className:"budget",children:["₹",w.budget.toLocaleString()]})]})]}),e.jsxs("div",{className:"budget-progress",children:[e.jsx("div",{className:"progress-bar",children:e.jsx(j.div,{className:`progress-fill ${v}`,initial:{width:0},animate:{width:`${Math.min(T,100)}%`},transition:{duration:1,delay:b*.1}})}),e.jsxs("div",{className:`progress-percentage ${v}`,children:[T.toFixed(0),"%"]})]}),e.jsxs("div",{className:`status-indicator ${v}`,children:[v==="good"&&"✓",v==="over"&&"⚠",v==="exact"&&"="]})]},w.category)})})]},"budget")]})]}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},ui=()=>{const[t,a]=y.useState("profile"),[r,n]=y.useState({}),[s,o]=y.useState(!1),[i,c]=y.useState({profile:{firstName:"Guest",lastName:"User",email:"guest@financeai.com",phone:"+91 9876543210",avatar:"https://ui-avatars.com/api/?name=Guest+User&background=3b82f6&color=fff&size=200"},security:{twoFactorEnabled:!0,biometricEnabled:!1,sessionTimeout:30,loginNotifications:!0},notifications:{transactionAlerts:!0,budgetAlerts:!0,billReminders:!0,emailNotifications:!0,pushNotifications:!0},preferences:{theme:"light",currency:"INR",language:"en",dateFormat:"DD/MM/YYYY",defaultPage:"dashboard"},privacy:{dataSharing:!1,analyticsOptIn:!0,marketingOptIn:!1}}),l=[{id:"profile",label:"Profile",icon:Ct,color:"#3b82f6"},{id:"security",label:"Security",icon:Xs,color:"#ef4444"},{id:"notifications",label:"Notifications",icon:Ye,color:"#f59e0b"},{id:"preferences",label:"Preferences",icon:Js,color:"#8b5cf6"},{id:"financial",label:"Financial",icon:se,color:"#10b981"},{id:"privacy",label:"Privacy",icon:jt,color:"#6b7280"},{id:"data",label:"Data & Backup",icon:Ls,color:"#06b6d4"}],d=(b,T,v)=>{c(A=>({...A,[b]:{...A[b],[T]:v}})),O.success("Setting updated successfully")},p=b=>{const T=b.target.files[0];if(T){if(T.size>5*1024*1024){O.error("Image size should be less than 5MB");return}if(!T.type.startsWith("image/")){O.error("Please select a valid image file");return}o(!0);const v=new FileReader;v.onload=A=>{setTimeout(()=>{d("profile","avatar",A.target.result),o(!1),O.success("Profile picture updated successfully")},1e3)},v.readAsDataURL(T)}b.target.value=""},f=()=>{n(b=>({...b,export:!0})),setTimeout(()=>{const b=JSON.stringify(i,null,2),T=new Blob([b],{type:"application/json"}),v=URL.createObjectURL(T),A=document.createElement("a");A.href=v,A.download="financeai-settings.json",A.click(),n(k=>({...k,export:!1})),O.success("Data exported successfully")},2e3)},E=()=>e.jsxs(j.div,{className:"settings-section",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{children:"Profile Information"}),e.jsx("p",{children:"Manage your personal information and profile settings"})]}),e.jsxs("div",{className:"profile-section",children:[e.jsxs("div",{className:"profile-avatar",children:[e.jsx("img",{src:i.profile.avatar,alt:"Profile"}),e.jsxs("label",{className:`avatar-upload ${s?"uploading":""}`,htmlFor:"avatar-input",children:[s?e.jsx(de,{size:16,className:"spinning"}):e.jsx(Is,{size:16}),e.jsx("input",{id:"avatar-input",type:"file",accept:"image/*",onChange:p,disabled:s,style:{display:"none"}})]}),s&&e.jsx("div",{className:"upload-overlay",children:e.jsxs("div",{className:"upload-progress",children:[e.jsx(de,{size:24,className:"spinning"}),e.jsx("span",{children:"Uploading..."})]})})]}),e.jsxs("div",{className:"profile-form",children:[e.jsxs("div",{className:"form-row",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"First Name"}),e.jsx("input",{type:"text",value:i.profile.firstName,onChange:b=>d("profile","firstName",b.target.value)})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Last Name"}),e.jsx("input",{type:"text",value:i.profile.lastName,onChange:b=>d("profile","lastName",b.target.value)})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Email Address"}),e.jsx("input",{type:"email",value:i.profile.email,onChange:b=>d("profile","email",b.target.value)})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Phone Number"}),e.jsx("input",{type:"tel",value:i.profile.phone,onChange:b=>d("profile","phone",b.target.value)})]})]})]})]}),S=()=>e.jsxs(j.div,{className:"settings-section",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{children:"Security Settings"}),e.jsx("p",{children:"Protect your account with advanced security features"})]}),e.jsxs("div",{className:"security-grid",children:[e.jsxs("div",{className:"security-card",children:[e.jsxs("div",{className:"security-info",children:[e.jsx("div",{className:"security-icon",children:e.jsx(Us,{size:24})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Two-Factor Authentication"}),e.jsx("p",{children:"Add an extra layer of security to your account"})]})]}),e.jsxs("div",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:i.security.twoFactorEnabled,onChange:b=>d("security","twoFactorEnabled",b.target.checked)}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"security-card",children:[e.jsxs("div",{className:"security-info",children:[e.jsx("div",{className:"security-icon",children:e.jsx($s,{size:24})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Biometric Login"}),e.jsx("p",{children:"Use fingerprint or face recognition"})]})]}),e.jsxs("div",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:i.security.biometricEnabled,onChange:b=>d("security","biometricEnabled",b.target.checked)}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"security-card",children:[e.jsxs("div",{className:"security-info",children:[e.jsx("div",{className:"security-icon",children:e.jsx(Ye,{size:24})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Login Notifications"}),e.jsx("p",{children:"Get notified of new login attempts"})]})]}),e.jsxs("div",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:i.security.loginNotifications,onChange:b=>d("security","loginNotifications",b.target.checked)}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"security-card full-width",children:[e.jsxs("div",{className:"security-info",children:[e.jsx("div",{className:"security-icon",children:e.jsx(de,{size:24})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Session Timeout"}),e.jsx("p",{children:"Automatically logout after inactivity"})]})]}),e.jsxs("select",{value:i.security.sessionTimeout,onChange:b=>d("security","sessionTimeout",parseInt(b.target.value)),children:[e.jsx("option",{value:15,children:"15 minutes"}),e.jsx("option",{value:30,children:"30 minutes"}),e.jsx("option",{value:60,children:"1 hour"}),e.jsx("option",{value:120,children:"2 hours"})]})]}),e.jsxs("div",{className:"password-section",children:[e.jsxs("div",{className:"password-info",children:[e.jsx(jt,{size:24}),e.jsxs("div",{children:[e.jsx("h3",{children:"Change Password"}),e.jsx("p",{children:"Update your account password"})]})]}),e.jsx("button",{className:"btn btn-secondary",children:"Change Password"})]})]})]}),u=()=>e.jsxs(j.div,{className:"settings-section",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{children:"Notification Preferences"}),e.jsx("p",{children:"Choose how you want to be notified"})]}),e.jsxs("div",{className:"notification-groups",children:[e.jsxs("div",{className:"notification-group",children:[e.jsx("h3",{children:"Financial Alerts"}),e.jsxs("div",{className:"notification-list",children:[e.jsxs("div",{className:"notification-item",children:[e.jsxs("div",{className:"notification-info",children:[e.jsx("h4",{children:"Transaction Alerts"}),e.jsx("p",{children:"Get notified for all transactions"})]}),e.jsxs("div",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:i.notifications.transactionAlerts,onChange:b=>d("notifications","transactionAlerts",b.target.checked)}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"notification-item",children:[e.jsxs("div",{className:"notification-info",children:[e.jsx("h4",{children:"Budget Alerts"}),e.jsx("p",{children:"Warnings when approaching budget limits"})]}),e.jsxs("div",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:i.notifications.budgetAlerts,onChange:b=>d("notifications","budgetAlerts",b.target.checked)}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"notification-item",children:[e.jsxs("div",{className:"notification-info",children:[e.jsx("h4",{children:"Bill Reminders"}),e.jsx("p",{children:"Reminders for upcoming bills"})]}),e.jsxs("div",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:i.notifications.billReminders,onChange:b=>d("notifications","billReminders",b.target.checked)}),e.jsx("span",{className:"toggle-slider"})]})]})]})]}),e.jsxs("div",{className:"notification-group",children:[e.jsx("h3",{children:"Communication"}),e.jsxs("div",{className:"notification-list",children:[e.jsxs("div",{className:"notification-item",children:[e.jsxs("div",{className:"notification-info",children:[e.jsx("h4",{children:"Email Notifications"}),e.jsx("p",{children:"Receive important updates via email"})]}),e.jsxs("div",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:i.notifications.emailNotifications,onChange:b=>d("notifications","emailNotifications",b.target.checked)}),e.jsx("span",{className:"toggle-slider"})]})]}),e.jsxs("div",{className:"notification-item",children:[e.jsxs("div",{className:"notification-info",children:[e.jsx("h4",{children:"Push Notifications"}),e.jsx("p",{children:"Instant notifications on your device"})]}),e.jsxs("div",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:i.notifications.pushNotifications,onChange:b=>d("notifications","pushNotifications",b.target.checked)}),e.jsx("span",{className:"toggle-slider"})]})]})]})]})]})]}),x=()=>e.jsxs(j.div,{className:"settings-section",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{children:"App Preferences"}),e.jsx("p",{children:"Customize your app experience"})]}),e.jsxs("div",{className:"preferences-grid",children:[e.jsxs("div",{className:"preference-group",children:[e.jsx("h3",{children:"Display"}),e.jsxs("div",{className:"preference-item",children:[e.jsx("label",{children:"Theme"}),e.jsxs("select",{value:i.preferences.theme,onChange:b=>d("preferences","theme",b.target.value),children:[e.jsx("option",{value:"light",children:"Light"}),e.jsx("option",{value:"dark",children:"Dark"}),e.jsx("option",{value:"auto",children:"Auto"})]})]}),e.jsxs("div",{className:"preference-item",children:[e.jsx("label",{children:"Language"}),e.jsxs("select",{value:i.preferences.language,onChange:b=>d("preferences","language",b.target.value),children:[e.jsx("option",{value:"en",children:"English"}),e.jsx("option",{value:"hi",children:"Hindi"}),e.jsx("option",{value:"es",children:"Spanish"}),e.jsx("option",{value:"fr",children:"French"})]})]})]}),e.jsxs("div",{className:"preference-group",children:[e.jsx("h3",{children:"Financial"}),e.jsxs("div",{className:"preference-item",children:[e.jsx("label",{children:"Currency"}),e.jsxs("select",{value:i.preferences.currency,onChange:b=>d("preferences","currency",b.target.value),children:[e.jsx("option",{value:"INR",children:"Indian Rupee (₹)"}),e.jsx("option",{value:"USD",children:"US Dollar ($)"}),e.jsx("option",{value:"EUR",children:"Euro (€)"}),e.jsx("option",{value:"GBP",children:"British Pound (£)"})]})]}),e.jsxs("div",{className:"preference-item",children:[e.jsx("label",{children:"Date Format"}),e.jsxs("select",{value:i.preferences.dateFormat,onChange:b=>d("preferences","dateFormat",b.target.value),children:[e.jsx("option",{value:"DD/MM/YYYY",children:"DD/MM/YYYY"}),e.jsx("option",{value:"MM/DD/YYYY",children:"MM/DD/YYYY"}),e.jsx("option",{value:"YYYY-MM-DD",children:"YYYY-MM-DD"})]})]}),e.jsxs("div",{className:"preference-item",children:[e.jsx("label",{children:"Default Page"}),e.jsxs("select",{value:i.preferences.defaultPage,onChange:b=>d("preferences","defaultPage",b.target.value),children:[e.jsx("option",{value:"dashboard",children:"Dashboard"}),e.jsx("option",{value:"transactions",children:"Transactions"}),e.jsx("option",{value:"budgets",children:"Budgets"}),e.jsx("option",{value:"analytics",children:"Analytics"})]})]})]})]})]}),g=()=>e.jsxs(j.div,{className:"settings-section",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{children:"Data Management"}),e.jsx("p",{children:"Export, backup, and manage your data"})]}),e.jsxs("div",{className:"data-actions",children:[e.jsxs("div",{className:"data-card",children:[e.jsx("div",{className:"data-icon",children:e.jsx(vt,{size:32})}),e.jsxs("div",{className:"data-content",children:[e.jsx("h3",{children:"Export Data"}),e.jsx("p",{children:"Download your financial data"}),e.jsx("button",{className:"btn btn-primary",onClick:f,disabled:r.export,children:r.export?e.jsxs(e.Fragment,{children:[e.jsx(de,{size:16,className:"spinning"}),"Exporting..."]}):e.jsxs(e.Fragment,{children:[e.jsx(vt,{size:16}),"Export"]})})]})]}),e.jsxs("div",{className:"data-card",children:[e.jsx("div",{className:"data-icon",children:e.jsx(Kt,{size:32})}),e.jsxs("div",{className:"data-content",children:[e.jsx("h3",{children:"Import Data"}),e.jsx("p",{children:"Import from other apps"}),e.jsxs("button",{className:"btn btn-secondary",children:[e.jsx(Kt,{size:16}),"Import"]})]})]}),e.jsxs("div",{className:"data-card danger",children:[e.jsx("div",{className:"data-icon",children:e.jsx(Ve,{size:32})}),e.jsxs("div",{className:"data-content",children:[e.jsx("h3",{children:"Delete Account"}),e.jsx("p",{children:"Permanently delete your account"}),e.jsxs("button",{className:"btn btn-danger",children:[e.jsx(Ve,{size:16}),"Delete"]})]})]})]})]}),w=()=>{switch(t){case"profile":return e.jsx(E,{});case"security":return e.jsx(S,{});case"notifications":return e.jsx(u,{});case"preferences":return e.jsx(x,{});case"financial":return e.jsx(x,{});case"privacy":return e.jsx(u,{});case"data":return e.jsx(g,{});default:return e.jsx(E,{})}};return e.jsxs(j.div,{className:"settings-page",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsxs("div",{className:"settings-container",children:[e.jsxs("div",{className:"settings-sidebar",children:[e.jsxs("div",{className:"sidebar-header",children:[e.jsx("h1",{children:"Settings"}),e.jsx("p",{children:"Manage your account preferences"})]}),e.jsx("nav",{className:"settings-nav",children:l.map(b=>{const T=b.icon;return e.jsxs(j.button,{className:`nav-item ${t===b.id?"active":""}`,onClick:()=>a(b.id),whileHover:{x:4},whileTap:{scale:.98},children:[e.jsx("div",{className:"nav-icon",style:{color:b.color},children:e.jsx(T,{size:20})}),e.jsx("span",{children:b.label}),e.jsx(Fs,{size:16,className:"nav-arrow"})]},b.id)})})]}),e.jsx("div",{className:"settings-content",children:e.jsx(H,{mode:"wait",children:w()})})]}),e.jsx("style",{jsx:!0,children:`
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
      `})]})},mi=()=>{const[t,a]=y.useState(!0),[r,n]=y.useState(!1),[s,o]=y.useState({email:"guest@financeai.com",password:"demo123",name:""}),[i,c]=y.useState(!1),{login:l}=Ke(),d=async f=>{f.preventDefault(),c(!0);try{const E=await l(s);E.success?O.success("Welcome to FinanceAI!"):O.error(E.error||"Login failed")}catch{O.error("Something went wrong")}finally{c(!1)}},p=f=>{o({...s,[f.target.name]:f.target.value})};return e.jsxs("div",{className:"auth-container",children:[e.jsxs(j.div,{className:"auth-card",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},children:[e.jsxs("div",{className:"auth-header",children:[e.jsxs(j.div,{className:"logo",initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},children:[e.jsx("div",{className:"logo-icon",children:"💰"}),e.jsx("h1",{children:"FinanceAI"})]}),e.jsx(j.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},children:t?"Welcome back!":"Create your account"})]}),e.jsxs(j.form,{className:"auth-form",onSubmit:d,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},children:[!t&&e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Name"}),e.jsxs("div",{className:"input-container",children:[e.jsx(Ct,{size:18,className:"input-icon"}),e.jsx("input",{type:"text",name:"name",value:s.name,onChange:p,className:"form-input",placeholder:"Enter your name",required:!t})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Email"}),e.jsxs("div",{className:"input-container",children:[e.jsx(_s,{size:18,className:"input-icon"}),e.jsx("input",{type:"email",name:"email",value:s.email,onChange:p,className:"form-input",placeholder:"Enter your email",required:!0})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Password"}),e.jsxs("div",{className:"input-container",children:[e.jsx(jt,{size:18,className:"input-icon"}),e.jsx("input",{type:r?"text":"password",name:"password",value:s.password,onChange:p,className:"form-input",placeholder:"Enter your password",required:!0}),e.jsx("button",{type:"button",className:"password-toggle",onClick:()=>n(!r),children:r?e.jsx(La,{size:18}):e.jsx($a,{size:18})})]})]}),e.jsx(j.button,{type:"submit",className:"auth-submit",disabled:i,whileHover:{scale:1.02},whileTap:{scale:.98},children:i?"Please wait...":t?"Sign In":"Sign Up"})]}),e.jsx(j.div,{className:"auth-footer",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:e.jsxs("p",{children:[t?"Don't have an account? ":"Already have an account? ",e.jsx("button",{type:"button",className:"auth-toggle",onClick:()=>a(!t),children:t?"Sign Up":"Sign In"})]})}),e.jsxs("div",{className:"demo-notice",children:[e.jsx("p",{children:"🎯 Demo Account"}),e.jsx("p",{children:"Email: guest@financeai.com"}),e.jsx("p",{children:"Password: demo123"})]})]}),e.jsx("style",{jsx:!0,children:`
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
      `})]})};function gi(){const[t,a]=y.useState(!0);return y.useEffect(()=>{(async()=>{try{await new Promise(n=>setTimeout(n,2e3))}catch(n){console.error("App initialization failed:",n)}finally{a(!1)}})()},[]),t?e.jsx(Va,{}):e.jsx(Ka,{children:e.jsx(Vr,{children:e.jsx(Wr,{children:e.jsx(hi,{})})})})}const hi=()=>{const{isAuthenticated:t,loading:a}=Ke();return a?e.jsx(Va,{}):e.jsx(Ts,{children:e.jsx(Cs,{children:e.jsxs(Rs,{children:[e.jsx(H,{mode:"wait",children:t?e.jsx(fi,{}):e.jsx(xi,{})}),e.jsx(qr,{position:"top-right",toastOptions:{duration:4e3,style:{background:"var(--card-bg)",color:"var(--text-primary)",border:"1px solid var(--border-color)",borderRadius:"12px",boxShadow:"0 10px 40px rgba(0, 0, 0, 0.1)"},success:{iconTheme:{primary:"var(--success-color)",secondary:"white"}},error:{iconTheme:{primary:"var(--error-color)",secondary:"white"}}}})]})})})},fi=()=>{const[t,a]=y.useState(!0),[r,n]=y.useState(!1),[s,o]=y.useState(!1);return y.useEffect(()=>{const i=()=>{const c=window.innerWidth<=768;o(c),c&&a(!1)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),e.jsxs(j.div,{className:"app-layout",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[e.jsx(ri,{isOpen:t,onToggle:()=>a(!t)}),e.jsxs("div",{className:`main-content ${t?"sidebar-open":"sidebar-closed"} ${s?"mobile":""}`,children:[e.jsx(ni,{onMenuToggle:()=>a(!t),onChatbotToggle:()=>n(!r),isChatbotOpen:r}),e.jsx(j.main,{className:"page-container",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{duration:.4,delay:.1},children:e.jsxs(Zt,{children:[e.jsx(ae,{path:"/",element:e.jsx(ci,{})}),e.jsx(ae,{path:"/transactions",element:e.jsx(li,{})}),e.jsx(ae,{path:"/budgets",element:e.jsx(di,{})}),e.jsx(ae,{path:"/analytics",element:e.jsx(pi,{})}),e.jsx(ae,{path:"/settings",element:e.jsx(ui,{})}),e.jsx(ae,{path:"*",element:e.jsx(Qt,{to:"/",replace:!0})})]})}),e.jsx(si,{isOpen:r,onToggle:()=>n(!r)}),e.jsx(ii,{})]})]})},xi=()=>e.jsx(j.div,{className:"auth-layout",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.5},children:e.jsxs(Zt,{children:[e.jsx(ae,{path:"/login",element:e.jsx(mi,{})}),e.jsx(ae,{path:"*",element:e.jsx(Qt,{to:"/login",replace:!0})})]})});pt.createRoot(document.getElementById("root")).render(e.jsx(Ja.StrictMode,{children:e.jsx(gi,{})}));
//# sourceMappingURL=index-3ab70c00.js.map
