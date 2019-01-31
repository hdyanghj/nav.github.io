 <template>
	<view class="login-body" :style="{height:winHeight + 'px'}">
		<HMmessages ref="HMmessages" @complete="HMmessages = $refs.HMmessages"></HMmessages>
		<view class="login-title">登录</view>
		<view class="login-mobile">手机号</view>
		<view class="login-mobile-cont" :class="phoneerrormsg">
			<view class="login-gsd" @tap="areaButton">+{{areaCode}}</view>
			<view class="login-mobile-input">
				<input class="login-input" type="number" @focus="phoneju" maxlength="11" @keyup.enter="search" @input="search($event)" :value="mobile">
			</view>
			<view class="tips" v-show="phonetips">{{tipstext}}</view>
		</view>
		<view class="login-password">密码</view>
		<view class="login-mobile-cont" :class="passerrormsg">
			<view class="login-mobile-input">
				<input class="login-input" @focus="passju" @blur="passdiu" :type="passswitch" @keyup.enter="passWord" @input="passWord($event)" :value="password">
			</view>
			<view class="login-xianshi" @tap="passSwitch(uniswitch)">{{uniswitchtext}}</view>
			<view class="tips">{{passext}}</view>
		</view>
		<view class="login-button"><button class="normalButton" @tap="obtainCode()" :disabled="disaBled">登录</button></view>
		<view class="login-code">
			<view class="login-code-tishi" @tap="forgetpass">忘记密码?</view>
			<view class="login-code-pass" @tap="phoneLogin">免密码登录/注册账号</view>
		</view>
		<view class="pact-footer">
			<view class="pact-footer-cont">
				登录表明已阅读并接受
				<text class="pact-footer-text" @tap="termsb">用户服务条款</text>和
				<text class="pact-footer-text" @tap="policy">隐私政策</text>
			</view>
		</view>
	</view>
</template>

<script>
	import HMmessages from '@/components/HM-messages/HM-messages.vue';
	export default {
		data() {
			return {
				areaCode: '86',
				mobile: '',
				password: '',
				passswitch: "password",
				uniswitch: true,
				uniswitchtext: '显示',
				winHeight: 0,
				disaBled: true,
				phoneerrormsg: '',
				passerrormsg: '',
				tipstext: '请输入您的手机号',
				passext: '密码必须为6-18位字母、数字。',
				phonetips: false
			}
		},
		mounted:function(){
			// #ifndef APP-PLUS
			this.winHeight = uni.getSystemInfoSync().windowHeight
			//#endif
		  this.aCode();
		},
		components: {
			HMmessages
		},
		methods: {
			aCode: function(){
				let $uthis = this;
				let areaNumber = '';
				let phoneNumber = '';
				// 从LocalStorage获取数据
				uni.getStorage({
				    key: 'AreaCode',
				    success: function (res) {
				        console.log(res.data);
						areaNumber = res.data.code;
						phoneNumber = res.data.phoneNumber;
				    }
				});
				// 判断国际区号是否为空 给国际区号和手机号赋值
				if(areaNumber != ''){
					$uthis.areaCode = areaNumber;
					$uthis.mobile = phoneNumber;
				}
				console.log($uthis.areaCode)
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
			areaButton: function(){
				// 跳转到国际区号选择页面
				uni.navigateTo({
					url: '../phones/phones'
				});
			},
			
			// 忘记密码
			forgetpass: function(){
				uni.navigateTo({
					url: 'phonelogin'
				});
			},
			// 注册登录
			phoneLogin: function(){
				uni.navigateTo({
					url: 'phonelogin'
				});
			},
			// 服务条款
			termsb: function(){
				uni.navigateTo({
					url: 'phonelogin'
				});
			},
			// 隐私政策
			policy: function(){
				uni.navigateTo({
					url: 'phonelogin'
				});
			},
			// 表单输入监控
			search: function (event) {
				let $uthis = this;
				$uthis.mobile = event.detail.value;
				// 缓存手机号和国际区号到本地
				uni.setStorage({
					key: 'AreaCode',
					data: {
						phoneNumber:$uthis.mobile,
						code:$uthis.areaCode
					}  
				});
				this.verification();
			},
			passWord: function (event) {
				let $uthis = this;
				$uthis.password = event.detail.value;
				// 缓存手机号和国际区号到本地
				uni.setStorage({
					key: 'AreaCode',
					data: {
						phoneNumber:$uthis.mobile,
						code:$uthis.areaCode
					}  
				});
				this.verification();				
			},
			verification: function(){
				let $uthis = this;
				if ($uthis.mobile == '' || $uthis.password == ''){
					// 按钮禁止点击状态
					$uthis.disaBled = true;
					return;
				} else {
					// 按钮显示可以点击
					$uthis.disaBled = false;
				}
			},
			// 昵称聚焦
			phoneju: function(){
				let $nikethis = this;
				// 清除红色边框
				$nikethis.phoneerrormsg = '';
				// 隐藏提示信息
				$nikethis.phonetips = false;
			},
			// 密码聚焦
			passju: function(){
				let $passthis = this;
				// 清除红色边框
				$passthis.passerrormsg = '';
				// 隐藏提示信息
				$passthis.passext = '密码必须为6-18位字母、数字。';
				if($passthis.mobile == ''){
					// 添加红色边框
					$passthis.phoneerrormsg = 'errorred';
					// 显示提示信息
					$passthis.phonetips = true;
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
			obtainCode: function(){
				let $uthis = this;
				let mobilenum=11 && /^1[3456789]\d{9}$/;
				let mobilepass =/^[a-zA-Z]\w{5,17}$/;
				// 正则判断手机号
				if ($uthis.mobile == ''){
					this.HMmessages.show('手机号不能为空，请填写。',{icon:'error',duration:5000,iconColor:"red",fontColor:"red"});
					return;
				} else if (!mobilenum.test($uthis.mobile)) {
					uni.showToast({
						icon: 'none',
						duration:3000,
						title: '手机格式不正确'
					});
					return;
				} else if($uthis.password == ''){
					this.HMmessages.show('密码不能为空，请填写。',{icon:'error',duration:5000,iconColor:"red",fontColor:"red"});
					return;
				} else if(!mobilepass.test($uthis.password)){
					this.HMmessages.show('密码格式不正确，请填写。',{icon:'error',duration:5000,iconColor:"red",fontColor:"red"});
					return;
				} else {
					let passwordMd5=$uthis.$md5($uthis.password);
					uni.request({
						url:this.$webUrl + this.$passwordLogin,
						header:{
							'content-type':'application/x-www-form-urlencoded'
						},
						data: {
							mobile:$uthis.mobile,
							password:passwordMd5
						},
						method: 'POST',
						success: (res) => {
							$uthis.HMmessages.show('好嗨哟 登录成功',{icon:'success',duration:5000,iconColor:"#44B549",fontColor:"#44B549"});
							console.log(res.data.token)
							let Cache =res.data.data;
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
							uni.setStorage({
								key: 'user_Id',
								data: Cache.id
							});
							uni.setStorage({
								key: 'token',
								data:res.data.token
							});
							if(res.data.code == 0){
								uni.reLaunch({
									url: '../index/index'
								});
							}
							if(res.data.code == 2){
								uni.setStorage({
									key: 'user_Info',
									data:{
										mobile: Cache.mobile
									}
								});
								uni.setStorage({
									key: 'user_Id',
									data: Cache.id
								});
								uni.setStorage({
									key: 'token',
									data:res.data.token
								});
								uni.reLaunch({
									url: '../login/set'
								});
							}
							if(res.data.code == 10007){
								$uthis.HMmessages.show('密码错误，请填写。',{icon:'error',duration:5000,iconColor:"red",fontColor:"red"});
								return;
							}
							if(res.data.code == 100005005 || res.data.code == 100005006){
								$uthis.HMmessages.show('验证码错误，请填写。',{icon:'error',duration:5000,iconColor:"red",fontColor:"red"});
								return;
							}
						},
						fail: (err) => {
							uni.showToast({
								icon: 'none',
								duration:3000,
								title: '验证码错误'
							});
							return;
							// console.log(res)
						}
					}) 
				}	
			}
		}
	}
</script>

<style>
	.login-body{
		width: 660upx;
		margin: 0 auto;
		position: relative;
	}
	.login-title{
		margin: 0;
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
	}
	.login-button{
		padding-top: 100upx;
	}
	.login-code{
		padding-top: 40upx;
		font-size: 26upx;
		color: #03B2CA;
		display: flex;
	}
	.login-code-tishi{
		flex: 1;
		text-align: left;
	}
	.login-code-pass{
		flex: 1;
		text-align: right;
	}
</style>