import{initializeApp as g}from"https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";import{getFirestore as f,collection as S,query as v,where as y,getDocs as k}from"https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";import{getStorage as w,ref as b,getDownloadURL as I}from"https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";import{_ as x}from"./index-2ff5f8eb.js";import{r as m,o as i,b as l,e as a,F as D,m as T,t as c}from"./@vue-e41b397a.js";import"./vue-router-4ae2eba4.js";const V={apiKey:"AIzaSyDpRlGDGuk1JUXi0VhvSpVcJwcCm1Q2ep8",authDomain:"cars-cf954.firebaseapp.com",projectId:"cars-cf954",storageBucket:"cars-cf954.appspot.com",messagingSenderId:"943137422806",appId:"1:943137422806:web:60df9a425e9cf25a26b877"},R=g(V),U=f(R),q={setup(){const o=m(""),t=m([]);return{searchTerm:o,searchResults:t,updateSearchTerm:n=>{o.value=n.target.value},search:async()=>{t.length=0;const n=S(U,"cars"),p=v(n,y("make","==",o.value));(await k(p)).forEach(async s=>{const u=w(),h=b(u,`cars/${s.id}.jpg`),_=await I(h);t.push({id:s.id,make:s.data().make,model:s.data().model,engine:s.data().engine,color:s.data().color,imageUrl:_})})}}}},B={class:"search-container"},C=["value"],F=["src"];function j(o,t,d,r,n,p){return i(),l("div",null,[a("div",B,[a("input",{value:r.searchTerm,onInput:t[0]||(t[0]=(...e)=>r.updateSearchTerm&&r.updateSearchTerm(...e)),type:"text",placeholder:"Search for car make"},null,40,C),a("button",{onClick:t[1]||(t[1]=(...e)=>r.search&&r.search(...e))},"Search")]),a("ul",null,[(i(!0),l(D,null,T(r.searchResults,e=>(i(),l("li",{key:e.id},[a("img",{src:e.imageUrl,width:"700",height:"600"},null,8,F),a("p",null,c(e.make),1),a("p",null,c(e.model),1),a("p",null,c(e.engine),1),a("p",null,c(e.color),1)]))),128))])])}const K=x(q,[["render",j],["__scopeId","data-v-1adc2764"]]);export{K as default};