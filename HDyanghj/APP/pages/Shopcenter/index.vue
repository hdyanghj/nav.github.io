<template>
	<view class="main">
		<view class="main-search">
			<view class="header">
				<view class="input-view"> 
					<uni-icon type="search" size="22" color="#666666"></uni-icon>
					<input confirm-type="search" class="input" type="text" placeholder="输入搜索关键词" v-model="searchVal"/>
				</view>
				<button type="primary" style="width:20%;height:60upx;line-height: 60upx;background: none;color:black;font-size: 30upx;"  @click="search()">搜索</button>
			</view>
		</view>
		<view class="left">
			 <view class="uni-card">
					<view class="uni-list">
						<view class="uni-list-cell uni-collapse" v-for="(list,index) in lists" :key="index" :class="index === lists.length - 1 ? 'uni-list-cell-last' : ''">
							<view class="uni-list-cell-navigate" hover-class="uni-list-cell-hover" :class="list.show ? 'uni-active' : ''"
								@click="trigerCollapse(index)">
								{{list.name}} 
							</view>
							<view class="uni-list uni-collapse" :class="list.show ? 'uni-active' : ''">
								<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,key) in list.item" :key="key" :class="key === list.item.length - 1 ? 'uni-list-cell-last' : ''">
									<view class="uni-list-cell-navigate" @click="productCategory(item.id)"> {{item.name}} </view>
								</view>
							</view>
						</view>
					</view>
				</view>
		</view>
		<view class="right">
			<view class="content">
				<view class="uni-product-list">
					<view class="uni-product" v-for="(product,index) in data" @click="products(product.id)">
						<view class="image-view">
							<image class="uni-product-image" :src="product.pic"></image>
						</view>
						<view class="uni-product-title">{{product.name}}</view>
						<view class="uni-product-price">
							<!-- <text class="uni-product-price-favour">￥{{product.originalPrice}}</text><br> -->
							<text class="uni-product-price-original">￥{{product.price}}</text>
						</view>
					</view>
				</view>
		  </view>
		</view>
	</view>
</template>
<script>
	import uniDrawer from '../../components/uni-drawer.vue';
	import uniIcon from '../../components/uni-icon.vue';
	export default {
		components: {
			uniDrawer,
			uniIcon
		},
		data() {
			return {
				data:[],
				lists:[],
				searchVal:'',
				id:''
			}
		},
		mounted:function(){
			this.init('','');
			this.item1()
		},
		methods: {
			init(productCategoryId,keyword){
				if(productCategoryId == 0){
					productCategoryId=''
				}
				uni.request({
					url:this.$shopUrl + this.$productlist,
					data: {
						pageSize: 100,
						pageNum: 1,
						keyword:keyword,
						productCategoryId:productCategoryId
					},
					success: (res) => {
						this.data=[];
						var list=res.data.data.list;
						for(var i=0;i<list.length;i++){
							this.data.push(list[i]);
						}
					}
				});
			},
			productCategory(id){
				this.init(id,'');
				this.searchVal='';
			},
			item1() {
				this.rightDrawerVisible = false;
				uni.request({
					url:this.$shopUrl + 'productCategory/list/withChildren', 
					success: (res) => {
						var right=res.data.data;
						for(var i=0;i<right.length;i++){
							var item=[];
							for(var j=0;j<right[i].children.length;j++){
								var itemArr=[];
								itemArr['name']=right[i].children[j].name;
								itemArr['id']=right[i].children[j].id;
								item.push(itemArr);
							}
							eval(right[i].item=item);
							eval(right[i].show=false);
							this.lists.push(right[i]);
						}
					}
				});	
			},
      trigerCollapse(e) {
            for (let i = 0, len = this.lists.length; i < len; ++i) {
                if (e === i) {
                    this.lists[i].show = !this.lists[i].show;
                } else {
                    this.lists[i].show = false;
                }
            }
      },
			search(){
				// console.info(this.searchVal);
				this.init('',this.searchVal);
			},
			products(id){
				  uni.request({
				  	url:this.$shopUrl + 'product/updateInfo/'+id, 
				  	success: (res) => {
							uni.setStorage({
									key: 'id',
									data: res,
							});
							uni.reLaunch({
								url:'detail'
							});
				  	}
				  });
			}
		}
	}
</script>

<style>
	.main{
		position:relative;
	}
	.main-search{
		width:100%;
		height: 100upx;
		position: fixed;
		top:88upx;
		/* border:1px solid green;*/
		z-index: 99;
	}
	.left{
		border:1px solid #dcdbdb;
		width:24%;
		height:100%;
		position: fixed;
		left:0;
		top:190upx; 
	}
	.right{
		width:75%;
		right:0;
		height:100%;
		margin-top:120upx;
		margin-left: 200upx;
	}
	.header {
		display: flex;
		flex-direction: row;
		padding: 10px 15px;
		align-items: center;
		background: white;
	}

	.input-view {
		display: flex;
		align-items: center;
		flex-direction: row;
		background-color: #e7e7e7;
		height: 30px;
		border-radius: 15px;
		padding: 0 10px;
		flex: 1;
	}
	.input {
		flex: 1;
		padding: 0 5px;
		height: 24px;
		line-height: 24px;
		font-size: 16px;
	}
	.icon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 10px;
	} 
	.uni-product-list {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		flex-direction: row;
	}
	.uni-product {
		display: flex;
		flex-direction: column;
		float: left;
		/* border:1px solid red; */
		margin-left:10upx;
	}
	.image-view {
		height: 170upx;
		width: 170upx;
		margin:12upx 0;
	}
	.uni-product-image {
		height: 170upx;
		width: 170upx;
	}
	.uni-product-title {
		width: 170upx;
		word-break: break-all;
		display: -webkit-box;
		overflow: hidden;
		line-height:1.5;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-size: 22upx;
	}
	.uni-product-price {
		margin-top:10upx;
		font-size: 28upx;
		line-height:1.5;
		position: relative;
	}
	.uni-product-price-original {
		color: #e80080;
	}
	.uni-product-price-favour {
		color: #888888;
		text-decoration: line-through;
		margin-left: 10upx;
	}
	.uni-product-tip {
		position: absolute;
		right: 10upx;
		background-color: #ff3333;
		color: #ffffff;
		padding: 0 10upx;
		border-radius: 5upx;
	}
	.uni-list {
		background-color: #FFFFFF;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.uni-list:after {
		position: absolute;
		z-index: 10;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	.uni-list:before {
		position: absolute;
		z-index: 10;
		right: 0;
		top: 0;
		left: 0;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	.uni-list-cell {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.uni-list-cell-hover {
		background-color: #eee;
	}
	.uni-list-cell-pd {
		padding: 22upx 30upx;
	}
	.uni-list-cell-left {
		font-size:28upx;
		padding: 0 30upx;
	}
	.uni-list-cell-db,
	.uni-list-cell-right {
		flex: 1;
	}
	.uni-list-cell:after {
		position: absolute;
	  z-index: 3;
		right: 0;
		bottom: 0;
		left: 30upx;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	.uni-list .uni-list-cell:last-child:after {
		height: 0upx;
	}
	.uni-list-cell-last.uni-list-cell:after {
		height: 0upx;
	}
	.uni-list-cell-divider {
		position: relative;
		display: flex;
		color: #999;
		background-color: #f7f7f7;
		padding:15upx 20upx;
	}
	.uni-list-cell-divider:before {
		position: absolute;
		right: 0;
		top: 0;
		left: 0upx;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	.uni-list-cell-divider:after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0upx;
		height: 1upx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	.uni-list-cell-navigate {
		font-size:28upx;
		padding: 22upx 30upx;
		line-height: 48upx;
		position: relative;
		display: flex;
		box-sizing: border-box;
		width: 100%;
		flex: 1;
		justify-content: space-between;
		align-items: center;
	}
	.uni-list-cell-navigate {
		padding-right: 36upx;
	}
	.uni-navigate-badge {
		padding-right: 50upx;
	}
	.uni-list-cell-navigate.uni-navigate-right:after {
		font-family: uniicons;
		content: '\e583';
		position: absolute;
		right: 24upx;
		top: 50%;
		color: #bbb;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	.uni-list-cell-navigate.uni-navigate-bottom:after {
		font-family: uniicons;
		content: '\e581';
		position: absolute;
		right: 24upx;
		top: 50%;
		color: #bbb;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	.uni-list-cell-navigate.uni-navigate-bottom.uni-active:after {
		font-family: uniicons;
		content: '\e580';
		position: absolute;
		right: 24upx;
		top: 50%;
		color: #bbb;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	.uni-collapse.uni-list-cell {
		flex-direction: column;
	}
	.uni-list-cell-navigate.uni-active {
		background: #eee;
	}
	.uni-list.uni-collapse {
		box-sizing: border-box;
		height: 0;
		overflow: hidden;
	}
	.uni-collapse .uni-list-cell {
		padding-left: 20upx;
	}
	.uni-collapse .uni-list-cell:after {
		left: 52upx;
	}
	.uni-list.uni-active {
		height: auto;
	}
</style> 


