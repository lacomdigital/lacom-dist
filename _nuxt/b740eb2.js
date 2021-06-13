(window.webpackJsonp=window.webpackJsonp||[]).push([[18,5],{334:function(t,e,n){"use strict";n.r(e);var l={props:["icon","title","delay"]},d=n(6),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"h-full flex flex-col justify-start items-center gap-2 p-6 text-center shadow-xl rounded-xl bg-gray-50",attrs:{"data-aos":"fade-up","data-aos-delay":t.delay}},[n("v-icon",{staticClass:"w-20 h-20 text-secondary",attrs:{name:t.icon}}),t._v(" "),n("h3",{staticClass:"text-lg text-gray-700 font-bold"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"text-gray-700"},[t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports},349:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("6cdf8dda",content,!0,{sourceMap:!1})},376:function(t,e,n){t.exports=n.p+"img/web-dev.8b14de6.jpg"},377:function(t,e,n){"use strict";n(349)},378:function(t,e,n){var l=n(18)((function(i){return i[1]}));l.push([t.i,"dl#sites-dl{\n  display:flex;\n  flex-direction:column;\n  gap:2rem\n}\ndl#sites-dl .dl-card > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(0.5rem * var(--tw-space-y-reverse))\n}\ndl#sites-dl .dl-card{\n  height:100%;\n  padding:1.5rem\n}\ndl#sites-dl dt{\n  -webkit-background-clip:text;\n          background-clip:text;\n  font-weight:700;\n  font-size:1.25rem;\n  line-height:1.75rem;\n  color:transparent;\n  text-transform:capitalize\n}\ndl#sites-dl dd{\n  text-indent:30px\n}\ndl#values-dl{\n  padding:2rem\n}\ndl#values-dl dt{\n  font-weight:700;\n  text-transform:capitalize\n}\ndl#values-dl div :not(dd){\n  --tw-text-opacity:1;\n  color:rgba(242, 133, 0, var(--tw-text-opacity))\n}",""]),t.exports=l},394:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full"},[e("img",{staticClass:"w-full h-56 object-cover rounded-lg shadow-xl",attrs:{src:n(376),alt:""}})])}],d={data:function(){return{delay1:["300","500","700","900","1000","1200"],engs_icons:["lightbulb","search","users-cog","check-circle"]}}},c=(n(377),n(6)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container mt-10"},[n("div",{staticClass:"w-11/12 md:w-10/12 lg:w-8/12 flex flex-col gap-6",attrs:{"data-aos":"fade-up"}},[t._m(0),t._v(" "),n("div",{staticClass:"space-y-2 text-center py-4"},[n("h1",{staticClass:"text-4xl font-bold text-transparent bg-clip-text secondary-gradient"},[t._v("\n        "+t._s(t.$t("services.web-dev.title"))+"\n      ")]),t._v(" "),n("p",{staticClass:"text-gray-700"},[t._v("\n        "+t._s(t.$t("services.web-dev.intro"))+"\n      ")])]),t._v(" "),n("dl",{attrs:{id:"sites-dl"}},t._l(t.$t("services.web-dev.sites"),(function(e,l){return n("div",{key:e.title,staticClass:"dl-card card",attrs:{"data-aos":"fade-down","data-aos-delay":t.delay1[l]}},[n("dt",{staticClass:"secondary-gradient"},[n("em",[t._v(t._s(e.type))])]),t._v(" "),n("dd",[t._v(t._s(e.desc))])])})),0),t._v(" "),n("div",{staticClass:"space-y-2 text-center pt-8"},[n("h2",{staticClass:"text-secondary text-3xl font-bold"},[t._v("\n        "+t._s(t.$t("services.web-dev.engagements-title"))+"\n      ")]),t._v(" "),n("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 gap-6 py-4"},t._l(t.$t("services.web-dev.engagements"),(function(e,l){return n("mission-card",{key:e.title,attrs:{icon:t.engs_icons[l],title:e.title,delay:t.delay1[l]}},[t._v("\n          "+t._s(e.desc)+"\n        ")])})),1)]),t._v(" "),n("div",{staticClass:"space-y-2 text-center pt-8"},[n("h2",{staticClass:"text-secondary text-3xl font-bold"},[t._v("\n        "+t._s(t.$t("services.web-dev.added-values"))+"\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-col items-center gap-6 py-4"},[n("dl",{attrs:{id:"values-dl"}},t._l(t.$t("services.web-dev.values"),(function(e,l){return n("div",{key:e.title,staticClass:"text-left relative space-y-2",attrs:{"data-aos":"fade-right","data-aos-delay":t.delay1[l]}},[n("v-icon",{staticClass:"w-4 h-4 absolute -left-6 top-1",attrs:{name:"check"}}),t._v(" "),n("dt",[t._v(t._s(e.title))]),t._v(" "),n("dd",[t._v(t._s(e.desc))])],1)})),0)])])])])}),l,!1,null,null,null);e.default=component.exports;installComponents(component,{MissionCard:n(334).default})}}]);