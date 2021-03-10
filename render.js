var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var canvasHeight = c.height;
var canvasWidth = c.width;

function mousePos(canvas, event) {
	let canv = canvas.getBoundingClientRect();
	return {
		x: event.clientX - canv.left,
		y: event.clientY - canv.top
	};
}

function drawRect(X, Y, endX, endY) {
	ctx.beginPath();
	ctx.rect(X, Y, endX, endY);
	ctx.stroke();
}

function drawText(text, x, y) {
	ctx.font = "50px Arial";
	ctx.fillText(text.toString(), x, y);
}

function drawSymbol(index) {
	// Check the box we want to draw the character in and make sure that it hasn't been filled
	if(index == 0 && gameGrid[index] == 0) {
		drawText(Player.symbol, 35, 65);
		gameGrid[index] = Player.turn;
		switchTurn();
	} else if(index == 3 && gameGrid[index] == 0) {
		drawText(Player.symbol, 35, 165);
		gameGrid[index] = Player.turn;
		switchTurn();
	} else if(index == 6 && gameGrid[index] == 0) {
		drawText(Player.symbol, 35, 265);
		gameGrid[index] = Player.turn;
		switchTurn();
	} else if(index == 1 && gameGrid[index] == 0) {
		drawText(Player.symbol, 135, 65);
		gameGrid[index] = Player.turn;
		switchTurn();
	} else if(index == 2 && gameGrid[index] == 0) {
		drawText(Player.symbol, 235, 65);
		gameGrid[index] = Player.turn;
		switchTurn();
	} else if(index == 4 && gameGrid[index] == 0) {
		drawText(Player.symbol, 135, 165);
		gameGrid[index] = Player.turn;
		switchTurn();
	} else if(index == 5 && gameGrid[index] == 0) {
		drawText(Player.symbol, 235, 165);
		gameGrid[index] = Player.turn;
		switchTurn();
	} else if(index == 6 && gameGrid[index] == 0) {
		drawText(Player.symbol, 235, 265);
		gameGrid[index] = Player.turn;
		switchTurn();
	} else if(index == 7 && gameGrid[index] == 0) {
		drawText(Player.symbol, 135, 265);
		gameGrid[index] = Player.turn;
		switchTurn();
	} else if(index == 8 && gameGrid[index] == 0) {
		drawText(Player.symbol, 235, 265);
		gameGrid[index] = Player.turn;
		switchTurn();
	}
}

function setColor(color) {
	ctx.fillStyle = color;
	ctx.strokeStyle = color;
}

function drawBoard() {
	// First row of rectangles
	drawRect(0, 0, canvasWidth/3, canvasHeight/3);
	drawRect(0, canvasHeight/3, canvasWidth/3, canvasHeight/3);
	drawRect(0, ((canvasHeight/3)*2), canvasWidth/3, canvasHeight/3);
	// Second row of rectangles
	drawRect((canvasWidth/3), 0, canvasWidth/3, canvasHeight/3);
	drawRect((canvasWidth/3), canvasHeight/3, canvasWidth/3, canvasHeight/3);
	drawRect((canvasWidth/3), ((canvasHeight/3)*2), canvasWidth/3, canvasHeight/3);
	// Third row of rectangles
	drawRect(((canvasWidth/3)*2), 0, canvasWidth/3, canvasHeight/3);
	drawRect(((canvasWidth/3)*2), canvasHeight/3, canvasWidth/3, canvasHeight/3);	
	drawRect(((canvasWidth/3)*2), ((canvasHeight/3)*2), canvasWidth/3, canvasHeight/3);	
	console.log("Board has been drawn with the dimensions " + canvasWidth + " x " + canvasHeight + " and the color " + ctx.strokeStyle);
}

c.addEventListener('click', function(event) {
	let mP = mousePos(c, event);
	if(mP.x >= canvasWidth/3 && mP.x <= ((canvasWidth/3)*2)) {
		// Clicked in the second row
		if(mP.y >= canvasWidth/3 && mP.y <= ((canvasWidth/3)*2)) {
			// Clicked in the second box
			drawSymbol(4);
		} else if(mP.y >= canvasWidth/3 && mP.y <= canvasWidth) {
			// Clicked in the third box
			drawSymbol(7);
		} else {
			// Clicked in the first box
			drawSymbol(1);
		}
	} else if(mP.x >= canvasWidth/3 && mP.x <= canvasWidth) {
		// Clicked in the third row
		if(mP.y >= canvasWidth/3 && mP.y <= ((canvasWidth/3)*2)) {
			// Clicked in the second box
			drawSymbol(5);
		} else if(mP.y >= canvasWidth/3 && mP.y <= canvasWidth) {
			// Clicked in the third box
			drawSymbol(8);
		} else {
			// Clicked in the first box
			drawSymbol(2);
		}
	} else {
		// Clicked in the first row
		if(mP.y >= canvasWidth/3 && mP.y <= ((canvasWidth/3)*2)) {
			// Clicked in the second box
			drawSymbol(3);
		} else if(mP.y >= canvasWidth/3 && mP.y <= canvasWidth) {
			// Clicked in the third box
			drawSymbol(6);
		} else {
			// Clicked in the first box
			drawSymbol(0);
		}
	}
}, false);