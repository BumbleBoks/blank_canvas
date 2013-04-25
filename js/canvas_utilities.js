// helper function to generate code for fiil/stroke and color
function canvasCodeForStrokeFillColor(options) {
	var draw_code;
	var color_string = colorStringFromColorStruct(options["color"]);
	
	if (options["stroke"]) {
		draw_code = 'context.strokeStyle = "' + color_string + '";<br> \
		context.stroke();<br>';		
	} else {
		draw_code = 'context.fillStyle = "' + color_string + '";<br> \
		context.fill();<br>';				
	}
	
	return draw_code;
}

// canvas code for drawing line for display
function canvasCodeForLine (value_array, options) {
	var draw_code = canvasCodeForStrokeFillColor(options);
	
	var canvas_code = 'context.moveTo(' + value_array["x1"] + ',' 
		+ value_array["y1"] + ');<br> \
		context.lineTo(' + value_array["x2"] + ',' 
			+ value_array["y2"] + ');<br>'
			+ draw_code;
			
	return canvas_code;
}

// canvas code for drawing quadratic curve for display
function canvasCodeForQuadraticCurve (value_array, options) {
	var draw_code = canvasCodeForStrokeFillColor(options);
	
	var canvas_code = 'context.moveTo(' + value_array["x1"] + ',' 
		+ value_array["y1"] + ');<br> \
		context.quadraticCurveTo(' + value_array["cp1x"] + ',' 
		+ value_array["cp1y"] + ',' + value_array["x2"] + ',' 
		+ value_array["y2"] + ');<br>'
		+ draw_code;
		
	return canvas_code;
}

// canvas code for drawing bezier curve for display
function canvasCodeForBezierCurve (value_array, options) {
	var draw_code = canvasCodeForStrokeFillColor(options);
	
	var canvas_code = 'context.moveTo(' + value_array["x1"] + ',' 
		+ value_array["y1"] + ');<br> \
		context.bezierCurveTo(' + value_array["cp1x"] + ',' 
		+ value_array["cp1y"] + ',' + value_array["cp2x"] + ',' 
		+ value_array["cp2y"] + ',' + value_array["x2"] + ',' 
		+ value_array["y2"] + ');<br>'
		+ draw_code;
		
	return canvas_code;
}

// canvas code for drawing arc for display
function canvasCodeForArc (value_array, options) {
	var draw_code = canvasCodeForStrokeFillColor(options);	
	
	// TODO: reduce the fraction (angle/180) 
	var start_rad_text = value_array["start_deg"] +"*Math.PI/180";
	var end_rad_text = value_array["end_deg"] +"*Math.PI/180";
	
	
	var canvas_code = 'context.moveTo(' + value_array["x0"] + ',' 
		+ value_array["y0"] + ');<br> \
		context.arc(' + value_array["xc"] + ',' 
		+ value_array["yc"] + ',' + value_array["r"] + ',' 
		+ start_rad_text + ',' + end_rad_text + ',' 
		+ value_array["anticlockwise_bool"] + ');<br>'
		+ draw_code;
		
	return canvas_code;
}

// canvas code for drawing rectangle for display
function canvasCodeForRect (value_array, options) {
	var canvas_code;
	var color_string = colorStringFromColorStruct(options["color"]);
	
	if (options["stroke"]) {
		canvas_code = 'context.strokeStyle = "' + color_string + '";<br> \
		context.strokeRect(' + value_array["x"] + ',' 
		+ value_array["y"] + ',' + value_array["width"] + ','
		+ value_array["height"] + ');<br>';
	} else {
		canvas_code = 'context.fillStyle = "' + color_string + '";<br> \
		context.fillRect(' + value_array["x"] + ',' 
		+ value_array["y"] + ',' + value_array["width"] + ','
		+ value_array["height"] + ');<br>';
	}
		
	return canvas_code;
}

// canvas code for drawing user-input for display
function canvasCodeForCode (value_array, options) {
	var canvas_code;
    canvas_code = value_array["code"].replace(/\n/g, "<br>")		

	return canvas_code;
}