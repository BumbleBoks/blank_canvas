// canvas code for drawing line for display
function canvasCodeForLine (x1, y1, x2, y2) {
	var canvas_code = 'context.moveTo(' + x1 + ',' + y1 + ');<br/> \
		context.lineTo(' + x2 + ',' + y2 + ');<br/> \
		context.strokeStyle = "rgba(0,0,0,1)";<br/> \
		context.stroke();<br/>';
		
	return canvas_code;
}

// canvas code for drawing quadratic curve for display
function canvasCodeForQuadraticCurve (x1, y1, cp1x, cp1y, x2, y2) {
	var canvas_code = 'context.moveTo(' + x1 + ',' + y1 + ');<br/> \
		context.quadraticCurveTo(' + cp1x + ',' + cp1y + ',' + 
			x2 + ',' + y2 + ');<br/> \
		context.strokeStyle = "rgba(0,0,0,1)";<br/> \
		context.stroke();<br/>';
		
	return canvas_code;
}

// canvas code for drawing bezier curve for display
function canvasCodeForBezierCurve (x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2) {
	var canvas_code = 'context.moveTo(' + x1 + ',' + y1 + ');<br/> \
	context.bezierCurveTo(' + cp1x + ',' + cp1y + ',' + 
		cp2x + ',' + cp2y + ',' + x2 + ',' + y2 + ');<br/> \
		context.strokeStyle = "rgba(0,0,0,1)";<br/> \
		context.stroke();<br/>';
		
	return canvas_code;
}