(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-communication-put-question"],{"0c11":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"wrap"},[i("v-uni-view",{staticClass:"first-title"},[t._v("马上提问")]),i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"msg"},[t._v("在这里您可以留下您")]),i("v-uni-view",{staticClass:"msg"},[t._v("的问题以便于大家来共同帮您解决")])],1),i("v-uni-input",{staticClass:"title",attrs:{type:"text",placeholder:"请描述你想提问的问题",maxlength:"30"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),i("v-uni-textarea",{staticClass:"textarea-style",attrs:{value:"",maxlength:"100",placeholder:"请描述您的年龄、性别、症状，以便于在线进行交流， 能够更加准确的回答您的问题","placeholder-class":"placeholder","placeholder-style":"font-size: 28upx;line-height: 40upx;color:#999999"},on:{input:function(e){e=t.$handleEvent(e),t.input(e)}}}),i("v-uni-view",{staticClass:"upload-area"},[i("v-uni-view",{staticClass:"img-container",style:{width:t.imgContainerWidth}},[i("v-uni-scroll-view",{staticClass:"scroll-x",attrs:{"scroll-x":"true"}},[t.showBtn?i("v-uni-view",{staticClass:"img-item img-item-btn"},[i("v-uni-view",{staticClass:"btn",on:{click:function(e){e=t.$handleEvent(e),t.uploadFile(e)}}},[i("v-uni-text",{staticClass:"iconfont cross"},[t._v("")]),i("v-uni-view",{staticClass:"btn-msg"},[t._v("添加图片")])],1)],1):t._e(),t.showIntro?t._e():i("v-uni-view",{staticClass:"img-item"},[i("v-uni-view",{staticClass:"intro"},[t._v("您上传的图片会同时发表以便于其他人 的解答，可上传四张")])],1),t._l(t.imgs,function(e,n){return i("v-uni-view",{key:n,staticClass:"img-item",on:{click:function(e){e=t.$handleEvent(e),t.previewImage(n)}}},[i("v-uni-text",{staticClass:"iconfont",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.deleteImg(n)}}},[t._v("")]),i("v-uni-image",{attrs:{src:e}})],1)})],2)],1)],1)],1)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},1121:function(t,e,i){"use strict";var n=i("f24db"),o=i.n(n);o.a},"8d93":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={notLogin:function(t){var e=t.code,i=t.msg;100005001!=e&&100005002!=e||(i="token不能为空"==i?"未登录":i.replace(/token/g,"登录"),uni.showToast({icon:"none",title:i,duration:1500}),setTimeout(function(){uni.switchTab({url:"/pages/center/center"})},1500))}};e.default=n},9424:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("2f62"),o=a(i("8d93"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){s(t,e,i[e])})}return t}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l={data:function(){return{token:"",imgs:[],content:"",modelId:"",channelId:"",description:"",title:"",upimgurl:[]}},onNavigationBarButtonTap:function(t){var e=this;0==t.index?uni.navigateBack({delta:1}):(clearTimeout(this.timer),this.timer=null,this.timer=setTimeout(function(){clearTimeout(e.timer),e.timer=null;var t=e.title,i=e.content,n=e.channelId,a=e.modelId,r="";e.upimgurl.length>0&&(r=e.upimgurl.join(","));var s=uni.getStorageSync("user_Id");if(t)if(i){var l={title:t,content:i,channelId:n,modelId:a,description:r,author:s};console.log(l);var c=e;uni.request({url:c.$webUrl+c.$insetUserArchivesInfo,method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:c.token},data:l,success:function(t){console.log("普通提问"),console.log(JSON.stringify(t)),0==t.data.code?(c.asyncGetUserArticleList({bottom:!1}),uni.switchTab({url:"/pages/communication/communication"})):o.default.notLogin(t.data)}})}else uni.showToast({icon:"none",title:"请填写内容",duration:2e3});else uni.showToast({icon:"none",title:"请填写标题",duration:2e3})},500))},onLoad:function(t){console.log(t),this.modelId=t.modelId,this.channelId=t.channelId;var e=uni.getStorageSync("token");this.token=e},computed:{showIntro:function(){return this.imgs.length>0},showBtn:function(){return this.imgs.length<4},imgsWidth:function(){return this.imgs.length>0?171*this.imgs.length-20+90:330},imgContainerWidth:function(){return"330px"}},methods:r({},(0,n.mapActions)(["asyncGetUserArticleList"]),{isYtype:function(){var t=this.ytype;this.ytype=!t},input:function(t){this.content=t.detail.value},uploadFile:function(){var t=this;uni.chooseImage({count:4-t.imgs.length,sizeType:["compressed"],sourceType:["album"],success:function(e){uni.showLoading({title:"上传中"}),console.log(JSON.stringify(e.tempFilePaths)),t.imgs=e.tempFilePaths.concat(t.imgs);for(var i=0;i<e.tempFilePaths.length;i++)console.log(i),uni.uploadFile({url:(t.$webUrl+t.$upAvatar).toString(),filePath:e.tempFilePaths[i],fileType:"image",name:"file",formData:{type:4},success:function(e){console.log(e);var i=JSON.parse(e.data);if(i.filename){var n=i.filename;t.upimgurl.push(n)}uni.hideLoading()},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接失败"})}})}})},previewImage:function(t){var e=this.imgs;uni.previewImage({current:this.imgs[t],urls:e})},deleteImg:function(t){console.log("delete img......"),this.imgs.splice(t,1),this.upimgurl.splice(t,1)}})};e.default=l},e927:function(t,e,i){"use strict";i.r(e);var n=i("0c11"),o=i("f24d");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("1121");var r=i("2877"),s=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"2eea6842",null);e["default"]=s.exports},f24d:function(t,e,i){"use strict";i.r(e);var n=i("9424"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},f24db:function(t,e,i){var n=i("f7ad");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("517f9e7f",n,!0,{sourceMap:!1,shadowMode:!1})},f7ad:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.msg[data-v-2eea6842]{overflow:hidden;padding-right:%?30?%;font-size:%?27?%;font-weight:400;color:rgba(0,0,0,.7);line-height:%?34?%}.top>.switch-box[data-v-2eea6842]{float:right;font-size:%?28?%;line-height:%?34?%;color:#999}.title[data-v-2eea6842]{height:%?84?%;padding:0 %?20?%;margin:%?36?% 0;font-size:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#f0f0f0;border-radius:4px}.list[data-v-2eea6842]{margin-top:%?40?%}.list[data-v-2eea6842]:after{content:"";display:table;clear:both}.item[data-v-2eea6842]{width:%?140?%;height:%?64?%;float:left;margin-right:%?30?%;margin-bottom:%?20?%;line-height:%?64?%;text-align:center;font-size:%?24?%;background:#fff;-webkit-box-shadow:0 %?4?% %?8?% 0 rgba(0,0,0,.15);box-shadow:0 %?4?% %?8?% 0 rgba(0,0,0,.15);border-radius:%?8?%}.item[data-v-2eea6842]:nth-child(4n){margin-right:0}.textarea-style[data-v-2eea6842]{width:100%;height:%?400?%;padding:%?32?%;margin:%?40?% 0;font-size:%?28?%;line-height:%?40?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?8?%;border:1px solid #c1c1c1}.placeholder[data-v-2eea6842]{font-size:%?28?%;font-family:PingFangSC-Regular;font-weight:400;color:rgba(0,0,0,.7);line-height:%?34?%}.scroll-x[data-v-2eea6842]{width:%?700?%;height:%?420?%;white-space:nowrap;\n\t/* padding-right: 20upx; */-webkit-box-sizing:border-box;box-sizing:border-box}.btn[data-v-2eea6842]{width:%?196?%;height:%?196?%;\n\t/* float: left; */margin-right:%?18?%;padding-top:%?56?%;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:hsla(0,0%,87.8%,.75);border-radius:4px}.cross[data-v-2eea6842]{width:%?48?%;height:%?48?%;background:#fff;border:1px solid #9b9b9b;border-radius:50%}.btn-msg[data-v-2eea6842]{padding-top:%?20?%;font-size:%?24?%;color:#4a4a4a;line-height:%?28?%}.intro[data-v-2eea6842]{padding-left:%?18?%;overflow:hidden;font-size:%?24?%;font-family:PingFangSC-Regular;font-weight:400;color:rgba(0,0,0,.7);line-height:%?34?%}.img-container[data-v-2eea6842]{\n\t/* padding-left: 18upx; */overflow:hidden;overflow-x:scroll}.img-item[data-v-2eea6842]{position:relative;display:inline-block;width:%?280?%;height:%?420?%;margin-right:%?40?%;\n\t/* float: left; */word-wrap:break-word;white-space:pre-wrap;border-radius:%?8?%;overflow:hidden}.img-item>.iconfont[data-v-2eea6842]{position:absolute;right:0;top:0;display:inline-block;width:%?60?%;height:%?60?%;color:#03b2ca;text-align:center;line-height:%?60?%;border-radius:50%;font-size:%?30?%;font-weight:700;z-index:999}.img-item-btn[data-v-2eea6842]{width:%?196?%}.img-item>uni-image[data-v-2eea6842]{width:100%;height:100%;border-radius:%?8?%;border:1px solid #e8e8e8;-webkit-box-sizing:border-box;box-sizing:border-box}',""])}}]);