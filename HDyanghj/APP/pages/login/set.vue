 <template>
	<view class="login-body">
		<view class="login-title">请填写您的基本信息</view>
		<view class="login-title-tishi">您可以在这里填写您的最基本信息</view>
		<view class="login-mobile">昵称</view>
		<view class="login-mobile-cont" :class="nikeerrormsg">
			<view class="login-mobile-input"><input class="login-input" @focus="nikeju" type="text" @keyup.enter="nicknameswitch" @input="nicknameswitch($event)" v-model="nickNm"></view>
			<view class="login-xianshi" @tap="clearNickname">&#xe604;</view>
			<view class="tips" v-show="niketips">{{tipstext}}</view>
		</view>
		<view class="login-password">密码</view>
		<view class="login-mobile-cont" :class="passerrormsg">
			<view class="login-mobile-input"><input class="login-input" @focus="passju" @blur="passdiu" :type="passswitch" @keyup.enter="passWord" @input="passWord($event)" :value="password"></view>
			<view class="login-xianshi" @tap="passSwitch(uniswitch)">{{uniswitchtext}}</view>
			<view class="tips">{{passext}}</view>
		</view>
		<view class="login-button"><button class="normalButton" @tap="buttonMethod()" :disabled="disaBled">完成</button></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password: '',
				passswitch: "password",
				uniswitch: true,
				uniswitchtext: '显示',
				nickNm: '',
				nikeerrormsg: '',
				passerrormsg:'',
				niketips: false,
				tipstext: '请输入您的昵称',
				passext: '密码必须为6-18位字母、数字。',
				
				disaBled: true,
				token: '',
				phonenumber: '',
				userid:''
			}
		},
		mounted:function(){
			this.loadExecution();
		},
		methods: {
			loadExecution:  function(){
				let token='';
				uni.getStorage({
					key: 'token',
					success: function (sto) {
						token=sto.data
					}
				});
				this.token= token;
				let phone='';
				uni.getStorage({
					key: 'user_Info',
					success: function (sto) {
						phone=sto.data.mobile
					}
				});
				this.phonenumber= phone;
				let userid='';
				uni.getStorage({
					key: 'user_Id',
					success: function (sto) {
						userid=sto.data
					}
				});
				this.userid= userid;
				
			},
			passSwitch: function(e){
				// console.log(e)
				if(e == true){
					this.passswitch = 'text';
					this.uniswitchtext = '隐藏';
					this.uniswitch = false;
				}
				if(e == false){
					this.passswitch = 'password';
					this.uniswitchtext = '显示';
					this.uniswitch = true;
				}
				
			},
			// 清除用户输入昵称
			clearNickname: function(){
				this.nickNm = '';
				uni.setStorage({
					key: 'nickName',
					data: {
						nikename: ''
					}  
				});
			},
			// 表单输入监控
			nicknameswitch: function (event) {
				let $uthis = this;
				$uthis.nikename = event.detail.value;
				// 缓存昵称到本地
				uni.setStorage({
					key: 'nickName',
					data: {
						nikename:$uthis.nickNm
					}  
				});
				this.verification();
			},
			passWord: function (event) {
				let $uthis = this;
				$uthis.password = event.detail.value;
				
				this.verification();				
			},
			verification: function(){
				let $uthis = this;
				if ($uthis.nickNm == '' || $uthis.password == ''){
					// 按钮禁止点击状态
					$uthis.disaBled = true;
					return;
				} else {
					// 按钮显示可以点击
					$uthis.disaBled = false;
				}
			},
			// 昵称聚焦
			nikeju: function(){
				let $nikethis = this;
				// 清除红色边框
				$nikethis.nikeerrormsg = '';
				// 隐藏提示信息
				$nikethis.niketips = false;
			},
			// 密码聚焦
			passju: function(){
				let $passthis = this;
				// 清除红色边框
				$passthis.passerrormsg = '';
				// 隐藏提示信息
				$passthis.passext = '密码必须为6-18位字母、数字。';
				if($passthis.nickNm == ''){
					// 添加红色边框
					$passthis.nikeerrormsg = 'errorred';
					// 显示提示信息
					$passthis.niketips = true;
					return;
				}
			},
			// 密码失去聚焦
			passdiu: function(){
				let $diuthis = this;
				let mobilepass =/^[a-zA-Z]\w{5,17}$/;
				if($diuthis.password == ''){
					// 添加红色边框
					$diuthis.passerrormsg = 'errorred';
					// 显示提示信息
					$diuthis.passext = '密码不能为空。';
					return;
				}
				if(!mobilepass.test($diuthis.password)){
					// 添加红色边框
					$diuthis.passerrormsg = 'errorred';
					// 显示提示信息
					$diuthis.passext = '密码必须为6-18位字母、数字。';
					return;
				}
			},
			buttonMethod: function(e){
				let $butnthis = this;
				let passwordMd5=$butnthis.$md5($butnthis.password);
				console.log(passwordMd5)
				$butnthis.passju();
				$butnthis.passdiu();
				uni.request({
					url:$butnthis.$webUrl + $butnthis.$useralter,
					header:{
						'content-type':'application/x-www-form-urlencoded',
						'token':'' + $butnthis.token	
					},
					data: {
						mobile: $butnthis.phonenumber,
						password: passwordMd5,
						username: $butnthis.nickNm,
						id: $butnthis.userid
					},
					method: 'PUT',
					success: (res) => {
						let Cache =res.data.data;
						console.log(res)
						uni.setStorage({
							key: 'user_Info',
							data: {
								username: Cache.username,
								headSculpture: Cache.headSculpture,
								remarks: Cache.remarks,
								gender: Cache.gender,
								birthday: Cache.birthday,
								email: Cache.email,
								mobile: Cache.mobile,
							},
						});
						if(res.data.code == 0){
							uni.reLaunch({
								url: '../index/index'
							});
							return;
						}
						if(res.data.code == 100005001 || res.data.code == 100005002){
							uni.reLaunch({
								url: '../login/login'
							});
							return;
						}
					},
					fail: (err) => {
						
						uni.showToast({
							icon: 'none',
							duration:3000,
							title: '修改失败'
						});
						return;
						// console.log(res)
					}
				});

			}
		}
	}
</script>

<style>
	.login-body{
		width: 660upx;
		margin: 0 auto;
	}
	.login-title{
		margin: 0;
		padding-top: 80upx;
		height: 50upx;
		line-height: 40upx;
	}
	.login-title-tishi{
		font-size: 28upx;
		color: #4A4A4A;
		padding: 10upx 0 80upx 0;
	}
	.login-mobile,.login-password{
		font-size: 34upx;
		color: #4A4A4A;
	}
	.login-mobile-cont{
		width: 100%;
		height: 54upx;
		padding: 40upx 0 10upx;
		border-bottom: 1px solid #efefef;
		display: flex;
		position: relative;
	}
	
	.login-gsd{
		border: 1px solid #CCC;
		padding:5upx 20upx;
		font-size: 30upx;
	}
	.login-mobile-input{
		padding-left: 20upx;
	}
	.login-input{
		width: 540upx;
		font-size: 32upx;
		line-height: 54upx;
		border: none;
		outline:none;
	}
	.login-password{
		padding-top: 50upx;
		
	}
	.login-xianshi{
		height: 54upx;
		line-height: 54upx;
		position: absolute;
		right: 0upx;
		top: 40upx;		
		font-size: 26upx;
		color: #03B2CA;
		font-family: texticons;
	}
	.login-button{
		padding-top: 100upx;
	}
	.login-code{
		padding-top: 40upx;
		font-size: 26upx;
		color: #03B2CA;
	}
</style>