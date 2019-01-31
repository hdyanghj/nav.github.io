 <template>
	<view class="center-body">
		<view class="report-hander">
			<view class="report-title">矫正是不允许迟疑的</view>
			<view class="report-h5">体语</view>
		</view>
		<view class="report-list">
			<view class="report-list-cont" v-for="(item,index) in reportList" @tap="listBtn(index)">
				<view class="report-name">姓名：{{item.memberName}}</view>
				<view class="report-ageSex">年龄：{{item.memberAge}}&nbsp;&nbsp;&nbsp;性别：{{item.memberSex}}</view>
				<view class="report-ageSex">检测日期：2019-01-31</view>
				<view class="report-sm">{{item.description}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				token: '',
				reportList: []
			}
		},
		mounted:function(){
			this.loadExecution();
		},
		methods: {
			loadExecution:  function(){
				let token='';
				uni.getStorage({
					key: 'token',
					success: function (sto) {
						token=sto.data
					}
				});
				this.token= token;
// 				if(this.token == ''){
// 					this.logout();
// 				}
				uni.request({
					url:this.$webUrl + this.$peortlist,
					header:{
						'content-type':'application/x-www-form-urlencoded',
						'token':'' + this.token	
					},
					data: {
						page: 1,
						limit: 20
					},
					method: 'GET',
					success: (res) => {
						console.log(res.data.data.list)
						let reportList = res.data.data.list;
						for(let i=0;i<reportList.length;i++){
							this.reportList.push(reportList[i])
							if(reportList[i].memberAge != null){
								this.$set(this.reportList[i], 'memberAge', reportList[i].memberAge + '岁');
							}
							if(reportList[i].memberSex == 1){
								this.$set(this.reportList[i], 'memberSex', '男');
							}
							if(reportList[i].createDate == null){
								this.$set(this.reportList[i], 'createDate', reportList[i].createDate.substring(0,10));
							}
						}
						// reportList
						
					},
					fail: (err) => {
						return;
					}
				})
			},
			listBtn: function(e){
				console.log(e)
				for(let i=0;i<this.reportList.length;i++){
					if(i == e){
						uni.setStorage({
							key: 'record_Id',
							data: this.reportList[i].id
						});
					}
				}
				uni.navigateTo({
					url: '../body-posture/body-report'
				});
			}
		}
	}
</script>
<style>
	.center-body{
		width: 660upx;
		margin: 0 auto;
		padding: 20upx;
	}
	.report-hander{
		width: 100%;
		height: 160upx;
		background-image: url('../../static/pic.ab036.jpg');
		background-size: 100% auto;
		border-radius: 10upx;
	}
	.report-title{
		font-size: 36upx;
		color: #FFFFFF;
		padding: 20upx 0 6upx 20upx;
	}
	.report-h5{
		font-size: 30upx;
		color: #FFFFFF;
		padding: 0 0 10upx 20upx;
	}
	.report-list{
		width: 100%;
		padding-top: 40upx;
	}
	.report-list-cont{
		width: 620upx;
		padding: 20upx;
		box-shadow: 1px 2px 4px #EFEFEF;
		border-radius: 10upx;
	}
	.report-name{
		font-size: 32upx;
		color: #4A4A4A;
		padding-bottom: 10upx;
	}
	.report-ageSex{
		font-size: 24upx;
		color: #4A4A4A;
		line-height: 40upx;
	}
	.report-sm{
		width: 100%;
		font-size: 24upx;
		color: #4A4A4A;
		line-height: 40upx;
		text-overflow: ellipsis;
		display: -webkit-box;
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
</style>