// canvas code for drawing line for display
function canvasCodeForLine (value_array, options) {
	var draw_code;
	
	if (options["stroke"]) {
		draw_code = 'context.strokeStyle = "rgba(0,0,0,1)";<br/> \
		context.stroke();<br/>';		
	} else {
		draw_code = 'context.fillStyle = "rgba(0,0,0,1)";<br/> \
		context.fill();<br/>';				
	}
	
	var canvas_code = 'context.moveTo(' + value_array["x1"] + ',' 
		+ value_array["y1"] + ');<br/> \
		context.lineTo(' + value_array["x2"] + ',' 
			+ value_array["y2"] + ');<br/>'
			+ draw_code;
			
	return canvas_code;
}

// canvas code for drawing quadratic curve for display
function canvasCodeForQuadraticCurve (value_array, options) {
	var draw_code;
	
	if (options["stroke"]) {
		draw_code = 'context.strokeStyle = "rgba(0,0,0,1)";<br/> \
		context.stroke();<br/>';		
	} else {
		draw_code = 'context.fillStyle = "rgba(0,0,0,1)";<br/> \
		context.fill();<br/>';				
	}
	
	var canvas_code = 'context.moveTo(' + value_array["x1"] + ',' 
		+ value_array["y1"] + ');<br/> \
		context.quadraticCurveTo(' + value_array["cp1x"] + ',' 
		+ value_array["cp1y"] + ',' + value_array["x2"] + ',' 
		+ value_array["y2"] + ');<br/>'
		+ draw_code;
		
	return canvas_code;
}

// canvas code for drawing bezier curve for display
function canvasCodeForBezierCurve (value_array, options) {
	var draw_code;
	
	if (options["stroke"]) {
		draw_code = 'context.strokeStyle = "rgba(0,0,0,1)";<br/> \
		context.stroke();<br/>';		
	} else {
		draw_code = 'context.fillStyle = "rgba(0,0,0,1)";<br/> \
		context.fill();<br/>';				
	}
	
	var canvas_code = 'context.moveTo(' + value_array["x1"] + ',' 
		+ value_array["y1"] + ');<br/> \
		context.bezierCurveTo(' + value_array["cp1x"] + ',' 
		+ value_array["cp1y"] + ',' + value_array["cp2x"] + ',' 
		+ value_array["cp2y"] + ',' + value_array["x2"] + ',' 
		+ value_array["y2"] + ');<br/>'
		+ draw_code;
		
	return canvas_code;
}

// canvas code for drawing arc for display
function canvasCodeForArc (value_array, options) {
	var draw_code;
	
	if (options["stroke"]) {
		draw_code = 'context.strokeStyle = "rgba(0,0,0,1)";<br/> \
		context.stroke();<br/>';		
	} else {
		draw_code = 'context.fillStyle = "rgba(0,0,0,1)";<br/> \
		context.fill();<br/>';				
	}
	
	
	// TODO: reduce the fraction (angle/180) 
	var start_rad_text = value_array["start_deg"] +"*Math.PI/180";
	var end_rad_text = value_array["end_deg"] +"*Math.PI/180";
	
	
	var canvas_code = 'context.arc(' + value_array["x"] + ',' 
		+ value_array["y"] + ',' + value_array["r"] + ',' 
		+ start_rad_text + ',' + end_rad_text + ',' 
		+ value_array["anticlockwise_bool"] + ');<br/>'
		+ draw_code;
		
	return canvas_code;
}

// canvas code for drawing rectangle for display
function canvasCodeForRect (value_array, options) {
	var canvas_code;
	
	if (options["stroke"]) {
		canvas_code = 'context.strokeStyle = "rgba(0,0,0,1)";<br/> \
		context.strokeRect(' + value_array["x"] + ',' 
		+ value_array["y"] + ',' + value_array["width"] + ','
		+ value_array["height"] + ');<br/>';
	} else {
		canvas_code = 'context.fillStyle = "rgba(0,0,0,1)";<br/> \
		context.fillRect(' + value_array["x"] + ',' 
		+ value_array["y"] + ',' + value_array["width"] + ','
		+ value_array["height"] + ');<br/>';
	}
		
	return canvas_code;
}