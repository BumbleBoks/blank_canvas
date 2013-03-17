// add fields to enter input required for drawing line in canvas
function addLineForm (context) {
	var input_array = ["x1", "y1", "x2", "y2"];
	
	// clean any fields that are present
	$("#input_fields").empty();	
	
	addInputFields(input_array);
	$("#input_fields").append('<button id = ' + draw_button_id
		+ '>' + draw_button_text + '</button');
	
	// button for drawing line on canvas
	$("#"+draw_button_id).click(function() {		
		var x1, x2, x3, x4;
		x1 =parseInt($("#x1").val());
		y1 =parseInt($("#y1").val());
		x2 =parseInt($("#x2").val());
		y2 =parseInt($("#y2").val());
		drawLine(context, x1, y1, x2, y2);
		
		// add button to save code for the latest addition (if there isn't one)
		// save the new addition to the code
		if ($("#"+save_button_id).length === 0 ) {
			$("#input_fields").append('<button id=' + save_button_id + 
				'>' + save_button_text + '</button');
			$("#"+save_button_id).click(function () {
				var code_to_add = ' context.moveTo(' + x1 + ',' + y1 + ');<br/> \
					context.lineTo('+ x2 + ',' + y2 + ');<br/> \
					context.strokeStyle = "rgba(0,200,0,1)";<br/> \
					context.stroke();<br/>';
				saveCode(context, code_to_add)
			});	// save button click function		
		}
		
	}); // display button click function
}

function drawArc () {
	alert("inside draw arc")
}

function drawRectangle () {
	alert("inside draw rectangle")
}

function drawQuadraticCurve () {
	alert("inside draw quadratic curve")
}

function drawBezierCurve () {
	alert("inside draw bezier curve")
}