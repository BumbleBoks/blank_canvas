// canvas code for drawing line for display
function canvasCodeForLine (value_array) {
	var canvas_code = 'context.moveTo(' + value_array["x1"] + ',' 
		+ value_array["y1"] + ');<br/> \
		context.lineTo(' + value_array["x2"] + ',' 
			+ value_array["y2"] + ');<br/> \
		context.strokeStyle = "rgba(0,0,0,1)";<br/> \
		context.stroke();<br/>';
		
	return canvas_code;
}

// canvas code for drawing quadratic curve for display
function canvasCodeForQuadraticCurve (value_array) {
	var canvas_code = 'context.moveTo(' + value_array["x1"] + ',' 
		+ value_array["y1"] + ');<br/> \
		context.quadraticCurveTo(' + value_array["cp1x"] + ',' 
		+ value_array["cp1y"] + ',' + value_array["x2"] + ',' 
		+ value_array["y2"] + ');<br/> \
		context.strokeStyle = "rgba(0,0,0,1)";<br/> \
		context.stroke();<br/>';
		
	return canvas_code;
}

// canvas code for drawing bezier curve for display
function canvasCodeForBezierCurve (value_array) {
	var canvas_code = 'context.moveTo(' + value_array["x1"] + ',' 
		+ value_array["y1"] + ');<br/> \
		context.bezierCurveTo(' + value_array["cp1x"] + ',' 
		+ value_array["cp1y"] + ',' + value_array["cp2x"] + ',' 
		+ value_array["cp2y"] + ',' + value_array["x2"] + ',' 
		+ value_array["y2"] + ');<br/> \
		context.strokeStyle = "rgba(0,0,0,1)";<br/> \
		context.stroke();<br/>';
		
	return canvas_code;
}