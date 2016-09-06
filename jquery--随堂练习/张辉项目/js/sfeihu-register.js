$(function(){
	
	//判断注册信息
	$(".input-text").focus(function(){		
			$(this).closest("tr").find(".text-tips").css("display","block");
	});
	//判断登录名
	$(".input-text").eq(0).focusout(function(){
		var oVal = $(this).val();
		var reg = /^[a-z0-9_-]{3,16}$/;
		if(oVal.length == 0){
			$(this).closest("tr").find(".text-tips").css("display","block").html("用户名不能为空");
		}else if(!reg.test(oVal)){
			$(this).closest("tr").find(".text-tips").css("display","block").html("您输入的用户名格式不对");
		}else{
			$(this).closest("tr").find(".text-tips").css("display","none");
		}
	});
	//判断密码
	$(".input-text").eq(1).focusout(function(){
		var oVal = $(this).val();
		var reg = /^[a-z0-9_-]{6,18}$/;
		if(oVal.length == 0){
			$(this).closest("tr").find(".text-tips").css("display","block").html("密码不能为空");
		}else if(!reg.test(oVal)){
			$(this).closest("tr").find(".text-tips").css("display","block").html("您输入的密码格式不对");
		}else{
			$(this).closest("tr").find(".text-tips").css("display","none");
		}
	});
	//判断第二次输入的密码
	$(".input-text").eq(2).focusout(function(){
		var oVal = $(this).val();		
		if(oVal !== $(".input-text").eq(1).val()){
			$(this).closest("tr").find(".text-tips").css("display","block").html("您两次输入的密码不一致");
		}else{
			$(this).closest("tr").find(".text-tips").css("display","none");
		}
	});
	//判断邮箱
	$(".input-text").eq(3).focusout(function(){
		var oVal = $(this).val();

		var reg = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;

		if(oVal.length == 0){
			$(this).closest("tr").find(".text-tips").css("display","block").html("邮箱不能为空");
		}else if(!reg.test(oVal)){
			$(this).closest("tr").find(".text-tips").css("display","block").html("您输入的邮箱格式不对");
		}else{
			$(this).closest("tr").find(".text-tips").css("display","none");
		}
	});
	//判断验证码
	$(".input-text").eq(6).focusout(function(){
		var oVal = $(this).val();
		if(oVal.length == 0){
			$(this).closest("tr").find(".text-tips").css("display","block").html("验证码不能为空");
		}else if(oVal !== '82195'){
			$(this).closest("tr").find(".text-tips").css("display","block").html("您输入的验证码不对");
		}else{
			$(this).closest("tr").find(".text-tips").css("display","none");
		}		
	});
	
	//应该判断上面的信息是否都成功，之后在给头部的内容换成欢迎信息？？？？？？？？？————————bug
	//点击注册时判断是否阅读协议     并且创建cookie
	$(".btn-register").click(function(){
		$(".input-text").eq(7).is(':checked') ? window.open("sfeihu-sign.html") : $(".n-agreement").css("display","block");
		
		$.cookie("userName" , $(".input-text").eq(0).val(),{
			path:"/" 
		});
		$.cookie("miMa", $(".input-text").eq(1).val(),{
			path:"/" 
		});
				
	});
	
	
	
	
});