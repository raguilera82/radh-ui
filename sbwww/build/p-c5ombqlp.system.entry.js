System.register(["./p-b3512107.system.js","./p-4408d81d.system.js"],(function(e){"use strict";var n,t,i,s,r;return{setters:[function(e){n=e.r;t=e.h;i=e.e;s=e.H},function(e){r=e.s}],execute:function(){var u=e("ion_select_popover",function(){function e(e){n(this,e);this.options=[]}e.prototype.onSelect=function(e){var n=this.options.find((function(n){return n.value===e.target.value}));if(n){r(n.handler)}};e.prototype.render=function(){return t(s,{class:i(this)},t("ion-list",null,this.header!==undefined&&t("ion-list-header",null,this.header),(this.subHeader!==undefined||this.message!==undefined)&&t("ion-item",null,t("ion-label",{class:"ion-text-wrap"},this.subHeader!==undefined&&t("h3",null,this.subHeader),this.message!==undefined&&t("p",null,this.message))),t("ion-radio-group",null,this.options.map((function(e){return t("ion-item",null,t("ion-label",null,e.text),t("ion-radio",{checked:e.checked,value:e.value,disabled:e.disabled}))})))))};Object.defineProperty(e,"style",{get:function(){return".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-label.sc-ion-select-popover, .sc-ion-select-popover-h ion-list-header.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}"},enumerable:true,configurable:true});return e}())}}}));