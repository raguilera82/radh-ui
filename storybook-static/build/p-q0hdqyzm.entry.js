import{j as t,w as e,r as n,e as s,h as o,c as i,H as a}from"./p-9176a1c1.js";import{c as r}from"./p-251a23b9.js";const c=t=>{const e=document.querySelector(`${t}.ion-cloned-element`);if(null!==e)return e;const n=document.createElement(t);return n.classList.add("ion-cloned-element"),n.style.setProperty("display","none"),document.body.appendChild(n),n},l=t=>{if(!t)return;const e=t.querySelectorAll("ion-toolbar");return{el:t,toolbars:Array.from(e).map(t=>{const e=t.querySelector("ion-title");return{el:t,background:t.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:e,innerTitleEl:e?e.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(t.querySelectorAll("ion-buttons"))||[]}})||[[]]}},h=(t,e)=>{void 0===e?t.background.style.removeProperty("--opacity"):t.background.style.setProperty("--opacity",e.toString())},d=(t,n=!0)=>{e(()=>{n?t.el.classList.remove("header-collapse-condense-inactive"):t.el.classList.add("header-collapse-condense-inactive")})},p=class{constructor(t){n(this,t),this.collapsibleHeaderInitialized=!1,this.translucent=!1}async componentDidLoad(){await this.checkCollapsibleHeader()}async componentDidUpdate(){await this.checkCollapsibleHeader()}componentDidUnload(){this.destroyCollapsibleHeader()}async checkCollapsibleHeader(){const t="condense"===this.collapse,e=!(!t||"ios"!==s(this))&&t;if(!e&&this.collapsibleHeaderInitialized)this.destroyCollapsibleHeader();else if(e&&!this.collapsibleHeaderInitialized){const t=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),e=t?t.querySelector("ion-content"):null;await this.setupCollapsibleHeader(e,t)}}destroyCollapsibleHeader(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0)}async setupCollapsibleHeader(n,s){n&&s?(this.scrollEl=await n.getScrollElement(),t(()=>{const n=s.querySelectorAll("ion-header"),o=Array.from(n).find(t=>"condense"!==t.collapse);if(!o||!this.scrollEl)return;const i=l(o),a=l(this.el);i&&a&&(d(i,!1),t(()=>{this.intersectionObserver=new IntersectionObserver(t=>{((t,n,s)=>{e(()=>{((t,e)=>{if(!t[0].isIntersecting)return;const n=100*(1-t[0].intersectionRatio)/75;h(e.toolbars[0],1===n?void 0:n)})(t,n);const e=t[0],o=e.intersectionRect,i=o.width*o.height,a=0===i&&0==e.rootBounds.width*e.rootBounds.height,r=Math.abs(o.left-e.boundingClientRect.left),c=Math.abs(o.right-e.boundingClientRect.right);a||i>0&&(r>=5||c>=5)||(e.isIntersecting?(d(n,!1),d(s)):(0===o.x&&0===o.y||0!==o.width&&0!==o.height)&&(d(n),d(s,!1),h(n.toolbars[0],1)))})})(t,i,a)},{threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:`-${i.el.clientHeight}px 0px 0px 0px`}),this.intersectionObserver.observe(a.toolbars[0].el)}),this.contentScrollCallback=()=>{((n,s)=>{t(()=>{const t=r(1,1+-n.scrollTop/500,1.1);e(()=>{((t=[],e=1,n=!1)=>{t.forEach(t=>{const s=t.ionTitleEl,o=t.innerTitleEl;s&&"large"===s.size&&(o.style.transformOrigin="left center",o.style.transition=n?"all 0.2s ease-in-out":"",o.style.transform=`scale3d(${e}, ${e}, 1)`)})})(s.toolbars,t)})})})(this.scrollEl,a)},this.scrollEl.addEventListener("scroll",this.contentScrollCallback))}),e(()=>{c("ion-title"),c("ion-back-button")}),this.collapsibleHeaderInitialized=!0):console.error("ion-header requires a content to collapse, make sure there is an ion-content.")}render(){const t=s(this);return o(a,{role:"banner",class:{[t]:!0,[`header-${t}`]:!0,"header-translucent":this.translucent,[`header-collapse-${this.collapse||"none"}`]:!0,[`header-translucent-${t}`]:this.translucent}})}get el(){return i(this)}static get style(){return"ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-child{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{z-index:0}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0;padding-bottom:13px}ion-toolbar.in-toolbar ion-buttons,ion-toolbar.in-toolbar ion-title{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.header-collapse-condense ion-toolbar ion-buttons,.header-collapse-condense ion-toolbar ion-title{-webkit-transition:none;transition:none}.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-buttons.buttons-collapse,.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-title{opacity:0;pointer-events:none}"}};export{p as ion_header};