(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{352:function(e,t,n){e.exports=n.p+"img/graphic-design-1.bf65727.jpg"},376:function(e,t,n){var map={"./bc.jpg":377,"./branding.jpg":378,"./brochure.jpg":379,"./flyer.jpg":380,"./flyers.png":381,"./graphic-design-1.jpg":352,"./graphic-design.jpg":382,"./page-layout.jpg":383,"./res-menu.jpg":384};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=c,e.exports=r,r.id=376},377:function(e,t,n){e.exports=n.p+"img/bc.f475175.jpg"},378:function(e,t,n){e.exports=n.p+"img/branding.735aa6c.jpg"},379:function(e,t,n){e.exports=n.p+"img/brochure.c94a70e.jpg"},380:function(e,t,n){e.exports=n.p+"img/flyer.74385b9.jpg"},381:function(e,t,n){e.exports=n.p+"img/flyers.d438dbc.png"},382:function(e,t,n){e.exports=n.p+"img/graphic-design.ec4615e.jpg"},383:function(e,t,n){e.exports=n.p+"img/page-layout.d839b9e.jpg"},384:function(e,t,n){e.exports=n.p+"img/res-menu.70f49a1.jpg"},398:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"w-full"},[t("img",{staticClass:"w-full object-cover rounded-lg shadow-xl",attrs:{src:n(352),alt:"Graphic Design Lacom"}})])}],c={data:function(){return{graphics:[{img:"flyer.jpg",label:"Flyers"},{img:"bc.jpg",label:"Cartes de Visite"},{img:"brochure.jpg",label:"Brochure"},{img:"res-menu.jpg",label:"Menu Restaurant"},{img:"page-layout.jpg",label:"Mise en Page"},{img:"branding.jpg",label:"Branding"}]}},methods:{getImage:function(e){return console.log(e),n(376)("./".concat(e))}}},l=n(4),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-container mt-10"},[n("div",{staticClass:"w-11/12 md:w-10/12 lg:w-8/12 flex flex-col gap-6",attrs:{"data-aos":"fade-up"}},[e._m(0),e._v(" "),n("div",{staticClass:"space-y-2 text-center py-4"},[n("h1",{staticClass:"text-4xl font-bold text-transparent bg-clip-text secondary-gradient py-2"},[e._v("\n        "+e._s(e.$t("services.graphic-design.title"))+"\n      ")]),e._v(" "),n("h4",{staticClass:"text-2xl font-semibold"},[e._v("\n        "+e._s(e.$t("services.graphic-design.slogan"))+"\n      ")]),e._v(" "),n("p",{staticClass:"text-gray-700"},[e._v("\n        "+e._s(e.$t("services.graphic-design.intro"))+"\n      ")])]),e._v(" "),n("div",{staticClass:"grid grid-cols-3 gap-4"},e._l(e.graphics,(function(g){return n("div",{key:g.label,staticClass:"flex flex-col items-center justify-center gap-2 p-2 text-center",attrs:{"data-aos":"fade-down"}},[n("img",{staticClass:"w-72 h-72 object-cover shadow",attrs:{src:e.getImage(g.img),alt:g.label+" Lacom"}}),e._v(" "),n("h3",{staticClass:"font-bold text-gray-600"},[e._v(e._s(g.label))])])})),0)])])}),r,!1,null,null,null);t.default=component.exports}}]);