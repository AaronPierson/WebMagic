import{E as U,L as R,I as F,q as L,m as M,Q as j,P as D,n as x}from"./entry.bb423999.js";const w=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function H(r,s){if(typeof r!="string")throw new TypeError("argument str must be a string");const n={},t=(s||{}).decode||J;let o=0;for(;o<r.length;){const i=r.indexOf("=",o);if(i===-1)break;let c=r.indexOf(";",o);if(c===-1)c=r.length;else if(c<i){o=r.lastIndexOf(";",i-1)+1;continue}const a=r.slice(o,i).trim();if(n[a]===void 0){let u=r.slice(i+1,c).trim();u.codePointAt(0)===34&&(u=u.slice(1,-1)),n[a]=q(u,t)}o=c+1}return n}function k(r,s,n){const e=n||{},t=e.encode||W;if(typeof t!="function")throw new TypeError("option encode is invalid");if(!w.test(r))throw new TypeError("argument name is invalid");const o=t(s);if(o&&!w.test(o))throw new TypeError("argument val is invalid");let i=r+"="+o;if(e.maxAge!==void 0&&e.maxAge!==null){const c=e.maxAge-0;if(Number.isNaN(c)||!Number.isFinite(c))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(c)}if(e.domain){if(!w.test(e.domain))throw new TypeError("option domain is invalid");i+="; Domain="+e.domain}if(e.path){if(!w.test(e.path))throw new TypeError("option path is invalid");i+="; Path="+e.path}if(e.expires){if(!K(e.expires)||Number.isNaN(e.expires.valueOf()))throw new TypeError("option expires is invalid");i+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(i+="; HttpOnly"),e.secure&&(i+="; Secure"),e.priority)switch(typeof e.priority=="string"?e.priority.toLowerCase():e.priority){case"low":i+="; Priority=Low";break;case"medium":i+="; Priority=Medium";break;case"high":i+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(e.sameSite)switch(typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i}function K(r){return Object.prototype.toString.call(r)==="[object Date]"||r instanceof Date}function q(r,s){try{return s(r)}catch{return r}}function J(r){return r.includes("%")?decodeURIComponent(r):r}function W(r){return encodeURIComponent(r)}const B=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function S(r,s){s?s={...B,...s}:s=B;const n=C(s);return n.dispatch(r),n.toString()}const V=Object.freeze(["prototype","__proto__","constructor"]);function C(r){let s="",n=new Map;const e=t=>{s+=t};return{toString(){return s},getContext(){return n},dispatch(t){return r.replacer&&(t=r.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const o=Object.prototype.toString.call(t);let i="";const c=o.length;c<10?i="unknown:["+o+"]":i=o.slice(8,c-1),i=i.toLowerCase();let a=null;if((a=n.get(t))===void 0)n.set(t,n.size);else return this.dispatch("[CIRCULAR:"+a+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](t):r.ignoreUnknown||this.unkown(t,i);else{let u=Object.keys(t);r.unorderedObjects&&(u=u.sort());let f=[];r.respectType!==!1&&!v(t)&&(f=V),r.excludeKeys&&(u=u.filter(l=>!r.excludeKeys(l)),f=f.filter(l=>!r.excludeKeys(l))),e("object:"+(u.length+f.length)+":");const h=l=>{this.dispatch(l),e(":"),r.excludeValues||this.dispatch(t[l]),e(",")};for(const l of u)h(l);for(const l of f)h(l)}},array(t,o){if(o=o===void 0?r.unorderedArrays!==!1:o,e("array:"+t.length+":"),!o||t.length<=1){for(const a of t)this.dispatch(a);return}const i=new Map,c=t.map(a=>{const u=C(r);u.dispatch(a);for(const[f,h]of u.getContext())i.set(f,h);return u.toString()});return n=i,c.sort(),this.array(c,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,o){if(e(o),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),v(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const o=[...t];return this.array(o,r.unorderedSets!==!1)},set(t){e("set:");const o=[...t];return this.array(o,r.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const T="[native code] }",Q=T.length;function v(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-Q)===T}class d{constructor(s,n){s=this.words=s||[],this.sigBytes=n===void 0?s.length*4:n}toString(s){return(s||$).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let n=0;n<s.sigBytes;n++){const e=s.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=e<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<s.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=s.words[n>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new d([...this.words])}}const $={stringify(r){const s=[];for(let n=0;n<r.sigBytes;n++){const e=r.words[n>>>2]>>>24-n%4*8&255;s.push((e>>>4).toString(16),(e&15).toString(16))}return s.join("")}},G={stringify(r){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,o=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,i=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,c=t<<16|o<<8|i;for(let a=0;a<4&&e*8+a*6<r.sigBytes*8;a++)n.push(s.charAt(c>>>6*(3-a)&63))}return n.join("")}},X={parse(r){const s=r.length,n=[];for(let e=0;e<s;e++)n[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new d(n,s)}},Y={parse(r){return X.parse(unescape(encodeURIComponent(r)))}};class Z{constructor(){this._data=new d,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new d,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=Y.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,n){}_process(s){let n,e=this._data.sigBytes/(this.blockSize*4);s?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,o=Math.min(t*4,this._data.sigBytes);if(t){for(let i=0;i<t;i+=this.blockSize)this._doProcessBlock(this._data.words,i);n=this._data.words.splice(0,t),this._data.sigBytes-=o}return new d(n,o)}}class ee extends Z{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const _=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],te=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],p=[];class re extends ee{constructor(){super(...arguments),this._hash=new d([..._])}reset(){super.reset(),this._hash=new d([..._])}_doProcessBlock(s,n){const e=this._hash.words;let t=e[0],o=e[1],i=e[2],c=e[3],a=e[4],u=e[5],f=e[6],h=e[7];for(let l=0;l<64;l++){if(l<16)p[l]=s[n+l]|0;else{const y=p[l-15],N=(y<<25|y>>>7)^(y<<14|y>>>18)^y>>>3,g=p[l-2],I=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;p[l]=N+p[l-7]+I+p[l-16]}const P=a&u^~a&f,z=t&o^t&i^o&i,A=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),E=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),b=h+E+P+te[l]+p[l],O=A+z;h=f,f=u,u=a,a=c+b|0,c=i,i=o,o=t,t=b+O|0}e[0]=e[0]+t|0,e[1]=e[1]+o|0,e[2]=e[2]+i|0,e[3]=e[3]+c|0,e[4]=e[4]+a|0,e[5]=e[5]+u|0,e[6]=e[6]+f|0,e[7]=e[7]+h|0}finalize(s){super.finalize(s);const n=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(e+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ne(r){return new re().finalize(r).toString(G)}function le(r,s={}){const n=typeof r=="string"?r:S(r,s);return ne(n).slice(0,10)}function se(r,s,n={}){return r===s||S(r,n)===S(s,n)}const ie={path:"/",watch:!0,decode:r=>j(decodeURIComponent(r)),encode:r=>encodeURIComponent(typeof r=="string"?r:JSON.stringify(r))};function m(r,s){var o;const n={...ie,...s},e=oe(n)||{},t=U(e[r]??((o=n.default)==null?void 0:o.call(n)));{const i=typeof BroadcastChannel>"u"?null:new BroadcastChannel(`nuxt:cookies:${r}`);R()&&F(()=>{i==null||i.close()});const c=()=>{ce(r,t.value,n),i==null||i.postMessage(D(t.value))};let a=!1;i&&(i.onmessage=u=>{a=!0,t.value=u.data,L(()=>{a=!1})}),n.watch?M(t,(u,f)=>{a||se(u,f)||c()},{deep:n.watch!=="shallow"}):c()}return t}function oe(r={}){return H(document.cookie,r)}function ae(r,s,n={}){return s==null?k(r,s,{...n,maxAge:-1}):k(r,s,n)}function ce(r,s,n={}){document.cookie=ae(r,s,n)}const fe=()=>({isEnabled:()=>{const e=x().query;return Object.prototype.hasOwnProperty.call(e,"preview")&&!e.preview?!1:!!(e.preview||m("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>m("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:e=>{m("previewToken").value=e,x().query.preview=e||"",e?sessionStorage.setItem("previewToken",e):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{le as h,fe as u};
