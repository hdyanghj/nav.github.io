(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-account-uni-feedback"],{"0d19":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"feedback-title"},[i("v-uni-text",{staticStyle:{"font-size":"36upx",color:"#000"}},[t._v("问题和意见")]),i("v-uni-text",{staticClass:"feedback-quick",staticStyle:{"font-size":"32upx",color:"#6f6868"},on:{click:function(e){e=t.$handleEvent(e),t.chooseMsg(e)}}},[t._v("快速键入")])],1),i("v-uni-view",{staticClass:"feedback-body"},[i("v-uni-textarea",{staticClass:"feedback-textare",staticStyle:{"font-size":"32upx"},attrs:{placeholder:"请详细描述你的问题和意见..."},model:{value:t.sendDate.content,callback:function(e){t.$set(t.sendDate,"content",e)},expression:"sendDate.content"}})],1),i("v-uni-view",{staticClass:"feedback-title"},[i("v-uni-text",[t._v("图片(选填,提供问题截图,总大小10M以下)")])],1),i("v-uni-view",{staticClass:"feedback-body feedback-uploader"},[i("v-uni-view",{staticClass:"uni-uploader"},[i("v-uni-view",{staticClass:"uni-uploader-head"},[i("v-uni-view",{staticClass:"uni-uploader-title",staticStyle:{"font-size":"24upx",color:"#6f6868"}},[t._v("点击预览图片")]),i("v-uni-view",{staticClass:"uni-uploader-info"},[t._v(t._s(t.imageList.length)+"/8")])],1),i("v-uni-view",{staticClass:"uni-uploader-body"},[i("v-uni-view",{staticClass:"uni-uploader__files"},[t._l(t.imageList,function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"uni-uploader__file",staticStyle:{position:"relative"}},[i("v-uni-image",{staticClass:"uni-uploader__img",attrs:{src:e},on:{click:function(e){e=t.$handleEvent(e),t.previewImage(a)}}}),i("v-uni-view",{staticClass:"close-view",on:{click:function(e){e=t.$handleEvent(e),t.close(a)}}},[t._v("x")])],1)]}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.imageList.length<8,expression:"imageList.length < 8"}],staticClass:"uni-uploader__input-box"},[i("v-uni-view",{staticClass:"uni-uploader__input",on:{click:function(e){e=t.$handleEvent(e),t.chooseImg(e)}}})],1)],2)],1)],1)],1),i("v-uni-view",{staticClass:"feedback-title"},[i("v-uni-text",{staticStyle:{"font-size":"32upx",color:"#000"}},[t._v("QQ/邮箱/手机号")])],1),i("v-uni-view",{staticClass:"feedback-body"},[i("v-uni-input",{staticClass:"feedback-input",staticStyle:{"font-size":"32upx",color:"#6f6868"},attrs:{placeholder:"(选填,方便我们联系你 )"},model:{value:t.sendDate.contact,callback:function(e){t.$set(t.sendDate,"contact",e)},expression:"sendDate.contact"}})],1),i("v-uni-view",{staticClass:"feedback-title feedback-star-view"},[i("v-uni-text",{staticStyle:{"font-size":"32upx",color:"#000"}},[t._v("应用评分")]),i("v-uni-view",{staticClass:"feedback-star-view"},t._l(t.stars,function(e,a){return i("v-uni-text",{key:a,staticClass:"feedback-star",class:a<t.sendDate.score?"active":"",on:{click:function(i){i=t.$handleEvent(i),t.chooseStar(e)}}})}),1)],1),i("v-uni-view",{staticClass:"sendBut"},[i("v-uni-button",{staticClass:"normalButton",staticStyle:{width:"650upx",margin:"0 auto","font-size":"32upx"},attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.send(e)}}},[t._v("提交")])],1),i("v-uni-view",{staticClass:"feedback-title"},[i("v-uni-text",{staticStyle:{"font-size":"24upx",color:"#6f6868",display:"inline-block",margin:"auto"}},[t._v("对您给予的帮助和支持，深表感谢！")])],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"2df4":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{msgContents:["界面显示错乱","启动缓慢，卡出翔了","UI无法直视，丑哭了","偶发性崩溃"],stars:[1,2,3,4,5],imageList:[],sendDate:{score:0,content:"",contact:""},imgUrl:[]}},onNavigationBarButtonTap:function(t){0==t.index&&uni.navigateBack({delta:1})},mounted:function(){this.upload()},methods:{upload:function(){var t="";if(uni.getStorage({key:"token",success:function(e){t=e.data}}),this.token=t,""!=this.userId){var e="";uni.getStorage({key:"user_Info",success:function(t){e=t.data.mobile}}),this.mobile=e}else uni.reLaunch({url:"../login/phonelogin"})},close:function(t){this.imageList.splice(t,1)},chooseMsg:function(){var t=this;uni.showActionSheet({itemList:this.msgContents,success:function(e){t.sendDate.content=t.msgContents[e.tapIndex]}})},chooseImg:function(){var t=this;uni.chooseImage({sizeType:["compressed"],sourceType:["album","camera"],count:8-this.imageList.length,success:function(e){t.imageList=t.imageList.concat(e.tempFilePaths);for(var i=t.imgUrl.length;i<t.imageList.length;i++)uni.uploadFile({url:t.$webUrl+t.$upAvatar,filePath:t.imageList[i],fileType:"image",name:"file",formData:{type:3},success:function(e){var i=JSON.parse(e.data);t.imgUrl.push(i.filename)},fail:function(t){uni.showToast({icon:"none",duration:3e3,title:"网络连接失败"})}})}})},chooseStar:function(t){this.sendDate.score=t},previewImage:function(t){var e=this.imageList;uni.previewImage({current:this.imageList[t],urls:e})},send:function(){""==this.sendDate.content&&uni.showToast({title:"请描述问题和意见",icon:"none",duration:2e3}),uni.showLoading({title:"上传中"}),uni.request({url:this.$webUrl+this.$FeedBack,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{opinion:this.sendDate.content,picture:this.imgUrl,contactWay:this.sendDate.contact,score:this.sendDate.score},success:function(t){uni.hideLoading(),uni.showToast({title:"感谢您的反馈！",icon:"none",duration:2e3}),setTimeout(function(){uni.navigateBack({delta:1})},2e3)}})}}};e.default=a},"92dd":function(t,e,i){"use strict";var a=i("c48b"),n=i.n(a);n.a},a9d0:function(t,e,i){"use strict";i.r(e);var a=i("2df4"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},c48b:function(t,e,i){var a=i("c4c9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("3f5abed4",a,!0,{sourceMap:!1,shadowMode:!1})},c4c9:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@font-face{font-family:uniicons;font-weight:400;font-style:normal;src:url(https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf) format("truetype")}uni-page-body[data-v-711f0f20]{background-color:#efeff4}uni-view[data-v-711f0f20]{font-size:%?28?%}.input-view[data-v-711f0f20]{font-size:%?28?%}.close-view[data-v-711f0f20]{text-align:center;line-height:14px;height:16px;width:16px;border-radius:50%;background:#ff5053;color:#fff;position:absolute;top:-6px;right:-4px;font-size:12px}\n    /* 上传 */.uni-uploader[data-v-711f0f20]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.uni-uploader-head[data-v-711f0f20]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.uni-uploader-info[data-v-711f0f20]{color:#b2b2b2}.uni-uploader-body[data-v-711f0f20]{margin-top:%?16?%}.uni-uploader__files[data-v-711f0f20]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.uni-uploader__file[data-v-711f0f20]{margin:%?10?%;width:%?210?%;height:%?210?%}.uni-uploader__img[data-v-711f0f20]{display:block;width:%?210?%;height:%?210?%}.uni-uploader__input-box[data-v-711f0f20]{position:relative;margin:%?10?%;width:%?208?%;height:%?208?%;border:%?2?% solid #d9d9d9}.uni-uploader__input-box[data-v-711f0f20]:after,.uni-uploader__input-box[data-v-711f0f20]:before{content:" ";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background-color:#d9d9d9}.uni-uploader__input-box[data-v-711f0f20]:before{width:%?4?%;height:%?79?%}.uni-uploader__input-box[data-v-711f0f20]:after{width:%?79?%;height:%?4?%}.uni-uploader__input-box[data-v-711f0f20]:active{border-color:#999}.uni-uploader__input-box[data-v-711f0f20]:active:after,.uni-uploader__input-box[data-v-711f0f20]:active:before{background-color:#999}.uni-uploader__input[data-v-711f0f20]{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;opacity:0}\n    /*问题反馈*/.feedback-title[data-v-711f0f20]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?20?%;color:#8f8f94;font-size:%?28?%}.feedback-star-view.feedback-title[data-v-711f0f20]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin:0}.feedback-quick[data-v-711f0f20]{position:relative;padding-right:%?40?%}.feedback-quick[data-v-711f0f20]:after{font-family:uniicons;font-size:%?40?%;content:"\\E581";position:absolute;right:0;top:50%;color:#bbb;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.feedback-body[data-v-711f0f20]{background:#fff}.feedback-textare[data-v-711f0f20]{height:%?200?%;font-size:%?34?%;line-height:%?50?%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?20?% %?30?% 0}.feedback-input[data-v-711f0f20]{font-size:%?34?%;height:%?50?%;min-height:%?50?%;padding:%?15?% %?20?%;line-height:%?50?%}.feedback-uploader[data-v-711f0f20]{padding:%?22?% %?20?%}.feedback-star[data-v-711f0f20]{font-family:uniicons;font-size:%?40?%;margin-left:%?6?%}.feedback-star-view[data-v-711f0f20]{margin-left:%?20?%}.feedback-star[data-v-711f0f20]:after{content:"\\E408"}.feedback-star.active[data-v-711f0f20]{color:#ffb400}.feedback-star.active[data-v-711f0f20]:after{content:"\\E438"}.sendBut[data-v-711f0f20]{padding:%?30?% 0}.feedback-submit[data-v-711f0f20]{background:#007aff;color:#fff;margin:%?20?%}body.?%PAGE?%[data-v-711f0f20]{background-color:#efeff4}',""])},f6a6:function(t,e,i){"use strict";i.r(e);var a=i("0d19"),n=i("a9d0");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("92dd");var s=i("2877"),c=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"711f0f20",null);e["default"]=c.exports}}]);