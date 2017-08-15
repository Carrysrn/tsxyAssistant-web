$(function() {
	//导航条切换
	$(".top ul li").each(function(index) {
		$(this).click(function() {
			$("li").removeClass("active");
			$("li").eq(index).addClass("active");
		});
	});

	//悬浮切换图片

	$("#xia").mouseover(function() {
		$(this).find("img").attr("src", "img/苹果-1.png");
	}).mouseout(function() {
		$(this).find("img").attr("src", "img/苹果.png");
	});
	$("#zai").mouseover(function() {
		$(this).find("img").attr("src", "img/安卓-1.png");
	}).mouseout(function() {
		$(this).find("img").attr("src", "img/安卓.png");
	});




})