function draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < cols; j++) {
			if (board[i][j] == 2) { //pacman
				drawPacman(i, j, pac_color);
			} else if (board[i][j] == 1) { //food
				drawFood(i, j, 'black', 25);
			}
		}
	}
}

function drawGhost(row, col, ghostName) {
	let img = document.createElement("img");
	img.src = "./images/ghosts/" + ghostName + ".png";
	img.addEventListener("load", function () {
		let center = new Object();
		center.x = col * 40;
		center.y = row * 40 - 7;
		ctx.drawImage(img, center.x, center.y, 50, 50);
	});
}

function drawPacman(row, col, color) {
	let center = new Object();
	center.x = col * 40 + 20;
	center.y = row * 40 + 20;
	ctx.beginPath();
	ctx.arc(center.x, center.y, 22, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
	ctx.lineTo(center.x, center.y);
	ctx.fillStyle = color; //color
	ctx.fill();

	//eye:
	ctx.beginPath();
	ctx.arc(center.x + 5, center.y - 15, 3, 0, 2 * Math.PI); // circle
	ctx.fillStyle = "black"; //color
	ctx.fill();
}

function drawFood(row, col, color, points) {
	let center = new Object();
	center.x = col * 40 + 20;
	center.y = row * 40 + 18;
	ctx.beginPath();
	ctx.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
	ctx.fillStyle = color; //color
	ctx.fill();

	ctx.font = "20px Comic Sans MS";
	ctx.fillStyle = "white";
	ctx.fillText(points, center.x - 11, center.y + 7);
}
