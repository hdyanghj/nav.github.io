(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-communication-consult-expert-detail"],{"0ec2":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"first-title"},[t._v("回复")]),a("v-uni-view",{staticClass:"detail"},[t.videoUrl?a("v-uni-view",{staticClass:"video-box"},[a("v-uni-video",{attrs:{src:t.videoUrl}})],1):t._e(),a("v-uni-view",{staticClass:"article-title"},[t._v(t._s(t.title))]),a("v-uni-view",{staticClass:"pub-time"},[t._v(t._s(t.utime))]),t.remark?a("v-uni-view",{staticClass:"beizhu"},[t._v("备注 "+t._s(t.remark))]):t._e(),a("v-uni-view",{staticClass:"msg"},[t._v(t._s(t.content))]),a("v-uni-view",{staticClass:"banner"},[a("v-uni-scroll-view",{staticClass:"scrolls-x",attrs:{"scroll-x":"true"}},t._l(t.bannerList,function(t,e){return a("v-uni-view",{key:e,staticClass:"banners-item"},[a("v-uni-image",{attrs:{src:t}})],1)}),1)],1)],1),a("v-uni-view",{staticClass:"reply-list"},t._l(t.replyList,function(e,i){return a("v-uni-view",{key:i,staticClass:"comment",on:{click:function(e){e=t.$handleEvent(e),t.replyORdelete(i)}}},[e.headSculpture?a("v-uni-view",[a("v-uni-image",{attrs:{src:e.headSculpture}})],1):"no-comment"!=e.anonymity?a("v-uni-view",[a("v-uni-image",{attrs:{src:"../../static/avatar_you.png"}})],1):t._e(),a("v-uni-view",{staticClass:"comment-sub"},[a("v-uni-view",{staticClass:"comment-from"},[t._v(t._s(e.username))]),a("v-uni-view",{staticClass:"comment-time"},[t._v(t._s(e.createDate))]),a("v-uni-view",{staticClass:"comment-content"},[t._v(t._s(e.content))])],1)],1)}),1),0==t.replyList.length?a("v-uni-view",{staticClass:"none-reply"},[a("v-uni-image",{attrs:{src:"/static/no-reply.png"}}),a("v-uni-view",[t._v("还没有评论 快来说两句")])],1):t._e(),a("uni-load-more",{attrs:{loadingType:t.loadingType,contentText:t.contentText}}),a("v-uni-view",{staticClass:"clear-fix"}),a("v-uni-view",{staticClass:"reply"},[a("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"回复",maxlength:"120","placeholder-style":"font-size:28upx;font-family:PingFangSC-Regular;line-height:40upx;color: #999;",focus:t.autoFocus},model:{value:t.commentVal,callback:function(e){t.commentVal=e},expression:"commentVal"}}),a("v-uni-view",{staticClass:"btn",on:{click:function(e){e=t.$handleEvent(e),t.confirm(e)}}},[t._v("发表")])],1)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"10ec":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(a("5edf")),n=o(a("8d93"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t){return l(t)||s(t)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var c={components:{uniLoadMore:i.default},data:function(){return{loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"},token:"",aid:-1,bannerList:[],videoUrl:"",title:"",content:"",remark:"",utime:"",username:"",userId:"",headSculpture:"",replyList:[],autoFocus:!1,pid:0,pageNo:1,pageSize:8,commentVal:"",total:-1}},computed:{bannerContentWidth:function(){return 161*this.bannerList.length+"px"}},onNavigationBarButtonTap:function(t){0==t.index&&uni.navigateBack({delta:1})},onLoad:function(t){console.log(t);var e=this,a=uni.getStorageSync("token");e.token=a;var i=uni.getStorageSync("user_Id");e.userId=i,uni.request({url:e.$webUrl+e.$cmsconsultDetail+t.id,method:"GET",header:{token:e.token},data:t,success:function(t){if(console.log(t),0==t.data.code){var a=t.data.data,i=/\.(mp4|flv|m3u8|rtmp|hls|rtsp)(\?.*)?$/gi;a.imgUrl.match(i)?e.videoUrl=a.imgUrl:a.imgUrl&&(e.bannerList=a.imgUrl.split(",")),e.title=a.title,e.content=a.content,e.utime=a.updateDate,e.aid=a.id,e.username=a.username,e.remark=a.remark,e.headSculpture=a.headSculpture,e.getCommentsPage()}}})},onReachBottom:function(){var t=this;this.total!=this.replyList.length?(this.loadingType=1,setTimeout(function(){var e=t.pageNo;e++,t.pageNo=e,t.getCommentsPage()},500)):this.loadingType=2},methods:{replyORdelete:function(t){var e=this,a=e.userId,i=["回复"];a==e.replyList[t].userId&&i.push("删除"),uni.showActionSheet({itemList:i,success:function(a){if(console.log("选中了第"+(a.tapIndex+1)+"个按钮"),0==a.tapIndex){var i=e.replyList[t].id;e.pid=i,console.log(i),e.commentVal="@"+e.replyList[t].username+" ",e.autoFocus=!0}else e.delComment(t)},fail:function(t){console.log(t.errMsg)}})},delComment:function(t){var e=this,a=e.replyList[t].id,i=uni.getStorageSync("user_Id"),o=e.replyList[t].userId;o==i&&uni.request({url:e.$webUrl+e.$cmscommentDelete,method:"POST",header:{token:e.token,"content-type":"application/x-www-form-urlencoded"},data:{id:a},success:function(a){console.log("删除评论！"),console.log(JSON.stringify(a)),0==a.data.code?e.replyList.splice(t,1):n.default.notLogin(a.data)}})},confirm:function(t){var e=this,a=e.commentVal,i=e.aid,o=e.userId,r=e.pid;if(a){var d={aid:i,userId:o,content:a,pid:r};wx.request({url:e.$webUrl+e.$cmscomment,method:"POST",header:{token:e.token},data:d,success:function(t){console.log(JSON.stringify(t)),0==t.data.code?(e.pageNo=1,e.replyList=[],e.commentVal="",e.getCommentsPage(),e.pid=0,e.autoFocus=!1):n.default.notLogin(t.data)}})}else uni.showToast({icon:"none",title:"请填写内容",duration:2e3})},getCommentsPage:function(){var t=this,e=t.aid,a=t.pageNo,i=t.pageSize;uni.request({url:this.$webUrl+this.$cmscommentPage,method:"GET",header:{token:t.token},data:{aid:e,page:a,limit:i},success:function(e){console.log("评论分页"),console.log(e),t.replyList=[].concat(r(t.replyList),r(e.data.data.list)),t.total=e.data.data.total,t.total==t.replyList.length?t.loadingType=2:t.loadingType=0}})}}};e.default=c},4292:function(t,e,a){"use strict";a.r(e);var i=a("0ec2"),n=a("6074");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("a6d9");var r=a("2877"),d=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"43bb88ae",null);e["default"]=d.exports},"5edf":function(t,e,a){"use strict";a.r(e);var i=a("8332"),n=a("bad5");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("e957");var r=a("2877"),d=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"7ab3816d",null);e["default"]=d.exports},6074:function(t,e,a){"use strict";a.r(e);var i=a("10ec"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},7365:function(t,e,a){var i=a("e040");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("5a2455b7",i,!0,{sourceMap:!1,shadowMode:!1})},"820b":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".container[data-v-43bb88ae]{margin:0 %?34?%}.video-box[data-v-43bb88ae]{width:100%;height:%?400?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:%?40?%;border:3px solid #e8e8e8}.video-box>uni-video[data-v-43bb88ae]{width:100%;height:100%}.beizhu[data-v-43bb88ae]{margin-top:%?30?%;padding:%?15?%;font-size:%?26?%;background:#e8e8e8;border-radius:%?5?%}.article-title[data-v-43bb88ae]{font-weight:550}.title[data-v-43bb88ae]{margin:%?30?% 0}.sub-title[data-v-43bb88ae]{margin:%?30?% 0 %?10?%}.sub-title>uni-image[data-v-43bb88ae],.title>uni-image[data-v-43bb88ae]{width:%?76?%;height:%?76?%;float:left;border-radius:50%}.sub-title>uni-view[data-v-43bb88ae],.title>uni-view[data-v-43bb88ae]{overflow:hidden;padding-left:%?28?%}.nick-name[data-v-43bb88ae]{font-size:%?28?%;color:rgba(0,0,0,.75);line-height:%?45?%}.little-nick-name[data-v-43bb88ae]{font-size:%?30?%}.sub-nick-name[data-v-43bb88ae]{line-height:%?48?%;font-size:%?26?%}.pub-time[data-v-43bb88ae]{font-size:%?24?%;color:rgba(0,0,0,.75);line-height:%?25?%}.msg[data-v-43bb88ae]{padding:%?40?% %?20?%;font-size:%?33?%;color:#4a4a4a;line-height:%?40?%}.sub-msg[data-v-43bb88ae]{padding-left:%?20?%;font-size:%?30?%;color:#4a4a4a;line-height:%?40?%}.banner[data-v-43bb88ae]{width:%?700?%}.scrolls-x[data-v-43bb88ae]{white-space:nowrap;width:100%}.banners-item[data-v-43bb88ae]{display:inline-block;width:%?302?%;height:%?420?%;border-radius:%?8?%;overflow:hidden;margin-right:%?20?%\n\t/* float: left; */}.banners-item>uni-image[data-v-43bb88ae]{width:100%;height:100%}.reply-item[data-v-43bb88ae]{margin-top:%?30?%}.clear-fix[data-v-43bb88ae]{height:%?96?%}.reply-list[data-v-43bb88ae]{margin-top:%?30?%}.reply[data-v-43bb88ae]{position:fixed;left:0;bottom:0;right:0;width:%?750?%;height:%?96?%;padding:0 %?16?% 0 %?34?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#e8e8e8}.input[data-v-43bb88ae]{width:%?660?%;height:%?64?%;padding:0 %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;border-radius:%?40?%;font-size:%?28?%}.btn[data-v-43bb88ae]{width:%?90?%;height:%?64?%;margin-right:%?16?%;line-height:%?64?%;text-align:center;font-size:%?30?%;color:#03b2ca;border-radius:%?45?%;-webkit-box-sizing:border-box;box-sizing:border-box\n\t/* border:1px solid rgba(151,151,151,0.5); */\n\t/* background: #fff; */}.none-reply[data-v-43bb88ae]{width:%?304?%;margin:%?200?% auto 0;text-align:center;opacity:.5}.none-reply>uni-image[data-v-43bb88ae]{width:%?200?%;height:%?114?%}.none-reply>uni-view[data-v-43bb88ae]{margin-top:%?20?%;font-size:%?26?%;color:#333}",""])},8332:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"load-more"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.loadingType&&t.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[a("v-uni-view",{staticClass:"load1"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load2"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load3"},[a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}}),a("v-uni-view",{style:{background:t.color}})],1)],1),a("v-uni-text",{staticClass:"loading-text",style:{color:t.color}},[t._v(t._s(0===t.loadingType?t.contentText.contentdown:1===t.loadingType?t.contentText.contentrefresh:2===t.loadingType?t.contentText.contentnomore:t.contentText.contenterror))])],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"8d93":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={notLogin:function(t){var e=t.code,a=t.msg;100005001!=e&&100005002!=e||(a="token不能为空"==a?"未登录":a.replace(/token/g,"登录"),uni.showToast({icon:"none",title:a,duration:1500}),setTimeout(function(){uni.switchTab({url:"/pages/center/center"})},1500))}};e.default=i},a0bd:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了",contenterror:"加载错误"}}}},data:function(){return{}}};e.default=i},a6d9:function(t,e,a){"use strict";var i=a("e041"),n=a.n(i);n.a},bad5:function(t,e,a){"use strict";a.r(e);var i=a("a0bd"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},e040:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".load-more[data-v-7ab3816d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.loading-img[data-v-7ab3816d]{height:24px;width:24px;margin-right:10px}.loading-text[data-v-7ab3816d]{font-size:%?28?%;color:#777}.loading-img>uni-view[data-v-7ab3816d]{position:absolute}.load1[data-v-7ab3816d],.load2[data-v-7ab3816d],.load3[data-v-7ab3816d]{height:24px;width:24px}.load2[data-v-7ab3816d]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-7ab3816d]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.loading-img>uni-view uni-view[data-v-7ab3816d]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#777;position:absolute;opacity:.2;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-7ab3816d 1.56s ease infinite}.loading-img>uni-view uni-view[data-v-7ab3816d]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.loading-img>uni-view uni-view[data-v-7ab3816d]:nth-child(2){-webkit-transform:rotate(180deg);top:11px;right:0}.loading-img>uni-view uni-view[data-v-7ab3816d]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.loading-img>uni-view uni-view[data-v-7ab3816d]:nth-child(4){top:11px;left:0}.load1 uni-view[data-v-7ab3816d]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-7ab3816d]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-7ab3816d]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-7ab3816d]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-7ab3816d]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-7ab3816d]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-7ab3816d]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-7ab3816d]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-7ab3816d]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-7ab3816d]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-7ab3816d]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-7ab3816d]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-7ab3816d{0%{opacity:1}to{opacity:.2}}",""])},e041:function(t,e,a){var i=a("820b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("e4dbae7e",i,!0,{sourceMap:!1,shadowMode:!1})},e957:function(t,e,a){"use strict";var i=a("7365"),n=a.n(i);n.a}}]);