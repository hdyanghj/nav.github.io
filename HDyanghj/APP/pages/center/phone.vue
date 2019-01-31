<template>
    <view class="center-body">
		<view class="nikename_text">
			<input class="nikename_input" type="text" v-model="uerInfo.phone"/>
		</view>
		<view class="avatar-title">一个短短的昵称展现你的个性，快快添加昵称。</view>
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
				uerInfo: {
					phone:'18810292567',
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
	.nikename_text{
		width: 600upx;
		height: 80upx;
		padding: 10upx;
		border-radius: 10upx;
		margin-top: 80upx;
		background: #EFEFEF;
		margin: 0 auto;
		overflow: hidden;
		border: 1px solid #6BD8ED;
	}
	.nikename_input{
		width: 100%;
		height: 100%;
		line-height: 8 0upx;
		text-align: center;
		font-size: 30upx;
	}
</style>