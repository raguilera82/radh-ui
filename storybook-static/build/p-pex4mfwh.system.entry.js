System.register(["./p-b3512107.system.js","./p-2294249a.system.js"],(function(t){"use strict";var e,r,n,o,s,i,a;return{setters:[function(t){e=t.r;r=t.e;n=t.h;o=t.H;s=t.c},function(t){i=t.h;a=t.c}],execute:function(){var l=t("ion_toolbar",function(){function t(t){e(this,t);this.childrenStyles=new Map}t.prototype.componentWillLoad=function(){var t=Array.from(this.el.querySelectorAll("ion-buttons"));var e=t.find((function(t){return t.slot==="start"}));if(e){e.classList.add("buttons-first-slot")}var r=t.reverse();var n=r.find((function(t){return t.slot==="end"}))||r.find((function(t){return t.slot==="primary"}))||r.find((function(t){return t.slot==="secondary"}));if(n){n.classList.add("buttons-last-slot")}};t.prototype.childrenStyle=function(t){t.stopPropagation();var e=t.target.tagName;var r=t.detail;var n={};var o=this.childrenStyles.get(e)||{};var s=false;Object.keys(r).forEach((function(t){var e="toolbar-"+t;var i=r[t];if(i!==o[e]){s=true}if(i){n[e]=true}}));if(s){this.childrenStyles.set(e,n);this.el.forceUpdate()}};t.prototype.render=function(){var t;var e=r(this);var s={};this.childrenStyles.forEach((function(t){Object.assign(s,t)}));return n(o,{class:Object.assign(Object.assign((t={"in-toolbar":i("ion-toolbar",this.el)},t[e]=true,t),s),a(this.color))},n("div",{class:"toolbar-background"}),n("div",{class:"toolbar-container"},n("slot",{name:"start"}),n("slot",{name:"secondary"}),n("div",{class:"toolbar-content"},n("slot",null)),n("slot",{name:"primary"}),n("slot",{name:"end"})))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-background-color,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#424242));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,#c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(ion-segment){min-height:var(--min-height)}::slotted(.buttons-first-slot){margin-left:4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-first-slot){margin-left:unset;-webkit-margin-start:4px;margin-inline-start:4px}}::slotted(.buttons-last-slot){margin-right:4px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(.buttons-last-slot){margin-right:unset;-webkit-margin-end:4px;margin-inline-end:4px}}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"},enumerable:true,configurable:true});return t}())}}}));