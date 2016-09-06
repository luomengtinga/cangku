$(function(){
	
	//=================购物车数据
	
//	$(".Cart-num").html($.cookie("quantity"));
	
	if($.cookie("quantity") != null){
		var oQuantity = $.cookie("quantity");	
		$.cookie("quantity", oQuantity,{
			path:"/" 
		});
		$(".Cart-num").html($.cookie("quantity"));			
	}else{
		$.cookie("quantity", 0,{
			path:"/" 
		});
		$(".Cart-num").html($.cookie("quantity"));
	}
	
	//==================登录成功后
	if($.cookie("state")=='true'){
		
		$(".loginReg span").eq(0).html("亲爱的");
		$(".loginReg a").eq(0).html($.cookie("userName"));
		$(".loginReg span").eq(1).html("你好");
		$(".loginReg a").eq(1).html("[退出]");
	}else {
		$(".loginReg span").eq(0).html("你好，欢迎来到飞虎乐购！");
		$(".loginReg a").eq(0).html('安全登录');
		$(".loginReg span").eq(1).html("还没加入我们？");
		$(".loginReg a").eq(1).html("免费注册");		
	}
	$(".loginReg a").eq(1).click(function(){
		if($.cookie("state")=="true"){
			window.open("html/sfeihu-sign.html");
			$.cookie("state",false,{
			path:"/" 
		});
		}else{
			window.open("html/sfeihu-register.html");
		}		
	});
	//===============回到顶部
	
	$(window).scroll(function(){
		var oScrollTop = $(window).scrollTop();
		oScrollTop > 500 ? $(".goback").fadeIn("slow") : $(".goback").fadeOut("slow");					
	});
	$(".goback").click(function(){
		$(window).scrollTop(0);
	});
	
	
	//===========头部的下拉菜单
	$(".myacount").mouseenter(function(){	
		$(this).removeClass("myacount").addClass("myacount-over");		
	}).mouseleave(function(){
		$(this).removeClass("myacount-over").addClass("myacount");						
	});
		$(".Jhelp").mouseenter(function(){	
		$(this).removeClass("Jhelp").addClass("Jhelp-over");		
	}).mouseleave(function(){
		$(this).removeClass("Jhelp-over").addClass("Jhelp");						
	});

	
	//=================鼠标划过购物车
	$(".tcart-pro").mouseenter(function(){
		$(".tcart-pro b").css('background',"url(img/sl_sitenav.png) no-repeat 0 -5px");  //路径改变的是html属性不是css的所以不用加../
		$(".tcart-pro-list").stop(true).slideDown();
	}).mouseleave(function(){
		$(".tcart-pro b").css({'background':"url(img/sl_sitenav.png) no-repeat 0 0"});
		$(".tcart-pro-list").stop(true).slideUp();
	});

	
	
});