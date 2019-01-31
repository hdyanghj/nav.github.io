 <template>
	<view class="center-body">
		<HMmessages ref="HMmessages" @complete="HMmessages = $refs.HMmessages"></HMmessages>
		<view class="center-body-logo" @click="goLogin">
			<view class="logo-title">
				<view class="uer-name">Hi，{{login ? uerInfo.username : notLogged}}</view>
				<view class="go-login">{{login ? prompt : logRegister}}</view>
			</view>
			<image class="logo-img" :src="login ? uerInfo.headSculpture :avatarUrl"></image>
		</view>
		
		<view class="my-main">
			<view class="my-main-list" @tap="buttonList(attention)">
				<text class="nav-icon">&#xe607;</text>
				<text class="nav-text">关注/{{myList.guanzhu}}</text>
			</view>
			<view class="my-main-list" @tap="buttonList(fansi)">
				<text class="nav-icon">&#xe60a;</text>
				<text class="nav-text">粉丝/{{myList.fensi}}</text>
			</view>
			<view class="my-main-list" @tap="buttonList(zan)">
				<text class="nav-icon">&#xe616;</text>
				<text class="nav-text">已赞/{{myList.zan}}</text>
			</view>
			<view class="my-main-list" @tap="buttonList(comment)">
				<text class="nav-icon">&#xe617;</text>
				<text class="nav-text">评论</text>
			</view>
		</view>
		
		<view class="center-list">
			<view class="center-list-item border-bottom" @tap="buttonList(msg)">
				<text class="list-text">消息</text>
				<text class="navigat-arrow">&#xe60c;</text>
			</view>
			<view class="center-list-item border-bottom" @tap="buttonList(video)">
				<text class="list-text">我的视频</text>
				<text class="navigat-arrow">&#xe626;</text>
			</view>
			<view class="center-list-item border-bottom" @tap="buttonList(order)">
				<text class="list-text">我的订单</text>
				<text class="navigat-arrow">&#xe615;</text>
			</view>
			<view class="center-list-item border-bottom" @tap="buttonList(report)">
				<text class="list-text">我的报告</text>
				<text class="navigat-arrow">&#xe60e;</text>
			</view>
			<view class="center-list-item border-bottom" @tap="buttonList(collect)">
				<text class="list-text">我的收藏</text>
				<text class="navigat-arrow">&#xe603;</text>
			</view>
			<view class="center-list-item border-bottom" @tap="buttonList(integral)">
				<text class="list-text">我的积分</text>
				<text class="navigat-arrow">&#xe60b;</text>
			</view>
			<view class="center-list-item border-bottom" @tap="buttonList(help)">
				<text class="list-text">获取帮助</text>
				<text class="navigat-arrow">&#xe60d;</text>
			</view>
			<view class="center-list-item border-bottom" @tap="buttonList(aboutus)">
				<text class="list-text">关于我们</text>
				<text class="navigat-arrow">&#xe622;</text>
			</view>
			<view class="center-list-item border-bottom" @tap="buttonList(faq)">
				<text class="list-text">反馈</text>
				<text class="navigat-arrow">&#xe617;</text>
			</view>
			<view class="center-list-item border-bottom" @tap="buttonList(quit)">
				<text class="list-text">退出</text>
				<text class="navigat-arrow">&#xe617;</text>
			</view>
		</view>
	</view>
</template>

<script>
	import HMmessages from '@/components/HM-messages/HM-messages.vue';
	export default {
		data() {
			return {
				login: false,
				notLogged:'您未登录',
				logRegister:'登录/注册>',
				prompt:'查看并编辑个人的资料',
				avatarUrl: "",
				uerInfo: [],
				myList:{
					guanzhu:'100',
					fensi:'10W',
					zan:'999'
				},
				token:'',
				attention:'attention',
				fansi:'fansi',
				zan:'zan',
				comment:'comment',
				msg:'msg',
				video:'video',
				order: 'order',
				collect:'collect',
				integral:'integral',
				help:'help',
				aboutus:'aboutus',
				faq:'faq',
				quit:'quit',
				report: 'report'
			}
		},
		components: {
			HMmessages
		},
		mounted:function(){
			this.loadExecution();
		},
		onShow: function(options) {      
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
				let user_Info= [];
				uni.getStorage({
					key: 'user_Info',
					success: function (sto) {
						console.log(sto)
						user_Info=sto.data;						
					}
				});
				this.uerInfo = user_Info;
				this.avatarUrl = this.$defaultAvatar;
				if(this.token != ''){
					this.login = true;
					console.log(this.uerInfo.username)
				}
				if(this.uerInfo.username == null){
					this.uerInfo.username = '一只小麒麟';
				}
				if(this.uerInfo.headSculpture == null){
					this.uerInfo.headSculpture = this.$defaultAvatar;
				}
			},
			goLogin() {
				if (!this.login) {
					uni.navigateTo({
						url: '../login/phonelogin'
					});
				}
				if (this.login) {
					uni.navigateTo({
						url: 'record'
					});
				}
			},
			buttonList:function(e){
				if(e == 'attention'){
					this.HMmessages.show('暂未开通,敬请期待。。。',{icon:'help',duration:5000,iconColor:"red",fontColor:"red"});
				}
				if(e == 'fansi'){
					this.HMmessages.show('暂未开通,敬请期待。。。',{icon:'help',duration:5000,iconColor:"red",fontColor:"red"});
				}
				if(e == 'zan'){
					this.HMmessages.show('暂未开通,敬请期待。。。',{icon:'help',duration:5000,iconColor:"red",fontColor:"red"});
				}
				if(e == 'comment'){
					this.HMmessages.show('暂未开通,敬请期待。。。',{icon:'help',duration:5000,iconColor:"red",fontColor:"red"});
				}
				if(e == 'msg'){
					this.HMmessages.show('暂未开通,敬请期待。。。',{icon:'help',duration:5000,iconColor:"red",fontColor:"red"});
				}
				if(e == 'video'){
					this.HMmessages.show('暂未开通,敬请期待。。。',{icon:'help',duration:5000,iconColor:"red",fontColor:"red"});
				}
				if(e == 'order'){
					this.HMmessages.show('暂未开通,敬请期待。。。',{icon:'help',duration:5000,iconColor:"red",fontColor:"red"});
				}
				
				if(e == 'report'){
					uni.navigateTo({
						url: 'report-list'
					});
				}
				
				if(e == 'collect'){
					this.HMmessages.show('暂未开通,敬请期待。。。',{icon:'help',duration:5000,iconColor:"red",fontColor:"red"});
				}
				if(e == 'integral'){
					this.HMmessages.show('暂未开通,敬请期待。。。',{icon:'help',duration:5000,iconColor:"red",fontColor:"red"});
				}
				if(e == 'help'){
					this.HMmessages.show('暂未开通,敬请期待。。。',{icon:'help',duration:5000,iconColor:"red",fontColor:"red"});
				}
				if(e == 'aboutus'){
					this.HMmessages.show('暂未开通,敬请期待。。。',{icon:'help',duration:5000,iconColor:"red",fontColor:"red"});
				}
				if(e == 'faq'){
					uni.navigateTo({
						url: 'uni-feedback'
					});
				}
				if(e == 'quit'){
					uni.request({
						url:this.$webUrl + this.$logout,
						header:{
							'token':'' + this.token
						},
						method: 'DELETE',
						success: (res) => {
							if(res.data.code == 0){
								uni.showToast({
									icon: 'none',
									duration:3000,
									title: '退出成功'
								});
								uni.clearStorage()
								uni.reLaunch({
									url: '../index/index'
								});
							}
							if(res.data.code == 100005002){
								uni.clearStorage()
								uni.navigateTo({
									url: '../login/phonelogin'
								});
							}
							if(res.data.code != 0){
								uni.showToast({
									icon: 'none',
									duration:3000,
									title: '退出失败'
								});
							}
								
						},
						fail: (err) => {
							uni.showToast({
								icon: 'none',
								duration:3000,
								title: '退出失败'
							});
						}
					})
				}
			}
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
	
</style>