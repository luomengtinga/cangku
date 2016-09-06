$(function(){
	var 
		oPrice    = 0,
		oquantity = $.cookie("quantity");
	$(".pNumber").html(oquantity);
	
	$.ajax({
		url:"../json.txt",
		dataType:"json",
		dataFilter:function(data){
			return data;
		},
		error:function(){
			console.log("error");
		},
		success:function(json){	
			oPrice = json.product[0].price;
			$(".pTotal span").html(parseFloat(oquantity * oPrice).toFixed(2));
			$("#totleAmount span").html(parseFloat(oquantity * oPrice).toFixed(2));											
		},
	});
	
//	 ==========判断是否有地址
	if($.cookie("ren") != null){				
		$(".NewAddress_div").css("display","block");
		$(".NewAddress_div").find("span").eq(0).html($.cookie("ren"));
		$(".NewAddress_div").find("span").eq(1).html($.cookie("phone"));
		$(".NewAddress_div").find("span").eq(2).html($.cookie("address"));		
	}else{			
		$(".NewAddress_div").css("display","none");
	}
	
	
	//========点击添加新的地址
	$(".newAddress").click(function(){
		$(".addAddress").css("display","block");
	});
	
	//========点击确定添加
	
	$(".addsBtn").click(function(){
		$.cookie("ren",$(".tr01").eq(0).find("input").val(),{
			path:"/"
		});
		$.cookie("phone",$(".tr01").eq(1).find("input").val(),{
			path:"/"
		});
		$.cookie("address",$(".select01").eq(0).val() + $(".select01").eq(1).val() + $(".tr01").eq(1).find("input").val(),{
			path:"/"
		});
		
		$(".NewAddress_div").find("span").eq(0).html($(".tr01").eq(0).find("input").val());
		$(".NewAddress_div").find("span").eq(1).html($(".tr01").eq(1).find("input").val());
		$(".NewAddress_div").find("span").eq(2).html($(".select01").eq(0).val() + $(".select01").eq(1).val()+$(".tr01").eq(3).find("input").val());
		
		$(".addAddress").css("display","none");
		$(".NewAddress_div").css("display","block");
		
	});
	
	
});