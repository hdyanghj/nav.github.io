(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-course-video-list"],{"52a4":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"video-body"},[a("v-uni-view",{staticClass:"video-title"},[t._v("我的课程")]),t._l(t.videoList,function(i,e){return a("v-uni-view",{staticClass:"ac-list",on:{click:function(a){a=t.$handleEvent(a),t.articleDetail(i.id,i.videoFlag)}}},[i.imgShow?a("v-uni-view",{staticClass:"ac-list-img"},[a("v-uni-image",{attrs:{src:i.thumbnail}})],1):t._e(),a("v-uni-view",{staticClass:"ac-list-text",class:i.textWidth},[a("v-uni-view",{staticClass:"ac-list-title"},[a("v-uni-text",{staticClass:"collect-type"},[t._v(t._s(i.name))]),t._v(t._s(i.title))],1),a("v-uni-view",{staticClass:"ac-list-date"},[t._v(t._s(i.buyTime))])],1),a("v-uni-view",{staticClass:"jtright"},[t._v("")])],1)}),a("uni-load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText}})],2)},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},"5edf":function(t,i,a){"use strict";a.r(i);var e=a("8332"),n=a("bad5");for(var o in n)"default"!==o&&function(t){a.d(i,t,function(){return n[t]})}(o);a("e957");var d=a("2877"),l=Object(d["a"])(n["default"],e["a"],e["b"],!1,null,"7ab3816d",null);i["default"]=l.exports},"6e71":function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".vceshi[data-v-da1423d4]{text-align:center}.vceshi uni-view[data-v-da1423d4]{font-size:14px;padding:40px 0;color:#b4b5ba}.video-title[data-v-da1423d4]{width:%?660?%;margin:0 auto;height:%?80?%;line-height:%?80?%;font-size:%?36?%}.ac-list[data-v-da1423d4]{width:%?660?%;height:%?100?%;padding:%?20?% %?45?%;border-bottom:%?20?% solid #f6f6f6;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative}.ac-list-text[data-v-da1423d4]{width:%?410?%;padding-right:%?40?%}.ac-list-title[data-v-da1423d4]{font-size:%?32?%;line-height:%?60?%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:block;white-space:nowrap}.collect-type[data-v-da1423d4]{font-size:%?24?%;padding:%?2?% %?10?%;border-radius:%?5?%;margin-right:%?10?%;background:#6bd8ed;color:#fff}.ac-list-date[data-v-da1423d4]{font-size:%?24?%}.ac-list-img[data-v-da1423d4]{width:%?100?%;height:%?100?%;padding-right:%?30?%}.ac-list-img uni-image[data-v-da1423d4]{width:100%;height:100%;border-radius:%?10?%}.jtright[data-v-da1423d4]{font-family:texticons;position:absolute;right:%?45?%;top:%?50?%}.text-width[data-v-da1423d4]{width:89%}.text-widths[data-v-da1423d4]{width:70%}",""])},7365:function(t,i,a){var e=a("e040");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("5a2455b7",e,!0,{sourceMap:!1,shadowMode:!1})},"77bd":function(t,i,a){"use strict";a.r(i);var e=a("82a5"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,function(){return e[t]})}(o);i["default"]=n.a},"82a5":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n(a("5edf"));function n(t){return t&&t.__esModule?t:{default:t}}var o={components:{uniLoadMore:e.default},data:function(){return{videoList:[],token:"",ceshishow:!1,page:1,loadingType:0,contentText:{contentdown:"上拉显示更多课程",contentrefresh:"正在加载课程...",contentnomore:"已加载全部课程",contenterror:"课程加载失败"}}},onNavigationBarButtonTap:function(t){0==t.index&&uni.navigateBack({delta:1})},mounted:function(){this.loadExecution()},onPullDownRefresh:function(){this.refresh(),setTimeout(function(){uni.stopPullDownRefresh()},1e3)},onReachBottom:function(){this.loadExecution()},methods:{refresh:function(){this.videoList=[],this.page=1,this.loadExecution()},loadExecution:function(){var t=this,i="";uni.getStorage({key:"token",success:function(t){i=t.data}}),this.token=i,this.loadingType=1,uni.request({url:this.$webUrl+this.$userVideo,header:{"content-type":"application/x-www-form-urlencoded",token:this.token},data:{page:this.page,limit:10},method:"GET",success:function(i){var a=i.data.data;console.log(a),10==a.list.length&&(t.loadingType=0),10!=a.list.length&&(t.loadingType=2);for(var e=0;e<a.list.length;e++){var n=a.list[e].thumbnail;""==n&&(t.$set(a.list[e],"imgShow",!1),t.$set(a.list[e],"textWidth","text-width")),""!=n&&(t.$set(a.list[e],"imgShow",!0),t.$set(a.list[e],"textWidth","text-widths")),t.videoList.push(a.list[e])}t.page++},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接失败"})}})},articleDetail:function(t,i){var a="../../video/course-detail?courseId="+t+"&flag="+i;uni.navigateTo({url:a})}}};i.default=o},8332:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"load-more"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.loadingType&&t.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[a("v-uni-view",{staticClass:"load1"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load2"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load3"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1)],1),a("v-uni-text",{staticClass:"loading-text",style:{color:t.color}},[t._v(t._s(0===t.loadingType?t.contentText.contentdown:1===t.loadingType?t.contentText.contentrefresh:2===t.loadingType?t.contentText.contentnomore:t.contentText.contenterror))])],1)},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},"8a5f":function(t,i,a){"use strict";a.r(i);var e=a("52a4"),n=a("77bd");for(var o in n)"default"!==o&&function(t){a.d(i,t,function(){return n[t]})}(o);a("dc0a");var d=a("2877"),l=Object(d["a"])(n["default"],e["a"],e["b"],!1,null,"da1423d4",null);i["default"]=l.exports},9434:function(t,i,a){var e=a("6e71");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("1dddb5fc",e,!0,{sourceMap:!1,shadowMode:!1})},a0bd:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了",contenterror:"加载错误"}}}},data:function(){return{}}};i.default=e},bad5:function(t,i,a){"use strict";a.r(i);var e=a("a0bd"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,function(){return e[t]})}(o);i["default"]=n.a},dc0a:function(t,i,a){"use strict";var e=a("9434"),n=a.n(e);n.a},e040:function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".load-more[data-v-7ab3816d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.loading-img[data-v-7ab3816d]{height:24px;width:24px;margin-right:10px}.loading-text[data-v-7ab3816d]{font-size:%?28?%;color:#777}.loading-img>uni-view[data-v-7ab3816d]{position:absolute}.load1[data-v-7ab3816d],.load2[data-v-7ab3816d],.load3[data-v-7ab3816d]{height:24px;width:24px}.load2[data-v-7ab3816d]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-7ab3816d]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.loading-img>uni-view uni-view[data-v-7ab3816d]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#777;position:absolute;opacity:.2;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-7ab3816d 1.56s ease infinite}.loading-img>uni-view uni-view[data-v-7ab3816d]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.loading-img>uni-view uni-view[data-v-7ab3816d]:nth-child(2){-webkit-transform:rotate(180deg);top:11px;right:0}.loading-img>uni-view uni-view[data-v-7ab3816d]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.loading-img>uni-view uni-view[data-v-7ab3816d]:nth-child(4){top:11px;left:0}.load1 uni-view[data-v-7ab3816d]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-7ab3816d]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-7ab3816d]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-7ab3816d]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-7ab3816d]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-7ab3816d]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-7ab3816d]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-7ab3816d]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-7ab3816d]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-7ab3816d]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-7ab3816d]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-7ab3816d]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-7ab3816d{0%{opacity:1}to{opacity:.2}}",""])},e957:function(t,i,a){"use strict";var e=a("7365"),n=a.n(e);n.a}}]);