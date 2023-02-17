import{r as i,w as a}from"./index-9e18c2e1.js";import{c,s as m}from"./index9-ad90c0d2.js";import{f as d}from"./helpers-8361e1fa.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const f=()=>{const e=window;e.addEventListener("statusTap",()=>{i(()=>{const n=e.innerWidth,s=e.innerHeight,o=document.elementFromPoint(n/2,s/2);if(!o)return;const t=c(o);t&&new Promise(r=>d(t,r)).then(()=>{a(async()=>{t.style.setProperty("--overflow","hidden"),await m(t,300),t.style.removeProperty("--overflow")})})})})};export{f as startStatusTap};
