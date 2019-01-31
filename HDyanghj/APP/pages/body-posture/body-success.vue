<template>
	<view class="body-posture">
		<view class="success-icon">&#xe605;</view>
		<view class="success-text">提交成功</view>
		<view class="success-tishi">测试结果将在7个工作日完成，可在个人中心->我的测试列表中查看。</view>
		<view class="success-button" @tap="ceshi">&lt;&lt;继续测试&gt;&gt;</view>
		<view class="success-button" @tap="fanhui">&lt;&lt;返回首页&gt;&gt;</view>
	</view>
</template>

<script>
	import HMmessages from '@/components/HM-messages/HM-messages.vue';
	export default {
		data() {
			return {
				
			}
		},
		components: {
			HMmessages
		},
		mounted:function(){
			this.detail();
		},
		methods: {
			detail: function(){
				
			},
			ceshi:function(){
				uni.reLaunch({
					url: '/pages/body-posture/body-posture'
				});
			},
			fanhui:function(){
				uni.reLaunch({
					url: '/pages/index/index'
				});
			}
			
		}
	}
</script>

<style>
	.body-posture{
		padding: 120upx 0 60upx;
		
	}
	.success-icon{
		width: 120upx;
		height: 120upx;
		border-radius: 60upx;
		margin: 0 auto;
		font-size: 100upx;
		text-align: center;
		font-family: texticons;
		background: #1AAD19;
		color: #FFFFFF;
	}
	.success-text{
		padding: 40upx;
		text-align: center;
	}
	.success-tishi{
		width: 80%;
		font-size: 28upx;
		margin: 0 auto;
		text-align: center;
		padding-bottom: 40upx;
	}
	.success-button{
		width: 80%;
		height: 100upx;
		line-height: 100upx;
		font-size: 36upx;
		margin: 0 auto;
		text-align: center;
		color: #6BD8ED;
	}
</style>
