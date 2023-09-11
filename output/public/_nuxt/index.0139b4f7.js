import{_ as l,o as _,c as h,h as b,a as e,b as n,w as d,d as i,p as w,e as I}from"./entry.bb423999.js";import{_ as k}from"./Social.fa62b5fd.js";import{_ as $}from"./nuxt-link.77caaa12.js";import{_ as S}from"./Blog.4e0c930a.js";import{_ as A}from"./Jobs.486e1593.js";import"./Icon.3689ea1e.js";import"./config.c6547896.js";import"./query.6e6b5135.js";import"./preview.55c37e75.js";import"./utils.70fe8d08.js";const T={props:{text:{type:String,required:!0},typingSpeed:{type:Number,required:!1,default:50}},mounted(){const o=document.getElementById("animated-text"),a=this.text,c=this.typingSpeed;let s=0;const r=()=>{s<a.length&&(o.textContent+=a.charAt(s),s++,setTimeout(r,c))};r()}},j={id:"animated-text"};function B(o,a,c,s,r,m){return _(),h("p",j)}const p=l(T,[["render",B]]);const C={components:{aniText:p}},t=o=>(w("data-v-61dc0803"),o=o(),I(),o),P={class:"landing-page"},q=t(()=>e("h1",null," Aaron Pierson ",-1)),E={class:"introduction"},L=t(()=>e("h4",null,"Greetings, Travelers of the Digital Realm!",-1)),N=t(()=>e("p",null," I am Aaron Pierson, known across the enchanted lands as the Web Enchanter 🌐🧙‍♂️. ",-1)),D=t(()=>e("p",null," 📖✨In my enchanted grimoire, I have inscribed the secrets of crafting both the front-end and back-end realms. But my journey doesn't end there! I've explored the lands of Android, wielding the Kotlin language to craft powerful mobile incantations. I've ventured into the world of C#, conjuring desktop enchantments for your devices. ",-1)),M=t(()=>e("p",null," 🏰🔐Along this quest, I've ventured into the treacherous territories of database design, conquering MySQL, PostgreSQL. I've forged alliances with DevOps and embraced the sacred rituals of CI/CD with old man jenkins for deployment. And as a guardian of knowledge, I've delved into the secrets of server sorcery, mastering the art of deploying and securing web realms. I've even built my own fortress of digital solitude to protect my creations. ",-1)),V={class:"chapters"},W={class:"chapter"},J=t(()=>e("h2",{class:"chapter-title"},"Lore",-1)),Q=t(()=>e("p",{class:"chapter-description"}," Behold, the ancient chronicles penned by scholars and bards, recounting the tales of webs spun and codes written. ",-1)),R={class:"chapter"},G=t(()=>e("h2",{class:"chapter-title"},"Adventure's Log",-1)),H=t(()=>e("p",{class:"chapter-description"}," Dive into my web development journey through blog posts and tales from the digital realm. ",-1)),K={class:"chapter"},O=t(()=>e("h2",{class:"chapter-title"},"Achievements",-1)),z=t(()=>e("p",{class:"chapter-description"}," Explore the magical artifacts I've crafted in the web development realm, each project a testament to my skills. ",-1));function F(o,a,c,s,r,m){const u=p,f=k,g=b("P"),v=$,y=S,x=A;return _(),h("div",P,[q,e("div",E,[e("h3",null,[n(u,{text:"Work, study, and ideas..."})]),L,n(f),N,n(g,null,{default:d(()=>[i(" 🔮🌠 My journey through the mystical realms of web development has been nothing short of magical. With a trusty staff in one hand and a keyboard in the other, I have ventured through the ever-evolving landscapes of code, harnessing the arcane powers of PHP, C#, and JavaScript. "),D,M,i(" 💫 So, fellow adventurers, whether you seek to embark on a new web journey or are in need of a seasoned web enchanter to breathe life into your digital dreams, know that I stand ready to cast the spells of web enchantment upon your quest. Together, we shall forge a legacy in the digital tapestry of existence! 💫 ")]),_:1})]),e("div",V,[e("div",W,[J,Q,n(v,{to:"/lore"},{default:d(()=>[i("Read More")]),_:1})]),e("div",R,[G,H,n(y,{limit:3})]),e("div",K,[O,z,n(x)])])])}const re=l(C,[["render",F],["__scopeId","data-v-61dc0803"]]);export{re as default};
