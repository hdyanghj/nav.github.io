<template>
	<view>
		<view class="search">
			<input 
			@input="handleInput"
			class="search-input" 
			type="text" 
			focus  
			placeholder="请输入国际区号归属地"
			/>
		</view>
		<view class="search-main" v-if="keyword">
			<view class="search-main-errtitle" v-if="hasNoData">无搜索结果</view>
			<view class="search-main-title"
			hover-class="hover" 
			@click="handleClick"
			:hover-start-time="20" 
			:hover-stay-time="70" 
			v-for="item of list" 
			:key="item.code"
			:data-name="item.zh"
			:data-id="item.code">
				{{item.zh}}
				<text class="list-item-code" :data-name="item.zh" :data-id="item.code">+{{item.code}}</text>
			</view>
		</view>
	</view>		
</template>

<script>
	export default {
		name:"phone-search-list",
		props:{
			phones:Object
		},
		data() {
			return {
				keyword:'',
				list:[],
				timer:null
			}
		},
		computed:{
			hasNoData () {
				return !this.list.length
			}
		},
		watch:{
			keyword () {
				if(this.timer) {
					clearTimeout(this.timer)
				}
				if(!this.keyword){
					this.list = []
					return
				}
				this.timer = setTimeout(()=>{
					const result = []
					for (let i in this.phones){
						this.phones[i].forEach((item)=>{
							if(item.en.indexOf(this.keyword) > -1||item.zh.indexOf(this.keyword) > -1){
								result.push(item)
							}
						})
					}
					this.list = result
				},100)
			}
		},
		methods:{
			handleInput (e) {
				this.keyword = e.detail.value
			},
			handleClick (e) {
				console.log(e)
				this.$emit('paramClick',e.target.dataset)
			}
		}
	}
</script>
6
<style>
	.hover{
		background-color: #eee;
	}
	.search{
		background-color: #fff;
		padding: 10upx 20upx;
		border-bottom: 1px solid #e5e5e5;
	}

	.search-input{
		font-size:28upx;
		border: 1px solid #e5e5e5;
		border-radius: 3px;
		padding: 10upx 20upx 10upx 20upx;
		line-height: 55upx;
	}
	
	.search-main{
		height: 100%;
		padding-bottom: 20upx;
		background-color:#fff;
		overflow: hidden;
	}
	
	.search-main-errtitle,.search-main-title{
		width: 95%;
		height: 92upx;
		line-height: 92upx;
		font-size: 32upx;
		padding: 0 20upx;
		border-bottom: 1px solid #e5e5e5;
	}
	.list-item-code{
		float: right;
	}
</style>
