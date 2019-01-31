<template>
	<view>
		<phone-search-list :phones="phones" @paramClick="paramClick"></phone-search-list>
	</view>		
</template>

<script>
	
	import phoneSearchList from '@/components/phone-directory/phone-search-list.vue'
	
	export default {
		name:"phone-search",
		components:{
			phoneSearchList
		},
		data() {
			return {
				phones:null,
				phoneNumber:''
			}
		},
		onLoad (option) {
			this.phones = JSON.parse(unescape(option.phones))
		},
		mounted:function(){
		  this.areaCode();
		},
		methods : {
			areaCode: function(){
				// this.phones = this.$AreaCode;
				let phoneNumber = '';
				uni.getStorage({
				    key: 'AreaCode',
				    success: function (res) {
				        console.log(res.data);
						phoneNumber = res.data.phoneNumber;
				    }
				});
				this.phoneNumber = phoneNumber;
				console.log('picker发送选择改变，携带值为', this.phoneNumber)
			},
			paramClick (e) {
				console.log(e);
				uni.setStorage({
					key: 'AreaCode',
					data: {
						name:e.name,
						code:e.id,
						phoneNumber:this.phoneNumber
					},
					success: function () {
						uni.redirectTo({
							url: '../login/phonelogin'
						});
					}
				});
			}
		}
	}
</script>

<style>
	
</style>
