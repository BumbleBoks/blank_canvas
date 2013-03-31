describe ("Canvas code for", function() {
	describe("stroke/fill/color", function() {
		var options = [], code_html;
		
		describe ("stroke with color", function() {
			beforeEach(function() {			
				options["stroke"] = true;
				options["color"] = makeColor(80, 50, 100, 0.6);
				code_html = canvasCodeForStrokeFillColor(options);							
			});
			
			it ("should contain strokeStyle", function() {
				expect(code_html).toContain('context.strokeStyle = "rgba(80,50,100,0.6)"');
			});

			it ("should contain stroke", function() {
				expect(code_html).toContain("context.stroke()");
			});			
		});
		
		describe ("fill with color", function() {
			beforeEach(function() {			
				options["stroke"] = false;
				options["color"] = makeColor(75, 206, 102, 0.8);
				code_html = canvasCodeForStrokeFillColor(options);							
			});
			
			it ("should contain strokeStyle", function() {
				expect(code_html).toContain('context.fillStyle = "rgba(75,206,102,0.8)"');
			});

			it ("should contain stroke", function() {
				expect(code_html).toContain("context.fill()");
			});			
		});		
		
	});
	
	describe("drawing lines", function() {
		var test_input, code_html;
		var options = [];
		
		beforeEach(function() {
			test_input = {
				"x1": 100,
				"y1": 200,
				"x2": 300,
				"y2": 400
			};
		});
		
		describe ("using stroke", function() {
			beforeEach(function() {
				options["stroke"] = true;
				options["color"] = makeColor(200, 250, 100, 1);
				code_html = canvasCodeForLine(test_input, options);							
			});
			
			it ("should contain moveTo", function() {
				expect(code_html).toContain("context.moveTo(100,200)");
			});

			it ("should contain LineTo", function() {
				expect(code_html).toContain("context.lineTo(300,400)");
			});
			
			it ("should contain strokeStyle", function() {
				expect(code_html).toContain('context.strokeStyle = "rgba(200,250,100,1)"');
			});

			it ("should contain stroke", function() {
				expect(code_html).toContain("context.stroke()");
			});
		});
		
		describe ("using fill", function() {
			beforeEach(function() {
				options["stroke"] = false;
				options["color"] = makeColor(0, 150, 10, 1);
				code_html = canvasCodeForLine(test_input, options);							
			});
			
			it ("should contain moveTo", function() {
				expect(code_html).toContain("context.moveTo(100,200)");
			});

			it ("should contain LineTo", function() {
				expect(code_html).toContain("context.lineTo(300,400)");
			});

			it ("should contain fillStyle", function() {
				expect(code_html).toContain('context.fillStyle = "rgba(0,150,10,1)"');
			});

			it ("should contain fill", function() {
				expect(code_html).toContain("context.fill()");
			});
		});
				
	});

	describe("drawing quadratic curves", function() {
		var test_input, code_html;
		var options = [];
		
		beforeEach(function() {
			test_input = {
				"x1": 100,
				"y1": 200,
				"cp1x": 125,
				"cp1y": 150,
				"x2": 300,
				"y2": 400
			};
		});
		
		describe ("using stroke", function() {
			beforeEach(function() {
				options["stroke"] = true;
				options["color"] = makeColor(20, 50, 50, 0.1);
				code_html = canvasCodeForQuadraticCurve(test_input, options);							
			});

			it ("should contain moveTo", function() {
				expect(code_html).toContain("context.moveTo(100,200)");
			});

			it ("should contain quadraticCurveTo", function() {
				expect(code_html).toContain(
					"context.quadraticCurveTo(125,150,300,400)");
			});

			it ("should contain strokeStyle", function() {
				expect(code_html).toContain('context.strokeStyle = "rgba(20,50,50,0.1)"');
			});

			it ("should contain stroke", function() {
				expect(code_html).toContain("context.stroke()");
			});
		});
		
		describe ("using fill", function() {
			beforeEach(function() {
				options["stroke"] = false;
				options["color"] = makeColor(120, 0, 150, 0.5);
				code_html = canvasCodeForQuadraticCurve(test_input, options);							
			});

			it ("should contain moveTo", function() {
				expect(code_html).toContain("context.moveTo(100,200)");
			});

			it ("should contain quadraticCurveTo", function() {
				expect(code_html).toContain(
					"context.quadraticCurveTo(125,150,300,400)");
			});

			it ("should contain fillStyle", function() {
				expect(code_html).toContain('context.fillStyle = "rgba(120,0,150,0.5)"');
			});

			it ("should contain fill", function() {
				expect(code_html).toContain("context.fill()");
			});
		});		
				
	});

	describe("drawing bezier curves", function() {
		var test_input, code_html;
		var options = [];
		
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
		});
		
		describe ("using stroke", function() {
			beforeEach(function() {
				options["stroke"] = true;
				options["color"] = makeColor(210, 10, 250, 0.7);
				code_html = canvasCodeForBezierCurve(test_input, options);							
			});
			
			it ("should contain moveTo", function() {
				expect(code_html).toContain("context.moveTo(100,200)");
			});

			it ("should contain bezierCurveTo", function() {
				expect(code_html).toContain(
					"context.bezierCurveTo(125,150,200,225,300,400)");
			});

			it ("should contain strokeStyle", function() {
				expect(code_html).toContain('context.strokeStyle = "rgba(210,10,250,0.7)"');
			});

			it ("should contain stroke", function() {
				expect(code_html).toContain("context.stroke()");
			});			
		});
		
		describe ("using fill", function() {
			beforeEach(function() {
				options["stroke"] = false;
				options["color"] = makeColor(210, 10, 0, 0.7);
				code_html = canvasCodeForBezierCurve(test_input, options);							
			});
			
			it ("should contain moveTo", function() {
				expect(code_html).toContain("context.moveTo(100,200)");
			});

			it ("should contain bezierCurveTo", function() {
				expect(code_html).toContain(
					"context.bezierCurveTo(125,150,200,225,300,400)");
			});

			it ("should contain fillStyle", function() {
				expect(code_html).toContain('context.fillStyle = "rgba(210,10,0,0.7)"');
			});

			it ("should contain fill", function() {
				expect(code_html).toContain("context.fill()");
			});			
		});		
				
	});

	describe("drawing arc", function() {
		var test_input, code_html;
		var options = [];
		
		beforeEach(function() {
			test_input = {
				"x0": 300,
				"y0": 200,				
				"xc": 300,
				"yc": 200,
				"r": 50,
				"start_deg": 60,
				"end_deg": 120,
				"anticlockwise_bool": 0
			};
		});
		
		describe ("using stroke", function() {
			beforeEach(function() {
				options["stroke"] = true;
				options["color"] = makeColor(210, 0, 0, 0.8);
				code_html = canvasCodeForArc(test_input, options);							
			});
			it ("should contain moveTo", function() {
				expect(code_html).toContain("context.moveTo(300,200)");
			});

			it ("should contain arc", function() {
				expect(code_html).toContain("context.arc(300,200,50,60*Math.PI/180,120*Math.PI/180,0)");
			});

			it ("should contain strokeStyle", function() {
				expect(code_html).toContain('context.strokeStyle = "rgba(210,0,0,0.8)"');
			});

			it ("should contain stroke", function() {
				expect(code_html).toContain("context.stroke()");
			});
		});
		
		describe ("using fill", function() {
			beforeEach(function() {
				options["stroke"] = false;
				options["color"] = makeColor(20, 10, 50, 0.4);
				code_html = canvasCodeForArc(test_input, options);							
			});
			it ("should contain moveTo", function() {
				expect(code_html).toContain("context.moveTo(300,200)");
			});

			it ("should contain arc", function() {
				expect(code_html).toContain("context.arc(300,200,50,60*Math.PI/180,120*Math.PI/180,0)");
			});

			it ("should contain fillStyle", function() {
				expect(code_html).toContain('context.fillStyle = "rgba(20,10,50,0.4)"');
			});

			it ("should contain fill", function() {
				expect(code_html).toContain("context.fill()");
			});
		});

	});

	describe("drawing rect", function() {
		var test_input, code_html;
		var options = [];
		
		beforeEach(function() {
			test_input = {
				"x": 250,
				"y": 150,
				"width": 200,
				"height": 100
			};
		});
		
		describe ("using stroke", function() {
			beforeEach(function() {
				options["stroke"] = true;
				options["color"] = makeColor(0, 0, 50, 0.9);
				code_html = canvasCodeForRect(test_input, options);							
			});
			
			it ("should contain strokeStyle", function() {
				expect(code_html).toContain('context.strokeStyle = "rgba(0,0,50,0.9)"');
			});

			it ("should contain strokeRect", function() {
				expect(code_html).toContain("context.strokeRect(250,150,200,100)");
			});
		});
		
		describe ("using fill", function() {
			beforeEach(function() {
				options["stroke"] = false;
				options["color"] = makeColor(20, 10, 250, 0.2);
				code_html = canvasCodeForRect(test_input, options);							
			});
			
			it ("should contain fillStyle", function() {
				expect(code_html).toContain('context.fillStyle = "rgba(20,10,250,0.2)"');
			});

			it ("should contain fillRect", function() {
				expect(code_html).toContain("context.fillRect(250,150,200,100)");
			});
		});		
		
	});

});