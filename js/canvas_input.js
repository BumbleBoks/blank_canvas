// function to draw a path on canvas
function drawPath(pathname, input_array, input_fields, context)
{
	var input_value_array, code_html;
	var options = [];
		
	// set input form	
	setInputFields(input_fields, input_array);
	addButtonToInputForm(input_fields, draw_button_id, draw_button_text)
	
	// button for drawing path on canvas
	$("#"+draw_button_id).click(function() {		
		input_value_array = getInputValues (input_array);
		
		// stroke button is disabled after it gets selected 
		options["stroke"] = $("#stroke_button").prop('disabled');
		
		// check for supported path names
		switch (pathname) {
		case "line":
			code_html = canvasCodeForLine(input_value_array, options);
			break;
		
		case "quadratic_curve":
			code_html = canvasCodeForQuadraticCurve(input_value_array, options);
			break;
		
		case "bezier_curve":
			code_html = canvasCodeForBezierCurve(input_value_array, options);
			break;
			
		case "arc":
			code_html = canvasCodeForArc(input_value_array, options);
			break;
			
		case "rect":
			code_html = canvasCodeForRect(input_value_array, options);
			break;
			
		default:
			console.log("path name not supported");
			break;

		}

		codeFromHtmlToJs(context, code_html, 0);
		
		addFieldForSavingCode (input_fields, context, code_html)		
	}); // display button click function
	
}