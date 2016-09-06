$(function(){
	var 
		oPrice    = 0,
		totalPrice= 0,
		oquantity = $.cookie("quantity");
	$(".quantity-text").val(oquantity);	
	
	$.ajax({
		url:"json.txt",
		dataType: "json",
		error:function(){
			console.log("error");
		},
		success:function(json){			
			oPrice = json.product[0].price;
			$(".pTotal span").html(oquantity * oPrice);
			$(".totalPrice b").html(oquantity * oPrice);
		}
	});
	//购物车添加两件商品
	
	$(".Tr02").clone().appendTo(".product-list");

	$(".Tr02").eq(1).find("img").attr({"src":"../img/104a091c-bad7-4c58-994d-3c24c7718765.jpg"});
	$(".Tr02").eq(1).find(".pPrice span").html("399");

	//页面加载完成后改变单价和总价
	for(var i=0;i<$('.Tr02').length;i++){		
		$('.pTotal span').eq(i).text($('.quantity-text').eq(i).val()*$('.pPrice span').eq(i).text());		
	}
	
	$(".totalPrice b").html(parseInt($(".pTotal span").eq(0).html())+parseInt($(".pTotal span").eq(1).html()));

	//=================点击加减改变数量
	$(".quantity-redu").each(function(i){
		oPrice = $(".pPrice span").eq(i).html();
		$(".quantity-redu").eq(i).click(function(){
		var oValue = $(".quantity-text").eq(i).val();
		
		if(oValue > 0){
			oValue--;
			$(".quantity-text").eq(i).val(oValue);
			$(".pTotal span").eq(i).html(oValue * oPrice);
			totalPrice = parseInt($(".totalPrice b").text()) - parseInt(oPrice);
			$(".totalPrice b").html(totalPrice);
						
		}else{
			alert("商品数量应大于0");
		}
	})
		
	});
	
	$(".quantity-plus").each(function(i){
		oPrice = $(".pPrice span").eq(i).html();
		$(this).click(function(){
		var oValue = $(".quantity-text").eq(i).val();
		if(oValue < 10){
			oValue++;
			$(".quantity-text").eq(i).val(oValue);
			$(".pTotal span").eq(i).html(oValue * oPrice);
			totalPrice = parseInt($(".totalPrice b").text()) + parseInt(oPrice);
			$(".totalPrice b").html(totalPrice);			
		}else{
			alert("商品数量最多为10");
		}
	})
		
	});

	
	//去结算
	$(".btnContinue").click(function(){
		if($.cookie("userName") != null){
			$.cookie("quantity",$(".quantity-text").val());
			$.cookie("totalPrice",$(".totalPrice b").text());		
			window.open("sfeihu-order.html");
		}else{
			alert("请先登录");
		}
				
	});
	
	//点击删除
	$(".poperate").each(function(i){
		$(".poperate").eq(i).click(function(){
			$(this).parents('tr').html("");
			for(var i=0;i<$('.Tr02').length;i++){		
				$('.pTotal span').eq(i).text($('.quantity-text').eq(i).val()*$('.pPrice span').eq(i).text());		
			}
			
			$(".totalPrice b").html(parseInt($(".pTotal span").eq(0).html()));
		});
	});
	
	
	
	
	
});