function setupCanvas() {
	var canvas, context;
	
	canvas = document.getElementById('canvas_playground');
	if (canvas.getContext) {
		context = canvas.getContext('2d');
		context.beginPath();
		
		$("#line").click(function() {
			addLineForm(context);
		});
		$("#arc").click(function() {
			drawArc();
		});
		$("#rectangle").click(function() {
			drawRectangle();
		});
		$("#quadratic_curve").click(function() {
			drawQuadraticCurve();
		});
		$("#bezier_curve").click(function() {
			drawBezierCurve();
		});
		
		$("#code_button").click(function() {
			$("#canvas_code").css("display", "block");
		});
		
	} else {
		alert ("canvas not supported");
	}
}