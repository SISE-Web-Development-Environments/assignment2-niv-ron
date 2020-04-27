var context;
var shape = new Object();
var board = new Array();;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;

var food_remain = 50;

const rows = 13;
const cols = 18;

function createEmptyMaze() {
	for (var row = 0; row < rows; row++) {
		board[row] = new Array();
		for (var col = 0; col < cols; col++) {
			board[row][col] = 0;
		}
	}
}

$(document).ready(function () {
	context = canvas.getContext("2d");
	createEmptyMaze();
	setWalls();
	putFoodRandomaly();

	// alert(food_remain);
	// context = canvas.getContext("2d");
	// alert(Math.floor(Math.random() * rows));
	// Start();
	// drawPacman(10, 10, 'yellow');
	// drawFood(10, 11, 'black', 10);
	// drawGhost(10, 12, 'blinky');
	// setWalls();
});

function isEmpty(row, col) {
	return (board[row][col] == 0);
}

function random(bound) {
	return Math.floor(Math.random() * bound);
}

function findEmptyCell() {
	let row = random(rows);
	let col = random(cols);
	while (!isEmpty(row, col)) {
		row = random(rows);
		col = random(cols);
	}
	return [row, col];
}

function putFoodRandomaly() {
	let cell = findEmptyCell();
	let row;
	let col;
	while (food_remain > 0) {
		cell = findEmptyCell();
		row = cell[0];
		col = cell[1];
		board[row][col] = 1;
		drawFood(row, col, 'black', 15);
		food_remain--;
	}
}

// function Start() {
// 	board = new Array();
// 	score = 0;
// 	pac_color = "yellow";
// 	var cnt = 100;
// 	var food_remain = 50;
// 	var pacman_remain = 1;
// 	start_time = new Date();

// 	for (var row = 0; row < row; row++) {
// 		board[row] = new Array();
// 		for (var col = 0; col < cols; col++) {
// 			board[row][col] = 0;
// 		}
// 	}
// 	setWalls();

// 	for (var row = 0; row < 13; row++) {
// 		for (var col = 0; col < 18; col++) {
// 			if(isPath(row,col)){

// 			}

// 		}
// 	}

// }

// function findRandomEmptyCell(board) {
// 	var i = Math.floor(Math.random() * 9 + 1);
// 	var j = Math.floor(Math.random() * 9 + 1);
// 	while (board[i][j] != 0) {
// 		i = Math.floor(Math.random() * 9 + 1);
// 		j = Math.floor(Math.random() * 9 + 1);
// 	}
// 	return [i, j];
// }

function GetKeyPressed() {
	if (keysDown[38]) {
		return 1;
	}
	if (keysDown[40]) {
		return 2;
	}
	if (keysDown[37]) {
		return 3;
	}
	if (keysDown[39]) {
		return 4;
	}
}

function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			var center = new Object();
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			if (board[i][j] == 2) {
				context.beginPath();
				context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 1) {
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; //color
				context.fill();
			}
		}
	}
}

function UpdatePosition() {
	board[shape.i][shape.j] = 0;
	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.j--;
		}
	}
	if (x == 2) {
		if (shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
			shape.j++;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			shape.i--;
		}
	}
	if (x == 4) {
		if (shape.i < 9 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
		}
	}
	if (board[shape.i][shape.j] == 1) {
		score++;
	}
	board[shape.i][shape.j] = 2;
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	if (score >= 20 && time_elapsed <= 10) {
		pac_color = "green";
	}
	if (score == 50) {
		window.clearInterval(interval);
		window.alert("Game completed");
	} else {
		Draw();
	}
}


// DRAWING:
function drawGhost(row, col, ghostName) {
	let img = document.createElement("img");
	img.src = "./images/ghosts/" + ghostName + ".png";
	img.addEventListener("load", function () {
		let center = new Object();
		center.x = col * 40;
		center.y = row * 40 - 7;
		context.drawImage(img, center.x, center.y, 50, 50);
	});
}

function drawPacman(row, col, color) {
	let center = new Object();
	center.x = col * 40 + 20;
	center.y = row * 40 + 20;
	context.beginPath();
	context.arc(center.x, center.y, 22, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
	context.lineTo(center.x, center.y);
	context.fillStyle = color; //color
	context.fill();

	//eye:
	context.beginPath();
	context.arc(center.x + 5, center.y - 15, 3, 0, 2 * Math.PI); // circle
	context.fillStyle = "black"; //color
	context.fill();
}

function drawFood(row, col, color, points) {
	let center = new Object();
	center.x = col * 40 + 20;
	center.y = row * 40 + 18;
	context.beginPath();
	context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
	context.fillStyle = color; //color
	context.fill();

	context.font = "20px Comic Sans MS";
	context.fillStyle = "white";
	context.fillText(points, center.x - 11, center.y + 7);
}


function setWalls() {
	// frame:
	for (var col = 0; col < 18; col++)
		setWall(0, col);

	for (var col = 0; col < 18; col++)
		setWall(12, col);

	for (var row = 1; row < 12; row++) {
		if (row != 6)
			setWall(row, 0);
	}
	for (var row = 1; row < 12; row++) {
		if (row != 6)
			setWall(row, 17);
	}
	// by rows:
	for (var col = 4; col < 14; col++) {
		if (col == 4 || col == 13)
			setWall(1, col);
	}
	for (var col = 2; col < 16; col++) {
		if (col == 2 || col == 6 || col == 7 || col == 10 || col == 11 || col == 15)
			setWall(2, col);
	}
	for (var col = 2; col < 16; col++) {
		if (col == 2 || col == 3 || col == 5 || col == 12 || col == 14 || col == 15)
			setWall(3, col);
	}
	for (var col = 2; col < 16; col++) {
		if (col == 3 || col == 7 || col == 10 || col == 14)
			setWall(4, col);
	}
	for (var col = 1; col < 17; col++) {
		if (col == 1 || col == 3 || col == 4 || col == 6 || col == 11 || col == 13 || col == 14 || col == 16)
			setWall(5, col);
	}
	for (var col = 6; col < 12; col++)
		setWall(6, col);
	for (var col = 1; col < 17; col++) {
		if (col == 1 || col == 3 || col == 4 || col == 13 || col == 14 || col == 16)
			setWall(7, col);
	}
	for (var col = 1; col < 17; col++)
		if (col == 1 || col == 3 || col == 4 || col == 5 || col == 6 || col == 7 || col == 10 || col == 11 || col == 12 || col == 13 || col == 14 || col == 16)
			setWall(8, col);

	for (var col = 2; col < 16; col++) {
		if (col == 2 || col == 7 || col == 8 || col == 9 || col == 10 || col == 15)
			setWall(10, col);
	}

	for (var col = 4; col < 14; col++) {
		if (col == 4 || col == 5 || col == 12 || col == 13) {
			setWall(9, col);
			setWall(11, col);
		}
	}
}

function setWall(row, col) {
	this.board[row][col] = 4;
	// drawGhost(row,col, 'blinky');
}