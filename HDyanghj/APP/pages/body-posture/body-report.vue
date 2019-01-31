<template>
	<view class="body-posture">
		<HMmessages ref="HMmessages" @complete="HMmessages = $refs.HMmessages"></HMmessages>
		<view class="tab-body">
			<view v-for="(item,index) in tabText" class="tablist" @click="onClickItem(index)" :class="index === current ? activeStyle : itemStyle">
				{{item}}
			</view>
		</view>
        <view class="img-body">
            <view class="imgcontent" v-show="current === 0">
                <view class="img-left"><image src="../../static/front-sl.png"></image></view>
				<view class="img-right"><image :src="frontImgUrl"></image></view>
            </view>
            <view class="imgcontent" v-show="current === 1">
                <view class="img-left"><image src="../../static/back-sl.png"></image></view>
                <view class="img-right"><image :src="backImgUrl"></image></view>
            </view>
            <view class="imgcontent" v-show="current === 2">
                <view class="img-left"><image src="../../static/left-sl.png"></image></view>
                <view class="img-right"><image :src="leftImgUrl"></image></view>
            </view>
			<view class="imgcontent" v-show="current === 3">
			    <view class="img-left"><image src="../../static/right-sl.png"></image></view>
			    <view class="img-right"><image :src="rightImgUrl"></image></view>
			</view>
        </view>
		<view class="bg-title-h1" :class="colorred">存在的问题</view>
		<view class="bg-title-h5">经过我们对您的身体的检测发现您的身体存在以下问题</view>
		<view class="problem">
			<view v-for="(item,index) in tagText" class="problem-tag">{{index + 1}}.{{item}}</view>
		</view>
		<view class="bg-title-h1">深度分析</view>
		<view class="analysis-cont">
			<view class="analysis-list" v-for="item in analysisList" >
				<view class="analysis-left">{{item.name}}</view>
				<view class="analysis-right">{{item.jianjie}}<view class="analysis-jiantou">&#xe610;</view></view>
			</view>
		</view>
		<view class="bg-title-h1">可能后果</view>
		<view class="analysis-cont">
			<view class="analysis-list" v-for="item in analysisList" >
				<view class="analysis-left">{{item.name}}</view>
				<view class="analysis-right">{{item.jianjie}}<view class="analysis-jiantou">&#xe610;</view></view>
			</view>
		</view>
		<view class="bg-title-h1">矫正方法</view>
		<view class="analysis-cont">
			<view class="tab-body">
				<view v-for="(item,index) in recomText" class="recomlist" @click="onClickRecom(index)" :class="index === recom ? activerecom : itemrecom">
					{{item}}
				</view>
			</view>
			<view class="img-body">
			    <view class="imgcontentlist" v-show="recom === 0">
			        <view class="imgcontlist">
						<view class="recom-left"></view>
						<view class="recom-right">
							<view class="recom-title">由于您的年龄正处在发育阶段由于您的年龄正处在发育阶段</view>
							<view class="recom-cont">您的睡眠习惯性问题因此在由于您的睡眠习惯性问题因此在您的睡眠习惯性问题因此在由于您的睡眠习惯性问题因此在</view>
						</view>
					</view>
					<view class="imgcontlist">
						<view class="recom-left"></view>
						<view class="recom-right">
							<view class="recom-title">由于您的年龄正处在发育阶段由于您的年龄正处在发育阶段</view>
							<view class="recom-cont">您的睡眠习惯性问题因此在由于您的睡眠习惯性问题因此在您的睡眠习惯性问题因此在由于您的睡眠习惯性问题因此在</view>
						</view>
					</view>
			    </view>
			    <view class="imgcontentlist" v-show="recom === 1">
			        <view class="imgcontlist">
			        	<view class="recom-left"></view>
			        	<view class="recom-right">
			        		<view class="recom-title">由于您的年龄正处在发育阶段由于您的年龄正处在发育阶段</view>
			        		<view class="recom-cont">您的睡眠习惯性问题因此在由于您的睡眠习惯性问题因此在您的睡眠习惯性问题因此在由于您的睡眠习惯性问题因此在</view>
			        	</view>
			        </view>
			    </view>
			    <view class="imgcontentlist" v-show="recom === 2">
			       <view class="imgcontlist">
			       	<view class="recom-left"></view>
			       	<view class="recom-right">
			       		<view class="recom-title">由于您的年龄正处在发育阶段由于您的年龄正处在发育阶段</view>
			       		<view class="recom-cont">您的睡眠习惯性问题因此在由于您的睡眠习惯性问题因此在您的睡眠习惯性问题因此在由于您的睡眠习惯性问题因此在</view>
			       	</view>
			       </view>
				   <view class="imgcontlist">
				   	<view class="recom-left"></view>
				   	<view class="recom-right">
				   		<view class="recom-title">由于您的年龄正处在发育阶段由于您的年龄正处在发育阶段</view>
				   		<view class="recom-cont">您的睡眠习惯性问题因此在由于您的睡眠习惯性问题因此在您的睡眠习惯性问题因此在由于您的睡眠习惯性问题因此在</view>
				   	</view>
				   </view>
			    </view>
				<view class="imgcontentlist" v-show="recom === 3">
				    <view class="imgcontlist">
				    	<view class="recom-left"></view>
				    	<view class="recom-right">
				    		<view class="recom-title">由于您的年龄正处在发育阶段由于您的年龄正处在发育阶段</view>
				    		<view class="recom-cont">您的睡眠习惯性问题因此在由于您的睡眠习惯性问题因此在您的睡眠习惯性问题因此在由于您的睡眠习惯性问题因此在</view>
				    	</view>
				    </view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import HMmessages from '@/components/HM-messages/HM-messages.vue';
	export default {
		data() {
			return {
				tabText: ['前视图','后视图','左视图','右视图'],
				current: 0,
				recomText: ['推荐视频','推荐器材','营养产品','统合课程'],
				recom: 0,
				activeStyle:'activeStyle',
				itemStyle:'itemStyle',
				activerecom:'activerecom',
				itemrecom:'itemrecom',
				colorred:'colorred',
				tagText: ['膝关节问题','头侧倾和翼状肩','圆肩和驼背','骨盆倾斜','肩胛下角不等高'],
				analysisList:[
					{
						name:'年龄',
						jianjie:'由于您的年龄正处在发育阶段由于您的年龄正处在发育阶段'
					},
					{
						name:'习惯',
						jianjie:'由于您的睡眠习惯性问题因此在由于您的睡眠习惯性问题因此在'
					},
					{
						name:'疾病',
						jianjie:'由于您在近阶段的疾病问题，因此由于您在近阶段的疾病问题，因此'
					},
					{
						name:'年龄',
						jianjie:'由于您的工作的问题，需要长期坐由于您的工作的问题，需要长期坐'
					}
				],
				record_Id: '',
				token:'',
				frontImgUrl:'',
				backImgUrl: '',
				leftImgUrl: '',
				rightImgUrl: ''
			}
		},
		components: {
			HMmessages
		},
		mounted:function(){
			this.detail();
		},
		methods: {
			detail: function(){
				let token='';
				uni.getStorage({
					key: 'token',
					success: function (sto) {
						token=sto.data
					}
				});
				this.token= token;
				
				let record_Id='';
				uni.getStorage({
					key: 'record_Id',
					success: function (sto) {
						console.log(sto)
						record_Id=sto.data
					}
				});
				this.record_Id= record_Id;
				if(this.record_Id != ''){
					uni.request({
						url:this.$webUrl + this.$DetectionReport,
						header:{
							'content-type':'application/x-www-form-urlencoded',
							'token':'' + this.token	
						},
						data: {
							recordId: this.record_Id
						},
						method: 'GET',
						success: (res) => {
							console.log(res.data.data)
							let reportList = res.data.data;
							if(reportList.resultFrontPicture == ''){
								this.frontImgUrl = '../../static/wutu.png';
							}else{
								this.frontImgUrl = reportList.resultFrontPicture;
							}
							
							if(reportList.resultBackPicture == ''){
								this.backImgUrl = '../../static/wutu.png';
							}else{
								this.backImgUrl = reportList.resultBackPicture;
							}
							
							if(reportList.resultLeftPicture == ''){
								this.leftImgUrl = '../../static/wutu.png';
							}else{
								this.leftImgUrl = reportList.resultLeftPicture;
							}
							
							if(reportList.resultRightPicture == ''){
								this.rightImgUrl = '../../static/wutu.png';
							}else{
								this.rightImgUrl = reportList.resultRightPicture;
							}
						},
						fail: (err) => {
							return;
						}
					})
				}
				
			},
			onClickItem(index) {
				console.log(index)
				if (this.current !== index) {
					this.current = index;
				}
			},
			onClickRecom(index) {
				console.log(index)
				if (this.recom !== index) {
					this.recom = index;
				}
			}
		}
	}
</script>

<style>
	.body-posture{
		padding-bottom: 60upx;
		
	}
	.img-body{
		width: 100%;
		padding: 0;
	}
	.tab-body{
		width: 100%;
		padding-top: 20upx;
		display: flex;
		flex-direction: row;
	}
	.tablist{
		width: 25%;
		text-align: center;
		font-size:32upx;
		padding: 20upx 0;
	}
	.activeStyle{
		color: #6BD8ED;
		position: relative;
	}
	.activeStyle:after{
		content: '';
		height: 1px;
		width: 44%;
		background: #6BD8ED;
		position: absolute;	
		bottom: 4upx;
		left: 28%;
	}
	.itemStyle{
		color: #000000;
	}
	.imgcontent{
		display: flex;
		flex-direction: row;
		justify-content: space-between ;
		padding: 40upx 0;
	}
	.img-left{
		width: 48%;
		height: 400upx;
		background: #000000;
		color: #FFFFFF;
		border-radius: 20upx;
		overflow: hidden;
	}
	.img-right{
		width: 48%;
		height: 400upx;
		background: #6BD8ED;
		border-radius: 20upx;
		overflow: hidden;
	}
	.img-left image,.img-right image{
		width: 100%;
		height: 100%;
	}
	.bg-title-h1{
		clear:both;
		font-size: 38upx;
	}
	.bg-title-h5{
		color: #CCCCCC;
		font-size: 24upx;
	}
	.colorred{
		color: #fe7a80;
	}
	.problem,.analysis-cont{
		width: 100%;
		padding: 20upx 0;
		overflow: hidden;
	}
	.problem-tag{
		width: 50%;
		float: left;
		display: block;
		font-size: 32upx;
		color: #4A4A4A;
		padding: 10upx 0;
	}
	.analysis-cont{
		width: 100%;
		padding: 20upx 0;
		overflow: hidden;
	}
	.analysis-list{
		display: flex;
		font-size: 32upx;
		color: #4A4A4A;
		height: 80upx;
		line-height: 80upx;
	}
	.analysis-left{
		display: flex;
		font-size: 32upx;
		padding-right: 20upx;
	}
	.analysis-right{
		padding-right:40upx;
		font-size: 28upx;
		color: #4A4A4A;
		position: relative;
		flex: 1;
		overflow: hidden;
		white-space: nowrap;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
	}
	.analysis-right:after{
		content: '';
		width: 100%;
		height: 1px;
		background: #EFEFEF;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.analysis-jiantou{
		position: absolute;
		right: 0;
		top: 0;
		font-family: texticons;
		color: #4A4A4A;
	}
	.recomlist{
		width: 23%;
		text-align: center;
		font-size:30upx;
		padding: 14upx 0;
		border: 1px solid #6BD8ED;
		margin: 1%;
		border-radius: 10upx;
	}
	.activerecom{
		color: #FFFFFF;
		background: #6BD8ED;
	}
	.itemrecom{
		color: #6BD8ED;
	}
	.imgcontentlist{
		overflow: hidden;
	}
	.imgcontlist{
		padding: 10upx 0;
		display: flex;
		border-bottom: 1px solid #EFEFEF;
	}
	.recom-left{
		width: 160upx;
		height: 160upx;
		background: #C8C7CC;
	}
	.recom-right{
		width: 480upx;
		padding-left:20upx;
		display: flex;
		flex-direction: column;
		color: #4A4A4A;
	}
	.recom-title{
		padding: 10upx 0;
		font-size: 34upx;
		overflow: hidden;
		white-space: nowrap;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
	}
	.recom-cont{
		font-size: 28upx;
		text-overflow: ellipsis;
		display: -webkit-box; 
		overflow: hidden; 
		-webkit-box-orient: vertical; 
		-webkit-line-clamp: 2;
	}
</style>
