(window.webpackJsonp=window.webpackJsonp||[]).push([[12,6],{303:function(t,e,n){var content=n(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("41136422",content,!0,{sourceMap:!1})},311:function(t,e,n){"use strict";n(303)},312:function(t,e,n){var r=n(31)((function(i){return i[1]}));r.push([t.i,".badge{\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center;\n  padding:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(15, 29, 34, var(--tw-text-opacity));\n  row-gap:0.75rem;\n}\n.badge:hover .badge-circle-ring{\n  -webkit-animation:spin 8s linear infinite!important;\n          animation:spin 8s linear infinite!important;\n  border-style:dashed;\n  border-width:2px\n}\n.badge-circle{\n  border-radius:9999px;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  height:5rem;\n  padding:0.5rem;\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  width:5rem\n}\n.badge-circle-ring{\n  --tw-border-opacity:1;\n  border-color:rgba(212, 212, 212, var(--tw-border-opacity));\n  border-radius:9999px;\n  border-width:2px;\n  height:6rem;\n  position:absolute;\n  width:6rem\n}\n.badge-circle-icon{\n  height:2rem;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  width:2rem;\n  z-index:50\n}",""]),t.exports=r},317:function(t,e,n){var content=n(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("bad8e090",content,!0,{sourceMap:!1})},324:function(t,e,n){"use strict";n.r(e);n(137);var r={props:{ind:Number,label:String},data:function(){return{s_details:this.$store.state.services}}},l=(n(311),n(11)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"badge",attrs:{to:t.localePath("/services/"+t.$store.getters.getServiceURL(t.ind)),"data-aos":"fade-up","data-aos-duration":"700"}},[n("div",{class:"badge-circle relative "+t.s_details[t.ind].color+"-gradient"},[n("div",{class:"badge-circle-ring"}),t._v(" "),n("v-icon",{staticClass:"badge-circle-icon",attrs:{name:t.s_details[t.ind].icon}})],1),t._v(" "),n("h3",{class:"bg-clip-text text-transparent "+t.s_details[t.ind].color+"-gradient text-xl font-extrabold capitalize"},[n("em",[t._v(t._s(t.label))])])])}),[],!1,null,null,null);e.default=component.exports},333:function(t,e,n){t.exports=n.p+"img/about-us-home.279b3ef.png"},334:function(t,e,n){t.exports=n.p+"img/steps.60fed5c.png"},335:function(t,e,n){"use strict";n(317)},336:function(t,e,n){var r=n(31)((function(i){return i[1]}));r.push([t.i,".index-bg{\n  height:100%;\n  -o-object-fit:cover;\n     object-fit:cover;\n  position:absolute;\n  top:0px;\n  right:0px;\n  bottom:0px;\n  left:0px;\n  width:100%\n}\n.vue-typer .custom.char.typed{\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.vue-typer .custom.char.selected{\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 115, 22, var(--tw-bg-opacity));\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.vue-typer .custom.caret{\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 115, 22, var(--tw-bg-opacity));\n  margin-left:0.25rem;\n  width:0.5rem\n}\n.step-item{\n  font-weight:700;\n  font-size:1.875rem;\n  line-height:2.25rem;\n  position:relative;\n  --tw-text-opacity:1;\n  color:rgba(251, 146, 60, var(--tw-text-opacity));\n  text-transform:uppercase\n}",""]),t.exports=r},354:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full lg:w-1/2 p-3 md:p-8 lg:p-0"},[e("img",{staticClass:"p-5 md:p-0",attrs:{"data-aos":"fade-down","data-aos-duration":"800",src:n(333),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-10/12 lg:w-1/2 flex items-center justify-center p-4"},[e("img",{staticStyle:{width:"75%",height:"auto"},attrs:{src:n(334),alt:""}})])}],l={data:function(){return{steps:this.$store.state.steps}}},o=(n(335),n(11)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-full flex flex-col flex-1 items-center justify-center gap-y-20 z-50"},[r("div",{staticClass:"w-full min-h-screen flex flex-col lg:flex-row gap-y-4 items-center justify-center relative bg-red-100"},[r("img",{staticClass:"index-bg",attrs:{src:"https://images.pexels.com/photos/5673489/pexels-photo-5673489.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",alt:"Lacom Digital Marketing"}}),t._v(" "),r("div",{staticClass:"dark-overlay"}),t._v(" "),r("div",{staticClass:"flex flex-col items-center justify-center gap-y-4 z-50 text-white",attrs:{"data-aos":"fade-in"}},[r("img",{staticStyle:{width:"30rem"},attrs:{src:n(201),alt:"Lacom Digital Logo"}}),t._v(" "),r("hr",{staticClass:"w-1/2"}),t._v(" "),r("span",{staticClass:"text-center text-xl"},[r("vue-typer",{attrs:{text:t.$t("home.slogan")+" "+t.$t("home.slogan-orange"),repeat:0}})],1)])]),t._v(" "),r("div",{staticClass:"flex flex-1 my-20 justify-center items-center gap-y-10"},[r("div",{staticClass:"w-full flex flex-col lg:flex-row flex-1"},[r("div",{staticClass:"w-full lg:w-1/2 flex flex-col items-center justify-center text-center gap-y-8 p-10 md:p-16 lg:p-20 text-primary",attrs:{"data-aos":"fade-right","data-aos-duration":"800"}},[r("h2",{staticClass:"page-title"},[t._v("\n          "+t._s(t.$t("about.title"))+"\n        ")]),t._v(" "),r("p",[r("span",{staticClass:"font-bold text-secondary"},[t._v("LaCom")]),t._v("\n          "+t._s(t.$t("about.bioShort"))+"\n        ")]),t._v(" "),r("nuxt-link",{staticClass:"btn-secondary-gradient",attrs:{to:t.localePath("/about")}},[t._v("\n          "+t._s(t.$t("buttons.learn-more"))+"\n          "),r("v-icon",{staticClass:"w-4",attrs:{name:"chevron-right"}})],1)],1),t._v(" "),t._m(0)])]),t._v(" "),r("div",{staticClass:"flex flex-1 my-20 flex-col justify-center items-center gap-y-10"},[r("div",{staticClass:"w-full md:w-10/12 text-center space-y-8",attrs:{"data-aos":"fade-down","data-aos-duration":"800"}},[r("h2",{staticClass:"page-title"},[t._v(t._s(t.$t("services.title")))]),t._v(" "),r("p",{staticClass:"page-title-p"},[t._v("\n        On vous propose une large palette de services en communication\n        digitale.\n        "),r("nuxt-link",{staticClass:"text-secondary",attrs:{to:t.localePath("/services")}},[t._v(t._s(t.$t("services.checkout"))+".\n          "),r("v-icon",{staticClass:"w-4 h-4",attrs:{name:"chevron-right"}})],1)],1)]),t._v(" "),r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"},t._l(t.$t("services.ourServices"),(function(t,e){return r("service-badge",{key:t.label,attrs:{ind:e,label:t.label}})})),1)]),t._v(" "),r("div",{staticClass:"w-full secondary-gradient py-10 px-5 shadow-2xl"},[r("div",{staticClass:"w-full md:w-10/12 lg:w-8/12 flex flex-col items-center gap-y-2 text-white text-center mx-auto"},[r("v-icon",{staticClass:"w-12 h-12 animate-pulse",attrs:{name:"envelope-open-text"}}),t._v(" "),r("h2",{staticClass:"text-4xl font-bold"},[t._v(t._s(t.$t("contact.keep-touch")))]),t._v(" "),r("p",[t._v("\n        "+t._s(t.$t("contact.description"))+"\n      ")]),t._v(" "),r("div",{staticClass:"flex flex-col md:flex-row items-center justify-center gap-2"},[r("input",{staticClass:"inpt w-72 text-center",attrs:{type:"email",placeholder:"john.doe@example.com"}}),t._v(" "),r("button",{staticClass:"btn-outline mt-1 px-8"},[t._v("\n          "+t._s(t.$t("buttons.submit"))+"\n        ")])])],1)]),t._v(" "),r("div",{staticClass:"flex flex-col my-20 w-full items-center justify-center gap-y-6"},[r("h2",{staticClass:"page-title"},[t._v(t._s(t.$t("home.how-it-works")))]),t._v(" "),r("div",{staticClass:"flex flex-col flex-1 md:flex-row items-center justify-center gap-20 p-8"},[t._m(1),t._v(" "),r("div",{staticClass:"w-10/12 lg:w-1/2 text-primary"},[r("ul",{staticClass:"space-y-4"},t._l(t.steps,(function(e,n){return r("li",{key:n,attrs:{"data-aos":"fade-up","data-aos-delay":"300","data-aos-duration":"700"}},[r("h3",{staticClass:"step-item"},[r("v-icon",{staticClass:"text-white w-6 h-6 absolute secondary-gradient rounded-full p-1",staticStyle:{left:"-40px",top:"10px"},attrs:{name:"check"}}),t._v("\n              "+t._s(t.$t("home.step")+" "+n)+"\n            ")],1),t._v(" "),r("h3",{staticClass:"text-secondary text-2xl font-bold"},[t._v("\n              Présentation de service\n            ")]),t._v(" "),r("p",[t._v("\n              "+t._s(e)+"\n            ")])])})),0)])])])])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{ServiceBadge:n(324).default})}}]);