// globals
draw_button_id = "draw";
save_button_id ="save";

draw_button_text = "Draw";
save_button_text = "Save";

// Convert canvas code from html to js and draw
function codeFromHtmlToJs(context, html_display_code, save_flag) {
	var js_code = "";
	if (save_flag == 1) {
		js_code = "context.clearRect(0,0, 500, 500);" 
	}
	js_code += html_display_code.replace(/<br>/g, '');
	eval(js_code);	
}
// adds new piece of code to existing saved code, clears the canvas
// and redraws using the newly saved code
function saveCode(context, add_code) {
	var full_code_html, code_field;
	
	code_field = $("#canvas_code");
	
	code_field.append(add_code);
	full_code_html = code_field.text();
	codeFromHtmlToJs(context, full_code_html, 1);
	code_field.css("display", "inline");
}

// adds label and text field using input_name
function setInputFields (input_fields, input_name_array) {
	var input_name;
	var code_field = $("#canvas_code");
	
	// clean any fields that are present
	input_fields.empty();	
	
	code_field.css("display", "none");
	
	if (input_name_array.length > 0) {
		for (var i=0; i < input_name_array.length; i++) {
			input_name = input_name_array[i];
			
			if (input_name === "code") {
				input_fields.append(input_name + "\n(use context for canvas context)<br>");
				input_fields.append('<textarea id=' + input_name + 
					' rows="20" cols="50"></textarea><br>')
			} else {
				input_fields.append(input_name + ": ");
				input_fields.append('<input type="text" id=' + input_name
						+ '> <br>');									
			}
			
		}
	}
}

// Adds a button with given id and text
function addButtonToInputForm(input_fields, button_id, button_text) {
	input_fields.append('<button id = ' + button_id
		+ '>' + button_text + '</button');	
}


// Get input values from input fields
function getInputValues (input_name_array) {
	var input_values_array = [];
	
	if (input_name_array.length > 0) {	
		for (var i=0; i < input_name_array.length; i++) {
			input_values_array[input_name_array[i]] = 
				$("#"+input_name_array[i]).val();
		}
	}
	
	return input_values_array;
}

// Add button to save code for the latest addition (if there isn't one)
// Save the new addition to the code
function addFieldForSavingCode (input_fields, context,code_html) {
	if ($("#"+save_button_id).length != 0 )
	{
		$("#"+save_button_id).remove();
	}
	 
	addButtonToInputForm(input_fields, save_button_id, save_button_text)
	$("#"+save_button_id).click(function () {
		saveCode(context, code_html)
		input_fields.empty();
	});	// save button click function		
			
}