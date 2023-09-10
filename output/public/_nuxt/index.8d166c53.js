import{_ as y}from"./Social.83843753.js";import{_ as b}from"./nuxt-link.791d809d.js";import{_ as x}from"./Blog.f8ceeb7e.js";import{_ as w}from"./Jobs.90f32d24.js";import{_ as l,o as h,c as _,h as I,a as e,b as s,w as d,d as c,p as k,e as S}from"./entry.c46bd1cc.js";import"./Icon.205fd04f.js";import"./config.c524e746.js";import"./query.8cdb6c2b.js";import"./preview.56f65349.js";import"./utils.852dd208.js";const $={props:{text:{type:String,required:!0},typingSpeed:{type:Number,required:!1,default:50}},mounted(){const o=document.getElementById("animated-text"),a=this.text,i=this.typingSpeed;let n=0;const r=()=>{n<a.length&&(o.textContent+=a.charAt(n),n++,setTimeout(r,i))};r()}},A={id:"animated-text"};function j(o,a,i,n,r,p){return h(),_("p",A)}const B=l($,[["render",j]]);const C={components:{aniText:B}},t=o=>(k("data-v-829470b4"),o=o(),S(),o),P={class:"landing-page"},T=t(()=>e("h1",null," Aaron Pierson ",-1)),q={class:"introduction"},E=t(()=>e("p",null,[e("h3",null,"Work, study, and ideas.."),e("h4",null,"Greetings, Travelers of the Digital Realm!")],-1)),L=t(()=>e("p",null," 🌐 I am Aaron Pierson, known across the enchanted lands as the Web Enchanter. ",-1)),N=t(()=>e("p",null," 📖✨In my enchanted grimoire, I have inscribed the secrets of crafting both the front-end and back-end realms. But my journey doesn't end there! I've explored the lands of Android, wielding the Kotlin language to craft powerful mobile incantations. I've ventured into the world of C#, conjuring desktop enchantments for your devices. ",-1)),D=t(()=>e("p",null," 🏰🔐Along this quest, I've ventured into the treacherous territories of database design, conquering MySQL, PostgreSQL. I've forged alliances with DevOps and embraced the sacred rituals of CI/CD with old man jenkins for deployment. And as a guardian of knowledge, I've delved into the secrets of server sorcery, mastering the art of deploying and securing web realms. I've even built my own fortress of digital solitude to protect my creations. ",-1)),M={class:"chapters"},V={class:"chapter"},W=t(()=>e("h2",{class:"chapter-title"},"Lore",-1)),J=t(()=>e("p",{class:"chapter-description"}," Behold, the ancient chronicles penned by scholars and bards, recounting the tales of webs spun and codes written. ",-1)),Q={class:"chapter"},R=t(()=>e("h2",{class:"chapter-title"},"Adventure's Log",-1)),G=t(()=>e("p",{class:"chapter-description"}," Dive into my web development journey through blog posts and tales from the digital realm. ",-1)),H={class:"chapter"},K=t(()=>e("h2",{class:"chapter-title"},"Achievements",-1)),O=t(()=>e("p",{class:"chapter-description"}," Explore the magical artifacts I've crafted in the web development realm, each project a testament to my skills. ",-1));function z(o,a,i,n,r,p){const m=y,u=I("P"),f=b,g=x,v=w;return h(),_("div",P,[T,e("div",q,[E,s(m),L,s(u,null,{default:d(()=>[c(" 🔮🌠 My journey through the mystical realms of web development has been nothing short of magical. With a trusty staff in one hand and a keyboard in the other, I have ventured through the ever-evolving landscapes of code, harnessing the arcane powers of PHP, C#, and JavaScript. "),N,D,c(" 💫 So, fellow adventurers, whether you seek to embark on a new web journey or are in need of a seasoned web enchanter to breathe life into your digital dreams, know that I stand ready to cast the spells of web enchantment upon your quest. Together, we shall forge a legacy in the digital tapestry of existence! 💫 ")]),_:1})]),e("div",M,[e("div",V,[W,J,s(f,{to:"/lore"},{default:d(()=>[c("Read More")]),_:1})]),e("div",Q,[R,G,s(g,{limit:3})]),e("div",H,[K,O,s(v)])])])}const ae=l(C,[["render",z],["__scopeId","data-v-829470b4"]]);export{ae as default};