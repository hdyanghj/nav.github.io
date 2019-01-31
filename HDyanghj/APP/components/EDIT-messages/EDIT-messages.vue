<template name="EDIT-messages">
	<view class="EDITmessages" :class="[onShow?'show':'hide',buttons]">
		<view class="guanbi"  @click="toggleBox"></view>
		<!-- 顶部提示框 -->
		<HMmessages ref="HMmessages" @complete="HMmessages = $refs.HMmessages"></HMmessages>
		<view class="messages-body">
			<view class="messages-cont">
				<image class="logo-image" :src="userInfo.headSculpture" v-show="imgShow"></image>
				<input class="messages-text" type="text" v-show="textShow" v-model="textInput" :placeholder="placeText"/>
				<input class="messages-text" type="number" v-show="numberShow" v-model="numberInput" :placeholder="placeNum"/>
				<view class="messages-text" v-show="sexShow">
					<picker @change="bindPickerChange" :value="userInfo.gender" :range="sexText">
						<view class="nikename_input">{{sexText[userInfo.gender]}}</view>
					</picker>
				</view>
				<view class="messages-text" v-show="ageShow">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="nikename_input">{{date}}</view>
					</picker>
					
				</view>
				<textarea class="messages-textarea" maxlength="100" v-show="areaShow" :placeholder="userInfo.remarks" v-model="tareaInput"/>
			</view>
			<view class="avatar-title">{{avatarTitle}}</view>
			<view class="avatar-button">
				<button @tap="avatarButton(buttons)" class="normalButton">{{buttonText}}</button>
			</view>
		</view>
	</view>
</template>
<script>
	import HMmessages from '@/components/HM-messages/HM-messages.vue';
	export default {
		name: "EDIT-messages",
		data() {
			return {
				avatarTitle: '',
				buttons: '',
				userInfo: {
					username:'',
					headSculpture:'',
					remarks: '',
					gender: '',
					birthday: '',
					email: '',
					mobile: '',
				},
				buttonText: '',
				token:'',
				onShow: false,
				imgShow: false,
				textShow: false,
				sexShow: false,
				ageShow: false,
				numberShow: false,
				areaShow: false,
				textInput:'',
				numberInput: '',
				tareaInput: '',
				date: '',
				sexText: ['选择性别','男','女','保密'],
				placeText: '',
				placeNum: ''
			}
		},
		components: {
			HMmessages
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		mounted:function(){
			this.upload();
			this.$emit('complete');
		},
		methods: {
			upload: function(){
				var token='';
				uni.getStorage({
					key: 'token',
					success: function (sto) {
						token=sto.data
					}
				});
				this.token= token;
				let user_Info= [];
				uni.getStorage({
					key: 'user_Info',
					success: function (sto) {
						console.log(sto)
						user_Info=sto.data;						
					}
				});
				if(user_Info.username == null){
					this.userInfo.username = '一只小麒麟';
				}
				if(user_Info.username != null){
					this.userInfo.username = user_Info.username;
				}
				
				if(user_Info.headSculpture == null){
					this.userInfo.headSculpture = this.$defaultAvatar;
				}
				if(user_Info.headSculpture != null){
					this.userInfo.headSculpture = user_Info.headSculpture;
				}
				
				if(user_Info.remarks == null){
					this.userInfo.remarks = '一句话介绍自己';
				}
				if(user_Info.remarks != null){
					this.userInfo.remarks = user_Info.remarks;
				}
				
				if(user_Info.gender == null){
					this.userInfo.gender = '0';
				}
				if(user_Info.gender != null){
					this.userInfo.gender = user_Info.gender;
				}
				
				if(user_Info.birthday == null){
					const currentdate = new Date();
					let year = currentdate.getFullYear();
					let month = currentdate.getMonth() + 1;
					let day = currentdate.getDate();
					this.userInfo.birthday=`${year}-${month}-${day}`;
				}
				if(user_Info.birthday != null){
					this.userInfo.birthday = user_Info.birthday;
				
				}
				
				if(user_Info.email == null){
					this.userInfo.email = '绑定电子邮箱';
				}
				if(user_Info.email != null){
					this.userInfo.email = user_Info.email;
				}
				
				if(user_Info.mobile == null){
					this.userInfo.mobile = '绑定手机号';
				}
				if(user_Info.mobile != null){
					this.userInfo.mobile = user_Info.mobile;
				}
				
			},
			// 性别选择
			bindPickerChange: function(data) {
				this.userInfo.gender = data.target.value
			},
			//时间选择器 
			bindDateChange: function(e) {
			
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				
				if (type === 'start') {
					year = year - 50;
				} else if (type === 'end') {
					year = year;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
			
				return `${year}-${month}-${day}`;
			},
			editShow: function(e){
				this.buttons = e;
				this.onShow = true;
				if(e == 'nike'){
					this.imgShow = false;
					this.textShow = true;
					this.sexShow = false;
					this.ageShow = false;
					this.numberShow = false;
					this.areaShow = false;
					this.buttonText = '完成';
					this.placeText = '输入您的昵称';
				}
				if(e == 'avatar'){
					this.imgShow = true;
					this.textShow = false;
					this.sexShow = false;
					this.ageShow = false;
					this.numberShow = false;
					this.areaShow = false;
					this.buttonText = '选择照片'
				}
				if(e == 'summary'){
					this.imgShow = false;
					this.textShow = false;
					this.sexShow = false;
					this.ageShow = false;
					this.numberShow = false;
					this.areaShow = true;
					this.buttonText = '完成'
					this.tareaInput = this.userInfo.remarks;
				}
				if(e == 'sex'){
					this.imgShow = false;
					this.textShow = false;
					this.sexShow = true;
					this.ageShow = false;
					this.numberShow = false;
					this.areaShow = false;
					this.buttonText = '完成'
				}
				if(e == 'age'){
					this.imgShow = false;
					this.textShow = false;
					this.sexShow = false;
					this.ageShow = true;
					this.numberShow = false;
					this.areaShow = false;
					this.buttonText = '完成';
					this.date = this.userInfo.birthday;
				}
				if(e == 'email'){
					this.imgShow = false;
					this.textShow = true;
					this.sexShow = false;
					this.ageShow = false;
					this.numberShow = false;
					this.areaShow = false;
					this.buttonText = '完成'
					this.placeText = '输入您的邮箱地址';
				}
				if(e == 'mobile'){
					this.imgShow = false;
					this.textShow = false;
					this.sexShow = false;
					this.ageShow = false;
					this.numberShow = true;
					this.areaShow = false;
					this.buttonText = '完成'
					this.placeNum = '输入您的手机号';
				}
			},
			avatarButton: function(e) {
				// 修改昵称
				if(e == 'nike'){
					this.userInfo.username=this.textInput;
					this.editData(this.textInput);
				}
				// 头像上传
				if(e == 'avatar'){
					// 选择图片
					uni.chooseImage({
						sizeType: ['compressed'],
						sourceType: ['album', 'camera'],
						count: 1,
						success: (res) => {
							console.log(res);
							let upImg = res.tempFilePaths[0];
							// 上传图片
							uni.uploadFile({
								url: this.$webUrl+this.$upAvatar,
								filePath: upImg,
								header:{
									'token':'' + this.token	
								},
								fileType:'image',
								name:'file',
								formData: {
									type : 2
								},
								success: (res) => {
									var upimg=JSON.parse(res.data)
									this.userInfo.headSculpture = upimg.fileName;
									console.log('上传的链接',upimg.fileName)
									if(upimg.code == 0){
										this.editData();
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
						}
					})
				}
				if(e == 'summary'){
					this.userInfo.remarks=this.tareaInput;
					this.editData();
				}
				if(e == 'sex'){
					this.editData();
				}
				if(e == 'age'){
					if(this.date.length < 10){
						return;
					}else{
					this.userInfo.birthday=this.date;
					this.editData();
					}
				}
				if(e == 'email'){
					this.userInfo.email=this.textInput;
					this.editData();
				}
				if(e == 'mobile'){
					this.userInfo.mobile=this.numberInput;
					this.editData();
				}
			},
			toggleBox: function(){
				this.onShow = false;
			},
			logout: function(){
				uni.clearStorage()
				uni.navigateTo({
					url: '../../pages/login/phonelogin'
				});
			},
			editData: function(){
				uni.request({
					url:this.$webUrl + this.$modifyMsg,
					header:{
						'content-type':'application/x-www-form-urlencoded',
						'token':'' + this.token	
					},
					data: this.userInfo,
					method: 'PUT',
					success: (res) => {
						let Cache =res.data.data;
						console.log(res.data)
						uni.setStorage({
							key: 'user_Info',
							data: Cache,
						});
						this.$emit('msgTransfer','传值到个人资料刷新数据');
						this.onShow = false;
						if(res.data.code == 0){
							this.HMmessages.show('好嗨哟 修改成功',{icon:'success',duration:5000,iconColor:"#44B549",fontColor:"#44B549"});
							return;
						}
						if(res.data.code == 100005001 || res.data.code == 100005002){
							this.logout();
						}
					},
					fail: (err) => {
						this.HMmessages.show('修改失败，请重新修改。。。',{icon:'error',duration:5000,iconColor:"red",fontColor:"red"});
						return;
						// console.log(res)
					}
				});
			}
		}
	}
</script>
<style>
	.EDITmessages{
		width: 100%;
		height: 120%;
		position: fixed;
		top: -10%;
		left: 0;
		background-color: rgba(0,0,0,0.3);
		display: flex;
		justify-content: center; /*子元素水平居中*/
        align-items: center; /*子元素垂直居中*/
	}
	.EDITmessages.show {animation:show 0.3s linear both; display: flex;}
	.EDITmessages.hide {animation:hide 0.3s linear both; display: none;}
	@keyframes show {0% {transform:translateY(0px);opacity:0;}100% {transform:translateY(40px);opacity:1;}}
	@keyframes hide {0% {transform:translateY(40px);opacity:1;}100% {transform:translateY(0px);opacity:0;}}
	.messages-body{
		width: 560upx;
		padding: 60upx 20upx;
		background: #FFFFFF;
		border-radius: 20upx;		
		display: inline-block;
		top: 0;
		left: 0;
		z-index: 999;
	}
	.guanbi{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 998;
	}
	.messages-cont{
		margin-top: 80upx;
		background: #EFEFEF;
		margin: 0 auto;
		overflow: hidden;
		border: 1px solid #6BD8ED;
	}
	.nike .messages-body,
	.sex .messages-body,
	.age .messages-body,
	.email .messages-body,
	.mobile .messages-body{
		height: 240upx;
	}
	.avatar .messages-body{
		height:340upx;
	}
	.avatar .messages-body .messages-cont{
		width: 200upx;
		height: 200upx;
		border-radius: 150upx;
	}
	.summary .messages-body{
		height: 370upx;
	}
	.nike .messages-body .messages-cont,
	.sex .messages-body .messages-cont,
	.age .messages-body .messages-cont,
	.email .messages-body .messages-cont,
	.mobile .messages-body .messages-cont{
		width: 85%;
		height: 100upx;
		border-radius: 10upx;
	}
	.summary .messages-body .messages-cont{
		width: 80%;
		padding: 2.5%;
		height: 200upx;
		border-radius: 10upx;
	}
	.messages-text{
		height: 100%;
		line-height: 100upx;
		text-align: center;
		display: block;
	}
	.nikename_input{
		width: 100%;
		height: 100%;
		display: block;
		text-align: center;
	}
	.messages-textarea{
		width: 100%;
		height: 200upx;
	}
	.avatar-button{
		width: 360upx;
		height: 40upx;
		margin: 0 auto;
		padding-top: 60upx;
	}
	.avatar-button .normalButton{
		width: 360upx;
		height: 80upx;
		line-height: 76upx;
	}
</style>
