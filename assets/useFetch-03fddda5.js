import{r as n,q as l}from"./@vue-86055dd2.js";function i(r,s=!0,o={}){const t=n({data:null,error:null,loading:!1}),e=async()=>{t.loading=!0;try{const a=await fetch(r,o);a.ok?t.data=await a.json():t.error=Error(`${a.status} ${a.statusText}`)}catch(a){t.error=a}finally{t.loading=!1}};return s&&e(),{...l(t),fetchData:e}}export{i as u};