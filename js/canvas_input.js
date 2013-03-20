// Add fields to enter input required for drawing line in canvas
function drawLine (input_fields, context) {
	var input_array = ["x1", "y1", "x2", "y2"];
	var input_value_array, code_html;
		
	setInputFields(input_fields, input_array);
	
	addButtonToInputForm(input_fields, draw_button_id, draw_button_text)
	// button for drawing line on canvas
	$("#"+draw_button_id).click(function() {		
		input_value_array = getInputValues (input_array);

		code_html = canvasCodeForLine(input_value_array);
		codeFromHtmlToJs(context, code_html, 0);
		
		addFieldForSavingCode (input_fields, context, code_html)		
	}); // display button click function
}

// Add fields to enter input required for drawing quadratic curve in canvas
function drawQuadraticCurve (input_fields, context) {
	var input_array = ["x1", "y1", "cp1x", "cp1y", "x2", "y2"];
	var input_value_array, code_html;
		
	setInputFields(input_fields, input_array);
	
	addButtonToInputForm(input_fields, draw_button_id, draw_button_text)
	// button for drawing quadratic curve on canvas
	$("#"+draw_button_id).click(function() {
		input_value_array = getInputValues (input_array);

		code_html = canvasCodeForQuadraticCurve(input_value_array);
		codeFromHtmlToJs(context, code_html, 0);
		
		addFieldForSavingCode (input_fields, context, code_html);
	}); // display button click function
	
}

// Add fields to enter input required for drawing bezier curve in canvas
function drawBezierCurve (input_fields, context) {
	var input_array = ["x1", "y1", "cp1x", "cp1y", "cp2x", "cp2y", "x2", "y2"];
	var input_value_array, code_html;
		
	setInputFields(input_fields, input_array);
	
	addButtonToInputForm(input_fields, draw_button_id, draw_button_text)
	// button for drawing bezier on canvas
	$("#"+draw_button_id).click(function() {		
		input_value_array = getInputValues (input_array);

		code_html = canvasCodeForBezierCurve(input_value_array);
		codeFromHtmlToJs(context, code_html, 0);
		
		addFieldForSavingCode (input_fields, context, code_html);
	}); // display button click function
	
}