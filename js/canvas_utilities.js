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

// canvas code for drawing arc for display
function canvasCodeForArc (value_array) {
	// TODO: reduce the fraction (angle/180) 
	var start_rad_text = value_array["start_deg"] +"*Math.PI/180";
	var end_rad_text = value_array["end_deg"] +"*Math.PI/180";
	
	
	var canvas_code = 'context.arc(' + value_array["x"] + ',' 
		+ value_array["y"] + ',' + value_array["r"] + ',' 
		+ start_rad_text + ',' + end_rad_text + ',' 
		+ value_array["anticlockwise_bool"] + ');<br/> \
		context.stroke();<br/>';
		
	return canvas_code;
}