import{_ as d}from"./nuxt-link.35e991a5.js";import{z as c,c as u,a as e,b as t,w as l,a4 as i,a5 as m,P as p,F as v,o as f,d as n}from"./entry.aa9efcd4.js";const h=()=>c("color-mode").value;const g={class:"navbar"},k={class:"nav-container"},M={class:"logo"},S={class:"nav-menu"},x=e("option",{value:"system"},"System",-1),y=e("option",{value:"light"},"Light",-1),L=e("option",{value:"dark"},"Dark",-1),N=[x,y,L],$={__name:"default",setup(V){const r=h();return console.log(r.preference),(s,a)=>{const o=d;return f(),u(v,null,[e("header",g,[e("nav",k,[e("div",M,[t(o,{to:"/"})]),e("ul",S,[e("li",null,[t(o,{to:"/"},{default:l(()=>[n("Home")]),_:1})]),e("li",null,[t(o,{to:"/lore"},{default:l(()=>[n("Lore")]),_:1})]),e("li",null,[t(o,{to:"/log"},{default:l(()=>[n("Adventure Log")]),_:1})]),e("li",null,[t(o,{to:"/raven"},{default:l(()=>[n("Send a raven")]),_:1})])])]),e("div",null,[i(e("select",{"onUpdate:modelValue":a[0]||(a[0]=_=>s.$colorMode.preference=_)},N,512),[[m,s.$colorMode.preference]])])]),e("main",null,[p(s.$slots,"default")])],64)}}};export{$ as default};
