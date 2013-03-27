function outputMsgAsLine (msg) {
	var output_msg = msg + "<br>"
	return output_msg;
}

function setTestCase(output)
{
	$("#refresh_canvas").click();
	output += outputMsgAsLine(" ");
	return output
}

function enterLineForm(x1, y1, x2, y2)
{
	$("#x1").val(x1);
	$("#y1").val(y1);
	$("#x2").val(x2);
	$("#y2").val(y2);	
}

function enterQuadraticCurveForm (x1, y1, cp1x, cp1y, x2, y2) {
	$("#x1").val(x1);
	$("#y1").val(y1);
	$("#cp1x").val(cp1x);
	$("#cp1y").val(cp1y);
	$("#x2").val(x2);
	$("#y2").val(y2);
}

function enterBezierCurveForm (x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2) {
	$("#x1").val(x1);
	$("#y1").val(y1);
	$("#cp1x").val(cp1x);
	$("#cp1y").val(cp1y);
	$("#cp2x").val(cp2x);
	$("#cp2y").val(cp2y);
	$("#x2").val(x2);
	$("#y2").val(y2);
}

function enterArcForm (x, y, r, start_deg, end_deg, anticlockwise_bool) {
	$("#x").val(x);
	$("#y").val(y);
	$("#r").val(r);
	$("#start_deg").val(start_deg);
	$("#end_deg").val(end_deg);
	$("#anticlockwise_bool").val(anticlockwise_bool);
}

function enterRectForm (x, y, width, height) {
	$("#x").val(x);
	$("#y").val(y);
	$("#width").val(width);
	$("#height").val(height);
}

function lineButtonClickTest(output) {
	output = setTestCase(output);
	output += outputMsgAsLine("Clicking line button");

	$("#line").click();
	if (($("#x1")[0] === undefined) || ($("#y1")[0] === undefined )
		|| ($("#x2")[0] === undefined) || ($("#y2")[0] === undefined) ) {
			output += outputMsgAsLine("TEST FAILED: Line click failed - no input fields"); 
			return output;
	} else {
		output += outputMsgAsLine("Line click produces form input fields");
	}
	if (($(":contains('x1')").length === 0) 
		|| ($(":contains('y1')").length === 0) 
		|| ($(":contains('x2')").length === 0) 
		|| ($(":contains('y2')").length === 0)) {
			output += outputMsgAsLine("TEST FAILED: Line click failed - no labels");
			return output;
	} else {
		output += outputMsgAsLine("Line click produces form input labels");
	} 
	
	enterLineForm(100, 200, 400, 300);
	
	$("#draw").click();
	$("#save").click();
	
	var htmlText = $("#canvas_code").text();
	var moveToText = "moveTo(100,200);"
	var lineToText = "lineTo(400,300);"
	
	if (htmlText.indexOf(moveToText) == -1
		|| htmlText.indexOf(lineToText) == -1) {
		output += outputMsgAsLine("TEST FAILED: correct code for drawing line is not generated")
		return output
	}
	else {
		output += outputMsgAsLine("code for drawing line is generated")
	}		
	
	return output;
	
}

function quadraticCurveButtonClickTest(output) {
	output = setTestCase(output);
	output += outputMsgAsLine("Clicking quadratic curve button");

	$("#quadratic_curve").click();
	if (($("#x1")[0] === undefined) || ($("#y1")[0] === undefined )
		|| ($("#cp1x")[0] === undefined) || ($("#cp1y")[0] === undefined) 
		|| ($("#x2")[0] === undefined) || ($("#y2")[0] === undefined) ) {
			output += outputMsgAsLine("TEST FAILED: Quadratic curve click failed - no input fields"); 
			return output;
	} else {
		output += outputMsgAsLine("Quadratic curve click produces form input fields");
	}
	if (($(":contains('x1')").length === 0) 
		|| ($(":contains('y1')").length === 0) 
		|| ($(":contains('cp1x')").length === 0) 
		|| ($(":contains('cp1y')").length === 0) 
		|| ($(":contains('x2')").length === 0) 
		|| ($(":contains('y2')").length === 0)) {
			output += outputMsgAsLine("TEST FAILED: Quadratic curve click failed - no labels");
			return output;
	} else {
		output += outputMsgAsLine("Quadratic curve click produces form input labels");
	} 
	
	enterQuadraticCurveForm(100, 150, 125, 200, 400, 300);
	
	$("#draw").click();
	$("#save").click();
	
	var htmlText = $("#canvas_code").text();
	var moveToText = "moveTo(100,150);"
	var quadraticCurveToText = "quadraticCurveTo(125,200,400,300);"
	
	if (htmlText.indexOf(moveToText) == -1
		|| htmlText.indexOf(quadraticCurveToText) == -1) {
		output += outputMsgAsLine("TEST FAILED: correct code for drawing quadratic curve is not generated")
		return output
	}
	else {
		output += outputMsgAsLine("code for drawing quadratic curve is generated")
	}		
	
	return output;
	
}

function bezierCurveButtonClickTest(output) {
	output = setTestCase(output);
	output += outputMsgAsLine("Clicking bezier curve button");

	$("#bezier_curve").click();
	if (($("#x1")[0] === undefined) || ($("#y1")[0] === undefined )
		|| ($("#cp1x")[0] === undefined) || ($("#cp1y")[0] === undefined) 
		|| ($("#cp2x")[0] === undefined) || ($("#cp2y")[0] === undefined) 
		|| ($("#x2")[0] === undefined) || ($("#y2")[0] === undefined) ) {
			output += outputMsgAsLine("TEST FAILED: Bezier curve click failed - no input fields"); 
			return output;
	} else {
		output += outputMsgAsLine("Bezier curve click produces form input fields");
	}
	if (($(":contains('x1')").length === 0) 
		|| ($(":contains('y1')").length === 0) 
		|| ($(":contains('cp1x')").length === 0) 
		|| ($(":contains('cp1y')").length === 0) 
		|| ($(":contains('cp2x')").length === 0) 
		|| ($(":contains('cp2y')").length === 0) 
		|| ($(":contains('x2')").length === 0) 
		|| ($(":contains('y2')").length === 0)) {
			output += outputMsgAsLine("TEST FAILED: Bezier curve click failed - no labels");
			return output;
	} else {
		output += outputMsgAsLine("Bezier curve click produces form input labels");
	} 
	
	enterBezierCurveForm(0, 100, 175, 150, 125, 200, 250, 300);
	
	$("#draw").click();
	$("#save").click();
	
	var htmlText = $("#canvas_code").text();
	var moveToText = "moveTo(0,100);"
	var quadraticCurveToText = "bezierCurveTo(175,150,125,200,250,300);"
	
	if (htmlText.indexOf(moveToText) == -1
		|| htmlText.indexOf(quadraticCurveToText) == -1) {
		output += outputMsgAsLine("TEST FAILED: correct code for drawing bezier curve is not generated")
		return output
	}
	else {
		output += outputMsgAsLine("code for drawing bezier curve is generated")
	}		
	
	return output;
	
}

function arcButtonClickTest(output) {
	output = setTestCase(output);
	output += outputMsgAsLine("Clicking arc button");

	$("#arc").click();
	if (($("#x")[0] === undefined) || ($("#y")[0] === undefined )
		|| ($("#r")[0] === undefined) || ($("#start_deg")[0] === undefined) 
		|| ($("#end_deg")[0] === undefined) || ($("#anticlockwise_bool")[0] === undefined) ) {
			output += outputMsgAsLine("TEST FAILED: Arc click failed - no input fields"); 
			return output;
	} else {
		output += outputMsgAsLine("Arc click produces form input fields");
	}
	if (($(":contains('x')").length === 0) 
		|| ($(":contains('y')").length === 0) 
		|| ($(":contains('r')").length === 0) 
		|| ($(":contains('start_deg')").length === 0) 
		|| ($(":contains('end_deg')").length === 0) 
		|| ($(":contains('anticlockwise_bool')").length === 0)) {
			output += outputMsgAsLine("TEST FAILED: Arc click failed - no labels");
			return output;
	} else {
		output += outputMsgAsLine("Arc click produces form input labels");
	} 
	
	enterArcForm(100, 200, 50, 30, 60, 0);
	
	$("#draw").click();
	$("#save").click();
	
	var htmlText = $("#canvas_code").text();
	var arcText = "arc(100,200,50,30*Math.PI/180,60*Math.PI/180,0);"
	
	if (htmlText.indexOf(arcText) == -1) {
		output += outputMsgAsLine("TEST FAILED: correct code for drawing arc is not generated")
		return output
	}
	else {
		output += outputMsgAsLine("code for drawing arc is generated")
	}		
	
	return output;
	
}

function rectButtonClickTest(output) {
	output = setTestCase(output);
	output += outputMsgAsLine("Clicking rect button");

	$("#rect").click();
	if (($("#x")[0] === undefined) || ($("#y")[0] === undefined )
		|| ($("#width")[0] === undefined) || ($("#height")[0] === undefined) ) {
			output += outputMsgAsLine("TEST FAILED: Rect click failed - no input fields"); 
			return output;
	} else {
		output += outputMsgAsLine("Rect click produces form input fields");
	}
	if (($(":contains('x')").length === 0) 
		|| ($(":contains('y')").length === 0) 
		|| ($(":contains('width')").length === 0) 
		|| ($(":contains('height')").length === 0)) {
			output += outputMsgAsLine("TEST FAILED: Rect click failed - no labels");
			return output;
	} else {
		output += outputMsgAsLine("Rect click produces form input labels");
	} 
	
	enterRectForm(300, 100, 100, 150);
	
	$("#draw").click();
	$("#save").click();
	
	var htmlText = $("#canvas_code").text();
	var rectText = "strokeRect(300,100,100,150);"
	
	if (htmlText.indexOf(rectText) == -1) {
		output += outputMsgAsLine("TEST FAILED: correct code for drawing rect is not generated");
		return output;
	}
	else {
		output += outputMsgAsLine("code for drawing rect is generated");
	}		
	
	return output;
	
}

function pathRedrawSaveTest(output) {
	output = setTestCase(output);
	output += outputMsgAsLine("Saving after redrawing");

	$("#line").click();	
	enterLineForm(0, 0, 500, 500);
	
	$("#draw").click();
	
	enterLineForm(0, 100, 200, 300);

	$("#draw").click();
	$("#save").click();
	
	var htmlText = $("#canvas_code").text();
	var notMoveToText = "moveTo(0,0);"
	var notLineToText = "lineTo(500,500);"
	if (htmlText.indexOf(notMoveToText) != -1 ||
		htmlText.indexOf(notLineToText) != -1 ) {
		output += outputMsgAsLine("TEST FAILED: saved the code not meant to be saved")
		return output;
	} else {
		output += outputMsgAsLine("did not save trial code as expected");
	}
	
	var moveToText = "moveTo(0,100);"
	var lineToText = "lineTo(200,300);"
	
	if (htmlText.indexOf(moveToText) == -1 ||
		htmlText.indexOf(lineToText) == -1) {
		output += outputMsgAsLine("TEST FAILED: correct code was not saved");
		return output
	}
	else {
		output += outputMsgAsLine("correct code was saved");
	}		
	
	return output;
	
}

function pathSaveResaveTest(output) {
	output = setTestCase(output);
	output += outputMsgAsLine("Saving second time");

	$("#line").click();	
	enterLineForm(50, 0, 200, 50);
	
	$("#draw").click();
	$("#save").click();
	
	$("#quadratic_curve").click();
	enterQuadraticCurveForm(0, 100, 125, 150, 175, 75);

	$("#draw").click();
	$("#save").click();
	
	var htmlText = $("#canvas_code").text();
	var notMoveToText = "moveTo(50,0);"
	var notLineToText = "lineTo(200,50);"
	if (htmlText.indexOf(notMoveToText) == -1 ||
		htmlText.indexOf(notLineToText) == -1 ) {
		output += outputMsgAsLine("TEST FAILED: previously saved code is not retained")
		return output;
	} else {
		output += outputMsgAsLine("retained the previously saved code");
	}
	
	var moveToText = "moveTo(0,100);"
	var lineToText = "quadraticCurveTo(125,150,175,75);"
	
	if (htmlText.indexOf(moveToText) == -1 ||
		htmlText.indexOf(lineToText) == -1) {
		output += outputMsgAsLine("TEST FAILED: correct code was not saved again");
		return output
	}
	else {
		output += outputMsgAsLine("correct code was saved again")
	}		
	
	return output;
	
}

function pathStrokeFillTest(output) {
	output = setTestCase(output);
	output += outputMsgAsLine("Choosing between stroke and fill");
	
	if ($("#stroke_button").prop('disabled') == false 
		|| $("#fill_button").prop('disabled') == true) {
		output += outputMsgAsLine("TEST FAILED: stroke/fill not initialized correctly")
		return output;
	} else {
		output += outputMsgAsLine("stroke/fill initialized correctly")
	}
	
	$("#fill_button").click();
	if ($("#stroke_button").prop('disabled') == true 
		|| $("#fill_button").prop('disabled') == false) {
		output += outputMsgAsLine("TEST FAILED: fill option was not set")
		return output;
	} else {
		output += outputMsgAsLine("fill option was correctly set")
	}
	
	$("#stroke_button").click();
	if ($("#stroke_button").prop('disabled') == false 
		|| $("#fill_button").prop('disabled') == true) {
		output += outputMsgAsLine("TEST FAILED: stroke option was not set")
		return output;
	} else {
		output += outputMsgAsLine("stroke option was correctly set")
	}
	
	return output;
}

function runTests() {
	var output = outputMsgAsLine(Date().toString());
	
	output = lineButtonClickTest(output);
	output = quadraticCurveButtonClickTest(output);
	output = bezierCurveButtonClickTest(output);
	output = arcButtonClickTest(output);
	output = rectButtonClickTest(output);
	output = pathRedrawSaveTest(output);	
	output = pathSaveResaveTest(output);
	output = pathStrokeFillTest(output);
	
	$("body").empty()
	$("body").append("<h1> Test Output")
	
	$("body").append("<p id='testresults'></p>")
	$("#testresults").append(output);
}	
