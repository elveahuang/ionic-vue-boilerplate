import{f as i}from"./helpers-8361e1fa.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const N=(o,...t)=>console.warn(`[Ionic Warning]: ${o}`,...t),E=(o,...t)=>console.error(`[Ionic Error]: ${o}`,...t),a=(o,...t)=>console.error(`<${o.tagName.toLowerCase()}> must be used inside ${t.join(" or ")}.`);/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const u="ION-CONTENT",s="ion-content",c=".ion-content-scroll-host",l=`${s}, ${c}`,n=o=>o.tagName===u,f=async o=>n(o)?(await new Promise(t=>i(o,t)),o.getScrollElement()):o,m=o=>{const t=o.querySelector(c);return t||o.querySelector(l)},p=o=>o.closest(l),I=(o,t)=>n(o)?o.scrollToTop(t):Promise.resolve(o.scrollTo({top:0,left:0,behavior:t>0?"smooth":"auto"})),O=(o,t,r,e)=>n(o)?o.scrollByPoint(t,r,e):Promise.resolve(o.scrollBy({top:r,left:t,behavior:e>0?"smooth":"auto"})),S=o=>a(o,s),_=o=>{if(n(o)){const t=o,r=t.scrollY;return t.scrollY=!1,r}else return o.style.setProperty("overflow","hidden"),!0},y=(o,t)=>{n(o)?o.scrollY=t:o.style.removeProperty("overflow")};export{s as I,E as a,S as b,p as c,_ as d,c as e,m as f,f as g,O as h,n as i,N as p,y as r,I as s};
