(window.webpackJsonp=window.webpackJsonp||[]).push([[13,6],{354:function(t,e,l){"use strict";l.r(e);var r={name:"plan-card",props:{recommended:{type:Boolean,required:!1},plan:{type:String,required:!0},grad:{type:String,default:"secondary"}},computed:{features:function(){return this.$store.state.offers[2]}}},n=l(6),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{class:"flex flex-col p-2 h-full "+(t.recommended?"rounded border-2 border-dashed border-blue-700":"")},[l("div",{class:"flex items-center justify-center "+t.grad+"-gradient h-24 rounded-t"},[l("h4",{staticClass:"text-white uppercase text-2xl font-bold"},[t._v("\n      "+t._s(t.plan)+"\n    ")])]),t._v(" "),l("div",{staticClass:"flex flex-col gap-y-1 bg-white p-4 rounded-b shadow-2xl h-full lg:h-auto"},[l("div",{class:"bg-orange-500 rounded p-1 mb-3 text-white text-xs font-bold text-center "+(t.recommended?"":"opacity-0")},[t._v("\n      RECOMMENDED\n    ")]),t._v(" "),l("ul",{staticClass:"flex flex-col gap-y-2 text-left text-gray-900 space-y-1"},[l("li",[l("v-icon",{staticClass:"w-8 h-8 text-blue-600",attrs:{name:"brands/facebook"}}),t._v(" "),l("v-icon",{staticClass:"w-8 h-8 text-gray-700",attrs:{name:"brands/instagram"}}),t._v(" "),l("v-icon",{staticClass:"w-8 h-8 text-blue-600",attrs:{name:"brands/linkedin"}})],1),t._v(" "),t._l(this.$store.state.offers[t.plan],(function(e){return l("li",{key:e,staticClass:"text-sm font-semibold space-x-4 space-y-1 relative opacity-75"},[l("span",{class:"w-4 h-4 bg-primary rounded-full text-white text-center text-xs absolute",staticStyle:{top:"8px"}},[t._v("\n          ✔\n        ")]),t._v(" "),l("p",{staticClass:"pl-2"},[t._v("\n          "+t._s(e)+"\n        ")]),t._v(" "),l("hr",{staticClass:"opacity-50 w-full"})])})),t._v(" "),l("li",{staticClass:"text-2xl uppercase font-bold text-center"},[t._v("\n        "+t._s(this.$store.state.offers.prices[t.plan])+"\n        "),l("div",{staticClass:"text-sm opacity-75 inline-flex"},[t._v("DZD/Mo")])])],2)])])}),[],!1,null,null,null);e.default=component.exports},389:function(t,e,l){"use strict";l.r(e);var r={head:function(){return{title:"Plans"}}},n=l(6),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"page-container z-50"},[l("div",{staticClass:"page-header"},[l("h1",{staticClass:"page-title"},[t._v(t._s(t.$t("offers.title")))]),t._v(" "),l("p",{staticClass:"page-title-p"},[t._v("\n      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quasi\n      quibusdam qui dolores necessitatibus veritatis corrupti est modi\n      recusandae! Delectus culpa perferendis omnis officia id magni laborum\n      iure fugit aliquid.\n    ")])]),t._v(" "),l("div",{staticClass:"w-10/12 grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-5 flex-1 gap-0"},[l("plan-card",{attrs:{grad:"secondary",plan:"standard"}}),t._v(" "),l("plan-card",{attrs:{grad:"gray",plan:"standard +"}}),t._v(" "),l("plan-card",{attrs:{grad:"blue",plan:"premium",recommended:""}}),t._v(" "),l("plan-card",{attrs:{grad:"teal",plan:"premium +"}}),t._v(" "),l("plan-card",{attrs:{grad:"violet",plan:"prestige"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PlanCard:l(354).default})}}]);