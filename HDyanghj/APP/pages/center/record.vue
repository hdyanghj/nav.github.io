 <template>
	<view class="center-body">
		<view class="center-body-logo">
			<view class="logo-title">
				<view @tap="xgButton(nike)" class="modify-name">{{userInfo.username}}<text class="icon-modify">&#xe606;</text></view>
			</view>
			<view @tap="xgButton(avatar)" class="logo-img">
				<image class="logo-image" :src="userInfo.headSculpture"></image>
				<view class="logo-img-text"></view>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @tap="xgButton(summary)">
				<text class="list-text">自我介绍</text>
				<text class="navigat-text">{{userInfo.remarks}}</text>
				<text class="navigat-arrow">&#xe610;</text>
			</view>
			<view class="center-list-item border-bottom" @tap="xgButton(sex)">
				<text class="list-text">性别</text>
				<text class="navigat-text">{{sexText[userInfo.gender]}}</text>
				<text class="navigat-arrow">&#xe610;</text>
			</view>
			<view class="center-list-item border-bottom" @tap="xgButton(age)">
				<text class="list-text">出生日期</text>
				<text class="navigat-text">{{userInfo.birthday}}</text>
				<text class="navigat-arrow">&#xe610;</text>
			</view>
			<view class="center-list-item border-bottom" @tap="xgButton(email)">
				<text class="list-text">电子邮箱</text>
				<text class="navigat-text">{{userInfo.email}}</text>
				<text class="navigat-arrow">&#xe610;</text>
			</view>
			<view class="center-list-item border-bottom center-mobile">
				<text class="list-text">联系电话</text>
				<text class="navigat-text">{{userInfo.mobile}}</text>
				<text class="navigat-arrow">&#xe610;</text>
			</view>
			<!-- <view class="center-list-item border-bottom">
				<text class="list-text">注册日期</text>
				<text class="navigat-text">{{uercreateDate}}</text>
				<text class="navigat-arrow">&#xe610;</text>
			</view> -->
		</view>
		<EDITmessages ref="EDITmessages" @complete="EDITmessages = $refs.EDITmessages" @msgTransfer="msgTransfer"></EDITmessages>
	</view>
</template>

<script>
	import EDITmessages from '@/components/EDIT-messages/EDIT-messages.vue';
	export default {
		data() {
			return {
				nike: 'nike',
				avatar: 'avatar',
				summary: 'summary',
				sex: 'sex',
				age: 'age',
				email: 'email',
				mobile: 'mobile',
				userInfo: {
					username:'',
					headSculpture:'',
					remarks: '',
					gender: '',
					birthday: '',
					email: '',
					mobile: '',
				},
				sexText: ['添加性别','男','女','保密'],
				token:''
			}
		},
		components: {
			EDITmessages
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
				if(this.token == ''){
					this.logout();
				}
				let user_Info= [];
				uni.getStorage({
					key: 'user_Info',
					success: function (sto) {
						console.log(sto)
						user_Info=sto.data;						
					}
				});
				if(user_Info.username == null){
					this.userInfo.username = '一只小麒麟';
				}
				if(user_Info.username != null){
					this.userInfo.username = user_Info.username;
				}
				
				if(user_Info.headSculpture == null){
					this.userInfo.headSculpture = this.$defaultAvatar;
				}
				if(user_Info.headSculpture != null){
					this.userInfo.headSculpture = user_Info.headSculpture;
				}
				
				if(user_Info.remarks == null){
					this.userInfo.remarks = '一句话介绍自己';
				}
				if(user_Info.remarks != null){
					this.userInfo.remarks = user_Info.remarks;
				}
				
				if(user_Info.gender == null){
					this.userInfo.gender = '0';
				}
				if(user_Info.gender != null){
					this.userInfo.gender = user_Info.gender;
				}
				
				if(user_Info.birthday == null){
					this.userInfo.birthday = '添加出生日期';
				}
				if(user_Info.birthday != null){
					this.userInfo.birthday = user_Info.birthday;
				}
				
				if(user_Info.email == null){
					this.userInfo.email = '绑定电子邮箱';
				}
				if(user_Info.email != null){
					this.userInfo.email = user_Info.email;
				}
				
				if(user_Info.mobile == null){
					this.userInfo.mobile = '绑定手机号';
				}
				if(user_Info.mobile != null){
					this.userInfo.mobile = user_Info.mobile;
				}
				console.log(this.userInfo.mobile)
				
			},
			msgTransfer: function(e){
				if(e != ''){
					this.loadExecution();
				}
			},
			// 跳转
			xgButton: function(e) {
				console.log(e)
				this.EDITmessages.editShow(e);
			},
			logout: function(){
				uni.clearStorage()
				uni.redirectTo({
					url: '../login/phonelogin'
				});
			},
			
		}
	}
</script>
<style>
	page,
	view {
		display: flex;
	}
	.logo-title,.my-main-list{
		display: table;
	}
	.list-text{
		width: 30%;
	}
	.modify-name{
		height: 150upx;
		line-height: 150upx;
	}
	.modify-name .icon-modify{
		width: 40upx;
		padding-left: 20upx;
		font-size: 34upx;
		color: #6BD8ED;
		text-align: right;
		font-family: texticons;
	}
	.logo-img{
		position: relative;
		overflow: hidden;
	}
	.center-mobile:active .list-text,.center-mobile:active .navigat-arrow{
		color: #555555!important;
	}

</style>