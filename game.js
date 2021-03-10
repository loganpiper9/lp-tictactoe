var gameRunning = true;

function Player(){}
Player.turn = 2;
Player.symbol = "O";
var moveCount = 0;

function switchTurn() {
	moveCount++;
	if(gameRunning) {
		checkVictory();
		if(Player.turn == 2) {
			Player.turn = 1;
			Player.symbol = "X";
		} else {
			Player.turn = 2;
			Player.symbol = "O";
		}
		updateTurn();
	}
}

function updateTurn() {
	document.getElementById('turn').innerHTML = "Player " + Player.symbol + "'s turn.";
}

function check(a, b, c) {
	if(a == b && (a == c && (b == c && (a == b)) && (a != 0))) {
		// Check if the 3 values are equal and they aren't equal to 0 (the game value of a blank space)
		return true;
	} else {
		return false;
	}
}

function endGame() {
	gameRunning = false;
	alert(Player.symbol + " wins!");
	setTimeout(function() {
		if(moveCount < 9) {
			document.getElementById('turn').innerHTML = "Player " + Player.symbol + " wins!";
		} else if(moveCount == 9) {
			document.getElementById('turn').innerHTML = "Draw!";
		}
	}, 1000);
}

function checkVictory() {
	if(check(gameGrid[0], gameGrid[1], gameGrid[2])) {
		// Check top column
		endGame()
	} else if(check(gameGrid[3], gameGrid[4], gameGrid[5])) {
		// Check middle column
		endGame()
	} else if(check(gameGrid[6], gameGrid[7], gameGrid[8])) {
		// Check bottom column
		endGame()
	} else if(check(gameGrid[0], gameGrid[3], gameGrid[6])) {
		// Check first row
		endGame()
	} else if(check(gameGrid[1], gameGrid[4], gameGrid[7])) {
		// Check second row
		endGame()
	} else if(check(gameGrid[2], gameGrid[5], gameGrid[8])) {
		// Check third row
		endGame()
	} else if(check(gameGrid[0], gameGrid[4], gameGrid[8])) {
		// Check diagonal, top to bottom, left to right
		endGame()
	} else if(check(gameGrid[2], gameGrid[4], gameGrid[6])) {
		// Check diagonal, top to bottom, right to left
		endGame()
	}
	
	else if(moveCount == 9) {
		alert("Draw!");
	}
}

var gameGrid = [0, 0, 0,
			    0, 0, 0,
			    0, 0, 0];
// 0 is an empty space
// 1 is an X
// 2 is an O

updateTurn();