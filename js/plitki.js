$(document).ready(function(){
$(".plitka").mouseover(function(){
		$(this).stop().animate({width:'312px'},{queue:false, duration:600, easing: 'easeOutQuad'})
	});
	$(".plitka").mouseout(function(){
		$(this).stop().animate({width:'152px'},{queue:false, duration:600, easing: 'easeOutQuad'})
	});
});