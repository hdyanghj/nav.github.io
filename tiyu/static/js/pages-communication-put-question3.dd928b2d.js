(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-communication-put-question3"],{"044c":function(e,t,i){var n=i("07e0");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("410304fc",n,!0,{sourceMap:!1,shadowMode:!1})},"07e0":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".connection-item[data-v-1f8cc8f1]{margin-right:%?40?%;padding:%?30?% 0;font-size:%?30?%;display:inline-block}.msg[data-v-1f8cc8f1]{overflow:hidden;padding-right:%?30?%;font-size:%?27?%;font-weight:400;color:rgba(0,0,0,.7);line-height:%?34?%}.title[data-v-1f8cc8f1]{height:%?84?%;padding:0 %?20?%;margin:%?36?% 0;font-size:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#f0f0f0;border-radius:4px}.remark-title[data-v-1f8cc8f1]{font-size:%?30?%;line-height:%?40?%}.remark-area[data-v-1f8cc8f1]{width:100%;height:%?140?%;padding:%?32?%;margin:%?10?% 0 %?40?%;font-size:%?28?%;line-height:%?40?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?8?%;border:1px solid #c1c1c1}.textarea-style[data-v-1f8cc8f1]{width:100%;height:%?400?%;padding:%?32?%;margin:%?40?% 0;font-size:%?28?%;line-height:%?40?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?8?%;border:1px solid #c1c1c1}.placeholder[data-v-1f8cc8f1]{font-size:%?28?%;font-family:PingFangSC-Regular;font-weight:400;color:rgba(0,0,0,.7);line-height:%?34?%}\n/* 上传文件 样式 */.scroll-x[data-v-1f8cc8f1]{width:%?700?%;height:%?420?%;margin-top:%?50?%;white-space:nowrap;\n\t/* padding-right: 20upx; */-webkit-box-sizing:border-box;box-sizing:border-box}.img-item[data-v-1f8cc8f1]{position:relative;display:inline-block;width:%?280?%;height:%?420?%;margin-right:%?40?%;\n\t/* float: left; */word-wrap:break-word;white-space:pre-wrap;border-radius:%?8?%;overflow:hidden}.img-item>.iconfont[data-v-1f8cc8f1]{position:absolute;right:0;top:0;display:inline-block;width:%?60?%;height:%?60?%;color:#03b2ca;text-align:center;line-height:%?60?%;border-radius:50%;font-size:%?30?%;font-weight:700;z-index:999}uni-video[data-v-1f8cc8f1]{margin-top:%?50?%}",""])},"8a27":function(e,t,i){"use strict";i.r(t);var n=i("c6b2"),o=i("960d");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);i("dc39");var l=i("2877"),s=Object(l["a"])(o["default"],n["a"],n["b"],!1,null,"1f8cc8f1",null);t["default"]=s.exports},"8d93":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={notLogin:function(e){var t=e.code,i=e.msg;100005001!=t&&100005002!=t||(i="token不能为空"==i?"未登录":i.replace(/token/g,"登录"),uni.showToast({icon:"none",title:i,duration:1500}),setTimeout(function(){uni.switchTab({url:"/pages/center/center"})},1500))}};t.default=n},"960d":function(e,t,i){"use strict";i.r(t);var n=i("9f1e"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},"9f1e":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i("8d93"));function o(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{fee:0,firstLevelClass:"",secondLevelClass:"",remark:"",token:"",content:"",title:"",connection:[{value:"WX:",name:"微信"},{value:"QQ:",name:"QQ"}],connectionItem:"",imgs:[],video:"",upimgurl:[],upvideourl:"",showBtn:!0,timer:null}},onNavigationBarButtonTap:function(e){var t=this;0==e.index?uni.navigateBack({delta:1}):(clearTimeout(this.timer),this.timer=null,this.timer=setTimeout(function(){clearTimeout(t.timer),t.timer=null;var e=t.content,i=t.fee,o=t.title,a=t.firstLevelClass,l=t.secondLevelClass,s="";t.upimgurl.length>0?s=t.upimgurl.slice(0,4).join(","):t.upvideourl&&(s=t.upvideourl);var r=uni.getStorageSync("user_Id");if(e)if(t.connectionItem){var c=t.connectionItem+t.remark,u={totalAmount:i,orderSource:1,consultType:2,secondLevelClass:l,firstLevelClass:a,author:r,content:e,remark:c,title:o,imgUrl:s};console.log(u);var d=t;uni.request({url:d.$webUrl+d.$cmsconsult,method:"POST",header:{token:d.token},data:u,success:function(e){if(console.log(e),console.log(JSON.stringify(e)),0==e.data.code){var t=e.data.data.orderId,i=e.data.data.orderNum;uni.navigateTo({url:"/pages/communication/pay?fee="+d.fee+"&orderId="+t+"&orderNum="+i})}else n.default.notLogin(e.data)}})}else uni.showToast({icon:"none",title:"请选择联系方式",duration:1500});else uni.showToast({icon:"none",title:"请填写内容",duration:2e3})},500))},onLoad:function(e){console.log(e),this.fee=e.fee,this.firstLevelClass=e.firstLevelClass,this.secondLevelClass=e.secondLevelClass;var t=uni.getStorageSync("token");this.token=t},methods:{radioChange:function(e){console.log(e),this.connectionItem=e.detail.value},remarkContent:function(e){this.remark=e.detail.value},input:function(e){this.content=e.detail.value},previewImage:function(e){var t=this.imgs;uni.previewImage({current:this.imgs[e],urls:t})},deleteVideo:function(){this.upvideourl="",this.showBtn=!0},deleteImg:function(e){console.log("delete img......"),this.imgs.splice(e,1),this.upimgurl.splice(e,1),0==this.upimgurl.length&&(this.showBtn=!0)},chooseFile:function(){var e=this;uni.showActionSheet({itemList:["上传图片","上传视频(小于30M)"],success:function(t){console.log("选中了第"+(t.tapIndex+1)+"个按钮"),0==t.tapIndex?uni.chooseImage({count:4-e.imgs.length,sizeType:["compressed"],sourceType:["album"],success:function(t){console.log("图片选择成功。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。"),console.log(JSON.stringify(t.tempFilePaths)),e.imgs=t.tempFilePaths,e.uploadFile(t.tempFilePaths)}}):uni.chooseVideo({count:1,sourceType:["camera","album"],success:function(t){console.log("视频选择成功。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。"),console.log(JSON.stringify(t)),t.size/1048576>30?uni.showToast({icon:"none",title:"视频大于30M，请修改视频分辨率.",duration:1500}):(e.video=t.tempFilePath,e.uploadFile(t.tempFilePath))}})},fail:function(e){console.log(e.errMsg)}})},uploadFile:function(e){var t=this;if(uni.showLoading({title:"正在上传。。。"}),Array.isArray(e))for(var i=0;i<e.length;i++)uni.uploadFile({url:t.$webUrl+t.$upAvatar,filePath:e[i],fileType:"image",name:"file",formData:{type:5},success:function(e){if(console.log("上传图片成功----------------------------------------------------------------------------------"),console.log(JSON.stringify(e)),200==e.statusCode){console.log(e);var i=JSON.parse(e.data).filename;i&&(t.upimgurl.push(i),t.showBtn=!1),uni.hideLoading(),console.log(JSON.stringify(t.upimgurl))}else uni.showToast({icon:"none",title:"上传失败！",duration:2e3})},fail:function(e){console.log("上传失败。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。"),console.log(JOSN.stringify(e))}});else uni.uploadFile({url:t.$webUrl+t.$upAvatar,filePath:e,fileType:"video",name:"file",formData:{type:5},success:function(e){if(console.log("上传视频成功----------------------------------------------------------------------------------"),console.log(JSON.stringify(e.filename)),200==e.statusCode){uni.hideLoading();var i=JSON.parse(e.data).filename;i&&(t.upvideourl=i,t.showBtn=!1),console.log(t.upvideourl)}else uni.showToast({icon:"none",title:"上传失败！",duration:2e3})},fail:function(e){console.log("上传失败。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。"),console.log(JOSN.stringify(e))}})}}};t.default=a},c6b2:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"wrap"},[i("v-uni-view",{staticClass:"first-title"},[e._v("马上提问")]),i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"msg"},[e._v("在这里您可以留下您")]),i("v-uni-view",{staticClass:"msg"},[e._v("的问题以便于大家来共同帮您解决")])],1),i("v-uni-input",{staticClass:"title",attrs:{type:"text",placeholder:"提问标题(最多50字)",maxlength:"50"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),i("v-uni-textarea",{staticClass:"textarea-style",attrs:{value:"",maxlength:"100",placeholder:"请描述您的年龄、性别、症状，以便于在线进行交流， 能够更加准确的回答您的问题","placeholder-class":"placeholder","placeholder-style":"font-size: 28upx;line-height: 40upx;color:#999999"},on:{input:function(t){t=e.$handleEvent(t),e.input(t)}}}),i("v-uni-view",{staticClass:"remark"},[i("v-uni-view",{staticClass:"remark-title"},[e._v("联系方式：")]),i("v-uni-radio-group",{on:{change:function(t){t=e.$handleEvent(t),e.radioChange(t)}}},e._l(e.connection,function(t,n){return i("v-uni-label",{key:t.value,staticClass:"connection-item"},[i("v-uni-radio",{attrs:{value:t.value}}),i("v-uni-text",[e._v(e._s(t.name))])],1)}),1),i("v-uni-textarea",{staticClass:"remark-area",attrs:{maxlength:"50",placeholder:"请填写QQ账号或微信账号,并确认无误.","placeholder-class":"placeholder","placeholder-style":"font-size: 28upx;line-height: 40upx;color:#999999"},on:{input:function(t){t=e.$handleEvent(t),e.remarkContent(t)}}})],1),e.showBtn?i("v-uni-button",{on:{click:function(t){t=e.$handleEvent(t),e.chooseFile(t)}}},[e._v("上传文件")]):e._e(),e.upimgurl.length>0?i("v-uni-scroll-view",{staticClass:"scroll-x",attrs:{"scroll-x":"true"}},e._l(e.imgs,function(t,n){return i("v-uni-view",{key:n,staticClass:"img-item",on:{click:function(t){t=e.$handleEvent(t),e.previewImage(n)}}},[i("v-uni-text",{staticClass:"iconfont",on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.deleteImg(n)}}},[e._v("")]),i("v-uni-image",{attrs:{src:t}})],1)}),1):e._e(),e.upvideourl?i("v-uni-view",{staticClass:"img-item"},[i("v-uni-text",{staticClass:"iconfont",on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.deleteVideo(t)}}},[e._v("")]),i("v-uni-video",{staticClass:"img-item",attrs:{src:e.video,controls:""}})],1):e._e()],1)},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},dc39:function(e,t,i){"use strict";var n=i("044c"),o=i.n(n);o.a}}]);