(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Ko(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ve={},As=[],St=()=>{},Y_=()=>!1,Q_=/^on[^a-z]/,pr=t=>Q_.test(t),il=t=>t.startsWith("onUpdate:"),Ie=Object.assign,rl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},J_=Object.prototype.hasOwnProperty,ue=(t,e)=>J_.call(t,e),q=Array.isArray,Ps=t=>ti(t)==="[object Map]",ds=t=>ti(t)==="[object Set]",Yu=t=>ti(t)==="[object Date]",X_=t=>ti(t)==="[object RegExp]",Z=t=>typeof t=="function",Se=t=>typeof t=="string",Hs=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",ol=t=>(Ee(t)||Z(t))&&Z(t.then)&&Z(t.catch),wd=Object.prototype.toString,ti=t=>wd.call(t),Z_=t=>ti(t).slice(8,-1),bd=t=>ti(t)==="[object Object]",al=t=>Se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ki=Ko(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Go=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ey=/-(\w)/g,st=Go(t=>t.replace(ey,(e,n)=>n?n.toUpperCase():"")),ty=/\B([A-Z])/g,pt=Go(t=>t.replace(ty,"-$1").toLowerCase()),gr=Go(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ai=Go(t=>t?`on${gr(t)}`:""),kn=(t,e)=>!Object.is(t,e),Ns=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},co=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},lo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},uo=t=>{const e=Se(t)?Number(t):NaN;return isNaN(e)?t:e};let Qu;const oc=()=>Qu||(Qu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ny="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",sy=Ko(ny);function mr(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Se(s)?ay(s):mr(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Se(t)||Ee(t))return t}const iy=/;(?![^(]*\))/g,ry=/:([^]+)/,oy=/\/\*[^]*?\*\//g;function ay(t){const e={};return t.replace(oy,"").split(iy).forEach(n=>{if(n){const s=n.split(ry);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ni(t){let e="";if(Se(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const s=ni(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function cy(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Se(e)&&(t.class=ni(e)),n&&(t.style=mr(n)),t}const ly="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uy=Ko(ly);function Cd(t){return!!t||t===""}function hy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=An(t[s],e[s]);return n}function An(t,e){if(t===e)return!0;let n=Yu(t),s=Yu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Hs(t),s=Hs(e),n||s)return t===e;if(n=q(t),s=q(e),n||s)return n&&s?hy(t,e):!1;if(n=Ee(t),s=Ee(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!An(t[o],e[o]))return!1}}return String(t)===String(e)}function Yo(t,e){return t.findIndex(n=>An(n,e))}const Wi=t=>Se(t)?t:t==null?"":q(t)||Ee(t)&&(t.toString===wd||!Z(t.toString))?JSON.stringify(t,Td,2):String(t),Td=(t,e)=>e&&e.__v_isRef?Td(t,e.value):Ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:ds(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!q(e)&&!bd(e)?String(e):e;let at;class cl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=at,!e&&at&&(this.index=(at.scopes||(at.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=at;try{return at=this,e()}finally{at=n}}}on(){at=this}off(){at=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ll(t){return new cl(t)}function Id(t,e=at){e&&e.active&&e.effects.push(t)}function ul(){return at}function Sd(t){at&&at.cleanups.push(t)}const hl=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Rd=t=>(t.w&Pn)>0,kd=t=>(t.n&Pn)>0,fy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pn},dy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Rd(i)&&!kd(i)?i.delete(t):e[n++]=i,i.w&=~Pn,i.n&=~Pn}e.length=n}},ho=new WeakMap;let wi=0,Pn=1;const ac=30;let wt;const Yn=Symbol(""),cc=Symbol("");class $s{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Id(this,s)}run(){if(!this.active)return this.fn();let e=wt,n=bn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=wt,wt=this,bn=!0,Pn=1<<++wi,wi<=ac?fy(this):Ju(this),this.fn()}finally{wi<=ac&&dy(this),Pn=1<<--wi,wt=this.parent,bn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(Ju(this),this.onStop&&this.onStop(),this.active=!1)}}function Ju(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function py(t,e){t.effect instanceof $s&&(t=t.effect.fn);const n=new $s(t);e&&(Ie(n,e),e.scope&&Id(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function gy(t){t.effect.stop()}let bn=!0;const Ad=[];function si(){Ad.push(bn),bn=!1}function ii(){const t=Ad.pop();bn=t===void 0?!0:t}function rt(t,e,n){if(bn&&wt){let s=ho.get(t);s||ho.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=hl()),Pd(i)}}function Pd(t,e){let n=!1;wi<=ac?kd(t)||(t.n|=Pn,n=!Rd(t)):n=!t.has(wt),n&&(t.add(wt),wt.deps.push(t))}function Yt(t,e,n,s,i,r){const o=ho.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||!Hs(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?al(n)&&a.push(o.get("length")):(a.push(o.get(Yn)),Ps(t)&&a.push(o.get(cc)));break;case"delete":q(t)||(a.push(o.get(Yn)),Ps(t)&&a.push(o.get(cc)));break;case"set":Ps(t)&&a.push(o.get(Yn));break}if(a.length===1)a[0]&&lc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);lc(hl(c))}}function lc(t,e){const n=q(t)?t:[...t];for(const s of n)s.computed&&Xu(s);for(const s of n)s.computed||Xu(s)}function Xu(t,e){(t!==wt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function my(t,e){var n;return(n=ho.get(t))==null?void 0:n.get(e)}const _y=Ko("__proto__,__v_isRef,__isVue"),Nd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Hs)),Zu=yy();function yy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ae(this);for(let r=0,o=this.length;r<o;r++)rt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ae)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){si();const s=ae(this)[e].apply(this,n);return ii(),s}}),t}function vy(t){const e=ae(this);return rt(e,"has",t),e.hasOwnProperty(t)}class Od{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw"&&s===(i?r?Ud:Fd:r?Md:Ld).get(e))return e;const o=q(e);if(!i){if(o&&ue(Zu,n))return Reflect.get(Zu,n,s);if(n==="hasOwnProperty")return vy}const a=Reflect.get(e,n,s);return(Hs(n)?Nd.has(n):_y(n))||(i||rt(e,"get",n),r)?a:Te(a)?o&&al(n)?a:a.value:Ee(a)?i?pl(a):ps(a):a}}class xd extends Od{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(es(r)&&Te(r)&&!Te(s))return!1;if(!this._shallow&&(!ji(s)&&!es(s)&&(r=ae(r),s=ae(s)),!q(e)&&Te(r)&&!Te(s)))return r.value=s,!0;const o=q(e)&&al(n)?Number(n)<e.length:ue(e,n),a=Reflect.set(e,n,s,i);return e===ae(i)&&(o?kn(s,r)&&Yt(e,"set",n,s):Yt(e,"add",n,s)),a}deleteProperty(e,n){const s=ue(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Yt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Hs(n)||!Nd.has(n))&&rt(e,"has",n),s}ownKeys(e){return rt(e,"iterate",q(e)?"length":Yn),Reflect.ownKeys(e)}}class Dd extends Od{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ey=new xd,wy=new Dd,by=new xd(!0),Cy=new Dd(!0),fl=t=>t,Qo=t=>Reflect.getPrototypeOf(t);function Dr(t,e,n=!1,s=!1){t=t.__v_raw;const i=ae(t),r=ae(e);n||(kn(e,r)&&rt(i,"get",e),rt(i,"get",r));const{has:o}=Qo(i),a=s?fl:n?ml:qi;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Lr(t,e=!1){const n=this.__v_raw,s=ae(n),i=ae(t);return e||(kn(t,i)&&rt(s,"has",t),rt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Mr(t,e=!1){return t=t.__v_raw,!e&&rt(ae(t),"iterate",Yn),Reflect.get(t,"size",t)}function eh(t){t=ae(t);const e=ae(this);return Qo(e).has.call(e,t)||(e.add(t),Yt(e,"add",t,t)),this}function th(t,e){e=ae(e);const n=ae(this),{has:s,get:i}=Qo(n);let r=s.call(n,t);r||(t=ae(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?kn(e,o)&&Yt(n,"set",t,e):Yt(n,"add",t,e),this}function nh(t){const e=ae(this),{has:n,get:s}=Qo(e);let i=n.call(e,t);i||(t=ae(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Yt(e,"delete",t,void 0),r}function sh(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&Yt(t,"clear",void 0,void 0),n}function Fr(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ae(o),c=e?fl:t?ml:qi;return!t&&rt(a,"iterate",Yn),o.forEach((l,u)=>s.call(i,c(l),c(u),r))}}function Ur(t,e,n){return function(...s){const i=this.__v_raw,r=ae(i),o=Ps(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...s),u=n?fl:e?ml:qi;return!e&&rt(r,"iterate",c?cc:Yn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ln(t){return function(...e){return t==="delete"?!1:this}}function Ty(){const t={get(r){return Dr(this,r)},get size(){return Mr(this)},has:Lr,add:eh,set:th,delete:nh,clear:sh,forEach:Fr(!1,!1)},e={get(r){return Dr(this,r,!1,!0)},get size(){return Mr(this)},has:Lr,add:eh,set:th,delete:nh,clear:sh,forEach:Fr(!1,!0)},n={get(r){return Dr(this,r,!0)},get size(){return Mr(this,!0)},has(r){return Lr.call(this,r,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:Fr(!0,!1)},s={get(r){return Dr(this,r,!0,!0)},get size(){return Mr(this,!0)},has(r){return Lr.call(this,r,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:Fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ur(r,!1,!1),n[r]=Ur(r,!0,!1),e[r]=Ur(r,!1,!0),s[r]=Ur(r,!0,!0)}),[t,n,e,s]}const[Iy,Sy,Ry,ky]=Ty();function Jo(t,e){const n=e?t?ky:Ry:t?Sy:Iy;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ue(n,i)&&i in s?n:s,i,r)}const Ay={get:Jo(!1,!1)},Py={get:Jo(!1,!0)},Ny={get:Jo(!0,!1)},Oy={get:Jo(!0,!0)},Ld=new WeakMap,Md=new WeakMap,Fd=new WeakMap,Ud=new WeakMap;function xy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dy(t){return t.__v_skip||!Object.isExtensible(t)?0:xy(Z_(t))}function ps(t){return es(t)?t:Xo(t,!1,Ey,Ay,Ld)}function dl(t){return Xo(t,!1,by,Py,Md)}function pl(t){return Xo(t,!0,wy,Ny,Fd)}function Ly(t){return Xo(t,!0,Cy,Oy,Ud)}function Xo(t,e,n,s,i){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Dy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Dt(t){return es(t)?Dt(t.__v_raw):!!(t&&t.__v_isReactive)}function es(t){return!!(t&&t.__v_isReadonly)}function ji(t){return!!(t&&t.__v_isShallow)}function gl(t){return Dt(t)||es(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function _r(t){return co(t,"__v_skip",!0),t}const qi=t=>Ee(t)?ps(t):t,ml=t=>Ee(t)?pl(t):t;function _l(t){bn&&wt&&(t=ae(t),Pd(t.dep||(t.dep=hl())))}function Zo(t,e){t=ae(t);const n=t.dep;n&&lc(n)}function Te(t){return!!(t&&t.__v_isRef===!0)}function ge(t){return Hd(t,!1)}function Bd(t){return Hd(t,!0)}function Hd(t,e){return Te(t)?t:new My(t,e)}class My{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:qi(e)}get value(){return _l(this),this._value}set value(e){const n=this.__v_isShallow||ji(e)||es(e);e=n?e:ae(e),kn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:qi(e),Zo(this))}}function Fy(t){Zo(t)}function Be(t){return Te(t)?t.value:t}function Uy(t){return Z(t)?t():Be(t)}const By={get:(t,e,n)=>Be(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Te(i)&&!Te(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function yl(t){return Dt(t)?t:new Proxy(t,By)}class Hy{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>_l(this),()=>Zo(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function $y(t){return new Hy(t)}function $d(t){const e=q(t)?new Array(t.length):{};for(const n in t)e[n]=Wd(t,n);return e}class Vy{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return my(ae(this._object),this._key)}}class Wy{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Vd(t,e,n){return Te(t)?t:Z(t)?new Wy(t):Ee(t)&&arguments.length>1?Wd(t,e,n):ge(t)}function Wd(t,e,n){const s=t[e];return Te(s)?s:new Vy(t,e,n)}class jy{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new $s(e,()=>{this._dirty||(this._dirty=!0,Zo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ae(this);return _l(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qy(t,e,n=!1){let s,i;const r=Z(t);return r?(s=t,i=St):(s=t.get,i=t.set),new jy(s,i,r||!i,n)}function zy(t,...e){}function Ky(t,e){}function Qt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){gs(r,e,n)}return i}function ut(t,e,n,s){if(Z(t)){const r=Qt(t,e,n,s);return r&&ol(r)&&r.catch(o=>{gs(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(ut(t[r],e,n,s));return i}function gs(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const l=r.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Qt(c,null,10,[t,o,a]);return}}Gy(t,n,i,s)}function Gy(t,e,n,s=!0){console.error(t)}let zi=!1,uc=!1;const Ke=[];let xt=0;const Os=[];let Wt=null,Wn=0;const jd=Promise.resolve();let vl=null;function yr(t){const e=vl||jd;return t?e.then(this?t.bind(this):t):e}function Yy(t){let e=xt+1,n=Ke.length;for(;e<n;){const s=e+n>>>1,i=Ke[s],r=Ki(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function ea(t){(!Ke.length||!Ke.includes(t,zi&&t.allowRecurse?xt+1:xt))&&(t.id==null?Ke.push(t):Ke.splice(Yy(t.id),0,t),qd())}function qd(){!zi&&!uc&&(uc=!0,vl=jd.then(zd))}function Qy(t){const e=Ke.indexOf(t);e>xt&&Ke.splice(e,1)}function fo(t){q(t)?Os.push(...t):(!Wt||!Wt.includes(t,t.allowRecurse?Wn+1:Wn))&&Os.push(t),qd()}function ih(t,e=zi?xt+1:0){for(;e<Ke.length;e++){const n=Ke[e];n&&n.pre&&(Ke.splice(e,1),e--,n())}}function po(t){if(Os.length){const e=[...new Set(Os)];if(Os.length=0,Wt){Wt.push(...e);return}for(Wt=e,Wt.sort((n,s)=>Ki(n)-Ki(s)),Wn=0;Wn<Wt.length;Wn++)Wt[Wn]();Wt=null,Wn=0}}const Ki=t=>t.id==null?1/0:t.id,Jy=(t,e)=>{const n=Ki(t)-Ki(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function zd(t){uc=!1,zi=!0,Ke.sort(Jy);const e=St;try{for(xt=0;xt<Ke.length;xt++){const n=Ke[xt];n&&n.active!==!1&&Qt(n,null,14)}}finally{xt=0,Ke.length=0,po(),zi=!1,vl=null,(Ke.length||Os.length)&&zd()}}let Is,Br=[];function Kd(t,e){var n,s;Is=t,Is?(Is.enabled=!0,Br.forEach(({event:i,args:r})=>Is.emit(i,...r)),Br=[]):typeof window<"u"&&window.HTMLElement&&!((s=(n=window.navigator)==null?void 0:n.userAgent)!=null&&s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Kd(r,e)}),setTimeout(()=>{Is||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Br=[])},3e3)):Br=[]}function Xy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ve;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ve;f&&(i=n.map(p=>Se(p)?p.trim():p)),h&&(i=n.map(lo))}let a,c=s[a=Ai(e)]||s[a=Ai(st(e))];!c&&r&&(c=s[a=Ai(pt(e))]),c&&ut(c,t,6,i);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ut(l,t,6,i)}}function Gd(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=Gd(l,e,!0);u&&(a=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(Ee(t)&&s.set(t,null),null):(q(r)?r.forEach(c=>o[c]=null):Ie(o,r),Ee(t)&&s.set(t,o),o)}function ta(t,e){return!t||!pr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,pt(e))||ue(t,e))}let $e=null,na=null;function Gi(t){const e=$e;return $e=t,na=t&&t.type.__scopeId||null,e}function Zy(t){na=t}function ev(){na=null}const tv=t=>Yi;function Yi(t,e=$e,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&_c(-1);const r=Gi(e);let o;try{o=t(...i)}finally{Gi(r),s._d&&_c(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Zr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:_,inheritAttrs:T}=t;let O,D;const C=Gi(t);try{if(n.shapeFlag&4){const m=i||s;O=ct(u.call(m,m,h,r,p,f,_)),D=c}else{const m=e;O=ct(m.length>1?m(r,{attrs:c,slots:a,emit:l}):m(r,null)),D=e.props?c:sv(c)}}catch(m){xi.length=0,gs(m,t,1),O=fe(Ge)}let v=O;if(D&&T!==!1){const m=Object.keys(D),{shapeFlag:S}=v;m.length&&S&7&&(o&&m.some(il)&&(D=iv(D,o)),v=Ut(v,D))}return n.dirs&&(v=Ut(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),O=v,Gi(C),O}function nv(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(Nn(s)){if(s.type!==Ge||s.children==="v-if"){if(e)return;e=s}}else return}return e}const sv=t=>{let e;for(const n in t)(n==="class"||n==="style"||pr(n))&&((e||(e={}))[n]=t[n]);return e},iv=(t,e)=>{const n={};for(const s in t)(!il(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function rv(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?rh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!ta(l,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?rh(s,o,l):!0:!!o;return!1}function rh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ta(n,r))return!0}return!1}function El({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Yd=t=>t.__isSuspense,ov={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,a,c,l){t==null?cv(e,n,s,i,r,o,a,c,l):lv(t,e,n,s,i,o,a,c,l)},hydrate:uv,create:wl,normalize:hv},av=ov;function Qi(t,e){const n=t.props&&t.props[e];Z(n)&&n()}function cv(t,e,n,s,i,r,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=t.suspense=wl(t,i,s,e,h,n,r,o,a,c);l(null,f.pendingBranch=t.ssContent,h,null,s,f,r,o),f.deps>0?(Qi(t,"onPending"),Qi(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,r,o),xs(f,t.ssFallback)):f.resolve(!1,!0)}function lv(t,e,n,s,i,r,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,p=e.ssFallback,{activeBranch:_,pendingBranch:T,isInFallback:O,isHydrating:D}=h;if(T)h.pendingBranch=f,bt(f,T)?(c(T,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():O&&(c(_,p,n,s,i,null,r,o,a),xs(h,p))):(h.pendingId++,D?(h.isHydrating=!1,h.activeBranch=T):l(T,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),O?(c(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0?h.resolve():(c(_,p,n,s,i,null,r,o,a),xs(h,p))):_&&bt(f,_)?(c(_,f,n,s,i,h,r,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0&&h.resolve()));else if(_&&bt(f,_))c(_,f,n,s,i,h,r,o,a),xs(h,f);else if(Qi(e,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,i,h,r,o,a),h.deps<=0)h.resolve();else{const{timeout:C,pendingId:v}=h;C>0?setTimeout(()=>{h.pendingId===v&&h.fallback(p)},C):C===0&&h.fallback(p)}}function wl(t,e,n,s,i,r,o,a,c,l,u=!1){const{p:h,m:f,um:p,n:_,o:{parentNode:T,remove:O}}=l;let D;const C=fv(t);C&&e!=null&&e.pendingBranch&&(D=e.pendingId,e.deps++);const v=t.props?uo(t.props.timeout):void 0,m={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(S=!1,F=!1){const{vnode:I,activeBranch:b,pendingBranch:y,pendingId:w,effects:P,parentComponent:R,container:B}=m;let ee=!1;if(m.isHydrating)m.isHydrating=!1;else if(!S){ee=b&&y.transition&&y.transition.mode==="out-in",ee&&(b.transition.afterLeave=()=>{w===m.pendingId&&(f(y,B,te,0),fo(P))});let{anchor:te}=m;b&&(te=_(b),p(b,R,m,!0)),ee||f(y,B,te,0)}xs(m,y),m.pendingBranch=null,m.isInFallback=!1;let ne=m.parent,V=!1;for(;ne;){if(ne.pendingBranch){ne.effects.push(...P),V=!0;break}ne=ne.parent}!V&&!ee&&fo(P),m.effects=[],C&&e&&e.pendingBranch&&D===e.pendingId&&(e.deps--,e.deps===0&&!F&&e.resolve()),Qi(I,"onResolve")},fallback(S){if(!m.pendingBranch)return;const{vnode:F,activeBranch:I,parentComponent:b,container:y,isSVG:w}=m;Qi(F,"onFallback");const P=_(I),R=()=>{m.isInFallback&&(h(null,S,y,P,b,null,w,a,c),xs(m,S))},B=S.transition&&S.transition.mode==="out-in";B&&(I.transition.afterLeave=R),m.isInFallback=!0,p(I,b,null,!0),B||R()},move(S,F,I){m.activeBranch&&f(m.activeBranch,S,F,I),m.container=S},next(){return m.activeBranch&&_(m.activeBranch)},registerDep(S,F){const I=!!m.pendingBranch;I&&m.deps++;const b=S.vnode.el;S.asyncDep.catch(y=>{gs(y,S,0)}).then(y=>{if(S.isUnmounted||m.isUnmounted||m.pendingId!==S.suspenseId)return;S.asyncResolved=!0;const{vnode:w}=S;yc(S,y,!1),b&&(w.el=b);const P=!b&&S.subTree.el;F(S,w,T(b||S.subTree.el),b?null:_(S.subTree),m,o,c),P&&O(P),El(S,w.el),I&&--m.deps===0&&m.resolve()})},unmount(S,F){m.isUnmounted=!0,m.activeBranch&&p(m.activeBranch,n,S,F),m.pendingBranch&&p(m.pendingBranch,n,S,F)}};return m}function uv(t,e,n,s,i,r,o,a,c){const l=e.suspense=wl(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,r,o);return l.deps===0&&l.resolve(!1,!0),u}function hv(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=oh(s?n.default:n),t.ssFallback=s?oh(n.fallback):fe(Ge)}function oh(t){let e;if(Z(t)){const n=ss&&t._c;n&&(t._d=!1,xe()),t=t(),n&&(t._d=!0,e=et,kp())}return q(t)&&(t=nv(t)),t=ct(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Qd(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):fo(t)}function xs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,El(s,i))}function fv(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function Jd(t,e){return vr(t,null,e)}function Xd(t,e){return vr(t,null,{flush:"post"})}function dv(t,e){return vr(t,null,{flush:"sync"})}const Hr={};function Jt(t,e,n){return vr(t,e,n)}function vr(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ve){var a;const c=ul()===((a=Le)==null?void 0:a.scope)?Le:null;let l,u=!1,h=!1;if(Te(t)?(l=()=>t.value,u=ji(t)):Dt(t)?(l=()=>t,s=!0):q(t)?(h=!0,u=t.some(m=>Dt(m)||ji(m)),l=()=>t.map(m=>{if(Te(m))return m.value;if(Dt(m))return qn(m);if(Z(m))return Qt(m,c,2)})):Z(t)?e?l=()=>Qt(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),ut(t,c,3,[p])}:l=St,e&&s){const m=l;l=()=>qn(m())}let f,p=m=>{f=C.onStop=()=>{Qt(m,c,4)}},_;if(Ws)if(p=St,e?n&&ut(e,c,3,[l(),h?[]:void 0,p]):l(),i==="sync"){const m=Hp();_=m.__watcherHandles||(m.__watcherHandles=[])}else return St;let T=h?new Array(t.length).fill(Hr):Hr;const O=()=>{if(C.active)if(e){const m=C.run();(s||u||(h?m.some((S,F)=>kn(S,T[F])):kn(m,T)))&&(f&&f(),ut(e,c,3,[m,T===Hr?void 0:h&&T[0]===Hr?[]:T,p]),T=m)}else C.run()};O.allowRecurse=!!e;let D;i==="sync"?D=O:i==="post"?D=()=>We(O,c&&c.suspense):(O.pre=!0,c&&(O.id=c.uid),D=()=>ea(O));const C=new $s(l,D);e?n?O():T=C.run():i==="post"?We(C.run.bind(C),c&&c.suspense):C.run();const v=()=>{C.stop(),c&&c.scope&&rl(c.scope.effects,C)};return _&&_.push(v),v}function pv(t,e,n){const s=this.proxy,i=Se(t)?t.includes(".")?Zd(s,t):()=>s[t]:t.bind(s,s);let r;Z(e)?r=e:(r=e.handler,n=e);const o=Le;On(this);const a=vr(i,r.bind(s),n);return o?On(o):Cn(),a}function Zd(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function qn(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Te(t))qn(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)qn(t[n],e);else if(ds(t)||Ps(t))t.forEach(n=>{qn(n,e)});else if(bd(t))for(const n in t)qn(t[n],e);return t}function bl(t,e){const n=$e;if(n===null)return t;const s=ua(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,c,l=ve]=e[r];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&qn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ot(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(si(),ut(c,n,8,[t.el,a,t,e]),ii())}}const mn=Symbol("_leaveCb"),$r=Symbol("_enterCb");function Cl(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ms(()=>{t.isMounted=!0}),oa(()=>{t.isUnmounting=!0}),t}const ft=[Function,Array],Tl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ft,onEnter:ft,onAfterEnter:ft,onEnterCancelled:ft,onBeforeLeave:ft,onLeave:ft,onAfterLeave:ft,onLeaveCancelled:ft,onBeforeAppear:ft,onAppear:ft,onAfterAppear:ft,onAppearCancelled:ft},gv={name:"BaseTransition",props:Tl,setup(t,{slots:e}){const n=sn(),s=Cl();let i;return()=>{const r=e.default&&sa(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const T of r)if(T.type!==Ge){o=T;break}}const a=ae(t),{mode:c}=a;if(s.isLeaving)return Oa(o);const l=ah(o);if(!l)return Oa(o);const u=Vs(l,a,s,n);ts(l,u);const h=n.subTree,f=h&&ah(h);let p=!1;const{getTransitionKey:_}=l.type;if(_){const T=_();i===void 0?i=T:T!==i&&(i=T,p=!0)}if(f&&f.type!==Ge&&(!bt(l,f)||p)){const T=Vs(f,a,s,n);if(ts(f,T),c==="out-in")return s.isLeaving=!0,T.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Oa(o);c==="in-out"&&l.type!==Ge&&(T.delayLeave=(O,D,C)=>{const v=tp(s,f);v[String(f.key)]=f,O[mn]=()=>{D(),O[mn]=void 0,delete u.delayedLeave},u.delayedLeave=C})}return o}}},ep=gv;function tp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Vs(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:_,onBeforeAppear:T,onAppear:O,onAfterAppear:D,onAppearCancelled:C}=e,v=String(t.key),m=tp(n,t),S=(b,y)=>{b&&ut(b,s,9,y)},F=(b,y)=>{const w=y[1];S(b,y),q(b)?b.every(P=>P.length<=1)&&w():b.length<=1&&w()},I={mode:r,persisted:o,beforeEnter(b){let y=a;if(!n.isMounted)if(i)y=T||a;else return;b[mn]&&b[mn](!0);const w=m[v];w&&bt(t,w)&&w.el[mn]&&w.el[mn](),S(y,[b])},enter(b){let y=c,w=l,P=u;if(!n.isMounted)if(i)y=O||c,w=D||l,P=C||u;else return;let R=!1;const B=b[$r]=ee=>{R||(R=!0,ee?S(P,[b]):S(w,[b]),I.delayedLeave&&I.delayedLeave(),b[$r]=void 0)};y?F(y,[b,B]):B()},leave(b,y){const w=String(t.key);if(b[$r]&&b[$r](!0),n.isUnmounting)return y();S(h,[b]);let P=!1;const R=b[mn]=B=>{P||(P=!0,y(),B?S(_,[b]):S(p,[b]),b[mn]=void 0,m[w]===t&&delete m[w])};m[w]=t,f?F(f,[b,R]):R()},clone(b){return Vs(b,e,n,s)}};return I}function Oa(t){if(wr(t))return t=Ut(t),t.children=null,t}function ah(t){return wr(t)?t.children?t.children[0]:void 0:t}function ts(t,e){t.shapeFlag&6&&t.component?ts(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function sa(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ae?(o.patchFlag&128&&i++,s=s.concat(sa(o.children,e,a))):(e||o.type!==Ge)&&s.push(a!=null?Ut(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Er(t,e){return Z(t)?(()=>Ie({name:t.name},e,{setup:t}))():t}const Qn=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function mv(t){Z(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:i=200,timeout:r,suspensible:o=!0,onError:a}=t;let c=null,l,u=0;const h=()=>(u++,c=null,f()),f=()=>{let p;return c||(p=c=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),a)return new Promise((T,O)=>{a(_,()=>T(h()),()=>O(_),u+1)});throw _}).then(_=>p!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),l=_,_)))};return Er({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return l},setup(){const p=Le;if(l)return()=>xa(l,p);const _=C=>{c=null,gs(C,p,13,!s)};if(o&&p.suspense||Ws)return f().then(C=>()=>xa(C,p)).catch(C=>(_(C),()=>s?fe(s,{error:C}):null));const T=ge(!1),O=ge(),D=ge(!!i);return i&&setTimeout(()=>{D.value=!1},i),r!=null&&setTimeout(()=>{if(!T.value&&!O.value){const C=new Error(`Async component timed out after ${r}ms.`);_(C),O.value=C}},r),f().then(()=>{T.value=!0,p.parent&&wr(p.parent.vnode)&&ea(p.parent.update)}).catch(C=>{_(C),O.value=C}),()=>{if(T.value&&l)return xa(l,p);if(O.value&&s)return fe(s,{error:O.value});if(n&&!D.value)return fe(n)}}})}function xa(t,e){const{ref:n,props:s,children:i,ce:r}=e.vnode,o=fe(t,s,i);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const wr=t=>t.type.__isKeepAlive,_v={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=sn(),s=n.ctx;if(!s.renderer)return()=>{const C=e.default&&e.default();return C&&C.length===1?C[0]:C};const i=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:h}}}=s,f=h("div");s.activate=(C,v,m,S,F)=>{const I=C.component;l(C,v,m,0,a),c(I.vnode,C,v,m,I,a,S,C.slotScopeIds,F),We(()=>{I.isDeactivated=!1,I.a&&Ns(I.a);const b=C.props&&C.props.onVnodeMounted;b&&Ze(b,I.parent,C)},a)},s.deactivate=C=>{const v=C.component;l(C,f,null,1,a),We(()=>{v.da&&Ns(v.da);const m=C.props&&C.props.onVnodeUnmounted;m&&Ze(m,v.parent,C),v.isDeactivated=!0},a)};function p(C){Da(C),u(C,n,a,!0)}function _(C){i.forEach((v,m)=>{const S=Ec(v.type);S&&(!C||!C(S))&&T(m)})}function T(C){const v=i.get(C);!o||!bt(v,o)?p(v):o&&Da(o),i.delete(C),r.delete(C)}Jt(()=>[t.include,t.exclude],([C,v])=>{C&&_(m=>bi(C,m)),v&&_(m=>!bi(v,m))},{flush:"post",deep:!0});let O=null;const D=()=>{O!=null&&i.set(O,La(n.subTree))};return ms(D),ra(D),oa(()=>{i.forEach(C=>{const{subTree:v,suspense:m}=n,S=La(v);if(C.type===S.type&&C.key===S.key){Da(S);const F=S.component.da;F&&We(F,m);return}p(C)})}),()=>{if(O=null,!e.default)return null;const C=e.default(),v=C[0];if(C.length>1)return o=null,C;if(!Nn(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let m=La(v);const S=m.type,F=Ec(Qn(m)?m.type.__asyncResolved||{}:S),{include:I,exclude:b,max:y}=t;if(I&&(!F||!bi(I,F))||b&&F&&bi(b,F))return o=m,v;const w=m.key==null?S:m.key,P=i.get(w);return m.el&&(m=Ut(m),v.shapeFlag&128&&(v.ssContent=m)),O=w,P?(m.el=P.el,m.component=P.component,m.transition&&ts(m,m.transition),m.shapeFlag|=512,r.delete(w),r.add(w)):(r.add(w),y&&r.size>parseInt(y,10)&&T(r.values().next().value)),m.shapeFlag|=256,o=m,Yd(v.type)?v:m}}},yv=_v;function bi(t,e){return q(t)?t.some(n=>bi(n,e)):Se(t)?t.split(",").includes(e):X_(t)?t.test(e):!1}function np(t,e){ip(t,"a",e)}function sp(t,e){ip(t,"da",e)}function ip(t,e,n=Le){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ia(e,s,n),n){let i=n.parent;for(;i&&i.parent;)wr(i.parent.vnode)&&vv(s,e,n,i),i=i.parent}}function vv(t,e,n,s){const i=ia(e,t,s,!0);aa(()=>{rl(s[e],i)},n)}function Da(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function La(t){return t.shapeFlag&128?t.ssContent:t}function ia(t,e,n=Le,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;si(),On(n);const a=ut(e,n,t,o);return Cn(),ii(),a});return s?i.unshift(r):i.push(r),r}}const nn=t=>(e,n=Le)=>(!Ws||t==="sp")&&ia(t,(...s)=>e(...s),n),rp=nn("bm"),ms=nn("m"),op=nn("bu"),ra=nn("u"),oa=nn("bum"),aa=nn("um"),ap=nn("sp"),cp=nn("rtg"),lp=nn("rtc");function up(t,e=Le){ia("ec",t,e)}const Il="components",Ev="directives";function hp(t,e){return Sl(Il,t,!0,e)||t}const fp=Symbol.for("v-ndc");function wv(t){return Se(t)?Sl(Il,t,!1)||t:t||fp}function bv(t){return Sl(Ev,t)}function Sl(t,e,n=!0,s=!1){const i=$e||Le;if(i){const r=i.type;if(t===Il){const a=Ec(r,!1);if(a&&(a===e||a===st(e)||a===gr(st(e))))return r}const o=ch(i[t]||r[t],e)||ch(i.appContext[t],e);return!o&&s?r:o}}function ch(t,e){return t&&(t[e]||t[st(e)]||t[gr(st(e))])}function go(t,e,n,s){let i;const r=n&&n[s];if(q(t)||Se(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ee(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function Cv(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(q(s))for(let i=0;i<s.length;i++)t[s[i].name]=s[i].fn;else s&&(t[s.name]=s.key?(...i)=>{const r=s.fn(...i);return r&&(r.key=s.key),r}:s.fn)}return t}function Tv(t,e,n={},s,i){if($e.isCE||$e.parent&&Qn($e.parent)&&$e.parent.isCE)return e!=="default"&&(n.name=e),fe("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),xe();const o=r&&dp(r(n)),a=ca(Ae,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function dp(t){return t.some(e=>Nn(e)?!(e.type===Ge||e.type===Ae&&!dp(e.children)):!0)?t:null}function Iv(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:Ai(s)]=t[s];return n}const hc=t=>t?Lp(t)?ua(t)||t.proxy:hc(t.parent):null,Pi=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hc(t.parent),$root:t=>hc(t.root),$emit:t=>t.emit,$options:t=>Rl(t),$forceUpdate:t=>t.f||(t.f=()=>ea(t.update)),$nextTick:t=>t.n||(t.n=yr.bind(t.proxy)),$watch:t=>pv.bind(t)}),Ma=(t,e)=>t!==ve&&!t.__isScriptSetup&&ue(t,e),fc={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ma(s,e))return o[e]=1,s[e];if(i!==ve&&ue(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ue(l,e))return o[e]=3,r[e];if(n!==ve&&ue(n,e))return o[e]=4,n[e];dc&&(o[e]=0)}}const u=Pi[e];let h,f;if(u)return e==="$attrs"&&rt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&ue(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ue(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ma(i,e)?(i[e]=n,!0):s!==ve&&ue(s,e)?(s[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ve&&ue(t,o)||Ma(e,o)||(a=r[0])&&ue(a,o)||ue(s,o)||ue(Pi,o)||ue(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Sv=Ie({},fc,{get(t,e){if(e!==Symbol.unscopables)return fc.get(t,e,t)},has(t,e){return e[0]!=="_"&&!sy(e)}});function Rv(){return null}function kv(){return null}function Av(t){}function Pv(t){}function Nv(){return null}function Ov(){}function xv(t,e){return null}function Dv(){return pp().slots}function Lv(){return pp().attrs}function Mv(t,e,n){const s=sn();if(n&&n.local){const i=ge(t[e]);return Jt(()=>t[e],r=>i.value=r),Jt(i,r=>{r!==t[e]&&s.emit(`update:${e}`,r)}),i}else return{__v_isRef:!0,get value(){return t[e]},set value(i){s.emit(`update:${e}`,i)}}}function pp(){const t=sn();return t.setupContext||(t.setupContext=Up(t))}function Ji(t){return q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Fv(t,e){const n=Ji(t);for(const s in e){if(s.startsWith("__skip"))continue;let i=n[s];i?q(i)||Z(i)?i=n[s]={type:i,default:e[s]}:i.default=e[s]:i===null&&(i=n[s]={default:e[s]}),i&&e[`__skip_${s}`]&&(i.skipFactory=!0)}return n}function Uv(t,e){return!t||!e?t||e:q(t)&&q(e)?t.concat(e):Ie({},Ji(t),Ji(e))}function Bv(t,e){const n={};for(const s in t)e.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>t[s]});return n}function Hv(t){const e=sn();let n=t();return Cn(),ol(n)&&(n=n.catch(s=>{throw On(e),s})),[n,()=>On(e)]}let dc=!0;function $v(t){const e=Rl(t),n=t.proxy,s=t.ctx;dc=!1,e.beforeCreate&&lh(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:_,activated:T,deactivated:O,beforeDestroy:D,beforeUnmount:C,destroyed:v,unmounted:m,render:S,renderTracked:F,renderTriggered:I,errorCaptured:b,serverPrefetch:y,expose:w,inheritAttrs:P,components:R,directives:B,filters:ee}=e;if(l&&Vv(l,s,null),o)for(const te in o){const K=o[te];Z(K)&&(s[te]=K.bind(n))}if(i){const te=i.call(n,n);Ee(te)&&(t.data=ps(te))}if(dc=!0,r)for(const te in r){const K=r[te],yt=Z(K)?K.bind(n,n):Z(K.get)?K.get.bind(n,n):St,cn=!Z(K)&&Z(K.set)?K.set.bind(n):St,Pt=lt({get:yt,set:cn});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:Xe=>Pt.value=Xe})}if(a)for(const te in a)gp(a[te],s,n,te);if(c){const te=Z(c)?c.call(n):c;Reflect.ownKeys(te).forEach(K=>{Ni(K,te[K])})}u&&lh(u,t,"c");function V(te,K){q(K)?K.forEach(yt=>te(yt.bind(n))):K&&te(K.bind(n))}if(V(rp,h),V(ms,f),V(op,p),V(ra,_),V(np,T),V(sp,O),V(up,b),V(lp,F),V(cp,I),V(oa,C),V(aa,m),V(ap,y),q(w))if(w.length){const te=t.exposed||(t.exposed={});w.forEach(K=>{Object.defineProperty(te,K,{get:()=>n[K],set:yt=>n[K]=yt})})}else t.exposed||(t.exposed={});S&&t.render===St&&(t.render=S),P!=null&&(t.inheritAttrs=P),R&&(t.components=R),B&&(t.directives=B)}function Vv(t,e,n=St){q(t)&&(t=pc(t));for(const s in t){const i=t[s];let r;Ee(i)?"default"in i?r=ht(i.from||s,i.default,!0):r=ht(i.from||s):r=ht(i),Te(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function lh(t,e,n){ut(q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function gp(t,e,n,s){const i=s.includes(".")?Zd(n,s):()=>n[s];if(Se(t)){const r=e[t];Z(r)&&Jt(i,r)}else if(Z(t))Jt(i,t.bind(n));else if(Ee(t))if(q(t))t.forEach(r=>gp(r,e,n,s));else{const r=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(r)&&Jt(i,r,t)}}function Rl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(l=>mo(c,l,o,!0)),mo(c,e,o)),Ee(e)&&r.set(e,c),c}function mo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&mo(t,r,n,!0),i&&i.forEach(o=>mo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Wv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Wv={data:uh,props:hh,emits:hh,methods:Ci,computed:Ci,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:Ci,directives:Ci,watch:qv,provide:uh,inject:jv};function uh(t,e){return e?t?function(){return Ie(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function jv(t,e){return Ci(pc(t),pc(e))}function pc(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Je(t,e){return t?[...new Set([].concat(t,e))]:e}function Ci(t,e){return t?Ie(Object.create(null),t,e):e}function hh(t,e){return t?q(t)&&q(e)?[...new Set([...t,...e])]:Ie(Object.create(null),Ji(t),Ji(e??{})):e}function qv(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const s in e)n[s]=Je(t[s],e[s]);return n}function mp(){return{app:null,config:{isNativeTag:Y_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zv=0;function Kv(t,e){return function(s,i=null){Z(s)||(s=Ie({},s)),i!=null&&!Ee(i)&&(i=null);const r=mp(),o=new WeakSet;let a=!1;const c=r.app={_uid:zv++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Vp,get config(){return r.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),c},component(l,u){return u?(r.components[l]=u,c):r.components[l]},directive(l,u){return u?(r.directives[l]=u,c):r.directives[l]},mount(l,u,h){if(!a){const f=fe(s,i);return f.appContext=r,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,ua(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return r.provides[l]=u,c},runWithContext(l){Xi=c;try{return l()}finally{Xi=null}}};return c}}let Xi=null;function Ni(t,e){if(Le){let n=Le.provides;const s=Le.parent&&Le.parent.provides;s===n&&(n=Le.provides=Object.create(s)),n[t]=e}}function ht(t,e,n=!1){const s=Le||$e;if(s||Xi){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Xi._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Z(e)?e.call(s&&s.proxy):e}}function _p(){return!!(Le||$e||Xi)}function Gv(t,e,n,s=!1){const i={},r={};co(r,la,1),t.propsDefaults=Object.create(null),yp(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:dl(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Yv(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ae(i),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ta(t.emitsOptions,f))continue;const p=e[f];if(c)if(ue(r,f))p!==r[f]&&(r[f]=p,l=!0);else{const _=st(f);i[_]=gc(c,a,_,p,t,!1)}else p!==r[f]&&(r[f]=p,l=!0)}}}else{yp(t,e,i,r)&&(l=!0);let u;for(const h in a)(!e||!ue(e,h)&&((u=pt(h))===h||!ue(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=gc(c,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!ue(e,h))&&(delete r[h],l=!0)}l&&Yt(t,"set","$attrs")}function yp(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ki(c))continue;const l=e[c];let u;i&&ue(i,u=st(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:ta(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=ae(n),l=a||ve;for(let u=0;u<r.length;u++){const h=r[u];n[h]=gc(i,c,h,l[h],t,!ue(l,h))}}return o}function gc(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Z(c)){const{propsDefaults:l}=i;n in l?s=l[n]:(On(i),s=l[n]=c.call(null,e),Cn())}else s=c}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===pt(n))&&(s=!0))}return s}function vp(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[f,p]=vp(h,e,!0);Ie(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return Ee(t)&&s.set(t,As),As;if(q(r))for(let u=0;u<r.length;u++){const h=st(r[u]);fh(h)&&(o[h]=ve)}else if(r)for(const u in r){const h=st(u);if(fh(h)){const f=r[u],p=o[h]=q(f)||Z(f)?{type:f}:Ie({},f);if(p){const _=gh(Boolean,p.type),T=gh(String,p.type);p[0]=_>-1,p[1]=T<0||_<T,(_>-1||ue(p,"default"))&&a.push(h)}}}const l=[o,a];return Ee(t)&&s.set(t,l),l}function fh(t){return t[0]!=="$"}function dh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ph(t,e){return dh(t)===dh(e)}function gh(t,e){return q(e)?e.findIndex(n=>ph(n,t)):Z(e)&&ph(e,t)?0:-1}const Ep=t=>t[0]==="_"||t==="$stable",kl=t=>q(t)?t.map(ct):[ct(t)],Qv=(t,e,n)=>{if(e._n)return e;const s=Yi((...i)=>kl(e(...i)),n);return s._c=!1,s},wp=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ep(i))continue;const r=t[i];if(Z(r))e[i]=Qv(i,r,s);else if(r!=null){const o=kl(r);e[i]=()=>o}}},bp=(t,e)=>{const n=kl(e);t.slots.default=()=>n},Jv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),co(e,"_",n)):wp(e,t.slots={})}else t.slots={},e&&bp(t,e);co(t.slots,la,1)},Xv=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Ie(i,e),!n&&a===1&&delete i._):(r=!e.$stable,wp(e,i)),o=e}else e&&(bp(t,e),o={default:1});if(r)for(const a in i)!Ep(a)&&o[a]==null&&delete i[a]};function _o(t,e,n,s,i=!1){if(q(t)){t.forEach((f,p)=>_o(f,e&&(q(e)?e[p]:e),n,s,i));return}if(Qn(s)&&!i)return;const r=s.shapeFlag&4?ua(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Se(l)?(u[l]=null,ue(h,l)&&(h[l]=null)):Te(l)&&(l.value=null)),Z(c))Qt(c,a,12,[o,u]);else{const f=Se(c),p=Te(c);if(f||p){const _=()=>{if(t.f){const T=f?ue(h,c)?h[c]:u[c]:c.value;i?q(T)&&rl(T,r):q(T)?T.includes(r)||T.push(r):f?(u[c]=[r],ue(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ue(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,We(_,n)):_()}}}let un=!1;const Vr=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Wr=t=>t.nodeType===8;function Zv(t){const{mt:e,p:n,o:{patchProp:s,createText:i,nextSibling:r,parentNode:o,remove:a,insert:c,createComment:l}}=t,u=(v,m)=>{if(!m.hasChildNodes()){n(null,v,m),po(),m._vnode=v;return}un=!1,h(m.firstChild,v,null,null,null),po(),m._vnode=v,un&&console.error("Hydration completed but contains mismatches.")},h=(v,m,S,F,I,b=!1)=>{const y=Wr(v)&&v.data==="[",w=()=>T(v,m,S,F,I,y),{type:P,ref:R,shapeFlag:B,patchFlag:ee}=m;let ne=v.nodeType;m.el=v,ee===-2&&(b=!1,m.dynamicChildren=null);let V=null;switch(P){case ns:ne!==3?m.children===""?(c(m.el=i(""),o(v),v),V=v):V=w():(v.data!==m.children&&(un=!0,v.data=m.children),V=r(v));break;case Ge:if(ne!==8||y)if(v.tagName.toLowerCase()==="template"){const te=m.el.content.firstChild;D(te,v,S),m.el=v=te,V=r(v)}else V=w();else V=r(v);break;case Jn:if(y&&(v=r(v),ne=v.nodeType),ne===1||ne===3){V=v;const te=!m.children.length;for(let K=0;K<m.staticCount;K++)te&&(m.children+=V.nodeType===1?V.outerHTML:V.data),K===m.staticCount-1&&(m.anchor=V),V=r(V);return y?r(V):V}else w();break;case Ae:y?V=_(v,m,S,F,I,b):V=w();break;default:if(B&1)(ne!==1||m.type.toLowerCase()!==v.tagName.toLowerCase())&&!C(v)?V=w():V=f(v,m,S,F,I,b);else if(B&6){m.slotScopeIds=I;const te=o(v);if(y?V=O(v):Wr(v)&&v.data==="teleport start"?V=O(v,v.data,"teleport end"):V=r(v),e(m,te,null,S,F,Vr(te),b),Qn(m)){let K;y?(K=fe(Ae),K.anchor=V?V.previousSibling:te.lastChild):K=v.nodeType===3?Zi(""):fe("div"),K.el=v,m.component.subTree=K}}else B&64?ne!==8?V=w():V=m.type.hydrate(v,m,S,F,I,b,t,p):B&128&&(V=m.type.hydrate(v,m,S,F,Vr(o(v)),I,b,t,h))}return R!=null&&_o(R,null,F,m),V},f=(v,m,S,F,I,b)=>{b=b||!!m.dynamicChildren;const{type:y,props:w,patchFlag:P,shapeFlag:R,dirs:B,transition:ee}=m,ne=y==="input"&&B||y==="option";if(ne||P!==-1){if(B&&Ot(m,null,S,"created"),w)if(ne||!b||P&48)for(const K in w)(ne&&K.endsWith("value")||pr(K)&&!ki(K))&&s(v,K,null,w[K],!1,void 0,S);else w.onClick&&s(v,"onClick",null,w.onClick,!1,void 0,S);let V;(V=w&&w.onVnodeBeforeMount)&&Ze(V,S,m);let te=!1;if(C(v)){te=Sp(F,ee)&&S&&S.vnode.props&&S.vnode.props.appear;const K=v.content.firstChild;te&&ee.beforeEnter(K),D(K,v,S),m.el=v=K}if(B&&Ot(m,null,S,"beforeMount"),((V=w&&w.onVnodeMounted)||B||te)&&Qd(()=>{V&&Ze(V,S,m),te&&ee.enter(v),B&&Ot(m,null,S,"mounted")},F),R&16&&!(w&&(w.innerHTML||w.textContent))){let K=p(v.firstChild,m,v,S,F,I,b);for(;K;){un=!0;const yt=K;K=K.nextSibling,a(yt)}}else R&8&&v.textContent!==m.children&&(un=!0,v.textContent=m.children)}return v.nextSibling},p=(v,m,S,F,I,b,y)=>{y=y||!!m.dynamicChildren;const w=m.children,P=w.length;for(let R=0;R<P;R++){const B=y?w[R]:w[R]=ct(w[R]);if(v)v=h(v,B,F,I,b,y);else{if(B.type===ns&&!B.children)continue;un=!0,n(null,B,S,null,F,I,Vr(S),b)}}return v},_=(v,m,S,F,I,b)=>{const{slotScopeIds:y}=m;y&&(I=I?I.concat(y):y);const w=o(v),P=p(r(v),m,w,S,F,I,b);return P&&Wr(P)&&P.data==="]"?r(m.anchor=P):(un=!0,c(m.anchor=l("]"),w,P),P)},T=(v,m,S,F,I,b)=>{if(un=!0,m.el=null,b){const P=O(v);for(;;){const R=r(v);if(R&&R!==P)a(R);else break}}const y=r(v),w=o(v);return a(v),n(null,m,w,y,S,F,Vr(w),I),y},O=(v,m="[",S="]")=>{let F=0;for(;v;)if(v=r(v),v&&Wr(v)&&(v.data===m&&F++,v.data===S)){if(F===0)return r(v);F--}return v},D=(v,m,S)=>{const F=m.parentNode;F&&F.replaceChild(v,m);let I=S;for(;I;)I.vnode.el===m&&(I.vnode.el=v,I.subTree.el=v),I=I.parent},C=v=>v.nodeType===1&&v.tagName.toLowerCase()==="template";return[u,h]}const We=Qd;function Cp(t){return Ip(t)}function Tp(t){return Ip(t,Zv)}function Ip(t,e){const n=oc();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=St,insertStaticContent:_}=t,T=(d,g,E,k=null,N=null,x=null,W=!1,U=null,H=!!g.dynamicChildren)=>{if(d===g)return;d&&!bt(d,g)&&(k=A(d),Xe(d,N,x,!0),d=null),g.patchFlag===-2&&(H=!1,g.dynamicChildren=null);const{type:L,ref:Y,shapeFlag:z}=g;switch(L){case ns:O(d,g,E,k);break;case Ge:D(d,g,E,k);break;case Jn:d==null&&C(g,E,k,W);break;case Ae:R(d,g,E,k,N,x,W,U,H);break;default:z&1?S(d,g,E,k,N,x,W,U,H):z&6?B(d,g,E,k,N,x,W,U,H):(z&64||z&128)&&L.process(d,g,E,k,N,x,W,U,H,$)}Y!=null&&N&&_o(Y,d&&d.ref,x,g||d,!g)},O=(d,g,E,k)=>{if(d==null)s(g.el=a(g.children),E,k);else{const N=g.el=d.el;g.children!==d.children&&l(N,g.children)}},D=(d,g,E,k)=>{d==null?s(g.el=c(g.children||""),E,k):g.el=d.el},C=(d,g,E,k)=>{[d.el,d.anchor]=_(d.children,g,E,k,d.el,d.anchor)},v=({el:d,anchor:g},E,k)=>{let N;for(;d&&d!==g;)N=f(d),s(d,E,k),d=N;s(g,E,k)},m=({el:d,anchor:g})=>{let E;for(;d&&d!==g;)E=f(d),i(d),d=E;i(g)},S=(d,g,E,k,N,x,W,U,H)=>{W=W||g.type==="svg",d==null?F(g,E,k,N,x,W,U,H):y(d,g,N,x,W,U,H)},F=(d,g,E,k,N,x,W,U)=>{let H,L;const{type:Y,props:z,shapeFlag:Q,transition:se,dirs:ce}=d;if(H=d.el=o(d.type,x,z&&z.is,z),Q&8?u(H,d.children):Q&16&&b(d.children,H,null,k,N,x&&Y!=="foreignObject",W,U),ce&&Ot(d,null,k,"created"),I(H,d,d.scopeId,W,k),z){for(const _e in z)_e!=="value"&&!ki(_e)&&r(H,_e,null,z[_e],x,d.children,k,N,qe);"value"in z&&r(H,"value",null,z.value),(L=z.onVnodeBeforeMount)&&Ze(L,k,d)}ce&&Ot(d,null,k,"beforeMount");const be=Sp(N,se);be&&se.beforeEnter(H),s(H,g,E),((L=z&&z.onVnodeMounted)||be||ce)&&We(()=>{L&&Ze(L,k,d),be&&se.enter(H),ce&&Ot(d,null,k,"mounted")},N)},I=(d,g,E,k,N)=>{if(E&&p(d,E),k)for(let x=0;x<k.length;x++)p(d,k[x]);if(N){let x=N.subTree;if(g===x){const W=N.vnode;I(d,W,W.scopeId,W.slotScopeIds,N.parent)}}},b=(d,g,E,k,N,x,W,U,H=0)=>{for(let L=H;L<d.length;L++){const Y=d[L]=U?_n(d[L]):ct(d[L]);T(null,Y,g,E,k,N,x,W,U)}},y=(d,g,E,k,N,x,W)=>{const U=g.el=d.el;let{patchFlag:H,dynamicChildren:L,dirs:Y}=g;H|=d.patchFlag&16;const z=d.props||ve,Q=g.props||ve;let se;E&&Un(E,!1),(se=Q.onVnodeBeforeUpdate)&&Ze(se,E,g,d),Y&&Ot(g,d,E,"beforeUpdate"),E&&Un(E,!0);const ce=N&&g.type!=="foreignObject";if(L?w(d.dynamicChildren,L,U,E,k,ce,x):W||K(d,g,U,null,E,k,ce,x,!1),H>0){if(H&16)P(U,g,z,Q,E,k,N);else if(H&2&&z.class!==Q.class&&r(U,"class",null,Q.class,N),H&4&&r(U,"style",z.style,Q.style,N),H&8){const be=g.dynamicProps;for(let _e=0;_e<be.length;_e++){const Oe=be[_e],vt=z[Oe],ws=Q[Oe];(ws!==vt||Oe==="value")&&r(U,Oe,vt,ws,N,d.children,E,k,qe)}}H&1&&d.children!==g.children&&u(U,g.children)}else!W&&L==null&&P(U,g,z,Q,E,k,N);((se=Q.onVnodeUpdated)||Y)&&We(()=>{se&&Ze(se,E,g,d),Y&&Ot(g,d,E,"updated")},k)},w=(d,g,E,k,N,x,W)=>{for(let U=0;U<g.length;U++){const H=d[U],L=g[U],Y=H.el&&(H.type===Ae||!bt(H,L)||H.shapeFlag&70)?h(H.el):E;T(H,L,Y,null,k,N,x,W,!0)}},P=(d,g,E,k,N,x,W)=>{if(E!==k){if(E!==ve)for(const U in E)!ki(U)&&!(U in k)&&r(d,U,E[U],null,W,g.children,N,x,qe);for(const U in k){if(ki(U))continue;const H=k[U],L=E[U];H!==L&&U!=="value"&&r(d,U,L,H,W,g.children,N,x,qe)}"value"in k&&r(d,"value",E.value,k.value)}},R=(d,g,E,k,N,x,W,U,H)=>{const L=g.el=d?d.el:a(""),Y=g.anchor=d?d.anchor:a("");let{patchFlag:z,dynamicChildren:Q,slotScopeIds:se}=g;se&&(U=U?U.concat(se):se),d==null?(s(L,E,k),s(Y,E,k),b(g.children,E,Y,N,x,W,U,H)):z>0&&z&64&&Q&&d.dynamicChildren?(w(d.dynamicChildren,Q,E,N,x,W,U),(g.key!=null||N&&g===N.subTree)&&Al(d,g,!0)):K(d,g,E,Y,N,x,W,U,H)},B=(d,g,E,k,N,x,W,U,H)=>{g.slotScopeIds=U,d==null?g.shapeFlag&512?N.ctx.activate(g,E,k,W,H):ee(g,E,k,N,x,W,H):ne(d,g,H)},ee=(d,g,E,k,N,x,W)=>{const U=d.component=Dp(d,k,N);if(wr(d)&&(U.ctx.renderer=$),Mp(U),U.asyncDep){if(N&&N.registerDep(U,V),!d.el){const H=U.subTree=fe(Ge);D(null,H,g,E)}return}V(U,d,g,E,N,x,W)},ne=(d,g,E)=>{const k=g.component=d.component;if(rv(d,g,E))if(k.asyncDep&&!k.asyncResolved){te(k,g,E);return}else k.next=g,Qy(k.update),k.update();else g.el=d.el,k.vnode=g},V=(d,g,E,k,N,x,W)=>{const U=()=>{if(d.isMounted){let{next:Y,bu:z,u:Q,parent:se,vnode:ce}=d,be=Y,_e;Un(d,!1),Y?(Y.el=ce.el,te(d,Y,W)):Y=ce,z&&Ns(z),(_e=Y.props&&Y.props.onVnodeBeforeUpdate)&&Ze(_e,se,Y,ce),Un(d,!0);const Oe=Zr(d),vt=d.subTree;d.subTree=Oe,T(vt,Oe,h(vt.el),A(vt),d,N,x),Y.el=Oe.el,be===null&&El(d,Oe.el),Q&&We(Q,N),(_e=Y.props&&Y.props.onVnodeUpdated)&&We(()=>Ze(_e,se,Y,ce),N)}else{let Y;const{el:z,props:Q}=g,{bm:se,m:ce,parent:be}=d,_e=Qn(g);if(Un(d,!1),se&&Ns(se),!_e&&(Y=Q&&Q.onVnodeBeforeMount)&&Ze(Y,be,g),Un(d,!0),z&&de){const Oe=()=>{d.subTree=Zr(d),de(z,d.subTree,d,N,null)};_e?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Oe()):Oe()}else{const Oe=d.subTree=Zr(d);T(null,Oe,E,k,d,N,x),g.el=Oe.el}if(ce&&We(ce,N),!_e&&(Y=Q&&Q.onVnodeMounted)){const Oe=g;We(()=>Ze(Y,be,Oe),N)}(g.shapeFlag&256||be&&Qn(be.vnode)&&be.vnode.shapeFlag&256)&&d.a&&We(d.a,N),d.isMounted=!0,g=E=k=null}},H=d.effect=new $s(U,()=>ea(L),d.scope),L=d.update=()=>H.run();L.id=d.uid,Un(d,!0),L()},te=(d,g,E)=>{g.component=d;const k=d.vnode.props;d.vnode=g,d.next=null,Yv(d,g.props,k,E),Xv(d,g.children,E),si(),ih(),ii()},K=(d,g,E,k,N,x,W,U,H=!1)=>{const L=d&&d.children,Y=d?d.shapeFlag:0,z=g.children,{patchFlag:Q,shapeFlag:se}=g;if(Q>0){if(Q&128){cn(L,z,E,k,N,x,W,U,H);return}else if(Q&256){yt(L,z,E,k,N,x,W,U,H);return}}se&8?(Y&16&&qe(L,N,x),z!==L&&u(E,z)):Y&16?se&16?cn(L,z,E,k,N,x,W,U,H):qe(L,N,x,!0):(Y&8&&u(E,""),se&16&&b(z,E,k,N,x,W,U,H))},yt=(d,g,E,k,N,x,W,U,H)=>{d=d||As,g=g||As;const L=d.length,Y=g.length,z=Math.min(L,Y);let Q;for(Q=0;Q<z;Q++){const se=g[Q]=H?_n(g[Q]):ct(g[Q]);T(d[Q],se,E,null,N,x,W,U,H)}L>Y?qe(d,N,x,!0,!1,z):b(g,E,k,N,x,W,U,H,z)},cn=(d,g,E,k,N,x,W,U,H)=>{let L=0;const Y=g.length;let z=d.length-1,Q=Y-1;for(;L<=z&&L<=Q;){const se=d[L],ce=g[L]=H?_n(g[L]):ct(g[L]);if(bt(se,ce))T(se,ce,E,null,N,x,W,U,H);else break;L++}for(;L<=z&&L<=Q;){const se=d[z],ce=g[Q]=H?_n(g[Q]):ct(g[Q]);if(bt(se,ce))T(se,ce,E,null,N,x,W,U,H);else break;z--,Q--}if(L>z){if(L<=Q){const se=Q+1,ce=se<Y?g[se].el:k;for(;L<=Q;)T(null,g[L]=H?_n(g[L]):ct(g[L]),E,ce,N,x,W,U,H),L++}}else if(L>Q)for(;L<=z;)Xe(d[L],N,x,!0),L++;else{const se=L,ce=L,be=new Map;for(L=ce;L<=Q;L++){const ot=g[L]=H?_n(g[L]):ct(g[L]);ot.key!=null&&be.set(ot.key,L)}let _e,Oe=0;const vt=Q-ce+1;let ws=!1,zu=0;const fi=new Array(vt);for(L=0;L<vt;L++)fi[L]=0;for(L=se;L<=z;L++){const ot=d[L];if(Oe>=vt){Xe(ot,N,x,!0);continue}let Nt;if(ot.key!=null)Nt=be.get(ot.key);else for(_e=ce;_e<=Q;_e++)if(fi[_e-ce]===0&&bt(ot,g[_e])){Nt=_e;break}Nt===void 0?Xe(ot,N,x,!0):(fi[Nt-ce]=L+1,Nt>=zu?zu=Nt:ws=!0,T(ot,g[Nt],E,null,N,x,W,U,H),Oe++)}const Ku=ws?eE(fi):As;for(_e=Ku.length-1,L=vt-1;L>=0;L--){const ot=ce+L,Nt=g[ot],Gu=ot+1<Y?g[ot+1].el:k;fi[L]===0?T(null,Nt,E,Gu,N,x,W,U,H):ws&&(_e<0||L!==Ku[_e]?Pt(Nt,E,Gu,2):_e--)}}},Pt=(d,g,E,k,N=null)=>{const{el:x,type:W,transition:U,children:H,shapeFlag:L}=d;if(L&6){Pt(d.component.subTree,g,E,k);return}if(L&128){d.suspense.move(g,E,k);return}if(L&64){W.move(d,g,E,$);return}if(W===Ae){s(x,g,E);for(let z=0;z<H.length;z++)Pt(H[z],g,E,k);s(d.anchor,g,E);return}if(W===Jn){v(d,g,E);return}if(k!==2&&L&1&&U)if(k===0)U.beforeEnter(x),s(x,g,E),We(()=>U.enter(x),N);else{const{leave:z,delayLeave:Q,afterLeave:se}=U,ce=()=>s(x,g,E),be=()=>{z(x,()=>{ce(),se&&se()})};Q?Q(x,ce,be):be()}else s(x,g,E)},Xe=(d,g,E,k=!1,N=!1)=>{const{type:x,props:W,ref:U,children:H,dynamicChildren:L,shapeFlag:Y,patchFlag:z,dirs:Q}=d;if(U!=null&&_o(U,null,E,d,!0),Y&256){g.ctx.deactivate(d);return}const se=Y&1&&Q,ce=!Qn(d);let be;if(ce&&(be=W&&W.onVnodeBeforeUnmount)&&Ze(be,g,d),Y&6)xr(d.component,E,k);else{if(Y&128){d.suspense.unmount(E,k);return}se&&Ot(d,null,g,"beforeUnmount"),Y&64?d.type.remove(d,g,E,N,$,k):L&&(x!==Ae||z>0&&z&64)?qe(L,g,E,!1,!0):(x===Ae&&z&384||!N&&Y&16)&&qe(H,g,E),k&&vs(d)}(ce&&(be=W&&W.onVnodeUnmounted)||se)&&We(()=>{be&&Ze(be,g,d),se&&Ot(d,null,g,"unmounted")},E)},vs=d=>{const{type:g,el:E,anchor:k,transition:N}=d;if(g===Ae){Es(E,k);return}if(g===Jn){m(d);return}const x=()=>{i(E),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(d.shapeFlag&1&&N&&!N.persisted){const{leave:W,delayLeave:U}=N,H=()=>W(E,x);U?U(d.el,x,H):H()}else x()},Es=(d,g)=>{let E;for(;d!==g;)E=f(d),i(d),d=E;i(g)},xr=(d,g,E)=>{const{bum:k,scope:N,update:x,subTree:W,um:U}=d;k&&Ns(k),N.stop(),x&&(x.active=!1,Xe(W,d,g,E)),U&&We(U,g),We(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},qe=(d,g,E,k=!1,N=!1,x=0)=>{for(let W=x;W<d.length;W++)Xe(d[W],g,E,k,N)},A=d=>d.shapeFlag&6?A(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),j=(d,g,E)=>{d==null?g._vnode&&Xe(g._vnode,null,null,!0):T(g._vnode||null,d,g,null,null,null,E),ih(),po(),g._vnode=d},$={p:T,um:Xe,m:Pt,r:vs,mt:ee,mc:b,pc:K,pbc:w,n:A,o:t};let G,de;return e&&([G,de]=e($)),{render:j,hydrate:G,createApp:Kv(j,G)}}function Un({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Sp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Al(t,e,n=!1){const s=t.children,i=e.children;if(q(s)&&q(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=_n(i[r]),a.el=o.el),n||Al(o,a)),a.type===ns&&(a.el=o.el)}}function eE(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(i=n[n.length-1],t[i]<l){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<l?r=a+1:o=a;l<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const tE=t=>t.__isTeleport,Oi=t=>t&&(t.disabled||t.disabled===""),mh=t=>typeof SVGElement<"u"&&t instanceof SVGElement,mc=(t,e)=>{const n=t&&t.to;return Se(n)?e?e(n):null:n},nE={__isTeleport:!0,process(t,e,n,s,i,r,o,a,c,l){const{mc:u,pc:h,pbc:f,o:{insert:p,querySelector:_,createText:T,createComment:O}}=l,D=Oi(e.props);let{shapeFlag:C,children:v,dynamicChildren:m}=e;if(t==null){const S=e.el=T(""),F=e.anchor=T("");p(S,n,s),p(F,n,s);const I=e.target=mc(e.props,_),b=e.targetAnchor=T("");I&&(p(b,I),o=o||mh(I));const y=(w,P)=>{C&16&&u(v,w,P,i,r,o,a,c)};D?y(n,F):I&&y(I,b)}else{e.el=t.el;const S=e.anchor=t.anchor,F=e.target=t.target,I=e.targetAnchor=t.targetAnchor,b=Oi(t.props),y=b?n:F,w=b?S:I;if(o=o||mh(F),m?(f(t.dynamicChildren,m,y,i,r,o,a),Al(t,e,!0)):c||h(t,e,y,w,i,r,o,a,!1),D)b?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):jr(e,n,S,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const P=e.target=mc(e.props,_);P&&jr(e,P,null,l,0)}else b&&jr(e,F,I,l,1)}Rp(e)},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:h,props:f}=t;if(h&&r(u),o&&r(l),a&16){const p=o||!Oi(f);for(let _=0;_<c.length;_++){const T=c[_];i(T,e,n,p,!!T.dynamicChildren)}}},move:jr,hydrate:sE};function jr(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,h=r===2;if(h&&s(o,e,n),(!h||Oi(u))&&c&16)for(let f=0;f<l.length;f++)i(l[f],e,n,2);h&&s(a,e,n)}function sE(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=mc(e.props,c);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Oi(e.props))e.anchor=l(o(t),e,a(t),n,s,i,r),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(h,e,u,n,s,i,r)}Rp(e)}return e.anchor&&o(e.anchor)}const iE=nE;function Rp(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Ae=Symbol.for("v-fgt"),ns=Symbol.for("v-txt"),Ge=Symbol.for("v-cmt"),Jn=Symbol.for("v-stc"),xi=[];let et=null;function xe(t=!1){xi.push(et=t?null:[])}function kp(){xi.pop(),et=xi[xi.length-1]||null}let ss=1;function _c(t){ss+=t}function Ap(t){return t.dynamicChildren=ss>0?et||As:null,kp(),ss>0&&et&&et.push(t),t}function ze(t,e,n,s,i,r){return Ap(ke(t,e,n,s,i,r,!0))}function ca(t,e,n,s,i){return Ap(fe(t,e,n,s,i,!0))}function Nn(t){return t?t.__v_isVNode===!0:!1}function bt(t,e){return t.type===e.type&&t.key===e.key}function rE(t){}const la="__vInternal",Pp=({key:t})=>t??null,eo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Se(t)||Te(t)||Z(t)?{i:$e,r:t,k:e,f:!!n}:t:null);function ke(t,e=null,n=null,s=0,i=null,r=t===Ae?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pp(e),ref:e&&eo(e),scopeId:na,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$e};return a?(Pl(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Se(n)?8:16),ss>0&&!o&&et&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&et.push(c),c}const fe=oE;function oE(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===fp)&&(t=Ge),Nn(t)){const a=Ut(t,e,!0);return n&&Pl(a,n),ss>0&&!r&&et&&(a.shapeFlag&6?et[et.indexOf(t)]=a:et.push(a)),a.patchFlag|=-2,a}if(pE(t)&&(t=t.__vccOpts),e){e=Np(e);let{class:a,style:c}=e;a&&!Se(a)&&(e.class=ni(a)),Ee(c)&&(gl(c)&&!q(c)&&(c=Ie({},c)),e.style=mr(c))}const o=Se(t)?1:Yd(t)?128:tE(t)?64:Ee(t)?4:Z(t)?2:0;return ke(t,e,n,s,i,o,r,!0)}function Np(t){return t?gl(t)||la in t?Ie({},t):t:null}function Ut(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?xp(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Pp(a),ref:e&&e.ref?n&&i?q(i)?i.concat(eo(e)):[i,eo(e)]:eo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ae?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ut(t.ssContent),ssFallback:t.ssFallback&&Ut(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Zi(t=" ",e=0){return fe(ns,null,t,e)}function aE(t,e){const n=fe(Jn,null,t);return n.staticCount=e,n}function Op(t="",e=!1){return e?(xe(),ca(Ge,null,t)):fe(Ge,null,t)}function ct(t){return t==null||typeof t=="boolean"?fe(Ge):q(t)?fe(Ae,null,t.slice()):typeof t=="object"?_n(t):fe(ns,null,String(t))}function _n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ut(t)}function Pl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Pl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(la in e)?e._ctx=$e:i===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),s&64?(n=16,e=[Zi(e)]):n=8);t.children=e,t.shapeFlag|=n}function xp(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ni([e.class,s.class]));else if(i==="style")e.style=mr([e.style,s.style]);else if(pr(i)){const r=e[i],o=s[i];o&&r!==o&&!(q(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ze(t,e,n,s=null){ut(t,e,7,[n,s])}const cE=mp();let lE=0;function Dp(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||cE,r={uid:lE++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new cl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vp(s,i),emitsOptions:Gd(s,i),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Xy.bind(null,r),t.ce&&t.ce(r),r}let Le=null;const sn=()=>Le||$e;let Nl,bs,_h="__VUE_INSTANCE_SETTERS__";(bs=oc()[_h])||(bs=oc()[_h]=[]),bs.push(t=>Le=t),Nl=t=>{bs.length>1?bs.forEach(e=>e(t)):bs[0](t)};const On=t=>{Nl(t),t.scope.on()},Cn=()=>{Le&&Le.scope.off(),Nl(null)};function Lp(t){return t.vnode.shapeFlag&4}let Ws=!1;function Mp(t,e=!1){Ws=e;const{props:n,children:s}=t.vnode,i=Lp(t);Gv(t,n,i,e),Jv(t,s);const r=i?uE(t,e):void 0;return Ws=!1,r}function uE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=_r(new Proxy(t.ctx,fc));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Up(t):null;On(t),si();const r=Qt(s,t,0,[t.props,i]);if(ii(),Cn(),ol(r)){if(r.then(Cn,Cn),e)return r.then(o=>{yc(t,o,e)}).catch(o=>{gs(o,t,0)});t.asyncDep=r}else yc(t,r,e)}else Fp(t,e)}function yc(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=yl(e)),Fp(t,n)}let yo,vc;function hE(t){yo=t,vc=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Sv))}}const fE=()=>!yo;function Fp(t,e,n){const s=t.type;if(!t.render){if(!e&&yo&&!s.render){const i=s.template||Rl(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Ie(Ie({isCustomElement:r,delimiters:a},o),c);s.render=yo(i,l)}}t.render=s.render||St,vc&&vc(t)}{On(t),si();try{$v(t)}finally{ii(),Cn()}}}function dE(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return rt(t,"get","$attrs"),e[n]}}))}function Up(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return dE(t)},slots:t.slots,emit:t.emit,expose:e}}function ua(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(yl(_r(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Pi)return Pi[n](t)},has(e,n){return n in e||n in Pi}}))}function Ec(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function pE(t){return Z(t)&&"__vccOpts"in t}const lt=(t,e)=>qy(t,e,Ws);function ha(t,e,n){const s=arguments.length;return s===2?Ee(e)&&!q(e)?Nn(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Nn(n)&&(n=[n]),fe(t,e,n))}const Bp=Symbol.for("v-scx"),Hp=()=>ht(Bp);function gE(){}function mE(t,e,n,s){const i=n[s];if(i&&$p(i,t))return i;const r=e();return r.memo=t.slice(),n[s]=r}function $p(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let s=0;s<n.length;s++)if(kn(n[s],e[s]))return!1;return ss>0&&et&&et.push(t),!0}const Vp="3.3.7",_E={createComponentInstance:Dp,setupComponent:Mp,renderComponentRoot:Zr,setCurrentRenderingInstance:Gi,isVNode:Nn,normalizeVNode:ct},yE=_E,vE=null,EE=null,wE="http://www.w3.org/2000/svg",jn=typeof document<"u"?document:null,yh=jn&&jn.createElement("template"),bE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?jn.createElementNS(wE,t):jn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>jn.createTextNode(t),createComment:t=>jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{yh.innerHTML=s?`<svg>${t}</svg>`:t;const a=yh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},hn="transition",di="animation",js=Symbol("_vtc"),Ol=(t,{slots:e})=>ha(ep,jp(t),e);Ol.displayName="Transition";const Wp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},CE=Ol.props=Ie({},Tl,Wp),Bn=(t,e=[])=>{q(t)?t.forEach(n=>n(...e)):t&&t(...e)},vh=t=>t?q(t)?t.some(e=>e.length>1):t.length>1:!1;function jp(t){const e={};for(const R in t)R in Wp||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,_=TE(i),T=_&&_[0],O=_&&_[1],{onBeforeEnter:D,onEnter:C,onEnterCancelled:v,onLeave:m,onLeaveCancelled:S,onBeforeAppear:F=D,onAppear:I=C,onAppearCancelled:b=v}=e,y=(R,B,ee)=>{pn(R,B?u:a),pn(R,B?l:o),ee&&ee()},w=(R,B)=>{R._isLeaving=!1,pn(R,h),pn(R,p),pn(R,f),B&&B()},P=R=>(B,ee)=>{const ne=R?I:C,V=()=>y(B,R,ee);Bn(ne,[B,V]),Eh(()=>{pn(B,R?c:r),Vt(B,R?u:a),vh(ne)||wh(B,s,T,V)})};return Ie(e,{onBeforeEnter(R){Bn(D,[R]),Vt(R,r),Vt(R,o)},onBeforeAppear(R){Bn(F,[R]),Vt(R,c),Vt(R,l)},onEnter:P(!1),onAppear:P(!0),onLeave(R,B){R._isLeaving=!0;const ee=()=>w(R,B);Vt(R,h),zp(),Vt(R,f),Eh(()=>{R._isLeaving&&(pn(R,h),Vt(R,p),vh(m)||wh(R,s,O,ee))}),Bn(m,[R,ee])},onEnterCancelled(R){y(R,!1),Bn(v,[R])},onAppearCancelled(R){y(R,!0),Bn(b,[R])},onLeaveCancelled(R){w(R),Bn(S,[R])}})}function TE(t){if(t==null)return null;if(Ee(t))return[Fa(t.enter),Fa(t.leave)];{const e=Fa(t);return[e,e]}}function Fa(t){return uo(t)}function Vt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[js]||(t[js]=new Set)).add(e)}function pn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[js];n&&(n.delete(e),n.size||(t[js]=void 0))}function Eh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let IE=0;function wh(t,e,n,s){const i=t._endId=++IE,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:c}=qp(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),r()},f=p=>{p.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function qp(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),i=s(`${hn}Delay`),r=s(`${hn}Duration`),o=bh(i,r),a=s(`${di}Delay`),c=s(`${di}Duration`),l=bh(a,c);let u=null,h=0,f=0;e===hn?o>0&&(u=hn,h=o,f=r.length):e===di?l>0&&(u=di,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?hn:di:null,f=u?u===hn?r.length:c.length:0);const p=u===hn&&/\b(transform|all)(,|$)/.test(s(`${hn}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:p}}function bh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Ch(n)+Ch(t[s])))}function Ch(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function zp(){return document.body.offsetHeight}function SE(t,e,n){const s=t[js];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const xl=Symbol("_vod"),Dl={beforeMount(t,{value:e},{transition:n}){t[xl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):pi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),pi(t,!0),s.enter(t)):s.leave(t,()=>{pi(t,!1)}):pi(t,e))},beforeUnmount(t,{value:e}){pi(t,e)}};function pi(t,e){t.style.display=e?t[xl]:"none"}function RE(){Dl.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}function kE(t,e,n){const s=t.style,i=Se(n);if(n&&!i){if(e&&!Se(e))for(const r in e)n[r]==null&&wc(s,r,"");for(const r in n)wc(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),xl in t&&(s.display=r)}}const Th=/\s*!important$/;function wc(t,e,n){if(q(n))n.forEach(s=>wc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=AE(t,e);Th.test(n)?t.setProperty(pt(s),n.replace(Th,""),"important"):t[s]=n}}const Ih=["Webkit","Moz","ms"],Ua={};function AE(t,e){const n=Ua[e];if(n)return n;let s=st(e);if(s!=="filter"&&s in t)return Ua[e]=s;s=gr(s);for(let i=0;i<Ih.length;i++){const r=Ih[i]+s;if(r in t)return Ua[e]=r}return e}const Sh="http://www.w3.org/1999/xlink";function PE(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Sh,e.slice(6,e.length)):t.setAttributeNS(Sh,e,n);else{const r=uy(e);n==null||r&&!Cd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function NE(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Cd(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function jt(t,e,n,s){t.addEventListener(e,n,s)}function OE(t,e,n,s){t.removeEventListener(e,n,s)}const Rh=Symbol("_vei");function xE(t,e,n,s,i=null){const r=t[Rh]||(t[Rh]={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=DE(e);if(s){const l=r[e]=FE(s,i);jt(t,a,l,c)}else o&&(OE(t,a,o,c),r[e]=void 0)}}const kh=/(?:Once|Passive|Capture)$/;function DE(t){let e;if(kh.test(t)){e={};let s;for(;s=t.match(kh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):pt(t.slice(2)),e]}let Ba=0;const LE=Promise.resolve(),ME=()=>Ba||(LE.then(()=>Ba=0),Ba=Date.now());function FE(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ut(UE(s,n.value),e,5,[s])};return n.value=t,n.attached=ME(),n}function UE(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ah=/^on[a-z]/,BE=(t,e,n,s,i=!1,r,o,a,c)=>{e==="class"?SE(t,s,i):e==="style"?kE(t,n,s):pr(e)?il(e)||xE(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):HE(t,e,s,i))?NE(t,e,s,r,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),PE(t,e,s,i))};function HE(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ah.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ah.test(e)&&Se(n)?!1:e in t}/*! #__NO_SIDE_EFFECTS__ */function Kp(t,e){const n=Er(t);class s extends fa{constructor(r){super(n,r,e)}}return s.def=n,s}/*! #__NO_SIDE_EFFECTS__ */const $E=t=>Kp(t,sg),VE=typeof HTMLElement<"u"?HTMLElement:class{};class fa extends VE{constructor(e,n={},s){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),yr(()=>{this._connected||(Tc(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);this._ob=new MutationObserver(s=>{for(const i of s)this._setAttr(i.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(s,i=!1)=>{const{props:r,styles:o}=s;let a;if(r&&!q(r))for(const c in r){const l=r[c];(l===Number||l&&l.type===Number)&&(c in this._props&&(this._props[c]=uo(this._props[c])),(a||(a=Object.create(null)))[st(c)]=!0)}this._numberProps=a,i&&this._resolveProps(s),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(s=>e(s,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,s=q(n)?n:Object.keys(n||{});for(const i of Object.keys(this))i[0]!=="_"&&s.includes(i)&&this._setProp(i,this[i],!0,!1);for(const i of s.map(st))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(r){this._setProp(i,r)}})}_setAttr(e){let n=this.getAttribute(e);const s=st(e);this._numberProps&&this._numberProps[s]&&(n=uo(n)),this._setProp(s,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,s=!0,i=!0){n!==this._props[e]&&(this._props[e]=n,i&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(pt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(pt(e),n+""):n||this.removeAttribute(pt(e))))}_update(){Tc(this._createVNode(),this.shadowRoot)}_createVNode(){const e=fe(this._def,Ie({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const s=(r,o)=>{this.dispatchEvent(new CustomEvent(r,{detail:o}))};n.emit=(r,...o)=>{s(r,o),pt(r)!==r&&s(pt(r),o)};let i=this;for(;i=i&&(i.parentNode||i.host);)if(i instanceof fa){n.parent=i._instance,n.provides=i._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function WE(t="$style"){{const e=sn();if(!e)return ve;const n=e.type.__cssModules;if(!n)return ve;const s=n[t];return s||ve}}function jE(t){const e=sn();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Cc(r,i))},s=()=>{const i=t(e.proxy);bc(e.subTree,i),n(i)};Xd(s),ms(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),aa(()=>i.disconnect())})}function bc(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{bc(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)Cc(t.el,e);else if(t.type===Ae)t.children.forEach(n=>bc(n,e));else if(t.type===Jn){let{el:n,anchor:s}=t;for(;n&&(Cc(n,e),n!==s);)n=n.nextSibling}}function Cc(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const Gp=new WeakMap,Yp=new WeakMap,vo=Symbol("_moveCb"),Ph=Symbol("_enterCb"),Qp={name:"TransitionGroup",props:Ie({},CE,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=sn(),s=Cl();let i,r;return ra(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!QE(i[0].el,n.vnode.el,o))return;i.forEach(KE),i.forEach(GE);const a=i.filter(YE);zp(),a.forEach(c=>{const l=c.el,u=l.style;Vt(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l[vo]=f=>{f&&f.target!==l||(!f||/transform$/.test(f.propertyName))&&(l.removeEventListener("transitionend",h),l[vo]=null,pn(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=ae(t),a=jp(o);let c=o.tag||Ae;i=r,r=e.default?sa(e.default()):[];for(let l=0;l<r.length;l++){const u=r[l];u.key!=null&&ts(u,Vs(u,a,s,n))}if(i)for(let l=0;l<i.length;l++){const u=i[l];ts(u,Vs(u,a,s,n)),Gp.set(u,u.el.getBoundingClientRect())}return fe(c,null,r)}}},qE=t=>delete t.mode;Qp.props;const zE=Qp;function KE(t){const e=t.el;e[vo]&&e[vo](),e[Ph]&&e[Ph]()}function GE(t){Yp.set(t,t.el.getBoundingClientRect())}function YE(t){const e=Gp.get(t),n=Yp.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function QE(t,e,n){const s=t.cloneNode(),i=t[js];i&&i.forEach(a=>{a.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:o}=qp(s);return r.removeChild(s),o}const xn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>Ns(e,n):e};function JE(t){t.target.composing=!0}function Nh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const mt=Symbol("_assign"),Eo={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[mt]=xn(i);const r=s||i.props&&i.props.type==="number";jt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=lo(a)),t[mt](a)}),n&&jt(t,"change",()=>{t.value=t.value.trim()}),e||(jt(t,"compositionstart",JE),jt(t,"compositionend",Nh),jt(t,"change",Nh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[mt]=xn(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&lo(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Ll={deep:!0,created(t,e,n){t[mt]=xn(n),jt(t,"change",()=>{const s=t._modelValue,i=qs(t),r=t.checked,o=t[mt];if(q(s)){const a=Yo(s,i),c=a!==-1;if(r&&!c)o(s.concat(i));else if(!r&&c){const l=[...s];l.splice(a,1),o(l)}}else if(ds(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Jp(t,r))})},mounted:Oh,beforeUpdate(t,e,n){t[mt]=xn(n),Oh(t,e,n)}};function Oh(t,{value:e,oldValue:n},s){t._modelValue=e,q(e)?t.checked=Yo(e,s.props.value)>-1:ds(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=An(e,Jp(t,!0)))}const Ml={created(t,{value:e},n){t.checked=An(e,n.props.value),t[mt]=xn(n),jt(t,"change",()=>{t[mt](qs(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[mt]=xn(s),e!==n&&(t.checked=An(e,s.props.value))}},Fl={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=ds(e);jt(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?lo(qs(o)):qs(o));t[mt](t.multiple?i?new Set(r):r:r[0])}),t[mt]=xn(s)},mounted(t,{value:e}){xh(t,e)},beforeUpdate(t,e,n){t[mt]=xn(n)},updated(t,{value:e}){xh(t,e)}};function xh(t,e){const n=t.multiple;if(!(n&&!q(e)&&!ds(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=qs(r);if(n)q(e)?r.selected=Yo(e,o)>-1:r.selected=e.has(o);else if(An(qs(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function qs(t){return"_value"in t?t._value:t.value}function Jp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Xp={created(t,e,n){qr(t,e,n,null,"created")},mounted(t,e,n){qr(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){qr(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){qr(t,e,n,s,"updated")}};function Zp(t,e){switch(t){case"SELECT":return Fl;case"TEXTAREA":return Eo;default:switch(e){case"checkbox":return Ll;case"radio":return Ml;default:return Eo}}}function qr(t,e,n,s,i){const o=Zp(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}function XE(){Eo.getSSRProps=({value:t})=>({value:t}),Ml.getSSRProps=({value:t},e)=>{if(e.props&&An(e.props.value,t))return{checked:!0}},Ll.getSSRProps=({value:t},e)=>{if(q(t)){if(e.props&&Yo(t,e.props.value)>-1)return{checked:!0}}else if(ds(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},Xp.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=Zp(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const ZE=["ctrl","shift","alt","meta"],ew={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ZE.some(n=>t[`${n}Key`]&&!e.includes(n))},tw=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=ew[e[i]];if(r&&r(n,e))return}return t(n,...s)},nw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},sw=(t,e)=>n=>{if(!("key"in n))return;const s=pt(n.key);if(e.some(i=>i===s||nw[i]===s))return t(n)},eg=Ie({patchProp:BE},bE);let Di,Dh=!1;function tg(){return Di||(Di=Cp(eg))}function ng(){return Di=Dh?Di:Tp(eg),Dh=!0,Di}const Tc=(...t)=>{tg().render(...t)},sg=(...t)=>{ng().hydrate(...t)},ig=(...t)=>{const e=tg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=rg(s);if(!i)return;const r=e._component;!Z(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},iw=(...t)=>{const e=ng().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=rg(s);if(i)return n(i,!0,i instanceof SVGElement)},e};function rg(t){return Se(t)?document.querySelector(t):t}let Lh=!1;const rw=()=>{Lh||(Lh=!0,XE(),RE())},ow=()=>{},aw=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:ep,BaseTransitionPropsValidators:Tl,Comment:Ge,EffectScope:cl,Fragment:Ae,KeepAlive:yv,ReactiveEffect:$s,Static:Jn,Suspense:av,Teleport:iE,Text:ns,Transition:Ol,TransitionGroup:zE,VueElement:fa,assertNumber:Ky,callWithAsyncErrorHandling:ut,callWithErrorHandling:Qt,camelize:st,capitalize:gr,cloneVNode:Ut,compatUtils:EE,compile:ow,computed:lt,createApp:ig,createBlock:ca,createCommentVNode:Op,createElementBlock:ze,createElementVNode:ke,createHydrationRenderer:Tp,createPropsRestProxy:Bv,createRenderer:Cp,createSSRApp:iw,createSlots:Cv,createStaticVNode:aE,createTextVNode:Zi,createVNode:fe,customRef:$y,defineAsyncComponent:mv,defineComponent:Er,defineCustomElement:Kp,defineEmits:kv,defineExpose:Av,defineModel:Ov,defineOptions:Pv,defineProps:Rv,defineSSRCustomElement:$E,defineSlots:Nv,get devtools(){return Is},effect:py,effectScope:ll,getCurrentInstance:sn,getCurrentScope:ul,getTransitionRawChildren:sa,guardReactiveProps:Np,h:ha,handleError:gs,hasInjectionContext:_p,hydrate:sg,initCustomFormatter:gE,initDirectivesForSSR:rw,inject:ht,isMemoSame:$p,isProxy:gl,isReactive:Dt,isReadonly:es,isRef:Te,isRuntimeOnly:fE,isShallow:ji,isVNode:Nn,markRaw:_r,mergeDefaults:Fv,mergeModels:Uv,mergeProps:xp,nextTick:yr,normalizeClass:ni,normalizeProps:cy,normalizeStyle:mr,onActivated:np,onBeforeMount:rp,onBeforeUnmount:oa,onBeforeUpdate:op,onDeactivated:sp,onErrorCaptured:up,onMounted:ms,onRenderTracked:lp,onRenderTriggered:cp,onScopeDispose:Sd,onServerPrefetch:ap,onUnmounted:aa,onUpdated:ra,openBlock:xe,popScopeId:ev,provide:Ni,proxyRefs:yl,pushScopeId:Zy,queuePostFlushCb:fo,reactive:ps,readonly:pl,ref:ge,registerRuntimeCompiler:hE,render:Tc,renderList:go,renderSlot:Tv,resolveComponent:hp,resolveDirective:bv,resolveDynamicComponent:wv,resolveFilter:vE,resolveTransitionHooks:Vs,setBlockTracking:_c,setDevtoolsHook:Kd,setTransitionHooks:ts,shallowReactive:dl,shallowReadonly:Ly,shallowRef:Bd,ssrContextKey:Bp,ssrUtils:yE,stop:gy,toDisplayString:Wi,toHandlerKey:Ai,toHandlers:Iv,toRaw:ae,toRef:Vd,toRefs:$d,toValue:Uy,transformVNodeArgs:rE,triggerRef:Fy,unref:Be,useAttrs:Lv,useCssModule:WE,useCssVars:jE,useModel:Mv,useSSRContext:Hp,useSlots:Dv,useTransitionState:Cl,vModelCheckbox:Ll,vModelDynamic:Xp,vModelRadio:Ml,vModelSelect:Fl,vModelText:Eo,vShow:Dl,version:Vp,warn:zy,watch:Jt,watchEffect:Jd,watchPostEffect:Xd,watchSyncEffect:dv,withAsyncContext:Hv,withCtx:Yi,withDefaults:xv,withDirectives:bl,withKeys:sw,withMemo:mE,withModifiers:tw,withScopeId:tv},Symbol.toStringTag,{value:"Module"}));var cw=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let og;const da=t=>og=t,ag=Symbol();function Ic(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Li;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Li||(Li={}));function lw(){const t=ll(!0),e=t.run(()=>ge({}));let n=[],s=[];const i=_r({install(r){da(i),i._a=r,r.provide(ag,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!cw?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const cg=()=>{};function Mh(t,e,n,s=cg){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&ul()&&Sd(i),i}function Cs(t,...e){t.slice().forEach(n=>{n(...e)})}const uw=t=>t();function Sc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Ic(i)&&Ic(s)&&t.hasOwnProperty(n)&&!Te(s)&&!Dt(s)?t[n]=Sc(i,s):t[n]=s}return t}const hw=Symbol();function fw(t){return!Ic(t)||!t.hasOwnProperty(hw)}const{assign:gn}=Object;function dw(t){return!!(Te(t)&&t.effect)}function pw(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=i?i():{});const u=$d(n.state.value[t]);return gn(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=_r(lt(()=>{da(n);const p=n._s.get(t);return o[f].call(p,p)})),h),{}))}return c=lg(t,l,e,n,s,!0),c}function lg(t,e,n={},s,i,r){let o;const a=gn({actions:{}},n),c={deep:!0};let l,u,h=[],f=[],p;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),ge({});let T;function O(b){let y;l=u=!1,typeof b=="function"?(b(s.state.value[t]),y={type:Li.patchFunction,storeId:t,events:p}):(Sc(s.state.value[t],b),y={type:Li.patchObject,payload:b,storeId:t,events:p});const w=T=Symbol();yr().then(()=>{T===w&&(l=!0)}),u=!0,Cs(h,y,s.state.value[t])}const D=r?function(){const{state:y}=n,w=y?y():{};this.$patch(P=>{gn(P,w)})}:cg;function C(){o.stop(),h=[],f=[],s._s.delete(t)}function v(b,y){return function(){da(s);const w=Array.from(arguments),P=[],R=[];function B(V){P.push(V)}function ee(V){R.push(V)}Cs(f,{args:w,name:b,store:S,after:B,onError:ee});let ne;try{ne=y.apply(this&&this.$id===t?this:S,w)}catch(V){throw Cs(R,V),V}return ne instanceof Promise?ne.then(V=>(Cs(P,V),V)).catch(V=>(Cs(R,V),Promise.reject(V))):(Cs(P,ne),ne)}}const m={_p:s,$id:t,$onAction:Mh.bind(null,f),$patch:O,$reset:D,$subscribe(b,y={}){const w=Mh(h,b,y.detached,()=>P()),P=o.run(()=>Jt(()=>s.state.value[t],R=>{(y.flush==="sync"?u:l)&&b({storeId:t,type:Li.direct,events:p},R)},gn({},c,y)));return w},$dispose:C},S=ps(m);s._s.set(t,S);const I=(s._a&&s._a.runWithContext||uw)(()=>s._e.run(()=>(o=ll()).run(e)));for(const b in I){const y=I[b];if(Te(y)&&!dw(y)||Dt(y))r||(_&&fw(y)&&(Te(y)?y.value=_[b]:Sc(y,_[b])),s.state.value[t][b]=y);else if(typeof y=="function"){const w=v(b,y);I[b]=w,a.actions[b]=y}}return gn(S,I),gn(ae(S),I),Object.defineProperty(S,"$state",{get:()=>s.state.value[t],set:b=>{O(y=>{gn(y,b)})}}),s._p.forEach(b=>{gn(S,o.run(()=>b({store:S,app:s._a,pinia:s,options:a})))}),_&&r&&n.hydrate&&n.hydrate(S.$state,_),l=!0,u=!0,S}function ug(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,c){const l=_p();return a=a||(l?ht(ag,null):null),a&&da(a),a=og,a._s.has(s)||(r?lg(s,e,i,a):pw(s,i,a)),a._s.get(s)}return o.$id=s,o}function er(t){{t=ae(t);const e={};for(const n in t){const s=t[n];(Te(s)||Dt(s))&&(e[n]=Vd(t,n))}return e}}var gw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function _w(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function s(){return this instanceof s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var i=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,i.get?i:{enumerable:!0,get:function(){return t[s]}})}),n}var hg={exports:{}};const yw=_w(aw);(function(t,e){(function(s,i){t.exports=i(yw)})(gw,n=>(()=>{var s={772:(a,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.default=(l,u)=>{const h=l.__vccOpts||l;for(const[f,p]of u)h[f]=p;return h}},976:a=>{a.exports=n}},i={};function r(a){var c=i[a];if(c!==void 0)return c.exports;var l=i[a]={exports:{}};return s[a](l,l.exports,r),l.exports}r.d=(a,c)=>{for(var l in c)r.o(c,l)&&!r.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:c[l]})},r.o=(a,c)=>Object.prototype.hasOwnProperty.call(a,c),r.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o={};return(()=>{r.r(o),r.d(o,{ToastComponent:()=>S,ToastPlugin:()=>I,ToastPositions:()=>_,default:()=>b,useToast:()=>F});var a=r(976);const c=(0,a.createElementVNode)("div",{class:"v-toast__icon"},null,-1),l=["innerHTML"];function u(y,w,P,R,B,ee){return(0,a.openBlock)(),(0,a.createBlock)(a.Transition,{"enter-active-class":y.transition.enter,"leave-active-class":y.transition.leave},{default:(0,a.withCtx)(()=>[(0,a.withDirectives)((0,a.createElementVNode)("div",{ref:"root",role:"alert",class:(0,a.normalizeClass)(["v-toast__item",[`v-toast__item--${y.type}`,`v-toast__item--${y.position}`]]),onMouseover:w[0]||(w[0]=ne=>y.toggleTimer(!0)),onMouseleave:w[1]||(w[1]=ne=>y.toggleTimer(!1)),onClick:w[2]||(w[2]=function(){return y.whenClicked&&y.whenClicked(...arguments)})},[c,(0,a.createElementVNode)("p",{class:"v-toast__text",innerHTML:y.message},null,8,l)],34),[[a.vShow,y.isActive]])]),_:1},8,["enter-active-class","leave-active-class"])}function h(y){var w;typeof y.remove<"u"?y.remove():(w=y.parentNode)==null||w.removeChild(y)}function f(y,w,P){let R=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const B=(0,a.h)(y,w,R),ee=document.createElement("div");return ee.classList.add("v-toast--pending"),P.appendChild(ee),(0,a.render)(B,ee),B.component}class p{constructor(w,P){this.startedAt=Date.now(),this.callback=w,this.delay=P,this.timer=setTimeout(w,P)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const _=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"});function T(y){return{all:y=y||new Map,on:function(w,P){var R=y.get(w);R?R.push(P):y.set(w,[P])},off:function(w,P){var R=y.get(w);R&&(P?R.splice(R.indexOf(P)>>>0,1):y.set(w,[]))},emit:function(w,P){var R=y.get(w);R&&R.slice().map(function(B){B(P)}),(R=y.get("*"))&&R.slice().map(function(B){B(w,P)})}}}const D=T(),C=(0,a.defineComponent)({name:"Toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:_.BOTTOM_RIGHT,validator(y){return Object.values(_).includes(y)}},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data(){return{isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}},beforeMount(){this.setupContainer()},mounted(){this.showNotice(),D.on("toast-clear",this.dismiss)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-toast.v-toast--top"),this.parentBottom=document.querySelector(".v-toast.v-toast--bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-toast v-toast--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-toast v-toast--bottom");const y=document.body;y.appendChild(this.parentTop),y.appendChild(this.parentBottom)},shouldQueue(){return this.queue?this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0:!1},dismiss(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout(()=>{this.onDismiss.apply(null,arguments);const y=this.$refs.root;(0,a.render)(null,y),h(y)},150)},showNotice(){if(this.shouldQueue()){this.queueTimer=setTimeout(this.showNotice,250);return}const y=this.$refs.root.parentElement;this.correctParent.insertAdjacentElement("afterbegin",this.$refs.root),h(y),this.isActive=!0,this.duration&&(this.timer=new p(this.dismiss,this.duration))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.dismiss())},toggleTimer(y){!this.pauseOnHover||!this.timer||(y?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case _.TOP:case _.TOP_RIGHT:case _.TOP_LEFT:return this.parentTop;case _.BOTTOM:case _.BOTTOM_RIGHT:case _.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case _.TOP:case _.TOP_RIGHT:case _.TOP_LEFT:return{enter:"v-toast--fade-in-down",leave:"v-toast--fade-out"};case _.BOTTOM:case _.BOTTOM_RIGHT:case _.BOTTOM_LEFT:return{enter:"v-toast--fade-in-up",leave:"v-toast--fade-out"}}}},beforeUnmount(){D.off("toast-clear",this.dismiss)}});var v=r(772);const S=(0,v.default)(C,[["render",u]]),F=function(){let y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{open(w){let P=null;typeof w=="string"&&(P=w);const B=Object.assign({},{message:P},y,w);return{dismiss:f(S,B,document.body).ctx.dismiss}},clear(){D.emit("toast-clear")},success(w){let P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:w,type:"success"},P))},error(w){let P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:w,type:"error"},P))},info(w){let P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:w,type:"info"},P))},warning(w){let P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:w,type:"warning"},P))},default(w){let P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:w,type:"default"},P))}}},I={install:function(y){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},P=F(w);y.config.globalProperties.$toast=P,y.provide("$toast",P)}},b=I})(),o})())})(hg);var fg=hg.exports;const vw=mw(fg);/**
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
 */const dg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const M=function(t,e){if(!t)throw ri(e)},ri=function(t){return new Error("Firebase Database ("+dg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const pg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ew=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ul={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ew(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||l==null||h==null)throw new ww;const f=r<<2|a>>4;if(s.push(f),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const _=l<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ww extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gg=function(t){const e=pg(t);return Ul.encodeByteArray(e,!0)},wo=function(t){return gg(t).replace(/\./g,"")},bo=function(t){try{return Ul.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bw(t){return mg(void 0,t)}function mg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Cw(n)||(t[n]=mg(t[n],e[n]));return t}function Cw(t){return t!=="__proto__"}/**
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
 */function Tw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Iw=()=>Tw().__FIREBASE_DEFAULTS__,Sw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bo(t[1]);return e&&JSON.parse(e)},Bl=()=>{try{return Iw()||Sw()||Rw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_g=t=>{var e,n;return(n=(e=Bl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kw=t=>{const e=_g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},yg=()=>{var t;return(t=Bl())===null||t===void 0?void 0:t.config},vg=t=>{var e;return(e=Bl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class qt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Aw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[wo(JSON.stringify(n)),wo(JSON.stringify(o)),a].join(".")}/**
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
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function Pw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Eg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nw(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wg(){return dg.NODE_ADMIN===!0}function Ow(){try{return typeof indexedDB=="object"}catch{return!1}}function xw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Dw="FirebaseError";class Mn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Dw,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,br.prototype.create)}}class br{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Lw(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mn(i,a,s)}}function Lw(t,e){return t.replace(Mw,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Mw=/\{\$([^}]+)}/g;/**
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
 */function tr(t){return JSON.parse(t)}function He(t){return JSON.stringify(t)}/**
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
 */const bg=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=tr(bo(r[0])||""),n=tr(bo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Fw=function(t){const e=bg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Uw=function(t){const e=bg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Co(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function To(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Io(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Fh(r)&&Fh(o)){if(!Io(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Fh(t){return t!==null&&typeof t=="object"}/**
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
 */function oi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ti(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Bw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+l+c+u+s[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Hw(t,e){const n=new $w(t,e);return n.subscribe.bind(n)}class $w{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Vw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ha),i.error===void 0&&(i.error=Ha),i.complete===void 0&&(i.complete=Ha);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ha(){}function Ks(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Ww=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,M(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pa=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ne(t){return t&&t._delegate?t._delegate:t}class is{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $n="[DEFAULT]";/**
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
 */class jw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new qt;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zw(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qw(t){return t===$n?void 0:t}function zw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Kw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const Gw={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},Yw=ye.INFO,Qw={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},Jw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Qw[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $l{constructor(e){this.name=e,this._logLevel=Yw,this._logHandler=Jw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const Xw=(t,e)=>e.some(n=>t instanceof n);let Uh,Bh;function Zw(){return Uh||(Uh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eb(){return Bh||(Bh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cg=new WeakMap,Rc=new WeakMap,Tg=new WeakMap,$a=new WeakMap,Vl=new WeakMap;function tb(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Tn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cg.set(n,t)}).catch(()=>{}),Vl.set(e,t),e}function nb(t){if(Rc.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Rc.set(t,e)}let kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Tg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sb(t){kc=t(kc)}function ib(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Va(this),e,...n);return Tg.set(s,e.sort?e.sort():[e]),Tn(s)}:eb().includes(t)?function(...e){return t.apply(Va(this),e),Tn(Cg.get(this))}:function(...e){return Tn(t.apply(Va(this),e))}}function rb(t){return typeof t=="function"?ib(t):(t instanceof IDBTransaction&&nb(t),Xw(t,Zw())?new Proxy(t,kc):t)}function Tn(t){if(t instanceof IDBRequest)return tb(t);if($a.has(t))return $a.get(t);const e=rb(t);return e!==t&&($a.set(t,e),Vl.set(e,t)),e}const Va=t=>Vl.get(t);function ob(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Tn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Tn(o.result),c.oldVersion,c.newVersion,Tn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ab=["get","getKey","getAll","getAllKeys","count"],cb=["put","add","delete","clear"],Wa=new Map;function Hh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wa.get(e))return Wa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=cb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ab.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Wa.set(e,r),r}sb(t=>({...t,get:(e,n,s)=>Hh(e,n)||t.get(e,n,s),has:(e,n)=>!!Hh(e,n)||t.has(e,n)}));/**
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
 */class lb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ub(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ub(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ac="@firebase/app",$h="0.9.23";/**
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
 */const rs=new $l("@firebase/app"),hb="@firebase/app-compat",fb="@firebase/analytics-compat",db="@firebase/analytics",pb="@firebase/app-check-compat",gb="@firebase/app-check",mb="@firebase/auth",_b="@firebase/auth-compat",yb="@firebase/database",vb="@firebase/database-compat",Eb="@firebase/functions",wb="@firebase/functions-compat",bb="@firebase/installations",Cb="@firebase/installations-compat",Tb="@firebase/messaging",Ib="@firebase/messaging-compat",Sb="@firebase/performance",Rb="@firebase/performance-compat",kb="@firebase/remote-config",Ab="@firebase/remote-config-compat",Pb="@firebase/storage",Nb="@firebase/storage-compat",Ob="@firebase/firestore",xb="@firebase/firestore-compat",Db="firebase",Lb="10.6.0";/**
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
 */const Pc="[DEFAULT]",Mb={[Ac]:"fire-core",[hb]:"fire-core-compat",[db]:"fire-analytics",[fb]:"fire-analytics-compat",[gb]:"fire-app-check",[pb]:"fire-app-check-compat",[mb]:"fire-auth",[_b]:"fire-auth-compat",[yb]:"fire-rtdb",[vb]:"fire-rtdb-compat",[Eb]:"fire-fn",[wb]:"fire-fn-compat",[bb]:"fire-iid",[Cb]:"fire-iid-compat",[Tb]:"fire-fcm",[Ib]:"fire-fcm-compat",[Sb]:"fire-perf",[Rb]:"fire-perf-compat",[kb]:"fire-rc",[Ab]:"fire-rc-compat",[Pb]:"fire-gcs",[Nb]:"fire-gcs-compat",[Ob]:"fire-fst",[xb]:"fire-fst-compat","fire-js":"fire-js",[Db]:"fire-js-all"};/**
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
 */const So=new Map,Nc=new Map;function Fb(t,e){try{t.container.addComponent(e)}catch(n){rs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gs(t){const e=t.name;if(Nc.has(e))return rs.debug(`There were multiple attempts to register component ${e}.`),!1;Nc.set(e,t);for(const n of So.values())Fb(n,t);return!0}function Wl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ub={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},In=new br("app","Firebase",Ub);/**
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
 */class Bb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new is("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
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
 */const ai=Lb;function Ig(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Pc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw In.create("bad-app-name",{appName:String(i)});if(n||(n=yg()),!n)throw In.create("no-options");const r=So.get(i);if(r){if(Io(n,r.options)&&Io(s,r.config))return r;throw In.create("duplicate-app",{appName:i})}const o=new Kw(i);for(const c of Nc.values())o.addComponent(c);const a=new Bb(n,s,o);return So.set(i,a),a}function Sg(t=Pc){const e=So.get(t);if(!e&&t===Pc&&yg())return Ig();if(!e)throw In.create("no-app",{appName:t});return e}function Sn(t,e,n){var s;let i=(s=Mb[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rs.warn(a.join(" "));return}Gs(new is(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Hb="firebase-heartbeat-database",$b=1,nr="firebase-heartbeat-store";let ja=null;function Rg(){return ja||(ja=ob(Hb,$b,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(nr)}}}).catch(t=>{throw In.create("idb-open",{originalErrorMessage:t.message})})),ja}async function Vb(t){try{return await(await Rg()).transaction(nr).objectStore(nr).get(kg(t))}catch(e){if(e instanceof Mn)rs.warn(e.message);else{const n=In.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rs.warn(n.message)}}}async function Vh(t,e){try{const s=(await Rg()).transaction(nr,"readwrite");await s.objectStore(nr).put(e,kg(t)),await s.done}catch(n){if(n instanceof Mn)rs.warn(n.message);else{const s=In.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rs.warn(s.message)}}}function kg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Wb=1024,jb=30*24*60*60*1e3;class qb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=jb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wh(),{heartbeatsToSend:s,unsentEntries:i}=zb(this._heartbeatsCache.heartbeats),r=wo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Wh(){return new Date().toISOString().substring(0,10)}function zb(t,e=Wb){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),jh(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Kb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ow()?xw().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Vb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jh(t){return wo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Gb(t){Gs(new is("platform-logger",e=>new lb(e),"PRIVATE")),Gs(new is("heartbeat",e=>new qb(e),"PRIVATE")),Sn(Ac,$h,t),Sn(Ac,$h,"esm2017"),Sn("fire-js","")}Gb("");var Yb="firebase",Qb="10.6.0";/**
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
 */Sn(Yb,Qb,"app");function jl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Ag(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jb=Ag,Pg=new br("auth","Firebase",Ag());/**
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
 */const Ro=new $l("@firebase/auth");function Xb(t,...e){Ro.logLevel<=ye.WARN&&Ro.warn(`Auth (${ai}): ${t}`,...e)}function to(t,...e){Ro.logLevel<=ye.ERROR&&Ro.error(`Auth (${ai}): ${t}`,...e)}/**
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
 */function _t(t,...e){throw ql(t,...e)}function Lt(t,...e){return ql(t,...e)}function Ng(t,e,n){const s=Object.assign(Object.assign({},Jb()),{[e]:n});return new br("auth","Firebase",s).create(e,{appName:t.name})}function Zb(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&_t(t,"argument-error"),Ng(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ql(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Pg.create(t,...e)}function J(t,e,...n){if(!t)throw ql(e,...n)}function zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw to(e),new Error(e)}function Zt(t,e){t||zt(e)}/**
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
 */function Oc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eC(){return qh()==="http:"||qh()==="https:"}function qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function tC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eC()||Pw()||"connection"in navigator)?navigator.onLine:!0}function nC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Cr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zt(n>e,"Short delay should be less than long delay!"),this.isMobile=Hl()||Eg()}get(){return tC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zl(t,e){Zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Og{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const iC=new Cr(3e4,6e4);function rn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function At(t,e,n,s,i={}){return xg(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=oi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Og.fetch()(Dg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function xg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},sC),e);try{const i=new oC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw zr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw zr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw zr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw zr(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ng(t,u,l);_t(t,u)}}catch(i){if(i instanceof Mn)throw i;_t(t,"network-request-failed",{message:String(i)})}}async function Tr(t,e,n,s,i={}){const r=await At(t,e,n,s,i);return"mfaPendingCredential"in r&&_t(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Dg(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?zl(t.config,i):`${t.config.apiScheme}://${i}`}function rC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Lt(this.auth,"network-request-failed")),iC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Lt(t,e,s);return i.customData._tokenResponse=n,i}function zh(t){return t!==void 0&&t.enterprise!==void 0}class aC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function cC(t,e){return At(t,"GET","/v2/recaptchaConfig",rn(t,e))}/**
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
 */async function lC(t,e){return At(t,"POST","/v1/accounts:delete",e)}async function uC(t,e){return At(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hC(t,e=!1){const n=Ne(t),s=await n.getIdToken(e),i=Kl(s);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Mi(qa(i.auth_time)),issuedAtTime:Mi(qa(i.iat)),expirationTime:Mi(qa(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function qa(t){return Number(t)*1e3}function Kl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return to("JWT malformed, contained fewer than 3 sections"),null;try{const i=bo(n);return i?JSON.parse(i):(to("Failed to decode base64 JWT payload"),null)}catch(i){return to("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fC(t){const e=Kl(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function os(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Mn&&dC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function dC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ko(t){var e;const n=t.auth,s=await t.getIdToken(),i=await os(t,uC(n,{idToken:s}));J(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?_C(r.providerUserInfo):[],a=mC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Lg(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function gC(t){const e=Ne(t);await ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mC(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function _C(t){return t.map(e=>{var{providerId:n}=e,s=jl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function yC(t,e){const n=await xg(t,{},async()=>{const s=oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Dg(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Og.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vC(t,e){return At(t,"POST","/v2/accounts:revokeToken",rn(t,e))}/**
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
 */class sr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await yC(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new sr;return s&&(J(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(J(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sr,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
 */function fn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=jl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Lg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await os(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hC(this,e)}reload(){return gC(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ko(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await os(this,lC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(l=n.createdAt)!==null&&l!==void 0?l:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:m,isAnonymous:S,providerData:F,stsTokenManager:I}=n;J(v&&I,e,"internal-error");const b=sr.fromJSON(this.name,I);J(typeof v=="string",e,"internal-error"),fn(h,e.name),fn(f,e.name),J(typeof m=="boolean",e,"internal-error"),J(typeof S=="boolean",e,"internal-error"),fn(p,e.name),fn(_,e.name),fn(T,e.name),fn(O,e.name),fn(D,e.name),fn(C,e.name);const y=new Xn({uid:v,auth:e,email:f,emailVerified:m,displayName:h,isAnonymous:S,photoURL:_,phoneNumber:p,tenantId:T,stsTokenManager:b,createdAt:D,lastLoginAt:C});return F&&Array.isArray(F)&&(y.providerData=F.map(w=>Object.assign({},w))),O&&(y._redirectEventId=O),y}static async _fromIdTokenResponse(e,n,s=!1){const i=new sr;i.updateFromServerResponse(n);const r=new Xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ko(r),r}}/**
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
 */const Kh=new Map;function Kt(t){Zt(t instanceof Function,"Expected a class definition");let e=Kh.get(t);return e?(Zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kh.set(t,e),e)}/**
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
 */class Mg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mg.type="NONE";const Gh=Mg;/**
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
 */function no(t,e,n){return`firebase:${t}:${e}:${n}`}class Ds{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=no(this.userKey,i.apiKey,r),this.fullPersistenceKey=no("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ds(Kt(Gh),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||Kt(Gh);const o=no(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Xn._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ds(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Ds(r,e,s))}}/**
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
 */function Yh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($g(e))return"Blackberry";if(Vg(e))return"Webos";if(Gl(e))return"Safari";if((e.includes("chrome/")||Ug(e))&&!e.includes("edge/"))return"Chrome";if(Hg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Fg(t=Ye()){return/firefox\//i.test(t)}function Gl(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ug(t=Ye()){return/crios\//i.test(t)}function Bg(t=Ye()){return/iemobile/i.test(t)}function Hg(t=Ye()){return/android/i.test(t)}function $g(t=Ye()){return/blackberry/i.test(t)}function Vg(t=Ye()){return/webos/i.test(t)}function ga(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function EC(t=Ye()){var e;return ga(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wC(){return Nw()&&document.documentMode===10}function Wg(t=Ye()){return ga(t)||Hg(t)||Vg(t)||$g(t)||/windows phone/i.test(t)||Bg(t)}function bC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function jg(t,e=[]){let n;switch(t){case"Browser":n=Yh(Ye());break;case"Worker":n=`${Yh(Ye())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ai}/${s}`}/**
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
 */class CC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function TC(t,e={}){return At(t,"GET","/v2/passwordPolicy",rn(t,e))}/**
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
 */const IC=6;class SC{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:IC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class RC{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qh(this),this.idTokenSubscription=new Qh(this),this.beforeStateQueue=new CC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ds.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ko(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ne(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TC(this),n=new SC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new br("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await vC(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Ds.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Xb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function on(t){return Ne(t)}class Qh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hw(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function kC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qg(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Lt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",kC().appendChild(s)})}function AC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const PC="https://www.google.com/recaptcha/enterprise.js?render=",NC="recaptcha-enterprise",OC="NO_RECAPTCHA";class xC{constructor(e){this.type=NC,this.auth=on(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{cC(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new aC(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;zh(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(OC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&zh(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}qg(PC+a).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Jh(t,e,n,s=!1){const i=new xC(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ao(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Jh(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Jh(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
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
 */function DC(t,e){const n=Wl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Io(r,e??{}))return i;_t(i,"already-initialized")}return n.initialize({options:e})}function LC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function MC(t,e,n){const s=on(t);J(s._canInitEmulator,s,"emulator-config-failed"),J(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=zg(e),{host:o,port:a}=FC(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||UC()}function zg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function FC(t){const e=zg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Xh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Xh(o)}}}function Xh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function UC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Yl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,n){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}async function BC(t,e){return At(t,"POST","/v1/accounts:update",e)}async function HC(t,e){return At(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function $C(t,e){return Tr(t,"POST","/v1/accounts:signInWithPassword",rn(t,e))}async function Ql(t,e){return At(t,"POST","/v1/accounts:sendOobCode",rn(t,e))}async function VC(t,e){return Ql(t,e)}async function WC(t,e){return Ql(t,e)}async function jC(t,e){return Ql(t,e)}/**
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
 */async function qC(t,e){return Tr(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}async function zC(t,e){return Tr(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}/**
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
 */class ir extends Yl{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ir(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ir(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ao(e,n,"signInWithPassword",$C);case"emailLink":return qC(e,{email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ao(e,s,"signUpPassword",HC);case"emailLink":return zC(e,{idToken:n,email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ls(t,e){return Tr(t,"POST","/v1/accounts:signInWithIdp",rn(t,e))}/**
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
 */const KC="http://localhost";class as extends Yl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=jl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new as(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ls(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ls(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ls(e,n)}buildRequest(){const e={requestUri:KC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oi(n)}return e}}/**
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
 */function GC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YC(t){const e=Ti(Ii(t)).link,n=e?Ti(Ii(e)).deep_link_id:null,s=Ti(Ii(t)).deep_link_id;return(s?Ti(Ii(s)).link:null)||s||n||e||t}class Jl{constructor(e){var n,s,i,r,o,a;const c=Ti(Ii(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,h=GC((i=c.mode)!==null&&i!==void 0?i:null);J(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=YC(e);try{return new Jl(n)}catch{return null}}}/**
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
 */class Fn{constructor(){this.providerId=Fn.PROVIDER_ID}static credential(e,n){return ir._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Jl.parseLink(n);return J(s,"argument-error"),ir._fromEmailAndCode(e,s.code,s.tenantId)}}Fn.PROVIDER_ID="password";Fn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Xl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ir extends Xl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vn extends Ir{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
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
 */class Ct extends Ir{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ct.credential(n,s)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
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
 */class En extends Ir{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
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
 */class wn extends Ir{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return wn.credential(n,s)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
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
 */async function QC(t,e){return Tr(t,"POST","/v1/accounts:signUp",rn(t,e))}/**
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
 */class cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Xn._fromIdTokenResponse(e,s,i),o=Zh(s);return new cs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Zh(s);return new cs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Zh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Po extends Mn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Po.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Po(e,n,s,i)}}function Kg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Po._fromErrorAndOperation(t,r,e,s):r})}async function JC(t,e,n=!1){const s=await os(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return cs._forOperation(t,"link",s)}/**
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
 */async function Gg(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await os(t,Kg(s,i,e,t),n);J(r.idToken,s,"internal-error");const o=Kl(r.idToken);J(o,s,"internal-error");const{sub:a}=o;return J(t.uid===a,s,"user-mismatch"),cs._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&_t(s,"user-mismatch"),r}}/**
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
 */async function Yg(t,e,n=!1){const s="signIn",i=await Kg(t,s,e),r=await cs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function XC(t,e){return Yg(on(t),e)}async function Qg(t,e){return Gg(Ne(t),e)}/**
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
 */function Zl(t,e,n){var s;J(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),J(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(J(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(J(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Jg(t){const e=on(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ZC(t,e,n){const s=on(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Zl(s,i,n),await Ao(s,i,"getOobCode",WC)}async function eT(t,e,n){const s=on(t),o=await Ao(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",QC).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Jg(t),c}),a=await cs._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function tT(t,e,n){return XC(Ne(t),Fn.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Jg(t),s})}async function nT(t,e){const n=Ne(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Zl(n.auth,i,e);const{email:r}=await VC(n.auth,i);r!==t.email&&await t.reload()}async function sT(t,e,n){const s=Ne(t),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Zl(s.auth,r,n);const{email:o}=await jC(s.auth,r);o!==t.email&&await t.reload()}/**
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
 */async function iT(t,e){return At(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Xg(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Ne(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await os(s,iT(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function rT(t,e){return oT(Ne(t),null,e)}async function oT(t,e,n){const{auth:s}=t,r={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(r.email=e),n&&(r.password=n);const o=await os(t,BC(s,r));await t._updateTokensIfNecessary(o,!0)}function aT(t,e,n,s){return Ne(t).onIdTokenChanged(e,n,s)}function cT(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function Zg(t,e,n,s){return Ne(t).onAuthStateChanged(e,n,s)}function lT(t){return Ne(t).signOut()}async function ef(t){return Ne(t).delete()}const No="__sak";/**
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
 */class em{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(No,"1"),this.storage.removeItem(No),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function uT(){const t=Ye();return Gl(t)||ga(t)}const hT=1e3,fT=10;class tm extends em{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uT()&&bC(),this.fallbackToPolling=Wg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);wC()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fT):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},hT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tm.type="LOCAL";const dT=tm;/**
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
 */class nm extends em{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nm.type="SESSION";const sm=nm;/**
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
 */function pT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ma{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new ma(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await pT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ma.receivers=[];/**
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
 */function eu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=eu("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Mt(){return window}function mT(t){Mt().location.href=t}/**
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
 */function im(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function _T(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vT(){return im()?self:null}/**
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
 */const rm="firebaseLocalStorageDb",ET=1,Oo="firebaseLocalStorage",om="fbase_key";class Sr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _a(t,e){return t.transaction([Oo],e?"readwrite":"readonly").objectStore(Oo)}function wT(){const t=indexedDB.deleteDatabase(rm);return new Sr(t).toPromise()}function xc(){const t=indexedDB.open(rm,ET);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Oo,{keyPath:om})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Oo)?e(s):(s.close(),await wT(),e(await xc()))})})}async function tf(t,e,n){const s=_a(t,!0).put({[om]:e,value:n});return new Sr(s).toPromise()}async function bT(t,e){const n=_a(t,!1).get(e),s=await new Sr(n).toPromise();return s===void 0?null:s.value}function nf(t,e){const n=_a(t,!0).delete(e);return new Sr(n).toPromise()}const CT=800,TT=3;class am{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>TT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return im()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ma._getInstance(vT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _T(),!this.activeServiceWorker)return;this.sender=new gT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xc();return await tf(e,No,"1"),await nf(e,No),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>tf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>bT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=_a(i,!1).getAll();return new Sr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}am.type="LOCAL";const IT=am;new Cr(3e4,6e4);/**
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
 */function cm(t,e){return e?Kt(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class tu extends Yl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ST(t){return Yg(t.auth,new tu(t),t.bypassAuthState)}function RT(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),Gg(n,new tu(t),t.bypassAuthState)}async function kT(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),JC(n,new tu(t),t.bypassAuthState)}/**
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
 */class lm{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ST;case"linkViaPopup":case"linkViaRedirect":return kT;case"reauthViaPopup":case"reauthViaRedirect":return RT;default:_t(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const AT=new Cr(2e3,1e4);async function PT(t,e,n){const s=on(t);Zb(t,e,Xl);const i=cm(s,n);return new zn(s,"signInViaPopup",e,i).executeNotNull()}class zn extends lm{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,zn.currentPopupAction&&zn.currentPopupAction.cancel(),zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AT.get())};e()}}zn.currentPopupAction=null;/**
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
 */const NT="pendingRedirect",so=new Map;class OT extends lm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=so.get(this.auth._key());if(!e){try{const s=await xT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}so.set(this.auth._key(),e)}return this.bypassAuthState||so.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xT(t,e){const n=MT(e),s=LT(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function DT(t,e){so.set(t._key(),e)}function LT(t){return Kt(t._redirectPersistence)}function MT(t){return no(NT,t.config.apiKey,t.name)}async function FT(t,e,n=!1){const s=on(t),i=cm(s,e),o=await new OT(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const UT=10*60*1e3;class BT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!um(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Lt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UT&&this.cachedEventUids.clear(),this.cachedEventUids.has(sf(e))}saveEventToCache(e){this.cachedEventUids.add(sf(e)),this.lastProcessedEventTime=Date.now()}}function sf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function um({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return um(t);default:return!1}}/**
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
 */async function $T(t,e={}){return At(t,"GET","/v1/projects",e)}/**
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
 */const VT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WT=/^https?/;async function jT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $T(t);for(const n of e)try{if(qT(n))return}catch{}_t(t,"unauthorized-domain")}function qT(t){const e=Oc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!WT.test(n))return!1;if(VT.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const zT=new Cr(3e4,6e4);function rf(){const t=Mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KT(t){return new Promise((e,n)=>{var s,i,r;function o(){rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rf(),n(Lt(t,"network-request-failed"))},timeout:zT.get()})}if(!((i=(s=Mt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Mt().gapi)===null||r===void 0)&&r.load)o();else{const a=AC("iframefcb");return Mt()[a]=()=>{gapi.load?o():n(Lt(t,"network-request-failed"))},qg(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw io=null,e})}let io=null;function GT(t){return io=io||KT(t),io}/**
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
 */const YT=new Cr(5e3,15e3),QT="__/auth/iframe",JT="emulator/auth/iframe",XT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eI(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zl(e,JT):`https://${t.config.authDomain}/${QT}`,s={apiKey:e.apiKey,appName:t.name,v:ai},i=ZT.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${oi(s).slice(1)}`}async function tI(t){const e=await GT(t),n=Mt().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:eI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Lt(t,"network-request-failed"),a=Mt().setTimeout(()=>{r(o)},YT.get());function c(){Mt().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const nI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sI=500,iI=600,rI="_blank",oI="http://localhost";class of{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aI(t,e,n,s=sI,i=iI){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},nI),{width:s.toString(),height:i.toString(),top:r,left:o}),l=Ye().toLowerCase();n&&(a=Ug(l)?rI:n),Fg(l)&&(e=e||oI,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,_])=>`${f}${p}=${_},`,"");if(EC(l)&&a!=="_self")return cI(e||"",a),new of(null);const h=window.open(e||"",a,u);J(h,t,"popup-blocked");try{h.focus()}catch{}return new of(h)}function cI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const lI="__/auth/handler",uI="emulator/auth/handler",hI=encodeURIComponent("fac");async function af(t,e,n,s,i,r){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ai,eventId:i};if(e instanceof Xl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Co(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Ir){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${hI}=${encodeURIComponent(c)}`:"";return`${fI(t)}?${oi(a).slice(1)}${l}`}function fI({config:t}){return t.emulator?zl(t,uI):`https://${t.authDomain}/${lI}`}/**
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
 */const za="webStorageSupport";class dI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sm,this._completeRedirectFn=FT,this._overrideRedirectResult=DT}async _openPopup(e,n,s,i){var r;Zt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await af(e,n,s,Oc(),i);return aI(e,o,eu())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await af(e,n,s,Oc(),i);return mT(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Zt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await tI(e),s=new BT(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(za,{type:za},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[za];o!==void 0&&n(!!o),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wg()||Gl()||ga()}}const pI=dI;var cf="@firebase/auth",lf="1.4.0";/**
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
 */class gI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _I(t){Gs(new is("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jg(t)},l=new RC(s,i,r,c);return LC(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Gs(new is("auth-internal",e=>{const n=on(e.getProvider("auth").getImmediate());return(s=>new gI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(cf,lf,mI(t)),Sn(cf,lf,"esm2017")}/**
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
 */const yI=5*60,vI=vg("authIdTokenMaxAge")||yI;let uf=null;const EI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>vI)return;const i=n==null?void 0:n.token;uf!==i&&(uf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wI(t=Sg()){const e=Wl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DC(t,{popupRedirectResolver:pI,persistence:[IT,dT,sm]}),s=vg("authTokenSyncURL");if(s){const r=EI(s);cT(n,r,()=>r(n.currentUser)),aT(n,o=>r(o))}const i=_g("auth");return i&&MC(n,`http://${i}`),n}_I("Browser");const hf="@firebase/database",ff="1.0.1";/**
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
 */let hm="";function bI(t){hm=t}/**
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
 */class CI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),He(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:tr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class TI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const fm=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new CI(e)}}catch{}return new TI},Kn=fm("localStorage"),Dc=fm("sessionStorage");/**
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
 */const Ms=new $l("@firebase/database"),II=function(){let t=1;return function(){return t++}}(),dm=function(t){const e=Ww(t),n=new Bw;n.update(e);const s=n.digest();return Ul.encodeByteArray(s)},Rr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Rr.apply(null,s):typeof s=="object"?e+=He(s):e+=s,e+=" "}return e};let Zn=null,df=!0;const SI=function(t,e){M(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ms.logLevel=ye.VERBOSE,Zn=Ms.log.bind(Ms),e&&Dc.set("logging_enabled",!0)):typeof t=="function"?Zn=t:(Zn=null,Dc.remove("logging_enabled"))},je=function(...t){if(df===!0&&(df=!1,Zn===null&&Dc.get("logging_enabled")===!0&&SI(!0)),Zn){const e=Rr.apply(null,t);Zn(e)}},kr=function(t){return function(...e){je(t,...e)}},Lc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Rr(...t);Ms.error(e)},en=function(...t){const e=`FIREBASE FATAL ERROR: ${Rr(...t)}`;throw Ms.error(e),new Error(e)},it=function(...t){const e="FIREBASE WARNING: "+Rr(...t);Ms.warn(e)},RI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&it("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ya=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},kI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ys="[MIN_NAME]",ls="[MAX_NAME]",_s=function(t,e){if(t===e)return 0;if(t===Ys||e===ls)return-1;if(e===Ys||t===ls)return 1;{const n=pf(t),s=pf(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},AI=function(t,e){return t===e?0:t<e?-1:1},gi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+He(e))},nu=function(t){if(typeof t!="object"||t===null)return He(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=He(e[s]),n+=":",n+=nu(t[e[s]]);return n+="}",n},pm=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const gm=function(t){M(!ya(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},PI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},NI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function OI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const xI=new RegExp("^-?(0*)\\d{1,10}$"),DI=-2147483648,LI=2147483647,pf=function(t){if(xI.test(t)){const e=Number(t);if(e>=DI&&e<=LI)return e}return null},ci=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw it("Exception was thrown by user callback.",n),e},Math.floor(0))}},MI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class FI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){it(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class UI{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',it(e)}}class Fs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Fs.OWNER="owner";/**
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
 */const su="5",mm="v",_m="s",ym="r",vm="f",Em=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wm="ls",bm="p",Mc="ac",Cm="websocket",Tm="long_polling";/**
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
 */class Im{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function BI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Sm(t,e,n){M(typeof e=="string","typeof type must == string"),M(typeof n=="object","typeof params must == object");let s;if(e===Cm)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Tm)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);BI(t)&&(n.ns=t.namespace);const i=[];return Qe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class HI{constructor(){this.counters_={}}incrementCounter(e,n=1){Ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return bw(this.counters_)}}/**
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
 */const Ka={},Ga={};function iu(t){const e=t.toString();return Ka[e]||(Ka[e]=new HI),Ka[e]}function $I(t,e){const n=t.toString();return Ga[n]||(Ga[n]=e()),Ga[n]}/**
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
 */class VI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ci(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const gf="start",WI="close",jI="pLPCommand",qI="pRTLPCB",Rm="id",km="pw",Am="ser",zI="cb",KI="seg",GI="ts",YI="d",QI="dframe",Pm=1870,Nm=30,JI=Pm-Nm,XI=25e3,ZI=3e4;class ks{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=kr(e),this.stats_=iu(n),this.urlFn=c=>(this.appCheckToken&&(c[Mc]=this.appCheckToken),Sm(n,Tm,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new VI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ZI)),kI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ru((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gf)this.id=a,this.password=c;else if(o===WI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[gf]="t",s[Am]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[zI]=this.scriptTagHolder.uniqueCallbackIdentifier),s[mm]=su,this.transportSessionId&&(s[_m]=this.transportSessionId),this.lastSessionId&&(s[wm]=this.lastSessionId),this.applicationId&&(s[bm]=this.applicationId),this.appCheckToken&&(s[Mc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Em.test(location.hostname)&&(s[ym]=vm);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ks.forceAllow_=!0}static forceDisallow(){ks.forceDisallow_=!0}static isAvailable(){return ks.forceAllow_?!0:!ks.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!PI()&&!NI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=gg(n),i=pm(s,JI);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[QI]="t",s[Rm]=e,s[km]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=He(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ru{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=II(),window[jI+this.uniqueCallbackIdentifier]=e,window[qI+this.uniqueCallbackIdentifier]=n,this.myIFrame=ru.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){je("frame writing exception"),a.stack&&je(a.stack),je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Rm]=this.myID,e[km]=this.myPW,e[Am]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Nm+s.length<=Pm;){const o=this.pendingSegs.shift();s=s+"&"+KI+i+"="+o.seg+"&"+GI+i+"="+o.ts+"&"+YI+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(XI)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const e0=16384,t0=45e3;let xo=null;typeof MozWebSocket<"u"?xo=MozWebSocket:typeof WebSocket<"u"&&(xo=WebSocket);class Tt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=kr(this.connId),this.stats_=iu(n),this.connURL=Tt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[mm]=su,typeof location<"u"&&location.hostname&&Em.test(location.hostname)&&(o[ym]=vm),n&&(o[_m]=n),s&&(o[wm]=s),i&&(o[Mc]=i),r&&(o[bm]=r),Sm(e,Cm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kn.set("previous_websocket_failure",!0);try{let s;wg(),this.mySock=new xo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Tt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&xo!==null&&!Tt.forceDisallow_}static previouslyFailed(){return Kn.isInMemoryStorage||Kn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=tr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=pm(n,e0);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(t0))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Tt.responsesRequiredToBeHealthy=2;Tt.healthyTimeout=3e4;/**
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
 */class rr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ks,Tt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Tt&&Tt.isAvailable();let s=n&&!Tt.previouslyFailed();if(e.webSocketOnly&&(n||it("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Tt];else{const i=this.transports_=[];for(const r of rr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);rr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}rr.globalTransportInitialized_=!1;/**
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
 */const n0=6e4,s0=5e3,i0=10*1024,r0=100*1024,Ya="t",mf="d",o0="s",_f="r",a0="e",yf="o",vf="a",Ef="n",wf="p",c0="h";class l0{constructor(e,n,s,i,r,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=kr("c:"+this.id+":"),this.transportManager_=new rr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>r0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>i0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ya in e){const n=e[Ya];n===vf?this.upgradeIfSecondaryHealthy_():n===_f?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===yf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=gi("t",e),s=gi("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:vf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ef,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=gi("t",e),s=gi("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=gi(Ya,e);if(mf in e){const s=e[mf];if(n===c0){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ef){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===o0?this.onConnectionShutdown_(s):n===_f?this.onReset_(s):n===a0?Lc("Server Error: "+s):n===yf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Lc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),su!==s&&it("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Fi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(n0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(s0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Om{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class xm{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){M(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Do extends xm{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Do}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const bf=32,Cf=768;class me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function he(){return new me("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dn(t){return t.pieces_.length-t.pieceNum_}function we(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new me(t.pieces_,e)}function ou(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function u0(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function or(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Dm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new me(e,0)}function Pe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof me)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new me(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function tt(t,e){const n=ie(t),s=ie(e);if(n===null)return e;if(n===s)return tt(we(t),we(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function h0(t,e){const n=or(t,0),s=or(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=_s(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function au(t,e){if(Dn(t)!==Dn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function gt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Dn(t)>Dn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class f0{constructor(e,n){this.errorPrefix_=n,this.parts_=or(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=pa(this.parts_[s]);Lm(this)}}function d0(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=pa(e),Lm(t)}function p0(t){const e=t.parts_.pop();t.byteLength_-=pa(e),t.parts_.length>0&&(t.byteLength_-=1)}function Lm(t){if(t.byteLength_>Cf)throw new Error(t.errorPrefix_+"has a key path longer than "+Cf+" bytes ("+t.byteLength_+").");if(t.parts_.length>bf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+bf+") or object contains a cycle "+Vn(t))}function Vn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class cu extends xm{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new cu}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const mi=1e3,g0=60*5*1e3,Tf=30*1e3,m0=1.3,_0=3e4,y0="server_kill",If=3;class Xt extends Om{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Xt.nextPersistentConnectionId_++,this.log_=kr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=mi,this.maxReconnectDelay_=g0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!wg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Do.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(He(r)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new qt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Xt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ht(e,"w")){const s=zs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();it(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Uw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Tf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Fw(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+He(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Lc("Unrecognized action received from server: "+He(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=mi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=mi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>_0&&(this.reconnectDelay_=mi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*m0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Xt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},l=function(h){M(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?je("getToken() completed but was canceled"):(je("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new l0(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{it(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(y0)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&it(h),c())}}}interrupt(e){je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Co(this.interruptReasons_)&&(this.reconnectDelay_=mi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>nu(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new me(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=If&&(this.reconnectDelay_=Tf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=If&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hm.replace(/\./g,"-")]=1,Hl()?e["framework.cordova"]=1:Eg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Do.getInstance().currentlyOnline();return Co(this.interruptReasons_)&&e}}Xt.nextPersistentConnectionId_=0;Xt.nextConnectionId_=0;/**
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
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
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
 */class va{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new oe(Ys,e),i=new oe(Ys,n);return this.compare(s,i)!==0}minPost(){return oe.MIN}}/**
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
 */let Kr;class Mm extends va{static get __EMPTY_NODE(){return Kr}static set __EMPTY_NODE(e){Kr=e}compare(e,n){return _s(e.name,n.name)}isDefinedOn(e){throw ri("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(ls,Kr)}makePost(e,n){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Kr)}toString(){return".key"}}const Us=new Mm;/**
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
 */class Gr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ue{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ue.RED,this.left=i??nt.EMPTY_NODE,this.right=r??nt.EMPTY_NODE}copy(e,n,s,i,r){return new Ue(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ue.RED=!0;Ue.BLACK=!1;class v0{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ue(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nt{constructor(e,n=nt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new nt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ue.BLACK,null,null))}remove(e){return new nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ue.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Gr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Gr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Gr(this.root_,null,this.comparator_,!0,e)}}nt.EMPTY_NODE=new v0;/**
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
 */function E0(t,e){return _s(t.name,e.name)}function lu(t,e){return _s(t,e)}/**
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
 */let Fc;function w0(t){Fc=t}const Fm=function(t){return typeof t=="number"?"number:"+gm(t):"string:"+t},Um=function(t){if(t.isLeafNode()){const e=t.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ht(e,".sv"),"Priority must be a string or number.")}else M(t===Fc||t.isEmpty(),"priority of unexpected type.");M(t===Fc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Sf;class Fe{constructor(e,n=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Um(this.priorityNode_)}static set __childrenNodeConstructor(e){Sf=e}static get __childrenNodeConstructor(){return Sf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:ie(e)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ie(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(M(s!==".priority"||Dn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(we(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Fm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=gm(this.value_):e+=this.value_,this.lazyHash_=dm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Fe.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Fe.VALUE_TYPE_ORDER.indexOf(n),r=Fe.VALUE_TYPE_ORDER.indexOf(s);return M(i>=0,"Unknown leaf type: "+n),M(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Bm,Hm;function b0(t){Bm=t}function C0(t){Hm=t}class T0 extends va{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?_s(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(ls,new Fe("[PRIORITY-POST]",Hm))}makePost(e,n){const s=Bm(e);return new oe(n,new Fe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Re=new T0;/**
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
 */const I0=Math.log(2);class S0{constructor(e){const n=r=>parseInt(Math.log(r)/I0,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Lo=function(t,e,n,s){t.sort(e);const i=function(c,l){const u=l-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new Ue(f,h.node,Ue.BLACK,null,null);{const p=parseInt(u/2,10)+c,_=i(c,p),T=i(p+1,l);return h=t[p],f=n?n(h):h,new Ue(f,h.node,Ue.BLACK,_,T)}},r=function(c){let l=null,u=null,h=t.length;const f=function(_,T){const O=h-_,D=h;h-=_;const C=i(O+1,D),v=t[O],m=n?n(v):v;p(new Ue(m,v.node,T,null,C))},p=function(_){l?(l.left=_,l=_):(u=_,l=_)};for(let _=0;_<c.count;++_){const T=c.nextBitIsOne(),O=Math.pow(2,c.count-(_+1));T?f(O,Ue.BLACK):(f(O,Ue.BLACK),f(O,Ue.RED))}return u},o=new S0(t.length),a=r(o);return new nt(s||e,a)};/**
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
 */let Qa;const Ts={};class Gt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return M(Ts&&Re,"ChildrenNode.ts has not been loaded"),Qa=Qa||new Gt({".priority":Ts},{".priority":Re}),Qa}get(e){const n=zs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof nt?n:null}hasIndex(e){return Ht(this.indexSet_,e.toString())}addIndex(e,n){M(e!==Us,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(oe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Lo(s,e.getCompare()):a=Ts;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Gt(u,l)}addToIndexes(e,n){const s=To(this.indexes_,(i,r)=>{const o=zs(this.indexSet_,r);if(M(o,"Missing index implementation for "+r),i===Ts)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(oe.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Lo(a,o.getCompare())}else return Ts;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new oe(e.name,a))),c.insert(e,e.node)}});return new Gt(s,this.indexSet_)}removeFromIndexes(e,n){const s=To(this.indexes_,i=>{if(i===Ts)return i;{const r=n.get(e.name);return r?i.remove(new oe(e.name,r)):i}});return new Gt(s,this.indexSet_)}}/**
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
 */let _i;class X{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Um(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _i||(_i=new X(new nt(lu),null,Gt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_i}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_i:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(we(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(M(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new oe(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?_i:this.priorityNode_;return new X(i,o,r)}}updateChild(e,n){const s=ie(e);if(s===null)return n;{M(ie(e)!==".priority"||Dn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(we(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Re,(o,a)=>{n[o]=a.val(e),s++,r&&X.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Fm(this.getPriority().val())+":"),this.forEachChild(Re,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":dm(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new oe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ar?-1:0}withIndex(e){if(e===Us||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Us||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Re),i=n.getIterator(Re);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Us?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class R0 extends X{constructor(){super(new nt(lu),X.EMPTY_NODE,Gt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const Ar=new R0;Object.defineProperties(oe,{MIN:{value:new oe(Ys,X.EMPTY_NODE)},MAX:{value:new oe(ls,Ar)}});Mm.__EMPTY_NODE=X.EMPTY_NODE;Fe.__childrenNodeConstructor=X;w0(Ar);C0(Ar);/**
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
 */const k0=!0;function De(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Fe(n,De(e))}if(!(t instanceof Array)&&k0){const n=[];let s=!1;if(Qe(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=De(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new oe(o,c)))}}),n.length===0)return X.EMPTY_NODE;const r=Lo(n,E0,o=>o.name,lu);if(s){const o=Lo(n,Re.getCompare());return new X(r,De(e),new Gt({".priority":o},{".priority":Re}))}else return new X(r,De(e),Gt.Default)}else{let n=X.EMPTY_NODE;return Qe(t,(s,i)=>{if(Ht(t,s)&&s.substring(0,1)!=="."){const r=De(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(De(e))}}b0(De);/**
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
 */class A0 extends va{constructor(e){super(),this.indexPath_=e,M(!re(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?_s(e.name,n.name):r}makePost(e,n){const s=De(e),i=X.EMPTY_NODE.updateChild(this.indexPath_,s);return new oe(n,i)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,Ar);return new oe(ls,e)}toString(){return or(this.indexPath_,0).join("/")}}/**
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
 */class P0 extends va{compare(e,n){const s=e.node.compareTo(n.node);return s===0?_s(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const s=De(e);return new oe(n,s)}toString(){return".value"}}const N0=new P0;/**
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
 */function $m(t){return{type:"value",snapshotNode:t}}function Qs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ar(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function cr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function O0(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class uu{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){M(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ar(n,a)):M(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Qs(n,s)):o.trackChildChange(cr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Re,(i,r)=>{n.hasChild(i)||s.trackChildChange(ar(i,r))}),n.isLeafNode()||n.forEachChild(Re,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(cr(i,r,o))}else s.trackChildChange(Qs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class lr{constructor(e){this.indexedFilter_=new uu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=lr.getStartPost_(e),this.endPost_=lr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new oe(n,s))||(s=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=X.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(X.EMPTY_NODE);const r=this;return n.forEachChild(Re,(o,a)=>{r.matches(new oe(o,a))||(i=i.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class x0{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new lr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new oe(n,s))||(s=X.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=X.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(X.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,p)=>h(p,f)}else o=this.index_.getCompare();const a=e;M(a.numChildren()===this.limit_,"");const c=new oe(n,s),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,l,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,c);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(cr(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ar(n,h));const T=a.updateImmediateChild(n,X.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Qs(f.name,f.node)),T.updateImmediateChild(f.name,f.node)):T}}else return s.isEmpty()?e:u&&o(l,c)>=0?(r!=null&&(r.trackChildChange(ar(l.name,l.node)),r.trackChildChange(Qs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(l.name,X.EMPTY_NODE)):e}}/**
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
 */class hu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ys}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ls}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Re}copy(){const e=new hu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function D0(t){return t.loadsAllData()?new uu(t.getIndex()):t.hasLimit()?new x0(t):new lr(t)}function Rf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Re?n="$priority":t.index_===N0?n="$value":t.index_===Us?n="$key":(M(t.index_ instanceof A0,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=He(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=He(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+He(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=He(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+He(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function kf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Re&&(e.i=t.index_.toString()),e}/**
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
 */class Mo extends Om{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=kr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Mo.getListenId_(e,s),a={};this.listens_[o]=a;const c=Rf(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,s),zs(this.listens_,o)===a){let f;l?l===401?f="permission_denied":f="rest_error:"+l:f="ok",i(f,null)}})}unlisten(e,n){const s=Mo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Rf(e._queryParams),s=e._path.toString(),i=new qt;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+oi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=tr(a.responseText)}catch{it("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&it("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class L0{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Fo(){return{value:null,children:new Map}}function li(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ie(e);t.children.has(s)||t.children.set(s,Fo());const i=t.children.get(s);e=we(e),li(i,e,n)}}function Uc(t,e){if(re(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Re,(s,i)=>{li(t,new me(s),i)}),Uc(t,e)}}else if(t.children.size>0){const n=ie(e);return e=we(e),t.children.has(n)&&Uc(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Bc(t,e,n){t.value!==null?n(e,t.value):M0(t,(s,i)=>{const r=new me(e.toString()+"/"+s);Bc(i,r,n)})}function M0(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class F0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Qe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Af=10*1e3,U0=30*1e3,B0=5*60*1e3;class H0{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new F0(e);const s=Af+(U0-Af)*Math.random();Fi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Qe(e,(i,r)=>{r>0&&Ht(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Fi(this.reportStats_.bind(this),Math.floor(Math.random()*2*B0))}}/**
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
 */var It;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(It||(It={}));function Vm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function du(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Uo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=It.ACK_USER_WRITE,this.source=Vm()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new me(e));return new Uo(he(),n,this.revert)}}else return M(ie(this.path)===e,"operationForChild called for unrelated child."),new Uo(we(this.path),this.affectedTree,this.revert)}}/**
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
 */class ur{constructor(e,n){this.source=e,this.path=n,this.type=It.LISTEN_COMPLETE}operationForChild(e){return re(this.path)?new ur(this.source,he()):new ur(this.source,we(this.path))}}/**
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
 */class us{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=It.OVERWRITE}operationForChild(e){return re(this.path)?new us(this.source,he(),this.snap.getImmediateChild(e)):new us(this.source,we(this.path),this.snap)}}/**
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
 */class hr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=It.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new me(e));return n.isEmpty()?null:n.value?new us(this.source,he(),n.value):new hr(this.source,he(),n)}else return M(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hr(this.source,we(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class hs{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class $0{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function V0(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(O0(o.childName,o.snapshotNode))}),yi(t,i,"child_removed",e,s,n),yi(t,i,"child_added",e,s,n),yi(t,i,"child_moved",r,s,n),yi(t,i,"child_changed",e,s,n),yi(t,i,"value",e,s,n),i}function yi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>j0(t,a,c)),o.forEach(a=>{const c=W0(t,a,r);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function W0(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function j0(t,e,n){if(e.childName==null||n.childName==null)throw ri("Should only compare child_ events.");const s=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Ea(t,e){return{eventCache:t,serverCache:e}}function Ui(t,e,n,s){return Ea(new hs(e,n,s),t.serverCache)}function Wm(t,e,n,s){return Ea(t.eventCache,new hs(e,n,s))}function Hc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function fs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ja;const q0=()=>(Ja||(Ja=new nt(AI)),Ja);class Ce{constructor(e,n=q0()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return Qe(e,(s,i)=>{n=n.set(new me(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(re(e))return null;{const s=ie(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(we(e),n);return r!=null?{path:Pe(new me(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=ie(e),s=this.children.get(n);return s!==null?s.subtree(we(e)):new Ce(null)}}set(e,n){if(re(e))return new Ce(n,this.children);{const s=ie(e),r=(this.children.get(s)||new Ce(null)).set(we(e),n),o=this.children.insert(s,r);return new Ce(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=ie(e),s=this.children.get(n);if(s){const i=s.remove(we(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ce(null):new Ce(this.value,r)}else return this}}get(e){if(re(e))return this.value;{const n=ie(e),s=this.children.get(n);return s?s.get(we(e)):null}}setTree(e,n){if(re(e))return n;{const s=ie(e),r=(this.children.get(s)||new Ce(null)).setTree(we(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ce(this.value,o)}}fold(e){return this.fold_(he(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Pe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,he(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(re(e))return null;{const r=ie(e),o=this.children.get(r);return o?o.findOnPath_(we(e),Pe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,he(),n)}foreachOnPath_(e,n,s){if(re(e))return this;{this.value&&s(n,this.value);const i=ie(e),r=this.children.get(i);return r?r.foreachOnPath_(we(e),Pe(n,i),s):new Ce(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Rt{constructor(e){this.writeTree_=e}static empty(){return new Rt(new Ce(null))}}function Bi(t,e,n){if(re(e))return new Rt(new Ce(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=tt(i,e);return r=r.updateChild(o,n),new Rt(t.writeTree_.set(i,r))}else{const i=new Ce(n),r=t.writeTree_.setTree(e,i);return new Rt(r)}}}function Pf(t,e,n){let s=t;return Qe(n,(i,r)=>{s=Bi(s,Pe(e,i),r)}),s}function Nf(t,e){if(re(e))return Rt.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new Rt(n)}}function $c(t,e){return ys(t,e)!=null}function ys(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(tt(n.path,e)):null}function Of(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Re,(s,i)=>{e.push(new oe(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new oe(s,i.value))}),e}function Rn(t,e){if(re(e))return t;{const n=ys(t,e);return n!=null?new Rt(new Ce(n)):new Rt(t.writeTree_.subtree(e))}}function Vc(t){return t.writeTree_.isEmpty()}function Js(t,e){return jm(he(),t.writeTree_,e)}function jm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(M(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=jm(Pe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Pe(t,".priority"),s)),n}}/**
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
 */function pu(t,e){return Gm(e,t)}function z0(t,e,n,s,i){M(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Bi(t.visibleWrites,e,n)),t.lastWriteId=s}function K0(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function G0(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);M(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Y0(a,s.path)?i=!1:gt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Q0(t),!0;if(s.snap)t.visibleWrites=Nf(t.visibleWrites,s.path);else{const a=s.children;Qe(a,c=>{t.visibleWrites=Nf(t.visibleWrites,Pe(s.path,c))})}return!0}else return!1}function Y0(t,e){if(t.snap)return gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gt(Pe(t.path,n),e))return!0;return!1}function Q0(t){t.visibleWrites=qm(t.allWrites,J0,he()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function J0(t){return t.visible}function qm(t,e,n){let s=Rt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)gt(n,o)?(a=tt(n,o),s=Bi(s,a,r.snap)):gt(o,n)&&(a=tt(o,n),s=Bi(s,he(),r.snap.getChild(a)));else if(r.children){if(gt(n,o))a=tt(n,o),s=Pf(s,a,r.children);else if(gt(o,n))if(a=tt(o,n),re(a))s=Pf(s,he(),r.children);else{const c=zs(r.children,ie(a));if(c){const l=c.getChild(we(a));s=Bi(s,he(),l)}}}else throw ri("WriteRecord should have .snap or .children")}}return s}function zm(t,e,n,s,i){if(!s&&!i){const r=ys(t.visibleWrites,e);if(r!=null)return r;{const o=Rn(t.visibleWrites,e);if(Vc(o))return n;if(n==null&&!$c(o,he()))return null;{const a=n||X.EMPTY_NODE;return Js(o,a)}}}else{const r=Rn(t.visibleWrites,e);if(!i&&Vc(r))return n;if(!i&&n==null&&!$c(r,he()))return null;{const o=function(l){return(l.visible||i)&&(!s||!~s.indexOf(l.writeId))&&(gt(l.path,e)||gt(e,l.path))},a=qm(t.allWrites,o,e),c=n||X.EMPTY_NODE;return Js(a,c)}}}function X0(t,e,n){let s=X.EMPTY_NODE;const i=ys(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Re,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Rn(t.visibleWrites,e);return n.forEachChild(Re,(o,a)=>{const c=Js(Rn(r,new me(o)),a);s=s.updateImmediateChild(o,c)}),Of(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Rn(t.visibleWrites,e);return Of(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Z0(t,e,n,s,i){M(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Pe(e,n);if($c(t.visibleWrites,r))return null;{const o=Rn(t.visibleWrites,r);return Vc(o)?i.getChild(n):Js(o,i.getChild(n))}}function eS(t,e,n,s){const i=Pe(e,n),r=ys(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Rn(t.visibleWrites,i);return Js(o,s.getNode().getImmediateChild(n))}else return null}function tS(t,e){return ys(t.visibleWrites,e)}function nS(t,e,n,s,i,r,o){let a;const c=Rn(t.visibleWrites,e),l=ys(c,he());if(l!=null)a=l;else if(n!=null)a=Js(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function sS(){return{visibleWrites:Rt.empty(),allWrites:[],lastWriteId:-1}}function Bo(t,e,n,s){return zm(t.writeTree,t.treePath,e,n,s)}function gu(t,e){return X0(t.writeTree,t.treePath,e)}function xf(t,e,n,s){return Z0(t.writeTree,t.treePath,e,n,s)}function Ho(t,e){return tS(t.writeTree,Pe(t.treePath,e))}function iS(t,e,n,s,i,r){return nS(t.writeTree,t.treePath,e,n,s,i,r)}function mu(t,e,n){return eS(t.writeTree,t.treePath,e,n)}function Km(t,e){return Gm(Pe(t.treePath,e),t.writeTree)}function Gm(t,e){return{treePath:t,writeTree:e}}/**
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
 */class rS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;M(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),M(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,cr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ar(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Qs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,cr(s,e.snapshotNode,i.oldSnap));else throw ri("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class oS{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ym=new oS;class _u{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new hs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return mu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:fs(this.viewCache_),r=iS(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function aS(t){return{filter:t}}function cS(t,e){M(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function lS(t,e,n,s,i){const r=new rS;let o,a;if(n.type===It.OVERWRITE){const l=n;l.source.fromUser?o=Wc(t,e,l.path,l.snap,s,i,r):(M(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!re(l.path),o=$o(t,e,l.path,l.snap,s,i,a,r))}else if(n.type===It.MERGE){const l=n;l.source.fromUser?o=hS(t,e,l.path,l.children,s,i,r):(M(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=jc(t,e,l.path,l.children,s,i,a,r))}else if(n.type===It.ACK_USER_WRITE){const l=n;l.revert?o=pS(t,e,l.path,s,i,r):o=fS(t,e,l.path,l.affectedTree,s,i,r)}else if(n.type===It.LISTEN_COMPLETE)o=dS(t,e,n.path,s,r);else throw ri("Unknown operation type: "+n.type);const c=r.getChanges();return uS(e,o,c),{viewCache:o,changes:c}}function uS(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Hc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push($m(Hc(e)))}}function Qm(t,e,n,s,i,r){const o=e.eventCache;if(Ho(s,n)!=null)return e;{let a,c;if(re(n))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=fs(e),u=l instanceof X?l:X.EMPTY_NODE,h=gu(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Bo(s,fs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=ie(n);if(l===".priority"){M(Dn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=xf(s,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=we(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const f=xf(s,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(l).updateChild(u,f):h=o.getNode().getImmediateChild(l)}else h=mu(s,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,r):a=o.getNode()}}return Ui(e,a,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function $o(t,e,n,s,i,r,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(re(n))l=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(n,s);l=u.updateFullNode(c.getNode(),p,null)}else{const p=ie(n);if(!c.isCompleteForPath(n)&&Dn(n)>1)return e;const _=we(n),O=c.getNode().getImmediateChild(p).updateChild(_,s);p===".priority"?l=u.updatePriority(c.getNode(),O):l=u.updateChild(c.getNode(),p,O,_,Ym,null)}const h=Wm(e,l,c.isFullyInitialized()||re(n),u.filtersNodes()),f=new _u(i,h,r);return Qm(t,h,n,i,f,a)}function Wc(t,e,n,s,i,r,o){const a=e.eventCache;let c,l;const u=new _u(i,e,r);if(re(n))l=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Ui(e,l,!0,t.filter.filtersNodes());else{const h=ie(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),s),c=Ui(e,l,a.isFullyInitialized(),a.isFiltered());else{const f=we(n),p=a.getNode().getImmediateChild(h);let _;if(re(f))_=s;else{const T=u.getCompleteChild(h);T!=null?ou(f)===".priority"&&T.getChild(Dm(f)).isEmpty()?_=T:_=T.updateChild(f,s):_=X.EMPTY_NODE}if(p.equals(_))c=e;else{const T=t.filter.updateChild(a.getNode(),h,_,f,u,o);c=Ui(e,T,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Df(t,e){return t.eventCache.isCompleteForChild(e)}function hS(t,e,n,s,i,r,o){let a=e;return s.foreach((c,l)=>{const u=Pe(n,c);Df(e,ie(u))&&(a=Wc(t,a,u,l,i,r,o))}),s.foreach((c,l)=>{const u=Pe(n,c);Df(e,ie(u))||(a=Wc(t,a,u,l,i,r,o))}),a}function Lf(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function jc(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;re(n)?l=s:l=new Ce(null).setTree(n,s);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),_=Lf(t,p,f);c=$o(t,c,new me(h),_,i,r,o,a)}}),l.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!p){const _=e.serverCache.getNode().getImmediateChild(h),T=Lf(t,_,f);c=$o(t,c,new me(h),T,i,r,o,a)}}),c}function fS(t,e,n,s,i,r,o){if(Ho(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(re(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return $o(t,e,n,c.getNode().getChild(n),i,r,a,o);if(re(n)){let l=new Ce(null);return c.getNode().forEachChild(Us,(u,h)=>{l=l.set(new me(u),h)}),jc(t,e,n,l,i,r,a,o)}else return e}else{let l=new Ce(null);return s.foreach((u,h)=>{const f=Pe(n,u);c.isCompleteForPath(f)&&(l=l.set(u,c.getNode().getChild(f)))}),jc(t,e,n,l,i,r,a,o)}}function dS(t,e,n,s,i){const r=e.serverCache,o=Wm(e,r.getNode(),r.isFullyInitialized()||re(n),r.isFiltered());return Qm(t,o,n,s,Ym,i)}function pS(t,e,n,s,i,r){let o;if(Ho(s,n)!=null)return e;{const a=new _u(s,e,i),c=e.eventCache.getNode();let l;if(re(n)||ie(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Bo(s,fs(e));else{const h=e.serverCache.getNode();M(h instanceof X,"serverChildren would be complete if leaf node"),u=gu(s,h)}u=u,l=t.filter.updateFullNode(c,u,r)}else{const u=ie(n);let h=mu(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,we(n),a,r):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,X.EMPTY_NODE,we(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Bo(s,fs(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Ho(s,he())!=null,Ui(e,l,o,t.filter.filtersNodes())}}/**
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
 */class gS{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new uu(s.getIndex()),r=D0(s);this.processor_=aS(r);const o=n.serverCache,a=n.eventCache,c=i.updateFullNode(X.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(X.EMPTY_NODE,a.getNode(),null),u=new hs(c,o.isFullyInitialized(),i.filtersNodes()),h=new hs(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ea(h,u),this.eventGenerator_=new $0(this.query_)}get query(){return this.query_}}function mS(t){return t.viewCache_.serverCache.getNode()}function _S(t,e){const n=fs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function Mf(t){return t.eventRegistrations_.length===0}function yS(t,e){t.eventRegistrations_.push(e)}function Ff(t,e,n){const s=[];if(n){M(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Uf(t,e,n,s){e.type===It.MERGE&&e.source.queryId!==null&&(M(fs(t.viewCache_),"We should always have a full cache before handling merges"),M(Hc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=lS(t.processor_,i,e,n,s);return cS(t.processor_,r.viewCache),M(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Jm(t,r.changes,r.viewCache.eventCache.getNode(),null)}function vS(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Re,(r,o)=>{s.push(Qs(r,o))}),n.isFullyInitialized()&&s.push($m(n.getNode())),Jm(t,s,n.getNode(),e)}function Jm(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return V0(t.eventGenerator_,e,n,i)}/**
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
 */let Vo;class ES{constructor(){this.views=new Map}}function wS(t){M(!Vo,"__referenceConstructor has already been defined"),Vo=t}function bS(){return M(Vo,"Reference.ts has not been loaded"),Vo}function CS(t){return t.views.size===0}function yu(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return M(r!=null,"SyncTree gave us an op for an invalid query."),Uf(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Uf(o,e,n,s));return r}}function TS(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Bo(n,i?s:null),c=!1;a?c=!0:s instanceof X?(a=gu(n,s),c=!1):(a=X.EMPTY_NODE,c=!1);const l=Ea(new hs(a,c,!1),new hs(s,i,!1));return new gS(e,l)}return o}function IS(t,e,n,s,i,r){const o=TS(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),yS(o,n),vS(o,n)}function SS(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Ln(t);if(i==="default")for(const[c,l]of t.views.entries())o=o.concat(Ff(l,n,s)),Mf(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=t.views.get(i);c&&(o=o.concat(Ff(c,n,s)),Mf(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Ln(t)&&r.push(new(bS())(e._repo,e._path)),{removed:r,events:o}}function Xm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Bs(t,e){let n=null;for(const s of t.views.values())n=n||_S(s,e);return n}function Zm(t,e){if(e._queryParams.loadsAllData())return wa(t);{const s=e._queryIdentifier;return t.views.get(s)}}function e_(t,e){return Zm(t,e)!=null}function Ln(t){return wa(t)!=null}function wa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Wo;function RS(t){M(!Wo,"__referenceConstructor has already been defined"),Wo=t}function kS(){return M(Wo,"Reference.ts has not been loaded"),Wo}let AS=1;class Bf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=sS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function t_(t,e,n,s,i){return z0(t.pendingWriteTree_,e,n,s,i),i?Pr(t,new us(Vm(),e,n)):[]}function Gn(t,e,n=!1){const s=K0(t.pendingWriteTree_,e);if(G0(t.pendingWriteTree_,e)){let r=new Ce(null);return s.snap!=null?r=r.set(he(),!0):Qe(s.children,o=>{r=r.set(new me(o),!0)}),Pr(t,new Uo(s.path,r,n))}else return[]}function ba(t,e,n){return Pr(t,new us(fu(),e,n))}function PS(t,e,n){const s=Ce.fromObject(n);return Pr(t,new hr(fu(),e,s))}function NS(t,e){return Pr(t,new ur(fu(),e))}function OS(t,e,n){const s=Eu(t,n);if(s){const i=wu(s),r=i.path,o=i.queryId,a=tt(r,e),c=new ur(du(o),a);return bu(t,r,c)}else return[]}function qc(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||e_(o,e))){const c=SS(o,e,n,s);CS(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!i){const u=l.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,p)=>Ln(p));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=LS(f);for(let _=0;_<p.length;++_){const T=p[_],O=T.query,D=i_(t,T);t.listenProvider_.startListening(Hi(O),jo(t,O),D.hashFn,D.onComplete)}}}!h&&l.length>0&&!s&&(u?t.listenProvider_.stopListening(Hi(e),null):l.forEach(f=>{const p=t.queryToTagMap.get(Ca(f));t.listenProvider_.stopListening(Hi(f),p)}))}MS(t,l)}return a}function xS(t,e,n,s){const i=Eu(t,s);if(i!=null){const r=wu(i),o=r.path,a=r.queryId,c=tt(o,e),l=new us(du(a),c,n);return bu(t,o,l)}else return[]}function DS(t,e,n,s){const i=Eu(t,s);if(i){const r=wu(i),o=r.path,a=r.queryId,c=tt(o,e),l=Ce.fromObject(n),u=new hr(du(a),c,l);return bu(t,o,u)}else return[]}function Hf(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const _=tt(f,i);r=r||Bs(p,_),o=o||Ln(p)});let a=t.syncPointTree_.get(i);a?(o=o||Ln(a),r=r||Bs(a,he())):(a=new ES,t.syncPointTree_=t.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=X.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,_)=>{const T=Bs(_,he());T&&(r=r.updateImmediateChild(p,T))}));const l=e_(a,e);if(!l&&!e._queryParams.loadsAllData()){const f=Ca(e);M(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=FS();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=pu(t.pendingWriteTree_,i);let h=IS(a,e,n,u,r,c);if(!l&&!o&&!s){const f=Zm(a,e);h=h.concat(US(t,e,f))}return h}function vu(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=tt(o,e),l=Bs(a,c);if(l)return l});return zm(i,e,r,n,!0)}function Pr(t,e){return n_(e,t.syncPointTree_,null,pu(t.pendingWriteTree_,he()))}function n_(t,e,n,s){if(re(t.path))return s_(t,e,n,s);{const i=e.get(he());n==null&&i!=null&&(n=Bs(i,he()));let r=[];const o=ie(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=Km(s,o);r=r.concat(n_(a,c,l,u))}return i&&(r=r.concat(yu(i,t,s,n))),r}}function s_(t,e,n,s){const i=e.get(he());n==null&&i!=null&&(n=Bs(i,he()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=Km(s,o),u=t.operationForChild(o);u&&(r=r.concat(s_(u,a,c,l)))}),i&&(r=r.concat(yu(i,t,s,n))),r}function i_(t,e){const n=e.query,s=jo(t,n);return{hashFn:()=>(mS(e)||X.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?OS(t,n._path,s):NS(t,n._path);{const r=OI(i,n);return qc(t,n,null,r)}}}}function jo(t,e){const n=Ca(e);return t.queryToTagMap.get(n)}function Ca(t){return t._path.toString()+"$"+t._queryIdentifier}function Eu(t,e){return t.tagToQueryMap.get(e)}function wu(t){const e=t.indexOf("$");return M(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new me(t.substr(0,e))}}function bu(t,e,n){const s=t.syncPointTree_.get(e);M(s,"Missing sync point for query tag that we're tracking");const i=pu(t.pendingWriteTree_,e);return yu(s,n,i,null)}function LS(t){return t.fold((e,n,s)=>{if(n&&Ln(n))return[wa(n)];{let i=[];return n&&(i=Xm(n)),Qe(s,(r,o)=>{i=i.concat(o)}),i}})}function Hi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(kS())(t._repo,t._path):t}function MS(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ca(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function FS(){return AS++}function US(t,e,n){const s=e._path,i=jo(t,e),r=i_(t,n),o=t.listenProvider_.startListening(Hi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)M(!Ln(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,h)=>{if(!re(l)&&u&&Ln(u))return[wa(u).query];{let f=[];return u&&(f=f.concat(Xm(u).map(p=>p.query))),Qe(h,(p,_)=>{f=f.concat(_)}),f}});for(let l=0;l<c.length;++l){const u=c[l];t.listenProvider_.stopListening(Hi(u),jo(t,u))}}return o}/**
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
 */class Cu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Cu(n)}node(){return this.node_}}class Tu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Pe(this.path_,e);return new Tu(this.syncTree_,n)}node(){return vu(this.syncTree_,this.path_)}}const BS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},$f=function(t,e,n){if(!t||typeof t!="object")return t;if(M(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return HS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $S(t[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},HS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:M(!1,"Unexpected server value: "+t)}},$S=function(t,e,n){t.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&M(!1,"Unexpected increment value: "+s);const i=e.node();if(M(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},VS=function(t,e,n,s){return Iu(e,new Tu(n,t),s)},r_=function(t,e,n){return Iu(t,new Cu(e),n)};function Iu(t,e,n){const s=t.getPriority().val(),i=$f(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=$f(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Fe(a,De(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Fe(i))),o.forEachChild(Re,(a,c)=>{const l=Iu(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class Su{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ru(t,e){let n=e instanceof me?e:new me(e),s=t,i=ie(n);for(;i!==null;){const r=zs(s.node.children,i)||{children:{},childCount:0};s=new Su(i,s,r),n=we(n),i=ie(n)}return s}function ui(t){return t.node.value}function o_(t,e){t.node.value=e,zc(t)}function a_(t){return t.node.childCount>0}function WS(t){return ui(t)===void 0&&!a_(t)}function Ta(t,e){Qe(t.node.children,(n,s)=>{e(new Su(n,t,s))})}function c_(t,e,n,s){n&&!s&&e(t),Ta(t,i=>{c_(i,e,!0,s)}),n&&s&&e(t)}function jS(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Nr(t){return new me(t.parent===null?t.name:Nr(t.parent)+"/"+t.name)}function zc(t){t.parent!==null&&qS(t.parent,t.name,t)}function qS(t,e,n){const s=WS(n),i=Ht(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,zc(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,zc(t))}/**
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
 */const zS=/[\[\].#$\/\u0000-\u001F\u007F]/,KS=/[\[\].#$\u0000-\u001F\u007F]/,Xa=10*1024*1024,ku=function(t){return typeof t=="string"&&t.length!==0&&!zS.test(t)},l_=function(t){return typeof t=="string"&&t.length!==0&&!KS.test(t)},GS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),l_(t)},u_=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ya(t)||t&&typeof t=="object"&&Ht(t,".sv")},Kc=function(t,e,n,s){s&&e===void 0||Ia(Ks(t,"value"),e,n)},Ia=function(t,e,n){const s=n instanceof me?new f0(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Vn(s)+" with contents = "+e.toString());if(ya(e))throw new Error(t+"contains "+e.toString()+" "+Vn(s));if(typeof e=="string"&&e.length>Xa/3&&pa(e)>Xa)throw new Error(t+"contains a string greater than "+Xa+" utf8 bytes "+Vn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Qe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ku(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);d0(s,o),Ia(t,a,s),p0(s)}),i&&r)throw new Error(t+' contains ".value" child '+Vn(s)+" in addition to actual children.")}},YS=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=or(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!ku(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(h0);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&gt(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},QS=function(t,e,n,s){if(s&&e===void 0)return;const i=Ks(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Qe(e,(o,a)=>{const c=new me(o);if(Ia(i,a,Pe(n,c)),ou(c)===".priority"&&!u_(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),YS(i,r)},JS=function(t,e,n){if(!(n&&e===void 0)){if(ya(e))throw new Error(Ks(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!u_(e))throw new Error(Ks(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},h_=function(t,e,n,s){if(!(s&&n===void 0)&&!l_(n))throw new Error(Ks(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},XS=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),h_(t,e,n,s)},Si=function(t,e){if(ie(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ZS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ku(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!GS(n))throw new Error(Ks(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class eR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Au(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!au(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function f_(t,e,n){Au(t,n),d_(t,s=>au(s,e))}function tn(t,e,n){Au(t,n),d_(t,s=>gt(s,e)||gt(e,s))}function d_(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(tR(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Zn&&je("event: "+n.toString()),ci(s)}}}/**
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
 */const nR="repo_interrupt",sR=25;class iR{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fo(),this.transactionQueueTree_=new Su,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rR(t,e,n){if(t.stats_=iu(t.repoInfo_),t.forceRestClient_||MI())t.server_=new Mo(t.repoInfo_,(s,i,r,o)=>{Vf(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Wf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{He(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Xt(t.repoInfo_,e,(s,i,r,o)=>{Vf(t,s,i,r,o)},s=>{Wf(t,s)},s=>{aR(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=$I(t.repoInfo_,()=>new H0(t.stats_,t.server_)),t.infoData_=new L0,t.infoSyncTree_=new Bf({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=ba(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Nu(t,"connected",!1),t.serverSyncTree_=new Bf({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const l=o(a,c);tn(t.eventQueue_,s._path,l)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function oR(t){const n=t.infoData_.getNode(new me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Pu(t){return BS({timestamp:oR(t)})}function Vf(t,e,n,s,i){t.dataUpdateCount++;const r=new me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=To(n,l=>De(l));o=DS(t.serverSyncTree_,r,c,i)}else{const c=De(n);o=xS(t.serverSyncTree_,r,c,i)}else if(s){const c=To(n,l=>De(l));o=PS(t.serverSyncTree_,r,c)}else{const c=De(n);o=ba(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Sa(t,r)),tn(t.eventQueue_,a,o)}function Wf(t,e){Nu(t,"connected",e),e===!1&&lR(t)}function aR(t,e){Qe(e,(n,s)=>{Nu(t,n,s)})}function Nu(t,e,n){const s=new me("/.info/"+e),i=De(n);t.infoData_.updateSnapshot(s,i);const r=ba(t.infoSyncTree_,s,i);tn(t.eventQueue_,s,r)}function p_(t){return t.nextWriteId_++}function cR(t,e,n,s,i){Ou(t,"set",{path:e.toString(),value:n,priority:s});const r=Pu(t),o=De(n,s),a=vu(t.serverSyncTree_,e),c=r_(o,a,r),l=p_(t),u=t_(t.serverSyncTree_,e,c,l,!0);Au(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const _=f==="ok";_||it("set at "+e+" failed: "+f);const T=Gn(t.serverSyncTree_,l,!_);tn(t.eventQueue_,e,T),Xs(t,i,f,p)});const h=v_(t,e);Sa(t,h),tn(t.eventQueue_,h,[])}function lR(t){Ou(t,"onDisconnectEvents");const e=Pu(t),n=Fo();Bc(t.onDisconnect_,he(),(i,r)=>{const o=VS(i,r,t.serverSyncTree_,e);li(n,i,o)});let s=[];Bc(n,he(),(i,r)=>{s=s.concat(ba(t.serverSyncTree_,i,r));const o=v_(t,i);Sa(t,o)}),t.onDisconnect_=Fo(),tn(t.eventQueue_,he(),s)}function uR(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Uc(t.onDisconnect_,e),Xs(t,n,s,i)})}function jf(t,e,n,s){const i=De(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&li(t.onDisconnect_,e,i),Xs(t,s,r,o)})}function hR(t,e,n,s,i){const r=De(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&li(t.onDisconnect_,e,r),Xs(t,i,o,a)})}function fR(t,e,n,s){if(Co(n)){je("onDisconnect().update() called with empty data.  Don't do anything."),Xs(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&Qe(n,(o,a)=>{const c=De(a);li(t.onDisconnect_,Pe(e,o),c)}),Xs(t,s,i,r)})}function dR(t,e,n){let s;ie(e._path)===".info"?s=Hf(t.infoSyncTree_,e,n):s=Hf(t.serverSyncTree_,e,n),f_(t.eventQueue_,e._path,s)}function qf(t,e,n){let s;ie(e._path)===".info"?s=qc(t.infoSyncTree_,e,n):s=qc(t.serverSyncTree_,e,n),f_(t.eventQueue_,e._path,s)}function pR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(nR)}function Ou(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),je(n,...e)}function Xs(t,e,n,s){e&&ci(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function g_(t,e,n){return vu(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function xu(t,e=t.transactionQueueTree_){if(e||Ra(t,e),ui(e)){const n=__(t,e);M(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&gR(t,Nr(e),n)}else a_(e)&&Ta(e,n=>{xu(t,n)})}function gR(t,e,n){const s=n.map(l=>l.currentWriteId),i=g_(t,e,s);let r=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];M(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=tt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{Ou(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Gn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ra(t,Ru(t.transactionQueueTree_,e)),xu(t,t.transactionQueueTree_),tn(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)ci(h[f])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{it("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}Sa(t,e)}},o)}function Sa(t,e){const n=m_(t,e),s=Nr(n),i=__(t,n);return mR(t,i,s),s}function mR(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=tt(n,c.path);let u=!1,h;if(M(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Gn(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=sR)u=!0,h="maxretry",i=i.concat(Gn(t.serverSyncTree_,c.currentWriteId,!0));else{const f=g_(t,c.path,o);c.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Ia("transaction failed: Data returned ",p,c.path);let _=De(p);typeof p=="object"&&p!=null&&Ht(p,".priority")||(_=_.updatePriority(f.getPriority()));const O=c.currentWriteId,D=Pu(t),C=r_(_,f,D);c.currentOutputSnapshotRaw=_,c.currentOutputSnapshotResolved=C,c.currentWriteId=p_(t),o.splice(o.indexOf(O),1),i=i.concat(t_(t.serverSyncTree_,c.path,C,c.currentWriteId,c.applyLocally)),i=i.concat(Gn(t.serverSyncTree_,O,!0))}else u=!0,h="nodata",i=i.concat(Gn(t.serverSyncTree_,c.currentWriteId,!0))}tn(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ra(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ci(s[a]);xu(t,t.transactionQueueTree_)}function m_(t,e){let n,s=t.transactionQueueTree_;for(n=ie(e);n!==null&&ui(s)===void 0;)s=Ru(s,n),e=we(e),n=ie(e);return s}function __(t,e){const n=[];return y_(t,e,n),n.sort((s,i)=>s.order-i.order),n}function y_(t,e,n){const s=ui(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ta(e,i=>{y_(t,i,n)})}function Ra(t,e){const n=ui(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,o_(e,n.length>0?n:void 0)}Ta(e,s=>{Ra(t,s)})}function v_(t,e){const n=Nr(m_(t,e)),s=Ru(t.transactionQueueTree_,e);return jS(s,i=>{Za(t,i)}),Za(t,s),c_(s,i=>{Za(t,i)}),n}function Za(t,e){const n=ui(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(M(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(M(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Gn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?o_(e,void 0):n.length=r+1,tn(t.eventQueue_,Nr(e),i);for(let o=0;o<s.length;o++)ci(s[o])}}/**
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
 */function _R(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function yR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):it(`Invalid query segment '${n}' in query '${t}'`)}return e}const zf=function(t,e){const n=vR(t),s=n.namespace;n.domain==="firebase.com"&&en(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&en("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||RI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Im(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new me(n.pathString)}},vR=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=_R(t.substring(u,h)));const f=yR(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const p=e.slice(0,l);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class E_{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+He(this.snapshot.exportVal())}}class w_{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ER{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return M(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class wR{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new qt;return uR(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Si("OnDisconnect.remove",this._path);const e=new qt;return jf(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Si("OnDisconnect.set",this._path),Kc("OnDisconnect.set",e,this._path,!1);const n=new qt;return jf(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Si("OnDisconnect.setWithPriority",this._path),Kc("OnDisconnect.setWithPriority",e,this._path,!1),JS("OnDisconnect.setWithPriority",n,!1);const s=new qt;return hR(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){Si("OnDisconnect.update",this._path),QS("OnDisconnect.update",e,this._path,!1);const n=new qt;return fR(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Du{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return re(this._path)?null:ou(this._path)}get ref(){return new an(this._repo,this._path)}get _queryIdentifier(){const e=kf(this._queryParams),n=nu(e);return n==="{}"?"default":n}get _queryObject(){return kf(this._queryParams)}isEqual(e){if(e=Ne(e),!(e instanceof Du))return!1;const n=this._repo===e._repo,s=au(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+u0(this._path)}}class an extends Du{constructor(e,n){super(e,n,new hu,!1)}get parent(){const e=Dm(this._path);return e===null?null:new an(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class fr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new me(e),s=qo(this.ref,e);return new fr(this._node.getChild(n),s,Re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new fr(i,qo(this.ref,s),Re)))}hasChild(e){const n=new me(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Kf(t,e){return t=Ne(t),t._checkNotDeleted("ref"),e!==void 0?qo(t._root,e):t._root}function qo(t,e){return t=Ne(t),ie(t._path)===null?XS("child","path",e,!1):h_("child","path",e,!1),new an(t._repo,Pe(t._path,e))}function bR(t){return t=Ne(t),new wR(t._repo,t._path)}function CR(t,e){t=Ne(t),Si("set",t._path),Kc("set",e,t._path,!1);const n=new qt;return cR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Lu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new E_("value",this,new fr(e.snapshotNode,new an(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new w_(this,e,n):null}matches(e){return e instanceof Lu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Mu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new w_(this,e,n):null}createEvent(e,n){M(e.childName!=null,"Child events should have a childName.");const s=qo(new an(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new E_(e.type,this,new fr(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Mu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function TR(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,l=(u,h)=>{qf(t._repo,t,a),c(u,h)};l.userCallback=n.userCallback,l.context=n.context,n=l}const o=new ER(n,r||void 0),a=e==="value"?new Lu(o):new Mu(e,o);return dR(t._repo,t,a),()=>qf(t._repo,t,a)}function IR(t,e,n,s){return TR(t,"value",e,n,s)}wS(an);RS(an);/**
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
 */const SR="FIREBASE_DATABASE_EMULATOR_HOST",Gc={};let RR=!1;function kR(t,e,n,s){t.repoInfo_=new Im(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function AR(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||en("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),je("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zf(r,i),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[SR]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=zf(r,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Fs(Fs.OWNER):new UI(t.name,t.options,e);ZS("Invalid Firebase Database URL",o),re(o.path)||en("Database URL must point to the root of a Firebase Database (not including a child path).");const h=NR(a,t,u,new FI(t.name,n));return new OR(h,t)}function PR(t,e){const n=Gc[e];(!n||n[t.key]!==t)&&en(`Database ${e}(${t.repoInfo_}) has already been deleted.`),pR(t),delete n[t.key]}function NR(t,e,n,s){let i=Gc[e.name];i||(i={},Gc[e.name]=i);let r=i[t.toURLString()];return r&&en("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new iR(t,RR,n,s),i[t.toURLString()]=r,r}class OR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new an(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(PR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&en("Cannot call "+e+" on a deleted database.")}}function xR(t=Sg(),e){const n=Wl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=kw("database");s&&DR(n,...s)}return n}function DR(t,e,n,s={}){t=Ne(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&en("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&en('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Fs(Fs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Aw(s.mockUserToken,t.app.options.projectId);r=new Fs(o)}kR(i,e,n,r)}/**
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
 */function LR(t){bI(ai),Gs(new is("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return AR(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Sn(hf,ff,t),Sn(hf,ff,"esm2017")}Xt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Xt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};LR();const MR={apiKey:"AIzaSyCrQtLsUmieL3gjDRejw0L4guqSFjXxm9E",authDomain:"puzzeul.firebaseapp.com",projectId:"puzzeul",storageBucket:{}.VITE__FIREBASE_STORAGE_BUCKET,messagingSenderId:"38012960165",appId:"1:38012960165:web:32b1538670ce0cb85efc4c",databaseURL:"https://vuestock-8db09-default-rtdb.europe-west1.firebasedatabase.app"},b_=Ig(MR),Ve=wI(b_);function FR(){return new Promise((t,e)=>{const n=Zg(Ve,s=>{n(),t(s)},e)})}function UR(){const t=xR(b_);Zg(Ve,e=>{if(e){const n=Kf(t,`users/${e.uid}/status`),s=Kf(t,".info/connected");IR(s,i=>{i.val()===!0&&(CR(n,"online"),bR(n).set("offline"))})}})}function BR(t,e){fetch("https://puzzle-01s0.onrender.com/api/updateStatus",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:t,status:e})}).then(n=>n.json()).then(n=>console.log(n)).catch(n=>console.error("Erreur lors de la mise à jour du statut:",n))}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ss=typeof window<"u";function HR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function ec(t,e){const n={};for(const s in e){const i=e[s];n[s]=kt(i)?i.map(t):t(i)}return n}const $i=()=>{},kt=Array.isArray,$R=/\/$/,VR=t=>t.replace($R,"");function tc(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=zR(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function WR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Gf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function jR(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Zs(e.matched[s],n.matched[i])&&C_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function C_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!qR(t[n],e[n]))return!1;return!0}function qR(t,e){return kt(t)?Yf(t,e):kt(e)?Yf(e,t):t===e}function Yf(t,e){return kt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function zR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var dr;(function(t){t.pop="pop",t.push="push"})(dr||(dr={}));var Vi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Vi||(Vi={}));function KR(t){if(!t)if(Ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),VR(t)}const GR=/^[^#]+#/;function YR(t,e){return t.replace(GR,"#")+e}function QR(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ka=()=>({left:window.pageXOffset,top:window.pageYOffset});function JR(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=QR(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Qf(t,e){return(history.state?history.state.position-e:-1)+t}const Yc=new Map;function XR(t,e){Yc.set(t,e)}function ZR(t){const e=Yc.get(t);return Yc.delete(t),e}let ek=()=>location.protocol+"//"+location.host;function T_(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Gf(c,"")}return Gf(n,t)+s+i}function tk(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const p=T_(t,location),_=n.value,T=e.value;let O=0;if(f){if(n.value=p,e.value=f,o&&o===_){o=null;return}O=T?f.position-T.position:0}else s(p);i.forEach(D=>{D(n.value,_,{delta:O,type:dr.pop,direction:O?O>0?Vi.forward:Vi.back:Vi.unknown})})};function c(){o=n.value}function l(f){i.push(f);const p=()=>{const _=i.indexOf(f);_>-1&&i.splice(_,1)};return r.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(pe({},f.state,{scroll:ka()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Jf(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?ka():null}}function nk(t){const{history:e,location:n}=window,s={value:T_(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:ek()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),i.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=pe({},e.state,Jf(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=pe({},i.value,e.state,{forward:c,scroll:ka()});r(u.current,u,!0);const h=pe({},Jf(s.value,c,null),{position:u.position+1},l);r(c,h,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function sk(t){t=KR(t);const e=nk(t),n=tk(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=pe({location:"",base:t,go:s,createHref:YR.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function ik(t){return typeof t=="string"||t&&typeof t=="object"}function I_(t){return typeof t=="string"||typeof t=="symbol"}const dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},S_=Symbol("");var Xf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xf||(Xf={}));function ei(t,e){return pe(new Error,{type:t,[S_]:!0},e)}function $t(t,e){return t instanceof Error&&S_ in t&&(e==null||!!(t.type&e))}const Zf="[^/]+?",rk={sensitive:!1,strict:!1,start:!0,end:!0},ok=/[.+*?^${}()[\]/\\]/g;function ak(t,e){const n=pe({},rk,e),s=[];let i=n.start?"^":"";const r=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(ok,"\\$&"),p+=40;else if(f.type===1){const{value:_,repeatable:T,optional:O,regexp:D}=f;r.push({name:_,repeatable:T,optional:O});const C=D||Zf;if(C!==Zf){p+=10;try{new RegExp(`(${C})`)}catch(m){throw new Error(`Invalid custom RegExp for param "${_}" (${C}): `+m.message)}}let v=T?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(v=O&&l.length<2?`(?:/${v})`:"/"+v),O&&(v+="?"),i+=v,p+=20,O&&(p+=-8),T&&(p+=-20),C===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",_=r[f-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:T,optional:O}=p,D=_ in l?l[_]:"";if(kt(D)&&!T)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const C=kt(D)?D.join("/"):D;if(!C)if(O)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=C}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function ck(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function lk(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=ck(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(ed(s))return 1;if(ed(i))return-1}return i.length-s.length}function ed(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const uk={type:0,value:""},hk=/[a-zA-Z0-9_]/;function fk(t){if(!t)return[[]];if(t==="/")return[[uk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function h(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:hk.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function dk(t,e,n){const s=ak(fk(t.path),n),i=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function pk(t,e){const n=[],s=new Map;e=sd({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const p=!f,_=gk(u);_.aliasOf=f&&f.record;const T=sd(e,u),O=[_];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const m of v)O.push(pe({},_,{components:f?f.record.components:_.components,path:m,aliasOf:f?f.record:_}))}let D,C;for(const v of O){const{path:m}=v;if(h&&m[0]!=="/"){const S=h.record.path,F=S[S.length-1]==="/"?"":"/";v.path=h.record.path+(m&&F+m)}if(D=dk(v,h,T),f?f.alias.push(D):(C=C||D,C!==D&&C.alias.push(D),p&&u.name&&!nd(D)&&o(u.name)),_.children){const S=_.children;for(let F=0;F<S.length;F++)r(S[F],D,f&&f.children[F])}f=f||D,(D.record.components&&Object.keys(D.record.components).length||D.record.name||D.record.redirect)&&c(D)}return C?()=>{o(C)}:$i}function o(u){if(I_(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&lk(u,n[h])>=0&&(u.record.path!==n[h].record.path||!R_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!nd(u)&&s.set(u.record.name,u)}function l(u,h){let f,p={},_,T;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw ei(1,{location:u});T=f.record.name,p=pe(td(h.params,f.keys.filter(C=>!C.optional).map(C=>C.name)),u.params&&td(u.params,f.keys.map(C=>C.name))),_=f.stringify(p)}else if("path"in u)_=u.path,f=n.find(C=>C.re.test(_)),f&&(p=f.parse(_),T=f.record.name);else{if(f=h.name?s.get(h.name):n.find(C=>C.re.test(h.path)),!f)throw ei(1,{location:u,currentLocation:h});T=f.record.name,p=pe({},h.params,u.params),_=f.stringify(p)}const O=[];let D=f;for(;D;)O.unshift(D.record),D=D.parent;return{name:T,path:_,params:p,matched:O,meta:_k(O)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function td(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function gk(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:mk(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function mk(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function nd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _k(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function sd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function R_(t,e){return e.children.some(n=>n===t||R_(t,n))}const k_=/#/g,yk=/&/g,vk=/\//g,Ek=/=/g,wk=/\?/g,A_=/\+/g,bk=/%5B/g,Ck=/%5D/g,P_=/%5E/g,Tk=/%60/g,N_=/%7B/g,Ik=/%7C/g,O_=/%7D/g,Sk=/%20/g;function Fu(t){return encodeURI(""+t).replace(Ik,"|").replace(bk,"[").replace(Ck,"]")}function Rk(t){return Fu(t).replace(N_,"{").replace(O_,"}").replace(P_,"^")}function Qc(t){return Fu(t).replace(A_,"%2B").replace(Sk,"+").replace(k_,"%23").replace(yk,"%26").replace(Tk,"`").replace(N_,"{").replace(O_,"}").replace(P_,"^")}function kk(t){return Qc(t).replace(Ek,"%3D")}function Ak(t){return Fu(t).replace(k_,"%23").replace(wk,"%3F")}function Pk(t){return t==null?"":Ak(t).replace(vk,"%2F")}function zo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Nk(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(A_," "),o=r.indexOf("="),a=zo(o<0?r:r.slice(0,o)),c=o<0?null:zo(r.slice(o+1));if(a in e){let l=e[a];kt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function id(t){let e="";for(let n in t){const s=t[n];if(n=kk(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(kt(s)?s.map(r=>r&&Qc(r)):[s&&Qc(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Ok(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=kt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const xk=Symbol(""),rd=Symbol(""),Aa=Symbol(""),Uu=Symbol(""),Jc=Symbol("");function vi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function yn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ei(4,{from:n,to:e})):h instanceof Error?a(h):ik(h)?a(ei(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},l=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function nc(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Dk(a)){const l=(a.__vccOpts||a)[e];l&&i.push(yn(l,n,s,r,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=HR(l)?l.default:l;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&yn(f,n,s,r,o)()}))}}return i}function Dk(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function od(t){const e=ht(Aa),n=ht(Uu),s=lt(()=>e.resolve(Be(t.to))),i=lt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Zs.bind(null,u));if(f>-1)return f;const p=ad(c[l-2]);return l>1&&ad(u)===p&&h[h.length-1].path!==p?h.findIndex(Zs.bind(null,c[l-2])):f}),r=lt(()=>i.value>-1&&Uk(n.params,s.value.params)),o=lt(()=>i.value>-1&&i.value===n.matched.length-1&&C_(n.params,s.value.params));function a(c={}){return Fk(c)?e[Be(t.replace)?"replace":"push"](Be(t.to)).catch($i):Promise.resolve()}return{route:s,href:lt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const Lk=Er({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:od,setup(t,{slots:e}){const n=ps(od(t)),{options:s}=ht(Aa),i=lt(()=>({[cd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[cd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:ha("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Mk=Lk;function Fk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Uk(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!kt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function ad(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const cd=(t,e,n)=>t??e??n,Bk=Er({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ht(Jc),i=lt(()=>t.route||s.value),r=ht(rd,0),o=lt(()=>{let l=Be(r);const{matched:u}=i.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=lt(()=>i.value.matched[o.value]);Ni(rd,lt(()=>o.value+1)),Ni(xk,a),Ni(Jc,i);const c=ge();return Jt(()=>[c.value,a.value,t.name],([l,u,h],[f,p,_])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Zs(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return ld(n.default,{Component:f,route:l});const p=h.props[u],_=p?p===!0?l.params:typeof p=="function"?p(l):p:null,O=ha(f,pe({},_,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return ld(n.default,{Component:O,route:l})||O}}});function ld(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const x_=Bk;function Hk(t){const e=pk(t.routes,t),n=t.parseQuery||Nk,s=t.stringifyQuery||id,i=t.history,r=vi(),o=vi(),a=vi(),c=Bd(dn);let l=dn;Ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ec.bind(null,A=>""+A),h=ec.bind(null,Pk),f=ec.bind(null,zo);function p(A,j){let $,G;return I_(A)?($=e.getRecordMatcher(A),G=j):G=A,e.addRoute(G,$)}function _(A){const j=e.getRecordMatcher(A);j&&e.removeRoute(j)}function T(){return e.getRoutes().map(A=>A.record)}function O(A){return!!e.getRecordMatcher(A)}function D(A,j){if(j=pe({},j||c.value),typeof A=="string"){const E=tc(n,A,j.path),k=e.resolve({path:E.path},j),N=i.createHref(E.fullPath);return pe(E,k,{params:f(k.params),hash:zo(E.hash),redirectedFrom:void 0,href:N})}let $;if("path"in A)$=pe({},A,{path:tc(n,A.path,j.path).path});else{const E=pe({},A.params);for(const k in E)E[k]==null&&delete E[k];$=pe({},A,{params:h(E)}),j.params=h(j.params)}const G=e.resolve($,j),de=A.hash||"";G.params=u(f(G.params));const d=WR(s,pe({},A,{hash:Rk(de),path:G.path})),g=i.createHref(d);return pe({fullPath:d,hash:de,query:s===id?Ok(A.query):A.query||{}},G,{redirectedFrom:void 0,href:g})}function C(A){return typeof A=="string"?tc(n,A,c.value.path):pe({},A)}function v(A,j){if(l!==A)return ei(8,{from:j,to:A})}function m(A){return I(A)}function S(A){return m(pe(C(A),{replace:!0}))}function F(A){const j=A.matched[A.matched.length-1];if(j&&j.redirect){const{redirect:$}=j;let G=typeof $=="function"?$(A):$;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=C(G):{path:G},G.params={}),pe({query:A.query,hash:A.hash,params:"path"in G?{}:A.params},G)}}function I(A,j){const $=l=D(A),G=c.value,de=A.state,d=A.force,g=A.replace===!0,E=F($);if(E)return I(pe(C(E),{state:typeof E=="object"?pe({},de,E.state):de,force:d,replace:g}),j||$);const k=$;k.redirectedFrom=j;let N;return!d&&jR(s,G,$)&&(N=ei(16,{to:k,from:G}),Pt(G,G,!0,!1)),(N?Promise.resolve(N):w(k,G)).catch(x=>$t(x)?$t(x,2)?x:cn(x):K(x,k,G)).then(x=>{if(x){if($t(x,2))return I(pe({replace:g},C(x.to),{state:typeof x.to=="object"?pe({},de,x.to.state):de,force:d}),j||k)}else x=R(k,G,!0,g,de);return P(k,G,x),x})}function b(A,j){const $=v(A,j);return $?Promise.reject($):Promise.resolve()}function y(A){const j=Es.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(A):A()}function w(A,j){let $;const[G,de,d]=$k(A,j);$=nc(G.reverse(),"beforeRouteLeave",A,j);for(const E of G)E.leaveGuards.forEach(k=>{$.push(yn(k,A,j))});const g=b.bind(null,A,j);return $.push(g),qe($).then(()=>{$=[];for(const E of r.list())$.push(yn(E,A,j));return $.push(g),qe($)}).then(()=>{$=nc(de,"beforeRouteUpdate",A,j);for(const E of de)E.updateGuards.forEach(k=>{$.push(yn(k,A,j))});return $.push(g),qe($)}).then(()=>{$=[];for(const E of d)if(E.beforeEnter)if(kt(E.beforeEnter))for(const k of E.beforeEnter)$.push(yn(k,A,j));else $.push(yn(E.beforeEnter,A,j));return $.push(g),qe($)}).then(()=>(A.matched.forEach(E=>E.enterCallbacks={}),$=nc(d,"beforeRouteEnter",A,j),$.push(g),qe($))).then(()=>{$=[];for(const E of o.list())$.push(yn(E,A,j));return $.push(g),qe($)}).catch(E=>$t(E,8)?E:Promise.reject(E))}function P(A,j,$){a.list().forEach(G=>y(()=>G(A,j,$)))}function R(A,j,$,G,de){const d=v(A,j);if(d)return d;const g=j===dn,E=Ss?history.state:{};$&&(G||g?i.replace(A.fullPath,pe({scroll:g&&E&&E.scroll},de)):i.push(A.fullPath,de)),c.value=A,Pt(A,j,$,g),cn()}let B;function ee(){B||(B=i.listen((A,j,$)=>{if(!xr.listening)return;const G=D(A),de=F(G);if(de){I(pe(de,{replace:!0}),G).catch($i);return}l=G;const d=c.value;Ss&&XR(Qf(d.fullPath,$.delta),ka()),w(G,d).catch(g=>$t(g,12)?g:$t(g,2)?(I(g.to,G).then(E=>{$t(E,20)&&!$.delta&&$.type===dr.pop&&i.go(-1,!1)}).catch($i),Promise.reject()):($.delta&&i.go(-$.delta,!1),K(g,G,d))).then(g=>{g=g||R(G,d,!1),g&&($.delta&&!$t(g,8)?i.go(-$.delta,!1):$.type===dr.pop&&$t(g,20)&&i.go(-1,!1)),P(G,d,g)}).catch($i)}))}let ne=vi(),V=vi(),te;function K(A,j,$){cn(A);const G=V.list();return G.length?G.forEach(de=>de(A,j,$)):console.error(A),Promise.reject(A)}function yt(){return te&&c.value!==dn?Promise.resolve():new Promise((A,j)=>{ne.add([A,j])})}function cn(A){return te||(te=!A,ee(),ne.list().forEach(([j,$])=>A?$(A):j()),ne.reset()),A}function Pt(A,j,$,G){const{scrollBehavior:de}=t;if(!Ss||!de)return Promise.resolve();const d=!$&&ZR(Qf(A.fullPath,0))||(G||!$)&&history.state&&history.state.scroll||null;return yr().then(()=>de(A,j,d)).then(g=>g&&JR(g)).catch(g=>K(g,A,j))}const Xe=A=>i.go(A);let vs;const Es=new Set,xr={currentRoute:c,listening:!0,addRoute:p,removeRoute:_,hasRoute:O,getRoutes:T,resolve:D,options:t,push:m,replace:S,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:V.add,isReady:yt,install(A){const j=this;A.component("RouterLink",Mk),A.component("RouterView",x_),A.config.globalProperties.$router=j,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>Be(c)}),Ss&&!vs&&c.value===dn&&(vs=!0,m(i.location).catch(de=>{}));const $={};for(const de in dn)Object.defineProperty($,de,{get:()=>c.value[de],enumerable:!0});A.provide(Aa,j),A.provide(Uu,dl($)),A.provide(Jc,c);const G=A.unmount;Es.add(A),A.unmount=function(){Es.delete(A),Es.size<1&&(l=dn,B&&B(),B=null,c.value=dn,vs=!1,te=!1),G()}}};function qe(A){return A.reduce((j,$)=>j.then(()=>y($)),Promise.resolve())}return xr}function $k(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(l=>Zs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Zs(l,c))||i.push(c))}return[n,s,i]}function Bu(){return ht(Aa)}function hP(){return ht(Uu)}const Vk={__name:"App",setup(t){return(e,n)=>(xe(),ca(Be(x_)))}},Wk="modulepreload",jk=function(t){return"/"+t},ud={},Hn=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=jk(r),r in ud)return;ud[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Wk,o||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},Or=ug("user",()=>{const t=ge(),e=ge(),n=ge(),s=ge(),i=ge(),r=ge(0),o=ge(!1);function a(l,u,h,f,p){this.userName=l,this.userMail=u,this.emailVerified=h,this.provider=f,this.uid=p}function c(){this.userName="",this.userMail="",this.emailVerified="",this.provider="",this.uid="",this.bestScore=0,this.isAdmin=!1}return{userName:t,userMail:e,emailVerified:n,provider:s,uid:i,updateUser:a,logout:c,bestScore:r,isAdmin:o}}),qk=ug("timer",()=>{const t=ge(),e=ge(0);function n(){this.timer=null,this.gameTime=0}function s(){this.timer||(this.timer=setInterval(()=>{this.gameTime++},1e3))}function i(){this.timer&&clearInterval(this.timer)}return{timer:t,gameTime:e,startTimer:s,stopTimer:i,initTimer:n}}),Bt=Object.create(null);Bt.open="0";Bt.close="1";Bt.ping="2";Bt.pong="3";Bt.message="4";Bt.upgrade="5";Bt.noop="6";const ro=Object.create(null);Object.keys(Bt).forEach(t=>{ro[Bt[t]]=t});const Xc={type:"error",data:"parser error"},D_=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",L_=typeof ArrayBuffer=="function",M_=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Hu=({type:t,data:e},n,s)=>D_&&e instanceof Blob?n?s(e):hd(e,s):L_&&(e instanceof ArrayBuffer||M_(e))?n?s(e):hd(new Blob([e]),s):s(Bt[t]+(e||"")),hd=(t,e)=>{const n=new FileReader;return n.onload=function(){const s=n.result.split(",")[1];e("b"+(s||""))},n.readAsDataURL(t)};function fd(t){return t instanceof Uint8Array?t:t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}let sc;function zk(t,e){if(D_&&t.data instanceof Blob)return t.data.arrayBuffer().then(fd).then(e);if(L_&&(t.data instanceof ArrayBuffer||M_(t.data)))return e(fd(t.data));Hu(t,!1,n=>{sc||(sc=new TextEncoder),e(sc.encode(n))})}const dd="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ri=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<dd.length;t++)Ri[dd.charCodeAt(t)]=t;const Kk=t=>{let e=t.length*.75,n=t.length,s,i=0,r,o,a,c;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const l=new ArrayBuffer(e),u=new Uint8Array(l);for(s=0;s<n;s+=4)r=Ri[t.charCodeAt(s)],o=Ri[t.charCodeAt(s+1)],a=Ri[t.charCodeAt(s+2)],c=Ri[t.charCodeAt(s+3)],u[i++]=r<<2|o>>4,u[i++]=(o&15)<<4|a>>2,u[i++]=(a&3)<<6|c&63;return l},Gk=typeof ArrayBuffer=="function",$u=(t,e)=>{if(typeof t!="string")return{type:"message",data:F_(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:Yk(t.substring(1),e)}:ro[n]?t.length>1?{type:ro[n],data:t.substring(1)}:{type:ro[n]}:Xc},Yk=(t,e)=>{if(Gk){const n=Kk(t);return F_(n,e)}else return{base64:!0,data:t}},F_=(t,e)=>{switch(e){case"blob":return t instanceof Blob?t:new Blob([t]);case"arraybuffer":default:return t instanceof ArrayBuffer?t:t.buffer}},U_=String.fromCharCode(30),Qk=(t,e)=>{const n=t.length,s=new Array(n);let i=0;t.forEach((r,o)=>{Hu(r,!1,a=>{s[o]=a,++i===n&&e(s.join(U_))})})},Jk=(t,e)=>{const n=t.split(U_),s=[];for(let i=0;i<n.length;i++){const r=$u(n[i],e);if(s.push(r),r.type==="error")break}return s};function Xk(){return new TransformStream({transform(t,e){zk(t,n=>{const s=n.length;let i;if(s<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,s);else if(s<65536){i=new Uint8Array(3);const r=new DataView(i.buffer);r.setUint8(0,126),r.setUint16(1,s)}else{i=new Uint8Array(9);const r=new DataView(i.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(s))}t.data&&typeof t.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(n)})}})}let ic;function Yr(t){return t.reduce((e,n)=>e+n.length,0)}function Qr(t,e){if(t[0].length===e)return t.shift();const n=new Uint8Array(e);let s=0;for(let i=0;i<e;i++)n[i]=t[0][s++],s===t[0].length&&(t.shift(),s=0);return t.length&&s<t[0].length&&(t[0]=t[0].slice(s)),n}function Zk(t,e){ic||(ic=new TextDecoder);const n=[];let s=0,i=-1,r=!1;return new TransformStream({transform(o,a){for(n.push(o);;){if(s===0){if(Yr(n)<1)break;const c=Qr(n,1);r=(c[0]&128)===128,i=c[0]&127,i<126?s=3:i===126?s=1:s=2}else if(s===1){if(Yr(n)<2)break;const c=Qr(n,2);i=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),s=3}else if(s===2){if(Yr(n)<8)break;const c=Qr(n,8),l=new DataView(c.buffer,c.byteOffset,c.length),u=l.getUint32(0);if(u>Math.pow(2,53-32)-1){a.enqueue(Xc);break}i=u*Math.pow(2,32)+l.getUint32(4),s=3}else{if(Yr(n)<i)break;const c=Qr(n,i);a.enqueue($u(r?c:ic.decode(c),e)),s=0}if(i===0||i>t){a.enqueue(Xc);break}}}})}const B_=4;function Me(t){if(t)return eA(t)}function eA(t){for(var e in Me.prototype)t[e]=Me.prototype[e];return t}Me.prototype.on=Me.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};Me.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};Me.prototype.off=Me.prototype.removeListener=Me.prototype.removeAllListeners=Me.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var s,i=0;i<n.length;i++)if(s=n[i],s===e||s.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};Me.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],s=1;s<arguments.length;s++)e[s-1]=arguments[s];if(n){n=n.slice(0);for(var s=0,i=n.length;s<i;++s)n[s].apply(this,e)}return this};Me.prototype.emitReserved=Me.prototype.emit;Me.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};Me.prototype.hasListeners=function(t){return!!this.listeners(t).length};const dt=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function H_(t,...e){return e.reduce((n,s)=>(t.hasOwnProperty(s)&&(n[s]=t[s]),n),{})}const tA=dt.setTimeout,nA=dt.clearTimeout;function Pa(t,e){e.useNativeTimers?(t.setTimeoutFn=tA.bind(dt),t.clearTimeoutFn=nA.bind(dt)):(t.setTimeoutFn=dt.setTimeout.bind(dt),t.clearTimeoutFn=dt.clearTimeout.bind(dt))}const sA=1.33;function iA(t){return typeof t=="string"?rA(t):Math.ceil((t.byteLength||t.size)*sA)}function rA(t){let e=0,n=0;for(let s=0,i=t.length;s<i;s++)e=t.charCodeAt(s),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(s++,n+=4);return n}function oA(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function aA(t){let e={},n=t.split("&");for(let s=0,i=n.length;s<i;s++){let r=n[s].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}class cA extends Error{constructor(e,n,s){super(e),this.description=n,this.context=s,this.type="TransportError"}}class Vu extends Me{constructor(e){super(),this.writable=!1,Pa(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,n,s){return super.emitReserved("error",new cA(e,n,s)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=$u(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,n={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(n)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const n=oA(e);return n.length?"?"+n:""}}const $_="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),Zc=64,lA={};let pd=0,Jr=0,gd;function md(t){let e="";do e=$_[t%Zc]+e,t=Math.floor(t/Zc);while(t>0);return e}function V_(){const t=md(+new Date);return t!==gd?(pd=0,gd=t):t+"."+md(pd++)}for(;Jr<Zc;Jr++)lA[$_[Jr]]=Jr;let W_=!1;try{W_=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const uA=W_;function j_(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||uA))return new XMLHttpRequest}catch{}if(!e)try{return new dt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function hA(){}const fA=function(){return new j_({xdomain:!1}).responseType!=null}();class dA extends Vu{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const s=location.protocol==="https:";let i=location.port;i||(i=s?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port}const n=e&&e.forceBase64;this.supportsBinary=fA&&!n,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let s=0;this.polling&&(s++,this.once("pollComplete",function(){--s||n()})),this.writable||(s++,this.once("drain",function(){--s||n()}))}else n()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=s=>{if(this.readyState==="opening"&&s.type==="open"&&this.onOpen(),s.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(s)};Jk(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Qk(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",n=this.query||{};return this.opts.timestampRequests!==!1&&(n[this.opts.timestampParam]=V_()),!this.supportsBinary&&!n.sid&&(n.b64=1),this.createUri(e,n)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new Ft(this.uri(),e)}doWrite(e,n){const s=this.request({method:"POST",data:e});s.on("success",n),s.on("error",(i,r)=>{this.onError("xhr post error",i,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,s)=>{this.onError("xhr poll error",n,s)}),this.pollXhr=e}}class Ft extends Me{constructor(e,n){super(),Pa(this,n),this.opts=n,this.method=n.method||"GET",this.uri=e,this.data=n.data!==void 0?n.data:null,this.create()}create(){var e;const n=H_(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");n.xdomain=!!this.opts.xd;const s=this.xhr=new j_(n);try{s.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){s.setDisableHeaderCheck&&s.setDisableHeaderCheck(!0);for(let i in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(i)&&s.setRequestHeader(i,this.opts.extraHeaders[i])}}catch{}if(this.method==="POST")try{s.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{s.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(s),"withCredentials"in s&&(s.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(s.timeout=this.opts.requestTimeout),s.onreadystatechange=()=>{var i;s.readyState===3&&((i=this.opts.cookieJar)===null||i===void 0||i.parseCookies(s)),s.readyState===4&&(s.status===200||s.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof s.status=="number"?s.status:0)},0))},s.send(this.data)}catch(i){this.setTimeoutFn(()=>{this.onError(i)},0);return}typeof document<"u"&&(this.index=Ft.requestsCount++,Ft.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=hA,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete Ft.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}Ft.requestsCount=0;Ft.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",_d);else if(typeof addEventListener=="function"){const t="onpagehide"in dt?"pagehide":"unload";addEventListener(t,_d,!1)}}function _d(){for(let t in Ft.requests)Ft.requests.hasOwnProperty(t)&&Ft.requests[t].abort()}const Wu=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),Xr=dt.WebSocket||dt.MozWebSocket,yd=!0,pA="arraybuffer",vd=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class gA extends Vu{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),n=this.opts.protocols,s=vd?{}:H_(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=yd&&!vd?n?new Xr(e,n):new Xr(e):new Xr(e,n,s)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const s=e[n],i=n===e.length-1;Hu(s,this.supportsBinary,r=>{const o={};try{yd&&this.ws.send(r)}catch{}i&&Wu(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",n=this.query||{};return this.opts.timestampRequests&&(n[this.opts.timestampParam]=V_()),this.supportsBinary||(n.b64=1),this.createUri(e,n)}check(){return!!Xr}}class mA extends Vu{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const n=Zk(Number.MAX_SAFE_INTEGER,this.socket.binaryType),s=e.readable.pipeThrough(n).getReader(),i=Xk();i.readable.pipeTo(e.writable),this.writer=i.writable.getWriter();const r=()=>{s.read().then(({done:a,value:c})=>{a||(this.onPacket(c),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this.writer.write(o).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const s=e[n],i=n===e.length-1;this.writer.write(s).then(()=>{i&&Wu(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const _A={websocket:gA,webtransport:mA,polling:dA},yA=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,vA=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function el(t){if(t.length>2e3)throw"URI too long";const e=t,n=t.indexOf("["),s=t.indexOf("]");n!=-1&&s!=-1&&(t=t.substring(0,n)+t.substring(n,s).replace(/:/g,";")+t.substring(s,t.length));let i=yA.exec(t||""),r={},o=14;for(;o--;)r[vA[o]]=i[o]||"";return n!=-1&&s!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=EA(r,r.path),r.queryKey=wA(r,r.query),r}function EA(t,e){const n=/\/{2,9}/g,s=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&s.splice(0,1),e.slice(-1)=="/"&&s.splice(s.length-1,1),s}function wA(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(s,i,r){i&&(n[i]=r)}),n}let q_=class Rs extends Me{constructor(e,n={}){super(),this.binaryType=pA,this.writeBuffer=[],e&&typeof e=="object"&&(n=e,e=null),e?(e=el(e),n.hostname=e.host,n.secure=e.protocol==="https"||e.protocol==="wss",n.port=e.port,e.query&&(n.query=e.query)):n.host&&(n.hostname=el(n.host).host),Pa(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=n.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},n),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=aA(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=B_,n.transport=e,this.id&&(n.sid=this.id);const s=Object.assign({},this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new _A[e](s)}open(){let e;if(this.opts.rememberUpgrade&&Rs.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",n=>this.onClose("transport close",n))}probe(e){let n=this.createTransport(e),s=!1;Rs.priorWebsocketSuccess=!1;const i=()=>{s||(n.send([{type:"ping",data:"probe"}]),n.once("packet",h=>{if(!s)if(h.type==="pong"&&h.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Rs.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{s||this.readyState!=="closed"&&(u(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const f=new Error("probe error");f.transport=n.name,this.emitReserved("upgradeError",f)}}))};function r(){s||(s=!0,u(),n.close(),n=null)}const o=h=>{const f=new Error("probe error: "+h);f.transport=n.name,r(),this.emitReserved("upgradeError",f)};function a(){o("transport closed")}function c(){o("socket closed")}function l(h){n&&h.name!==n.name&&r()}const u=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",a),this.off("close",c),this.off("upgrading",l)};n.once("open",i),n.once("error",o),n.once("close",a),this.once("close",c),this.once("upgrading",l),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{s||n.open()},200):n.open()}onOpen(){if(this.readyState="open",Rs.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const n=this.upgrades.length;for(;e<n;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const n=new Error("server error");n.code=e.data,this.onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let s=0;s<this.writeBuffer.length;s++){const i=this.writeBuffer[s].data;if(i&&(n+=iA(i)),s>0&&n>this.maxPayload)return this.writeBuffer.slice(0,s);n+=2}return this.writeBuffer}write(e,n,s){return this.sendPacket("message",e,n,s),this}send(e,n,s){return this.sendPacket("message",e,n,s),this}sendPacket(e,n,s,i){if(typeof n=="function"&&(i=n,n=void 0),typeof s=="function"&&(i=s,s=null),this.readyState==="closing"||this.readyState==="closed")return;s=s||{},s.compress=s.compress!==!1;const r={type:e,data:n,options:s};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},s=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?s():e()}):this.upgrading?s():e()),this}onError(e){Rs.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,n){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const n=[];let s=0;const i=e.length;for(;s<i;s++)~this.transports.indexOf(e[s])&&n.push(e[s]);return n}};q_.protocol=B_;function bA(t,e="",n){let s=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),s=el(t)),s.port||(/^(http|ws)$/.test(s.protocol)?s.port="80":/^(http|ws)s$/.test(s.protocol)&&(s.port="443")),s.path=s.path||"/";const r=s.host.indexOf(":")!==-1?"["+s.host+"]":s.host;return s.id=s.protocol+"://"+r+":"+s.port+e,s.href=s.protocol+"://"+r+(n&&n.port===s.port?"":":"+s.port),s}const CA=typeof ArrayBuffer=="function",TA=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,z_=Object.prototype.toString,IA=typeof Blob=="function"||typeof Blob<"u"&&z_.call(Blob)==="[object BlobConstructor]",SA=typeof File=="function"||typeof File<"u"&&z_.call(File)==="[object FileConstructor]";function ju(t){return CA&&(t instanceof ArrayBuffer||TA(t))||IA&&t instanceof Blob||SA&&t instanceof File}function oo(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,s=t.length;n<s;n++)if(oo(t[n]))return!0;return!1}if(ju(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return oo(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&oo(t[n]))return!0;return!1}function RA(t){const e=[],n=t.data,s=t;return s.data=tl(n,e),s.attachments=e.length,{packet:s,buffers:e}}function tl(t,e){if(!t)return t;if(ju(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let s=0;s<t.length;s++)n[s]=tl(t[s],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=tl(t[s],e));return n}return t}function kA(t,e){return t.data=nl(t.data,e),delete t.attachments,t}function nl(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=nl(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=nl(t[n],e));return t}const AA=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],PA=5;var le;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(le||(le={}));class NA{constructor(e){this.replacer=e}encode(e){return(e.type===le.EVENT||e.type===le.ACK)&&oo(e)?this.encodeAsBinary({type:e.type===le.EVENT?le.BINARY_EVENT:le.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===le.BINARY_EVENT||e.type===le.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=RA(e),s=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(s),i}}function Ed(t){return Object.prototype.toString.call(t)==="[object Object]"}class qu extends Me{constructor(e){super(),this.reviver=e}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e);const s=n.type===le.BINARY_EVENT;s||n.type===le.BINARY_ACK?(n.type=s?le.EVENT:le.ACK,this.reconstructor=new OA(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(ju(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const s={type:Number(e.charAt(0))};if(le[s.type]===void 0)throw new Error("unknown packet type "+s.type);if(s.type===le.BINARY_EVENT||s.type===le.BINARY_ACK){const r=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(r,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");s.attachments=Number(o)}if(e.charAt(n+1)==="/"){const r=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););s.nsp=e.substring(r,n)}else s.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const r=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}s.id=Number(e.substring(r,n+1))}if(e.charAt(++n)){const r=this.tryParse(e.substr(n));if(qu.isPayloadValid(s.type,r))s.data=r;else throw new Error("invalid payload")}return s}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case le.CONNECT:return Ed(n);case le.DISCONNECT:return n===void 0;case le.CONNECT_ERROR:return typeof n=="string"||Ed(n);case le.EVENT:case le.BINARY_EVENT:return Array.isArray(n)&&(typeof n[0]=="number"||typeof n[0]=="string"&&AA.indexOf(n[0])===-1);case le.ACK:case le.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class OA{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=kA(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const xA=Object.freeze(Object.defineProperty({__proto__:null,Decoder:qu,Encoder:NA,get PacketType(){return le},protocol:PA},Symbol.toStringTag,{value:"Module"}));function Et(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const DA=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class K_ extends Me{constructor(e,n,s){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,s&&s.auth&&(this.auth=s.auth),this._opts=Object.assign({},s),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Et(e,"open",this.onopen.bind(this)),Et(e,"packet",this.onpacket.bind(this)),Et(e,"error",this.onerror.bind(this)),Et(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){if(DA.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(n.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(n),this;const s={type:le.EVENT,data:n};if(s.options={},s.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const o=this.ids++,a=n.pop();this._registerAckCallback(o,a),s.id=o}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(e,n){var s;const i=(s=this.flags.timeout)!==null&&s!==void 0?s:this._opts.ackTimeout;if(i===void 0){this.acks[e]=n;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);n.call(this,new Error("operation has timed out"))},i);this.acks[e]=(...o)=>{this.io.clearTimeoutFn(r),n.apply(this,[null,...o])}}emitWithAck(e,...n){const s=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((i,r)=>{n.push((o,a)=>s?o?r(o):i(a):i(o)),this.emit(e,...n)})}_addToQueue(e){let n;typeof e[e.length-1]=="function"&&(n=e.pop());const s={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...r)=>s!==this._queue[0]?void 0:(i!==null?s.tryCount>this._opts.retries&&(this._queue.shift(),n&&n(i)):(this._queue.shift(),n&&n(null,...r)),s.pending=!1,this._drainQueue())),this._queue.push(s),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const n=this._queue[0];n.pending&&!e||(n.pending=!0,n.tryCount++,this.flags=n.flags,this.emit.apply(this,n.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:le.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case le.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case le.EVENT:case le.BINARY_EVENT:this.onevent(e);break;case le.ACK:case le.BINARY_ACK:this.onack(e);break;case le.DISCONNECT:this.ondisconnect();break;case le.CONNECT_ERROR:this.destroy();const s=new Error(e.data.message);s.data=e.data.data,this.emitReserved("connect_error",s);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const s of n)s.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const n=this;let s=!1;return function(...i){s||(s=!0,n.packet({type:le.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(n.apply(this,e.data),delete this.acks[e.id])}onconnect(e,n){this.id=e,this.recovered=n&&this._pid===n,this._pid=n,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:le.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let s=0;s<n.length;s++)if(e===n[s])return n.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let s=0;s<n.length;s++)if(e===n[s])return n.splice(s,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const s of n)s.apply(this,e.data)}}}function hi(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}hi.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=Math.floor(e*10)&1?t+n:t-n}return Math.min(t,this.max)|0};hi.prototype.reset=function(){this.attempts=0};hi.prototype.setMin=function(t){this.ms=t};hi.prototype.setMax=function(t){this.max=t};hi.prototype.setJitter=function(t){this.jitter=t};class sl extends Me{constructor(e,n){var s;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,Pa(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((s=n.randomizationFactor)!==null&&s!==void 0?s:.5),this.backoff=new hi({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||xA;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new q_(this.uri,this.opts);const n=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const i=Et(n,"open",function(){s.onopen(),e&&e()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=Et(n,"error",r);if(this._timeout!==!1){const a=this._timeout,c=this.setTimeoutFn(()=>{i(),r(new Error("timeout")),n.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Et(e,"ping",this.onping.bind(this)),Et(e,"data",this.ondata.bind(this)),Et(e,"error",this.onerror.bind(this)),Et(e,"close",this.onclose.bind(this)),Et(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){Wu(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let s=this.nsps[e];return s?this._autoConnect&&!s.active&&s.connect():(s=new K_(this,e,n),this.nsps[e]=s),s}_destroy(e){const n=Object.keys(this.nsps);for(const s of n)if(this.nsps[s].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let s=0;s<n.length;s++)this.engine.write(n[s],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,n){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&s.unref(),this.subs.push(()=>{this.clearTimeoutFn(s)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Ei={};function ao(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=bA(t,e.path||"/socket.io"),s=n.source,i=n.id,r=n.path,o=Ei[i]&&r in Ei[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let c;return a?c=new sl(s,e):(Ei[i]||(Ei[i]=new sl(s,e)),c=Ei[i]),n.query&&!e.query&&(e.query=n.queryKey),c.socket(n.path,e)}Object.assign(ao,{Manager:sl,Socket:K_,io:ao,connect:ao});const LA="https://puzzle-01s0.onrender.com";class MA{constructor(){this.socket=ao(LA)}joinRoom(e,n){this.socket.emit("joinRoom",{roomId:e,userName:n})}leaveRoom(e,n){this.socket.emit("leaveRoom",{roomId:e,userId:n})}puzzleSelected(e,n,s,i){this.socket.emit("puzzleSelected",e,n,s,i)}readyToPlay(e){this.socket.emit("readyToPlay",e)}changePuzzle(e){this.socket.emit("changePuzzle",e)}puzzleFinished(e,n){this.socket.emit("puzzleFinished",e,n)}onPuzzleFinished(e){this.socket.on("puzzleFinished",e)}onchangePuzzle(e){this.socket.on("changePuzzle",e)}onRoomUpdate(e){this.socket.on("roomUpdate",e)}onUpdatePlayerList(e){this.socket.on("updatePlayerList",e)}onPuzzleReady(e){this.socket.on("puzzleReady",e)}onStartCountdown(e){this.socket.on("startCountdown",e)}}const FA=new MA,rc=ge(!1);function fP(t,e,n,s){const i=qk(),{gameTime:r}=er(i),{stopTimer:o,startTimer:a}=i,c=ge([]),l=ge([]),u=50,h=ge(null),f=ps({x:0,y:0}),p=(I,b)=>{a();const y=b.groupId?l.value.find(w=>w.id===b.groupId):null;y&&(y.isBeingDragged=!0,y.offsetX=I.clientX,y.offsetY=I.clientY,y.pieces.forEach(w=>{w.initialOffsetX=w.x-I.clientX,w.initialOffsetY=w.y-I.clientY})),h.value=b,f.x=I.clientX-b.x,f.y=I.clientY-b.y},_=I=>{l.value.forEach(b=>{b.isBeingDragged&&b.pieces.forEach(y=>{y.x=I.clientX+y.initialOffsetX,y.y=I.clientY+y.initialOffsetY})}),h.value&&(h.value.x=I.clientX-f.x,h.value.y=I.clientY-f.y)},T=I=>{if(!h.value)return;let b=null;l.value.forEach(y=>{y.isBeingDragged&&(b=y),y.isBeingDragged=!1}),b?b.pieces.forEach(y=>{O(y)}):O(h.value),h.value=null},O=(I,b)=>{c.value.forEach(y=>{y.groupId===I.groupId&&y.groupId!==void 0||y!==I&&v(I,y)&&D(I,y)})},D=(I,b,y)=>{const w=I.attachmentPoints.find(ne=>ne.matchId===b.id);if(!w)return;const P=b.attachmentPoints.find(ne=>ne.matchId===I.id);if(!P)return;const R=b.x+P.x-w.x-I.x,B=b.y+P.y-w.y-I.y;let ee=I.groupId?l.value.find(ne=>ne.id===I.groupId):void 0;ee?ee.pieces.forEach(ne=>{ne.x+=R,ne.y+=B}):(I.x=b.x+P.x-w.x,I.y=b.y+P.y-w.y),C(I,b)},C=async(I,b)=>{let y={id:l.value.length>0?l.value[l.value.length-1].id+1:1,pieces:[]},w=I.groupId?l.value.find(R=>R.id===I.groupId):null,P=b.groupId?l.value.find(R=>R.id===b.groupId):null;if(w){w.pieces.forEach(B=>{y.pieces.push(B),B.groupId=y.id});const R=l.value.indexOf(w);R!==-1&&l.value.splice(R,1)}else I.groupId=y.id,y.pieces.push(I);if(P){P.pieces.forEach(B=>{y.pieces.push(B),B.groupId=y.id});const R=l.value.indexOf(P);R!==-1&&l.value.splice(R,1)}else b.groupId=y.id,y.pieces.push(b);if(l.value.push(y),l.value[0].pieces.length==e){const R=Or(),{userName:B,bestScore:ee}=er(R);n==="oui"?FA.puzzleFinished(s,B.value):(o(),m(),B.value&&(ee.value===0||r.value<ee.value)&&S(B.value))}},v=(I,b)=>I.attachmentPoints.some(y=>{if(y.matchId!==b.id)return!1;const w={x:I.x+y.x,y:I.y+y.y};return b.attachmentPoints.some(P=>{const R={x:b.x+P.x,y:b.y+P.y},B=Math.pow(R.x-w.x,2),ee=Math.pow(R.y-w.y,2);return B<u&&ee<u})});function m(){rc.value=!0,setTimeout(()=>{rc.value=!1},3e3)}async function S(I){const b={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,nbPieces:e,userName:I,time:r.value})};await fetch("https://puzzle-01s0.onrender.com/api/addScore",b)}function F(I,b,y=3){return new Promise((w,P)=>{const R=new Image;let B=0;const ee=()=>{R.onload=()=>{b.key=Date.now()+Math.random(),w(R)},R.onerror=()=>{B<y?(B++,console.log(`Tentative de rechargement de l'image : ${I}, essai n° ${B}`),setTimeout(ee,1e3)):P(new Error(`Échec du chargement de l'image après ${y} tentatives : ${I}`))},R.src=I};ee()})}return{pieces:c,gameTime:r,showCompletionAnimation:rc,startDrag:p,onDrag:_,endDrag:T,loadImage:F,triggerCompletionAnimation:m}}function UA(){function t(e){const n=Math.floor(e/60),s=e%60;return`${n}:${s.toString().padStart(2,"0")}`}return{formatTime:t}}const BA={key:0,class:"pl-2"},HA={key:1},$A=ke("div",{class:"text-center py-2"}," Classement ",-1),VA={class:"px-2"},WA={class:"flex justify-between"},jA={__name:"ClassementPuzzle",props:{id:Number,pieces:Number},setup(t){const e=Or(),{userName:n,bestScore:s}=er(e),{formatTime:i}=UA(),r=ge([]),o=ge(!1),a=t;return Jd(async()=>{const c=await fetch(`https://puzzle-01s0.onrender.com/api/getClassement/${a.id-1}/${a.pieces}`);r.value=await c.json()}),ms(async()=>{try{if(n.value)try{const l=await(await fetch(`https://puzzle-01s0.onrender.com/api/getBestScore/${a.id-1}/${a.pieces}/${n.value}`)).json();l?s.value=l.time:s.value=0}catch(c){console.log(c)}}catch{o.value=!0}}),(c,l)=>o.value?(xe(),ze("div",BA," Problème de récupération du classement ")):(xe(),ze("div",HA,[$A,ke("ul",VA,[(xe(!0),ze(Ae,null,go(r.value,(u,h)=>(xe(),ze("li",WA,[ke("div",null,Wi(h),1),ke("div",null,Wi(Be(i)(u.time)),1)]))),256))])]))}};const qA={class:"home-container"},zA={class:"image-selection"},KA=["src","onClick"],GA={class:"puzzle-options"},YA=ke("option",{disabled:"",value:""},"Nombre de pièces",-1),QA=["value"],JA={key:0,class:"w-2/12 py-2 max-w-[200px] m-auto lg:m-0"},XA={__name:"LaunchGame",setup(t){const e=Bu(),n=ge([]),s=ge(""),i=ge(null),r=ge([49,100,225,400]);function o(c){i.value=c.id}function a(){i.value&&s.value&&e.push({path:"/game",query:{imageId:i.value,pieces:s.value}})}return ms(async()=>{try{const c=await fetch("https://puzzle-01s0.onrender.com/api/getImages");n.value=await c.json()}catch(c){console.error("Erreur lors du chargement des images",c)}}),(c,l)=>(xe(),ze("div",qA,[ke("div",zA,[(xe(!0),ze(Ae,null,go(n.value,u=>(xe(),ze("div",{key:u.id,class:"image-card"},[ke("img",{src:u.src,onClick:h=>o(u),class:ni({"selected-image":i.value===u.id})},null,10,KA)]))),128))]),ke("div",GA,[bl(ke("select",{"onUpdate:modelValue":l[0]||(l[0]=u=>s.value=u)},[YA,(xe(!0),ze(Ae,null,go(r.value,u=>(xe(),ze("option",{key:u,value:u},Wi(u),9,QA))),128))],512),[[Fl,s.value]]),ke("button",{onClick:a},"Démarrer")]),i.value&&s.value?(xe(),ze("div",JA,[fe(jA,{id:i.value,pieces:s.value},null,8,["id","pieces"])])):Op("",!0)]))}},ZA="/assets/logo-43735431.png";function dP(t,e,n){return new Promise((s,i)=>{eT(Ve,t,e).then(r=>{const o=r.user;Xg(Ve.currentUser,{displayName:n}).then(()=>{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:o.uid,userName:o.displayName})};fetch("https://puzzle-01s0.onrender.com/api/addUser",a).then(c=>{if(c.ok)s();else throw new Error("Erreur")}).catch(c=>{ef(Ve.currentUser).then(()=>{}).catch(l=>{}),i(c)})}).catch(a=>{ef(Ve.currentUser).then(()=>{}).catch(c=>{}),i(a)})}).catch(r=>{i(r)})})}function eP(){const t=Or(),{logout:e}=t,{uid:n}=er(t);return new Promise((s,i)=>{lT(Ve).then(()=>{BR(n.value,"offline"),e(),s()}).catch(r=>{i()})})}function pP(t,e){return new Promise((n,s)=>{tT(Ve,t,e).then(i=>{n()}).catch(i=>{s()})})}function gP(){const t=new Ct;return new Promise((e,n)=>{PT(Ve,t).then(s=>{Ct.credentialFromResult(s).accessToken,s.user,e()}).catch(s=>{s.code,s.message,s.customData.email,Ct.credentialFromError(s),n()})})}function mP(t){return new Promise((e,n)=>{Xg(Ve.currentUser,{displayName:t.value}).then(()=>{e()}).catch(s=>{n()})})}function _P(t,e){return new Promise((n,s)=>{const i=Fn.credential(Ve.currentUser.email,e);Qg(Ve.currentUser,i).then(()=>{sT(Ve.currentUser,t.value).then(()=>{n()}).catch(r=>{s()})}).catch(r=>{s()})})}function yP(t,e){return new Promise((n,s)=>{const i=Fn.credential(Ve.currentUser.email,t);Qg(Ve.currentUser,i).then(()=>{rT(Ve.currentUser,e).then(()=>{n()}).catch(r=>{s()})}).catch(r=>{s()})})}function vP(){return new Promise((t,e)=>{nT(Ve.currentUser).then(()=>{t()}).catch(n=>{e()})})}function EP(t){return new Promise((e,n)=>{ZC(Ve,t).then(()=>{e()}).catch(s=>{n()})})}const tP={key:0,class:"relative w-fit"},nP={class:"mr-4"},sP=ke("svg",{class:"w-5 h-5 text-indigo-100 dark:text-white",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[ke("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),iP={class:"absolute right-0 py-2 mt-2 bg-indigo-500 rounded-md shadow-xl w-44 z-10"},rP={key:1},oP={__name:"DropdownMenu",setup(t){const e=Bu(),n=fg.useToast(),s=Or(),{userName:i}=er(s);let r=ge(!1);async function o(){try{await eP();let a=n.success("Vous êtes bien déconnecté");e.replace("/login")}catch{n.error("Un problème est survenu lors de la déconnexion!")}}return(a,c)=>{const l=hp("router-link");return xe(),ze("div",null,[Be(i)?(xe(),ze("div",tP,[ke("button",{onClick:c[0]||(c[0]=u=>Te(r)?r.value=!Be(r):r=!Be(r)),class:"flex items-center p-2 text-indigo-100 bg-indigo-600 rounded-md"},[ke("span",nP,Wi(Be(i)),1),sP]),bl(ke("div",iP,[fe(l,{to:"/profil",class:"block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100"},{default:Yi(()=>[Zi(" Mon profil ")]),_:1}),fe(l,{to:"/friends",class:"block px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100"},{default:Yi(()=>[Zi(" Mes amis ")]),_:1}),ke("button",{onClick:c[1]||(c[1]=u=>o()),class:"w-full text-left px-4 py-2 text-sm text-indigo-100 hover:bg-indigo-400 hover:text-indigo-100"}," Se déconnecter ")],512),[[Dl,Be(r)]])])):(xe(),ze("div",rP,[ke("button",{onClick:c[2]||(c[2]=u=>Be(e).replace("Login"))},"Connexion")]))])}}};const aP={class:"game-header"},cP=["src"],lP={__name:"Header",setup(t){const e=Bu();return(n,s)=>(xe(),ze("div",aP,[ke("img",{src:Be(ZA),alt:"Logo",class:"logo",onClick:s[0]||(s[0]=i=>Be(e).replace("/"))},null,8,cP),fe(oP)]))}},uP={__name:"HomeView",setup(t){return(e,n)=>(xe(),ze(Ae,null,[ke("header",null,[fe(lP)]),fe(XA)],64))}},G_=Hk({history:sk("/"),routes:[{path:"/",name:"home",component:uP},{path:"/game",name:"game",component:()=>Hn(()=>import("./GameView-b754a469.js"),["assets/GameView-b754a469.js","assets/GameInterface-39de01c3.js"])},{path:"/login",name:"Login",component:()=>Hn(()=>import("./Login-c598daf9.js"),[])},{path:"/signup",name:"Signup",component:()=>Hn(()=>import("./Signup-8c63fbb0.js"),[])},{path:"/profil",name:"Profil",component:()=>Hn(()=>import("./Profil-8ce6ed4b.js"),[])},{path:"/friends",name:"Friends",component:()=>Hn(()=>import("./Friends-fdac2197.js"),["assets/Friends-fdac2197.js","assets/Friends-184037a2.css"])},{path:"/resetPassword",name:"ResetPassword",component:()=>Hn(()=>import("./ResetPassword-1c81d88e.js"),[])},{path:"/room/:id",name:"Room",component:()=>Hn(()=>import("./Room-c1f6d594.js"),["assets/Room-c1f6d594.js","assets/GameInterface-39de01c3.js"])},{path:"/:catchAll(.*)",redirect:{name:"home"}}]});G_.beforeEach(async(t,e)=>{const n=Or(),{updateUser:s}=n;try{const i=await FR();if(i){if(t.name==="Login"||t.name==="Signup"||t.name==="ResetPassword")return{name:"Home"};s(i.displayName,i.email,i.emailVerified,i.providerData[0].providerId,i.uid)}else if(t.name==="Room")return{name:"home"};return!0}catch(i){return console.log(i),{name:"Login"}}});UR();const Na=ig(Vk);Na.use(lw());Na.use(vw);Na.use(G_);Na.mount("#app");export{yP as A,go as B,ni as C,Zy as D,ev as E,Ae as F,EP as G,FA as H,Fl as I,qk as J,fP as K,aa as L,jA as M,UA as N,mr as O,lP as _,xe as a,ke as b,ze as c,fe as d,Op as e,ca as f,Bu as g,Zi as h,gP as i,tw as j,dP as k,Or as l,fg as m,er as n,ms as o,Be as p,Te as q,ge as r,pP as s,Wi as t,hP as u,Eo as v,bl as w,vP as x,mP as y,_P as z};
