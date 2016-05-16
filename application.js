$(document).ready(function(){

	setInterval(function(){
		$("#needle").each(function(){
			var a = Math.floor(Math.random() * 180 + 1);
			$(this).css(
				'transform', 'rotate(' + a + 'deg)');
		});



	}, 1000);
});