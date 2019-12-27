var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function s(t){try{a(n.next(t))}catch(e){o(e)}}function l(t){try{a(n["throw"](t))}catch(e){o(e)}}function a(t){t.done?r(t.value):i(t.value).then(s,l)}a((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(t){return function(e){return a([t,e])}}function a(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;i=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){r.label=s[1];break}if(s[0]===6&&r.label<o[1]){r.label=o[1];o=s;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(s);break}if(o[2])r.ops.pop();r.trys.pop();continue}s=e.call(t,r)}catch(l){s=[6,l];i=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-b3512107.system.js","./p-e578a279.system.js"],(function(t,e){"use strict";var r,n,i,o,s,l,a,c,u;return{setters:[function(t){r=t.r;n=t.f;i=t.e;o=t.h;s=t.c;l=t.H},function(t){a=t.h;c=t.a;u=t.b}],execute:function(){var h=t("ion_reorder_group",function(){function t(t){r(this,t);this.lastToIndex=-1;this.cachedHeights=[];this.scrollElTop=0;this.scrollElBottom=0;this.scrollElInitial=0;this.containerTop=0;this.containerBottom=0;this.state=0;this.disabled=true;this.ionItemReorder=n(this,"ionItemReorder",7)}t.prototype.disabledChanged=function(){if(this.gesture){this.gesture.setDisabled(this.disabled)}};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,r,n;var i=this;return __generator(this,(function(o){switch(o.label){case 0:t=this.el.closest("ion-content");if(!t)return[3,2];r=this;return[4,t.getScrollElement()];case 1:r.scrollEl=o.sent();o.label=2;case 2:n=this;return[4,e.import("./p-3f376874.system.js")];case 3:n.gesture=o.sent().createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:false,canStart:function(t){return i.canStart(t)},onStart:function(t){return i.onStart(t)},onMove:function(t){return i.onMove(t)},onEnd:function(){return i.onEnd()}});this.disabledChanged();return[2]}}))}))};t.prototype.disconnectedCallback=function(){this.onEnd();if(this.gesture){this.gesture.destroy();this.gesture=undefined}};t.prototype.complete=function(t){return Promise.resolve(this.completeSync(t))};t.prototype.canStart=function(t){if(this.selectedItemEl||this.state!==0){return false}var e=t.event.target;var r=e.closest("ion-reorder");if(!r){return false}var n=d(r,this.el);if(!n){return false}t.data=n;return true};t.prototype.onStart=function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data;var r=this.cachedHeights;r.length=0;var n=this.el;var i=n.children;if(!i||i.length===0){return}var o=0;for(var s=0;s<i.length;s++){var l=i[s];o+=l.offsetHeight;r.push(o);l.$ionIndex=s}var c=n.getBoundingClientRect();this.containerTop=c.top;this.containerBottom=c.bottom;if(this.scrollEl){var u=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop;this.scrollElTop=u.top+p;this.scrollElBottom=u.bottom-p}else{this.scrollElInitial=0;this.scrollElTop=0;this.scrollElBottom=0}this.lastToIndex=f(e);this.selectedItemHeight=e.offsetHeight;this.state=1;e.classList.add(m);a()};t.prototype.onMove=function(t){var e=this.selectedItemEl;if(!e){return}var r=this.autoscroll(t.currentY);var n=this.containerTop-r;var i=this.containerBottom-r;var o=Math.max(n,Math.min(t.currentY,i));var s=r+o-t.startY;var l=o-n;var a=this.itemIndexForTop(l);if(a!==this.lastToIndex){var u=f(e);this.lastToIndex=a;c();this.reorderMove(u,a)}e.style.transform="translateY("+s+"px)"};t.prototype.onEnd=function(){var t=this.selectedItemEl;this.state=2;if(!t){this.state=0;return}var e=this.lastToIndex;var r=f(t);if(e===r){this.completeSync()}else{this.ionItemReorder.emit({from:r,to:e,complete:this.completeSync.bind(this)})}u()};t.prototype.completeSync=function(t){var e=this.selectedItemEl;if(e&&this.state===2){var r=this.el.children;var n=r.length;var i=this.lastToIndex;var o=f(e);if(i!==o&&(!t||t===true)){var s=o<i?r[i+1]:r[i];this.el.insertBefore(e,s)}if(Array.isArray(t)){t=y(t,o,i)}for(var l=0;l<n;l++){r[l].style["transform"]=""}e.style.transition="";e.classList.remove(m);this.selectedItemEl=undefined;this.state=0}return t};t.prototype.itemIndexForTop=function(t){var e=this.cachedHeights;var r=0;for(r=0;r<e.length;r++){if(e[r]>t){break}}return r};t.prototype.reorderMove=function(t,e){var r=this.selectedItemHeight;var n=this.el.children;for(var i=0;i<n.length;i++){var o=n[i].style;var s="";if(i>t&&i<=e){s="translateY("+-r+"px)"}else if(i<t&&i>=e){s="translateY("+r+"px)"}o["transform"]=s}};t.prototype.autoscroll=function(t){if(!this.scrollEl){return 0}var e=0;if(t<this.scrollElTop){e=-v}else if(t>this.scrollElBottom){e=v}if(e!==0){this.scrollEl.scrollBy(0,e)}return this.scrollEl.scrollTop-this.scrollElInitial};t.prototype.render=function(){var t;var e=i(this);return o(l,{class:(t={},t[e]=true,t["reorder-enabled"]=!this.disabled,t["reorder-list-active"]=this.state!==0,t)})};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"},enumerable:true,configurable:true});return t}());var f=function(t){return t["$ionIndex"]};var d=function(t,e){var r;while(t){r=t.parentElement;if(r===e){return t}t=r}return undefined};var p=60;var v=10;var m="reorder-selected";var y=function(t,e,r){var n=t[e];t.splice(e,1);t.splice(r,0,n);return t.slice()}}}}));