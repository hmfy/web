(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-test-child"],{"082b":function(n,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{}},onShow:function(){},onLoad:function(n){this.initData()},onHide:function(){},onUnload:function(){},beforeDestroy:function(){},methods:{goDetail:function(){uni.navigateTo({url:"/pages/test/child-detail"})}}};t.default=i},"0c95":function(n,t,e){"use strict";e.r(t);var i=e("6253"),o=e("a2ef");for(var u in o)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(u);var a=e("f0c5"),c=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"31483958",null,!1,i["a"],void 0);t["default"]=c.exports},6253:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("div",[n._v("子页面")]),e("div",[n._v("这个页面需要横屏")]),e("div",{staticStyle:{height:"30px","line-height":"30px",width:"100px","text-align":"center",border:"1px solid #ccc"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.goDetail.apply(void 0,arguments)}}},[n._v("去详情页")])])},o=[]},a2ef:function(n,t,e){"use strict";e.r(t);var i=e("082b"),o=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(u);t["default"]=o.a}}]);