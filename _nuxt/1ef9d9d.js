(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{236:function(t,e,n){var content=n(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("1b7833da",content,!0,{sourceMap:!1})},238:function(t,e,n){var map={"./blog-1.jpg":239,"./blog-2.jpg":240};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=238},239:function(t,e,n){t.exports=n.p+"img/blog-1.a738efc.jpg"},240:function(t,e,n){t.exports=n.p+"img/blog-2.adaa5d4.jpg"},241:function(t,e,n){"use strict";n(236)},242:function(t,e,n){var r=n(40)(!1);r.push([t.i,".home-page{padding:50px 30px}h2{margin-bottom:30px;text-align:center}.articles{margin:0 auto;max-width:800px}.article{margin-bottom:15px}.article-inner{padding:15px;background:#fff;box-shadow:0 3px 6px rgba(0,0,0,.1);border-radius:8px;display:flex}.article-inner img{display:block;width:100%;max-width:300px}.article-inner .detail{padding-left:15px;padding-right:15px}h3{color:#212121;font-size:24px}h3,p{text-decoration:none}p{color:#888;font-size:18px}",""]),t.exports=r},258:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(38),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("blog",r.slug).only(["title","description","img","slug"]).sortBy("createdAt","asc").fetch();case 3:return o=e.sent,e.abrupt("return",{articles:o});case 5:case"end":return e.stop()}}),e)})))()}}),c=(n(241),n(23)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[r("h2",[t._v("Latest Posts")]),t._v(" "),r("div",{staticClass:"articles"},t._l(t.articles,(function(article,e){return r("div",{key:e,staticClass:"article"},[r("nuxt-link",{attrs:{to:{name:"slug",params:{slug:article.slug}}}},[r("div",{staticClass:"article-inner"},[r("img",{attrs:{src:n(238)("./"+article.img),alt:""}}),t._v(" "),r("div",{staticClass:"detail"},[r("h3",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))])])])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);