$(function(){
	// 메뉴 슬라이드
	$(".me").mouseenter(function(){
		$(this).next().slideDown(500);
	});
	$(".m>li").mouseleave(function(){
		$(".me").next().slideUp(500);
	});
	
	// 이미지 슬라이드
	var i=0;
	
	function slide(){
		i++;
		if(i>$(".imgbanner li:last").index()){
			i=0;
		}
		$(".imgbanner li").eq(i).fadeIn(1000);
		$(".imgbanner li").eq(i-1).fadeOut(1000);
		console.log($(".imgbanner li").eq(i), $(".imgbanner li").eq(i-1))
	}
	setInterval(slide, 3000);
	
	// box 마우스 오버
	$(".box .a3 .sub a").mouseenter(function(){
		$(this).animate({color:"#f26522", fontWeight:"bold", fontSize:"18px" })
	});
	$(".box .a3 .sub a").mouseleave(function(){
		$(this).animate({color:"#000", fontWeight:"normal", fontSize:"16px"})
	});

	$(".box .a4").mouseenter(function(){
		$(this).find("span").fadeIn();
	});
	$(".box .a4").mouseleave(function(){
		$(this).find("span").fadeOut();
	});
	
	// sns 마우스오버
	$(".sns li:nth-child(2) img").hover(function(){ 
        $(this).attr('src','images/sns1-1.png');
    }, function(){ 
        $(this).attr('src','images/sns1.png');
    }); 
	
	$(".sns li:nth-child(3) img").hover(function(){ 
        $(this).attr('src','images/sns2-2.png');
    }, function(){ 
        $(this).attr('src','images/sns2.png');
    }); 
	
	$(".sns li:nth-child(4) img").hover(function(){ 
        $(this).attr('src','images/sns3-3.png');
    }, function(){ 
        $(this).attr('src','images/sns3.png');
    }); 
});