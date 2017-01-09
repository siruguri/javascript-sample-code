$(document).ready(function() {
	$("div").click(function() {
		current_color = $(".box1").css('background-color');
		$(this).animate({backgroundColor: 'rgb(178, 11, 98, 0.25)'}, 'slow');
	});

	var count_scrolls;
	count_scrolls = 0;
	$(window).scroll(function(event_data){
		console.log('Saw a scroll to position ' + $(window).scrollTop());
	});
});

