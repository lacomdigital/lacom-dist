(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{331:function(t,e,n){var content=n(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("41136422",content,!0,{sourceMap:!1})},340:function(t,e,n){"use strict";n(331)},341:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,".badge{\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  justify-content:center;\n  padding:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(15, 29, 34, var(--tw-text-opacity));\n  row-gap:0.75rem;\n}\n.badge:hover .badge-circle-ring{\n  -webkit-animation:spin 8s linear infinite!important;\n          animation:spin 8s linear infinite!important;\n  border-style:dashed;\n  border-width:2px\n}\n.badge-circle{\n  border-radius:9999px;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  height:5rem;\n  padding:0.5rem;\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  width:5rem\n}\n.badge-circle-ring{\n  --tw-border-opacity:1;\n  border-color:rgba(212, 212, 212, var(--tw-border-opacity));\n  border-radius:9999px;\n  border-width:2px;\n  height:6rem;\n  position:absolute;\n  width:6rem\n}\n.badge-circle-icon{\n  height:2rem;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  width:2rem;\n  z-index:50\n}",""]),t.exports=r},353:function(t,e,n){"use strict";n.r(e);n(28);var r={props:{ind:Number,label:String},data:function(){return{s_details:this.$store.state.services}}},o=(n(340),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"badge",attrs:{to:t.localePath("/services/"+t.$store.getters.getServiceURL(t.ind)),"data-aos":"fade-up","data-aos-duration":"700"}},[n("div",{class:"badge-circle relative "+t.s_details[t.ind].color+"-gradient"},[n("div",{class:"badge-circle-ring"}),t._v(" "),n("v-icon",{staticClass:"badge-circle-icon",attrs:{name:t.s_details[t.ind].icon}})],1),t._v(" "),n("h3",{class:"bg-clip-text text-transparent "+t.s_details[t.ind].color+"-gradient text-xl font-extrabold capitalize"},[n("em",[t._v(t._s(t.label))])])])}),[],!1,null,null,null);e.default=component.exports}}]);