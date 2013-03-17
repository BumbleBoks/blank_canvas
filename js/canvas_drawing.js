function drawLine (context, x1, y1, x2, y2) {
	context.moveTo(x1,y1);
	context.lineTo(x2,y2);
	context.strokeStyle = "rgba(0,0,0,1)";
	context.stroke();
}