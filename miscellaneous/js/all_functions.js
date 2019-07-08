var s = [23, 65, 98, 5];

// Don't forget to consult the doc
// There are some optional arguments too
Array.prototype.myMap = function(fn, context){
  var subject = this;
  var keys = Object.keys(subject);
  result = new Array(subject.length);

  keys.forEach(function(key) {
    if (key >= 0 && subject.hasOwnProperty(key)) {
      result[key] = fn.call(context, subject[key], parseInt(key), subject);
    }
  }, this);

  return result;
}

var new_s = s.myMap(function(item){
   return item * 2
}.bind(window));

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

