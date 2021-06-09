(window.webpackJsonp=window.webpackJsonp||[]).push([[16,8],{336:function(e,t,n){var content=n(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("895ca644",content,!0,{sourceMap:!1})},346:function(e,t,n){"use strict";n(336)},347:function(e,t,n){var r=n(20)((function(i){return i[1]}));r.push([e.i,".service-card{\n  display:flex;\n  flex-direction:column;\n  justify-content:flex-start;\n  padding:1.5rem;\n  position:relative;\n  gap:0.5rem\n}\n.service-card-header{\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  gap:0.5rem\n}\n@media (min-width: 768px){\n.service-card-header{\n    flex-direction:row\n}\n}\n.service-card-title{\n  -webkit-background-clip:text;\n          background-clip:text;\n  font-weight:700;\n  font-size:1.875rem;\n  line-height:2.25rem;\n  padding-bottom:0.25rem;\n  color:transparent\n}\n.service-card-body{\n  padding-top:0px\n}\n.icon-badge{\n  border-radius:0.5rem;\n  height:3rem;\n  padding:0.75rem;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  width:3rem\n}",""]),e.exports=r},359:function(e,t,n){"use strict";n.r(t);var r={props:["icon","color","link","title","desc"]},c=(n(346),n(4)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"service-card card"},[n("div",{staticClass:"service-card-header"},[n("v-icon",{class:"icon-badge "+e.color+"-gradient",attrs:{name:e.icon}}),e._v(" "),n("h3",{class:"service-card-title "+e.color+"-gradient"},[e._v("\n      "+e._s(e.title)+"\n    ")])],1),e._v(" "),n("p",{staticClass:"service-card-body h-full"},[e._v("\n    "+e._s(e.desc)+"\n  ")]),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"flex items-center gap-x-1"},[n("nuxt-link",{class:"bg-clip-text text-transparent "+e.color+"-gradient font-bold",attrs:{to:e.localePath("/services/"+e.link)}},[e._v("More details")]),e._v(" "),n("v-icon",{staticClass:"w-6 h-6",attrs:{name:"angle-right"}})],1)])}),[],!1,null,null,null);t.default=component.exports},395:function(e,t,n){"use strict";n.r(t);var r={head:function(){return{title:"Services"}}},c=n(4),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-container"},[n("div",{staticClass:"page-header"},[n("h1",{staticClass:"page-title"},[e._v("\n      "+e._s(e.$t("services.title"))+"\n      "),n("div",{staticClass:"page-title-line"})]),e._v(" "),n("p",{staticClass:"page-title-p"},[e._v("\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquid\n      illo corporis officiis fugit laudantium pariatur consequuntur sed ea.\n    ")])]),e._v(" "),n("div",{staticClass:"w-9/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8 px-4 md:px-2 lg:px-4"},e._l(this.$store.state.services,(function(t,r){return n("service-card",{key:r,attrs:{title:e.$t("services.ourServices."+r+".label"),desc:e.$t("services.ourServices."+r+".desc"),link:e.$store.getters.getServiceURL(r),icon:t.icon,color:t.color,"data-aos":"fade-up"}})})),1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ServiceCard:n(359).default})}}]);