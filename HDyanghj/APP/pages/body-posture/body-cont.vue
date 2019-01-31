<template>
	<view class="body-posture">
		<view class="bg-title-h1">年龄</view>
		<view class="img-cont"><image src="../../static/aubg.jpg"/></view>
		<view class="text-cont">
			由于青少年期是指12~24岁这一阶段。此 阶段，随着形体发育完善，脏腑功能健全，体魄强壮，内脏坚实，气血充足，精力充沛，体健神旺。此时是体质最为强健的阶段，抵抗力强，不易感邪治病。此阶段由于身体发育很快，膳食中的蛋白质、维生素和钙等营养的供应很重要。有些幼年期体质较差的儿童，如能在青春发育期注意培养，一二年内可变成体质健壮的青年。相反，有些在幼年期体质并不算差，但由于青春期摄生不当，少壮气盛，情欲冲动，所愿不遂，意淫于外可使体质日益低下，所以青少年期的养生保健至关重要。
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:''
			}
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
				this.id= user_Id;
				if(this.person_Id != ''){

				}
			},
			
		}
	}
</script>

<style>
	.body-posture{
		padding-bottom: 60upx;
		
	}
	.img-cont{
		padding: 20upx 0;
		width: 100%;
	}
	.img-cont image{
		width: 100%;
		height: 400upx;
		border-radius: 20upx;
	}
	.bg-title-h1{
		padding-top: 40upx;
		font-size: 38upx;
	}
	.bg-title-h5{
		color: #CCCCCC;
		font-size: 24upx;
	}
	.text-cont{
		font-size: 28upx;
		line-height: 40upx;
	}
	
</style>
