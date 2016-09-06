$(function(){
	$(".picture-list li").mouseover(function(){		
		var iIndex = $(this).index()+1;	
		$(".picture img").attr({"src":("../img/d"+iIndex+".jpg")});
		$(".zoomdiv img").attr({"src":("../img/m"+iIndex+".jpg")});		
	});
	
	var 		
		fdj		 = $(".movediv"),		
		oPicture = $(".picture"),		
		oMImg    = $(".zoomdiv img"),		
		oZoomDiv = $(".zoomdiv");
		

	rata = oPicture.width()/oMImg.width();    //大图与小图的比例
	oPicture.mouseover(function(){
		fdj.css("display","block");
		oZoomDiv.css("display","block");
	});
	oPicture.mouseout(function(){
		fdj.css("display","none");
		oZoomDiv.css("display","none");
	});	
	
	//移动
	oPicture.mousemove(function(e){	
    	var 
    		xmax=$(".picture").width()-$(".movediv").width(),
	 		ymax=$(".picture").height()-$(".movediv").height();
    		l = e.pageX-$(this).offset().left-$(".movediv").width()/2,
    		t = e.pageY-$(this).offset().top-$(".movediv").height()/2;
		if(l<0){
			l=0;
		}else if(l>xmax){
			l=xmax;
		}
		if(t<0){
			t=0;
		}else if(t>ymax)
		{
			t=ymax;
		}
		$(".movediv").css({
			left:l,
			top:t
		});
		oMImg.css({
			top:-parseInt($(".movediv").css('top'))/rata+'px',
			left:-parseInt($(".movediv").css('left'))/rata+'px'
		});

	});			
	
	//=================点击加减改变数量
	$(".quantity-redu").click(function(){
		var oValue = $(".quantity-text").val();
		if(oValue > 1){
			oValue--;
			$(".quantity-text").val(oValue);
		}else{
			alert("商品数量最少为1");
		}
		
	});
	$(".quantity-plus").click(function(){
		var oValue = $(".quantity-text").val();
		if(oValue < 10){
			oValue++;
			$(".quantity-text").val(oValue);
		}else{
			alert("商品数量最多为10");
		}		
	});
	
	
	//======================点击加入购物车
	$(".btn-addcart").click(function(){
		$.cookie("quantity",$(".quantity-text").val());
		alert("商品成功加入购物车");
//		window.open("sfeihu-shopcart.html");
	});
	
	//======================商品参数和评论
	
	$(".comment-title li").click(function(e){
		var iIndex = $(this).index();
		$(".comment-title li").removeClass("active");
		$(this).addClass("active");
		$(".comment-content li").css("display","none").eq(iIndex).css("display","block");
	});	
	
	
	//===================评论
	
	$(function() {
		var
			oPcFirst = $('.pc-h'),
			oPage 	 = 0,
			iLen 	 = $('.con .list'),
			oStar	 = $('.box-star'),
			oDay 	 = $('.box-day'),
			oTime	 = $('.box-time'),
			oColor	 = $('.box-color'),
			oTips 	 = $('.p-tabs span'),
			oContent = $('.p-comment'),
			oUserUrl = $('.column img'),
			oUserLevelName = $('.column dd');
		//console.log(oUserUrl.eq(0).src = )
		oPcFirst.css('display', 'none');

		//点击换页
		var oBtn = $('.pc a');
		var oNumberB = $('.bt');
		var aSpan = true;
		var oClickNum = 1;
		var oThis = oBtn.eq(1);
		oBtn.on('click', function() {
			var j = 1;
			oClickNum = $(this).text();
			oThis = $(this);
			oClickEv(oClickNum, oThis);

			function oClickEv(oClickNum, oThis) {
				if (oClickNum >= 4) {
					oBtn.eq(4).text(oClickNum);
					oBtn.eq(3).text(oClickNum - 1);
					oBtn.eq(2).text(oClickNum - 2);
					oBtn.eq(5).text(Number(oClickNum) + 1);
					oBtn.eq(6).text(Number(oClickNum) + 2);
					oBtn.removeClass('active');
					oBtn.eq(4).addClass('active');
				} else {
					oBtn.removeClass('active');
					oThis.addClass('active');
				}
				if (oThis.index() == 1) {
					$('.bt').each(function(i){
						$(this).text(j);
						j++;
					})
					oPcFirst.css('display', 'none');
				} else {				
					oPcFirst.css('display', 'inline-block');
				};

				if (oBtn.eq(2).text() != 2 && aSpan == true) {
					oBtn.eq(1).after('<span> …<span>');
					aSpan = false;
				} else if (oBtn.eq(2).text() == 2 && aSpan === false) {
					$('.pc span').detach();
					aSpan = true;
				}
			}
			$.ajax({
				type: "get",
				url: "http://sclub.jd.com/productpage/p-10341696322-s-0-t-5-p-" + oClickNum + ".html",
				jsonpCallback: "fetchJSON_comment98vv6",
				dataType: 'jsonp',
				async: true,
				success: function(data) {					
					iLen.each(function(i) {
						iTip = data.comments[i];
						aStar = iTip.score;
						var
							aDay = iTip.days,
							aTime = iTip.referenceTime,
							aColor = iTip.productColor,
							aSize = iTip.productSize,
							//var aTips    = iTip.commentTags[0].name,
							aContent = iTip.content,
							aUserUrl = iTip.userImageUrl,
							aUserLevelName = iTip.userLevelName,
							aUserProvince = iTip.userProvince;
						//console.log(iTip.commentTags)
						oDay.eq(i).text('收货' + aDay + '天后评论');
						oTime.eq(i).text(aTime);
						oColor.eq(i).text(aColor + " " + aSize);
						oContent.eq(i).text(aContent);
						//console.log('http://'+aUserUrl)
						oUserUrl.eq(i).attr({
							src: 'http://' + aUserUrl
						});
						oUserLevelName.eq(i).text(aUserLevelName + " " + aUserProvince);
						//星星等级设定
						//console.log(oStar)
						oStar.eq(i).css('background-position', -(5 - aStar) * 17 + 'px' + ' ' + 'top');
					});
				}
			});
		});

	});
	

});