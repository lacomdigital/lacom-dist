(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7],{339:function(t,e,n){var content=n(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("41136422",content,!0,{sourceMap:!1})},348:function(t,e,n){"use strict";n(339)},349:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,".badge{\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center;\n  padding:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(15, 29, 34, var(--tw-text-opacity));\n  row-gap:0.75rem;\n}\n.badge:hover .badge-circle-ring{\n  -webkit-animation:spin 8s linear infinite!important;\n          animation:spin 8s linear infinite!important;\n  border-style:dashed;\n  border-width:2px\n}\n.badge-circle{\n  border-radius:9999px;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  height:5rem;\n  padding:0.5rem;\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  width:5rem\n}\n.badge-circle-ring{\n  --tw-border-opacity:1;\n  border-color:rgba(212, 212, 212, var(--tw-border-opacity));\n  border-radius:9999px;\n  border-width:2px;\n  height:6rem;\n  position:absolute;\n  width:6rem\n}\n.badge-circle-icon{\n  height:2rem;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  width:2rem;\n  z-index:50\n}",""]),t.exports=r},354:function(t,e,n){var content=n(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("bad8e090",content,!0,{sourceMap:!1})},361:function(t,e,n){"use strict";n.r(e);n(28);var r={props:{ind:Number,label:String},data:function(){return{s_details:this.$store.state.services}}},l=(n(348),n(4)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"badge",attrs:{to:t.localePath("/services/"+t.$store.getters.getServiceURL(t.ind)),"data-aos":"fade-up","data-aos-duration":"700"}},[n("div",{class:"badge-circle relative "+t.s_details[t.ind].color+"-gradient"},[n("div",{class:"badge-circle-ring"}),t._v(" "),n("v-icon",{staticClass:"badge-circle-icon",attrs:{name:t.s_details[t.ind].icon}})],1),t._v(" "),n("h3",{class:"bg-clip-text text-transparent "+t.s_details[t.ind].color+"-gradient text-xl font-extrabold capitalize"},[n("em",[t._v(t._s(t.label))])])])}),[],!1,null,null,null);e.default=component.exports},370:function(t,e,n){t.exports=n.p+"img/lacom-logo-only.6b15b9d.svg"},371:function(t,e,n){t.exports=n.p+"img/lacom-digital-marketing.5d23577.jpg"},372:function(t,e,n){t.exports=n.p+"img/about-us-home.8437062.png"},373:function(t,e,n){t.exports=n.p+"img/steps.0de71f3.png"},374:function(t,e,n){"use strict";n(354)},375:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,".index-bg{\n  height:100%;\n  -o-object-fit:cover;\n     object-fit:cover;\n  position:absolute;\n  top:0px;\n  right:0px;\n  bottom:0px;\n  left:0px;\n  width:100%\n}\n.vue-typer .custom.char.typed{\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(15, 29, 34, var(--tw-text-opacity))\n}\n.vue-typer .custom.char.selected{\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 115, 22, var(--tw-bg-opacity));\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.vue-typer .custom.caret{\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 115, 22, var(--tw-bg-opacity));\n  margin-left:0.25rem;\n  width:0.5rem\n}\n.step-item{\n  font-weight:700;\n  position:relative;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  text-transform:uppercase\n}",""]),t.exports=r},397:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"text-4xl font-bold"},[t._v("\n        Digital Marketing "),n("span",{staticClass:"text-secondary"},[t._v("Agency")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full lg:w-1/2 p-10"},[e("img",{staticClass:"object-cover rounded-3xl border-b-8 border-gray-200",attrs:{src:n(371),alt:"Team Picture Lacom"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full lg:w-1/2 p-3 md:p-8 lg:p-0"},[e("img",{staticClass:"p-5 md:p-0",attrs:{"data-aos":"fade-down","data-aos-duration":"800",src:n(372),alt:"About Lacom"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-10/12 lg:w-1/2 flex items-center justify-center p-4"},[e("img",{staticStyle:{width:"75%",height:"auto"},attrs:{src:n(373),alt:""}})])}],l={layout:"landpage",data:function(){return{delay:["300","500","700","900","1000"]}},methods:{scrollDown:function(){document.getElementById("aboutus").scrollIntoView({behavior:"smooth"})}}},o=(n(374),n(4)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-full flex flex-col flex-1 items-center"},[r("div",{ref:"landingpage",staticClass:"w-10/12 h-screen flex flex-col md:flex-row gap-y-4 items-center justify-center relative"},[r("div",{staticClass:"w-full lg:w-1/2 flex flex-col text-left gap-y-6 text-primary",attrs:{"data-aos":"fade-in"}},[r("img",{staticClass:"w-1/2",attrs:{src:n(370),alt:"Lacom Digital"}}),t._v(" "),t._m(0),t._v(" "),r("h2",{staticClass:"text-xl"},[r("span",{staticClass:"border-l-4 border-secondary px-2"},[r("vue-typer",{attrs:{text:t.$t("home.slogan")+" "+t.$t("home.slogan-orange"),repeat:0}})],1)]),t._v(" "),r("nuxt-link",{staticClass:"w-min whitespace-nowrap btn-secondary-gradient",attrs:{to:t.localePath("/about")}},[t._v("\n        "+t._s(t.$t("services.title"))+"\n        "),r("v-icon",{staticClass:"w-4",attrs:{name:"chevron-right"}})],1)],1),t._v(" "),t._m(1),t._v(" "),r("button",{staticClass:"absolute inset-x-1/2 bottom-10 flex justify-center p-1 rounded-full border border-secondary animate-bounce",on:{click:t.scrollDown}},[r("v-icon",{staticClass:"text-secondary w-4 h-4",attrs:{name:"angle-double-down"}})],1)]),t._v(" "),r("divider"),t._v(" "),r("div",{staticClass:"flex flex-1 my-20 justify-center items-center gap-y-10",attrs:{id:"aboutus"}},[r("div",{staticClass:"w-full flex flex-col lg:flex-row flex-1"},[r("div",{staticClass:"w-full lg:w-1/2 flex flex-col items-center justify-center text-center gap-y-8 p-10 md:p-16 lg:p-20 text-primary",attrs:{"data-aos":"fade-right","data-aos-duration":"800"}},[r("h2",{staticClass:"page-title"},[t._v("\n          "+t._s(t.$t("about.title"))+"\n        ")]),t._v(" "),r("p",[r("span",{staticClass:"font-bold text-secondary"},[t._v("LaCom")]),t._v("\n          "+t._s(t.$t("about.bioShort"))+"\n        ")]),t._v(" "),r("nuxt-link",{staticClass:"btn-secondary-gradient",attrs:{to:t.localePath("/about")}},[t._v("\n          "+t._s(t.$t("buttons.learn-more"))+"\n          "),r("v-icon",{staticClass:"w-4",attrs:{name:"chevron-right"}})],1)],1),t._v(" "),t._m(2)])]),t._v(" "),r("div",{staticClass:"flex flex-1 my-20 flex-col justify-center items-center gap-y-10"},[r("div",{staticClass:"w-full md:w-10/12 text-center space-y-8",attrs:{"data-aos":"fade-down","data-aos-duration":"800"}},[r("h2",{staticClass:"page-title"},[t._v(t._s(t.$t("services.title")))]),t._v(" "),r("p",{staticClass:"page-title-p"},[t._v("\n        On vous propose une large palette de services en communication\n        digitale.\n        "),r("nuxt-link",{staticClass:"text-secondary",attrs:{to:t.localePath("/services")}},[t._v(t._s(t.$t("services.checkout"))+".\n          "),r("v-icon",{staticClass:"w-4 h-4",attrs:{name:"chevron-right"}})],1)],1)]),t._v(" "),r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"},t._l(t.$t("services.ourServices"),(function(t,e){return r("service-badge",{key:t.label,attrs:{ind:e,label:t.label}})})),1)]),t._v(" "),r("div",{staticClass:"w-full secondary-gradient py-10 px-5 shadow-2xl"},[r("div",{staticClass:"w-full md:w-10/12 lg:w-8/12 flex flex-col items-center gap-y-4 text-white text-center mx-auto"},[r("v-icon",{staticClass:"w-12 h-12 animate-pulse",attrs:{name:"envelope-open-text"}}),t._v(" "),r("h2",{staticClass:"text-4xl font-bold"},[t._v(t._s(t.$t("contact.keep-touch")))]),t._v(" "),r("p",[t._v("\n        "+t._s(t.$t("contact.keep-touch-p"))+"\n      ")]),t._v(" "),r("div",{staticClass:"flex flex-col md:flex-row items-center justify-center gap-2"},[r("nuxt-link",{staticClass:"btn-outline mt-1 px-16 py-4",attrs:{to:t.localePath("/contact")}},[t._v("\n          "+t._s(t.$t("contact.title"))+"\n        ")])],1)],1)]),t._v(" "),r("div",{staticClass:"flex flex-col my-20 w-full items-center justify-center gap-y-6"},[r("h2",{staticClass:"page-title"},[t._v(t._s(t.$t("home.how-it-works")))]),t._v(" "),r("div",{staticClass:"flex flex-col flex-1 md:flex-row items-center justify-center gap-20 p-8"},[t._m(3),t._v(" "),r("div",{staticClass:"w-10/12 lg:w-1/2 text-primary"},[r("ul",{staticClass:"flex flex-col gap-4"},t._l(t.$t("home.steps"),(function(e,n){return r("li",{key:e+"_"+n,staticClass:"flex flex-col",attrs:{"data-aos":"fade-right","data-aos-delay":t.delay[n]}},[r("div",{staticClass:"flex items-center gap-x-3 w-min secondary-gradient px-3 py-1 whitespace-nowrap"},[r("v-icon",{staticClass:"text-white w-4 h-4",attrs:{name:"check"}}),t._v(" "),r("h3",{staticClass:"step-item"},[t._v("\n                "+t._s(t.$t("home.step")+" "+(n+1))+"\n              ")])],1),t._v(" "),r("h3",{staticClass:"text-secondary text-2xl font-bold"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),r("p",{staticClass:"text-gray-700"},[t._v("\n              "+t._s(e.desc)+"\n            ")])])})),0)])])])],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{Divider:n(392).default,ServiceBadge:n(361).default})}}]);