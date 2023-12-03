(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function xs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const le={},Rn=[],Ze=()=>{},Mf=()=>!1,Df=/^on[^a-z]/,Ar=t=>Df.test(t),so=t=>t.startsWith("onUpdate:"),me=Object.assign,io=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Uf=Object.prototype.hasOwnProperty,se=(t,e)=>Uf.call(t,e),V=Array.isArray,Pn=t=>Wn(t)==="[object Map]",gn=t=>Wn(t)==="[object Set]",ia=t=>Wn(t)==="[object Date]",Ff=t=>Wn(t)==="[object RegExp]",X=t=>typeof t=="function",ge=t=>typeof t=="string",Mn=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",oo=t=>(fe(t)||X(t))&&X(t.then)&&X(t.catch),Dc=Object.prototype.toString,Wn=t=>Dc.call(t),Bf=t=>Wn(t).slice(8,-1),Uc=t=>Wn(t)==="[object Object]",ao=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,sr=xs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ls=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$f=/-(\w)/g,De=Ls(t=>t.replace($f,(e,n)=>n?n.toUpperCase():"")),Hf=/\B([A-Z])/g,Ke=Ls(t=>t.replace(Hf,"-$1").toLowerCase()),Or=Ls(t=>t.charAt(0).toUpperCase()+t.slice(1)),ir=Ls(t=>t?`on${Or(t)}`:""),jt=(t,e)=>!Object.is(t,e),An=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},fs=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ds=t=>{const e=parseFloat(t);return isNaN(e)?t:e},hs=t=>{const e=ge(t)?Number(t):NaN;return isNaN(e)?t:e};let oa;const Ri=()=>oa||(oa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),jf="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",Vf=xs(jf);function kr(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ge(r)?qf(r):kr(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ge(t)||fe(t))return t}const Wf=/;(?![^(]*\))/g,Kf=/:([^]+)/,zf=/\/\*[^]*?\*\//g;function qf(t){const e={};return t.replace(zf,"").split(Wf).forEach(n=>{if(n){const r=n.split(Kf);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Kn(t){let e="";if(ge(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const r=Kn(t[n]);r&&(e+=r+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Gf(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ge(e)&&(t.class=Kn(e)),n&&(t.style=kr(n)),t}const Yf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jf=xs(Yf);function Fc(t){return!!t||t===""}function Xf(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Vt(t[r],e[r]);return n}function Vt(t,e){if(t===e)return!0;let n=ia(t),r=ia(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Mn(t),r=Mn(e),n||r)return t===e;if(n=V(t),r=V(e),n||r)return n&&r?Xf(t,e):!1;if(n=fe(t),r=fe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Vt(t[o],e[o]))return!1}}return String(t)===String(e)}function Ms(t,e){return t.findIndex(n=>Vt(n,e))}const mr=t=>ge(t)?t:t==null?"":V(t)||fe(t)&&(t.toString===Dc||!X(t.toString))?JSON.stringify(t,Bc,2):String(t),Bc=(t,e)=>e&&e.__v_isRef?Bc(t,e.value):Pn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:gn(e)?{[`Set(${e.size})`]:[...e.values()]}:fe(e)&&!V(e)&&!Uc(e)?String(e):e;let Be;class co{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Be,!e&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Be;try{return Be=this,e()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function lo(t){return new co(t)}function $c(t,e=Be){e&&e.active&&e.effects.push(t)}function uo(){return Be}function Hc(t){Be&&Be.cleanups.push(t)}const fo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},jc=t=>(t.w&Wt)>0,Vc=t=>(t.n&Wt)>0,Qf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Wt},Zf=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];jc(s)&&!Vc(s)?s.delete(t):e[n++]=s,s.w&=~Wt,s.n&=~Wt}e.length=n}},ps=new WeakMap;let Zn=0,Wt=1;const Pi=30;let Je;const rn=Symbol(""),Ai=Symbol("");class Dn{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$c(this,r)}run(){if(!this.active)return this.fn();let e=Je,n=Ft;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Je,Je=this,Ft=!0,Wt=1<<++Zn,Zn<=Pi?Qf(this):aa(this),this.fn()}finally{Zn<=Pi&&Zf(this),Wt=1<<--Zn,Je=this.parent,Ft=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Je===this?this.deferStop=!0:this.active&&(aa(this),this.onStop&&this.onStop(),this.active=!1)}}function aa(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function ed(t,e){t.effect instanceof Dn&&(t=t.effect.fn);const n=new Dn(t);e&&(me(n,e),e.scope&&$c(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function td(t){t.effect.stop()}let Ft=!0;const Wc=[];function zn(){Wc.push(Ft),Ft=!1}function qn(){const t=Wc.pop();Ft=t===void 0?!0:t}function Ue(t,e,n){if(Ft&&Je){let r=ps.get(t);r||ps.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=fo()),Kc(s)}}function Kc(t,e){let n=!1;Zn<=Pi?Vc(t)||(t.n|=Wt,n=!jc(t)):n=!t.has(Je),n&&(t.add(Je),Je.deps.push(t))}function gt(t,e,n,r,s,i){const o=ps.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Mn(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?ao(n)&&a.push(o.get("length")):(a.push(o.get(rn)),Pn(t)&&a.push(o.get(Ai)));break;case"delete":V(t)||(a.push(o.get(rn)),Pn(t)&&a.push(o.get(Ai)));break;case"set":Pn(t)&&a.push(o.get(rn));break}if(a.length===1)a[0]&&Oi(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Oi(fo(c))}}function Oi(t,e){const n=V(t)?t:[...t];for(const r of n)r.computed&&ca(r);for(const r of n)r.computed||ca(r)}function ca(t,e){(t!==Je||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function nd(t,e){var n;return(n=ps.get(t))==null?void 0:n.get(e)}const rd=xs("__proto__,__v_isRef,__isVue"),zc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mn)),la=sd();function sd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ee(this);for(let i=0,o=this.length;i<o;i++)Ue(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ee)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){zn();const r=ee(this)[e].apply(this,n);return qn(),r}}),t}function id(t){const e=ee(this);return Ue(e,"has",t),e.hasOwnProperty(t)}class qc{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?Zc:Qc:i?Xc:Jc).get(e))return e;const o=V(e);if(!s){if(o&&se(la,n))return Reflect.get(la,n,r);if(n==="hasOwnProperty")return id}const a=Reflect.get(e,n,r);return(Mn(n)?zc.has(n):rd(n))||(s||Ue(e,"get",n),i)?a:pe(a)?o&&ao(n)?a:a.value:fe(a)?s?mo(a):_n(a):a}}class Gc extends qc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(cn(i)&&pe(i)&&!pe(r))return!1;if(!this._shallow&&(!gr(r)&&!cn(r)&&(i=ee(i),r=ee(r)),!V(e)&&pe(i)&&!pe(r)))return i.value=r,!0;const o=V(e)&&ao(n)?Number(n)<e.length:se(e,n),a=Reflect.set(e,n,r,s);return e===ee(s)&&(o?jt(r,i)&&gt(e,"set",n,r):gt(e,"add",n,r)),a}deleteProperty(e,n){const r=se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&gt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Mn(n)||!zc.has(n))&&Ue(e,"has",n),r}ownKeys(e){return Ue(e,"iterate",V(e)?"length":rn),Reflect.ownKeys(e)}}class Yc extends qc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const od=new Gc,ad=new Yc,cd=new Gc(!0),ld=new Yc(!0),ho=t=>t,Ds=t=>Reflect.getPrototypeOf(t);function zr(t,e,n=!1,r=!1){t=t.__v_raw;const s=ee(t),i=ee(e);n||(jt(e,i)&&Ue(s,"get",e),Ue(s,"get",i));const{has:o}=Ds(s),a=r?ho:n?_o:_r;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function qr(t,e=!1){const n=this.__v_raw,r=ee(n),s=ee(t);return e||(jt(t,s)&&Ue(r,"has",t),Ue(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Gr(t,e=!1){return t=t.__v_raw,!e&&Ue(ee(t),"iterate",rn),Reflect.get(t,"size",t)}function ua(t){t=ee(t);const e=ee(this);return Ds(e).has.call(e,t)||(e.add(t),gt(e,"add",t,t)),this}function fa(t,e){e=ee(e);const n=ee(this),{has:r,get:s}=Ds(n);let i=r.call(n,t);i||(t=ee(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?jt(e,o)&&gt(n,"set",t,e):gt(n,"add",t,e),this}function da(t){const e=ee(this),{has:n,get:r}=Ds(e);let s=n.call(e,t);s||(t=ee(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&gt(e,"delete",t,void 0),i}function ha(){const t=ee(this),e=t.size!==0,n=t.clear();return e&&gt(t,"clear",void 0,void 0),n}function Yr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ee(o),c=e?ho:t?_o:_r;return!t&&Ue(a,"iterate",rn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Jr(t,e,n){return function(...r){const s=this.__v_raw,i=ee(s),o=Pn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ho:e?_o:_r;return!e&&Ue(i,"iterate",c?Ai:rn),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Ct(t){return function(...e){return t==="delete"?!1:this}}function ud(){const t={get(i){return zr(this,i)},get size(){return Gr(this)},has:qr,add:ua,set:fa,delete:da,clear:ha,forEach:Yr(!1,!1)},e={get(i){return zr(this,i,!1,!0)},get size(){return Gr(this)},has:qr,add:ua,set:fa,delete:da,clear:ha,forEach:Yr(!1,!0)},n={get(i){return zr(this,i,!0)},get size(){return Gr(this,!0)},has(i){return qr.call(this,i,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:Yr(!0,!1)},r={get(i){return zr(this,i,!0,!0)},get size(){return Gr(this,!0)},has(i){return qr.call(this,i,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:Yr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Jr(i,!1,!1),n[i]=Jr(i,!0,!1),e[i]=Jr(i,!1,!0),r[i]=Jr(i,!0,!0)}),[t,n,e,r]}const[fd,dd,hd,pd]=ud();function Us(t,e){const n=e?t?pd:hd:t?dd:fd;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(se(n,s)&&s in r?n:r,s,i)}const md={get:Us(!1,!1)},gd={get:Us(!1,!0)},_d={get:Us(!0,!1)},yd={get:Us(!0,!0)},Jc=new WeakMap,Xc=new WeakMap,Qc=new WeakMap,Zc=new WeakMap;function vd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bd(t){return t.__v_skip||!Object.isExtensible(t)?0:vd(Bf(t))}function _n(t){return cn(t)?t:Fs(t,!1,od,md,Jc)}function po(t){return Fs(t,!1,cd,gd,Xc)}function mo(t){return Fs(t,!0,ad,_d,Qc)}function Ed(t){return Fs(t,!0,ld,yd,Zc)}function Fs(t,e,n,r,s){if(!fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=bd(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function ot(t){return cn(t)?ot(t.__v_raw):!!(t&&t.__v_isReactive)}function cn(t){return!!(t&&t.__v_isReadonly)}function gr(t){return!!(t&&t.__v_isShallow)}function go(t){return ot(t)||cn(t)}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function Nr(t){return fs(t,"__v_skip",!0),t}const _r=t=>fe(t)?_n(t):t,_o=t=>fe(t)?mo(t):t;function yo(t){Ft&&Je&&(t=ee(t),Kc(t.dep||(t.dep=fo())))}function Bs(t,e){t=ee(t);const n=t.dep;n&&Oi(n)}function pe(t){return!!(t&&t.__v_isRef===!0)}function ue(t){return tl(t,!1)}function el(t){return tl(t,!0)}function tl(t,e){return pe(t)?t:new wd(t,e)}class wd{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ee(e),this._value=n?e:_r(e)}get value(){return yo(this),this._value}set value(e){const n=this.__v_isShallow||gr(e)||cn(e);e=n?e:ee(e),jt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:_r(e),Bs(this))}}function Id(t){Bs(t)}function we(t){return pe(t)?t.value:t}function Td(t){return X(t)?t():we(t)}const Cd={get:(t,e,n)=>we(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return pe(s)&&!pe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function vo(t){return ot(t)?t:new Proxy(t,Cd)}class Sd{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>yo(this),()=>Bs(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function Rd(t){return new Sd(t)}function nl(t){const e=V(t)?new Array(t.length):{};for(const n in t)e[n]=sl(t,n);return e}class Pd{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return nd(ee(this._object),this._key)}}class Ad{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function rl(t,e,n){return pe(t)?t:X(t)?new Ad(t):fe(t)&&arguments.length>1?sl(t,e,n):ue(t)}function sl(t,e,n){const r=t[e];return pe(r)?r:new Pd(t,e,n)}class Od{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Dn(e,()=>{this._dirty||(this._dirty=!0,Bs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ee(this);return yo(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function kd(t,e,n=!1){let r,s;const i=X(t);return i?(r=t,s=Ze):(r=t.get,s=t.set),new Od(r,s,i||!s,n)}function Nd(t,...e){}function xd(t,e){}function _t(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){yn(i,e,n)}return s}function je(t,e,n,r){if(X(t)){const i=_t(t,e,n,r);return i&&oo(i)&&i.catch(o=>{yn(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(je(t[i],e,n,r));return s}function yn(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){_t(c,null,10,[t,o,a]);return}}Ld(t,n,s,r)}function Ld(t,e,n,r=!0){console.error(t)}let yr=!1,ki=!1;const Re=[];let it=0;const On=[];let dt=null,Zt=0;const il=Promise.resolve();let bo=null;function xr(t){const e=bo||il;return t?e.then(this?t.bind(this):t):e}function Md(t){let e=it+1,n=Re.length;for(;e<n;){const r=e+n>>>1,s=Re[r],i=vr(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function $s(t){(!Re.length||!Re.includes(t,yr&&t.allowRecurse?it+1:it))&&(t.id==null?Re.push(t):Re.splice(Md(t.id),0,t),ol())}function ol(){!yr&&!ki&&(ki=!0,bo=il.then(al))}function Dd(t){const e=Re.indexOf(t);e>it&&Re.splice(e,1)}function ms(t){V(t)?On.push(...t):(!dt||!dt.includes(t,t.allowRecurse?Zt+1:Zt))&&On.push(t),ol()}function pa(t,e=yr?it+1:0){for(;e<Re.length;e++){const n=Re[e];n&&n.pre&&(Re.splice(e,1),e--,n())}}function gs(t){if(On.length){const e=[...new Set(On)];if(On.length=0,dt){dt.push(...e);return}for(dt=e,dt.sort((n,r)=>vr(n)-vr(r)),Zt=0;Zt<dt.length;Zt++)dt[Zt]();dt=null,Zt=0}}const vr=t=>t.id==null?1/0:t.id,Ud=(t,e)=>{const n=vr(t)-vr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function al(t){ki=!1,yr=!0,Re.sort(Ud);const e=Ze;try{for(it=0;it<Re.length;it++){const n=Re[it];n&&n.active!==!1&&_t(n,null,14)}}finally{it=0,Re.length=0,gs(),yr=!1,bo=null,(Re.length||On.length)&&al()}}let Cn,Xr=[];function cl(t,e){var n,r;Cn=t,Cn?(Cn.enabled=!0,Xr.forEach(({event:s,args:i})=>Cn.emit(s,...i)),Xr=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{cl(i,e)}),setTimeout(()=>{Cn||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Xr=[])},3e3)):Xr=[]}function Fd(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||le;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=r[u]||le;d&&(s=n.map(_=>ge(_)?_.trim():_)),f&&(s=n.map(ds))}let a,c=r[a=ir(e)]||r[a=ir(De(e))];!c&&i&&(c=r[a=ir(Ke(e))]),c&&je(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,je(l,t,6,s)}}function ll(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=ll(l,e,!0);u&&(a=!0,me(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(fe(t)&&r.set(t,null),null):(V(i)?i.forEach(c=>o[c]=null):me(o,i),fe(t)&&r.set(t,o),o)}function Hs(t,e){return!t||!Ar(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Ke(e))||se(t,e))}let Ie=null,js=null;function br(t){const e=Ie;return Ie=t,js=t&&t.type.__scopeId||null,e}function Bd(t){js=t}function $d(){js=null}const Hd=t=>Vs;function Vs(t,e=Ie,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Fi(-1);const i=br(e);let o;try{o=t(...s)}finally{br(i),r._d&&Fi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function is(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:d,setupState:_,ctx:E,inheritAttrs:A}=t;let U,M;const I=br(t);try{if(n.shapeFlag&4){const h=s||r;U=$e(u.call(h,h,f,i,_,d,E)),M=c}else{const h=e;U=$e(h.length>1?h(i,{attrs:c,slots:a,emit:l}):h(i,null)),M=e.props?c:Vd(c)}}catch(h){lr.length=0,yn(h,t,1),U=oe(Pe)}let g=U;if(M&&A!==!1){const h=Object.keys(M),{shapeFlag:b}=g;h.length&&b&7&&(o&&h.some(so)&&(M=Wd(M,o)),g=lt(g,M))}return n.dirs&&(g=lt(g),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&(g.transition=n.transition),U=g,br(I),U}function jd(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Kt(r)){if(r.type!==Pe||r.children==="v-if"){if(e)return;e=r}}else return}return e}const Vd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ar(n))&&((e||(e={}))[n]=t[n]);return e},Wd=(t,e)=>{const n={};for(const r in t)(!so(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Kd(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ma(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!Hs(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ma(r,o,l):!0:!!o;return!1}function ma(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Hs(n,i))return!0}return!1}function Eo({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ul=t=>t.__isSuspense,zd={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){t==null?Gd(e,n,r,s,i,o,a,c,l):Yd(t,e,n,r,s,o,a,c,l)},hydrate:Jd,create:wo,normalize:Xd},qd=zd;function Er(t,e){const n=t.props&&t.props[e];X(n)&&n()}function Gd(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:u}}=c,f=u("div"),d=t.suspense=wo(t,s,r,e,f,n,i,o,a,c);l(null,d.pendingBranch=t.ssContent,f,null,r,d,i,o),d.deps>0?(Er(t,"onPending"),Er(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),kn(d,t.ssFallback)):d.resolve(!1,!0)}function Yd(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const d=e.ssContent,_=e.ssFallback,{activeBranch:E,pendingBranch:A,isInFallback:U,isHydrating:M}=f;if(A)f.pendingBranch=d,Xe(d,A)?(c(A,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():U&&(c(E,_,n,r,s,null,i,o,a),kn(f,_))):(f.pendingId++,M?(f.isHydrating=!1,f.activeBranch=A):l(A,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),U?(c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(c(E,_,n,r,s,null,i,o,a),kn(f,_))):E&&Xe(d,E)?(c(E,d,n,r,s,f,i,o,a),f.resolve(!0)):(c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(E&&Xe(d,E))c(E,d,n,r,s,f,i,o,a),kn(f,d);else if(Er(e,"onPending"),f.pendingBranch=d,f.pendingId++,c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:I,pendingId:g}=f;I>0?setTimeout(()=>{f.pendingId===g&&f.fallback(_)},I):I===0&&f.fallback(_)}}function wo(t,e,n,r,s,i,o,a,c,l,u=!1){const{p:f,m:d,um:_,n:E,o:{parentNode:A,remove:U}}=l;let M;const I=Qd(t);I&&e!=null&&e.pendingBranch&&(M=e.pendingId,e.deps++);const g=t.props?hs(t.props.timeout):void 0,h={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof g=="number"?g:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(b=!1,C=!1){const{vnode:k,activeBranch:T,pendingBranch:y,pendingId:w,effects:N,parentComponent:P,container:W}=h;let re=!1;if(h.isHydrating)h.isHydrating=!1;else if(!b){re=T&&y.transition&&y.transition.mode==="out-in",re&&(T.transition.afterLeave=()=>{w===h.pendingId&&(d(y,W,Q,0),ms(N))});let{anchor:Q}=h;T&&(Q=E(T),_(T,P,h,!0)),re||d(y,W,Q,0)}kn(h,y),h.pendingBranch=null,h.isInFallback=!1;let ne=h.parent,$=!1;for(;ne;){if(ne.pendingBranch){ne.effects.push(...N),$=!0;break}ne=ne.parent}!$&&!re&&ms(N),h.effects=[],I&&e&&e.pendingBranch&&M===e.pendingId&&(e.deps--,e.deps===0&&!C&&e.resolve()),Er(k,"onResolve")},fallback(b){if(!h.pendingBranch)return;const{vnode:C,activeBranch:k,parentComponent:T,container:y,isSVG:w}=h;Er(C,"onFallback");const N=E(k),P=()=>{h.isInFallback&&(f(null,b,y,N,T,null,w,a,c),kn(h,b))},W=b.transition&&b.transition.mode==="out-in";W&&(k.transition.afterLeave=P),h.isInFallback=!0,_(k,T,null,!0),W||P()},move(b,C,k){h.activeBranch&&d(h.activeBranch,b,C,k),h.container=b},next(){return h.activeBranch&&E(h.activeBranch)},registerDep(b,C){const k=!!h.pendingBranch;k&&h.deps++;const T=b.vnode.el;b.asyncDep.catch(y=>{yn(y,b,0)}).then(y=>{if(b.isUnmounted||h.isUnmounted||h.pendingId!==b.suspenseId)return;b.asyncResolved=!0;const{vnode:w}=b;Bi(b,y,!1),T&&(w.el=T);const N=!T&&b.subTree.el;C(b,w,A(T||b.subTree.el),T?null:E(b.subTree),h,o,c),N&&U(N),Eo(b,w.el),k&&--h.deps===0&&h.resolve()})},unmount(b,C){h.isUnmounted=!0,h.activeBranch&&_(h.activeBranch,n,b,C),h.pendingBranch&&_(h.pendingBranch,n,b,C)}};return h}function Jd(t,e,n,r,s,i,o,a,c){const l=e.suspense=wo(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function Xd(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=ga(r?n.default:n),t.ssFallback=r?ga(n.fallback):oe(Pe)}function ga(t){let e;if(X(t)){const n=fn&&t._c;n&&(t._d=!1,be()),t=t(),n&&(t._d=!0,e=Me,Vl())}return V(t)&&(t=jd(t)),t=$e(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function fl(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):ms(t)}function kn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,Eo(r,s))}function Qd(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function dl(t,e){return Lr(t,null,e)}function hl(t,e){return Lr(t,null,{flush:"post"})}function Zd(t,e){return Lr(t,null,{flush:"sync"})}const Qr={};function yt(t,e,n){return Lr(t,e,n)}function Lr(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=le){var a;const c=uo()===((a=Ee)==null?void 0:a.scope)?Ee:null;let l,u=!1,f=!1;if(pe(t)?(l=()=>t.value,u=gr(t)):ot(t)?(l=()=>t,r=!0):V(t)?(f=!0,u=t.some(h=>ot(h)||gr(h)),l=()=>t.map(h=>{if(pe(h))return h.value;if(ot(h))return tn(h);if(X(h))return _t(h,c,2)})):X(t)?e?l=()=>_t(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),je(t,c,3,[_])}:l=Ze,e&&r){const h=l;l=()=>tn(h())}let d,_=h=>{d=I.onStop=()=>{_t(h,c,4)}},E;if(Fn)if(_=Ze,e?n&&je(e,c,3,[l(),f?[]:void 0,_]):l(),s==="sync"){const h=tu();E=h.__watcherHandles||(h.__watcherHandles=[])}else return Ze;let A=f?new Array(t.length).fill(Qr):Qr;const U=()=>{if(I.active)if(e){const h=I.run();(r||u||(f?h.some((b,C)=>jt(b,A[C])):jt(h,A)))&&(d&&d(),je(e,c,3,[h,A===Qr?void 0:f&&A[0]===Qr?[]:A,_]),A=h)}else I.run()};U.allowRecurse=!!e;let M;s==="sync"?M=U:s==="post"?M=()=>Te(U,c&&c.suspense):(U.pre=!0,c&&(U.id=c.uid),M=()=>$s(U));const I=new Dn(l,M);e?n?U():A=I.run():s==="post"?Te(I.run.bind(I),c&&c.suspense):I.run();const g=()=>{I.stop(),c&&c.scope&&io(c.scope.effects,I)};return E&&E.push(g),g}function eh(t,e,n){const r=this.proxy,s=ge(t)?t.includes(".")?pl(r,t):()=>r[t]:t.bind(r,r);let i;X(e)?i=e:(i=e.handler,n=e);const o=Ee;zt(this);const a=Lr(s,i.bind(r),n);return o?zt(o):Bt(),a}function pl(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function tn(t,e){if(!fe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),pe(t))tn(t.value,e);else if(V(t))for(let n=0;n<t.length;n++)tn(t[n],e);else if(gn(t)||Pn(t))t.forEach(n=>{tn(n,e)});else if(Uc(t))for(const n in t)tn(t[n],e);return t}function Io(t,e){const n=Ie;if(n===null)return t;const r=Qs(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=le]=e[i];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&tn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function st(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(zn(),je(c,n,8,[t.el,a,t,e]),qn())}}const Nt=Symbol("_leaveCb"),Zr=Symbol("_enterCb");function To(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vn(()=>{t.isMounted=!0}),qs(()=>{t.isUnmounting=!0}),t}const We=[Function,Array],Co={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:We,onEnter:We,onAfterEnter:We,onEnterCancelled:We,onBeforeLeave:We,onLeave:We,onAfterLeave:We,onLeaveCancelled:We,onBeforeAppear:We,onAppear:We,onAfterAppear:We,onAppearCancelled:We},th={name:"BaseTransition",props:Co,setup(t,{slots:e}){const n=Et(),r=To();let s;return()=>{const i=e.default&&Ws(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const A of i)if(A.type!==Pe){o=A;break}}const a=ee(t),{mode:c}=a;if(r.isLeaving)return ci(o);const l=_a(o);if(!l)return ci(o);const u=Un(l,a,r,n);ln(l,u);const f=n.subTree,d=f&&_a(f);let _=!1;const{getTransitionKey:E}=l.type;if(E){const A=E();s===void 0?s=A:A!==s&&(s=A,_=!0)}if(d&&d.type!==Pe&&(!Xe(l,d)||_)){const A=Un(d,a,r,n);if(ln(d,A),c==="out-in")return r.isLeaving=!0,A.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},ci(o);c==="in-out"&&l.type!==Pe&&(A.delayLeave=(U,M,I)=>{const g=gl(r,d);g[String(d.key)]=d,U[Nt]=()=>{M(),U[Nt]=void 0,delete u.delayedLeave},u.delayedLeave=I})}return o}}},ml=th;function gl(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Un(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:_,onLeaveCancelled:E,onBeforeAppear:A,onAppear:U,onAfterAppear:M,onAppearCancelled:I}=e,g=String(t.key),h=gl(n,t),b=(T,y)=>{T&&je(T,r,9,y)},C=(T,y)=>{const w=y[1];b(T,y),V(T)?T.every(N=>N.length<=1)&&w():T.length<=1&&w()},k={mode:i,persisted:o,beforeEnter(T){let y=a;if(!n.isMounted)if(s)y=A||a;else return;T[Nt]&&T[Nt](!0);const w=h[g];w&&Xe(t,w)&&w.el[Nt]&&w.el[Nt](),b(y,[T])},enter(T){let y=c,w=l,N=u;if(!n.isMounted)if(s)y=U||c,w=M||l,N=I||u;else return;let P=!1;const W=T[Zr]=re=>{P||(P=!0,re?b(N,[T]):b(w,[T]),k.delayedLeave&&k.delayedLeave(),T[Zr]=void 0)};y?C(y,[T,W]):W()},leave(T,y){const w=String(t.key);if(T[Zr]&&T[Zr](!0),n.isUnmounting)return y();b(f,[T]);let N=!1;const P=T[Nt]=W=>{N||(N=!0,y(),W?b(E,[T]):b(_,[T]),T[Nt]=void 0,h[w]===t&&delete h[w])};h[w]=t,d?C(d,[T,P]):P()},clone(T){return Un(T,e,n,r)}};return k}function ci(t){if(Dr(t))return t=lt(t),t.children=null,t}function _a(t){return Dr(t)?t.children?t.children[0]:void 0:t}function ln(t,e){t.shapeFlag&6&&t.component?ln(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ws(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ye?(o.patchFlag&128&&s++,r=r.concat(Ws(o.children,e,a))):(e||o.type!==Pe)&&r.push(a!=null?lt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Mr(t,e){return X(t)?(()=>me({name:t.name},e,{setup:t}))():t}const sn=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function nh(t){X(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=t;let c=null,l,u=0;const f=()=>(u++,c=null,d()),d=()=>{let _;return c||(_=c=e().catch(E=>{if(E=E instanceof Error?E:new Error(String(E)),a)return new Promise((A,U)=>{a(E,()=>A(f()),()=>U(E),u+1)});throw E}).then(E=>_!==c&&c?c:(E&&(E.__esModule||E[Symbol.toStringTag]==="Module")&&(E=E.default),l=E,E)))};return Mr({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return l},setup(){const _=Ee;if(l)return()=>li(l,_);const E=I=>{c=null,yn(I,_,13,!r)};if(o&&_.suspense||Fn)return d().then(I=>()=>li(I,_)).catch(I=>(E(I),()=>r?oe(r,{error:I}):null));const A=ue(!1),U=ue(),M=ue(!!s);return s&&setTimeout(()=>{M.value=!1},s),i!=null&&setTimeout(()=>{if(!A.value&&!U.value){const I=new Error(`Async component timed out after ${i}ms.`);E(I),U.value=I}},i),d().then(()=>{A.value=!0,_.parent&&Dr(_.parent.vnode)&&$s(_.parent.update)}).catch(I=>{E(I),U.value=I}),()=>{if(A.value&&l)return li(l,_);if(U.value&&r)return oe(r,{error:U.value});if(n&&!M.value)return oe(n)}}})}function li(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=oe(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Dr=t=>t.type.__isKeepAlive,rh={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Et(),r=n.ctx;if(!r.renderer)return()=>{const I=e.default&&e.default();return I&&I.length===1?I[0]:I};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:f}}}=r,d=f("div");r.activate=(I,g,h,b,C)=>{const k=I.component;l(I,g,h,0,a),c(k.vnode,I,g,h,k,a,b,I.slotScopeIds,C),Te(()=>{k.isDeactivated=!1,k.a&&An(k.a);const T=I.props&&I.props.onVnodeMounted;T&&Le(T,k.parent,I)},a)},r.deactivate=I=>{const g=I.component;l(I,d,null,1,a),Te(()=>{g.da&&An(g.da);const h=I.props&&I.props.onVnodeUnmounted;h&&Le(h,g.parent,I),g.isDeactivated=!0},a)};function _(I){ui(I),u(I,n,a,!0)}function E(I){s.forEach((g,h)=>{const b=Hi(g.type);b&&(!I||!I(b))&&A(h)})}function A(I){const g=s.get(I);!o||!Xe(g,o)?_(g):o&&ui(o),s.delete(I),i.delete(I)}yt(()=>[t.include,t.exclude],([I,g])=>{I&&E(h=>er(I,h)),g&&E(h=>!er(g,h))},{flush:"post",deep:!0});let U=null;const M=()=>{U!=null&&s.set(U,fi(n.subTree))};return vn(M),zs(M),qs(()=>{s.forEach(I=>{const{subTree:g,suspense:h}=n,b=fi(g);if(I.type===b.type&&I.key===b.key){ui(b);const C=b.component.da;C&&Te(C,h);return}_(I)})}),()=>{if(U=null,!e.default)return null;const I=e.default(),g=I[0];if(I.length>1)return o=null,I;if(!Kt(g)||!(g.shapeFlag&4)&&!(g.shapeFlag&128))return o=null,g;let h=fi(g);const b=h.type,C=Hi(sn(h)?h.type.__asyncResolved||{}:b),{include:k,exclude:T,max:y}=t;if(k&&(!C||!er(k,C))||T&&C&&er(T,C))return o=h,g;const w=h.key==null?b:h.key,N=s.get(w);return h.el&&(h=lt(h),g.shapeFlag&128&&(g.ssContent=h)),U=w,N?(h.el=N.el,h.component=N.component,h.transition&&ln(h,h.transition),h.shapeFlag|=512,i.delete(w),i.add(w)):(i.add(w),y&&i.size>parseInt(y,10)&&A(i.values().next().value)),h.shapeFlag|=256,o=h,ul(g.type)?g:h}}},sh=rh;function er(t,e){return V(t)?t.some(n=>er(n,e)):ge(t)?t.split(",").includes(e):Ff(t)?t.test(e):!1}function _l(t,e){vl(t,"a",e)}function yl(t,e){vl(t,"da",e)}function vl(t,e,n=Ee){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ks(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Dr(s.parent.vnode)&&ih(r,e,n,s),s=s.parent}}function ih(t,e,n,r){const s=Ks(e,t,r,!0);Gs(()=>{io(r[e],s)},n)}function ui(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function fi(t){return t.shapeFlag&128?t.ssContent:t}function Ks(t,e,n=Ee,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;zn(),zt(n);const a=je(e,n,t,o);return Bt(),qn(),a});return r?s.unshift(i):s.push(i),i}}const bt=t=>(e,n=Ee)=>(!Fn||t==="sp")&&Ks(t,(...r)=>e(...r),n),bl=bt("bm"),vn=bt("m"),El=bt("bu"),zs=bt("u"),qs=bt("bum"),Gs=bt("um"),wl=bt("sp"),Il=bt("rtg"),Tl=bt("rtc");function Cl(t,e=Ee){Ks("ec",t,e)}const So="components",oh="directives";function Sl(t,e){return Ro(So,t,!0,e)||t}const Rl=Symbol.for("v-ndc");function ah(t){return ge(t)?Ro(So,t,!1)||t:t||Rl}function ch(t){return Ro(oh,t)}function Ro(t,e,n=!0,r=!1){const s=Ie||Ee;if(s){const i=s.type;if(t===So){const a=Hi(i,!1);if(a&&(a===e||a===De(e)||a===Or(De(e))))return i}const o=ya(s[t]||i[t],e)||ya(s.appContext[t],e);return!o&&r?i:o}}function ya(t,e){return t&&(t[e]||t[De(e)]||t[Or(De(e))])}function _s(t,e,n,r){let s;const i=n&&n[r];if(V(t)||ge(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(fe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function lh(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(V(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return t}function uh(t,e,n={},r,s){if(Ie.isCE||Ie.parent&&sn(Ie.parent)&&Ie.parent.isCE)return e!=="default"&&(n.name=e),oe("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),be();const o=i&&Pl(i(n)),a=Ys(ye,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Pl(t){return t.some(e=>Kt(e)?!(e.type===Pe||e.type===ye&&!Pl(e.children)):!0)?t:null}function fh(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:ir(r)]=t[r];return n}const Ni=t=>t?Jl(t)?Qs(t)||t.proxy:Ni(t.parent):null,or=me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ni(t.parent),$root:t=>Ni(t.root),$emit:t=>t.emit,$options:t=>Po(t),$forceUpdate:t=>t.f||(t.f=()=>$s(t.update)),$nextTick:t=>t.n||(t.n=xr.bind(t.proxy)),$watch:t=>eh.bind(t)}),di=(t,e)=>t!==le&&!t.__isScriptSetup&&se(t,e),xi={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(di(r,e))return o[e]=1,r[e];if(s!==le&&se(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&se(l,e))return o[e]=3,i[e];if(n!==le&&se(n,e))return o[e]=4,n[e];Li&&(o[e]=0)}}const u=or[e];let f,d;if(u)return e==="$attrs"&&Ue(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==le&&se(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,se(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return di(s,e)?(s[e]=n,!0):r!==le&&se(r,e)?(r[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==le&&se(t,o)||di(e,o)||(a=i[0])&&se(a,o)||se(r,o)||se(or,o)||se(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},dh=me({},xi,{get(t,e){if(e!==Symbol.unscopables)return xi.get(t,e,t)},has(t,e){return e[0]!=="_"&&!Vf(e)}});function hh(){return null}function ph(){return null}function mh(t){}function gh(t){}function _h(){return null}function yh(){}function vh(t,e){return null}function bh(){return Al().slots}function Eh(){return Al().attrs}function wh(t,e,n){const r=Et();if(n&&n.local){const s=ue(t[e]);return yt(()=>t[e],i=>s.value=i),yt(s,i=>{i!==t[e]&&r.emit(`update:${e}`,i)}),s}else return{__v_isRef:!0,get value(){return t[e]},set value(s){r.emit(`update:${e}`,s)}}}function Al(){const t=Et();return t.setupContext||(t.setupContext=Zl(t))}function wr(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Ih(t,e){const n=wr(t);for(const r in e){if(r.startsWith("__skip"))continue;let s=n[r];s?V(s)||X(s)?s=n[r]={type:s,default:e[r]}:s.default=e[r]:s===null&&(s=n[r]={default:e[r]}),s&&e[`__skip_${r}`]&&(s.skipFactory=!0)}return n}function Th(t,e){return!t||!e?t||e:V(t)&&V(e)?t.concat(e):me({},wr(t),wr(e))}function Ch(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function Sh(t){const e=Et();let n=t();return Bt(),oo(n)&&(n=n.catch(r=>{throw zt(e),r})),[n,()=>zt(e)]}let Li=!0;function Rh(t){const e=Po(t),n=t.proxy,r=t.ctx;Li=!1,e.beforeCreate&&va(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:_,updated:E,activated:A,deactivated:U,beforeDestroy:M,beforeUnmount:I,destroyed:g,unmounted:h,render:b,renderTracked:C,renderTriggered:k,errorCaptured:T,serverPrefetch:y,expose:w,inheritAttrs:N,components:P,directives:W,filters:re}=e;if(l&&Ph(l,r,null),o)for(const Q in o){const z=o[Q];X(z)&&(r[Q]=z.bind(n))}if(s){const Q=s.call(n,n);fe(Q)&&(t.data=_n(Q))}if(Li=!0,i)for(const Q in i){const z=i[Q],Ge=X(z)?z.bind(n,n):X(z.get)?z.get.bind(n,n):Ze,Tt=!X(z)&&X(z.set)?z.set.bind(n):Ze,nt=He({get:Ge,set:Tt});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>nt.value,set:xe=>nt.value=xe})}if(a)for(const Q in a)Ol(a[Q],r,n,Q);if(c){const Q=X(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(z=>{ar(z,Q[z])})}u&&va(u,t,"c");function $(Q,z){V(z)?z.forEach(Ge=>Q(Ge.bind(n))):z&&Q(z.bind(n))}if($(bl,f),$(vn,d),$(El,_),$(zs,E),$(_l,A),$(yl,U),$(Cl,T),$(Tl,C),$(Il,k),$(qs,I),$(Gs,h),$(wl,y),V(w))if(w.length){const Q=t.exposed||(t.exposed={});w.forEach(z=>{Object.defineProperty(Q,z,{get:()=>n[z],set:Ge=>n[z]=Ge})})}else t.exposed||(t.exposed={});b&&t.render===Ze&&(t.render=b),N!=null&&(t.inheritAttrs=N),P&&(t.components=P),W&&(t.directives=W)}function Ph(t,e,n=Ze){V(t)&&(t=Mi(t));for(const r in t){const s=t[r];let i;fe(s)?"default"in s?i=Ve(s.from||r,s.default,!0):i=Ve(s.from||r):i=Ve(s),pe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function va(t,e,n){je(V(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ol(t,e,n,r){const s=r.includes(".")?pl(n,r):()=>n[r];if(ge(t)){const i=e[t];X(i)&&yt(s,i)}else if(X(t))yt(s,t.bind(n));else if(fe(t))if(V(t))t.forEach(i=>Ol(i,e,n,r));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&yt(s,i,t)}}function Po(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>ys(c,l,o,!0)),ys(c,e,o)),fe(e)&&i.set(e,c),c}function ys(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ys(t,i,n,!0),s&&s.forEach(o=>ys(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Ah[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ah={data:ba,props:Ea,emits:Ea,methods:tr,computed:tr,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:tr,directives:tr,watch:kh,provide:ba,inject:Oh};function ba(t,e){return e?t?function(){return me(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function Oh(t,e){return tr(Mi(t),Mi(e))}function Mi(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ke(t,e){return t?[...new Set([].concat(t,e))]:e}function tr(t,e){return t?me(Object.create(null),t,e):e}function Ea(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:me(Object.create(null),wr(t),wr(e??{})):e}function kh(t,e){if(!t)return e;if(!e)return t;const n=me(Object.create(null),t);for(const r in e)n[r]=ke(t[r],e[r]);return n}function kl(){return{app:null,config:{isNativeTag:Mf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nh=0;function xh(t,e){return function(r,s=null){X(r)||(r=me({},r)),s!=null&&!fe(s)&&(s=null);const i=kl(),o=new WeakSet;let a=!1;const c=i.app={_uid:Nh++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ru,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const d=oe(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,f),a=!0,c._container=l,l.__vue_app__=c,Qs(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Ir=c;try{return l()}finally{Ir=null}}};return c}}let Ir=null;function ar(t,e){if(Ee){let n=Ee.provides;const r=Ee.parent&&Ee.parent.provides;r===n&&(n=Ee.provides=Object.create(r)),n[t]=e}}function Ve(t,e,n=!1){const r=Ee||Ie;if(r||Ir){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ir._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&X(e)?e.call(r&&r.proxy):e}}function Nl(){return!!(Ee||Ie||Ir)}function Lh(t,e,n,r=!1){const s={},i={};fs(i,Js,1),t.propsDefaults=Object.create(null),xl(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:po(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Mh(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ee(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Hs(t.emitsOptions,d))continue;const _=e[d];if(c)if(se(i,d))_!==i[d]&&(i[d]=_,l=!0);else{const E=De(d);s[E]=Di(c,a,E,_,t,!1)}else _!==i[d]&&(i[d]=_,l=!0)}}}else{xl(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!se(e,f)&&((u=Ke(f))===f||!se(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Di(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!se(e,f))&&(delete i[f],l=!0)}l&&gt(t,"set","$attrs")}function xl(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(sr(c))continue;const l=e[c];let u;s&&se(s,u=De(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Hs(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ee(n),l=a||le;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Di(s,c,f,l[f],t,!se(l,f))}}return o}function Di(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&X(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(zt(s),r=l[n]=c.call(null,e),Bt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ke(n))&&(r=!0))}return r}function Ll(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=f=>{c=!0;const[d,_]=Ll(f,e,!0);me(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return fe(t)&&r.set(t,Rn),Rn;if(V(i))for(let u=0;u<i.length;u++){const f=De(i[u]);wa(f)&&(o[f]=le)}else if(i)for(const u in i){const f=De(u);if(wa(f)){const d=i[u],_=o[f]=V(d)||X(d)?{type:d}:me({},d);if(_){const E=Ca(Boolean,_.type),A=Ca(String,_.type);_[0]=E>-1,_[1]=A<0||E<A,(E>-1||se(_,"default"))&&a.push(f)}}}const l=[o,a];return fe(t)&&r.set(t,l),l}function wa(t){return t[0]!=="$"}function Ia(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ta(t,e){return Ia(t)===Ia(e)}function Ca(t,e){return V(e)?e.findIndex(n=>Ta(n,t)):X(e)&&Ta(e,t)?0:-1}const Ml=t=>t[0]==="_"||t==="$stable",Ao=t=>V(t)?t.map($e):[$e(t)],Dh=(t,e,n)=>{if(e._n)return e;const r=Vs((...s)=>Ao(e(...s)),n);return r._c=!1,r},Dl=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ml(s))continue;const i=t[s];if(X(i))e[s]=Dh(s,i,r);else if(i!=null){const o=Ao(i);e[s]=()=>o}}},Ul=(t,e)=>{const n=Ao(e);t.slots.default=()=>n},Uh=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ee(e),fs(e,"_",n)):Dl(e,t.slots={})}else t.slots={},e&&Ul(t,e);fs(t.slots,Js,1)},Fh=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=le;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(me(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Dl(e,s)),o=e}else e&&(Ul(t,e),o={default:1});if(i)for(const a in s)!Ml(a)&&o[a]==null&&delete s[a]};function vs(t,e,n,r,s=!1){if(V(t)){t.forEach((d,_)=>vs(d,e&&(V(e)?e[_]:e),n,r,s));return}if(sn(r)&&!s)return;const i=r.shapeFlag&4?Qs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===le?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(ge(l)?(u[l]=null,se(f,l)&&(f[l]=null)):pe(l)&&(l.value=null)),X(c))_t(c,a,12,[o,u]);else{const d=ge(c),_=pe(c);if(d||_){const E=()=>{if(t.f){const A=d?se(f,c)?f[c]:u[c]:c.value;s?V(A)&&io(A,i):V(A)?A.includes(i)||A.push(i):d?(u[c]=[i],se(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,se(f,c)&&(f[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Te(E,n)):E()}}}let St=!1;const es=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",ts=t=>t.nodeType===8;function Bh(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:l}}=t,u=(g,h)=>{if(!h.hasChildNodes()){n(null,g,h),gs(),h._vnode=g;return}St=!1,f(h.firstChild,g,null,null,null),gs(),h._vnode=g,St&&console.error("Hydration completed but contains mismatches.")},f=(g,h,b,C,k,T=!1)=>{const y=ts(g)&&g.data==="[",w=()=>A(g,h,b,C,k,y),{type:N,ref:P,shapeFlag:W,patchFlag:re}=h;let ne=g.nodeType;h.el=g,re===-2&&(T=!1,h.dynamicChildren=null);let $=null;switch(N){case un:ne!==3?h.children===""?(c(h.el=s(""),o(g),g),$=g):$=w():(g.data!==h.children&&(St=!0,g.data=h.children),$=i(g));break;case Pe:if(ne!==8||y)if(g.tagName.toLowerCase()==="template"){const Q=h.el.content.firstChild;M(Q,g,b),h.el=g=Q,$=i(g)}else $=w();else $=i(g);break;case on:if(y&&(g=i(g),ne=g.nodeType),ne===1||ne===3){$=g;const Q=!h.children.length;for(let z=0;z<h.staticCount;z++)Q&&(h.children+=$.nodeType===1?$.outerHTML:$.data),z===h.staticCount-1&&(h.anchor=$),$=i($);return y?i($):$}else w();break;case ye:y?$=E(g,h,b,C,k,T):$=w();break;default:if(W&1)(ne!==1||h.type.toLowerCase()!==g.tagName.toLowerCase())&&!I(g)?$=w():$=d(g,h,b,C,k,T);else if(W&6){h.slotScopeIds=k;const Q=o(g);if(y?$=U(g):ts(g)&&g.data==="teleport start"?$=U(g,g.data,"teleport end"):$=i(g),e(h,Q,null,b,C,es(Q),T),sn(h)){let z;y?(z=oe(ye),z.anchor=$?$.previousSibling:Q.lastChild):z=g.nodeType===3?Xs(""):oe("div"),z.el=g,h.component.subTree=z}}else W&64?ne!==8?$=w():$=h.type.hydrate(g,h,b,C,k,T,t,_):W&128&&($=h.type.hydrate(g,h,b,C,es(o(g)),k,T,t,f))}return P!=null&&vs(P,null,C,h),$},d=(g,h,b,C,k,T)=>{T=T||!!h.dynamicChildren;const{type:y,props:w,patchFlag:N,shapeFlag:P,dirs:W,transition:re}=h,ne=y==="input"&&W||y==="option";if(ne||N!==-1){if(W&&st(h,null,b,"created"),w)if(ne||!T||N&48)for(const z in w)(ne&&z.endsWith("value")||Ar(z)&&!sr(z))&&r(g,z,null,w[z],!1,void 0,b);else w.onClick&&r(g,"onClick",null,w.onClick,!1,void 0,b);let $;($=w&&w.onVnodeBeforeMount)&&Le($,b,h);let Q=!1;if(I(g)){Q=Hl(C,re)&&b&&b.vnode.props&&b.vnode.props.appear;const z=g.content.firstChild;Q&&re.beforeEnter(z),M(z,g,b),h.el=g=z}if(W&&st(h,null,b,"beforeMount"),(($=w&&w.onVnodeMounted)||W||Q)&&fl(()=>{$&&Le($,b,h),Q&&re.enter(g),W&&st(h,null,b,"mounted")},C),P&16&&!(w&&(w.innerHTML||w.textContent))){let z=_(g.firstChild,h,g,b,C,k,T);for(;z;){St=!0;const Ge=z;z=z.nextSibling,a(Ge)}}else P&8&&g.textContent!==h.children&&(St=!0,g.textContent=h.children)}return g.nextSibling},_=(g,h,b,C,k,T,y)=>{y=y||!!h.dynamicChildren;const w=h.children,N=w.length;for(let P=0;P<N;P++){const W=y?w[P]:w[P]=$e(w[P]);if(g)g=f(g,W,C,k,T,y);else{if(W.type===un&&!W.children)continue;St=!0,n(null,W,b,null,C,k,es(b),T)}}return g},E=(g,h,b,C,k,T)=>{const{slotScopeIds:y}=h;y&&(k=k?k.concat(y):y);const w=o(g),N=_(i(g),h,w,b,C,k,T);return N&&ts(N)&&N.data==="]"?i(h.anchor=N):(St=!0,c(h.anchor=l("]"),w,N),N)},A=(g,h,b,C,k,T)=>{if(St=!0,h.el=null,T){const N=U(g);for(;;){const P=i(g);if(P&&P!==N)a(P);else break}}const y=i(g),w=o(g);return a(g),n(null,h,w,y,b,C,es(w),k),y},U=(g,h="[",b="]")=>{let C=0;for(;g;)if(g=i(g),g&&ts(g)&&(g.data===h&&C++,g.data===b)){if(C===0)return i(g);C--}return g},M=(g,h,b)=>{const C=h.parentNode;C&&C.replaceChild(g,h);let k=b;for(;k;)k.vnode.el===h&&(k.vnode.el=g,k.subTree.el=g),k=k.parent},I=g=>g.nodeType===1&&g.tagName.toLowerCase()==="template";return[u,f]}const Te=fl;function Fl(t){return $l(t)}function Bl(t){return $l(t,Bh)}function $l(t,e){const n=Ri();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:_=Ze,insertStaticContent:E}=t,A=(p,m,v,S=null,O=null,x=null,H=!1,D=null,F=!!m.dynamicChildren)=>{if(p===m)return;p&&!Xe(p,m)&&(S=R(p),xe(p,O,x,!0),p=null),m.patchFlag===-2&&(F=!1,m.dynamicChildren=null);const{type:L,ref:G,shapeFlag:K}=m;switch(L){case un:U(p,m,v,S);break;case Pe:M(p,m,v,S);break;case on:p==null&&I(m,v,S,H);break;case ye:P(p,m,v,S,O,x,H,D,F);break;default:K&1?b(p,m,v,S,O,x,H,D,F):K&6?W(p,m,v,S,O,x,H,D,F):(K&64||K&128)&&L.process(p,m,v,S,O,x,H,D,F,B)}G!=null&&O&&vs(G,p&&p.ref,x,m||p,!m)},U=(p,m,v,S)=>{if(p==null)r(m.el=a(m.children),v,S);else{const O=m.el=p.el;m.children!==p.children&&l(O,m.children)}},M=(p,m,v,S)=>{p==null?r(m.el=c(m.children||""),v,S):m.el=p.el},I=(p,m,v,S)=>{[p.el,p.anchor]=E(p.children,m,v,S,p.el,p.anchor)},g=({el:p,anchor:m},v,S)=>{let O;for(;p&&p!==m;)O=d(p),r(p,v,S),p=O;r(m,v,S)},h=({el:p,anchor:m})=>{let v;for(;p&&p!==m;)v=d(p),s(p),p=v;s(m)},b=(p,m,v,S,O,x,H,D,F)=>{H=H||m.type==="svg",p==null?C(m,v,S,O,x,H,D,F):y(p,m,O,x,H,D,F)},C=(p,m,v,S,O,x,H,D)=>{let F,L;const{type:G,props:K,shapeFlag:Y,transition:Z,dirs:te}=p;if(F=p.el=o(p.type,x,K&&K.is,K),Y&8?u(F,p.children):Y&16&&T(p.children,F,null,S,O,x&&G!=="foreignObject",H,D),te&&st(p,null,S,"created"),k(F,p,p.scopeId,H,S),K){for(const ce in K)ce!=="value"&&!sr(ce)&&i(F,ce,null,K[ce],x,p.children,S,O,Ce);"value"in K&&i(F,"value",null,K.value),(L=K.onVnodeBeforeMount)&&Le(L,S,p)}te&&st(p,null,S,"beforeMount");const he=Hl(O,Z);he&&Z.beforeEnter(F),r(F,m,v),((L=K&&K.onVnodeMounted)||he||te)&&Te(()=>{L&&Le(L,S,p),he&&Z.enter(F),te&&st(p,null,S,"mounted")},O)},k=(p,m,v,S,O)=>{if(v&&_(p,v),S)for(let x=0;x<S.length;x++)_(p,S[x]);if(O){let x=O.subTree;if(m===x){const H=O.vnode;k(p,H,H.scopeId,H.slotScopeIds,O.parent)}}},T=(p,m,v,S,O,x,H,D,F=0)=>{for(let L=F;L<p.length;L++){const G=p[L]=D?xt(p[L]):$e(p[L]);A(null,G,m,v,S,O,x,H,D)}},y=(p,m,v,S,O,x,H)=>{const D=m.el=p.el;let{patchFlag:F,dynamicChildren:L,dirs:G}=m;F|=p.patchFlag&16;const K=p.props||le,Y=m.props||le;let Z;v&&Jt(v,!1),(Z=Y.onVnodeBeforeUpdate)&&Le(Z,v,m,p),G&&st(m,p,v,"beforeUpdate"),v&&Jt(v,!0);const te=O&&m.type!=="foreignObject";if(L?w(p.dynamicChildren,L,D,v,S,te,x):H||z(p,m,D,null,v,S,te,x,!1),F>0){if(F&16)N(D,m,K,Y,v,S,O);else if(F&2&&K.class!==Y.class&&i(D,"class",null,Y.class,O),F&4&&i(D,"style",K.style,Y.style,O),F&8){const he=m.dynamicProps;for(let ce=0;ce<he.length;ce++){const ve=he[ce],Ye=K[ve],wn=Y[ve];(wn!==Ye||ve==="value")&&i(D,ve,Ye,wn,O,p.children,v,S,Ce)}}F&1&&p.children!==m.children&&u(D,m.children)}else!H&&L==null&&N(D,m,K,Y,v,S,O);((Z=Y.onVnodeUpdated)||G)&&Te(()=>{Z&&Le(Z,v,m,p),G&&st(m,p,v,"updated")},S)},w=(p,m,v,S,O,x,H)=>{for(let D=0;D<m.length;D++){const F=p[D],L=m[D],G=F.el&&(F.type===ye||!Xe(F,L)||F.shapeFlag&70)?f(F.el):v;A(F,L,G,null,S,O,x,H,!0)}},N=(p,m,v,S,O,x,H)=>{if(v!==S){if(v!==le)for(const D in v)!sr(D)&&!(D in S)&&i(p,D,v[D],null,H,m.children,O,x,Ce);for(const D in S){if(sr(D))continue;const F=S[D],L=v[D];F!==L&&D!=="value"&&i(p,D,L,F,H,m.children,O,x,Ce)}"value"in S&&i(p,"value",v.value,S.value)}},P=(p,m,v,S,O,x,H,D,F)=>{const L=m.el=p?p.el:a(""),G=m.anchor=p?p.anchor:a("");let{patchFlag:K,dynamicChildren:Y,slotScopeIds:Z}=m;Z&&(D=D?D.concat(Z):Z),p==null?(r(L,v,S),r(G,v,S),T(m.children,v,G,O,x,H,D,F)):K>0&&K&64&&Y&&p.dynamicChildren?(w(p.dynamicChildren,Y,v,O,x,H,D),(m.key!=null||O&&m===O.subTree)&&Oo(p,m,!0)):z(p,m,v,G,O,x,H,D,F)},W=(p,m,v,S,O,x,H,D,F)=>{m.slotScopeIds=D,p==null?m.shapeFlag&512?O.ctx.activate(m,v,S,H,F):re(m,v,S,O,x,H,F):ne(p,m,F)},re=(p,m,v,S,O,x,H)=>{const D=p.component=Yl(p,S,O);if(Dr(p)&&(D.ctx.renderer=B),Xl(D),D.asyncDep){if(O&&O.registerDep(D,$),!p.el){const F=D.subTree=oe(Pe);M(null,F,m,v)}return}$(D,p,m,v,O,x,H)},ne=(p,m,v)=>{const S=m.component=p.component;if(Kd(p,m,v))if(S.asyncDep&&!S.asyncResolved){Q(S,m,v);return}else S.next=m,Dd(S.update),S.update();else m.el=p.el,S.vnode=m},$=(p,m,v,S,O,x,H)=>{const D=()=>{if(p.isMounted){let{next:G,bu:K,u:Y,parent:Z,vnode:te}=p,he=G,ce;Jt(p,!1),G?(G.el=te.el,Q(p,G,H)):G=te,K&&An(K),(ce=G.props&&G.props.onVnodeBeforeUpdate)&&Le(ce,Z,G,te),Jt(p,!0);const ve=is(p),Ye=p.subTree;p.subTree=ve,A(Ye,ve,f(Ye.el),R(Ye),p,O,x),G.el=ve.el,he===null&&Eo(p,ve.el),Y&&Te(Y,O),(ce=G.props&&G.props.onVnodeUpdated)&&Te(()=>Le(ce,Z,G,te),O)}else{let G;const{el:K,props:Y}=m,{bm:Z,m:te,parent:he}=p,ce=sn(m);if(Jt(p,!1),Z&&An(Z),!ce&&(G=Y&&Y.onVnodeBeforeMount)&&Le(G,he,m),Jt(p,!0),K&&ie){const ve=()=>{p.subTree=is(p),ie(K,p.subTree,p,O,null)};ce?m.type.__asyncLoader().then(()=>!p.isUnmounted&&ve()):ve()}else{const ve=p.subTree=is(p);A(null,ve,v,S,p,O,x),m.el=ve.el}if(te&&Te(te,O),!ce&&(G=Y&&Y.onVnodeMounted)){const ve=m;Te(()=>Le(G,he,ve),O)}(m.shapeFlag&256||he&&sn(he.vnode)&&he.vnode.shapeFlag&256)&&p.a&&Te(p.a,O),p.isMounted=!0,m=v=S=null}},F=p.effect=new Dn(D,()=>$s(L),p.scope),L=p.update=()=>F.run();L.id=p.uid,Jt(p,!0),L()},Q=(p,m,v)=>{m.component=p;const S=p.vnode.props;p.vnode=m,p.next=null,Mh(p,m.props,S,v),Fh(p,m.children,v),zn(),pa(),qn()},z=(p,m,v,S,O,x,H,D,F=!1)=>{const L=p&&p.children,G=p?p.shapeFlag:0,K=m.children,{patchFlag:Y,shapeFlag:Z}=m;if(Y>0){if(Y&128){Tt(L,K,v,S,O,x,H,D,F);return}else if(Y&256){Ge(L,K,v,S,O,x,H,D,F);return}}Z&8?(G&16&&Ce(L,O,x),K!==L&&u(v,K)):G&16?Z&16?Tt(L,K,v,S,O,x,H,D,F):Ce(L,O,x,!0):(G&8&&u(v,""),Z&16&&T(K,v,S,O,x,H,D,F))},Ge=(p,m,v,S,O,x,H,D,F)=>{p=p||Rn,m=m||Rn;const L=p.length,G=m.length,K=Math.min(L,G);let Y;for(Y=0;Y<K;Y++){const Z=m[Y]=F?xt(m[Y]):$e(m[Y]);A(p[Y],Z,v,null,O,x,H,D,F)}L>G?Ce(p,O,x,!0,!1,K):T(m,v,S,O,x,H,D,F,K)},Tt=(p,m,v,S,O,x,H,D,F)=>{let L=0;const G=m.length;let K=p.length-1,Y=G-1;for(;L<=K&&L<=Y;){const Z=p[L],te=m[L]=F?xt(m[L]):$e(m[L]);if(Xe(Z,te))A(Z,te,v,null,O,x,H,D,F);else break;L++}for(;L<=K&&L<=Y;){const Z=p[K],te=m[Y]=F?xt(m[Y]):$e(m[Y]);if(Xe(Z,te))A(Z,te,v,null,O,x,H,D,F);else break;K--,Y--}if(L>K){if(L<=Y){const Z=Y+1,te=Z<G?m[Z].el:S;for(;L<=Y;)A(null,m[L]=F?xt(m[L]):$e(m[L]),v,te,O,x,H,D,F),L++}}else if(L>Y)for(;L<=K;)xe(p[L],O,x,!0),L++;else{const Z=L,te=L,he=new Map;for(L=te;L<=Y;L++){const Fe=m[L]=F?xt(m[L]):$e(m[L]);Fe.key!=null&&he.set(Fe.key,L)}let ce,ve=0;const Ye=Y-te+1;let wn=!1,na=0;const Gn=new Array(Ye);for(L=0;L<Ye;L++)Gn[L]=0;for(L=Z;L<=K;L++){const Fe=p[L];if(ve>=Ye){xe(Fe,O,x,!0);continue}let rt;if(Fe.key!=null)rt=he.get(Fe.key);else for(ce=te;ce<=Y;ce++)if(Gn[ce-te]===0&&Xe(Fe,m[ce])){rt=ce;break}rt===void 0?xe(Fe,O,x,!0):(Gn[rt-te]=L+1,rt>=na?na=rt:wn=!0,A(Fe,m[rt],v,null,O,x,H,D,F),ve++)}const ra=wn?$h(Gn):Rn;for(ce=ra.length-1,L=Ye-1;L>=0;L--){const Fe=te+L,rt=m[Fe],sa=Fe+1<G?m[Fe+1].el:S;Gn[L]===0?A(null,rt,v,sa,O,x,H,D,F):wn&&(ce<0||L!==ra[ce]?nt(rt,v,sa,2):ce--)}}},nt=(p,m,v,S,O=null)=>{const{el:x,type:H,transition:D,children:F,shapeFlag:L}=p;if(L&6){nt(p.component.subTree,m,v,S);return}if(L&128){p.suspense.move(m,v,S);return}if(L&64){H.move(p,m,v,B);return}if(H===ye){r(x,m,v);for(let K=0;K<F.length;K++)nt(F[K],m,v,S);r(p.anchor,m,v);return}if(H===on){g(p,m,v);return}if(S!==2&&L&1&&D)if(S===0)D.beforeEnter(x),r(x,m,v),Te(()=>D.enter(x),O);else{const{leave:K,delayLeave:Y,afterLeave:Z}=D,te=()=>r(x,m,v),he=()=>{K(x,()=>{te(),Z&&Z()})};Y?Y(x,te,he):he()}else r(x,m,v)},xe=(p,m,v,S=!1,O=!1)=>{const{type:x,props:H,ref:D,children:F,dynamicChildren:L,shapeFlag:G,patchFlag:K,dirs:Y}=p;if(D!=null&&vs(D,null,v,p,!0),G&256){m.ctx.deactivate(p);return}const Z=G&1&&Y,te=!sn(p);let he;if(te&&(he=H&&H.onVnodeBeforeUnmount)&&Le(he,m,p),G&6)Kr(p.component,v,S);else{if(G&128){p.suspense.unmount(v,S);return}Z&&st(p,null,m,"beforeUnmount"),G&64?p.type.remove(p,m,v,O,B,S):L&&(x!==ye||K>0&&K&64)?Ce(L,m,v,!1,!0):(x===ye&&K&384||!O&&G&16)&&Ce(F,m,v),S&&bn(p)}(te&&(he=H&&H.onVnodeUnmounted)||Z)&&Te(()=>{he&&Le(he,m,p),Z&&st(p,null,m,"unmounted")},v)},bn=p=>{const{type:m,el:v,anchor:S,transition:O}=p;if(m===ye){En(v,S);return}if(m===on){h(p);return}const x=()=>{s(v),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(p.shapeFlag&1&&O&&!O.persisted){const{leave:H,delayLeave:D}=O,F=()=>H(v,x);D?D(p.el,x,F):F()}else x()},En=(p,m)=>{let v;for(;p!==m;)v=d(p),s(p),p=v;s(m)},Kr=(p,m,v)=>{const{bum:S,scope:O,update:x,subTree:H,um:D}=p;S&&An(S),O.stop(),x&&(x.active=!1,xe(H,p,m,v)),D&&Te(D,m),Te(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Ce=(p,m,v,S=!1,O=!1,x=0)=>{for(let H=x;H<p.length;H++)xe(p[H],m,v,S,O)},R=p=>p.shapeFlag&6?R(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),j=(p,m,v)=>{p==null?m._vnode&&xe(m._vnode,null,null,!0):A(m._vnode||null,p,m,null,null,null,v),pa(),gs(),m._vnode=p},B={p:A,um:xe,m:nt,r:bn,mt:re,mc:T,pc:z,pbc:w,n:R,o:t};let q,ie;return e&&([q,ie]=e(B)),{render:j,hydrate:q,createApp:xh(j,q)}}function Jt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Hl(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Oo(t,e,n=!1){const r=t.children,s=e.children;if(V(r)&&V(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=xt(s[i]),a.el=o.el),n||Oo(o,a)),a.type===un&&(a.el=o.el)}}function $h(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Hh=t=>t.__isTeleport,cr=t=>t&&(t.disabled||t.disabled===""),Sa=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Ui=(t,e)=>{const n=t&&t.to;return ge(n)?e?e(n):null:n},jh={__isTeleport:!0,process(t,e,n,r,s,i,o,a,c,l){const{mc:u,pc:f,pbc:d,o:{insert:_,querySelector:E,createText:A,createComment:U}}=l,M=cr(e.props);let{shapeFlag:I,children:g,dynamicChildren:h}=e;if(t==null){const b=e.el=A(""),C=e.anchor=A("");_(b,n,r),_(C,n,r);const k=e.target=Ui(e.props,E),T=e.targetAnchor=A("");k&&(_(T,k),o=o||Sa(k));const y=(w,N)=>{I&16&&u(g,w,N,s,i,o,a,c)};M?y(n,C):k&&y(k,T)}else{e.el=t.el;const b=e.anchor=t.anchor,C=e.target=t.target,k=e.targetAnchor=t.targetAnchor,T=cr(t.props),y=T?n:C,w=T?b:k;if(o=o||Sa(C),h?(d(t.dynamicChildren,h,y,s,i,o,a),Oo(t,e,!0)):c||f(t,e,y,w,s,i,o,a,!1),M)T?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ns(e,n,b,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const N=e.target=Ui(e.props,E);N&&ns(e,N,null,l,0)}else T&&ns(e,C,k,l,1)}jl(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:f,props:d}=t;if(f&&i(u),o&&i(l),a&16){const _=o||!cr(d);for(let E=0;E<c.length;E++){const A=c[E];s(A,e,n,_,!!A.dynamicChildren)}}},move:ns,hydrate:Vh};function ns(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,f=i===2;if(f&&r(o,e,n),(!f||cr(u))&&c&16)for(let d=0;d<l.length;d++)s(l[d],e,n,2);f&&r(a,e,n)}function Vh(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=Ui(e.props,c);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(cr(e.props))e.anchor=l(o(t),e,a(t),n,r,s,i),e.targetAnchor=f;else{e.anchor=o(t);let d=f;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){e.targetAnchor=d,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(f,e,u,n,r,s,i)}jl(e)}return e.anchor&&o(e.anchor)}const Wh=jh;function jl(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const ye=Symbol.for("v-fgt"),un=Symbol.for("v-txt"),Pe=Symbol.for("v-cmt"),on=Symbol.for("v-stc"),lr=[];let Me=null;function be(t=!1){lr.push(Me=t?null:[])}function Vl(){lr.pop(),Me=lr[lr.length-1]||null}let fn=1;function Fi(t){fn+=t}function Wl(t){return t.dynamicChildren=fn>0?Me||Rn:null,Vl(),fn>0&&Me&&Me.push(t),t}function Se(t,e,n,r,s,i){return Wl(_e(t,e,n,r,s,i,!0))}function Ys(t,e,n,r,s){return Wl(oe(t,e,n,r,s,!0))}function Kt(t){return t?t.__v_isVNode===!0:!1}function Xe(t,e){return t.type===e.type&&t.key===e.key}function Kh(t){}const Js="__vInternal",Kl=({key:t})=>t??null,os=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||pe(t)||X(t)?{i:Ie,r:t,k:e,f:!!n}:t:null);function _e(t,e=null,n=null,r=0,s=null,i=t===ye?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kl(e),ref:e&&os(e),scopeId:js,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ie};return a?(ko(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ge(n)?8:16),fn>0&&!o&&Me&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Me.push(c),c}const oe=zh;function zh(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Rl)&&(t=Pe),Kt(t)){const a=lt(t,e,!0);return n&&ko(a,n),fn>0&&!i&&Me&&(a.shapeFlag&6?Me[Me.indexOf(t)]=a:Me.push(a)),a.patchFlag|=-2,a}if(ep(t)&&(t=t.__vccOpts),e){e=zl(e);let{class:a,style:c}=e;a&&!ge(a)&&(e.class=Kn(a)),fe(c)&&(go(c)&&!V(c)&&(c=me({},c)),e.style=kr(c))}const o=ge(t)?1:ul(t)?128:Hh(t)?64:fe(t)?4:X(t)?2:0;return _e(t,e,n,r,s,o,i,!0)}function zl(t){return t?go(t)||Js in t?me({},t):t:null}function lt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Gl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Kl(a),ref:e&&e.ref?n&&s?V(s)?s.concat(os(e)):[s,os(e)]:os(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ye?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&lt(t.ssContent),ssFallback:t.ssFallback&&lt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Xs(t=" ",e=0){return oe(un,null,t,e)}function qh(t,e){const n=oe(on,null,t);return n.staticCount=e,n}function ql(t="",e=!1){return e?(be(),Ys(Pe,null,t)):oe(Pe,null,t)}function $e(t){return t==null||typeof t=="boolean"?oe(Pe):V(t)?oe(ye,null,t.slice()):typeof t=="object"?xt(t):oe(un,null,String(t))}function xt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:lt(t)}function ko(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ko(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Js in e)?e._ctx=Ie:s===3&&Ie&&(Ie.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:Ie},n=32):(e=String(e),r&64?(n=16,e=[Xs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Kn([e.class,r.class]));else if(s==="style")e.style=kr([e.style,r.style]);else if(Ar(s)){const i=e[s],o=r[s];o&&i!==o&&!(V(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Le(t,e,n,r=null){je(t,e,7,[n,r])}const Gh=kl();let Yh=0;function Yl(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Gh,i={uid:Yh++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new co(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ll(r,s),emitsOptions:ll(r,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Fd.bind(null,i),t.ce&&t.ce(i),i}let Ee=null;const Et=()=>Ee||Ie;let No,In,Ra="__VUE_INSTANCE_SETTERS__";(In=Ri()[Ra])||(In=Ri()[Ra]=[]),In.push(t=>Ee=t),No=t=>{In.length>1?In.forEach(e=>e(t)):In[0](t)};const zt=t=>{No(t),t.scope.on()},Bt=()=>{Ee&&Ee.scope.off(),No(null)};function Jl(t){return t.vnode.shapeFlag&4}let Fn=!1;function Xl(t,e=!1){Fn=e;const{props:n,children:r}=t.vnode,s=Jl(t);Lh(t,n,s,e),Uh(t,r);const i=s?Jh(t,e):void 0;return Fn=!1,i}function Jh(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Nr(new Proxy(t.ctx,xi));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Zl(t):null;zt(t),zn();const i=_t(r,t,0,[t.props,s]);if(qn(),Bt(),oo(i)){if(i.then(Bt,Bt),e)return i.then(o=>{Bi(t,o,e)}).catch(o=>{yn(o,t,0)});t.asyncDep=i}else Bi(t,i,e)}else Ql(t,e)}function Bi(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)&&(t.setupState=vo(e)),Ql(t,n)}let bs,$i;function Xh(t){bs=t,$i=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,dh))}}const Qh=()=>!bs;function Ql(t,e,n){const r=t.type;if(!t.render){if(!e&&bs&&!r.render){const s=r.template||Po(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=me(me({isCustomElement:i,delimiters:a},o),c);r.render=bs(s,l)}}t.render=r.render||Ze,$i&&$i(t)}{zt(t),zn();try{Rh(t)}finally{qn(),Bt()}}}function Zh(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ue(t,"get","$attrs"),e[n]}}))}function Zl(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Zh(t)},slots:t.slots,emit:t.emit,expose:e}}function Qs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(vo(Nr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in or)return or[n](t)},has(e,n){return n in e||n in or}}))}function Hi(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function ep(t){return X(t)&&"__vccOpts"in t}const He=(t,e)=>kd(t,e,Fn);function Zs(t,e,n){const r=arguments.length;return r===2?fe(e)&&!V(e)?Kt(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Kt(n)&&(n=[n]),oe(t,e,n))}const eu=Symbol.for("v-scx"),tu=()=>Ve(eu);function tp(){}function np(t,e,n,r){const s=n[r];if(s&&nu(s,t))return s;const i=e();return i.memo=t.slice(),n[r]=i}function nu(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(jt(n[r],e[r]))return!1;return fn>0&&Me&&Me.push(t),!0}const ru="3.3.7",rp={createComponentInstance:Yl,setupComponent:Xl,renderComponentRoot:is,setCurrentRenderingInstance:br,isVNode:Kt,normalizeVNode:$e},sp=rp,ip=null,op=null,ap="http://www.w3.org/2000/svg",en=typeof document<"u"?document:null,Pa=en&&en.createElement("template"),cp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?en.createElementNS(ap,t):en.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>en.createTextNode(t),createComment:t=>en.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>en.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Pa.innerHTML=r?`<svg>${t}</svg>`:t;const a=Pa.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Rt="transition",Yn="animation",Bn=Symbol("_vtc"),xo=(t,{slots:e})=>Zs(ml,iu(t),e);xo.displayName="Transition";const su={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},lp=xo.props=me({},Co,su),Xt=(t,e=[])=>{V(t)?t.forEach(n=>n(...e)):t&&t(...e)},Aa=t=>t?V(t)?t.some(e=>e.length>1):t.length>1:!1;function iu(t){const e={};for(const P in t)P in su||(e[P]=t[P]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,E=up(s),A=E&&E[0],U=E&&E[1],{onBeforeEnter:M,onEnter:I,onEnterCancelled:g,onLeave:h,onLeaveCancelled:b,onBeforeAppear:C=M,onAppear:k=I,onAppearCancelled:T=g}=e,y=(P,W,re)=>{Ot(P,W?u:a),Ot(P,W?l:o),re&&re()},w=(P,W)=>{P._isLeaving=!1,Ot(P,f),Ot(P,_),Ot(P,d),W&&W()},N=P=>(W,re)=>{const ne=P?k:I,$=()=>y(W,P,re);Xt(ne,[W,$]),Oa(()=>{Ot(W,P?c:i),ft(W,P?u:a),Aa(ne)||ka(W,r,A,$)})};return me(e,{onBeforeEnter(P){Xt(M,[P]),ft(P,i),ft(P,o)},onBeforeAppear(P){Xt(C,[P]),ft(P,c),ft(P,l)},onEnter:N(!1),onAppear:N(!0),onLeave(P,W){P._isLeaving=!0;const re=()=>w(P,W);ft(P,f),au(),ft(P,d),Oa(()=>{P._isLeaving&&(Ot(P,f),ft(P,_),Aa(h)||ka(P,r,U,re))}),Xt(h,[P,re])},onEnterCancelled(P){y(P,!1),Xt(g,[P])},onAppearCancelled(P){y(P,!0),Xt(T,[P])},onLeaveCancelled(P){w(P),Xt(b,[P])}})}function up(t){if(t==null)return null;if(fe(t))return[hi(t.enter),hi(t.leave)];{const e=hi(t);return[e,e]}}function hi(t){return hs(t)}function ft(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Bn]||(t[Bn]=new Set)).add(e)}function Ot(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Bn];n&&(n.delete(e),n.size||(t[Bn]=void 0))}function Oa(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let fp=0;function ka(t,e,n,r){const s=t._endId=++fp,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=ou(t,e);if(!o)return r();const l=o+"end";let u=0;const f=()=>{t.removeEventListener(l,d),i()},d=_=>{_.target===t&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),t.addEventListener(l,d)}function ou(t,e){const n=window.getComputedStyle(t),r=E=>(n[E]||"").split(", "),s=r(`${Rt}Delay`),i=r(`${Rt}Duration`),o=Na(s,i),a=r(`${Yn}Delay`),c=r(`${Yn}Duration`),l=Na(a,c);let u=null,f=0,d=0;e===Rt?o>0&&(u=Rt,f=o,d=i.length):e===Yn?l>0&&(u=Yn,f=l,d=c.length):(f=Math.max(o,l),u=f>0?o>l?Rt:Yn:null,d=u?u===Rt?i.length:c.length:0);const _=u===Rt&&/\b(transform|all)(,|$)/.test(r(`${Rt}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:_}}function Na(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>xa(n)+xa(t[r])))}function xa(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function au(){return document.body.offsetHeight}function dp(t,e,n){const r=t[Bn];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Lo=Symbol("_vod"),Mo={beforeMount(t,{value:e},{transition:n}){t[Lo]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Jn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Jn(t,!0),r.enter(t)):r.leave(t,()=>{Jn(t,!1)}):Jn(t,e))},beforeUnmount(t,{value:e}){Jn(t,e)}};function Jn(t,e){t.style.display=e?t[Lo]:"none"}function hp(){Mo.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}function pp(t,e,n){const r=t.style,s=ge(n);if(n&&!s){if(e&&!ge(e))for(const i in e)n[i]==null&&ji(r,i,"");for(const i in n)ji(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),Lo in t&&(r.display=i)}}const La=/\s*!important$/;function ji(t,e,n){if(V(n))n.forEach(r=>ji(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=mp(t,e);La.test(n)?t.setProperty(Ke(r),n.replace(La,""),"important"):t[r]=n}}const Ma=["Webkit","Moz","ms"],pi={};function mp(t,e){const n=pi[e];if(n)return n;let r=De(e);if(r!=="filter"&&r in t)return pi[e]=r;r=Or(r);for(let s=0;s<Ma.length;s++){const i=Ma[s]+r;if(i in t)return pi[e]=i}return e}const Da="http://www.w3.org/1999/xlink";function gp(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Da,e.slice(6,e.length)):t.setAttributeNS(Da,e,n);else{const i=Jf(e);n==null||i&&!Fc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function _p(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Fc(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function ht(t,e,n,r){t.addEventListener(e,n,r)}function yp(t,e,n,r){t.removeEventListener(e,n,r)}const Ua=Symbol("_vei");function vp(t,e,n,r,s=null){const i=t[Ua]||(t[Ua]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=bp(e);if(r){const l=i[e]=Ip(r,s);ht(t,a,l,c)}else o&&(yp(t,a,o,c),i[e]=void 0)}}const Fa=/(?:Once|Passive|Capture)$/;function bp(t){let e;if(Fa.test(t)){e={};let r;for(;r=t.match(Fa);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ke(t.slice(2)),e]}let mi=0;const Ep=Promise.resolve(),wp=()=>mi||(Ep.then(()=>mi=0),mi=Date.now());function Ip(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;je(Tp(r,n.value),e,5,[r])};return n.value=t,n.attached=wp(),n}function Tp(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ba=/^on[a-z]/,Cp=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?dp(t,r,s):e==="style"?pp(t,n,r):Ar(e)?so(e)||vp(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sp(t,e,r,s))?_p(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),gp(t,e,r,s))};function Sp(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ba.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ba.test(e)&&ge(n)?!1:e in t}/*! #__NO_SIDE_EFFECTS__ */function cu(t,e){const n=Mr(t);class r extends ei{constructor(i){super(n,i,e)}}return r.def=n,r}/*! #__NO_SIDE_EFFECTS__ */const Rp=t=>cu(t,yu),Pp=typeof HTMLElement<"u"?HTMLElement:class{};class ei extends Pp{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),xr(()=>{this._connected||(Ki(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);this._ob=new MutationObserver(r=>{for(const s of r)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(r,s=!1)=>{const{props:i,styles:o}=r;let a;if(i&&!V(i))for(const c in i){const l=i[c];(l===Number||l&&l.type===Number)&&(c in this._props&&(this._props[c]=hs(this._props[c])),(a||(a=Object.create(null)))[De(c)]=!0)}this._numberProps=a,s&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>e(r,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,r=V(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&r.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of r.map(De))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(i){this._setProp(s,i)}})}_setAttr(e){let n=this.getAttribute(e);const r=De(e);this._numberProps&&this._numberProps[r]&&(n=hs(n)),this._setProp(r,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(Ke(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Ke(e),n+""):n||this.removeAttribute(Ke(e))))}_update(){Ki(this._createVNode(),this.shadowRoot)}_createVNode(){const e=oe(this._def,me({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const r=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{r(i,o),Ke(i)!==i&&r(Ke(i),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof ei){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function Ap(t="$style"){{const e=Et();if(!e)return le;const n=e.type.__cssModules;if(!n)return le;const r=n[t];return r||le}}function Op(t){const e=Et();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>Wi(i,s))},r=()=>{const s=t(e.proxy);Vi(e.subTree,s),n(s)};hl(r),vn(()=>{const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),Gs(()=>s.disconnect())})}function Vi(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Vi(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Wi(t.el,e);else if(t.type===ye)t.children.forEach(n=>Vi(n,e));else if(t.type===on){let{el:n,anchor:r}=t;for(;n&&(Wi(n,e),n!==r);)n=n.nextSibling}}function Wi(t,e){if(t.nodeType===1){const n=t.style;for(const r in e)n.setProperty(`--${r}`,e[r])}}const lu=new WeakMap,uu=new WeakMap,Es=Symbol("_moveCb"),$a=Symbol("_enterCb"),fu={name:"TransitionGroup",props:me({},lp,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Et(),r=To();let s,i;return zs(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Dp(s[0].el,n.vnode.el,o))return;s.forEach(xp),s.forEach(Lp);const a=s.filter(Mp);au(),a.forEach(c=>{const l=c.el,u=l.style;ft(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=l[Es]=d=>{d&&d.target!==l||(!d||/transform$/.test(d.propertyName))&&(l.removeEventListener("transitionend",f),l[Es]=null,Ot(l,o))};l.addEventListener("transitionend",f)})}),()=>{const o=ee(t),a=iu(o);let c=o.tag||ye;s=i,i=e.default?Ws(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&ln(u,Un(u,a,r,n))}if(s)for(let l=0;l<s.length;l++){const u=s[l];ln(u,Un(u,a,r,n)),lu.set(u,u.el.getBoundingClientRect())}return oe(c,null,i)}}},kp=t=>delete t.mode;fu.props;const Np=fu;function xp(t){const e=t.el;e[Es]&&e[Es](),e[$a]&&e[$a]()}function Lp(t){uu.set(t,t.el.getBoundingClientRect())}function Mp(t){const e=lu.get(t),n=uu.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function Dp(t,e,n){const r=t.cloneNode(),s=t[Bn];s&&s.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=ou(r);return i.removeChild(r),o}const qt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>An(e,n):e};function Up(t){t.target.composing=!0}function Ha(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ze=Symbol("_assign"),ws={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ze]=qt(s);const i=r||s.props&&s.props.type==="number";ht(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ds(a)),t[ze](a)}),n&&ht(t,"change",()=>{t.value=t.value.trim()}),e||(ht(t,"compositionstart",Up),ht(t,"compositionend",Ha),ht(t,"change",Ha))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[ze]=qt(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ds(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Do={deep:!0,created(t,e,n){t[ze]=qt(n),ht(t,"change",()=>{const r=t._modelValue,s=$n(t),i=t.checked,o=t[ze];if(V(r)){const a=Ms(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(gn(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(du(t,i))})},mounted:ja,beforeUpdate(t,e,n){t[ze]=qt(n),ja(t,e,n)}};function ja(t,{value:e,oldValue:n},r){t._modelValue=e,V(e)?t.checked=Ms(e,r.props.value)>-1:gn(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Vt(e,du(t,!0)))}const Uo={created(t,{value:e},n){t.checked=Vt(e,n.props.value),t[ze]=qt(n),ht(t,"change",()=>{t[ze]($n(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[ze]=qt(r),e!==n&&(t.checked=Vt(e,r.props.value))}},Fo={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=gn(e);ht(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ds($n(o)):$n(o));t[ze](t.multiple?s?new Set(i):i:i[0])}),t[ze]=qt(r)},mounted(t,{value:e}){Va(t,e)},beforeUpdate(t,e,n){t[ze]=qt(n)},updated(t,{value:e}){Va(t,e)}};function Va(t,e){const n=t.multiple;if(!(n&&!V(e)&&!gn(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=$n(i);if(n)V(e)?i.selected=Ms(e,o)>-1:i.selected=e.has(o);else if(Vt($n(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function $n(t){return"_value"in t?t._value:t.value}function du(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const hu={created(t,e,n){rs(t,e,n,null,"created")},mounted(t,e,n){rs(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){rs(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){rs(t,e,n,r,"updated")}};function pu(t,e){switch(t){case"SELECT":return Fo;case"TEXTAREA":return ws;default:switch(e){case"checkbox":return Do;case"radio":return Uo;default:return ws}}}function rs(t,e,n,r,s){const o=pu(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}function Fp(){ws.getSSRProps=({value:t})=>({value:t}),Uo.getSSRProps=({value:t},e)=>{if(e.props&&Vt(e.props.value,t))return{checked:!0}},Do.getSSRProps=({value:t},e)=>{if(V(t)){if(e.props&&Ms(t,e.props.value)>-1)return{checked:!0}}else if(gn(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},hu.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=pu(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const Bp=["ctrl","shift","alt","meta"],$p={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Bp.some(n=>t[`${n}Key`]&&!e.includes(n))},Hp=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=$p[e[s]];if(i&&i(n,e))return}return t(n,...r)},jp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Vp=(t,e)=>n=>{if(!("key"in n))return;const r=Ke(n.key);if(e.some(s=>s===r||jp[s]===r))return t(n)},mu=me({patchProp:Cp},cp);let ur,Wa=!1;function gu(){return ur||(ur=Fl(mu))}function _u(){return ur=Wa?ur:Bl(mu),Wa=!0,ur}const Ki=(...t)=>{gu().render(...t)},yu=(...t)=>{_u().hydrate(...t)},vu=(...t)=>{const e=gu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=bu(r);if(!s)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},Wp=(...t)=>{const e=_u().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=bu(r);if(s)return n(s,!0,s instanceof SVGElement)},e};function bu(t){return ge(t)?document.querySelector(t):t}let Ka=!1;const Kp=()=>{Ka||(Ka=!0,Fp(),hp())},zp=()=>{},qp=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:ml,BaseTransitionPropsValidators:Co,Comment:Pe,EffectScope:co,Fragment:ye,KeepAlive:sh,ReactiveEffect:Dn,Static:on,Suspense:qd,Teleport:Wh,Text:un,Transition:xo,TransitionGroup:Np,VueElement:ei,assertNumber:xd,callWithAsyncErrorHandling:je,callWithErrorHandling:_t,camelize:De,capitalize:Or,cloneVNode:lt,compatUtils:op,compile:zp,computed:He,createApp:vu,createBlock:Ys,createCommentVNode:ql,createElementBlock:Se,createElementVNode:_e,createHydrationRenderer:Bl,createPropsRestProxy:Ch,createRenderer:Fl,createSSRApp:Wp,createSlots:lh,createStaticVNode:qh,createTextVNode:Xs,createVNode:oe,customRef:Rd,defineAsyncComponent:nh,defineComponent:Mr,defineCustomElement:cu,defineEmits:ph,defineExpose:mh,defineModel:yh,defineOptions:gh,defineProps:hh,defineSSRCustomElement:Rp,defineSlots:_h,get devtools(){return Cn},effect:ed,effectScope:lo,getCurrentInstance:Et,getCurrentScope:uo,getTransitionRawChildren:Ws,guardReactiveProps:zl,h:Zs,handleError:yn,hasInjectionContext:Nl,hydrate:yu,initCustomFormatter:tp,initDirectivesForSSR:Kp,inject:Ve,isMemoSame:nu,isProxy:go,isReactive:ot,isReadonly:cn,isRef:pe,isRuntimeOnly:Qh,isShallow:gr,isVNode:Kt,markRaw:Nr,mergeDefaults:Ih,mergeModels:Th,mergeProps:Gl,nextTick:xr,normalizeClass:Kn,normalizeProps:Gf,normalizeStyle:kr,onActivated:_l,onBeforeMount:bl,onBeforeUnmount:qs,onBeforeUpdate:El,onDeactivated:yl,onErrorCaptured:Cl,onMounted:vn,onRenderTracked:Tl,onRenderTriggered:Il,onScopeDispose:Hc,onServerPrefetch:wl,onUnmounted:Gs,onUpdated:zs,openBlock:be,popScopeId:$d,provide:ar,proxyRefs:vo,pushScopeId:Bd,queuePostFlushCb:ms,reactive:_n,readonly:mo,ref:ue,registerRuntimeCompiler:Xh,render:Ki,renderList:_s,renderSlot:uh,resolveComponent:Sl,resolveDirective:ch,resolveDynamicComponent:ah,resolveFilter:ip,resolveTransitionHooks:Un,setBlockTracking:Fi,setDevtoolsHook:cl,setTransitionHooks:ln,shallowReactive:po,shallowReadonly:Ed,shallowRef:el,ssrContextKey:eu,ssrUtils:sp,stop:td,toDisplayString:mr,toHandlerKey:ir,toHandlers:fh,toRaw:ee,toRef:rl,toRefs:nl,toValue:Td,transformVNodeArgs:Kh,triggerRef:Id,unref:we,useAttrs:Eh,useCssModule:Ap,useCssVars:Op,useModel:wh,useSSRContext:tu,useSlots:bh,useTransitionState:To,vModelCheckbox:Do,vModelDynamic:hu,vModelRadio:Uo,vModelSelect:Fo,vModelText:ws,vShow:Mo,version:ru,warn:Nd,watch:yt,watchEffect:dl,watchPostEffect:hl,watchSyncEffect:Zd,withAsyncContext:Sh,withCtx:Vs,withDefaults:vh,withDirectives:Io,withKeys:Vp,withMemo:np,withModifiers:Hp,withScopeId:Hd},Symbol.toStringTag,{value:"Module"}));var Gp=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Eu;const ti=t=>Eu=t,wu=Symbol();function zi(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var fr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(fr||(fr={}));function Yp(){const t=lo(!0),e=t.run(()=>ue({}));let n=[],r=[];const s=Nr({install(i){ti(s),s._a=i,i.provide(wu,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Gp?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Iu=()=>{};function za(t,e,n,r=Iu){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&uo()&&Hc(s),s}function Tn(t,...e){t.slice().forEach(n=>{n(...e)})}const Jp=t=>t();function qi(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];zi(s)&&zi(r)&&t.hasOwnProperty(n)&&!pe(r)&&!ot(r)?t[n]=qi(s,r):t[n]=r}return t}const Xp=Symbol();function Qp(t){return!zi(t)||!t.hasOwnProperty(Xp)}const{assign:kt}=Object;function Zp(t){return!!(pe(t)&&t.effect)}function em(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=nl(n.state.value[t]);return kt(u,i,Object.keys(o||{}).reduce((f,d)=>(f[d]=Nr(He(()=>{ti(n);const _=n._s.get(t);return o[d].call(_,_)})),f),{}))}return c=Tu(t,l,e,n,r,!0),c}function Tu(t,e,n={},r,s,i){let o;const a=kt({actions:{}},n),c={deep:!0};let l,u,f=[],d=[],_;const E=r.state.value[t];!i&&!E&&(r.state.value[t]={}),ue({});let A;function U(T){let y;l=u=!1,typeof T=="function"?(T(r.state.value[t]),y={type:fr.patchFunction,storeId:t,events:_}):(qi(r.state.value[t],T),y={type:fr.patchObject,payload:T,storeId:t,events:_});const w=A=Symbol();xr().then(()=>{A===w&&(l=!0)}),u=!0,Tn(f,y,r.state.value[t])}const M=i?function(){const{state:y}=n,w=y?y():{};this.$patch(N=>{kt(N,w)})}:Iu;function I(){o.stop(),f=[],d=[],r._s.delete(t)}function g(T,y){return function(){ti(r);const w=Array.from(arguments),N=[],P=[];function W($){N.push($)}function re($){P.push($)}Tn(d,{args:w,name:T,store:b,after:W,onError:re});let ne;try{ne=y.apply(this&&this.$id===t?this:b,w)}catch($){throw Tn(P,$),$}return ne instanceof Promise?ne.then($=>(Tn(N,$),$)).catch($=>(Tn(P,$),Promise.reject($))):(Tn(N,ne),ne)}}const h={_p:r,$id:t,$onAction:za.bind(null,d),$patch:U,$reset:M,$subscribe(T,y={}){const w=za(f,T,y.detached,()=>N()),N=o.run(()=>yt(()=>r.state.value[t],P=>{(y.flush==="sync"?u:l)&&T({storeId:t,type:fr.direct,events:_},P)},kt({},c,y)));return w},$dispose:I},b=_n(h);r._s.set(t,b);const k=(r._a&&r._a.runWithContext||Jp)(()=>r._e.run(()=>(o=lo()).run(e)));for(const T in k){const y=k[T];if(pe(y)&&!Zp(y)||ot(y))i||(E&&Qp(y)&&(pe(y)?y.value=E[T]:qi(y,E[T])),r.state.value[t][T]=y);else if(typeof y=="function"){const w=g(T,y);k[T]=w,a.actions[T]=y}}return kt(b,k),kt(ee(b),k),Object.defineProperty(b,"$state",{get:()=>r.state.value[t],set:T=>{U(y=>{kt(y,T)})}}),r._p.forEach(T=>{kt(b,o.run(()=>T({store:b,app:r._a,pinia:r,options:a})))}),E&&i&&n.hydrate&&n.hydrate(b.$state,E),l=!0,u=!0,b}function Cu(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Nl();return a=a||(l?Ve(wu,null):null),a&&ti(a),a=Eu,a._s.has(r)||(i?Tu(r,e,s,a):em(r,s,a)),a._s.get(r)}return o.$id=r,o}function Is(t){{t=ee(t);const e={};for(const n in t){const r=t[n];(pe(r)||ot(r))&&(e[n]=rl(t,n))}return e}}var tm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function rm(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var Su={exports:{}};const sm=rm(qp);(function(t,e){(function(r,s){t.exports=s(sm)})(tm,n=>(()=>{var r={772:(a,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.default=(l,u)=>{const f=l.__vccOpts||l;for(const[d,_]of u)f[d]=_;return f}},976:a=>{a.exports=n}},s={};function i(a){var c=s[a];if(c!==void 0)return c.exports;var l=s[a]={exports:{}};return r[a](l,l.exports,i),l.exports}i.d=(a,c)=>{for(var l in c)i.o(c,l)&&!i.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:c[l]})},i.o=(a,c)=>Object.prototype.hasOwnProperty.call(a,c),i.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{ToastComponent:()=>b,ToastPlugin:()=>k,ToastPositions:()=>E,default:()=>T,useToast:()=>C});var a=i(976);const c=(0,a.createElementVNode)("div",{class:"v-toast__icon"},null,-1),l=["innerHTML"];function u(y,w,N,P,W,re){return(0,a.openBlock)(),(0,a.createBlock)(a.Transition,{"enter-active-class":y.transition.enter,"leave-active-class":y.transition.leave},{default:(0,a.withCtx)(()=>[(0,a.withDirectives)((0,a.createElementVNode)("div",{ref:"root",role:"alert",class:(0,a.normalizeClass)(["v-toast__item",[`v-toast__item--${y.type}`,`v-toast__item--${y.position}`]]),onMouseover:w[0]||(w[0]=ne=>y.toggleTimer(!0)),onMouseleave:w[1]||(w[1]=ne=>y.toggleTimer(!1)),onClick:w[2]||(w[2]=function(){return y.whenClicked&&y.whenClicked(...arguments)})},[c,(0,a.createElementVNode)("p",{class:"v-toast__text",innerHTML:y.message},null,8,l)],34),[[a.vShow,y.isActive]])]),_:1},8,["enter-active-class","leave-active-class"])}function f(y){var w;typeof y.remove<"u"?y.remove():(w=y.parentNode)==null||w.removeChild(y)}function d(y,w,N){let P=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const W=(0,a.h)(y,w,P),re=document.createElement("div");return re.classList.add("v-toast--pending"),N.appendChild(re),(0,a.render)(W,re),W.component}class _{constructor(w,N){this.startedAt=Date.now(),this.callback=w,this.delay=N,this.timer=setTimeout(w,N)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const E=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"});function A(y){return{all:y=y||new Map,on:function(w,N){var P=y.get(w);P?P.push(N):y.set(w,[N])},off:function(w,N){var P=y.get(w);P&&(N?P.splice(P.indexOf(N)>>>0,1):y.set(w,[]))},emit:function(w,N){var P=y.get(w);P&&P.slice().map(function(W){W(N)}),(P=y.get("*"))&&P.slice().map(function(W){W(w,N)})}}}const M=A(),I=(0,a.defineComponent)({name:"Toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:E.BOTTOM_RIGHT,validator(y){return Object.values(E).includes(y)}},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data(){return{isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}},beforeMount(){this.setupContainer()},mounted(){this.showNotice(),M.on("toast-clear",this.dismiss)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-toast.v-toast--top"),this.parentBottom=document.querySelector(".v-toast.v-toast--bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-toast v-toast--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-toast v-toast--bottom");const y=document.body;y.appendChild(this.parentTop),y.appendChild(this.parentBottom)},shouldQueue(){return this.queue?this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0:!1},dismiss(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout(()=>{this.onDismiss.apply(null,arguments);const y=this.$refs.root;(0,a.render)(null,y),f(y)},150)},showNotice(){if(this.shouldQueue()){this.queueTimer=setTimeout(this.showNotice,250);return}const y=this.$refs.root.parentElement;this.correctParent.insertAdjacentElement("afterbegin",this.$refs.root),f(y),this.isActive=!0,this.duration&&(this.timer=new _(this.dismiss,this.duration))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.dismiss())},toggleTimer(y){!this.pauseOnHover||!this.timer||(y?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case E.TOP:case E.TOP_RIGHT:case E.TOP_LEFT:return this.parentTop;case E.BOTTOM:case E.BOTTOM_RIGHT:case E.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case E.TOP:case E.TOP_RIGHT:case E.TOP_LEFT:return{enter:"v-toast--fade-in-down",leave:"v-toast--fade-out"};case E.BOTTOM:case E.BOTTOM_RIGHT:case E.BOTTOM_LEFT:return{enter:"v-toast--fade-in-up",leave:"v-toast--fade-out"}}}},beforeUnmount(){M.off("toast-clear",this.dismiss)}});var g=i(772);const b=(0,g.default)(I,[["render",u]]),C=function(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{open(w){let N=null;typeof w=="string"&&(N=w);const W=Object.assign({},{message:N},y,w);return{dismiss:d(b,W,document.body).ctx.dismiss}},clear(){M.emit("toast-clear")},success(w){let N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:w,type:"success"},N))},error(w){let N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:w,type:"error"},N))},info(w){let N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:w,type:"info"},N))},warning(w){let N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:w,type:"warning"},N))},default(w){let N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:w,type:"default"},N))}}},k={install:function(y){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},N=C(w);y.config.globalProperties.$toast=N,y.provide("$toast",N)}},T=k})(),o})())})(Su);var Ru=Su.exports;const im=nm(Ru);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Sn=typeof window<"u";function om(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function gi(t,e){const n={};for(const r in e){const s=e[r];n[r]=et(s)?s.map(t):t(s)}return n}const dr=()=>{},et=Array.isArray,am=/\/$/,cm=t=>t.replace(am,"");function _i(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=dm(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function lm(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qa(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function um(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Hn(e.matched[r],n.matched[s])&&Pu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Pu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!fm(t[n],e[n]))return!1;return!0}function fm(t,e){return et(t)?Ga(t,e):et(e)?Ga(e,t):t===e}function Ga(t,e){return et(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function dm(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Tr;(function(t){t.pop="pop",t.push="push"})(Tr||(Tr={}));var hr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(hr||(hr={}));function hm(t){if(!t)if(Sn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cm(t)}const pm=/^[^#]+#/;function mm(t,e){return t.replace(pm,"#")+e}function gm(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ni=()=>({left:window.pageXOffset,top:window.pageYOffset});function _m(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=gm(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ya(t,e){return(history.state?history.state.position-e:-1)+t}const Gi=new Map;function ym(t,e){Gi.set(t,e)}function vm(t){const e=Gi.get(t);return Gi.delete(t),e}let bm=()=>location.protocol+"//"+location.host;function Au(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),qa(c,"")}return qa(n,t)+r+s}function Em(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const _=Au(t,location),E=n.value,A=e.value;let U=0;if(d){if(n.value=_,e.value=d,o&&o===E){o=null;return}U=A?d.position-A.position:0}else r(_);s.forEach(M=>{M(n.value,E,{delta:U,type:Tr.pop,direction:U?U>0?hr.forward:hr.back:hr.unknown})})};function c(){o=n.value}function l(d){s.push(d);const _=()=>{const E=s.indexOf(d);E>-1&&s.splice(E,1)};return i.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(ae({},d.state,{scroll:ni()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Ja(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ni():null}}function wm(t){const{history:e,location:n}=window,r={value:Au(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:bm()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(c,l){const u=ae({},e.state,Ja(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ae({},s.value,e.state,{forward:c,scroll:ni()});i(u.current,u,!0);const f=ae({},Ja(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Im(t){t=hm(t);const e=wm(t),n=Em(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ae({location:"",base:t,go:r,createHref:mm.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Tm(t){return typeof t=="string"||t&&typeof t=="object"}function Ou(t){return typeof t=="string"||typeof t=="symbol"}const Pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ku=Symbol("");var Xa;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xa||(Xa={}));function jn(t,e){return ae(new Error,{type:t,[ku]:!0},e)}function ut(t,e){return t instanceof Error&&ku in t&&(e==null||!!(t.type&e))}const Qa="[^/]+?",Cm={sensitive:!1,strict:!1,start:!0,end:!0},Sm=/[.+*?^${}()[\]/\\]/g;function Rm(t,e){const n=ae({},Cm,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const d=l[f];let _=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(Sm,"\\$&"),_+=40;else if(d.type===1){const{value:E,repeatable:A,optional:U,regexp:M}=d;i.push({name:E,repeatable:A,optional:U});const I=M||Qa;if(I!==Qa){_+=10;try{new RegExp(`(${I})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${E}" (${I}): `+h.message)}}let g=A?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;f||(g=U&&l.length<2?`(?:/${g})`:"/"+g),U&&(g+="?"),s+=g,_+=20,U&&(_+=-8),A&&(_+=-20),I===".*"&&(_+=-50)}u.push(_)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",E=i[d-1];f[E.name]=_&&E.repeatable?_.split("/"):_}return f}function c(l){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:E,repeatable:A,optional:U}=_,M=E in l?l[E]:"";if(et(M)&&!A)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const I=et(M)?M.join("/"):M;if(!I)if(U)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);u+=I}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Pm(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Am(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Pm(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Za(r))return 1;if(Za(s))return-1}return s.length-r.length}function Za(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Om={type:0,value:""},km=/[a-zA-Z0-9_]/;function Nm(t){if(!t)return[[]];if(t==="/")return[[Om]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:km.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function xm(t,e,n){const r=Rm(Nm(t.path),n),s=ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Lm(t,e){const n=[],r=new Map;e=nc({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,d){const _=!d,E=Mm(u);E.aliasOf=d&&d.record;const A=nc(e,u),U=[E];if("alias"in u){const g=typeof u.alias=="string"?[u.alias]:u.alias;for(const h of g)U.push(ae({},E,{components:d?d.record.components:E.components,path:h,aliasOf:d?d.record:E}))}let M,I;for(const g of U){const{path:h}=g;if(f&&h[0]!=="/"){const b=f.record.path,C=b[b.length-1]==="/"?"":"/";g.path=f.record.path+(h&&C+h)}if(M=xm(g,f,A),d?d.alias.push(M):(I=I||M,I!==M&&I.alias.push(M),_&&u.name&&!tc(M)&&o(u.name)),E.children){const b=E.children;for(let C=0;C<b.length;C++)i(b[C],M,d&&d.children[C])}d=d||M,(M.record.components&&Object.keys(M.record.components).length||M.record.name||M.record.redirect)&&c(M)}return I?()=>{o(I)}:dr}function o(u){if(Ou(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&Am(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Nu(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!tc(u)&&r.set(u.record.name,u)}function l(u,f){let d,_={},E,A;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw jn(1,{location:u});A=d.record.name,_=ae(ec(f.params,d.keys.filter(I=>!I.optional).map(I=>I.name)),u.params&&ec(u.params,d.keys.map(I=>I.name))),E=d.stringify(_)}else if("path"in u)E=u.path,d=n.find(I=>I.re.test(E)),d&&(_=d.parse(E),A=d.record.name);else{if(d=f.name?r.get(f.name):n.find(I=>I.re.test(f.path)),!d)throw jn(1,{location:u,currentLocation:f});A=d.record.name,_=ae({},f.params,u.params),E=d.stringify(_)}const U=[];let M=d;for(;M;)U.unshift(M.record),M=M.parent;return{name:A,path:E,params:_,matched:U,meta:Um(U)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ec(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Mm(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Dm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Dm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function tc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Um(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function nc(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Nu(t,e){return e.children.some(n=>n===t||Nu(t,n))}const xu=/#/g,Fm=/&/g,Bm=/\//g,$m=/=/g,Hm=/\?/g,Lu=/\+/g,jm=/%5B/g,Vm=/%5D/g,Mu=/%5E/g,Wm=/%60/g,Du=/%7B/g,Km=/%7C/g,Uu=/%7D/g,zm=/%20/g;function Bo(t){return encodeURI(""+t).replace(Km,"|").replace(jm,"[").replace(Vm,"]")}function qm(t){return Bo(t).replace(Du,"{").replace(Uu,"}").replace(Mu,"^")}function Yi(t){return Bo(t).replace(Lu,"%2B").replace(zm,"+").replace(xu,"%23").replace(Fm,"%26").replace(Wm,"`").replace(Du,"{").replace(Uu,"}").replace(Mu,"^")}function Gm(t){return Yi(t).replace($m,"%3D")}function Ym(t){return Bo(t).replace(xu,"%23").replace(Hm,"%3F")}function Jm(t){return t==null?"":Ym(t).replace(Bm,"%2F")}function Ts(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Xm(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Lu," "),o=i.indexOf("="),a=Ts(o<0?i:i.slice(0,o)),c=o<0?null:Ts(i.slice(o+1));if(a in e){let l=e[a];et(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function rc(t){let e="";for(let n in t){const r=t[n];if(n=Gm(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(et(r)?r.map(i=>i&&Yi(i)):[r&&Yi(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Qm(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=et(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Zm=Symbol(""),sc=Symbol(""),ri=Symbol(""),$o=Symbol(""),Ji=Symbol("");function Xn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Lt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(jn(4,{from:n,to:e})):f instanceof Error?a(f):Tm(f)?a(jn(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function yi(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(eg(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Lt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=om(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Lt(d,n,r,i,o)()}))}}return s}function eg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ic(t){const e=Ve(ri),n=Ve($o),r=He(()=>e.resolve(we(t.to))),s=He(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Hn.bind(null,u));if(d>-1)return d;const _=oc(c[l-2]);return l>1&&oc(u)===_&&f[f.length-1].path!==_?f.findIndex(Hn.bind(null,c[l-2])):d}),i=He(()=>s.value>-1&&sg(n.params,r.value.params)),o=He(()=>s.value>-1&&s.value===n.matched.length-1&&Pu(n.params,r.value.params));function a(c={}){return rg(c)?e[we(t.replace)?"replace":"push"](we(t.to)).catch(dr):Promise.resolve()}return{route:r,href:He(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const tg=Mr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ic,setup(t,{slots:e}){const n=_n(ic(t)),{options:r}=Ve(ri),s=He(()=>({[ac(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ac(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Zs("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ng=tg;function rg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sg(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!et(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function oc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ac=(t,e,n)=>t??e??n,ig=Mr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ve(Ji),s=He(()=>t.route||r.value),i=Ve(sc,0),o=He(()=>{let l=we(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=He(()=>s.value.matched[o.value]);ar(sc,He(()=>o.value+1)),ar(Zm,a),ar(Ji,s);const c=ue();return yt(()=>[c.value,a.value,t.name],([l,u,f],[d,_,E])=>{u&&(u.instances[f]=l,_&&_!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!Hn(u,_)||!d)&&(u.enterCallbacks[f]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return cc(n.default,{Component:d,route:l});const _=f.props[u],E=_?_===!0?l.params:typeof _=="function"?_(l):_:null,U=Zs(d,ae({},E,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return cc(n.default,{Component:U,route:l})||U}}});function cc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Fu=ig;function og(t){const e=Lm(t.routes,t),n=t.parseQuery||Xm,r=t.stringifyQuery||rc,s=t.history,i=Xn(),o=Xn(),a=Xn(),c=el(Pt);let l=Pt;Sn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gi.bind(null,R=>""+R),f=gi.bind(null,Jm),d=gi.bind(null,Ts);function _(R,j){let B,q;return Ou(R)?(B=e.getRecordMatcher(R),q=j):q=R,e.addRoute(q,B)}function E(R){const j=e.getRecordMatcher(R);j&&e.removeRoute(j)}function A(){return e.getRoutes().map(R=>R.record)}function U(R){return!!e.getRecordMatcher(R)}function M(R,j){if(j=ae({},j||c.value),typeof R=="string"){const v=_i(n,R,j.path),S=e.resolve({path:v.path},j),O=s.createHref(v.fullPath);return ae(v,S,{params:d(S.params),hash:Ts(v.hash),redirectedFrom:void 0,href:O})}let B;if("path"in R)B=ae({},R,{path:_i(n,R.path,j.path).path});else{const v=ae({},R.params);for(const S in v)v[S]==null&&delete v[S];B=ae({},R,{params:f(v)}),j.params=f(j.params)}const q=e.resolve(B,j),ie=R.hash||"";q.params=u(d(q.params));const p=lm(r,ae({},R,{hash:qm(ie),path:q.path})),m=s.createHref(p);return ae({fullPath:p,hash:ie,query:r===rc?Qm(R.query):R.query||{}},q,{redirectedFrom:void 0,href:m})}function I(R){return typeof R=="string"?_i(n,R,c.value.path):ae({},R)}function g(R,j){if(l!==R)return jn(8,{from:j,to:R})}function h(R){return k(R)}function b(R){return h(ae(I(R),{replace:!0}))}function C(R){const j=R.matched[R.matched.length-1];if(j&&j.redirect){const{redirect:B}=j;let q=typeof B=="function"?B(R):B;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=I(q):{path:q},q.params={}),ae({query:R.query,hash:R.hash,params:"path"in q?{}:R.params},q)}}function k(R,j){const B=l=M(R),q=c.value,ie=R.state,p=R.force,m=R.replace===!0,v=C(B);if(v)return k(ae(I(v),{state:typeof v=="object"?ae({},ie,v.state):ie,force:p,replace:m}),j||B);const S=B;S.redirectedFrom=j;let O;return!p&&um(r,q,B)&&(O=jn(16,{to:S,from:q}),nt(q,q,!0,!1)),(O?Promise.resolve(O):w(S,q)).catch(x=>ut(x)?ut(x,2)?x:Tt(x):z(x,S,q)).then(x=>{if(x){if(ut(x,2))return k(ae({replace:m},I(x.to),{state:typeof x.to=="object"?ae({},ie,x.to.state):ie,force:p}),j||S)}else x=P(S,q,!0,m,ie);return N(S,q,x),x})}function T(R,j){const B=g(R,j);return B?Promise.reject(B):Promise.resolve()}function y(R){const j=En.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(R):R()}function w(R,j){let B;const[q,ie,p]=ag(R,j);B=yi(q.reverse(),"beforeRouteLeave",R,j);for(const v of q)v.leaveGuards.forEach(S=>{B.push(Lt(S,R,j))});const m=T.bind(null,R,j);return B.push(m),Ce(B).then(()=>{B=[];for(const v of i.list())B.push(Lt(v,R,j));return B.push(m),Ce(B)}).then(()=>{B=yi(ie,"beforeRouteUpdate",R,j);for(const v of ie)v.updateGuards.forEach(S=>{B.push(Lt(S,R,j))});return B.push(m),Ce(B)}).then(()=>{B=[];for(const v of p)if(v.beforeEnter)if(et(v.beforeEnter))for(const S of v.beforeEnter)B.push(Lt(S,R,j));else B.push(Lt(v.beforeEnter,R,j));return B.push(m),Ce(B)}).then(()=>(R.matched.forEach(v=>v.enterCallbacks={}),B=yi(p,"beforeRouteEnter",R,j),B.push(m),Ce(B))).then(()=>{B=[];for(const v of o.list())B.push(Lt(v,R,j));return B.push(m),Ce(B)}).catch(v=>ut(v,8)?v:Promise.reject(v))}function N(R,j,B){a.list().forEach(q=>y(()=>q(R,j,B)))}function P(R,j,B,q,ie){const p=g(R,j);if(p)return p;const m=j===Pt,v=Sn?history.state:{};B&&(q||m?s.replace(R.fullPath,ae({scroll:m&&v&&v.scroll},ie)):s.push(R.fullPath,ie)),c.value=R,nt(R,j,B,m),Tt()}let W;function re(){W||(W=s.listen((R,j,B)=>{if(!Kr.listening)return;const q=M(R),ie=C(q);if(ie){k(ae(ie,{replace:!0}),q).catch(dr);return}l=q;const p=c.value;Sn&&ym(Ya(p.fullPath,B.delta),ni()),w(q,p).catch(m=>ut(m,12)?m:ut(m,2)?(k(m.to,q).then(v=>{ut(v,20)&&!B.delta&&B.type===Tr.pop&&s.go(-1,!1)}).catch(dr),Promise.reject()):(B.delta&&s.go(-B.delta,!1),z(m,q,p))).then(m=>{m=m||P(q,p,!1),m&&(B.delta&&!ut(m,8)?s.go(-B.delta,!1):B.type===Tr.pop&&ut(m,20)&&s.go(-1,!1)),N(q,p,m)}).catch(dr)}))}let ne=Xn(),$=Xn(),Q;function z(R,j,B){Tt(R);const q=$.list();return q.length?q.forEach(ie=>ie(R,j,B)):console.error(R),Promise.reject(R)}function Ge(){return Q&&c.value!==Pt?Promise.resolve():new Promise((R,j)=>{ne.add([R,j])})}function Tt(R){return Q||(Q=!R,re(),ne.list().forEach(([j,B])=>R?B(R):j()),ne.reset()),R}function nt(R,j,B,q){const{scrollBehavior:ie}=t;if(!Sn||!ie)return Promise.resolve();const p=!B&&vm(Ya(R.fullPath,0))||(q||!B)&&history.state&&history.state.scroll||null;return xr().then(()=>ie(R,j,p)).then(m=>m&&_m(m)).catch(m=>z(m,R,j))}const xe=R=>s.go(R);let bn;const En=new Set,Kr={currentRoute:c,listening:!0,addRoute:_,removeRoute:E,hasRoute:U,getRoutes:A,resolve:M,options:t,push:h,replace:b,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:$.add,isReady:Ge,install(R){const j=this;R.component("RouterLink",ng),R.component("RouterView",Fu),R.config.globalProperties.$router=j,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>we(c)}),Sn&&!bn&&c.value===Pt&&(bn=!0,h(s.location).catch(ie=>{}));const B={};for(const ie in Pt)Object.defineProperty(B,ie,{get:()=>c.value[ie],enumerable:!0});R.provide(ri,j),R.provide($o,po(B)),R.provide(Ji,c);const q=R.unmount;En.add(R),R.unmount=function(){En.delete(R),En.size<1&&(l=Pt,W&&W(),W=null,c.value=Pt,bn=!1,Q=!1),q()}}};function Ce(R){return R.reduce((j,B)=>j.then(()=>y(B)),Promise.resolve())}return Kr}function ag(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Hn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Hn(l,c))||s.push(c))}return[n,r,s]}function Ho(){return Ve(ri)}function Kb(){return Ve($o)}const cg={__name:"App",setup(t){return(e,n)=>(be(),Ys(we(Fu)))}},lg="modulepreload",ug=function(t){return"/"+t},lc={},Qn=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=ug(i),i in lc)return;lc[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const f=s[u];if(f.href===i&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":lg,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Ur=Cu("user",()=>{const t=ue(),e=ue(),n=ue(),r=ue(),s=ue(),i=ue(0);function o(c,l,u,f,d){this.userName=c,this.userMail=l,this.emailVerified=u,this.provider=f,this.uid=d}function a(){this.userName="",this.userMail="",this.emailVerified="",this.provider="",this.uid="",this.bestScore=0}return{userName:t,userMail:e,emailVerified:n,provider:r,uid:s,updateUser:o,logout:a,bestScore:i}}),fg=Cu("timer",()=>{const t=ue(),e=ue(0);function n(){this.timer=null,this.gameTime=0}function r(){this.timer||(this.timer=setInterval(()=>{this.gameTime++},1e3))}function s(){this.timer&&clearInterval(this.timer)}return{timer:t,gameTime:e,startTimer:r,stopTimer:s,initTimer:n}}),vi=ue(!1);function zb(t,e){const n=fg(),{gameTime:r}=Is(n),{stopTimer:s,startTimer:i}=n,o=ue([]),a=ue([]),c=50,l=ue(null),u=_n({x:0,y:0}),f=(h,b)=>{i();const C=b.groupId?a.value.find(k=>k.id===b.groupId):null;C&&(C.isBeingDragged=!0,C.offsetX=h.clientX,C.offsetY=h.clientY,C.pieces.forEach(k=>{k.initialOffsetX=k.x-h.clientX,k.initialOffsetY=k.y-h.clientY})),l.value=b,u.x=h.clientX-b.x,u.y=h.clientY-b.y},d=h=>{a.value.forEach(b=>{b.isBeingDragged&&b.pieces.forEach(C=>{C.x=h.clientX+C.initialOffsetX,C.y=h.clientY+C.initialOffsetY})}),l.value&&(l.value.x=h.clientX-u.x,l.value.y=h.clientY-u.y)},_=h=>{if(!l.value)return;let b=null;a.value.forEach(C=>{C.isBeingDragged&&(b=C),C.isBeingDragged=!1}),b?b.pieces.forEach(C=>{E(C)}):E(l.value),l.value=null},E=(h,b)=>{o.value.forEach(C=>{C.groupId===h.groupId&&C.groupId!==void 0||C!==h&&M(h,C)&&A(h,C)})},A=(h,b,C)=>{const k=h.attachmentPoints.find(P=>P.matchId===b.id);if(!k)return;const T=b.attachmentPoints.find(P=>P.matchId===h.id);if(!T)return;const y=b.x+T.x-k.x-h.x,w=b.y+T.y-k.y-h.y;let N=h.groupId?a.value.find(P=>P.id===h.groupId):void 0;N?N.pieces.forEach(P=>{P.x+=y,P.y+=w}):(h.x=b.x+T.x-k.x,h.y=b.y+T.y-k.y),U(h,b)},U=async(h,b)=>{let C={id:a.value.length>0?a.value[a.value.length-1].id+1:1,pieces:[]},k=h.groupId?a.value.find(y=>y.id===h.groupId):null,T=b.groupId?a.value.find(y=>y.id===b.groupId):null;if(k){k.pieces.forEach(w=>{C.pieces.push(w),w.groupId=C.id});const y=a.value.indexOf(k);y!==-1&&a.value.splice(y,1)}else h.groupId=C.id,C.pieces.push(h);if(T){T.pieces.forEach(w=>{C.pieces.push(w),w.groupId=C.id});const y=a.value.indexOf(T);y!==-1&&a.value.splice(y,1)}else b.groupId=C.id,C.pieces.push(b);if(a.value.push(C),a.value[0].pieces.length==e.value){const y=Ur(),{userName:w,bestScore:N}=Is(y);s(),I(),w.value&&(N.value===0||r.value<N.value)&&g(w.value)}},M=(h,b)=>h.attachmentPoints.some(C=>{if(C.matchId!==b.id)return!1;const k={x:h.x+C.x,y:h.y+C.y};return b.attachmentPoints.some(T=>{const y={x:b.x+T.x,y:b.y+T.y},w=Math.pow(y.x-k.x,2),N=Math.pow(y.y-k.y,2);return w<c&&N<c})});function I(){vi.value=!0,setTimeout(()=>{vi.value=!1},3e3)}async function g(h){const b={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t.value,nbPieces:e.value,userName:h,time:r.value})};await fetch("https://puzzle-01s0.onrender.com/api/addScore",b)}return{pieces:o,gameTime:r,showCompletionAnimation:vi,startDrag:f,onDrag:d,endDrag:_}}function dg(){function t(e){const n=Math.floor(e/60),r=e%60;return`${n}:${r.toString().padStart(2,"0")}`}return{formatTime:t}}const hg={key:0,class:"pl-2"},pg={key:1},mg=_e("div",{class:"text-center py-2"}," Classement ",-1),gg={class:"px-2"},_g={class:"flex justify-between"},yg={__name:"ClassementPuzzle",props:{id:Number,pieces:Number},setup(t){const e=Ur(),{userName:n,bestScore:r}=Is(e),{formatTime:s}=dg(),i=ue([]),o=ue(!1),a=t;return dl(async()=>{const c=await fetch(`https://puzzle-01s0.onrender.com/api/getClassement/${a.id-1}/${a.pieces}`);i.value=await c.json()}),vn(async()=>{try{if(n.value)try{const l=await(await fetch(`https://puzzle-01s0.onrender.com/api/getBestScore/${a.id-1}/${a.pieces}/${n.value}`)).json();l?r.value=l.time:r.value=0}catch(c){console.log(c)}}catch{o.value=!0}}),(c,l)=>o.value?(be(),Se("div",hg," Problème de récupération du classement ")):(be(),Se("div",pg,[mg,_e("ul",gg,[(be(!0),Se(ye,null,_s(i.value,(u,f)=>(be(),Se("li",_g,[_e("div",null,mr(f),1),_e("div",null,mr(we(s)(u.time)),1)]))),256))])]))}};const vg={class:"home-container"},bg={class:"image-selection"},Eg=["src","onClick"],wg={class:"puzzle-options"},Ig=_e("option",{disabled:"",value:""},"Nombre de pièces",-1),Tg=["value"],Cg={key:0,class:"w-2/12 py-2 max-w-[200px] m-auto lg:m-0"},Sg={__name:"LaunchGame",setup(t){const e=Ho(),n=ue([]),r=ue(""),s=ue(null),i=ue([49,100,225,400]);function o(c){s.value=c.id}function a(){s.value&&r.value&&e.push({path:"/game",query:{imageId:s.value,pieces:r.value}})}return vn(async()=>{try{const c=await fetch("https://puzzle-01s0.onrender.com/api/getImages");n.value=await c.json()}catch(c){console.error("Erreur lors du chargement des images",c)}}),(c,l)=>(be(),Se("div",vg,[_e("div",bg,[(be(!0),Se(ye,null,_s(n.value,u=>(be(),Se("div",{key:u.id,class:"image-card"},[_e("img",{src:u.src,onClick:f=>o(u),class:Kn({"selected-image":s.value===u.id})},null,10,Eg)]))),128))]),_e("div",wg,[Io(_e("select",{"onUpdate:modelValue":l[0]||(l[0]=u=>r.value=u)},[Ig,(be(!0),Se(ye,null,_s(i.value,u=>(be(),Se("option",{key:u,value:u},mr(u),9,Tg))),128))],512),[[Fo,r.value]]),_e("button",{onClick:a},"Démarrer")]),s.value&&r.value?(be(),Se("div",Cg,[oe(yg,{id:s.value,pieces:r.value},null,8,["id","pieces"])])):ql("",!0)]))}},Rg="/assets/logo-43735431.png";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Pg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(d=64)),r.push(n[u],n[f],n[d],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new Ag;const d=i<<2|a>>4;if(r.push(d),l!==64){const _=a<<4&240|l>>2;if(r.push(_),f!==64){const E=l<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ag extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Og=function(t){const e=Bu(t);return $u.encodeByteArray(e,!0)},Hu=function(t){return Og(t).replace(/\./g,"")},ju=function(t){try{return $u.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=()=>kg().__FIREBASE_DEFAULTS__,xg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Lg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ju(t[1]);return e&&JSON.parse(e)},jo=()=>{try{return Ng()||xg()||Lg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Mg=t=>{var e,n;return(n=(e=jo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vu=()=>{var t;return(t=jo())===null||t===void 0?void 0:t.config},Wu=t=>{var e;return(e=jo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ug(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function Fg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Bg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $g(){const t=Oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Hg(){try{return typeof indexedDB=="object"}catch{return!1}}function jg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="FirebaseError";class Gt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Vg,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fr.prototype.create)}}class Fr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Wg(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Gt(s,a,r)}}function Wg(t,e){return t.replace(Kg,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Kg=/\{\$([^}]+)}/g;function zg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(uc(i)&&uc(o)){if(!Cs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function uc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function rr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qg(t,e){const n=new Gg(t,e);return n.subscribe.bind(n)}class Gg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yg(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=bi),s.error===void 0&&(s.error=bi),s.complete===void 0&&(s.complete=bi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){return t&&t._delegate?t._delegate:t}class Vn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Dg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qg(e))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qt){return this.instances.has(e)}getOptions(e=Qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qt){return this.component?this.component.multipleInstances?e:Qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xg(t){return t===Qt?void 0:t}function Qg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const e_={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},t_=de.INFO,n_={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},r_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=n_[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ku{constructor(e){this.name=e,this._logLevel=t_,this._logHandler=r_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?e_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const s_=(t,e)=>e.some(n=>t instanceof n);let fc,dc;function i_(){return fc||(fc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function o_(){return dc||(dc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zu=new WeakMap,Xi=new WeakMap,qu=new WeakMap,Ei=new WeakMap,Vo=new WeakMap;function a_(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n($t(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zu.set(n,t)}).catch(()=>{}),Vo.set(e,t),e}function c_(t){if(Xi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Xi.set(t,e)}let Qi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $t(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function l_(t){Qi=t(Qi)}function u_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wi(this),e,...n);return qu.set(r,e.sort?e.sort():[e]),$t(r)}:o_().includes(t)?function(...e){return t.apply(wi(this),e),$t(zu.get(this))}:function(...e){return $t(t.apply(wi(this),e))}}function f_(t){return typeof t=="function"?u_(t):(t instanceof IDBTransaction&&c_(t),s_(t,i_())?new Proxy(t,Qi):t)}function $t(t){if(t instanceof IDBRequest)return a_(t);if(Ei.has(t))return Ei.get(t);const e=f_(t);return e!==t&&(Ei.set(t,e),Vo.set(e,t)),e}const wi=t=>Vo.get(t);function d_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=$t(o);return r&&o.addEventListener("upgradeneeded",c=>{r($t(o.result),c.oldVersion,c.newVersion,$t(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const h_=["get","getKey","getAll","getAllKeys","count"],p_=["put","add","delete","clear"],Ii=new Map;function hc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ii.get(e))return Ii.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=p_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||h_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ii.set(e,i),i}l_(t=>({...t,get:(e,n,r)=>hc(e,n)||t.get(e,n,r),has:(e,n)=>!!hc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(g_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function g_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zi="@firebase/app",pc="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new Ku("@firebase/app"),__="@firebase/app-compat",y_="@firebase/analytics-compat",v_="@firebase/analytics",b_="@firebase/app-check-compat",E_="@firebase/app-check",w_="@firebase/auth",I_="@firebase/auth-compat",T_="@firebase/database",C_="@firebase/database-compat",S_="@firebase/functions",R_="@firebase/functions-compat",P_="@firebase/installations",A_="@firebase/installations-compat",O_="@firebase/messaging",k_="@firebase/messaging-compat",N_="@firebase/performance",x_="@firebase/performance-compat",L_="@firebase/remote-config",M_="@firebase/remote-config-compat",D_="@firebase/storage",U_="@firebase/storage-compat",F_="@firebase/firestore",B_="@firebase/firestore-compat",$_="firebase",H_="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo="[DEFAULT]",j_={[Zi]:"fire-core",[__]:"fire-core-compat",[v_]:"fire-analytics",[y_]:"fire-analytics-compat",[E_]:"fire-app-check",[b_]:"fire-app-check-compat",[w_]:"fire-auth",[I_]:"fire-auth-compat",[T_]:"fire-rtdb",[C_]:"fire-rtdb-compat",[S_]:"fire-fn",[R_]:"fire-fn-compat",[P_]:"fire-iid",[A_]:"fire-iid-compat",[O_]:"fire-fcm",[k_]:"fire-fcm-compat",[N_]:"fire-perf",[x_]:"fire-perf-compat",[L_]:"fire-rc",[M_]:"fire-rc-compat",[D_]:"fire-gcs",[U_]:"fire-gcs-compat",[F_]:"fire-fst",[B_]:"fire-fst-compat","fire-js":"fire-js",[$_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Map,to=new Map;function V_(t,e){try{t.container.addComponent(e)}catch(n){dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cr(t){const e=t.name;if(to.has(e))return dn.debug(`There were multiple attempts to register component ${e}.`),!1;to.set(e,t);for(const n of Ss.values())V_(n,t);return!0}function Gu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ht=new Fr("app","Firebase",W_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=H_;function Yu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:eo,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ht.create("bad-app-name",{appName:String(s)});if(n||(n=Vu()),!n)throw Ht.create("no-options");const i=Ss.get(s);if(i){if(Cs(n,i.options)&&Cs(r,i.config))return i;throw Ht.create("duplicate-app",{appName:s})}const o=new Zg(s);for(const c of to.values())o.addComponent(c);const a=new K_(n,r,o);return Ss.set(s,a),a}function z_(t=eo){const e=Ss.get(t);if(!e&&t===eo&&Vu())return Yu();if(!e)throw Ht.create("no-app",{appName:t});return e}function Nn(t,e,n){var r;let s=(r=j_[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dn.warn(a.join(" "));return}Cr(new Vn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="firebase-heartbeat-database",G_=1,Sr="firebase-heartbeat-store";let Ti=null;function Ju(){return Ti||(Ti=d_(q_,G_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Sr)}}}).catch(t=>{throw Ht.create("idb-open",{originalErrorMessage:t.message})})),Ti}async function Y_(t){try{return await(await Ju()).transaction(Sr).objectStore(Sr).get(Xu(t))}catch(e){if(e instanceof Gt)dn.warn(e.message);else{const n=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dn.warn(n.message)}}}async function mc(t,e){try{const r=(await Ju()).transaction(Sr,"readwrite");await r.objectStore(Sr).put(e,Xu(t)),await r.done}catch(n){if(n instanceof Gt)dn.warn(n.message);else{const r=Ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dn.warn(r.message)}}}function Xu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=1024,X_=30*24*60*60*1e3;class Q_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ey(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=X_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gc(),{heartbeatsToSend:r,unsentEntries:s}=Z_(this._heartbeatsCache.heartbeats),i=Hu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function gc(){return new Date().toISOString().substring(0,10)}function Z_(t,e=J_){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),_c(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_c(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ey{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hg()?jg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Y_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _c(t){return Hu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t){Cr(new Vn("platform-logger",e=>new m_(e),"PRIVATE")),Cr(new Vn("heartbeat",e=>new Q_(e),"PRIVATE")),Nn(Zi,pc,t),Nn(Zi,pc,"esm2017"),Nn("fire-js","")}ty("");function Wo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Qu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ny=Qu,Zu=new Fr("auth","Firebase",Qu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new Ku("@firebase/auth");function ry(t,...e){Rs.logLevel<=de.WARN&&Rs.warn(`Auth (${$r}): ${t}`,...e)}function as(t,...e){Rs.logLevel<=de.ERROR&&Rs.error(`Auth (${$r}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t,...e){throw Ko(t,...e)}function at(t,...e){return Ko(t,...e)}function ef(t,e,n){const r=Object.assign(Object.assign({},ny()),{[e]:n});return new Fr("auth","Firebase",r).create(e,{appName:t.name})}function sy(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&qe(t,"argument-error"),ef(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ko(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Zu.create(t,...e)}function J(t,e,...n){if(!t)throw Ko(e,...n)}function pt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw as(e),new Error(e)}function vt(t,e){t||pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iy(){return yc()==="http:"||yc()==="https:"}function yc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iy()||Fg()||"connection"in navigator)?navigator.onLine:!0}function ay(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n){this.shortDelay=e,this.longDelay=n,vt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ug()||Bg()}get(){return oy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t,e){vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=new Hr(3e4,6e4);function wt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tt(t,e,n,r,s={}){return nf(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Br(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),tf.fetch()(rf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function nf(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cy),e);try{const s=new fy(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ss(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ss(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ss(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ss(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ef(t,u,l);qe(t,u)}}catch(s){if(s instanceof Gt)throw s;qe(t,"network-request-failed",{message:String(s)})}}async function jr(t,e,n,r,s={}){const i=await tt(t,e,n,r,s);return"mfaPendingCredential"in i&&qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function rf(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?zo(t.config,s):`${t.config.apiScheme}://${s}`}function uy(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),ly.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ss(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=at(t,e,r);return s.customData._tokenResponse=n,s}function vc(t){return t!==void 0&&t.enterprise!==void 0}class dy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return uy(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function hy(t,e){return tt(t,"GET","/v2/recaptchaConfig",wt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function py(t,e){return tt(t,"POST","/v1/accounts:delete",e)}async function my(t,e){return tt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gy(t,e=!1){const n=Ne(t),r=await n.getIdToken(e),s=qo(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:pr(Ci(s.auth_time)),issuedAtTime:pr(Ci(s.iat)),expirationTime:pr(Ci(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ci(t){return Number(t)*1e3}function qo(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return as("JWT malformed, contained fewer than 3 sections"),null;try{const s=ju(n);return s?JSON.parse(s):(as("Failed to decode base64 JWT payload"),null)}catch(s){return as("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _y(t){const e=qo(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gt&&yy(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pr(this.lastLoginAt),this.creationTime=pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(t){var e;const n=t.auth,r=await t.getIdToken(),s=await hn(t,my(n,{idToken:r}));J(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?wy(i.providerUserInfo):[],a=Ey(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new sf(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function by(t){const e=Ne(t);await Ps(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ey(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function wy(t){return t.map(e=>{var{providerId:n}=e,r=Wo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iy(t,e){const n=await nf(t,{},async()=>{const r=Br({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=rf(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ty(t,e){return tt(t,"POST","/v2/accounts:revokeToken",wt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Iy(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Rr;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rr,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Wo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new sf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await hn(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gy(this,e)}reload(){return by(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ps(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hn(this,py(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,M=(l=n.createdAt)!==null&&l!==void 0?l:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:g,emailVerified:h,isAnonymous:b,providerData:C,stsTokenManager:k}=n;J(g&&k,e,"internal-error");const T=Rr.fromJSON(this.name,k);J(typeof g=="string",e,"internal-error"),At(f,e.name),At(d,e.name),J(typeof h=="boolean",e,"internal-error"),J(typeof b=="boolean",e,"internal-error"),At(_,e.name),At(E,e.name),At(A,e.name),At(U,e.name),At(M,e.name),At(I,e.name);const y=new an({uid:g,auth:e,email:d,emailVerified:h,displayName:f,isAnonymous:b,photoURL:E,phoneNumber:_,tenantId:A,stsTokenManager:T,createdAt:M,lastLoginAt:I});return C&&Array.isArray(C)&&(y.providerData=C.map(w=>Object.assign({},w))),U&&(y._redirectEventId=U),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Rr;s.updateFromServerResponse(n);const i=new an({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ps(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=new Map;function mt(t){vt(t instanceof Function,"Expected a class definition");let e=bc.get(t);return e?(vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}of.type="NONE";const Ec=of;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t,e,n){return`firebase:${t}:${e}:${n}`}class xn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=cs(this.userKey,s.apiKey,i),this.fullPersistenceKey=cs("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?an._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xn(mt(Ec),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||mt(Ec);const o=cs(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=an._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new xn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new xn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(af(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ff(e))return"Blackberry";if(df(e))return"Webos";if(Go(e))return"Safari";if((e.includes("chrome/")||cf(e))&&!e.includes("edge/"))return"Chrome";if(uf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function af(t=Oe()){return/firefox\//i.test(t)}function Go(t=Oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cf(t=Oe()){return/crios\//i.test(t)}function lf(t=Oe()){return/iemobile/i.test(t)}function uf(t=Oe()){return/android/i.test(t)}function ff(t=Oe()){return/blackberry/i.test(t)}function df(t=Oe()){return/webos/i.test(t)}function si(t=Oe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Cy(t=Oe()){var e;return si(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Sy(){return $g()&&document.documentMode===10}function hf(t=Oe()){return si(t)||uf(t)||df(t)||ff(t)||/windows phone/i.test(t)||lf(t)}function Ry(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t,e=[]){let n;switch(t){case"Browser":n=wc(Oe());break;case"Worker":n=`${wc(Oe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ay(t,e={}){return tt(t,"GET","/v2/passwordPolicy",wt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=6;class ky{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Oy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ic(this),this.idTokenSubscription=new Ic(this),this.beforeStateQueue=new Py(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await xn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ps(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ay()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ne(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ay(this),n=new ky(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ty(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mt(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await xn.create(this,[mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ry(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function It(t){return Ne(t)}class Ic{constructor(e){this.auth=e,this.observer=null,this.addObserver=qg(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function mf(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=at("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",xy().appendChild(r)})}function Ly(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const My="https://www.google.com/recaptcha/enterprise.js?render=",Dy="recaptcha-enterprise",Uy="NO_RECAPTCHA";class Fy{constructor(e){this.type=Dy,this.auth=It(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{hy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new dy(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;vc(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Uy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&vc(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}mf(My+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Tc(t,e,n,r=!1){const s=new Fy(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function As(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Tc(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Tc(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t,e){const n=Gu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Cs(i,e??{}))return s;qe(s,"already-initialized")}return n.initialize({options:e})}function $y(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Hy(t,e,n){const r=It(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=gf(e),{host:o,port:a}=jy(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Vy()}function gf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jy(t){const e=gf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Cc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Cc(o)}}}function Cc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Vy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,n){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}async function Wy(t,e){return tt(t,"POST","/v1/accounts:update",e)}async function Ky(t,e){return tt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zy(t,e){return jr(t,"POST","/v1/accounts:signInWithPassword",wt(t,e))}async function Jo(t,e){return tt(t,"POST","/v1/accounts:sendOobCode",wt(t,e))}async function qy(t,e){return Jo(t,e)}async function Gy(t,e){return Jo(t,e)}async function Yy(t,e){return Jo(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(t,e){return jr(t,"POST","/v1/accounts:signInWithEmailLink",wt(t,e))}async function Xy(t,e){return jr(t,"POST","/v1/accounts:signInWithEmailLink",wt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Yo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Pr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Pr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return As(e,n,"signInWithPassword",zy);case"emailLink":return Jy(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return As(e,r,"signUpPassword",Ky);case"emailLink":return Xy(e,{idToken:n,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(t,e){return jr(t,"POST","/v1/accounts:signInWithIdp",wt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="http://localhost";class pn extends Yo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Wo(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new pn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ln(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ln(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ln(e,n)}buildRequest(){const e={requestUri:Qy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Br(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ev(t){const e=nr(rr(t)).link,n=e?nr(rr(e)).deep_link_id:null,r=nr(rr(t)).deep_link_id;return(r?nr(rr(r)).link:null)||r||n||e||t}class Xo{constructor(e){var n,r,s,i,o,a;const c=nr(rr(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Zy((s=c.mode)!==null&&s!==void 0?s:null);J(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ev(e);try{return new Xo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(){this.providerId=Yt.PROVIDER_ID}static credential(e,n){return Pr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xo.parseLink(n);return J(r,"argument-error"),Pr._fromEmailAndCode(e,r.code,r.tenantId)}}Yt.PROVIDER_ID="password";Yt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Qo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Vr{constructor(){super("facebook.com")}static credential(e){return pn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mt.credential(e.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Vr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pn._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qe.credential(n,r)}catch{return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Vr{constructor(){super("github.com")}static credential(e){return pn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.GITHUB_SIGN_IN_METHOD="github.com";Dt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Vr{constructor(){super("twitter.com")}static credential(e,n){return pn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.TWITTER_SIGN_IN_METHOD="twitter.com";Ut.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(t,e){return jr(t,"POST","/v1/accounts:signUp",wt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await an._fromIdTokenResponse(e,r,s),o=Sc(r);return new mn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Sc(r);return new mn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Sc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends Gt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Os.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Os(e,n,r,s)}}function _f(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Os._fromErrorAndOperation(t,i,e,r):i})}async function nv(t,e,n=!1){const r=await hn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yf(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await hn(t,_f(r,s,e,t),n);J(i.idToken,r,"internal-error");const o=qo(i.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),mn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vf(t,e,n=!1){const r="signIn",s=await _f(t,r,e),i=await mn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function rv(t,e){return vf(It(t),e)}async function bf(t,e){return yf(Ne(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t,e,n){var r;J(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),J(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(J(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(J(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ef(t){const e=It(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sv(t,e,n){const r=It(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Zo(r,s,n),await As(r,s,"getOobCode",Gy)}async function iv(t,e,n){const r=It(t),o=await As(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tv).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Ef(t),c}),a=await mn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function ov(t,e,n){return rv(Ne(t),Yt.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ef(t),r})}async function av(t,e){const n=Ne(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Zo(n.auth,s,e);const{email:i}=await qy(n.auth,s);i!==t.email&&await t.reload()}async function cv(t,e,n){const r=Ne(t),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Zo(r.auth,i,n);const{email:o}=await Yy(r.auth,i);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(t,e){return tt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wf(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ne(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await hn(r,lv(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function uv(t,e){return fv(Ne(t),null,e)}async function fv(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await hn(t,Wy(r,i));await t._updateTokensIfNecessary(o,!0)}function dv(t,e,n,r){return Ne(t).onIdTokenChanged(e,n,r)}function hv(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function pv(t,e,n,r){return Ne(t).onAuthStateChanged(e,n,r)}function mv(t){return Ne(t).signOut()}async function gv(t){return Ne(t).delete()}const ks="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ks,"1"),this.storage.removeItem(ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(){const t=Oe();return Go(t)||si(t)}const yv=1e3,vv=10;class Tf extends If{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_v()&&Ry(),this.fallbackToPolling=hf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Sy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vv):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tf.type="LOCAL";const bv=Tf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf extends If{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cf.type="SESSION";const Sf=Cf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ii(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Ev(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ii.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ea("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return window}function Iv(t){ct().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function Tv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Sv(){return Rf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="firebaseLocalStorageDb",Rv=1,Ns="firebaseLocalStorage",Af="fbase_key";class Wr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oi(t,e){return t.transaction([Ns],e?"readwrite":"readonly").objectStore(Ns)}function Pv(){const t=indexedDB.deleteDatabase(Pf);return new Wr(t).toPromise()}function ro(){const t=indexedDB.open(Pf,Rv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ns,{keyPath:Af})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ns)?e(r):(r.close(),await Pv(),e(await ro()))})})}async function Rc(t,e,n){const r=oi(t,!0).put({[Af]:e,value:n});return new Wr(r).toPromise()}async function Av(t,e){const n=oi(t,!1).get(e),r=await new Wr(n).toPromise();return r===void 0?null:r.value}function Pc(t,e){const n=oi(t,!0).delete(e);return new Wr(n).toPromise()}const Ov=800,kv=3;class Of{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ro(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ii._getInstance(Sv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Tv(),!this.activeServiceWorker)return;this.sender=new wv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ro();return await Rc(e,ks,"1"),await Pc(e,ks),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Av(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=oi(s,!1).getAll();return new Wr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ov)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Of.type="LOCAL";const Nv=Of;new Hr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t,e){return e?mt(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta extends Yo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ln(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ln(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xv(t){return vf(t.auth,new ta(t),t.bypassAuthState)}function Lv(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),yf(n,new ta(t),t.bypassAuthState)}async function Mv(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),nv(n,new ta(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xv;case"linkViaPopup":case"linkViaRedirect":return Mv;case"reauthViaPopup":case"reauthViaRedirect":return Lv;default:qe(this.auth,"internal-error")}}resolve(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=new Hr(2e3,1e4);async function Uv(t,e,n){const r=It(t);sy(t,e,Qo);const s=kf(r,n);return new nn(r,"signInViaPopup",e,s).executeNotNull()}class nn extends Nf{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,nn.currentPopupAction&&nn.currentPopupAction.cancel(),nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){vt(this.filter.length===1,"Popup operations only handle one event");const e=ea();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Dv.get())};e()}}nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="pendingRedirect",ls=new Map;class Bv extends Nf{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ls.get(this.auth._key());if(!e){try{const r=await $v(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ls.set(this.auth._key(),e)}return this.bypassAuthState||ls.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $v(t,e){const n=Vv(e),r=jv(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Hv(t,e){ls.set(t._key(),e)}function jv(t){return mt(t._redirectPersistence)}function Vv(t){return cs(Fv,t.config.apiKey,t.name)}async function Wv(t,e,n=!1){const r=It(t),s=kf(r,e),o=await new Bv(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=10*60*1e3;class zv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xf(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(at(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ac(e))}saveEventToCache(e){this.cachedEventUids.add(Ac(e)),this.lastProcessedEventTime=Date.now()}}function Ac(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xf(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gv(t,e={}){return tt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jv=/^https?/;async function Xv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Gv(t);for(const n of e)try{if(Qv(n))return}catch{}qe(t,"unauthorized-domain")}function Qv(t){const e=no(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Jv.test(n))return!1;if(Yv.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=new Hr(3e4,6e4);function Oc(){const t=ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eb(t){return new Promise((e,n)=>{var r,s,i;function o(){Oc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Oc(),n(at(t,"network-request-failed"))},timeout:Zv.get()})}if(!((s=(r=ct().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ct().gapi)===null||i===void 0)&&i.load)o();else{const a=Ly("iframefcb");return ct()[a]=()=>{gapi.load?o():n(at(t,"network-request-failed"))},mf(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw us=null,e})}let us=null;function tb(t){return us=us||eb(t),us}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=new Hr(5e3,15e3),rb="__/auth/iframe",sb="emulator/auth/iframe",ib={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ob=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ab(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zo(e,sb):`https://${t.config.authDomain}/${rb}`,r={apiKey:e.apiKey,appName:t.name,v:$r},s=ob.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Br(r).slice(1)}`}async function cb(t){const e=await tb(t),n=ct().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:ab(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ib,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=at(t,"network-request-failed"),a=ct().setTimeout(()=>{i(o)},nb.get());function c(){ct().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ub=500,fb=600,db="_blank",hb="http://localhost";class kc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pb(t,e,n,r=ub,s=fb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},lb),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Oe().toLowerCase();n&&(a=cf(l)?db:n),af(l)&&(e=e||hb,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[_,E])=>`${d}${_}=${E},`,"");if(Cy(l)&&a!=="_self")return mb(e||"",a),new kc(null);const f=window.open(e||"",a,u);J(f,t,"popup-blocked");try{f.focus()}catch{}return new kc(f)}function mb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="__/auth/handler",_b="emulator/auth/handler",yb=encodeURIComponent("fac");async function Nc(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$r,eventId:s};if(e instanceof Qo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(e instanceof Vr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${yb}=${encodeURIComponent(c)}`:"";return`${vb(t)}?${Br(a).slice(1)}${l}`}function vb({config:t}){return t.emulator?zo(t,_b):`https://${t.authDomain}/${gb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="webStorageSupport";class bb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sf,this._completeRedirectFn=Wv,this._overrideRedirectResult=Hv}async _openPopup(e,n,r,s){var i;vt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Nc(e,n,r,no(),s);return pb(e,o,ea())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Nc(e,n,r,no(),s);return Iv(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(vt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cb(e),r=new zv(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Si,{type:Si},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Si];o!==void 0&&n(!!o),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Xv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hf()||Go()||si()}}const Eb=bb;var xc="@firebase/auth",Lc="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Tb(t){Cr(new Vn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pf(t)},l=new Ny(r,s,i,c);return $y(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cr(new Vn("auth-internal",e=>{const n=It(e.getProvider("auth").getImmediate());return(r=>new wb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(xc,Lc,Ib(t)),Nn(xc,Lc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=5*60,Sb=Wu("authIdTokenMaxAge")||Cb;let Mc=null;const Rb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Sb)return;const s=n==null?void 0:n.token;Mc!==s&&(Mc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Pb(t=z_()){const e=Gu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=By(t,{popupRedirectResolver:Eb,persistence:[Nv,bv,Sf]}),r=Wu("authTokenSyncURL");if(r){const i=Rb(r);hv(n,i,()=>i(n.currentUser)),dv(n,o=>i(o))}const s=Mg("auth");return s&&Hy(n,`http://${s}`),n}Tb("Browser");var Ab="firebase",Ob="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(Ab,Ob,"app");const kb={apiKey:"AIzaSyCrQtLsUmieL3gjDRejw0L4guqSFjXxm9E",authDomain:"puzzeul.firebaseapp.com",projectId:"puzzeul",storageBucket:{}.VITE__FIREBASE_STORAGE_BUCKET,messagingSenderId:"38012960165",appId:"1:38012960165:web:32b1538670ce0cb85efc4c",databaseURL:"https://vuestock-8db09-default-rtdb.europe-west1.firebasedatabase.app"},Nb=Yu(kb),Ae=Pb(Nb);function xb(){return new Promise((t,e)=>{const n=pv(Ae,r=>{n(),t(r)},e)})}function qb(t,e,n){return new Promise((r,s)=>{iv(Ae,t,e).then(i=>{i.user,wf(Ae.currentUser,{displayName:n}).then(()=>{r()}).catch(o=>{gv(Ae.currentUser).then(()=>{}).catch(a=>{}),s(o)})}).catch(i=>{s(i)})})}function Lb(){const t=Ur(),{logout:e}=t;return new Promise((n,r)=>{mv(Ae).then(()=>{e(),n()}).catch(s=>{r()})})}function Gb(t,e){return new Promise((n,r)=>{ov(Ae,t,e).then(s=>{n()}).catch(s=>{r()})})}function Yb(){const t=new Qe;return new Promise((e,n)=>{Uv(Ae,t).then(r=>{Qe.credentialFromResult(r).accessToken,r.user,e()}).catch(r=>{r.code,r.message,r.customData.email,Qe.credentialFromError(r),n()})})}function Jb(t){return new Promise((e,n)=>{wf(Ae.currentUser,{displayName:t.value}).then(()=>{e()}).catch(r=>{n()})})}function Xb(t,e){return new Promise((n,r)=>{const s=Yt.credential(Ae.currentUser.email,e);bf(Ae.currentUser,s).then(()=>{cv(Ae.currentUser,t.value).then(()=>{n()}).catch(i=>{r()})}).catch(i=>{r()})})}function Qb(t,e){return new Promise((n,r)=>{const s=Yt.credential(Ae.currentUser.email,t);bf(Ae.currentUser,s).then(()=>{uv(Ae.currentUser,e).then(()=>{n()}).catch(i=>{r()})}).catch(i=>{r()})})}function Zb(){return new Promise((t,e)=>{av(Ae.currentUser).then(()=>{t()}).catch(n=>{e()})})}function eE(t){return new Promise((e,n)=>{sv(Ae,t).then(()=>{e()}).catch(r=>{n()})})}const Mb={key:0,class:"relative w-fit"},Db={class:"mr-4"},Ub=_e("svg",{class:"w-5 h-5 text-indigo-100 dark:text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[_e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Fb={class:"absolute right-0 py-2 mt-2 bg-indigo-500 rounded-md shadow-xl w-44 z-10"},Bb={key:1},$b={__name:"DropdownMenu",setup(t){const e=Ho(),n=Ru.useToast(),r=Ur(),{userName:s}=Is(r);let i=ue(!1);async function o(){try{await Lb();let a=n.success("Vous êtes bien déconnecté");e.replace("Login")}catch{n.error("Un problème est survenu lors de la déconnexion!")}}return(a,c)=>{const l=Sl("router-link");return be(),Se("div",null,[we(s)?(be(),Se("div",Mb,[_e("button",{onClick:c[0]||(c[0]=u=>pe(i)?i.value=!we(i):i=!we(i)),class:"flex items-center p-2 text-indigo-100 bg-indigo-600 rounded-md"},[_e("span",Db,mr(we(s)),1),Ub]),Io(_e("div",Fb,[oe(l,{to:"/profil",class:"block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100"},{default:Vs(()=>[Xs(" Mon profil ")]),_:1}),_e("button",{onClick:c[1]||(c[1]=u=>o()),class:"w-full text-left px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100"}," Se déconnecter ")],512),[[Mo,we(i)]])])):(be(),Se("div",Bb,[_e("button",{onClick:c[2]||(c[2]=u=>we(e).replace("Login"))},"Connexion")]))])}}};const Hb={class:"game-header"},jb=["src"],Vb={__name:"Header",setup(t){const e=Ho();return(n,r)=>(be(),Se("div",Hb,[_e("img",{src:we(Rg),alt:"Logo",class:"logo",onClick:r[0]||(r[0]=s=>we(e).replace("/"))},null,8,jb),oe($b)]))}},Wb={__name:"HomeView",setup(t){return(e,n)=>(be(),Se(ye,null,[_e("header",null,[oe(Vb)]),oe(Sg)],64))}},Lf=og({history:Im("/"),routes:[{path:"/",name:"home",component:Wb},{path:"/game",name:"game",component:()=>Qn(()=>import("./GameView-892ac02d.js"),[])},{path:"/login",name:"Login",component:()=>Qn(()=>import("./Login-9b97f23e.js"),[])},{path:"/signup",name:"Signup",component:()=>Qn(()=>import("./Signup-f9f7d440.js"),[])},{path:"/profil",name:"Profil",component:()=>Qn(()=>import("./Profil-f5a39adb.js"),[])},{path:"/resetPassword",name:"ResetPassword",component:()=>Qn(()=>import("./ResetPassword-e8d59b84.js"),[])}]});Lf.beforeEach(async(t,e)=>{const n=Ur(),{updateUser:r}=n;try{const s=await xb();if(s){if(t.name==="Login"||t.name==="Signup"||t.name==="ResetPassword")return{name:"Home"};r(s.displayName,s.email,s.emailVerified,s.providerData[0].providerId,s.uid)}return!0}catch(s){return console.log(s),{name:"Login"}}});const ai=vu(cg);ai.use(Yp());ai.use(im);ai.use(Lf);ai.mount("#app");export{Ru as A,Is as B,pe as C,Zb as D,Jb as E,ye as F,Xb as G,Qb as H,eE as I,yg as _,Kb as a,zb as b,vn as c,be as d,Se as e,ql as f,_e as g,oe as h,we as i,_s as j,dg as k,Vb as l,Ho as m,kr as n,Gs as o,Xs as p,Io as q,ue as r,Gb as s,mr as t,fg as u,ws as v,Hp as w,Yb as x,qb as y,Ur as z};
