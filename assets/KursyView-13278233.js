import{u as o}from"./useFetch-03fddda5.js";import{o as l,b as s,e as t,t as e,u as r,F as u,m as c}from"./@vue-86055dd2.js";const d={class:"p-2"},i={class:"table w-50"},p=t("thead",null,[t("tr",null,[t("th",null,"Waluta"),t("th",null,"Kod"),t("th",null,"Kurs")])],-1),B={__name:"KursyView",setup(_){const{data:n,fetchData:h}=o("https://api.nbp.pl/api/exchangerates/tables/a/");return(m,f)=>(l(),s(u,null,[t("h1",d,"Tabela kursów NBP z dnia "+e(r(n)[0].effectiveDate),1),t("table",i,[p,t("tbody",null,[(l(!0),s(u,null,c(r(n)[0].rates,a=>(l(),s("tr",null,[t("td",null,e(a.currency),1),t("td",null,e(a.code),1),t("td",null,e(a.mid),1)]))),256))])])],64))}};export{B as default};