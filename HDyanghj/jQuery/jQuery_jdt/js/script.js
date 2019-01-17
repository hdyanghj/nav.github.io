$(function(){
    var wapper = $("#wapper"),     //获取整个轮播图div
    	bigList = $("#pic_list"),	//获取轮播图每一张img
    	prev = $("#prev"),			//获取左按钮
    	next = $("#next"),			//获取右按钮
    	buttons = $("#button_list").find("span"),	//获取底部小圆点
    	flag = false,				
    	index = 0,
 		timer;

 		//左按钮点击触发事件
    	next.click(function(){
    		if(!flag){
    			flag = true;
    			//如果已经位于最后一张，便将index设置为0，即返回第一张
    			if (index == 4) {
    			    index = 0;
    			}
    			else {
    			    index += 1;
    			}
	    	    if(parseInt(bigList.css("left")) < -1800){
	    			bigList.animate({left:"0px"},500,function(){
	    				flag = false;
	    			});
				}else{
					animateGo(600);
				}
				//左按钮点击同步小圆点事件	
				showButton();
			}
    	});
    	//右按钮点击触发事件
    	prev.click(function(){
    		if(!flag){
    			flag = true;
    			//如果已经位于第一张，便将index设置为4，即跳到最后一张
    			if (index == 0) {
    			    index = 4;
    			}
    			else {
    			    index -= 1;
    			}
	    	    if(parseInt(bigList.css("left")) > -600){
	    			bigList.animate({left:"-2400px"},500,function(){
	    				flag = false;
	    			});
				}else{
					animateGo(-600);
				}	
				//右按钮点击同步小圆点事件
				showButton();
			}
    	});    	
    //动画效果
    function animateGo(attr){
    	bigList.animate({left:"-="+attr+"px"},500,function(){
	    				flag = false;
	    				});
    }

    //小圆点事件
    function showButton(){
    	buttons.each(function(i){
    		if($(this).attr("class") == "on"){
                $(this).attr("class","");
                return false;
    		}
    	})
        buttons[index].className = 'on';
    }
    //自动播放
    function play(){
    	timer = setInterval(function(){
    	 	next.click();
    	},3000);
    }
    //载入页面就立即触发自动播放
    play();
    //停止播放
    function stop(){
    	clearInterval(timer);
    }
    //鼠标进入轮播图就停止播放
    wapper.mouseover(function(){
    	stop();
    })
    //鼠标离开轮播图就重新自动播放
    wapper.mouseout(function(){
    	play();
    })
    //遍历小圆点
    buttons.each(function(i){
    	$(this).click(function(){
			if(this.className == 'on'){
				return false;
			}
		var offset = 600 * (i - index);
		animateGo(offset);
		index = i;
		showButton();
    	})
    });
})