webpackJsonp([2],{FN3I:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("lUlF"),n=s("R/M+"),o=!1;var a=function(e){o||s("cUM6")},c=s("VU/8")(i.a,n.a,!1,a,null,null);c.options.__file="pages/blogs/_page.vue",t.default=c.exports},"R/M+":function(e,t,s){"use strict";var i=function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"container"},[t("div",[t("h2",[this._v(this._s(this.pages.title))]),t("p",[this._v(this._s(this.pages.text))])])])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};t.a=n},cUM6:function(e,t,s){var i=s("eMqf");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s("rjj0")("60daf9c0",i,!1,{sourceMap:!1})},eMqf:function(e,t,s){(e.exports=s("FZ+f")(!1)).push([e.i,".container{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}",""])},lUlF:function(e,t,s){"use strict";t.a={computed:{pages:function(){return this.$store.getters["pages/pages"]}},created:function(){this.getInfo()},methods:{getInfo:function(){this.$store.dispatch("pages/get",this.$route.params.page)}}}}});