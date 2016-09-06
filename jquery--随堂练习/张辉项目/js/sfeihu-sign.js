$(function(){	
	//=============获取cookie
	$("#userName").val($.cookie("userName"));
	
	//===============点击登录是判断密码是否正确
	$(".btn-register").click(function(){
		//打开网页的两种方式
//		window.location.href = "index.html";
//		window.open("index.html");
		if($("#miMa").val() == $.cookie("miMa")){
			window.open("../index.html");
		}else{
			$(".tips").css("display","none");
			$(".err-tips").css("display","block");
		}
		$.cookie("state" , true,{
			path:"/" 
		});

	});
	
	
});