var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{u(r.next(t))}catch(e){i(e)}}function s(t){try{u(r["throw"](t))}catch(e){i(e)}}function u(t){t.done?n(t.value):o(t.value).then(a,s)}u((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return u([t,e])}}function u(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;o=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1];i=a;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(a);break}if(i[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(s){a=[6,s];o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-b3512107.system.js"],(function(t){"use strict";var e,n,r,o;return{setters:[function(t){e=t.r;n=t.f;r=t.h;o=t.c}],execute:function(){function i(t){var e=t.closest("[lang]");return e?e.lang:"en"}function a(t,e){return new Promise((function(n,r){fetch("/assets/i18n/"+t+".i18n."+e+".json").then((function(t){if(t.ok)n(t.json());else r()}),(function(){return r()}))}))}function s(t){return __awaiter(this,void 0,void 0,(function(){var e,n,r,o;return __generator(this,(function(s){switch(s.label){case 0:e=t.tagName.toLowerCase();n=i(t);s.label=1;case 1:s.trys.push([1,3,,5]);return[4,a(e,n)];case 2:r=s.sent();return[3,5];case 3:o=s.sent();console.warn("no locale for "+e+" ("+n+") loading default locale en.");return[4,a(e,"en")];case 4:r=s.sent();return[3,5];case 5:return[2,r]}}))}))}var u=t("radh_hello",function(){function t(t){e(this,t);this.selected=n(this,"selected",7)}t.prototype.loadStrings=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:t=this;return[4,s(this.myComponent)];case 1:t.strings=e.sent();return[2]}}))}))};t.prototype.componentWillLoad=function(){return this.loadStrings()};t.prototype.loadLocale=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.loadStrings();return[2]}))}))};t.prototype.onListenClick=function(){this.selected.emit(this.name);this.addClass()};t.prototype.addClass=function(){this.myComponent.classList.add("active")};t.prototype.render=function(){return r("div",{id:"hello"},this.strings.hello," ",this.name)};Object.defineProperty(t.prototype,"myComponent",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".active{color:red}"},enumerable:true,configurable:true});return t}())}}}));