import"./p-9176a1c1.js";import"./p-251a23b9.js";import{c as t}from"./p-4a45b1e6.js";import{g as a}from"./p-d4b84a31.js";const o=(o,r)=>{const i="back"===r.direction,s=r.leavingEl,p=a(r.enteringEl),e=p.querySelector("ion-toolbar"),n=t();if(n.addElement(p).fill("both").beforeRemoveClass("ion-page-invisible"),i?n.duration(r.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):n.duration(r.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),e){const a=t();a.addElement(e),n.addAnimation(a)}if(s&&i){n.duration(r.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const o=t();o.addElement(a(s)).afterStyles({display:"none"}).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),n.addAnimation(o)}return n};export{o as mdTransitionAnimation};