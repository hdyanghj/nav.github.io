<template>
	<view class="shop-list">
		<view class="shop-listing">
			<text class="listing-title">商品清单</text>
			<text class="listing-editor">编辑</text>
		</view>
		<view class="shop-shopping">
			<view class="shop-name">
				<text>&nbsp;博海宇通数码专卖旗舰店</text>
			</view>
			<view class="shop-img">
				<image src="https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg" style="width:100%;height: 100%;" mode=""></image>
			</view>
			<view class="shop-title">
				<view class="shop-titles">
					<text>Apple iPhone X 256GB 深空灰色 移动联通电信4G手机</text>
				</view>
				<view class="shop-price">
					<view class="reduction">
						<text>-</text>
					</view>
					<view class="count">
						<text>0</text>
					</view>
					<view class="add">
						<text>+</text>
					</view>
				</view>
				<view class="shop-count">
					<text>￥1200</text>
				</view>
			</view>
		</view>
		<view class="shop-footer">
			<view class="shop-left">
				<view class="shop-total">
					 
				</view>
			</view>
			<view class="shop-right">
				<text><navigator  url="complete">结算(0)</navigator></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.shop-list{
	position: relative;
}
.shop-listing{
	width:100%;
	height: 80upx;
	border-top:1px solid #B9B7B7;
	border-bottom:1px solid #B9B7B7;
}
.listing-title{
	font-size: 34upx;
	line-height: 80upx;
	padding-left: 20upx;
}
.listing-editor{
	float: right;
	font-size: 34upx;
	line-height: 80upx;
	padding-right: 20upx;
}
.shop-shopping{
	height: 300upx;
	width:100%;
}
.shop-name{
	width:90%;
	margin:auto;
	border-bottom:1px solid #B9B7B7;
	font-size: 30upx;
	line-height: 60upx;
}
.shop-img{
	width:200upx;
	height:200upx;
	float: left;
	margin-left:40upx;
	margin-top:15upx;
}
.shop-title{
	width:470upx;
	height:200upx;
	font-size: 28upx;
	float: left;
	margin-top:15upx;
	margin-left:15upx;
}
.shop-titles{
	width:470upx;
	height:50upx;
	font-size: 28upx;
}
.shop-count{
	width:40%;
	height:70upx;
	float: left;
	margin-top:70upx;
	margin-left:20upx;
	font-size: 34upx;
	line-height: 100upx;
}
.shop-price{
	width:50%;
	height:70upx;
	float: right;
	margin-top:70upx;
}
.shop-footer{
	width:100%;
	height:100upx;
	border:1px solid #B9B7B7;
	position: absolute;
	position: fixed;
	bottom: 0;
}
.shop-left{
	width:70%;
	height: 100%;
	float: left;
}
.shop-right{
	width:30%;
	height: 100%;
	background:#f77628;
	float: right;
	text-align: center;
	line-height: 100upx;
	color:white;
}
.reduction{
	width:25%;
	height: 50upx;
	border:1px solid #B9B7B7;
	float: left;
	border-right: none;
	text-align: center;
	margin-top:20upx;
}
.count{
	width:25%;
	height: 50upx;
	border:1px solid #B9B7B7;
	float: left;
	border-right: none;
	text-align: center;
	margin-top:20upx;
}
.add{
	width:25%;
	height: 50upx;
	border:1px solid #B9B7B7;
	float: left;
	text-align: center;
	margin-top:20upx;
}
</style>
