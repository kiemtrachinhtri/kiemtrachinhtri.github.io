(function(t){function e(e){for(var r,o,u=e[0],i=e[1],s=e[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a={app:0},c=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1a081395"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"ab8cf546"}[t]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[t],p.parentNode.removeChild(p),n(c)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c=(n("5c0b"),n("2877")),u={},i=Object(c["a"])(u,o,a,!1,null,null,null),s=i.exports,l=n("f309");r["a"].use(l["a"]);var f=new l["a"]({}),p=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"bg",attrs:{fluid:""}},[r("v-row",{staticClass:"text-center logo"},[r("v-col",{staticClass:"justify-center",attrs:{cols:"16"}},[r("v-img",{staticClass:"my-3",attrs:{src:n("cf05"),contain:"",height:"200"}}),r("div",{staticClass:"tt"},[r("h1",{staticClass:"font-weight-bold"},[t._v("ĐOÀN KẾT, HIỆP ĐỒNG, ")]),r("h1",{staticClass:"font-weight-bold"},[t._v(" LINH HOẠT, SÁNG TẠO, ĐÁNH GIỎI, BẮN TRÚNG")])])],1)],1),r("v-row",[r("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[r("v-btn",{staticClass:"btn-b a",on:{click:t.hoc}},[t._v(" Học tập ")]),r("v-btn",{staticClass:"btn-b b",on:{click:t.kiemtra}},[t._v(" Kiểm Tra ")])],1)],1)],1)},h=[],b={name:"Home",components:{},methods:{hoc:function(){this.$router.push("/learn")},kiemtra:function(){this.$router.push("/login")}}},m=b,v=(n("f248"),n("6544")),g=n.n(v),y=n("8336"),w=n("62ad"),C=n("a523"),O=n("adda"),_=n("0fd9"),k=Object(c["a"])(m,d,h,!1,null,"4bc130b2",null),j=k.exports;g()(k,{VBtn:y["a"],VCol:w["a"],VContainer:C["a"],VImg:O["a"],VRow:_["a"]}),r["a"].use(p["a"]);var T=[{path:"/",name:"Home",component:j},{path:"/learn",name:"Hoc",component:function(){return n.e("about").then(n.bind(null,"8824"))}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/check",name:"Check",component:function(){return n.e("about").then(n.bind(null,"9768"))}},{path:"/learntap/:a",name:"Check",component:function(){return n.e("about").then(n.bind(null,"ea51"))}}],x=new p["a"]({routes:T}),N=x,E=n("2f62");r["a"].use(E["a"]);var P=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({vuetify:f,router:N,store:P,render:function(t){return t(s)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},a86d:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.4f170fcb.png"},f248:function(t,e,n){"use strict";n("a86d")}});
//# sourceMappingURL=app.722e8672.js.map