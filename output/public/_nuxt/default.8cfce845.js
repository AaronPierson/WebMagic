import{_ as p}from"./nuxt-link.84ca4baf.js";import{A as f,B as g,c as b,a as e,a4 as _,a5 as u,b as s,w as t,Z as d,i as r,Q as k,F as S,o as L,d as l}from"./entry.9a254915.js";const M=()=>f("color-mode").value;const y={class:"navbar"},B={class:"desktop-navbar"},A={class:"nav-container"},C=e("option",{value:"system"},"System",-1),V=e("option",{value:"light"},"Light",-1),$=e("option",{value:"dark"},"Dark",-1),N=[C,V,$],w={class:"logo"},D={class:"nav-menu"},x={class:"navbar-mobile"},F={class:"nav-container"},H=e("option",{value:"system"},"System",-1),U=e("option",{value:"light"},"Light",-1),z=e("option",{value:"dark"},"Dark",-1),E=[H,U,z],O={class:"logo"},Q={class:"nav-menu"},T=e("div",{class:"ham-line"},null,-1),Z=e("div",{class:"ham-line"},null,-1),j=e("div",{class:"ham-line"},null,-1),q=[T,Z,j],G={class:"parchment-background"},P={__name:"default",setup(I){const v=M();console.log(v.preference);const n=g(!1),h=()=>{n.value=!n.value},m=()=>{n.value=!1};return(a,c)=>{const o=p;return L(),b(S,null,[e("header",y,[e("div",B,[e("nav",A,[_(e("select",{"onUpdate:modelValue":c[0]||(c[0]=i=>a.$colorMode.preference=i)},N,512),[[u,a.$colorMode.preference]]),e("div",w,[s(o,{to:"/"})]),e("ul",D,[e("li",null,[s(o,{to:"/"},{default:t(()=>[l("Home")]),_:1})]),e("li",null,[s(o,{to:"/lore"},{default:t(()=>[l("Lore")]),_:1})]),e("li",null,[s(o,{to:"/blog"},{default:t(()=>[l("Adventure Log")]),_:1})]),e("li",null,[s(o,{to:"/achievements"},{default:t(()=>[l("Scroll of Achievements")]),_:1})])])])]),e("div",x,[e("nav",F,[e("div",{class:d(["nav-sidebar",{open:r(n)}])},[_(e("select",{"onUpdate:modelValue":c[1]||(c[1]=i=>a.$colorMode.preference=i),class:"color-mode"},E,512),[[u,a.$colorMode.preference]]),e("div",O,[s(o,{to:"/"})]),e("ul",Q,[e("li",null,[s(o,{to:"/"},{default:t(()=>[l("Home")]),_:1})]),e("li",null,[s(o,{to:"/lore"},{default:t(()=>[l("Lore")]),_:1})]),e("li",null,[s(o,{to:"/blog"},{default:t(()=>[l("Adventure Log")]),_:1})]),e("li",null,[s(o,{to:"/achievements"},{default:t(()=>[l("Scroll of Achievements")]),_:1})])])],2),e("div",{class:d(["SideBarBackdrop",{open:r(n)}]),onClick:m},null,2),e("button",{class:d(["menu-button",{active:r(n)}]),onClick:h},q,2)])])]),e("main",G,[k(a.$slots,"default")])],64)}}};export{P as default};
