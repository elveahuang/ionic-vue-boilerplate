"use strict";(self["webpackChunkionic_vue_capacitor_sample"]=self["webpackChunkionic_vue_capacitor_sample"]||[]).push([[544],{544:function(e,t,o){o.r(t),o.d(t,{startFocusVisible:function(){return r}});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s="ion-focused",n="ion-focusable",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=e=>{let t=[],o=!0;const r=e?e.shadowRoot:document,i=e||document.body,a=e=>{t.forEach((e=>e.classList.remove(s))),e.forEach((e=>e.classList.add(s))),t=e},d=()=>{o=!1,a([])},u=e=>{o=c.includes(e.key),o||a([])},v=e=>{if(o&&e.composedPath){const t=e.composedPath().filter((e=>!!e.classList&&e.classList.contains(n)));a(t)}},f=()=>{r.activeElement===i&&a([])};r.addEventListener("keydown",u),r.addEventListener("focusin",v),r.addEventListener("focusout",f),r.addEventListener("touchstart",d),r.addEventListener("mousedown",d);const m=()=>{r.removeEventListener("keydown",u),r.removeEventListener("focusin",v),r.removeEventListener("focusout",f),r.removeEventListener("touchstart",d),r.removeEventListener("mousedown",d)};return{destroy:m,setFocus:a}}}}]);
//# sourceMappingURL=544.0104e661.js.map