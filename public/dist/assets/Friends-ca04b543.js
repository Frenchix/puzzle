import{l as j,n as z,m as F,r as y,a as o,c as n,w as R,v as q,b as e,g as S,o as T,F as b,B as w,t as $,C as O,p as D,e as E,D as I,E as L,d as x,_ as U}from"./index-b1378635.js";const V={class:"flex justify-center pt-10 gap-2"},B={__name:"SearchFriends",setup(c){const p=j(),{userName:r,uid:v}=z(p),i=F.useToast(),_=y("");async function m(){try{if(r.value){const l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:v.value,userName:r.value,friendName:_.value})},u=await fetch("https://puzzle.cloudns.org:5002/api/addFriendRequest",l),h=await u.json();if(u.ok){let g=i.success(h)}else{let g=i.error(h)}}}catch{i.error("Une erreur s'est produite lors de la demande d'ami")}}return(l,u)=>(o(),n("div",V,[R(e("input",{type:"text","onUpdate:modelValue":u[0]||(u[0]=h=>_.value=h),placeholder:"Tape le nom d'utilisateur",class:"w-[200px] border-gray-500 border bg-gray-300 p-2"},null,512),[[q,_.value]]),e("button",{onClick:m},"Envoyer demande d'ami")]))}},J="/assets/curly-95fa1def.jpg";const M=(c,p)=>{const r=c.__vccOpts||c;for(const[v,i]of p)r[v]=i;return r},k=c=>(I("data-v-7d61babd"),c=c(),L(),c),P={class:"w-[400px] mx-auto pt-5"},A=k(()=>e("div",{class:"font-bold"},"Mes amis",-1)),G={key:0},H={class:"px-2 pt-2"},K={class:"flex justify-center gap-5 items-center py-2"},Q={class:"w-1/2 flex gap-5 items-center"},W=["onClick"],X={class:"px-2 pt-2"},Y={class:"flex justify-center gap-5 items-center py-2"},Z={class:"w-1/2 flex gap-5 items-center"},ee=["onClick"],se=["onClick"],te={key:1,class:"flex justify-center pt-10 items-center"},oe=k(()=>e("span",null,"Vous n'avez pas d'ami pour le moment",-1)),ne=["src"],ae={class:"pt-5"},re=k(()=>e("div",{class:"font-bold"},"Mes demandes d'amis",-1)),ce={key:0},ie={class:"px-2 pt-2"},ue={class:"flex justify-center gap-5 items-center py-1"},le={class:"w-1/3"},de=["onClick"],pe=["onClick"],_e={__name:"ListFriends",setup(c){const p=S(),r=F.useToast(),v=j(),{uid:i,userName:_}=z(v),m=y([]),l=y([]),u=y([]);let h=0;async function g(d,a,s){try{const t={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:_.value})};await(await fetch("https://puzzle.cloudns.org:5002/api/defi",t)).json()}catch(t){console.log(t),r.error("Un problème est survenu")}delete u.value[a],d&&p.push({path:`/room/${s}`})}async function N(d){try{const a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:_.value,userNameFriend:d})};h=await(await fetch("https://puzzle.cloudns.org:5002/api/addRoom",a)).json(),p.push({path:`/room/${h}`})}catch(a){console.log(a)}}async function C(d,a,s){try{const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:i.value,friendName:a,answer:d,uidFriend:s})},f=await fetch("https://puzzle.cloudns.org:5002/api/responseFriendRequest",t);m.value=await f.json();let me=r.success("Demande pris en compte");delete l.value[a]}catch(t){console.log(t),r.error("Un problème est survenu")}}return T(async()=>{const d=await fetch(`https://puzzle.cloudns.org:5002/api/getFriends/${i.value}`);m.value=await d.json();const a=await fetch(`https://puzzle.cloudns.org:5002/api/getRequestFriend/${i.value}`);l.value=await a.json();const s=await fetch(`https://puzzle.cloudns.org:5002/api/getDefi/${_.value}`);u.value=await s.json()}),(d,a)=>(o(),n("div",P,[A,m.value.length>0?(o(),n("div",G,[e("ul",H,[(o(!0),n(b,null,w(m.value,s=>(o(),n("li",K,[e("div",Q,[e("div",null,$(s.pseudo),1),e("div",{class:O(["w-6 h-6 rounded-[20px]",s.status=="online"?"bg-green-500":"bg-red-500"])},null,2)]),e("button",{class:"bg-green-600",onClick:t=>N(s.pseudo)},"Défier",8,W)]))),256))]),e("ul",X,[(o(!0),n(b,null,w(u.value,(s,t)=>(o(),n("li",Y,[e("div",Z,[e("div",null,$(s.userName)+" souhaite vous défier. ",1)]),e("button",{class:"bg-green-600",onClick:f=>g(!0,t,s.uuid)},"Accepter",8,ee),e("button",{class:"bg-red-600",onClick:f=>g(!1,t)},"Refuser",8,se)]))),256))])])):(o(),n("div",te,[oe,e("img",{src:D(J),alt:"Image paquet curly",class:"w-[60px]"},null,8,ne)])),e("div",ae,[re,l.value?(o(),n("div",ce,[e("ul",ie,[(o(!0),n(b,null,w(l.value,(s,t)=>(o(),n("li",ue,[e("div",le,$(t),1),e("button",{class:"bg-green-600",onClick:f=>C(!0,t,s.uid)},"Accepter",8,de),e("button",{class:"bg-red-600",onClick:f=>C(!1,t,s.uid)},"Refuser",8,pe)]))),256))])])):E("",!0)])]))}},he=M(_e,[["__scopeId","data-v-7d61babd"]]),ve={__name:"Friends",setup(c){return(p,r)=>(o(),n(b,null,[e("header",null,[x(U)]),x(B),x(he)],64))}};export{ve as default};