(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-communication-put-question2"],{1731:function(e,t,i){var n=i("c2c3");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("da8cb092",n,!0,{sourceMap:!1,shadowMode:!1})},"19f7":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("8d93"));function a(e){return e&&e.__esModule?e:{default:e}}var o={data:function(){return{fee:0,firstLevelClass:"",secondLevelClass:"",remark:"",token:"",imgs:[],content:"",description:"",title:"",upimgurl:[]}},onNavigationBarButtonTap:function(e){var t=this;0==e.index?uni.navigateBack({delta:1}):(clearTimeout(this.timer),this.timer=null,this.timer=setTimeout(function(){clearTimeout(t.timer),t.timer=null;var e=t.fee,i=t.title,a=t.content,o=t.remark,r=t.firstLevelClass,s=t.secondLevelClass,l="";t.upimgurl.length>0&&(l=t.upimgurl.slice(0,4).join(","));var d=uni.getStorageSync("user_Id");if(i)if(a){var u={totalAmount:e,orderSource:1,consultType:1,title:i,content:a,secondLevelClass:s,firstLevelClass:r,imgUrl:l,author:d,remark:o};console.log(u);var c=t;uni.request({url:c.$webUrl+c.$cmsconsult,method:"POST",header:{token:c.token},data:u,success:function(e){if(console.log(e),console.log(JSON.stringify(e)),0==e.data.code){var t=e.data.data.orderId,i=e.data.data.orderNum;uni.navigateTo({url:"/pages/communication/pay?fee="+c.fee+"&orderId="+t+"&orderNum="+i})}else n.default.notLogin(e.data)}})}else uni.showToast({icon:"none",title:"请填写内容",duration:2e3});else uni.showToast({icon:"none",title:"请填写标题",duration:2e3})},500))},onLoad:function(e){console.log(e),this.fee=e.fee,this.firstLevelClass=e.firstLevelClass,this.secondLevelClass=e.secondLevelClass;var t=uni.getStorageSync("token");this.token=t},computed:{showIntro:function(){return this.imgs.length>0},showBtn:function(){return this.imgs.length<4},imgsWidth:function(){return this.imgs.length>0?171*this.imgs.length-20+90:330},imgContainerWidth:function(){return"330px"}},methods:{isYtype:function(){var e=this.ytype;this.ytype=!e},remarkContent:function(e){this.remark=e.detail.value},input:function(e){this.content=e.detail.value},uploadFile:function(){var e=this;uni.chooseImage({count:4-e.imgs.length,sizeType:["compressed"],sourceType:["album"],success:function(t){if(uni.showLoading({title:"上传中"}),console.log(JSON.stringify(t.tempFilePaths)),e.imgs>=4)uni.showToast({icon:"none",title:"最多四张",duration:1e3});else{e.imgs=t.tempFilePaths.concat(e.imgs);for(var i=0;i<t.tempFilePaths.length;i++)uni.uploadFile({url:(e.$webUrl+e.$upAvatar).toString(),filePath:t.tempFilePaths[i],fileType:"image",name:"file",formData:{type:5},success:function(t){console.log(t);var i=JSON.parse(t.data);if(i.filename){var n=i.filename;e.upimgurl.push(n)}uni.hideLoading()},fail:function(e){uni.showToast({icon:"none",duration:3e3,title:"网络连接失败"})}})}}})},previewImage:function(e){var t=this.imgs;uni.previewImage({current:this.imgs[e],urls:t})},deleteImg:function(e){console.log("delete img......"),this.imgs.splice(e,1),this.upimgurl.splice(e,1)}}};t.default=o},2008:function(e,t,i){"use strict";i.r(t);var n=i("2b6f"),a=i("5a2b");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("db27");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"e937a194",null);t["default"]=s.exports},"2b6f":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"wrap"},[i("v-uni-view",{staticClass:"first-title"},[e._v("马上提问")]),i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"msg"},[e._v("在这里您可以留下您")]),i("v-uni-view",{staticClass:"msg"},[e._v("的问题以便于大家来共同帮您解决")])],1),i("v-uni-input",{staticClass:"title",attrs:{type:"text",placeholder:"提问标题(最多50字)",maxlength:"50"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),i("v-uni-textarea",{staticClass:"textarea-style",attrs:{value:"",maxlength:"100",placeholder:"请描述您的年龄、性别、症状，以便于在线进行交流， 能够更加准确的回答您的问题","placeholder-class":"placeholder","placeholder-style":"font-size: 28upx;line-height: 40upx;color:#999999"},on:{input:function(t){t=e.$handleEvent(t),e.input(t)}}}),i("v-uni-view",{staticClass:"remark"},[i("v-uni-view",{staticClass:"remark-title"},[e._v("备注：")]),i("v-uni-textarea",{staticClass:"remark-area",attrs:{maxlength:"50",placeholder:"请添加备注","placeholder-class":"placeholder","placeholder-style":"font-size: 28upx;line-height: 40upx;color:#999999"},on:{input:function(t){t=e.$handleEvent(t),e.remarkContent(t)}}})],1),i("v-uni-view",{staticClass:"upload-area"},[i("v-uni-view",{staticClass:"img-container",style:{width:e.imgContainerWidth}},[i("v-uni-scroll-view",{staticClass:"scroll-x",attrs:{"scroll-x":"true"}},[e.showBtn?i("v-uni-view",{staticClass:"img-item img-item-btn"},[i("v-uni-view",{staticClass:"btn",on:{click:function(t){t=e.$handleEvent(t),e.uploadFile(t)}}},[i("v-uni-text",{staticClass:"iconfont cross"},[e._v("")]),i("v-uni-view",{staticClass:"btn-msg"},[e._v("添加图片")])],1)],1):e._e(),e.showIntro?e._e():i("v-uni-view",{staticClass:"img-item"},[i("v-uni-view",{staticClass:"intro"},[e._v("您上传的图片会同时发表以便于其他人 的解答，可上传四张")])],1),e._l(e.imgs,function(t,n){return i("v-uni-view",{key:n,staticClass:"img-item",on:{click:function(t){t=e.$handleEvent(t),e.previewImage(n)}}},[i("v-uni-text",{staticClass:"iconfont",on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.deleteImg(n)}}},[e._v("")]),i("v-uni-image",{attrs:{src:t}})],1)})],2)],1)],1)],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"5a2b":function(e,t,i){"use strict";i.r(t);var n=i("19f7"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"8d93":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={notLogin:function(e){var t=e.code,i=e.msg;100005001!=t&&100005002!=t||(i="token不能为空"==i?"未登录":i.replace(/token/g,"登录"),uni.showToast({icon:"none",title:i,duration:1500}),setTimeout(function(){uni.switchTab({url:"/pages/center/center"})},1500))}};t.default=n},c2c3:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'.msg[data-v-e937a194]{overflow:hidden;padding-right:%?30?%;font-size:%?27?%;font-weight:400;color:rgba(0,0,0,.7);line-height:%?34?%}.top>.switch-box[data-v-e937a194]{float:right;font-size:%?28?%;line-height:%?34?%;color:#999}.title[data-v-e937a194]{height:%?84?%;padding:0 %?20?%;margin:%?36?% 0;font-size:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#f0f0f0;border-radius:4px}.remark-title[data-v-e937a194]{font-size:%?30?%;line-height:%?40?%}.remark-area[data-v-e937a194]{width:100%;height:%?140?%;padding:%?32?%;margin:%?10?% 0 %?40?%;font-size:%?28?%;line-height:%?40?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?8?%;border:1px solid #c1c1c1}.list[data-v-e937a194]{margin-top:%?40?%}.list[data-v-e937a194]:after{content:"";display:table;clear:both}.item[data-v-e937a194]{width:%?140?%;height:%?64?%;float:left;margin-right:%?30?%;margin-bottom:%?20?%;line-height:%?64?%;text-align:center;font-size:%?24?%;background:#fff;-webkit-box-shadow:0 %?4?% %?8?% 0 rgba(0,0,0,.15);box-shadow:0 %?4?% %?8?% 0 rgba(0,0,0,.15);border-radius:%?8?%}.item[data-v-e937a194]:nth-child(4n){margin-right:0}.textarea-style[data-v-e937a194]{width:100%;height:%?400?%;padding:%?32?%;margin:%?40?% 0;font-size:%?28?%;line-height:%?40?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?8?%;border:1px solid #c1c1c1}.placeholder[data-v-e937a194]{font-size:%?28?%;font-family:PingFangSC-Regular;font-weight:400;color:rgba(0,0,0,.7);line-height:%?34?%}.scroll-x[data-v-e937a194]{width:%?700?%;height:%?420?%;white-space:nowrap;\n\t/* padding-right: 20upx; */-webkit-box-sizing:border-box;box-sizing:border-box}.btn[data-v-e937a194]{width:%?196?%;height:%?196?%;\n\t/* float: left; */margin-right:%?18?%;padding-top:%?56?%;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:hsla(0,0%,87.8%,.75);border-radius:4px}.cross[data-v-e937a194]{width:%?48?%;height:%?48?%;background:#fff;border:1px solid #9b9b9b;border-radius:50%}.btn-msg[data-v-e937a194]{padding-top:%?20?%;font-size:%?24?%;color:#4a4a4a;line-height:%?28?%}.intro[data-v-e937a194]{padding-left:%?18?%;overflow:hidden;font-size:%?24?%;font-family:PingFangSC-Regular;font-weight:400;color:rgba(0,0,0,.7);line-height:%?34?%}.img-container[data-v-e937a194]{\n\t/* padding-left: 18upx; */overflow:hidden;overflow-x:scroll}.img-item[data-v-e937a194]{position:relative;display:inline-block;width:%?280?%;height:%?420?%;margin-right:%?40?%;\n\t/* float: left; */word-wrap:break-word;white-space:pre-wrap;border-radius:%?8?%;overflow:hidden}.img-item>.iconfont[data-v-e937a194]{position:absolute;right:0;top:0;display:inline-block;width:%?60?%;height:%?60?%;color:#03b2ca;text-align:center;line-height:%?60?%;border-radius:50%;font-size:%?30?%;font-weight:700;z-index:999}.img-item-btn[data-v-e937a194]{width:%?196?%}.img-item>uni-image[data-v-e937a194]{width:100%;height:100%;border-radius:%?8?%;border:1px solid #e8e8e8;-webkit-box-sizing:border-box;box-sizing:border-box}',""])},db27:function(e,t,i){"use strict";var n=i("1731"),a=i.n(n);a.a}}]);