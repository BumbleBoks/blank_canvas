describe ("Canvas code for", function() {
	describe("drawing lines", function() {
		var test_input, code_html;
		
		beforeEach(function() {
			test_input = {
				"x1": 100,
				"y1": 200,
				"x2": 300,
				"y2": 400
			};
			code_html = canvasCodeForLine(test_input);			
		});
		
		it ("should contain moveTo", function() {
			expect(code_html).toContain("context.moveTo(100,200)");
		});
		
		it ("should contain LineTo", function() {
			expect(code_html).toContain("context.lineTo(300,400)");
		});
		
		it ("should contain stroke", function() {
			expect(code_html).toContain("context.stroke()");
		});
				
	});


	describe("drawing quadratic curves", function() {
		var test_input, code_html;
		
		beforeEach(function() {
			test_input = {
				"x1": 100,
				"y1": 200,
				"cp1x": 125,
				"cp1y": 150,
				"x2": 300,
				"y2": 400
			};
			code_html = canvasCodeForQuadraticCurve(test_input);			
		});
		
		it ("should contain moveTo", function() {
			expect(code_html).toContain("context.moveTo(100,200)");
		});
		
		it ("should contain LineTo", function() {
			expect(code_html).toContain(
				"context.quadraticCurveTo(125,150,300,400)");
		});
		
		it ("should contain stroke", function() {
			expect(code_html).toContain("context.stroke()");
		});
				
	});

	describe("drawing bezier curves", function() {
		var test_input, code_html;
		
		beforeEach(function() {
			test_input = {
				"x1": 100,
				"y1": 200,
				"cp1x": 125,
				"cp1y": 150,
				"cp2x": 200,
				"cp2y": 225,
				"x2": 300,
				"y2": 400
			};
			code_html = canvasCodeForBezierCurve(test_input);			
		});
		
		it ("should contain moveTo", function() {
			expect(code_html).toContain("context.moveTo(100,200)");
		});
		
		it ("should contain LineTo", function() {
			expect(code_html).toContain(
				"context.bezierCurveTo(125,150,200,225,300,400)");
		});
		
		it ("should contain stroke", function() {
			expect(code_html).toContain("context.stroke()");
		});
				
	});

});