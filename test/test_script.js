function outputMsgAsLine (msg) {
	var output_msg = msg + "<br>"
	return output_msg;
}


function lineButtonClickTest(output) {
	// console.log("Clicking line link");
	output += outputMsgAsLine("Clicking the link");

	$("#line").click();
	if (($("#x1")[0] === undefined) || ($("#y1")[0] === undefined )
		|| ($("#x2")[0] === undefined) || ($("#y2")[0] === undefined) ) {
			// console.log("Line click failed - no input fields");
			output += outputMsgAsLine("Line click failed - no input fields"); 
			return output;
	} else {
		// console.log("Line clicked produces form input fields");
		output += outputMsgAsLine("Line clicked produces form input fields");
	}
	if (($(":contains('x1')").length === 0) 
		|| ($(":contains('y1')").length === 0) 
		|| ($(":contains('x2')").length === 0) 
		|| ($(":contains('y2')").length === 0)) {
			// console.log("Line click failed - no labels");
			output += outputMsgAsLine("Line click failed - no labels");
			return output;
	} else {
		// console.log("Line clicked produces form input labels");
		output += outputMsgAsLine("Line clicked produces form input labels");
	} 
	
	$("#x1").val("100");
	$("#y1").val("200");
	$("#x2").val("400");
	$("#y2").val("300");
	
	$("#draw").click();
	$("#save").click();
	
	var htmlText = $("#canvas_code").text();
	var moveToText = "moveTo(100,200);"
	var lineToText = "lineTo(400,300);"
	
	if (htmlText.indexOf(moveToText) == -1) {
		// console.log("correct code for drawing line is not generated");
		output += "correct code for drawing line is not generated <br>"
		return output
	}
	else {
		// console.log("code for drawing line is generated");
		output += "code for drawing line is generated <br>"
	}		
	
	return output;
	
}

function runTests() {
	var output ="";
	console.log("Inside testscript");
	output = lineButtonClickTest(output);	
	
	$("body").empty()
	$("body").append("<h1> Test Output")
	
	$("body").append("<p id='testresults'></p>")
	$("#testresults").append(output);
}	
