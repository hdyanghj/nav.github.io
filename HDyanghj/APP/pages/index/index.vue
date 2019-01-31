<template>
	<view class="content">
        <view class="home-logo"><image src="../../static/logo.png"></image></view>
		<view class="home-title">{{title}}</view>
		<view class="buton-view">
			<view class="button-style">个人中心</view>
		</view>
		<view class="buton-view">
			<view class="button-style">我要测试</view>
		</view>
		<view class="buton-view">
			<view class="button-style">我的报告</view>
		</view>
		<view class="buton-view">
			<view class="button-style">关于我们</view>
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
		
		methods: {
			
		}
	}
</script>

<style>
	page {
		background: #f7f7f7;
	}

</style>
