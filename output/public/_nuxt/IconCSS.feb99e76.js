import{l,a3 as _,x as o,o as m,c as f,$ as d,_ as x}from"./entry.b7b3d36f.js";import{u as S}from"./config.ea6e09e0.js";const g=l({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(r){const n=r;_(e=>({"17e81e26":u.value}));const t=S(),p=o(()=>{var e;return((((e=t.nuxtIcon)==null?void 0:e.aliases)||{})[n.name]||n.name).replace(/^i-/,"")}),u=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),a=o(()=>{var s,c,i;if(!n.size&&typeof((s=t.nuxtIcon)==null?void 0:s.size)=="boolean"&&!((c=t.nuxtIcon)!=null&&c.size))return;const e=n.size||((i=t.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,s)=>(m(),f("span",{style:d({width:a.value,height:a.value})},null,4))}});const y=x(g,[["__scopeId","data-v-2717c442"]]);export{y as default};
