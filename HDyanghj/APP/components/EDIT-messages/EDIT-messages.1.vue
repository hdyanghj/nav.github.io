<template name="EDIT-messages">
	<view class="EDITmessages" :class="[onShow?'show':'hide',buttons]"  @click.self="toggleBox">
		<!-- 顶部提示框 -->
		<HMmessages ref="HMmessages" @complete="HMmessages = $refs.HMmessages"></HMmessages>
		<view class="messages-body">
			<view class="messages-cont">
				<image class="logo-image" :src="uerInfo.headSculpture" v-show="imgShow"></image>
				<input class="messages-text" type="text" v-show="textShow" v-model="textInput"/>
				<input class="messages-text" type="number" v-show="numberShow" v-model="numberInput"/>
				<picker class="messages-text" @change="bindPickerChange" :value="uerInfo.gender" :range="sexText" v-show="sexShow">
					<view class="nikename_input">{{sexText[uerInfo.gender]}}</view>
				</picker>
				<picker class="messages-text" mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange" v-show="ageShow">
					<view class="nikename_input">{{date}}</view>
				</picker>
				<textarea class="messages-textarea" maxlength="100" v-show="areaShow" placeholder="一句话介绍下你自己" v-model="tareaInput"/>
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
				uerInfo: [],
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
				sexText: ['请选择','男','女','保密']	
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
				this.uerInfo = user_Info;
				// console.log(this.uerInfo)
// 				if(this.uerInfo.birthday == null){
// 					const currentdate = new Date();
// 					let year = currentdate.getFullYear();
// 					let month = currentdate.getMonth() + 1;
// 					let day = currentdate.getDate();
// 					this.date=`${year}-${month}-${day}`;
// 				} else {
// 					this.date = this.uerInfo.birthday;
// 				}
			},
			// 性别选择
			bindPickerChange: function(data) {
				this.uerInfo.gender = data.target.value
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
					this.sexShow =false;
					this.ageShow =false;
					this.numberShow = false;
					this.areaShow = false;
					this.buttonText = '完成';
				}
				if(e == 'avatar'){
					this.imgShow = true;
					this.textShow = false;
					this.sexShow =false;
					this.ageShow =false;
					this.numberShow = false;
					this.areaShow = false;
					this.buttonText = '选择照片'
				}
				if(e == 'summary'){
					this.imgShow = false;
					this.textShow = false;
					this.sexShow =false;
					this.ageShow =false;
					this.numberShow = false;
					this.areaShow = true;
					this.buttonText = '完成'
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
				}
				if(e == 'email'){
					this.imgShow = false;
					this.textShow = true;
					this.sexShow =false;
					this.ageShow =false;
					this.numberShow = false;
					this.areaShow = false;
					this.buttonText = '完成'
				}
				if(e == 'mobile'){
					this.imgShow = false;
					this.textShow = false;
					this.sexShow =false;
					this.ageShow =false;
					this.numberShow = true;
					this.areaShow = false;
					this.buttonText = '完成'
				}
			},
			avatarButton: function(e) {
				// 修改昵称
				if(e == 'nike'){
					this.uerInfo.username=this.textInput;
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
									this.uerInfo.headSculpture = upimg.fileName;
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
					this.uerInfo.remarks=this.tareaInput;
					this.editData();
				}
				if(e == 'sex'){
					this.editData();
				}
				if(e == 'age'){
					if(this.date.length < 10){
						return;
					}else{
					this.uerInfo.birthday=this.date;
					this.editData();
					}
				}
				if(e == 'email'){
					this.uerInfo.email=this.textInput;
					this.editData();
				}
				if(e == 'mobile'){
					this.uerInfo.mobile=this.numberInput;
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
					data: this.uerInfo,
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
						this.HMmessages.show('修改成功，请重新修改。。。',{icon:'error',duration:5000,iconColor:"red",fontColor:"red"});
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
		height: 100%;
		position: fixed;
		top: 0;
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
		height: 100upx;
		line-height: 100upx;
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
