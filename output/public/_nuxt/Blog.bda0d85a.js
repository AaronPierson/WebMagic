import{_ as f}from"./nuxt-link.97a6fd5c.js";import{u as y,q as g}from"./query.87e93883.js";import{_ as h,i as k,o as e,c as a,a as o,F as _,r as c,j as v,t as n,b as N,w,d as B}from"./entry.5ee1c7d8.js";const C={class:"portfolio-grid"},V={__name:"Blog",props:{limit:Number},async setup(i){let s,r;const l=i,{data:d}=([s,r]=k(()=>y("blog",()=>g("blog").only(["title","date","image","tags","excerpt","_path"]).limit(l.limit).find())),s=await s,r(),s);return(q,A)=>{const p=f;return e(),a("main",null,[o("div",C,[(e(!0),a(_,null,c(v(d),(t,u)=>(e(),a("div",{key:u,class:"portfolio-card"},[o("h3",null,n(t.title),1),o("p",null,n(t.excerpt),1),o("p",null,n(t.date),1),(e(!0),a(_,null,c(t.tags,(m,x)=>(e(),a("div",{key:x,class:"tag"},n(m),1))),128)),N(p,{to:t._path},{default:w(()=>[B("Read More")]),_:2},1032,["to"])]))),128))])])}}},j=h(V,[["__scopeId","data-v-e843c1dd"]]);export{j as _};