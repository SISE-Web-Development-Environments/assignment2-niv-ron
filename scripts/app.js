var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;


//SETTINGS:
var keys = {
	key_up:38, key_Down:40, key_Left:37, key_right:39,
	setDefualt: function () { this.key_up = 38, this.key_Down = 40, this.key_Left = 37, this.key_right = 39 },
	changeKeys: function (up, down, left, right) { this.key_up = up, this.key_Down = down, this.key_Left = left, this.key_right = right }
}
//monsters:
var monsters_remain;
//END OF SETTINGS
//////////////////////////////////

//DRAWING:
function monster_drawing() {
	let cent = 210;// 60*position
	//MONSTER:
	context.beginPath();
	context.moveTo(cent - 20, cent - 10);
	context.lineTo(cent - 20, cent + 15);
	context.lineTo(cent - 15, cent + 10);
	context.lineTo(cent - 10, cent + 15);
	context.lineTo(cent - 5, cent + 10);
	context.lineTo(cent, cent + 15);
	context.lineTo(cent + 5, cent + 10);
	context.lineTo(cent + 10, cent + 15);
	context.lineTo(cent + 15, cent + 10);
	context.lineTo(cent + 20, cent + 15);
	context.lineTo(cent + 20, cent - 10);
	context.lineWidth = 2;
	context.fillStyle = "red";
	context.fill();
	context.beginPath();
	context.arc(cent, cent - 5, 20, 0, Math.PI, true);
	context.fillStyle = "red";
	context.fill();
	context.beginPath();
	context.fillStyle = "white";
	context.arc(cent - 10, cent - 10, 4, 0, 2 * Math.PI);
	context.arc(cent + 10, cent - 10, 4, 0, 2 * Math.PI);
	context.fill();

	//MONSTER - EYE:
	context.beginPath();
	context.fillStyle = "black";
	context.arc(cent - 12, cent - 10, 2, 0, 2 * Math.PI);
	context.arc(cent + 8, cent - 10, 2, 0, 2 * Math.PI);
	context.fill();
}


$(document).ready(function () {
	context = canvas.getContext("2d");
	Start();
});

function Start() {
	board = new Array();
	score = 0;
	pac_color = "yellow";
	var cnt = 100;
	var food_remain = 50;
	var pacman_remain = 1;

	//SETTINGS:
	var monsters_remain = this.monsters_remain;

	//END OF SETTINGS
	///////////////

	start_time = new Date();
	keys.setDefualt();

	for (var i = 0; i < 10; i++) {
		board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < 10; j++) {

			//WALLS:
			if (
				(i == 3 && j == 3) ||
				(i == 3 && j == 4) ||
				(i == 3 && j == 5) ||
				(i == 6 && j == 1) ||
				(i == 6 && j == 2)
			) {
				board[i][j] = 4;

				//FOOD:
			} else {
				var randomNum = Math.random();
				if (randomNum <= (1.0 * food_remain) / cnt) {
					food_remain--;
					board[i][j] = 1;

					//PACMANS:
				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
					shape.i = i;
					shape.j = j;
					pacman_remain--;
					board[i][j] = 2;
				} else {
					board[i][j] = 0;
				}
				cnt--;
			}
		}
	}

	//FOOD:
	while (food_remain > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 1;
		food_remain--;
	}


	//GAME KEYS:
	keysDown = {};
	addEventListener(
		"keydown",
		function (e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function (e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 250);
}

function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 9 + 1);
	var j = Math.floor(Math.random() * 9 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 9 + 1);
		j = Math.floor(Math.random() * 9 + 1);
	}
	return [i, j];
}

function GetKeyPressed() {
	//UP
	if (keysDown[keys.key_up]) {
		return 1;
	}
	//DOWN
	if (keysDown[keys.key_Down]) {
		return 2;
	}
	//LEFT
	if (keysDown[keys.key_Left]) {
		return 3;
	}
	//RIGHT
	if (keysDown[keys.key_right]) {
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

			//DRAW PACMAN
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

				//DRAW FOOD
			} else if (board[i][j] == 1) {
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();

				context.font = "20px Comic Sans MS";
				context.fillStyle = "white";
				context.fillText("10", center.x - 11, center.y + 7);


				// context.beginPath();
				// context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
				// context.lineTo(center.x, center.y);
				// context.fillStyle = pac_color; //color
				// context.fill();
				// context.beginPath();
				// context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
				// context.fillStyle = "black"; //color
				// context.fill();





				//DRAW WALL
			} else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; //color
				context.fill();
			}
		}
	}
}

//draw A MONSTER:
// var pic = new Image();
// pic.src = "characters/red.png";
// context.drawImage(pic, center.x - 27, center.y - 30, 55, 55);


function UpdatePosition() {
	board[shape.i][shape.j] = 0;
	var x = GetKeyPressed();
	//UP
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.j--;
		}
	}
	//DOWN
	if (x == 2) {
		if (shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
			shape.j++;
		}
	}
	//LEFT
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			shape.i--;
		}
	}
	//RIGHT
	if (x == 4) {
		if (shape.i < 9 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
		}
	}
	// PACMAN EAT FOOD
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
