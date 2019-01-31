 <template>
	<view class="login-body">
		<view class="login-title">请输入验证码</view>
		<view class="login-mobile-cont">
			<view class="login-mobile-input"><input type="number" maxlength="4"  @keyup.enter="codenum" @input="codenum($event)"/></view>
			<view class="login-xianshi"><button class="huoqu-button" :disabled="status" @tap="makeRequest" :loading="loading">{{ huoqucode }}</button></view>
		</view>
		<view class="login-tishi">已经向{{mobilenumber}}发送了一个验证码</view>		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading:false,
				status: false,
				num: 60,
				huoqucode: '获取验证码',
				mobilenumber:'',
				phonenumber:''
			}
		},
		mounted:function(){
		  this.aCode();
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
				        // console.log(res.data);
						areaNumber = res.data.code;
						phoneNumber = res.data.phoneNumber;
				    }
				});
				// 截取手机号前3位和后四位中间用*号替代
				this.mobilenumber = phoneNumber.substring(0,3) + '****' + phoneNumber.substring(7,11);
				this.phonenumber = phoneNumber;
				// this.makeRequest();
			},
			// 获取验证码
			makeRequest: function () {
				//请求服务器发送验证码
				this.loading = true;
				uni.request({
					url:this.$webUrl + this.$sendMessage,
					header:{
						'content-type':'application/x-www-form-urlencoded'
					},
					data: {
						mobile:this.phonenumber
					},
					method: 'POST',
					success: (res) => {
						if(res.data.code == 0){
							this.obtainCode();
							uni.showToast({
								icon: 'none',
								duration:3000,
								title: '发送成功'
							});
							return;
						}else if(res.data.code == 100003004){
							uni.showToast({
								icon: 'none',
								duration:3000,
								title: '短信发送次数超限'
							});
							return;
						}else{
							uni.showToast({
								icon: 'none',
								duration:3000,
								title: '发送失败'
							});
							return;
						}
					},
					fail: (err) => {
						
						uni.showToast({
							icon: 'none',
							duration:3000,
							title: '发送失败'
						});
						return;
						// console.log(res)
					},
					complete: () => {
						this.loading = false
					}
				})
			},
			codenum: function (event) {
				let codevalue =event.detail.value.length;
				let codeumber =event.detail.value;
				// console.log(codevalue)
				// 验证验证码
				if( codevalue == 4){
					uni.request({
						url:this.$webUrl + this.$captchaLogin,
						header:{
							'content-type':'application/x-www-form-urlencoded'
						},
						data: {
							mobile:this.phonenumber,
							captcha:codeumber
						},
						method: 'POST',
						success: (res) => {
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
								uni.showToast({
									icon: 'none',
									duration:3000,
									title: '验证码错误'
								});
								return;
							}
							if(res.data.code == 100005005 || res.data.code == 100005006){
								uni.showToast({
									icon: 'none',
									duration:3000,
									title: '验证码错误'
								});
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
						},
						complete: () => {
							this.loading = false
						}
					})       
				}
			},
			//验证码定时器60
			obtainCode() {
				if (this.status) {
					return
				}
				this.status = true;
				this.loadingTiming();
				
				this.timer = setInterval(() => {
					if (this.num === 0) {
						this.timer && this.clearTimer();
						this.reset();
					} else {
						this.loadingTiming();
					}
				}, 1000);
			},
			reset() {
				this.num = 60;
				this.status = false;
				this.disabled = '';
				this.huoqucode = '重新获取';
			},
			loadingTiming() {
				this.num -= 1;
				this.huoqucode = '获取中(' + this.num + ')';
			},
			clearTimer() {
				clearInterval(this.timer);
				this.timer = null;
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
		margin: 0;;
	}
	.login-password{
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
	.login-mobile-input{
		padding-left: 20upx;
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
	}
	.huoqu-button{
		font-size: 26upx;
		color: #03B2CA;
		background: none;
	}
	.huoqu-button.button-hover{
		background: none;
	}
	.huoqu-button:after{
		border: 0;
	}
	.login-tishi{
		padding-top: 40upx;
		font-size: 26upx;
		color: #cccccc;
	}
	.huoqu-button[disabled]:not([type]), .huoqu-button[disabled][type=default]{
		background: none;
		font-size: 26upx;
		color: #9B9B9B;
	}
</style>