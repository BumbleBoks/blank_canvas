// Add fields to enter input required for drawing line in canvas
function addLineForm (input_fields, context) {
	var input_array = ["x1", "y1", "x2", "y2"];
		
	setInputFields(input_fields, input_array);
	
	addButtonToInputForm(input_fields, draw_button_id, draw_button_text)
	// button for drawing line on canvas
	$("#"+draw_button_id).click(function() {		
		var x1, y1, x2, y2, code_html;
		[x1, y1, x2, y2] = getInputValues (input_array);

		code_html = canvasCodeForLine(x1, y1, x2, y2);
		codeFromHtmlToJs(context, code_html);
		
		// add button to save code for the latest addition (if there isn't one)
		// save the new addition to the code
		addFieldForSavingCode (input_fields, context, code_html)		
	}); // display button click function
}

// Add fields to enter input required for drawing quadratic curve in canvas
function drawQuadraticCurve (input_fields, context) {
	var input_array = ["x1", "y1", "cp1x", "cp1y", "x2", "y2"];
		
	setInputFields(input_fields, input_array);
	
	addButtonToInputForm(input_fields, draw_button_id, draw_button_text)
	// button for drawing line on canvas
	$("#"+draw_button_id).click(function() {		
		var x1, y1, cp1x, cp1y, x2, y2, code_html;
		[x1, y1, cp1x, cp1y, x2, y2] = getInputValues (input_array);

		code_html = canvasCodeForQuadraticCurve(x1, y1, cp1x, cp1y, x2, y2);
		codeFromHtmlToJs(context, code_html);
		
		addFieldForSavingCode (input_fields, context, code_html);
	}); // display button click function
	
}

// Add fields to enter input required for drawing bezier curve in canvas
function drawBezierCurve (input_fields, context) {
	var input_array = ["x1", "y1", "cp1x", "cp1y", "cp2x", "cp2y", "x2", "y2"];
		
	setInputFields(input_fields, input_array);
	
	addButtonToInputForm(input_fields, draw_button_id, draw_button_text)
	// button for drawing line on canvas
	$("#"+draw_button_id).click(function() {		
		var x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2, code_html;
		[x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2] = getInputValues (input_array);

		code_html = canvasCodeForBezierCurve(x1, y1, 
			cp1x, cp1y, cp2x, cp2y, x2, y2);
		codeFromHtmlToJs(context, code_html);
		
		addFieldForSavingCode (input_fields, context, code_html);
	}); // display button click function
	
}