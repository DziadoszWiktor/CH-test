import{u as p}from"./useFetch-03fddda5.js";import{c as h,o as e,b as s,e as o,F as n,m as r,u as i,t as c}from"./@vue-86055dd2.js";const m=o("h1",{class:"p-2"},"Kalkulator Walutowy",-1),f=o("h2",{class:"p-2"},"Chcę wymienić",-1),w={class:"form-group p-2"},k=o("label",{for:"kwota"},"Kwota",-1),y=o("input",{type:"number",class:"form-control w-25",id:"kwota"},null,-1),b=o("label",{for:"w"},"W walucie:",-1),g={class:"form-control w-25",id:"w"},N=o("option",null,"PLN - polski złoty",-1),x=o("label",{for:"na"},"Na walutę:",-1),B={class:"form-control w-25",id:"na"},F=o("option",null,"PLN - polski złoty",-1),K=o("h2",{class:"p-2"},"Wynik:",-1),z={__name:"KalkulatorView",setup(L){const{data:u}=p("http://api.nbp.pl/api/exchangerates/tables/a/"),l=h(()=>{var a;return((a=u.value[0])==null?void 0:a.rates).slice().sort((t,d)=>t.code.localeCompare(d.code))});return(_,a)=>(e(),s(n,null,[m,f,o("form",null,[o("div",w,[k,y,b,o("select",g,[N,(e(!0),s(n,null,r(i(l),t=>(e(),s("option",{key:t.code},c(t.code)+" - "+c(t.currency),1))),128))]),x,o("select",B,[F,(e(!0),s(n,null,r(i(l),t=>(e(),s("option",{key:t.code},c(t.code)+" - "+c(t.currency),1))),128))])])]),K],64))}};export{z as default};
