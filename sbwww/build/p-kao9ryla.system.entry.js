var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function u(t){try{s(r.next(t))}catch(e){i(e)}}function c(t){try{s(r["throw"](t))}catch(e){i(e)}}function s(t){t.done?n(t.value):o(t.value).then(u,c)}s((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,u;return u={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(t){return function(e){return s([t,e])}}function s(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=u[0]&2?o["return"]:u[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;if(o=0,i)u=[u[0]&2,i.value];switch(u[0]){case 0:case 1:i=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;o=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1];i=u;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(u);break}if(i[2])n.ops.pop();n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c];o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-b3512107.system.js","./p-778d4295.system.js","./p-b3f92b91.system.js","./p-feb6bd0a.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.r},function(){},function(){},function(t){n=t.m}],execute:function(){var r=t("ion_menu_controller",function(){function t(t){e(this,t)}t.prototype.open=function(t){return n.open(t)};t.prototype.close=function(t){return n.close(t)};t.prototype.toggle=function(t){return n.toggle(t)};t.prototype.enable=function(t,e){return n.enable(t,e)};t.prototype.swipeGesture=function(t,e){return n.swipeGesture(t,e)};t.prototype.isOpen=function(t){return n.isOpen(t)};t.prototype.isEnabled=function(t){return n.isEnabled(t)};t.prototype.get=function(t){return n.get(t)};t.prototype.getOpen=function(){return n.getOpen()};t.prototype.getMenus=function(){return n.getMenus()};t.prototype.isAnimating=function(){return n.isAnimating()};t.prototype.registerAnimation=function(t,e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){return[2,n.registerAnimation(t,e)]}))}))};return t}())}}}));