// globals
draw_button_id = "draw";
save_button_id ="save";

draw_button_text = "Draw";
save_button_text = "Save";

// adds new piece of code to existing saved code, clears the canvas
// and redraws using the newly saved code
function saveCode(context, add_code) {
	var full_code, full_code_html;
	context.clearRect(0,0, 500, 500);
	$("#canvas_code").append(add_code);
	full_code_html = $("#canvas_code").text();
	full_code = full_code_html.replace('<br/>', '');
	eval(full_code);
	$("#input_fields").empty();	
}

// adds label and text field using input_name
function addInputFields (input_name_array) {
	var input_name;
	if (input_name_array.length > 0) {
		for (var i=0; i < input_name_array.length; i++) {
			input_name = input_name_array[i];
			$("#input_fields").append(input_name + ": ");
			$("#input_fields").append('<input type="text" id=' + input_name
				+ '> <br>');					
		}
	}
}
