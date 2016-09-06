$(function(){	
	//=================rankingList
	$(".title-ul li").mouseenter(function(e){
		var iIndex = $(this).index();
		$(".title-ul li").removeClass("active");
		$(this).addClass("active");
		$(".RL-list ul").css("display","none").eq(iIndex).css("display","block");
	});	
	
	
	//===============加入购物车
	$(".tijiao").click(function(){		
		if($.cookie("quantity") != null){
			var oQuantity = $.cookie("quantity");
			oQuantity++;
			$.cookie("quantity", oQuantity);
			$(".Cart-num").html($.cookie("quantity"));			
		}else{
			$.cookie("quantity", 1);
			$(".Cart-num").html($.cookie("quantity"));
		}
	});
	
//	//点击添加两件商品
//	$(".gouwucheBtn01").click(function(){
//		var str = $.cookie("record");
//		
//		if(str==""||str==null){
//			
//			var obj = {name:"第1现场 D9000 行车记录仪 4.5英寸IPS屏",price:399,src:"img/26b71e84-2076-4168-a3fb-986f15dc0862.jpg"};
//			var arr = JSON.stringify(obj);
//			$.cookie("recond",arr);
//		} else {
//			var arr = JSON.parse(str);
//			var obj2 = {name:"第1现场 D9000 行车记录仪 4.5英寸IPS屏",price:499,src:"img/104a091c-bad7-4c58-994d-3c24c7718765.jpg"};
//			arr.push(obj2);
//			$.cookie("recond",JSON.stringify(arr));
//		}
//		console.log($.cookie("recond"));
//		
//	});
//	$(".gouwucheBtn02").click(function(){
//		var str = $.cookie("record");
//		
//		if(str==""||str==null){
//			console.log($.cookie("recond"));
//			var obj = {name:"第1现场 D9000 行车记录仪 4.5英寸IPS屏",price:399,src:"img/26b71e84-2076-4168-a3fb-986f15dc0862.jpg"};
//			var arr = JSON.stringify(obj);
//			$.cookie("recond",arr);
//		} else {
//			var arr = JSON.parse(str);
//			var obj2 = {name:"第1现场 D9000 行车记录仪 4.5英寸IPS屏",price:499,src:"img/104a091c-bad7-4c58-994d-3c24c7718765.jpg"};
//			arr.push(obj2);
//			$.cookie("recond",JSON.stringify(arr));
//		}
//		
//		
//	});
	
});


















