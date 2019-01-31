<template>
    <view class="center-body">
		<HMmessages ref="HMmessages" @complete="HMmessages = $refs.HMmessages"></HMmessages>
		<view class="avatar-body">
			<image class="logo-image" :src="uerInfo.avatarUrl"></image>
		</view>
		<view class="avatar-title">一张小小的照片秀出你的精彩，快快上传头像。</view>
		<view class="avatar-button">
			<button @tap="avatarButton(buttons)" class="normalButton">{{uerInfo.avatarUp}}</button>
			<!-- <button @tap="onShow" class="button">裁剪</button> -->
		</view>
	</view>
</template>
<script>
	import HMmessages from '@/components/HM-messages/HM-messages.vue';
	export default {

		data() {
			return {
				uerInfo: {
					name:'菊花爆满山',
					avatarUrl: '../../static/avatar_mi.png',
					avatarUp: '上传头像'
				},
				buttons: true
			}
		},
		components: {
			HMmessages
		},
		mounted:function(){
			this.upload();
		},
		methods: {
			upload(){
				var token='';
				uni.getStorage({
					key: 'token',
					success: function (sto) {
						token=sto.data
					}
				});
				this.token= token;
				var avatarUrl='';
				uni.getStorage({
					key: 'user_Info',
					success: function (sto) {
						avatarUrl=sto.data.headSculpture;
					}
				});
				this.uerInfo.avatarUrl = avatarUrl;
			},
			avatarButton(e) {
				if(e == true){
					uni.chooseImage({
						sizeType: ['compressed'],
						sourceType: ['album', 'camera'],
						count: 1,
						success: (res) => {
							console.log(res);
							this.$set(this.uerInfo, 'avatarUrl' , res.tempFilePaths[0]);
							// 上传图片
							uni.uploadFile({
								url: this.$webUrl+this.$upAvatar,
								filePath: this.uerInfo.avatarUrl,
								header:{
									'token':'' + this.token	
								},
								fileType:'image',
								name:'file',
								formData: {
									type : 2
								},
								// formData: this.sendDate,
								success: (res) => {
									var upimg=JSON.parse(res.data)
									this.uerInfo.avatarUrl = upimg.fileName;
									console.log('上传的链接',upimg.fileName)
									if(upimg.code == 0){
										uni.request({
											url:this.$webUrl + this.$modifyMsg,
											header:{
												'content-type':'application/x-www-form-urlencoded',
												'token':'' + this.token	
											},
											data: {
												headSculpture: this.uerInfo.avatarUrl
											},
											method: 'PUT',
											success: (res) => {
												let Cache =res.data.data;
													let creDate=Cache.createDate;
													let createDate = creDate.substring(0,10);
													uni.setStorage({
														key: 'user_Info',
														data:{
															id: Cache.id,
															username: Cache.username,
															mobile: Cache.mobile,
															headSculpture: Cache.headSculpture,
															gender: Cache.gender,
															birthday: Cache.birthday,
															email: Cache.email,
															createDate: createDate
														}
													});
												if(res.data.code == 0){
													console.log('值是',Cache.createDate)
													console.log('值是',createDate)
													// let creDate=res.data.data.createDate.Substring(0,9);
													console.log(Cache.headSculpture)
													return;
												}
												if(res.data.code == 100005001 || res.data.code == 100005002){
													
												}
											},
											fail: (err) => {
												this.HMmessages.show('头像上传失败，请重新上传。。。',{icon:'error',duration:5000,iconColor:"red",fontColor:"red"});
												return;
												// console.log(res)
											}
										});
										this.HMmessages.show('好嗨哟 头像上传成功',{icon:'success',duration:5000,iconColor:"#44B549",fontColor:"#44B549"});
										this.uerInfo.avatarUp = '完成';
										this.buttons = false;
									}
									if(upimg.code == 1 || upimg.code == 100005007){
										this.HMmessages.show('头像上传失败，请重新上传。。。',{icon:'error',duration:5000,iconColor:"red",fontColor:"red"});
										return;
									}
								},
								fail: (res) => {
									uni.showToast({
										title: "失败",
										icon:"none"
									});
								}
							});
							// this.$refs.picture.onShow("嘿嘿嘿");
							
							// onShow();
						}
					})
				}
				if(e == false){
// 					uni.navigateBack({
// 						delta: 1
// 					});
					uni.redirectTo({
						url: 'record'
					});
				}
			}
		}
	}
</script>
<style>
	.center-body{
		padding-top: 150upx;
	}
	.avatar-body{
		width: 300upx;
		height: 300upx;
		border-radius: 150upx;
		margin-top: 80upx;
		background: #EFEFEF;
		margin: 0 auto;
		overflow: hidden;
		border: 1px solid #6BD8ED;
	}
	.avatar-title{
		font-size: 28upx;
		text-align: center;
		padding: 50upx 0 30upx;
		color: #848383;
	}
	.avatar-button{
		width: 660upx;
		margin: 0 auto;
		padding-top: 100upx;
	}
</style>