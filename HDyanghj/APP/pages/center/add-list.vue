<template>
	<view class="add-list">
		<HMmessages ref="HMmessages" @complete="HMmessages = $refs.HMmessages"></HMmessages>
		<view class="list-cont addbuton" @tap="addButon()">
			<text class="newIcon">&#xe602;</text>新增体测人
		</view>
        <view class="list-cont" v-for="(item, index) in addList">
			<view class="list-cont-left" @tap="selectBut(index,item.id)">
				<view class="selectIcin" :class="item.selectIcon">&#xe637;</view>
				<view class="selectText">{{item.memberName}}</view>
				<view class="selectMsg"><text>性别：{{item.memberSex}}</text><text>年龄：{{item.age}}岁</text></view>
			</view>
			<view class="switchIcin" @tap="editBut(item.id)">&#xe62e;</view>
		</view>
	</view>
</template>

<script>
	import HMmessages from '@/components/HM-messages/HM-messages.vue';
	export default {
		data() {
			return {
				name: '木易',
				sex: '男',
				age: '18岁',
				addList: [],
				person_Id:'',
				token:'',
				id: ''
			}
		},
		components: {
			HMmessages
		},
		onShow: function(options) { 
			this.detail();
		},
// 		mounted:function(){
// 			this.detail();
// 		},
		methods: {
			detail: function(){
				let token='';
				this.addList = []; 
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
				let person_Id='';
				uni.getStorage({
					key: 'person_Id',
					success: function (sto) {
						person_Id=sto.data
					}
				});
				this.person_Id= person_Id;
				if(this.id == ''){
					uni.navigateTo({
						url: '../login/phonelogin'
					});
					return;
				}
				uni.request({
					url:this.$webUrl + this.$addlist,
					header:{
						'content-type':'application/x-www-form-urlencoded',
						'token':'' + this.token	
					},
					data: {
						userId: this.id
					},
					method: 'GET',
					success: (res) => {
						let addlist = res.data.data;
						uni.setStorage({
							key: 'addlist',
							data: addlist
						});
						for(let i=0;i< addlist.length;i++){
							this.addList.push(addlist[i]);
							this.$set(this.addList[i], 'selectIcon', 'selectCo2');
							if(this.addList[i].id == this.person_Id){
								this.$set(this.addList[i], 'selectIcon', 'selectCo1');
							}
							if(addlist[i].memberSex == 1){
								this.$set(this.addList[i], 'memberSex', '男');
							}
							if(addlist[i].memberSex == 2){
								this.$set(this.addList[i], 'memberSex', '女');
							}
							
						}
						console.log(this.addList)
						// this.HMmessages.show('好嗨哟 登录成功',{icon:'success',duration:5000,iconColor:"#44B549",fontColor:"#44B549"});
					},
					fail: (err) => {
						
						return;
						// console.log(res)
					}
				})
				
			},
			editBut: function(e){
				console.log(e)
				uni.setStorage({
					key: 'person_Id',
					data: e
				});
// 				uni.navigateTo({
// 					url: '../login/phonelogin'
// 				});
			},
			// 添加体测人
			addButon: function(){
				uni.navigateTo({
					url: 'add-person'
				});
			},
			selectBut: function(e,f){
				console.log(e)
				for(let i=0;i<this.addList.length;i++){
					if(i == e){
						this.$set(this.addList[i], 'selectIcon', 'selectCo1');
					}else{
						this.$set(this.addList[i], 'selectIcon', 'selectCo2');
					}
				}
				// this.selectIcon = ;
				uni.setStorage({
					key: 'person_Id',
					data: f
				});
				uni.reLaunch({
					url: '/pages/body-posture/body-posture'
				});
				// 返回上一页
// 				uni.navigateBack({
// 					delta: 1
// 				});
			}
			
		}
	}
</script>

<style>
	.add-list{
		width: 660upx;
		padding:40upx 0 60upx;
		margin: 0 auto;
	}
	.list-cont{
		border-bottom: 1px solid #EFEFEF;
		padding-right: 30upx;
		margin-bottom: 30upx;
		border-radius: 10upx;
		box-shadow:2px 2px 5px #EFEFEF;
		position: relative;
	}
	.list-cont-left{
		width: 78%;
		height: 100%;
		padding: 30upx;
	}
	.selectText{
		line-height: 40upx;
	}
	.selectMsg{
		padding-top: 30upx;
		font-size: 24upx;
	}
	.selectMsg text{
		padding-right:60upx;
	}

	.switchIcin{
		width: 80upx;
		position: absolute;
		right: 10upx;
		bottom: 10upx;
		font-family: texticons;
		color: #6BD8ED;
		font-size: 60upx;
		display: block;
		
	}
	.selectIcin{
		height: 80upx;
		position: absolute;
		right: 0upx;
		top: -4upx;
		padding-left: 60upx;
		font-family: texticons;
		font-size: 60upx;
		display: block;
	}
	.selectCo1{
		color: #6BD8ED;
	}
	.selectCo2{
		color: #CCCCCC;
	}
	.addbuton{
		padding: 30upx;
		color: #6BD8ED;
	}
	.newIcon{
		width: 36upx;
		height: 36upx;
		padding: 4upx;
		border-radius: 50%;
		border: 1px solid #6BD8ED;
		font-family: texticons;
		display: inline-block;
		color: #6BD8ED;
		margin-right: 20upx;
		font-weight: bold;
	}
</style>
