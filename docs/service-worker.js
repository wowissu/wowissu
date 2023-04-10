/* Qwik Service Worker */
const appBundles=[["q-16ca7b2c.js",[14],["VkLNXphUh5s"]],["q-1a5124fe.js",[14],["foRSjkQluCc"]],["q-1ccd2b26.js",[14]],["q-1ddd3942.js",[14]],["q-45aab3b6.js",[]],["q-4e818101.js",[14],["A5bZC7WO00A"]],["q-6749c4b1.js",[14],["mBt9fIl89mc"]],["q-83420242.js",[11,14,22],["J4V2qsF7Yxo"]],["q-8d0998d4.js",[14,22],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-959e3c8a.js",[14]],["q-9be51f14.js",[14],["5Go3iiHXUB4","D04jAYuCnhM","LkCVrojX09Y","NFiLFugq5SA"]],["q-9d0d16dc.js",[14,22]],["q-a0897b2e.js",[14,22],["A7x0w7F9Kf8","HU55RV7VfPc","LQPhZ0qOjrk","PxZ05oEiFy8"]],["q-a4cb6148.js",[14,22],["zrbrqoaqXSY"]],["q-ae2cd0c7.js",[]],["q-b85b70e7.js",[14,22],["AKetNByE5TM","KnNE9eL0qfc"]],["q-df320fd1.js",[14,22]],["q-e118cf72.js",[14,16,22],["u0bwM0i5dA8"]],["q-e555c667.js",[14],["fle1EaVOup8","j3QmOu80S0I"]],["q-e661e5f3.js",[14],["xYL1qOwPyDI"]],["q-f3cfb394.js",[14,19],["dS6ak2MXU0o","kJCtKbc9zbk","UxlJFslpf0s","v2JLE7D93co"]],["q-fa3426f0.js",[14,22],["02wMImzEAbk","fX0bDjeJa0E","TxCFOy819ag"]],["q-fd50913b.js",[14],["3sccYCDd1Z0"]],["q-fe85b129.js",[14]]];
const libraryBundleIds=[21];
const linkBundles=[[/^\/wowissu\/$/,[16,0,23,19]],[/^\/wowissu\/demo\/flower\/?$/,[16,0,3,12]],[/^\/wowissu\/demo\/todolist\/?$/,[16,0,11,7]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
