<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem"></uni-segmented-control>
		</view>
		<view class="content">
			<view v-show="current === 0">
				<view class="detail">
					<view class="detail-picture">
						<view class="uni-padding-wrap">
							<view class="page-section swiper">
								<view class="page-section-spacing">
									<swiper class="swiper swipers" :autoplay="autoplay" @change="change">
										<swiper-item>
											<view class="swiper-item"><image :src="pics" mode=""></image></view>
										</swiper-item>
										<swiper-item> 
											<view class="swiper-item"><image :src="pics" mode=""></image></view>
										</swiper-item>
										<swiper-item>
											<view class="swiper-item"><image :src="pics" mode=""></image></view>
										</swiper-item>
									</swiper>
									<view class="counts">
										{{num+1}}/3
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="detail-originalPrice same">
						<text style="font-size: 44upx;color:#ff5363;">￥{{price}}</text>
					</view>
					<!-- <view class="detail-favourPrice">
						<text>￥{{originalPrice}}</text>
					</view>-->
					<view class="detail-title same">
						<text style="font-size: 32upx;">{{name}}</text>
					</view>
					<view class="detail-title same">
						<text style="font-size: 24upx;color:#999;">{{subTitle}}</text>
					</view>
					<view class="active"></view>
					<view class="detail-coupons sames" v-show="coupons">
						&nbsp;&nbsp;<text>服务说明</text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					    <text>无忧退货</text>&nbsp;&nbsp;&nbsp;
						<text>快速退款</text>&nbsp;&nbsp;&nbsp;
						<text>免费包邮</text>
					</view>
					<view class="detail-service sames">
						&nbsp;&nbsp;<text>商品参数</text>
						<text style="display:inline-block;margin-left:480upx;" @click="watchs()">查看</text>
					</view>
					<view class="detail-parameter sames">
						&nbsp;&nbsp;<text>选择规格</text>
						<text style="display:inline-block;margin-left:480upx;">颜色</text>
					</view>
					<view class="active"></view>
					<view class="detail-titles">
						<text style="font-size: 32upx;color:#666;display: inline-block;margin-left: 300upx;">商品介绍</text><br>
						<text style="font-size: 28upx;color:#666;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{description}}</text>
					</view>
					<view class="watch" v-show="show">
						<view class="shadow"></view>
						<view class="fixed">
						 	<text style="display:block;text-align: center;line-height:80upx;font-size:28upx;">商品参数</text>
							<view class="parameter" style="font-size:28upx;" v-for="(list,index) in data" :key="index">
								<view class="names">
									{{list.name}}
								</view>
								<view class="values">
									{{list.value}}
								</view>
							</view>
							<text class="wrong" @click="close()">×</text>
						</view>
					</view>
					<!-- <view class="footer">
						<view class="store">
							<text>店铺</text>
						</view>
						<view class="service">
							<text>客服</text>
						</view>
						<view class="collection">
							<text>收藏</text>	
						</view> 
						<view class="shop">
							<text><navigator  url="shop-list">加入购物车</navigator></text>
						</view>
						<view class="buy">
							<text><navigator  url="shopping-person-center">立即购买</navigator></text>
						</view>
					</view> -->
				</view>
			</view>
			<view v-show="current === 1">
				<view class="detail-picture">
					<view v-html="detailHtml">
						{{detailHtml}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import uniSegmentedControl from '../../components/uni-segmented-control.vue';
	// import uniIcon from "../../components/uni-icon.vue";
	export default {
		data() {
			return {
				items: [
					'商品',
					'详情'
					// '商品介绍'
				],
				current: 0,
				autoplay: false,
				pics:'',
				name:'',
				subTitle:'',
				price:'',
				originalPrice:'',
				// albumPics:'',
				show:false,
				num:0,
				serviceIds:'',
				productAttributeValueList:'',
				coupons:true,
				description:'',
				detailHtml:'',
				data:[],
				productAttributeList:''
				
			}
		},
		components: {
			uniSegmentedControl
		},
		mounted:function(){
			this.detail();
		},
		methods: {
			//选项卡点击
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				} 
			},
			//详情页面渲染
			detail(){
				var pics='';
				var name='';
				var subTitle='';
				var price='';
				var originalPrice='';
				var albumPics='';
				var serviceId='';
				var productAttributeValueList='';
				var description='';
				var detailHtml='';
				var productAttributeList='';
				uni.getStorage({
					key: 'id',
					success: function (res) {
						console.log(res.data.data.data);
						pics=res.data.data.data.pic;
						albumPics=res.data.data.data.albumPics;
						name=res.data.data.data.name;
						subTitle=res.data.data.data.subTitle;
						price=res.data.data.data.price;
						originalPrice=res.data.data.data.originalPrice;
						serviceId=res.data.data.data.serviceIds;
						productAttributeValueList=res.data.data.data.productAttributeValueList;
						description=res.data.data.data.description;
						detailHtml=res.data.data.data.detailHtml;
						productAttributeList=res.data.data.data.productAttributeList;
					}
				});
				this.pics=pics;
				this.albumPics=albumPics;
				var picArr=new Array();
				picArr.push(this.pics);
				var picArrs=new Array();
				picArrs.push(this.albumPics);
				picArr.push(this.albumPics);
				// console.log(picArr[0]);
				// console.log(picArr[1]);
				// picArr[1].push(picArr[0]);
				// console.log(picArr[1]);
				// for(var i=0;i<picArr.length;i++){
				// 	 console.log(picArr[i]);
				// }
				this.name=name;
				this.subTitle=subTitle;
				this.price=price;
				this.originalPrice=originalPrice;
				this.serviceId=serviceId;
				this.productAttributeValueList=productAttributeValueList;
				this.description=description;
				this.detailHtml=detailHtml;
				this.productAttributeList=productAttributeList;
				if(this.serviceId==''){
					this.coupons=false;
				}
				for(var i=0;i<this.productAttributeList.length;i++){
                    var dataArr=[];					
					for(var j=0;j<this.productAttributeValueList.length;j++){
                      if(productAttributeList[i].id==productAttributeValueList[j].productAttributeId){
						  dataArr['name']=this.productAttributeList[i].name;
						  dataArr['value']=this.productAttributeValueList[i].value;
						   this.data.push(dataArr);
					  }
					 
					}
				}
				console.log(this.data);
			},
			change(e){
				this.num=e.detail.current;
			},
			watch(){
				this.show=true;
			},
			close(){
				this.show=false;
			},
			watchs(){
				this.show=true;
			},
			closes(){
				this.show=false;
			}
		}
	}
</script>

<style>
	.wrong{
		position:absolute;
		top:0upx;
		right:18upx;
		color:#888;
		font-size: 44upx;
	}
	.names{
		width:30%;
	    /* background: blue; */
		display: block;
		float: left;
	}
	.values{
		width:60%;
		/* background: black; */
		display:block;
		float: right;
	}
	.detail-picture >>> img {
		width:100%;
		height:100%;
	}
	.watch{
		width:100%;
		height:100%;
		position:fixed;
		bottom:0;
	}
	.shadow{
		width:100%;
		height:50%;
		background: black;
		opacity: 0.4;
	}
	.fixed{
		width:100%;
		height:50%;
		background:#fff;
		position: relative;
	}
	.parameter{
		width:100%;
		/* height:500upx; */
		display:block;
		width:87%;
		font-size:28upx; 
		color:#888;
		line-height: 100upx;
		margin:auto;
		height:100upx;
		border-bottom: 1px solid #eee;
		/* background: red; */
	}
	.list{
		display:block;
		width:87%;
		font-size:28upx; 
		color:#888;
		line-height: 100upx;
		margin:auto;
		height:100upx;
		border-bottom: 1px solid #eee; 
	}
	.content {
		/* display: flex;
		justify-content: center;
		align-items: center;
		height: 300upx;
		text-align: center; */
	}
	.color-tag {
		width: 50upx;
		height: 50upx;
	}
	.detail{
		position: relative;
		width:98%;
		margin:auto;
	}
	.footer{
		height: 100upx;
		width:100%;
		border:1px solid #b9b7b7;
		position: fixed;
		bottom:0;
		background: white;
		display:none;
	}
	.store{
		width:15%;
		line-height: 100upx;
		float:left;
		text-align: center;
		font-size: 34upx;
		border-right:1px solid  #b9b7b7;
	}
	.service{
		width:15%;  
		line-height: 100upx;
		float:left;            
		text-align: center;
		font-size: 34upx;
		border-right:1px solid  #b9b7b7;
	}
	.collection{
		width:15%;
		line-height: 100upx;
		float:left ;
		text-align: center;
		font-size: 34upx;
		border-right:1px solid  #b9b7b7;
	}
	.shop{
		width:25%;
		background: white;
		line-height: 100upx;
		float:left;
		text-align: center;
		font-size: 34upx;
	}
	.buy{
		width:25%;
		background: #2AB795;
		color:white;
		line-height: 100upx;
		float:left;
		text-align: center;
		font-size: 34upx;
	}
	.detail-favourPrice{
		text-decoration: line-through;
		color:#B9B7B7;
		font-size: 32upx;
	}
	.active{ 
		height:20upx;
		width:100%;
		background:#efefef;
	}
	.same{
		font-size: 36upx;
		line-height: 60upx;
	}
	.detail-title{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		font-size: 30upx;
	}
	.sames{
		font-size: 28upx;
		line-height: 80upx;
		border-bottom:1px solid  #efefef;
		color:#666;
	}
	.detail-picture{
		width:100%;
		margin-top:40upx;
		text-align: center;
		margin-bottom:40upx;
	}
	.detail-introduce{
		font-size: 30upx;
		line-height: 55upx;
	}
	.detail-titles{
		background: white;
		width: 100%;
	}
	.counts{
		display:inline-block;
		width:90upx;
	    position: absolute;
		right:40upx;
		top:440upx;
	}
	.swipers{
		position: relative;
		height:480upx;
	}
</style>

