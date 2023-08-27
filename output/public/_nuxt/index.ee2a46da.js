import{_ as d,o as l,c as h,f as g,a as e,b as r,w as y,g as x,d as c,p as b,e as w}from"./entry.92c36b14.js";import{_ as I}from"./Social.e05a827f.js";import{_ as S}from"./Jobs.e3598283.js";import"./Icon.2ecf88ed.js";import"./config.08ad3e8e.js";const k={props:{text:{type:String,required:!0},typingSpeed:{type:Number,required:!1,default:50}},mounted(){const t=document.getElementById("animated-text"),a=this.text,i=this.typingSpeed;let o=0;const s=()=>{o<a.length&&(t.textContent+=a.charAt(o),o++,setTimeout(s,i))};s()}},$={id:"animated-text"};function A(t,a,i,o,s,_){return l(),h("p",$)}const p=d(k,[["render",A]]);const T={components:{aniText:p}},n=t=>(b("data-v-04e657ae"),t=t(),w(),t),j={class:"landing-page"},C=n(()=>e("h1",null," Aaron Pierson ",-1)),P={class:"introduction"},B=n(()=>e("p",null," 🌐 I am Aaron Pierson, known across the enchanted lands as the Web Enchanter. ",-1)),q=n(()=>e("p",null," 📖✨In my enchanted grimoire, I have inscribed the secrets of crafting both the front-end and back-end realms. But my journey doesn't end there! I've explored the lands of Android, wielding the Kotlin language to craft powerful mobile incantations. I've ventured into the world of C#, conjuring desktop enchantments for your devices. ",-1)),E=n(()=>e("p",null," 🏰🔐Along this quest, I've ventured into the treacherous territories of database design, conquering MySQL, PostgreSQL. I've forged alliances with DevOps and embraced the sacred rituals of CI/CD with old man jenkins for deployment. And as a guardian of knowledge, I've delved into the secrets of server sorcery, mastering the art of deploying and securing web realms. I've even built my own fortress of digital solitude to protect my creations. ",-1)),N={class:"chapters"},D=x('<div class="chapter" data-v-04e657ae><h2 class="chapter-title" data-v-04e657ae>Lore</h2><p class="chapter-description" data-v-04e657ae> Behold, the ancient chronicles penned by scholars and bards, recounting the tales of webs spun and codes written. </p></div><div class="chapter" data-v-04e657ae><h2 class="chapter-title" data-v-04e657ae>Adventure&#39;s Log</h2><p class="chapter-description" data-v-04e657ae> Dive into my web development journey through blog posts and tales from the digital realm. </p></div>',2),L={class:"chapter"},V=n(()=>e("h2",{class:"chapter-title"},"Achievements",-1)),J=n(()=>e("p",{class:"chapter-description"}," Explore the magical artifacts I've crafted in the web development realm, each project a testament to my skills. ",-1));function M(t,a,i,o,s,_){const u=p,m=I,f=g("P"),v=S;return l(),h("div",j,[C,e("div",P,[e("p",null,[e("strong",null,[r(u,{text:"Greetings, Travelers of the Digital Realm!"})])]),r(m),B,r(f,null,{default:y(()=>[c(" 🔮🌠 My journey through the mystical realms of web development has been nothing short of magical. With a trusty staff in one hand and a keyboard in the other, I have ventured through the ever-evolving landscapes of code, harnessing the arcane powers of PHP, C#, and JavaScript. "),q,E,c(" 💫 So, fellow adventurers, whether you seek to embark on a new web journey or are in need of a seasoned web enchanter to breathe life into your digital dreams, know that I stand ready to cast the spells of web enchantment upon your quest. Together, we shall forge a legacy in the digital tapestry of existence! 💫 ")]),_:1})]),e("div",N,[D,e("div",L,[V,J,r(v)])])])}const O=d(T,[["render",M],["__scopeId","data-v-04e657ae"]]);export{O as default};