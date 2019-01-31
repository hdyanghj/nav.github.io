<template>
	<view class="content">
        <view class="home-logo"><image src="../../static/logo.png"></image></view>
		<view class="home-title">{{title}}</view>
		<view class="buton-view">
			<view class="button-style" @click="recordBtn()">个人中心</view>
		</view>
		<view class="buton-view">
			<view class="button-style" @click="testBtn()">我要测试</view>
		</view>
		<view class="buton-view">
			<view class="button-style" @click="detailBtn()">我的报告</view>
		</view>
		<view class="buton-view">
			<view class="button-style" @click="aboutBtn()">关于我们</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '青少年体能训练中心'
			}
		},
		onNavigationBarButtonTap(e) {
			uni.reLaunch({
				// #ifdef APP-PLUS
				url: '../about_us/about_us',
				// #endif
				// #ifdef H5
				url: '../about_us/about_us',
				// #endif
			})
		},
		methods: {
			recordBtn: function(){
				uni.reLaunch({
					url: '../record/record'
				});
			},
			testBtn: function(){
				uni.reLaunch({
					url: '../test/test'
				});
			},
			detailBtn: function(){
				uni.reLaunch({
					url: '../test/detail'
				});
			},
			aboutBtn: function(){
				uni.reLaunch({
					url: '../about_us/about_us'
				});
			}
		}
	}
</script>

<style>
	page {
		background: #f7f7f7;
	}

</style>
