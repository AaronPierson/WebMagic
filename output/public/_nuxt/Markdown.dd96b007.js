import s from"./ContentSlot.c5d4bb36.js";import{m as o,q as m,z as p,I as u}from"./entry.f7006fcd.js";import"./utils.a59ee949.js";import"./preview.4f8c384d.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:r}=m(),a=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:r,tags:a,between:n,parent:e}}});export{d as default};