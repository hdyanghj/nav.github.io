<template>
	<view class="body-posture">
		<HMmessages ref="HMmessages" @complete="HMmessages = $refs.HMmessages"></HMmessages>
        <view class="body-posture-list">
			<view class="posture-list-left">姓名</view>
			<view class="posture-list-right"><input class="posture-list-input" type="text" placeholder="请输入测试人姓名" v-model="name"/></view>
		</view>
		<view class="body-posture-list">
			<view class="posture-list-left">性别</view>
			<view class="posture-list-right">
				<radio-group class="radio-group" @change="radioChange" >
					<label class="radio-list" v-for="item in items">
						<radio class="radio-list-icon" :value="item.value" :checked="item.checked" />{{item.value}}
					</label>
				</radio-group>
			</view>
		</view>
		<view class="body-posture-list">
			<view class="posture-list-left">年龄</view>
			<view class="posture-list-right">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="posture-list-input">{{agedata}}<text class="age-icon">&#xe612;</text></view>
				</picker>
			</view>
		</view>
		
		<view class="body-posture-list">
			<view class="posture-list-left">身高</view>
			<view class="posture-list-right"><input class="posture-list-input" type="text" placeholder="请输入测试人身高" v-model="bodyHeight"/></view>
			<view class="danwei">CM</view>
		</view>
		
		<view class="body-posture-list">
			<view class="posture-list-left">体重</view>
			<view class="posture-list-right"><input class="posture-list-input" type="text" placeholder="请输入测试人体重" v-model="bodyWeight"/></view>
			<view class="danwei">KG</view>
		</view>
		
		<view class="body-posture-list">
			<view class="posture-list-left">病史</view>
			<view class="posture-list-right"><input class="posture-list-input" type="text" placeholder="请输入测试人病史" v-model="mediHistory"/></view>
		</view>
		<view class="login-button"><button class="normalButton" @tap="obtainCode()" :disabled="disaBled">提交</button></view>
	</view>
</template>

<script>
	import HMmessages from '@/components/HM-messages/HM-messages.vue';
	export default {
		data() {
			return {
				name: '',
				bodyHeight: '',
				bodyWeight: '',
				mediHistory: '',
				items: [{
				    value: '男',
				    checked: 'true'
				},
				{
				    value: '女'
				}],
				sex:'1',
				date: '',
				agedata:'请选择测试人年龄',
				disaBled: false,
				id: '',
				token: ''
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
				let user_Id='';
				uni.getStorage({
					key: 'user_Id',
					success: function (sto) {
						user_Id=sto.data
					}
				});
				this.id= user_Id;
				if(this.id == ''){
					uni.redirectTo({
						url: '../login/phonelogin'
					});
					return;
				}
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth();
				let day = date.getDate();
				this.date=`${year}-${month}-${day}`;
			},
			radioChange: function(e){
				console.log(this.sex)
				if(e.detail.value == '男'){
					this.sex = '1'
					console.log(this.sex)
				}
				if(e.detail.value == '女'){
					this.sex = '2'
					console.log(this.sex)
				}
				
			},
			//时间选择器 
			bindDateChange: function(e) {
				this.date = e.target.value
				let ages =this.howold(e.target.value)
				let agenum;
				//截取年龄
				agenum=Number(ages.substring(0,ages.indexOf("岁")));
				this.agedata = agenum + '岁'
				console.log(this.date)
				
			},
			getDate(type) {
				const date = new Date();
			
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
			
				if (type === 'start') {
					year = year - 80;
				} else if (type === 'end') {
					year = year;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
			
				return `${year}-${month}-${day}`;
			},
			//年龄换算方法
			howold:function(enroll_date){
				if (enroll_date !== null && enroll_date !== undefined && enroll_date !== '') {
					var newDate = new Date();
					var enroll = new Date(enroll_date);
					var time = newDate.getTime() - enroll.getTime(); //计算时间差
					var day = parseInt(time / (24 * 60 * 60 * 1000)); //转换成天
			
					//不足一月
					if (day < 30) {
							return day + "天";
					}
					//足一月但不足一年
					if (day >= 30 && day <= 365) {
						var year = parseInt(day % 365 / 30) + "月" + parseInt(day % 365 % 30) + "天";
						if (parseInt(day % 365 % 30) == 0) {
								var year = parseInt(day % 365 / 30) + "月";
								return year;
						}
						return year;
					}
					//超过一年
					if (day > 365 && parseInt(day % 365 / 30) < 13) {
						var year = parseInt(day / 365) + "岁" + parseInt(day % 365 / 30) + "月";
						if (parseInt(day % 365 / 30) == 0) {
								var year = parseInt(day / 365) + "岁";
						}
						return year;
					}
				}	
			},
			obtainCode: function(e){
				uni.request({
					url:this.$webUrl + this.$addperson,
					header:{
						'content-type':'application/x-www-form-urlencoded',
						'token':'' + this.token	
					},
					data: {
						userId: this.id,
						memberName: this.name,
						memberSex: this.sex,
						birthday: this.date,
						height: this.bodyHeight,
						weight: this.bodyWeight,
						medicalHistory: this.mediHistory,

					},
					method: 'POST',
					success: (res) => {
						console.log(res)
						this.HMmessages.show('好嗨哟 登录成功',{icon:'success',duration:5000,iconColor:"#44B549",fontColor:"#44B549"});
						uni.navigateBack({
							delta: 1
						});
					},
					fail: (err) => {
						
						return;
						// console.log(res)
					}
				})
			}
		}
	}
</script>

<style>
	.body-posture{
		width: 100%;
		padding:40upx 0 60upx;
		
	}
	.body-posture-list{
		display: flex;
		font-size: 32upx;
		border-bottom: 1px solid #EFEFEF;
		padding: 30upx;
		margin-bottom: 30upx;
		border-radius: 10upx;
		box-shadow:2px 2px 5px #EFEFEF;
		position: relative;
	}
	.posture-noneborder{
		font-size: 32upx;
		padding: 0;
	}
	.posture-tishi{
		color: red;font-size: 24upx;padding: 40upx 0;
	}
	.posture-tishimsg{
		color: #808080;font-size: 24upx;padding:0 0 40upx 0;
	}
	
	.posture-list-left{
		line-height: 50upx;
		padding-right: 30upx;
	}
	.posture-list-right{
		flex:1;
	}
	.posture-list-input{
		line-height: 50upx;
		font-size: 30upx;
		color: #808080;
	}
	.radio-group{
		
	}
	.radio-list{
		font-size: 30upx;
		padding-right: 60upx;
		color: #808080;
	}
	.radio-list-icon{
		padding-right: 10upx;
	}
	.age-icon{
		float: right;
		display: inline-block;
		font-family: texticons;
		color: #000000;
	}
	.login-button{
		width: 600upx;
		margin: 0 auto;
		padding: 20upx;
	}
	.danwei{
		height: 50upx;
		line-height: 50upx;
		position: absolute;
		right: 20upx;
	}
	
</style>
