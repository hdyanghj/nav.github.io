<template>
	<view class="body-posture">
		<HMmessages ref="HMmessages" @complete="HMmessages = $refs.HMmessages"></HMmessages>
		<view class="physicaltester">
			<view class="phyNew" v-show="newShow" @tap="selectBut(filter)">
				<text class="newIcon">&#xe602;</text>新增体测人
			</view>
			<view class="phySelect" v-show="selectShow" @tap="selectBut(people)">
				<view class="selectText">{{bodyMsg.memberName}}</view>
				<view class="selectMsg"><text>性别：{{sex[bodyMsg.memberSex]}}</text><text>年龄：{{bodyMsg.age}}岁</text></view>
				<view class="switchIcin">&#xe610;</view>
			</view>
		</view>
		<view class="posture-tishi">图片上传要求：每张图片最小48*48像素，最大4096*4096像素，2MB以内。</view>
		<view class="posture-noneborder">
			<view>请上传正视图<text class="promptText">*此项为必填项</text><text class="promptBut" @tap="promptBut(0)">&#xe622;</text></view>
			<view class="up-body">
				<view class="up_files">
					<block>
						<view class="up_file" v-if="imageList[0].imgfile">
							<image class="up_img" :src="imageList[0].imgUrl" mode="aspectFill"></image>
							<view class="close-view" @click="close(0)">x</view>
						</view>
					</block>
					<view class="up_button" v-if="imageList[0].buttonfile">
						<view class="up_input" @tap="chooseImg(0)"></view>
					</view>
				</view>
			</view>
		</view>
		<view class="posture-noneborder">
			<view>请上传背视图<text class="promptText">*此项为必填项</text><text class="promptBut" @tap="promptBut(1)">&#xe622;</text></view>
			<view class="up-body">
				<view class="up_files">
					<block>
						<view class="up_file" v-if="imageList[1].imgfile">
							<image class="up_img" :src="imageList[1].imgUrl" mode="aspectFill"></image>
							<view class="close-view" @click="close(1)">x</view>
						</view>
					</block>
					<view class="up_button" v-if="imageList[1].buttonfile">
						<view class="up_input" @tap="chooseImg(1)"></view>
					</view>
				</view>
			</view>
		</view>
		<view class="posture-noneborder">
			<view>请上传左视图<text class="promptText">*左右视图可选其一必填</text><text class="promptBut" @tap="promptBut(2)">&#xe622;</text></view>
			<view class="up-body">
				<view class="up_files">
					<block>
						<view class="up_file" v-if="imageList[2].imgfile">
							<image class="up_img" :src="imageList[2].imgUrl" mode="aspectFill"></image>
							<view class="close-view" @click="close(2)">x</view>
						</view>
					</block>
					<view class="up_button" v-if="imageList[2].buttonfile">
						<view class="up_input" @tap="chooseImg(2)"></view>
					</view>
				</view>
			</view>
		</view>
		<view class="posture-noneborder">
			<view>请上传右视图<text class="promptText">*左右视图可选其一必填</text><text class="promptBut" @tap="promptBut(3)">&#xe622;</text></view>
			<view class="up-body">
				<view class="up_files">
					<block>
						<view class="up_file" v-if="imageList[3].imgfile">
							<image class="up_img" :src="imageList[3].imgUrl" mode="aspectFill"></image>
							<view class="close-view" @click="close(3)">x</view>
						</view>
					</block>
					<view class="up_button" v-if="imageList[3].buttonfile">
						<view class="up_input" @tap="chooseImg(3)"></view>
					</view>
				</view>
			</view>
		</view>
		<view class="posture-noneborder">
			<view class="uni-textarea">
				<textarea class="body-textarea" maxlength="400" @keyup.enter="search" @input="search($event)" placeholder="个人情况不同，您可以根据自身情况来描述，便于医生进行准确分析，我们会保证您的隐私安全。(非必填项)" />
				<view class="textarea-number">{{textnumber}}/400</view>
			</view>
		</view>
		<view class="posture-tishimsg">请尽可能上传清晰标准的图片,以便于我们能够更加准确的 为您检测(此检测不能作为就医凭据,此检测意在帮您发现潜 在风险,若您的病疾已经严重,我们建议您及时就医.)</view>
		<view class="login-button"><button class="normalButton" @tap="obtainCode()" :disabled="disaBled">提交</button></view>
		<view class="prompt-body" v-show="promptBody" @click="promptBtn">
			<view class="prompt-cont"><image :src="promptImg"></image></view>
		</view>
	</view>
</template>

<script>
	import HMmessages from '@/components/HM-messages/HM-messages.vue';
	export default {
		data() {
			return {
				filter:'filter',
				people:'people',
				newShow:true,
				selectShow:false,
				name: '金银花',
				sex:['请选择','男','女'],
				age:'18岁',
				textnumber: '0',
				imageList: [
					{
						imgUrl:'',
						imageUrl:'',
						imgfile: false,
						buttonfile: true,
					},
					{
						imgUrl:'',
						imageUrl:'',
						imgfile: false,
						buttonfile: true,
					},
					{
						imgUrl:'',
						imageUrl:'',
						imgfile: false,
						buttonfile: true,
					},
					{
						imgUrl:'',
						imageUrl:'',
						imgfile: false,
						buttonfile: true,
					}
				],
				disaBled: false,
				id: '',
				token: '',
				bodyMsg:[],
				direction: '',
				person_Id:'',
				addlist:[],
				promptBody:false,
				promptImg:''
			}
		},
		components: {
			HMmessages
		},
		onShow: function(options) { 
			this.detail();
		},
		mounted:function(){
					this.detail();
				},
		methods: {
			detail: function(){
				let user_Id='';
				uni.getStorage({
					key: 'user_Id',
					success: function (sto) {
						user_Id=sto.data
					}
				});
				let token='';
				uni.getStorage({
					key: 'token',
					success: function (sto) {
						token=sto.data
					}
				});
				this.token= token;
				this.id= user_Id;
				let person_Id='';
				uni.getStorage({
					key: 'person_Id',
					success: function (sto) {
						person_Id=sto.data
					}
				});
				this.person_Id= person_Id;
				
				if(this.person_Id != ''){
					
					let addlist='';
					uni.getStorage({
						key: 'addlist',
						success: function (sto) {
							addlist=sto.data
						}
					});
					this.addlist= addlist;
					for(let i=0; i<this.addlist.length;i++){
						if(this.addlist[i].id == this.person_Id){
							this.bodyMsg.id = this.addlist[i].id;
							this.bodyMsg.memberName = this.addlist[i].memberName;
							this.bodyMsg.age = this.addlist[i].age;
							this.bodyMsg.memberSex = this.addlist[i].memberSex;
						}
					}
					console.log(this.bodyMsg)
					this.newShow = false;
					this.selectShow = true;
				}
				if(this.token != ''){
					if(this.person_Id == ''){
						uni.request({
							url:this.$webUrl + this.$UserDefault,
							header:{
								'content-type':'application/x-www-form-urlencoded',
								'token':'' + this.token	
							},
							data: {
								userId: this.id,
							},
							method: 'GET',
							success: (res) => {
								console.log(res.data.data)
								let bodyMsg = res.data.data;
								if(bodyMsg == ''){
									this.newShow = true;
									this.selectShow = false;
								}
								if(bodyMsg != ''){
									uni.setStorage({
										key: 'person_Id',
										data: bodyMsg.id
									});
									this.bodyMsg.id = bodyMsg.id;
									this.bodyMsg.memberName = bodyMsg.memberName;
									this.bodyMsg.age = bodyMsg.age;
									this.bodyMsg.memberSex = bodyMsg.memberSex;
									console.log(this.bodyMsg)
									// 显示信息
									this.newShow = false;
									this.selectShow = true;
								}
							},
							fail: (err) => {
								return;
							}
						})
					}
				}
			},
			selectBut: function(e){
				if(e == 'filter'){
					uni.navigateTo({
						url: '../center/add-person'
					});
				}
				if(e == 'people'){
					uni.navigateTo({
						url: '../center/add-list'
					});
				}
			},
			// 表单输入监控
			search: function (event) {
				let $uthis =this;
				$uthis.textnumber = event.detail.value.length;				
			},
			//选择图片
			chooseImg: function(e) {
				let direction = e;
				console.log(e)
				if(direction == 0){
					this.direction = 'front';
				}
				if(direction == 1){
					this.direction = 'back';
				}
				if(direction == 2){
					this.direction = 'left';
				}
				if(direction == 3){
					this.direction = 'right';
				}
			    uni.chooseImage({
			        sizeType: ['compressed'],
			        sourceType: ['album', 'camera'],
			        count: 1,
			        success: (res) => {
						let imgSize = "";
						let resSize = res.tempFiles[0].size
						// 转换图片大小单位
						if( resSize < 0.1 * 1024 ){
						    //如果小于0.1KB转化成B
							imgSize = resSize.toFixed(2);
						}else if(resSize < 0.1 * 1024 * 1024 ){
						    //如果小于0.1MB转化成KB
							imgSize = (resSize / 1024).toFixed(2);
						}else if(resSize < 0.1 * 1024 * 1024 * 1024){
						    //如果小于0.1GB转化成MB
							imgSize = (resSize / (1024 * 1024)).toFixed(2);
						}else{
						    //其他转化成GB
							imgSize = (resSize / (1024 * 1024 * 1024)).toFixed(2);
						}
						let sizestr = imgSize + "";
						let len = sizestr.indexOf("\.");
						let dec = sizestr.substr(len + 1, 2);
						if(dec == "00"){
						    //当小数点后为00时 去掉小数部分
							return sizestr.substring(0,len) + sizestr.substr(len + 3,2);
						}
						console.log(sizestr)
						if(sizestr > 2){
							this.HMmessages.show('图片不能大于2M，请重新选择',{icon:'error',duration:5000,iconColor:"red",fontColor:"red"});
							return;
						}
						this.imageList[direction].imgUrl = res.tempFilePaths[0];
						this.imageList[direction].imgfile = true;
						this.imageList[direction].buttonfile = false;
						// 上传图片
						uni.uploadFile({
							url: this.$webUrl+this.$uploadPosture,
							filePath: res.tempFilePaths[0],
							header:{
								'token':'' + this.token	
							},
							fileType:'image',
							name:'file',
							formData: {
								detectionUserId:this.bodyMsg.id,
								direction: this.direction
							},
							success: (res) => {
								var upimg=JSON.parse(res.data)
								console.log(upimg)
								this.imageList[direction].imageUrl = upimg.filename;
							},
							fail: (res) => {
								this.HMmessages.show('图片选择失败',{icon:'error',duration:5000,iconColor:"red",fontColor:"red"});
							}
						});
						
			        }
			    });
							console.log(this.imageList)
			},

			//删除
			close: function(e) {
				this.imageList[e].imgUrl = '';
				this.imageList[e].imageUrl = '';
				this.imageList[e].imgfile = false;
				this.imageList[e].buttonfile = true;
			},
			promptBut: function(e){
				console.log(e)
				if(e == 0){
					console.log(e)
					this.promptBody = true;
					this.promptImg = '../../static/front.png';
				}
				if(e == 1){
					this.promptBody = true;
					this.promptImg = '../../static/back.png';
				}
				if(e == 2){
					this.promptBody = true;
					this.promptImg = '../../static/left.png';
				}
				if(e == 3){
					this.promptBody = true;
					this.promptImg = '../../static/right.png';
				}
			},
			promptBtn: function(){
				this.promptBody = false;
			},
			obtainCode: function(){
				if(this.token == ''){
					uni.navigateTo({
						url: '../login/phonelogin'
					});
					return;
				}
				let imageUrl = []; 
				for(let i=0;i<this.imageList.length;i++){
					if(this.imageList[i].imageUrl != ''){
						imageUrl.push(this.imageList[i].imageUrl)
					}
				}
				console.log(imageUrl.length)
				console.log(this.imageList)
				if(this.id == ''){
					this.HMmessages.show('请添加体测人',{icon:'error',duration:5000,iconColor:"red",fontColor:"red"});
					return;
				}
				if(this.imageList[0].imgUrl == ''){
					this.HMmessages.show('请上传正面照',{icon:'error',duration:5000,iconColor:"red",fontColor:"red"});
					return;
				}
				if(this.imageList[1].imgUrl == ''){
					this.HMmessages.show('请上传背面照',{icon:'error',duration:5000,iconColor:"red",fontColor:"red"});
					return;
				}
				if(this.imageList[2].imgUrl == '' && this.imageList[3].imgUrl == ''){
					this.HMmessages.show('左右请选一张上传',{icon:'error',duration:5000,iconColor:"red",fontColor:"red"});
					return;
				}
				if(imageUrl.length < 3){
					this.HMmessages.show('图片上传数量小于3张',{icon:'error',duration:5000,iconColor:"red",fontColor:"red"});
					return;
				}
				if(imageUrl.length >= 3){
					uni.request({
						url:this.$webUrl + this.$bodyPosture,
						header:{
							'content-type':'application/x-www-form-urlencoded',
							'token':'' + this.token	
						},
						data: {
							userId: this.bodyMsg.id,
							detectionUserId: this.id,
							memberName: this.bodyMsg.memberName,
							memberSex: this.bodyMsg.memberSex,
							memberAge: this.bodyMsg.age,
							frontPicture: this.imageList[0].imageUrl,
							backPicture: this.imageList[1].imageUrl,
							leftPicture: this.imageList[2].imageUrl,
							rightPicture: this.imageList[3].imageUrl
						},
						method: 'POST',
						success: (res) => {
							console.log(res)
							uni.redirectTo({
								url: '../body-posture/body-success'
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
	}
</script>

<style>
	.body-posture{
		padding-bottom: 60upx;
	}
	.physicaltester{
		width: 600upx;
		padding: 30upx;
		background-color: #EFEFEF;
		border-radius: 10upx;
		position: relative;
	}
	.phyNew{
		color: #6BD8ED;
	}
	.phySelect{
		
	}
	.selectText{
		line-height: 40upx;
	}
	.selectMsg{
		padding-top: 20upx;
		font-size: 24upx;
	}
	.selectMsg text{
		padding-right:60upx;
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
	.switchIcin{
		position: absolute;
		right: 20upx;
		top: 50%;
		margin-top: -30upx;
		font-family: texticons;
		color: #6BD8ED;
		font-size: 60upx;
		
	}
	.posture-noneborder{
		font-size: 32upx;
		padding: 0;
		position: relative;
	}
	.promptText{
		padding-left: 10upx;
		font-size: 24upx;
		color: red;
	}
	.promptBut{
		padding: 20upx;
		font-family: texticons;
		color: #6BD8ED;
		position: absolute;
		top: -10upx;
		right: -20upx;
	}
	.posture-tishi{
		color: #6BD8ED;
		font-size: 24upx;
		padding: 30upx 0;
	}
	.posture-tishimsg{
		color: #535353;
		font-size: 24upx;
		padding: 30upx 0;
	}
	.uni-textarea{
		width: 100%;
		position: relative;
	}
	.body-textarea{
		width: 640upx;
		height: 200upx;
		padding: 10upx;
		background:#f8f8f8;
		border: 1px solid #EFEFEF;
		border-radius: 10upx;
		font-size: 24upx;
		line-height: 40upx;
	}
	.textarea-number{
		position: absolute;
		width: 200upx;
		height: 40upx;
		right: 0;
		text-align: right;
		bottom: 0;
		padding: 0 10upx 10upx 0;
		color: #6BD8ED;
		font-size: 24upx;
	}
	.up-body{
		width: 100%;
		padding: 20upx 0;
		position: relative;
	}
	.up-body .up_files{
		width: 600upx;
		margin: 0 auto;
		border: 1px solid #EFEFEF;
		border-radius: 10upx;
		overflow: hidden;
	}
	.up_img{
		width: 100%;
		height: 240upx;
		display: inline-block;
		vertical-align: middle;
	}
	.close-view{
		text-align: center;
		line-height: 14px;
		height: 16px;
		width: 16px;
		border-radius: 50%;
		background: #FF5053;
		color: #FFFFFF;
		position: absolute;
		top: 26upx;
		right: 16upx;
		font-size: 24upx;
	}
	.up_button{
		width: 100%;
		height: 120upx;
		position: relative;
	}
	.up_button:before, .up_button:after{
		content: " ";
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		background-color: #D9D9D9;
	}
	.up_button:before {
		width: 2px;
		height: 39px;
	}
	.up_button:after {
		width: 39px;
		height: 2px;
	}
	.up_input{
		width: 100%;
		height: 100%;
	}
	.prompt-body{
		width: 100%;
		height: 120%;
		position: fixed;
		top: -10%;
		left: 0;
		background: rgba(0,0,0,0.8);
		display: flex;
		justify-content: center;
		align-items:center;
		z-index: 99;
	}
	.prompt-cont{
		width: 60%;
		height: 680upx;
		border-radius: 20upx;
		background: #FFFFFF;
		overflow: hidden;
	}
	.prompt-cont image{
		width: 100%;
		height: 100%;
	}
</style>
