import{k as y}from"./helpers-8361e1fa.js";import{i as D}from"./dir-4925c6c0.js";import{createGesture as M}from"./index2-c52f6059.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const x=(s,h,m,p,g)=>{const r=s.ownerDocument.defaultView,c=D(s),X=t=>{const{startX:e}=t;return c?e>=r.innerWidth-50:e<=50},a=t=>c?-t.deltaX:t.deltaX,f=t=>c?-t.velocityX:t.velocityX;return M({el:s,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>X(t)&&h(),onStart:m,onMove:t=>{const e=a(t)/r.innerWidth;p(e)},onEnd:t=>{const n=a(t),e=r.innerWidth,o=n/e,i=f(t),w=e/2,l=i>=0&&(i>.2||n>w),u=(l?1-o:o)*e;let d=0;if(u>5){const v=u/Math.abs(i);d=Math.min(v,540)}g(l,o<=0?.01:y(0,o,.9999),d)}})};export{x as createSwipeBackGesture};
