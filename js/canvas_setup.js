function setupCanvas() {
	var canvas, context, input_fields;
	
	canvas = document.getElementById('canvas_playground');
	if (canvas.getContext) {
		context = canvas.getContext('2d');
		
		input_fields = $("#input_fields");
		
		context.beginPath();
		
		// Line
		$("#line").click(function() {
			drawLine(input_fields, context);
		});

		// Quadratic curve
		$("#quadratic_curve").click(function() {
			drawQuadraticCurve(input_fields, context);
		});
		
		// Bezier curve
		$("#bezier_curve").click(function() {
			drawBezierCurve(input_fields, context);
		});
	} else {
		alert ("canvas is not supported");
	}
}