var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function o(e){try{f(n.next(e))}catch(t){i(t)}}function s(e){try{f(n["throw"](e))}catch(t){i(t)}}function f(e){e.done?r(e.value):a(e.value).then(o,s)}f((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return f([e,t])}}function f(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(s){o=[6,s];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],o=0,s=i.length;o<s;o++,a++)n[a]=i[o];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n="radh-ui";var a=0;var i=false;var o;var s;var f;var l=false;var u=false;var c=false;var $=false;var v=typeof window!=="undefined"?window:{};var d=v.document||{head:{}};var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var m=function(){return!!d.head.attachShadow}();var p=function(){var e=false;try{d.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(t){}return e}();var g=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var y=new WeakMap;var b=function(e){return y.get(e)};var w=e("r",(function(e,t){return y.set(t.$lazyInstance$=e,t)}));var N=function(e){var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{t.$onInstancePromise$=new Promise((function(e){return t.$onInstanceResolve$=e}))}{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return y.set(e,t)};var R=function(e,t){return t in e};var S=function(e){return console.error(e)};var _=new Map;var x=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=typeof e.$lazyBundleIds$!=="string"?e.$lazyBundleIds$[r.$modeName$]:e.$lazyBundleIds$;var o=_.get(i);if(o){return o[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{_.set(i,e)}return e[a]}),S)};var E=new Map;var k=[];var j=[];var C=[];var L=function(e,t){return function(r){e.push(r);if(!i){i=true;if(t&&h.$flags$&4){P(T)}else{h.raf(T)}}}};var O=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){S(r)}}e.length=0};var I=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){S(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var T=function(){a++;O(k);var e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;I(j,e);I(C,e);if(j.length>0){C.push.apply(C,j);j.length=0}if(i=k.length+j.length+C.length>0){h.raf(T)}else{a=0}};var P=function(e){return Promise.resolve().then(e)};var A=e("j",L(k,false));var U=e("w",L(j,true));var M={};var B="http://www.w3.org/2000/svg";var z="http://www.w3.org/1999/xhtml";var q=function(e){return e!=null};var H=function(e){e=typeof e;return e==="object"||e==="function"};var W=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var V=e("a",(function(){if(!(v.CSS&&v.CSS.supports&&v.CSS.supports("color","var(--c)"))){return t.import("./p-a614138e.system.js").then((function(){h.$cssShim$=v.__stencil_cssshim;if(h.$cssShim$){return h.$cssShim$.initShim()}}))}return Promise.resolve()}));var F=e("p",(function(){return __awaiter(r,void 0,void 0,(function(){var e,r,a,i,o;return __generator(this,(function(s){switch(s.label){case 0:{h.$cssShim$=v.__stencil_cssshim}e=t.meta.url;r=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(d.querySelectorAll("script")).find((function(e){return r.test(e.src)||e.getAttribute("data-stencil-namespace")===n}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:o=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,v.location.href));D(o.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-7f10eb01.system.js")];case 2:s.sent();s.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:o.href})]}}))}))}));var D=function(e){var t=W(n);try{v[t]=new Function("w","return import(w);//"+Math.random())}catch(a){var r=new Map;v[t]=function(n){var a=new URL(n,e).href;var i=r.get(a);if(!i){var o=d.createElement("script");o.type="module";o.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){o.onload=function(){e(v[t].m);o.remove()}}));r.set(a,i);d.head.appendChild(o)}return i}}};var G=function(e,t){if(e!=null&&!H(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var J="hydrated";var Q="http://www.w3.org/1999/xlink";var K=function(e,t){if(t===void 0){t=""}{return function(){return}}};var X=function(e,t){{return function(){return}}};var Y=new WeakMap;var Z=function(e,t,r){var n=E.get(e);if(g&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}E.set(e,n)};var ee=function(e,t,r,n){var a=re(t.$tagName$,r);var i=E.get(a);e=e.nodeType===11?e:d;if(!i){a=re(t.$tagName$);i=E.get(a)}if(i){if(typeof i==="string"){e=e.head||e;var o=Y.get(e);var s=void 0;if(!o){Y.set(e,o=new Set)}if(!o.has(a)){{if(h.$cssShim$){s=h.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var f=s["s-sc"];if(f){a=f;o=null}}else{s=d.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var te=function(e,t,r){var n=K("attachStyles",t.$tagName$);var a=ee(m&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h");if(t.$flags$&2){e.classList.add(a+"-s")}}n()};var re=function(e,t){return"sc-"+(t?e+"-"+t:e)};var ne=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=null;var o=null;var s=false;var f=false;var l=[];var u=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){u(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!H(a)){a=String(a)}if(s&&f){l[l.length-1].$text$+=a}else{l.push(s?ae(null,a):a)}f=s}}};u(r);if(t){if(t.key){i=t.key}if(t.name){o=t.name}{var c=t.className||t.class;if(c){t.class=typeof c!=="object"?c:Object.keys(c).filter((function(e){return c[e]})).join(" ")}}}if(typeof e==="function"){return e(t,l,se)}var $=ae(e,null);$.$attrs$=t;if(l.length>0){$.$children$=l}{$.$key$=i}{$.$name$=o}return $}));var ae=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}{r.$key$=null}{r.$name$=null}return r};var ie=e("H",{});var oe=function(e){return e&&e.$tag$===ie};var se={forEach:function(e,t){return e.map(fe).forEach(t)},map:function(e,t){return e.map(fe).map(t).map(le)}};var fe=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var le=function(e){var t=ae(e.vtag,e.vtext);t.$attrs$=e.vattrs;t.$children$=e.vchildren;t.$key$=e.vkey;t.$name$=e.vname;return t};var ue=function(e,t,r,n,a,i){if(r===n){return}var o=R(e,t);var s=t.toLowerCase();if(t==="class"){var f=e.classList;var l=$e(r);var u=$e(n);f.remove.apply(f,l.filter((function(e){return e&&!u.includes(e)})));f.add.apply(f,u.filter((function(e){return e&&!l.includes(e)})))}else if(t==="style"){{for(var c in r){if(!n||n[c]==null){if(c.includes("-")){e.style.removeProperty(c)}else{e.style[c]=""}}}}for(var c in n){if(!r||n[c]!==r[c]){if(c.includes("-")){e.style.setProperty(c,n[c])}else{e.style[c]=n[c]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(!o&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(R(v,s)){t=s.slice(2)}else{t=s[2]+t.slice(3)}if(r){h.rel(e,t,r,false)}if(n){h.ael(e,t,n,false)}}else{var $=H(n);if((o||$&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(t==="list"){o=false}else if(r==null||e[t]!=d){e[t]=d}}else{e[t]=n}}catch(p){}}var m=false;{if(s!==(s=s.replace(/^xlink\:?/,""))){t=s;m=true}}if(n==null||n===false){if(m){e.removeAttributeNS(Q,t)}else{e.removeAttribute(t)}}else if((!o||i&4||a)&&!$){n=n===true?"":n;if(m){e.setAttributeNS(Q,t,n)}else{e.setAttribute(t,n)}}}};var ce=/\s/;var $e=function(e){return!e?[]:e.split(ce)};var ve=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||M;var o=t.$attrs$||M;{for(n in i){if(!(n in o)){ue(a,n,i[n],undefined,r,t.$flags$)}}}for(n in o){ue(a,n,i[n],o[n],r,t.$flags$)}};var de=function(e,t,r,n){var a=t.$children$[r];var i=0;var u;var v;var h;if(!l){c=true;if(a.$tag$==="slot"){if(o){n.classList.add(o+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){u=a.$elm$=d.createTextNode(a.$text$)}else if(a.$flags$&1){u=a.$elm$=d.createTextNode("")}else{if(!$){$=a.$tag$==="svg"}u=a.$elm$=d.createElementNS($?B:z,a.$flags$&2?"slot-fb":a.$tag$);if($&&a.$tag$==="foreignObject"){$=false}{ve(null,a,$)}if(q(o)&&u["s-si"]!==o){u.classList.add(u["s-si"]=o)}if(a.$children$){for(i=0;i<a.$children$.length;++i){v=de(e,a,i,u);if(v){u.appendChild(v)}}}{if(a.$tag$==="svg"){$=false}else if(u.tagName==="foreignObject"){$=true}}}{u["s-hn"]=f;if(a.$flags$&(2|1)){u["s-sr"]=true;u["s-cr"]=s;u["s-sn"]=a.$name$||"";h=e&&e.$children$&&e.$children$[r];if(h&&h.$tag$===a.$tag$&&e.$elm$){he(e.$elm$,false)}}}return u};var he=function(e,t){h.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==f&&a["s-ol"]){we(a).insertBefore(a,be(a));a["s-ol"].remove();a["s-ol"]=undefined;c=true}if(t){he(a,t)}}h.$flags$&=~1};var me=function(e,t,r,n,a,i){var o=e["s-cr"]&&e["s-cr"].parentNode||e;var s;if(o.shadowRoot&&o.tagName===f){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){s=de(null,r,a,e);if(s){n[a].$elm$=s;o.insertBefore(s,be(t))}}}};var pe=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;xe(n);{u=true;if(a["s-ol"]){a["s-ol"].remove()}else{he(a,true)}}a.remove()}}};var ge=function(e,t,r,n){var a=0;var i=0;var o=0;var s=0;var f=t.length-1;var l=t[0];var u=t[f];var c=n.length-1;var $=n[0];var v=n[c];var d;var h;while(a<=f&&i<=c){if(l==null){l=t[++a]}else if(u==null){u=t[--f]}else if($==null){$=n[++i]}else if(v==null){v=n[--c]}else if(ye(l,$)){Ne(l,$);l=t[++a];$=n[++i]}else if(ye(u,v)){Ne(u,v);u=t[--f];v=n[--c]}else if(ye(l,v)){if(l.$tag$==="slot"||v.$tag$==="slot"){he(l.$elm$.parentNode,false)}Ne(l,v);e.insertBefore(l.$elm$,u.$elm$.nextSibling);l=t[++a];v=n[--c]}else if(ye(u,$)){if(l.$tag$==="slot"||v.$tag$==="slot"){he(u.$elm$.parentNode,false)}Ne(u,$);e.insertBefore(u.$elm$,l.$elm$);u=t[--f];$=n[++i]}else{o=-1;{for(s=a;s<=f;++s){if(t[s]&&t[s].$key$!==null&&t[s].$key$===$.$key$){o=s;break}}}if(o>=0){h=t[o];if(h.$tag$!==$.$tag$){d=de(t&&t[i],r,o,e)}else{Ne(h,$);t[o]=undefined;d=h.$elm$}$=n[++i]}else{d=de(t&&t[i],r,i,e);$=n[++i]}if(d){{we(l.$elm$).insertBefore(d,be(l.$elm$))}}}}if(a>f){me(e,n[c+1]==null?null:n[c+1].$elm$,r,n,i,c)}else if(i>c){pe(t,a,f)}};var ye=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}{return e.$key$===t.$key$}}return false};var be=function(e){return e&&e["s-ol"]||e};var we=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var Ne=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i;{$=r&&r.parentNode&&r.ownerSVGElement!==undefined;$=t.$tag$==="svg"?true:t.$tag$==="foreignObject"?false:$}if(t.$text$===null){{if(t.$tag$==="slot");else{ve(e,t,$)}}if(n!==null&&a!==null){ge(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}me(r,null,t,a,0,a.length-1)}else if(n!==null){pe(n,0,n.length-1)}}else if(i=r["s-cr"]){i.parentNode.textContent=t.$text$}else if(e.$text$!==t.$text$){r.data=t.$text$}if($&&t.$tag$==="svg"){$=false}};var Re=function(e){var t=e.childNodes;var r;var n;var a;var i;var o;var s;for(n=0,a=t.length;n<a;n++){r=t[n];if(r.nodeType===1){if(r["s-sr"]){o=r["s-sn"];r.hidden=false;for(i=0;i<a;i++){if(t[i]["s-hn"]!==r["s-hn"]){s=t[i].nodeType;if(o!==""){if(s===1&&o===t[i].getAttribute("slot")){r.hidden=true;break}}else{if(s===1||s===3&&t[i].textContent.trim()!==""){r.hidden=true;break}}}}}Re(r)}}};var Se=[];var _e=function(e){var t=e.childNodes;var r=t.length;var n=0;var a=0;var i=0;var o;var s;var f;var l;for(r=t.length;n<r;n++){o=t[n];if(o["s-sr"]&&(s=o["s-cr"])){f=s.parentNode.childNodes;l=o["s-sn"];for(a=f.length-1;a>=0;a--){s=f[a];if(!s["s-cn"]&&!s["s-nr"]&&s["s-hn"]!==o["s-hn"]){i=s.nodeType;if((i===3||i===8)&&l===""||i===1&&s.getAttribute("slot")===null&&l===""||i===1&&s.getAttribute("slot")===l){if(!Se.some((function(e){return e.$nodeToRelocate$===s}))){u=true;s["s-sn"]=l;Se.push({$slotRefNode$:o,$nodeToRelocate$:s})}}}}}if(o.nodeType===1){_e(o)}}};var xe=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.forEach(xe)}};var Ee=function(e,t,r,n){f=e.tagName;var a=t.$vnode$||ae(null,null);var i=oe(n)?n:ne(null,null,n);if(r.$attrsToReflect$){i.$attrs$=i.$attrs$||{};r.$attrsToReflect$.forEach((function(t){var r=t[0],n=t[1];return i.$attrs$[n]=e[r]}))}i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{o=e["s-sc"]}{s=e["s-cr"];l=m&&(r.$flags$&1)!==0;u=false}Ne(a,i);{if(c){_e(i.$elm$);for(var $=0;$<Se.length;$++){var v=Se[$];if(!v.$nodeToRelocate$["s-ol"]){var p=d.createTextNode("");p["s-nr"]=v.$nodeToRelocate$;v.$nodeToRelocate$.parentNode.insertBefore(v.$nodeToRelocate$["s-ol"]=p,v.$nodeToRelocate$)}}h.$flags$|=1;for(var $=0;$<Se.length;$++){var v=Se[$];var g=v.$slotRefNode$.parentNode;var y=v.$slotRefNode$.nextSibling;var p=v.$nodeToRelocate$["s-ol"];while(p=p.previousSibling){var b=p["s-nr"];if(b&&b["s-sn"]===v.$nodeToRelocate$["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.$nodeToRelocate$.parentNode||v.$nodeToRelocate$.nextSibling!==y){if(v.$nodeToRelocate$!==y){g.insertBefore(v.$nodeToRelocate$,y)}}}h.$flags$&=~1}if(u){Re(i.$elm$)}Se.length=0}};var ke=function(e,t){if(t&&!e.$onRenderResolve$){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var je=function(e,t,r,n){{t.$flags$|=16}if(t.$flags$&4){t.$flags$|=512;return}var a=K("scheduleUpdate",r.$tagName$);var i=t.$ancestorComponent$;var o=t.$lazyInstance$;var s=function(){return Ce(e,t,r,o,n)};ke(t,i);var f;if(n){{t.$flags$|=256;if(t.$queuedListeners$){t.$queuedListeners$.forEach((function(e){var t=e[0],r=e[1];return Pe(o,t,r)}));t.$queuedListeners$=null}}{f=Pe(o,"componentWillLoad")}}else{{f=Pe(o,"componentWillUpdate")}}{f=Ae(f,(function(){return Pe(o,"componentWillRender")}))}a();return Ae(f,(function(){return U(s)}))};var Ce=function(e,t,r,n,a){var i=K("update",r.$tagName$);var o=e["s-rc"];if(a){te(e,r,t.$modeName$)}var s=K("render",r.$tagName$);{{Ee(e,t,r,Le(n))}}if(h.$cssShim$){h.$cssShim$.updateHost(e)}{t.$flags$&=~16}{t.$flags$|=2}if(o){o.forEach((function(e){return e()}));e["s-rc"]=undefined}s();i();{var f=e["s-p"];var l=function(){return Oe(e,t,r)};if(f.length===0){l()}else{Promise.all(f).then(l);t.$flags$|=4;f.length=0}}};var Le=function(e,t){try{e=e.render&&e.render()}catch(r){S(r)}return e};var Oe=function(e,t,r){var n=K("postUpdate",r.$tagName$);var a=t.$lazyInstance$;var i=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(J)}{Pe(a,"componentDidLoad")}n();{t.$onReadyResolve$(e);if(!i){Te()}}}else{{Pe(a,"componentDidUpdate")}n()}{t.$onInstanceResolve$(e)}{if(t.$onRenderResolve$){t.$onRenderResolve$();t.$onRenderResolve$=undefined}if(t.$flags$&512){P((function(){return je(e,t,r,false)}))}t.$flags$&=~(4|512)}};var Ie=function(e,t){{var r=b(e);var n=r.$hostElement$.isConnected;if(n&&(r.$flags$&(2|16))===2){je(e,r,t,false)}return n}};var Te=function(e){{d.documentElement.classList.add(J)}{h.$flags$|=2}};var Pe=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){S(n)}}return undefined};var Ae=function(e,t){return e&&e.then?e.then(t):t()};var Ue=function(e,t){return b(e).$instanceValues$.get(t)};var Me=function(e,t,r,n){var a=b(e);var i=a.$hostElement$;var o=a.$instanceValues$.get(t);var s=a.$flags$;var f=a.$lazyInstance$;r=G(r,n.$members$[t][0]);if(r!==o&&(!(s&8)||o===undefined)){a.$instanceValues$.set(t,r);if(f){if(n.$watchers$&&s&128){var l=n.$watchers$[t];if(l){l.forEach((function(e){try{f[e](r,o,t)}catch(n){S(n)}}))}}if((s&(2|16))===2){je(i,a,n,false)}}}};var Be=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Ue(this,n)},set:function(e){Me(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=b(this);return r.$onInstancePromise$.then((function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)}))}})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;h.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var ze=function(e,t,r){t.$queuedListeners$=t.$queuedListeners$||[];var n=r.map((function(r){var n=r[0],a=r[1],i=r[2];var o=He(e,n);var s=qe(t,i);var f=We(n);h.ael(o,a,s,f);return function(){return h.rel(o,a,s,f)}}));return function(){return n.forEach((function(e){return e()}))}};var qe=function(e,t){return function(r){{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{e.$queuedListeners$.push([t,r])}}}};var He=function(e,t){if(t&4)return d;if(t&8)return v;if(t&32)return d.body;if(t&16)return e.parentElement;return e};var We=function(e){return p?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var Ve=[];var Fe=function(e){return Ve.map((function(t){return t(e)})).find((function(e){return!!e}))};var De=function(e){return Ve.push(e)};var Ge=e("m",(function(e){return b(e).$modeName$}));var Je=function(e,n,a,i,o){return __awaiter(r,void 0,void 0,(function(){var r,i,s,f,l,u,c;return __generator(this,(function($){switch($.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;if(n.$modeName$==null){n.$modeName$=typeof a.$lazyBundleIds$!=="string"?Fe(e):""}o=x(a,n);if(!o.then)return[3,2];r=X();return[4,o];case 1:o=$.sent();r();$.label=2;case 2:if(!o.isProxied){{a.$watchers$=o.watchers}Be(o,a,2);o.isProxied=true}i=K("createInstance",a.$tagName$);{n.$flags$|=8}try{new o(n)}catch(v){S(v)}{n.$flags$&=~8}{n.$flags$|=128}i();Qe(n.$lazyInstance$);s=re(a.$tagName$,n.$modeName$);if(!(!E.has(s)&&o.style))return[3,5];f=K("registerStyles",a.$tagName$);l=o.style;if(typeof l!=="string"){l=l[n.$modeName$]}if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(l,s,false)}))];case 3:l=$.sent();$.label=4;case 4:Z(s,l,!!(a.$flags$&1));f();$.label=5;case 5:u=n.$ancestorComponent$;c=function(){return je(e,n,a,true)};if(u&&u["s-rc"]){u["s-rc"].push(c)}else{c()}return[2]}}))}))};var Qe=function(e){{Pe(e,"connectedCallback")}};var Ke=function(e,t){if((h.$flags$&1)===0){var r=K("connectedCallback",t.$tagName$);var n=b(e);if(t.$listeners$){n.$rmListeners$=ze(e,n,t.$listeners$)}if(!(n.$flags$&1)){n.$flags$|=1;var a=void 0;if(!a){if(t.$flags$&4||t.$flags$&8){Xe(e)}}{var i=e;while(i=i.parentNode||i.host){if(i["s-p"]){ke(n,n.$ancestorComponent$=i);break}}}if(t.$members$){Object.entries(t.$members$).forEach((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{P((function(){return Je(e,n,t)}))}}Qe(n.$lazyInstance$);r()}};var Xe=function(e){var t="";var r=e["s-cr"]=d.createComment(t);r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var Ye=function(e){if((h.$flags$&1)===0){var t=b(e);var r=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$();t.$rmListeners$=undefined}}if(h.$cssShim$){h.$cssShim$.removeHost(e)}{Pe(r,"disconnectedCallback")}{Pe(r,"componentDidUnload")}}};var Ze=e("b",(function(e,t){if(t===void 0){t={}}var r=K();var n=[];var a=t.exclude||[];var i=d.head;var o=v.customElements;var s=i.querySelector("meta[charset]");var f=d.createElement("style");var l=[];var u;var c=true;Object.assign(h,t);h.$resourcesUrl$=new URL(t.resourcesUrl||"./",d.baseURI).href;if(t.syncQueue){h.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$listeners$=t[3]}{r.$attrsToReflect$=[]}{r.$watchers$={}}if(!m&&r.$flags$&1){r.$flags$|=8}var i=r.$tagName$;var s=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;N(t);if(r.$flags$&1){if(m){{t.attachShadow({mode:"open"})}}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return n}t.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if(c){l.push(this)}else{h.jmp((function(){return Ke(e,r)}))}};t.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return Ye(e)}))};t.prototype.forceUpdate=function(){Ie(this,r)};t.prototype.componentOnReady=function(){return b(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleIds$=e[0];if(!a.includes(i)&&!o.get(i)){n.push(i);o.define(i,Be(s,r,1))}}))}));f.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";f.setAttribute("data-styles","");i.insertBefore(f,s?s.nextSibling:i.firstChild);c=false;if(l.length>0){l.forEach((function(e){return e.connectedCallback()}))}else{h.jmp((function(){return u=setTimeout(Te,30,"timeout")}))}r()}));var et=e("f",(function(e,t,r){var n=nt(e);return{emit:function(e){var a=new CustomEvent(t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e});n.dispatchEvent(a);return a}}}));var tt=e("l",(function(e){var t=new URL(e,h.$resourcesUrl$);return t.origin!==v.location.origin?t.href:t.pathname}));var rt=e("k",(function(e,t){var r=function(){var e=d.querySelector(t);if(!e){e=d.createElement(t);d.body.appendChild(e)}return typeof e.componentOnReady==="function"?e.componentOnReady():Promise.resolve(e)};var n=function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}return r().then((function(t){return t.create.apply(t,e)}))};return{create:n,componentOnReady:r}}));var nt=e("c",(function(e){return b(e).$hostElement$}));var at=function(e){return ot(e)};var it=e("i",(function(e,t){if(typeof e==="string"){t=e;e=undefined}return at(e).includes(t)}));var ot=function(e){if(e===void 0){e=window}e.Ionic=e.Ionic||{};var t=e.Ionic.platforms;if(t==null){t=e.Ionic.platforms=st(e);t.forEach((function(t){return e.document.documentElement.classList.add("plt-"+t)}))}return t};var st=function(e){return Object.keys(_t).filter((function(t){return _t[t](e)}))};var ft=function(e){return mt(e)&&!gt(e)};var lt=function(e){if(Rt(e,/iPad/i)){return true}if(Rt(e,/Macintosh/i)&&mt(e)){return true}return false};var ut=function(e){return Rt(e,/iPhone/i)};var ct=function(e){return Rt(e,/iPhone|iPod/i)||lt(e)};var $t=function(e){return Rt(e,/android|sink/i)};var vt=function(e){return $t(e)&&!Rt(e,/mobile/i)};var dt=function(e){var t=e.innerWidth;var r=e.innerHeight;var n=Math.min(t,r);var a=Math.max(t,r);return n>390&&n<520&&(a>620&&a<800)};var ht=function(e){var t=e.innerWidth;var r=e.innerHeight;var n=Math.min(t,r);var a=Math.max(t,r);return lt(e)||vt(e)||n>460&&n<820&&(a>780&&a<1400)};var mt=function(e){return St(e,"(any-pointer:coarse)")};var pt=function(e){return!mt(e)};var gt=function(e){return yt(e)||bt(e)};var yt=function(e){return!!(e["cordova"]||e["phonegap"]||e["PhoneGap"])};var bt=function(e){var t=e["Capacitor"];return!!(t&&t.isNative)};var wt=function(e){return Rt(e,/electron/i)};var Nt=function(e){return!!(e.matchMedia("(display-mode: standalone)").matches||e.navigator.standalone)};var Rt=function(e,t){return t.test(e.navigator.userAgent)};var St=function(e,t){return e.matchMedia(t).matches};var _t={ipad:lt,iphone:ut,ios:ct,android:$t,phablet:dt,tablet:ht,cordova:yt,capacitor:bt,electron:wt,pwa:Nt,mobile:mt,mobileweb:ft,desktop:pt,hybrid:gt};var xt=function(){function e(){this.m=new Map}e.prototype.reset=function(e){this.m=new Map(Object.entries(e))};e.prototype.get=function(e,t){var r=this.m.get(e);return r!==undefined?r:t};e.prototype.getBoolean=function(e,t){if(t===void 0){t=false}var r=this.m.get(e);if(r===undefined){return t}if(typeof r==="string"){return r==="true"}return!!r};e.prototype.getNumber=function(e,t){var r=parseFloat(this.m.get(e));return isNaN(r)?t!==undefined?t:NaN:r};e.prototype.set=function(e,t){this.m.set(e,t)};return e}();var Et=e("d",new xt);var kt=function(e){try{var t=e.sessionStorage.getItem(It);return t!==null?JSON.parse(t):{}}catch(r){return{}}};var jt=function(e,t){try{e.sessionStorage.setItem(It,JSON.stringify(t))}catch(r){return}};var Ct=function(e){var t={};e.location.search.slice(1).split("&").map((function(e){return e.split("=")})).map((function(e){var t=e[0],r=e[1];return[decodeURIComponent(t),decodeURIComponent(r)]})).filter((function(e){var t=e[0];return Lt(t,Ot)})).map((function(e){var t=e[0],r=e[1];return[t.slice(Ot.length),r]})).forEach((function(e){var r=e[0],n=e[1];t[r]=n}));return t};var Lt=function(e,t){return e.substr(0,t.length)===t};var Ot="ionic:";var It="ionic-persist-config";var Tt;var Pt=e("e",(function(e){return e&&Ge(e)||Tt}));var At=function(){var e=document;var t=window;var r=t.Ionic=t.Ionic||{};ot(t);var n=Object.assign(Object.assign(Object.assign(Object.assign({},kt(t)),{persistConfig:false}),r.config),Ct(t));Et.reset(n);if(Et.getBoolean("persistConfig")){jt(t,n)}r.config=Et;r.mode=Tt=Et.get("mode",e.documentElement.getAttribute("mode")||(it(t,"ios")?"ios":"md"));Et.set("mode",Tt);e.documentElement.setAttribute("mode",Tt);e.documentElement.classList.add(Tt);if(Et.getBoolean("_testing")){Et.set("animated",false)}De((function(e){return e.mode=e.mode||e.getAttribute("mode")||Tt}))};var Ut=function(){De((function(e){return e.tagName==="ION-ICON"?e.mode||e.getAttribute("mode"):null}))};var Mt=function(){At();Ut()};e("g",Mt)}}}));