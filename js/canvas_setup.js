function setupCanvas() {
	var canvas, context, input_fields;
	
	canvas = document.getElementById('canvas_playground');
	if (canvas.getContext) {
		context = canvas.getContext('2d');
		
		input_fields = $("#input_fields");
		
		context.beginPath();
		
		$("#refresh_canvas").click(function() {
			input_fields.empty();
			context.clearRect(0,0, 500, 500); 
			context.beginPath();			
			$("#canvas_code").empty();
			$("#canvas_code").css("display", "inline");
		});
		
		// Line
		$("#line").click(function() {
			var input_array = ["x1", "y1", "x2", "y2"];
			drawPath("line", input_array, input_fields, context);
		});

		// Quadratic curve
		$("#quadratic_curve").click(function() {
			var input_array = ["x1", "y1", "cp1x", "cp1y", "x2", "y2"];
			drawPath("quadratic_curve", input_array, input_fields, context);
		});
		
		// Bezier curve
		$("#bezier_curve").click(function() {
			var input_array = ["x1", "y1", "cp1x", "cp1y", "cp2x", "cp2y", "x2", "y2"];
			drawPath("bezier_curve", input_array, input_fields, context);
		});

		// Bezier curve
		$("#arc").click(function() {
			var input_array = ["x", "y", "r", "start_deg", "end_deg", "anticlockwise_bool"];
			drawPath("arc", input_array, input_fields, context);
		});

	} else {
		alert ("canvas is not supported");
	}
}