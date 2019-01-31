<template>
    <view class="center-body">
		<view class="summary-body">
			<textarea class="summary-textarea" maxlength="400" @keyup.enter="search" @input="search($event)" placeholder="一句话介绍下你自己" />
		<view class="textarea-number">{{textnumber}}/400</view>
		</view>
		<view class="avatar-button">
			<button @tap="avatarButton"  class="normalButton">{{uerInfo.avatarUp}}</button>
			<!-- <button @tap="onShow" class="button">裁剪</button> -->
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				textnumber:'',
				uerInfo: {
					name:'菊花爆满山',
					avatarUp: '完成'
				}
			}
		},
		methods: {
			
		}
	}
</script>
<style>
	.center-body{
		padding-top: 150upx;
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
	.summary-body{
		width: 600upx;
		height: 200upx;
		padding: 10upx;
		border-radius: 10upx;
		margin-top: 80upx;
		background: #EFEFEF;
		margin: 0 auto;
		overflow: hidden;
		border: 1px solid #6BD8ED;
	}
	.summary-textarea{
		width: 100%;
		height: 100%;
		line-height: 50upx;
		text-align: left;
		font-size: 30upx;
	}
</style>