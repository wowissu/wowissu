import{c as d,C as m,e as P,E as u,G as c,_,a as f,s as a,l as g,p as y}from"./q-546cf050.js";import{r as h}from"./q-4ccad70b.js";const I=()=>{const t=d(0),e=d(0),r=m(c(()=>_(()=>Promise.resolve().then(()=>v),void 0),"s_J0pV6E9Jjyc",[e,t])),o=P([]);return u(c(()=>_(()=>Promise.resolve().then(()=>v),void 0),"s_KDEcYnEPIfM",[e,t]),{strategy:"document-ready"}),u(c(()=>_(()=>Promise.resolve().then(()=>v),void 0),"s_eCazffAUCoY",[o,c(()=>_(()=>Promise.resolve().then(()=>v),void 0),"s_VBHeK8D8tsk",[o,e,t]),t])),f("svg",null,{width:t,height:e,viewBox:r,fill:"none",class:"bg-[#151515] w-full",xmlns:"http://www.w3.org/2000/svg"},o.map((s,n)=>f("rect",{x:a(s,"x"),y:a(s,"y"),width:a(s,"w"),height:a(s,"h")},{class:"fill-[#242424] strostroke-0"},`${n}`,1,n)),1,"ui_0")},W=()=>{const[t,e]=g();return`0 0 ${e.value} ${t.value}`},x=({cleanup:t})=>{const[e,r,o]=g();for(let s=0;s<=9;s++)r(s,o.value/32*h(32));const i=window.setInterval(()=>{e.forEach((s,n)=>{const l=s.x-5;l+s.w<0?r(n,o.value+h(50)):e[n]={...s,x:l}})},100);t(()=>{window.clearInterval(i)})},D=function(e,r=svgWidth.value){const[o,i,s]=g(),n=h(10)%4===0?90:50,l=20,w=r,E=i.value/6*h(5,1);o[e]={w:n,h:l,x:w,y:E}},H=()=>{const[t,e]=g();console.log(window.innerHeight),t.value=window.innerHeight/2,e.value=window.innerWidth},v=Object.freeze(Object.defineProperty({__proto__:null,_hW:y,s_J0pV6E9Jjyc:W,s_KDEcYnEPIfM:H,s_VBHeK8D8tsk:D,s_eCazffAUCoY:x,s_l0k81M6bpAY:I},Symbol.toStringTag,{value:"Module"}));export{y as _hW,W as s_J0pV6E9Jjyc,H as s_KDEcYnEPIfM,D as s_VBHeK8D8tsk,x as s_eCazffAUCoY,I as s_l0k81M6bpAY};
