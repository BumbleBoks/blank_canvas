function addUserInteractionToCanvas(canvas) {
	canvas_origin_x = canvas.css("left").split("px")[0];
	canvas_origin_y = canvas.css("top").split("px")[0];
	canvas.mousemove (function () { 
		event.preventDefault();
		canvas.trigger('mouseover');
	});
	
	canvas.mouseover (function () {
		x = event.x - canvas_origin_x;
		y = event.y - canvas_origin_y;
		canvas.attr("title", "x:"+x+",y:"+y);
	});
		
}