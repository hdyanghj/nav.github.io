(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"2f9c":function(n,t,e){"use strict";e.r(t);var u=e("f4d4"),a=e.n(u);for(var i in u)"default"!==i&&function(n){e.d(t,n,function(){return u[n]})}(i);t["default"]=a.a},a26a:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"content"})},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},ded8:function(n,t,e){"use strict";e.r(t);var u=e("a26a"),a=e("2f9c");for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);var r=e("2877"),c=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,"61b21789",null);t["default"]=c.exports},f4d4:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}},onLoad:function(){this.loadExecution()},methods:{loadExecution:function(){var n="";uni.getStorage({key:"launchFlag",success:function(t){n=t.data}}),1==n?uni.switchTab({url:"./main"}):uni.redirectTo({url:"./guide"})}}};t.default=u}}]);