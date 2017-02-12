$(document).ready(function(){
var lock = 0;
$("#date1").click(function(){
if (lock == 0) {
			$("#date1").css("background-image", "none");
			$("#block-vidvig1").slideToggle("slow");
			lock = 1;
			}
			else {
			$("#block-vidvig1").slideToggle("slow", function (){
				$("#date1").css('background-image','url("../ziptrip1/images/innertriangle.png")');
			lock = 0;
			});
			}
			});
	//анимация при нажатии на добавить обратный маршрут
});