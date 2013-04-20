function setupCanvas() {
	var canvas, context, input_fields;
	$("#pick_color").data("color", makeColor(0,0,0,1));
		
	canvas = document.getElementById('canvas_playground');
	if (canvas.getContext) {
		context = canvas.getContext('2d');
		
		input_fields = $("#input_fields");
		
		context.save();
		context.beginPath();
		
		$("#refresh_canvas").click(function() {
			context.restore();
			input_fields.empty();
			context.clearRect(0,0, 500, 500); 
			context.save();
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

		// Arc
		$("#arc").click(function() {
			var input_array = ["x0", "y0", "xc", "yc", "r", "start_deg", "end_deg", "anticlockwise_bool"];
			drawPath("arc", input_array, input_fields, context);
		});
		
		// Rect
		$("#rect").click(function() {
			var input_array = ["x", "y", "width", "height"];
			drawPath("rect", input_array, input_fields, context);
		});
		
		// Canvas code
		$("#my_code").click(function() {
			var input_array = ["code"];
			drawPath("my_code", input_array, input_fields, context);
		});

		// Choosing between stroke and fill options
		$("#stroke_button").click(function() {
			$("#stroke_button").prop('disabled', true);
			$("#fill_button").prop('disabled', false);
		});
		$("#fill_button").click(function() {
			$("#fill_button").prop('disabled', true);
			$("#stroke_button").prop('disabled', false);
		});

		// Picking a color
		$("#pick_color").click(function() {
			popColorPickerPopUp();			
		});
		
	} else {
		alert ("canvas is not supported");
	}
}