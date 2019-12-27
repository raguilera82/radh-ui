import{r as o,e as t,f as i,h as s,H as e,c as r}from"./p-9176a1c1.js";import{B as p,p as n,a,d as c,e as l}from"./p-b3627f37.js";import{g as h}from"./p-f1a4df63.js";import"./p-251a23b9.js";import{c as v}from"./p-4a45b1e6.js";import{a as m,d}from"./p-8a939906.js";import{d as f}from"./p-d4b84a31.js";const b=(o,t)=>{let i="top",s="left";const e=o.querySelector(".popover-content"),r=e.getBoundingClientRect(),p=r.width,n=r.height,a=o.ownerDocument.defaultView.innerWidth,c=o.ownerDocument.defaultView.innerHeight,l=t&&t.target&&t.target.getBoundingClientRect(),h=null!=l&&"top"in l?l.top:c/2-n/2,m=null!=l&&"left"in l?l.left:a/2,d=l&&l.width||0,f=l&&l.height||0,b=o.querySelector(".popover-arrow"),D=b.getBoundingClientRect(),P=D.width,w=D.height;null==l&&(b.style.display="none");const y={top:h+f,left:m+d/2-P/2},x={top:h+f+(w-1),left:m+d/2-p/2};let j=!1,W=!1;x.left<u+25?(j=!0,x.left=u):p+u+x.left+25>a&&(W=!0,x.left=a-p-u,s="right"),h+f+n>c&&h-n>0?(y.top=h-(w+1),x.top=h-n-(w-1),o.className=o.className+" popover-bottom",i="bottom"):h+f+n>c&&(e.style.bottom=u+"%"),b.style.top=y.top+"px",b.style.left=y.left+"px",e.style.top=x.top+"px",e.style.left=x.left+"px",j&&(e.style.left=`calc(${x.left}px + var(--ion-safe-area-left, 0px))`),W&&(e.style.left=`calc(${x.left}px - var(--ion-safe-area-right, 0px))`),e.style.transformOrigin=i+" "+s;const E=v(),g=v(),I=v();return g.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,.08),I.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),E.addElement(o).easing("ease").duration(100).addAnimation([g,I])},u=5,D=o=>{const t=v(),i=v(),s=v();return i.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.08,0),s.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(o).easing("ease").duration(500).addAnimation([i,s])},P=(o,t)=>{const i=o.ownerDocument,s="rtl"===i.dir;let e="top",r=s?"right":"left";const p=o.querySelector(".popover-content"),n=p.getBoundingClientRect(),a=n.width,c=n.height,l=i.defaultView.innerWidth,h=i.defaultView.innerHeight,m=t&&t.target&&t.target.getBoundingClientRect(),d=null!=m&&"bottom"in m?m.bottom:h/2-c/2,f=m&&m.height||0,b={top:d,left:null!=m&&"left"in m?s?m.left-a+m.width:m.left:l/2-a/2};b.left<12?(b.left=12,r="left"):a+12+b.left>l&&(b.left=l-a-12,r="right"),d+f+c>h&&d-c>0?(b.top=d-c-f,o.className=o.className+" popover-bottom",e="bottom"):d+f+c>h&&(p.style.bottom="12px");const u=v(),D=v(),P=v(),w=v(),y=v();return D.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),P.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),w.addElement(p).beforeStyles({top:`${b.top}px`,left:`${b.left}px`,"transform-origin":`${e} ${r}`}).fromTo("transform","scale(0.001)","scale(1)"),y.addElement(o.querySelector(".popover-viewport")).fromTo("opacity",.01,1),u.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([D,P,w,y])},w=o=>{const t=v(),i=v(),s=v();return i.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.32,0),s.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(o).easing("ease").duration(500).addAnimation([i,s])},y=class{constructor(s){o(this,s),this.presented=!1,this.mode=t(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,p)},this.onLifecycle=o=>{const t=this.usersElement,i=x[o.type];if(t&&i){const s=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:o.detail});t.dispatchEvent(s)}},n(this.el),this.didPresent=i(this,"ionPopoverDidPresent",7),this.willPresent=i(this,"ionPopoverWillPresent",7),this.willDismiss=i(this,"ionPopoverWillDismiss",7),this.didDismiss=i(this,"ionPopoverDidDismiss",7)}async present(){if(this.presented)return;const o=this.el.querySelector(".popover-content");if(!o)throw new Error("container is undefined");const t=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await m(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],t),await f(this.usersElement),a(this,"popoverEnter",b,P,this.event)}async dismiss(o,t){const i=await c(this,o,t,"popoverLeave",D,w,this.event);return i&&await d(this.delegate,this.usersElement),i}onDidDismiss(){return l(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return l(this.el,"ionPopoverWillDismiss")}render(){const o=t(this),{onLifecycle:i}=this;return s(e,{"aria-modal":"true","no-router":!0,style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({},h(this.cssClass)),{[o]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:i,onIonPopoverWillPresent:i,onIonPopoverWillDismiss:i,onIonPopoverDidDismiss:i,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},s("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),s("div",{class:"popover-wrapper"},s("div",{class:"popover-arrow"}),s("div",{class:"popover-content"})))}get el(){return r(this)}static get style(){return".sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:\"\";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}"}},x={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};export{y as ion_popover};