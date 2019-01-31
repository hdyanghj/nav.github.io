<template>
    <view class="center-body">
		<view class="nikename_text">
			<picker @change="bindPickerChange" :value="index" :range="gender">
				<view class="nikename_input" v-model="gendertext">{{gender[index]}}</view>
			</picker>
		</view>
		<view class="avatar-title">选择您的性别，更好的体验。</view>
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
					sex:'男',
					avatarUp: '完成'
				},
				gender: ['请选择性别','男','女','保密'],
				gendertext: '',
				index: 0,
			}
		},
		methods: {
			bindPickerChange: function(data) {
				this.index = data.target.value
			}
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
		line-height: 80upx;
		text-align: center;
		font-size: 30upx;
	}
</style>