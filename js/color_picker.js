// globals
pick_color_text = "Pick a color";
use_color_text = "Use this color"

// color struct
var makeColor = function(r, g, b, a) {
	var color = {
		r: r,
		g: g,
		b: b,
		a: a
	};
	return color;
}

// makes a string rgb(r,g,b) 
function colorStringFromColorStruct (color) {
	var color_string = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
	return color_string;
}

// set the user picked color 
function setColorSwatch (swatch, color) {
	var trial_color = colorStringFromColorStruct(color);
	swatch.css("background-color", trial_color);
	swatch.css("opacity", color.a);	
}

// closes the color popup window and resets the text of color picker button
function closeColorPickerPopUp (color_picker_popup, color_button) {
	color_picker_popup.css("display", "none");
	color_button.text(pick_color_text);	
}

//  popup to select a color for drawing on canvas
function popColorPickerPopUp(current_color) {
	var color_picker_popup = $("#color_picker_popup");
	var color_button = $("#pick_color");
	var color_swatch = $("#color_sample");
	
	// when popup is not open
	if ( color_button.text() == pick_color_text)
	{
		// show color picker popup and change button's title
		color_picker_popup.css("display", "block");
		color_button.text(use_color_text);
		
		// show current color
		$("#R").val(current_color.r);
		$("#G").val(current_color.g);
		$("#B").val(current_color.b);
		$("#A").val(current_color.a);				
		setColorSwatch(color_swatch, current_color);	
		
		// when input for color changes
		$("#R, #G, #B, #A").keyup(function() {
			var trial_color = makeColor($("#R").val(), $("#G").val(), 
				$("#B").val(), $("#A").val());
			setColorSwatch(color_swatch, trial_color);
		});
		
		// clicking x closes popup without saving color 
		$("#xbutton").click(function() {
			closeColorPickerPopUp(color_picker_popup, color_button);
			return current_color;
		});
		
	}
	// when popup is open 
	else if ( color_button.text() == use_color_text)
	{
		// close popup, change button text and set color
		closeColorPickerPopUp(color_picker_popup, color_button);
		current_color = makeColor($("#R").val(), $("#G").val(), $("#B").val(), $("#A").val());
	}
	
	return current_color;
}