import{W as o,v as a}from"./entry.f71ad4f7.js";import{u as p}from"./preview.f3b2aa22.js";const y=["p","h1","h2","h3","h4","h5","h6","li"];function i(r,t){return r.type===t||typeof r.type=="object"&&r.type.tag===t||r.tag===t}function c(r){return i(r,"text")||typeof r.children=="string"}function l(r){var t;return Array.isArray(r.children)||typeof r.children=="string"?r.children:typeof((t=r.children)==null?void 0:t.default)=="function"?r.children.default():[]}function u(r){if(!r)return"";if(Array.isArray(r))return r.map(u).join("");if(c(r))return r.children||r.value;const t=l(r);return Array.isArray(t)?t.map(u).join(""):""}function s(r,t=["p"]){if(Array.isArray(r))return r.flatMap(n=>s(n,t));let e=r;return t.some(n=>n==="*"||i(r,n))&&(e=l(r)||r,!Array.isArray(e)&&y.some(n=>i(r,n))&&(e=[e])),e}function f(r,t=["p"]){return r=Array.isArray(r)?r:[r],t.length?r.flatMap(e=>f(s(e,[t[0]]),t.slice(1))).filter(e=>!(c(e)&&u(e).trim()==="")):r}const w=r=>o(r,a().public.content.api.baseURL),A=()=>({unwrap:s,flatUnwrap:f}),b=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxtjs.org/guide/writing/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},C=()=>{const{experimental:r}=a().public.content;return r.clientDB?!0:p().isEnabled()};export{A as a,C as s,b as u,w};
