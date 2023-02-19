import{r as i,w as a}from"./index-efdaeff1.js";import{c,s as m}from"./index9-67dfd08f.js";import{f as d}from"./helpers-70dd449c.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const f=()=>{const e=window;e.addEventListener("statusTap",()=>{i(()=>{const n=e.innerWidth,s=e.innerHeight,o=document.elementFromPoint(n/2,s/2);if(!o)return;const t=c(o);t&&new Promise(r=>d(t,r)).then(()=>{a(async()=>{t.style.setProperty("--overflow","hidden"),await m(t,300),t.style.removeProperty("--overflow")})})})})};export{f as startStatusTap};
