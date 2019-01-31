 <template>
	<view class="login-body" :style="{height:winHeight + 'px'}">
		<view class="login-title">登录</view>
		<view class="login-mobile">手机号</view>
		<view class="login-mobile-cont">
			<view class="login-gsd" @tap="areaButton">+{{areaCode}}</view>
			<view class="login-mobile-input">
				<input type="number" class="login-input" maxlength="11" @keyup.enter="search" @input="search($event)" :value="mobile"/>
			</view>
		</view>
		<view class="login-button"><button class="normalButton" @tap="obtainCode()" :disabled="disaBled">获取手机验证码</button></view>
		<view class="login-code">
			<view class="login-code-tishi">未注册用户验证后自动登录</view>
			<view class="login-code-pass" @tap="passwordLogin">密码登录</view>
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
	export default {
		data() {
			return {
				mobile: '',
				areaCode: '86',
				disaBled: true,
				winHeight: 0
			}
		},
		mounted:function(){
			// #ifndef APP-PLUS
			this.winHeight = uni.getSystemInfoSync().windowHeight
			//#endif
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
				// 判断手机号是否是11位 更新按钮显示状态
				if(phoneNumber.length == 11){
					$uthis.disaBled = false;
				}
				console.log($uthis.areaCode)
			},
			passwordLogin: function(){
				// 跳转到普通登录
				uni.navigateTo({
					url: 'login'
				});
			},
			areaButton: function(){
				// 跳转到国际区号选择页面
				uni.navigateTo({
					url: '../phones/phones'
				});
			},
			// 表单输入监控
			search: function (event) {
				
				let $uthis = this;
				let codevalue = event.detail.value.length;
				$uthis.mobile = event.detail.value;
				// 缓存手机号和国际区号到本地
				uni.setStorage({
					key: 'AreaCode',
					data: {
						phoneNumber:$uthis.mobile,
						code:$uthis.areaCode
					}  
				});
				// 判断手机号是否是11位
				if( codevalue == 11){
					// 按钮显示可以点击
					$uthis.disaBled = false;
					console.log('输入的数值是',codevalue)
				} else {
					// 按钮禁止点击状态
					$uthis.disaBled = true;
				}
			},
			// 获取手机验证码
			obtainCode: function(e){
				let $uthis = this;
				console.log($uthis.mobile)
				let mobilenum=11 && /^1[3456789]\d{9}$/;
				// 正则判断手机号
				if (!mobilenum.test($uthis.mobile)) {
					uni.showToast({
						icon: 'none',
						duration:3000,
						title: '手机格式不正确'
					});
					return;
				} else {
					uni.setStorage({
						key: 'AreaCode',
						data: {
							phoneNumber: $uthis.mobile,
							code: $uthis.areaCode
						},
						success: function () {
							uni.navigateTo({
								url: 'yanzhengma'
							});
						}
					});
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
		color: #000000;
	}
	.login-code-pass{
		flex: 1;
		text-align: right;
	}
</style>