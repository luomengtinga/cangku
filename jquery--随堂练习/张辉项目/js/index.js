$(function(){	
	//==========阴影
	$(".clothing-list ul li").mouseenter(function(){
		$(this).css("box-shadow","0 0 6px 3px red")
	}).mouseleave(function(){
		$(this).css("box-shadow","")
	});
	
	
	//==============floor
	var 
		aFloor		= $(".nav-floor a"),
		returnTop	= $("#return-top");
		
	returnTop.click(function(){
		$(window).scrollTop(0);
	});
	
	aFloor.click(function(){
		var 
			iIndex = $(this).index();
	
		$(window).scrollTop(800 + 700*iIndex);
	});
	
	$(window).scroll(function(){
		var 
			oScrollTop  = $(window).scrollTop(),
			oFloorNav   = $(".floor-nav"),			
			Floor		= Math.floor((oScrollTop-800)/700);
	
		if(oScrollTop > 500){
			oFloorNav.slideDown('fast');						
		}else{
			oFloorNav.slideUp();						
		}
		if(Floor < 7){
			aFloor.css({'background':'#5e655e'});
			aFloor.eq(Floor).css({'background':'#fe578d'});
		}
	});	
	
	//======================吸顶
	var 
		oSearchText1 = $(".search-text1"),
	 	oA1			=document.getElementById("a1");
		
	$(window).scroll(function(){
		var oScrollTop  = $(window).scrollTop();
		if(oScrollTop > 500){
			$(".box").slideDown('fast');						
		}else{
			$(".box").slideUp();						
		}
	});
	
	oSearchText1.bind('input propertychange',function(){
		var 
			keyWord 		= oSearchText1.val(),			
			oSearchResult1   = $(".search-result1");

		oSearchResult1.html('');	
		$.ajax({
			type:"GET",
			url:"https://suggest.taobao.com/sug?code=utf-8&q="+keyWord+"&_ksTS=1468669738868_6223&callback=jsonp6224&area=b2c&code=utf-8&k=1&bucketid=19&src=tmall_pc&isg=Ar29RUOTtlZ0FBI3YsYlccc8zBkhHgJHO932FH8CUJRBtt_oTatpfJAgFl8B&isg2=ApiYJkQEkbNCYMCsIe1DSSl36MgqKPwJ",
			dataType:"jsonp",
			error:function(){
				console.log("error");
			},
			datafilter:function(data){
				return data;
			},
			success:function(data,ts,JQXHR){
			
				if(data.result.length > 0){					
					for(var j = 0; j < data.result.length; j++){

						var $li=$('<li class="list"><a href="javascript:;"><b>'+data.result[j][0]+'</b><span>约有'+data.result[j][1]+'个结果</span></a></li>');
						
						oSearchResult1.append($li);
					}
				
					oSearchResult1.css({display:"block"});

				}else{
					oSearchResult1.css({display:"none"});
					oSearchResult1.html('');
				}
			}
		});
	});
	
	
	//=====================搜索框
	var 
		oSearchText   = $(".search-text"),
		oSearchResult = $(".search-result"),
		iSearchIndex  = -1;
	
	oSearchText.on('input propertychange',function(){
		var 
			keyWord 		= oSearchText.val();			
		oSearchResult.html('');	
		$.ajax({
			type:"GET",
			url:"https://suggest.taobao.com/sug?code=utf-8&q="+keyWord+"&_ksTS=1468669738868_6223&callback=jsonp6224&area=b2c&code=utf-8&k=1&bucketid=19&src=tmall_pc&isg=Ar29RUOTtlZ0FBI3YsYlccc8zBkhHgJHO932FH8CUJRBtt_oTatpfJAgFl8B&isg2=ApiYJkQEkbNCYMCsIe1DSSl36MgqKPwJ",
			dataType:"jsonp",
			error:function(){
				console.log("error");
			},
			datafilter:function(data){
				return data;
			},
			success:function(data,ts,JQXHR){			
				if(data.result.length > 0){					
					for(var j = 0; j < data.result.length; j++){
						var $li=$('<li data-key = "'+data.result[j][0]+'" class="list"><a href="javascript:;"><b>'+data.result[j][0]+'</b><span>约有'+data.result[j][1]+'个结果</span></a></li>');						
						oSearchResult.append($li);
					}					
					oSearchResult.css({display:"block"});
				}else{
					oSearchResult.css({display:"none"});
					oSearchResult.html('');
				}
			},
		});
	}).focusout(function(){
		oSearchResult.css({'display':"none"});
		oSearchResult.html('');
		oSearchText.val("");
	}).keyup(function (ev) {
		var
			ev = ev || window.event,
			
			aLi = $('.search-result li');
		if(ev.keyCode === 38 || ev.keyCode === 40) {
			if(ev.keyCode === 38 && iSearchIndex > 0) {
				iSearchIndex--;
			} else if(ev.keyCode === 40 && iSearchIndex < aLi.length - 1) {	
				iSearchIndex++;
			}
			oSearchResult.val(aLi.removeClass('active').eq(iSearchIndex).addClass('active').data('key'));
			oSearchText.val(aLi.eq(iSearchIndex).find("b").eq(0).text());
		}
	});
	
	//=======吸顶
	$(window).scroll(function(){
		var oScrollTop  = $(window).scrollTop();
		if(oScrollTop > 500){
			$(".box").slideDown('fast');						
		}else{
			$(".box").slideUp();						
		}
	});
	
	var 
		oA1			=document.getElementById("a1"),
		oSearchText1   = $(".search-text1"),
		oSearchResult1 = $(".search-result1"),
		iSearchIndex  = -1;
	
	oSearchText1.on('input propertychange',function(){
		var 
			keyWord 		= oSearchText1.val();			
		oSearchResult1.html('');	
		$.ajax({
			type:"GET",
			url:"https://suggest.taobao.com/sug?code=utf-8&q="+keyWord+"&_ksTS=1468669738868_6223&callback=jsonp6224&area=b2c&code=utf-8&k=1&bucketid=19&src=tmall_pc&isg=Ar29RUOTtlZ0FBI3YsYlccc8zBkhHgJHO932FH8CUJRBtt_oTatpfJAgFl8B&isg2=ApiYJkQEkbNCYMCsIe1DSSl36MgqKPwJ",
			dataType:"jsonp",
			error:function(){
				console.log("error");
			},
			datafilter:function(data){
				return data;
			},
			success:function(data,ts,JQXHR){			
				if(data.result.length > 0){					
					for(var j = 0; j < data.result.length; j++){
						var $li=$('<li data-key = "'+data.result[j][0]+'" class="list"><a href="javascript:;"><b>'+data.result[j][0]+'</b><span>约有'+data.result[j][1]+'个结果</span></a></li>');						
						oSearchResult1.append($li);
					}					
					oSearchResult1.css({display:"block"});
				}else{
					oSearchResult1.css({display:"none"});
					oSearchResult1.html('');
				}
			},
		});
	}).focusout(function(){
		oSearchResult1.css({'display':"none"});
		oSearchResult1.html('');
		oSearchText1.val("");
	}).keyup(function (ev) {
		var
			ev = ev || window.event,
			
			aLi = $('.search-result li');
		if(ev.keyCode === 38 || ev.keyCode === 40) {
			if(ev.keyCode === 38 && iSearchIndex > 0) {
				iSearchIndex--;
			} else if(ev.keyCode === 40 && iSearchIndex < aLi.length - 1) {	
				iSearchIndex++;
			}
			oSearchResult1.val(aLi.removeClass('active').eq(iSearchIndex).addClass('active').data('key'));
		oSearchText1.val(aLi.eq(iSearchIndex).text());
		}
	});
	
	
	
	
	
	
	
	
	
	//鼠标划过，变换背景，字体
	
//	$("#a1 li").mouseenter(		
//		function(){console.log("a");
//			$(this).css("background","green");
//			$(this).children().css("color","#fff");
//		}
////		,
////		function(){
////			$(this).CSS("background","#fff");
////			$(this).children().css("color","#000");
////		}
//	);
	
	

	//==================banner图
	var 		
		aBannerLi   = $(".banner-img li"),
		aButA  		= $(".banner-but a"),
		oBtnLeft 	= $(".btnLeft"),
		oBtnRight 	= $(".btnRight"), 
		oTimer  	= null,
		oBannerI 	= $(".banner-img"),
		iIndex		= 0;		
	//自动切换	
	
	autoMove();
	function autoMove(){
		oTimer = setInterval(function(){		
			if(iIndex == aBannerLi.length-1){
				iIndex = 0;
			}else{
				iIndex++;
			}
			bannerMover(iIndex);
		},3000);
	}
	
	//鼠标划过清除定时器
	oBannerI.mouseenter(function(){
		clearInterval(oTimer);
	}).mouseleave(function(){
		autoMove();
	});
	
	//右下角切换	
	aButA.click(function(){
		iIndex = $(this).index();
		bannerMover(iIndex);
		
	});
	//左右切换
	oBtnLeft.click(function(){
		if(iIndex == 0){
			iIndex = aBannerLi.length-1;
		}else{
			iIndex--;
		}
		bannerMover(iIndex);
	});
	oBtnRight.click(function(){
		if(iIndex == aBannerLi.length-1){
			iIndex = 0;
		}else{
			iIndex++;
		}
		bannerMover(iIndex);
	});	

	function bannerMover(i){
		aButA.removeClass("active").eq(i).addClass("active");
		aBannerLi.animate({"opacity":0},500,function(){
			$(this).css('display','none');
		}).eq(i).css('display','block').stop(true).animate({"opacity":1},500);
	}
	//=================公告栏的促销
	var 
		oTimer2		= null,
		oNaticeLeft = $("natice-left"),
		oNaticeUL		=$(".natice-promotion-ul"),
		aNaticeButA = $(".natice-button a");
	
	autoMove2();
	function autoMove2(){
		oTimer2 = setInterval(function(){
			var oLeft		= parseInt(oNaticeUL.css('left'));	
			if(oLeft == 0){
				oNaticeUL.stop(true).animate({'left':-227});
				aNaticeButA.eq(0).removeClass("active").eq(1).addClass("active");
			}else{
				oNaticeUL.stop(true).animate({'left':0});
				aNaticeButA.eq(1).removeClass("active").eq(0).addClass("active");
			}
			
		},2000);
	}

	
	//鼠标划过foot-logo，显示心形
	$(".foot-logo li").mouseover(function(){
		
		$(this).children("img").css({"display":"block"});
	}).mouseout(function(){
		$(this).children("img").css({"display":"none"});
	});
	
	
	//点击二级导航进入详情页
	$(".banner-nav li").click(function(){
		window.open("html/sfeihu-list.html");
	});
	
});


