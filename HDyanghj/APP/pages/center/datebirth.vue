<template>
    <view class="center-body">
		<view class="nikename_text">
			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="nikename_input">{{date}}</view>
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
				date: '请选择出生日期',
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
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
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
			
				return `${year}-${month}-${day}`;
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