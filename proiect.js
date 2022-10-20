// Define variables
let b1, b2, b3, b4, b5, b6, b7, b8, b9;
//store the winning combination of the match so I can apply diffrent style to those cells
let winnerComb;
// defines if the match is over or not
let win = 0;
// defines how many moves have been made
let moves;
// store the id for all the cells
let IDs = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
// set if the game is on multiplayer or not
let multiplayer; 
// store the name of the players on multiplayer mode
let playerXName, player0Name; 
// sets if X or 0 was clicked for single player mode
let clickedX = 0;
let clicked0 = 0;


// Function called to check if somebody won or if it is a draw
function myfunc() {
	// Setting DOM to all input values
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;

	// Checking if Player X won
	if ((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) {
		winnerComb = document.querySelectorAll("#b1, #b2, #b3");
		winningActionsX();
	}
	else if ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) {
		winnerComb = document.querySelectorAll("#b4, #b5, #b6");
		winningActionsX();
	}
	else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) {
		winnerComb = document.querySelectorAll("#b7, #b8, #b9");
		winningActionsX();
	}
	else if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) {
		winnerComb = document.querySelectorAll("#b1, #b4, #b7");
		winningActionsX();
	}
	else if ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) {
		winnerComb = document.querySelectorAll("#b2, #b5, #b8");
		winningActionsX();
	}
	else if ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) {
		winnerComb = document.querySelectorAll("#b3, #b6, #b9");
		winningActionsX();
	}
	else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) {
		winnerComb = document.querySelectorAll("#b1, #b5, #b9");
		winningActionsX();
	}
	else if ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) {
		winnerComb = document.querySelectorAll("#b3, #b5, #b7");
		winningActionsX();
	}

	// Checking if Player 0 won 
	else if ((b1 == '0') && (b2 == '0') && (b3 == '0')) {
		winnerComb = document.querySelectorAll("#b1, #b2, #b3");
		winningActions0();
	}
	else if ((b4 == '0') && (b5 == '0') && (b6 == '0')) {
		winnerComb = document.querySelectorAll("#b4, #b5, #b6");
		winningActions0();
	}
	else if ((b7 == '0') && (b8 == '0') && (b9 == '0')) {
		winnerComb = document.querySelectorAll("#b7, #b8, #b9");
		winningActions0();
	}
	else if ((b1 == '0') && (b4 == '0') && (b7 == '0')) {
		winnerComb = document.querySelectorAll("#b1, #b4, #b7");
		winningActions0();
	}
	else if ((b2 == '0') && (b5 == '0') && (b8 == '0')) {
		winnerComb = document.querySelectorAll("#b2, #b5, #b8");
		winningActions0();
	}
	else if ((b3 == '0') && (b6 == '0') && (b9 == '0')) {
		winnerComb = document.querySelectorAll("#b3, #b6, #b9");
		winningActions0();
	}
	else if ((b1 == '0') && (b5 == '0') && (b9 == '0')) {
		winnerComb = document.querySelectorAll("#b1, #b5, #b9");
		winningActions0();
	}
	else if ((b3 == '0') && (b5 == '0') && (b7 == '0')) {
		winnerComb = document.querySelectorAll("#b3, #b5, #b7");
		winningActions0();
	}
	 	// Check if it is a draw
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
			b5 == '0') && (b6 == 'X' || b6 == '0') &&
		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
			b8 == '0') && (b9 == 'X' || b9 == '0')) {
		winnerTitleTie();
		win = 1;
	}
}
//function that sets what happens when 0 wins
function winningActions0() {
	winnerTitle0();
	light(winnerComb);
	unclick();
	win = 1;
}
//function that sets what happens when x wins
function winningActionsX() {
	winnerTitleX();
	light(winnerComb);
	unclick();
	win = 1;
}

// function that checks who's turn is for Single player Mode
function checkTurnSingle() {
	if (moves == 0) {
		document.getElementById('print').innerHTML = "Click a box to start";
		console.log(moves);
	}
	if (moves == 2 || moves % 2 == 0) {
		document.getElementById('print').innerHTML = "Player X Turn";
		console.log(moves);
	}
	else {
		document.getElementById('print').innerHTML = "Player 0 Turn";
		console.log(moves);
	}
}

// function that checks who's turn is for Multi-player Mode
function checkTurnMultiplayer() {
	if (moves == 2 || moves % 2 == 0) {
		document.getElementById('print').innerHTML = playerXName + "'s Turn";
		console.log(moves);
	}
	else {
		document.getElementById('print').innerHTML = player0Name + "'s Turn";
		console.log(moves);
	}
}


// function that gets called when player X is the winner (displays winner's name)
function winnerTitleX() {
	if (multiplayer) {
		document.getElementById('print').innerHTML = playerXName + " won!";
	} else {
		document.getElementById('print').innerHTML = "Player X won!";
	}
	document.getElementById('print').style.color = "#FDFF00"
}

// function that gets called when player 0 is the winner (displays winner's name)
function winnerTitle0() {
	if (multiplayer) {
		document.getElementById('print').innerHTML = player0Name + " won!";
	} else {
		document.getElementById('print').innerHTML = "Player 0 won!";
	}
	document.getElementById('print').style.color = "#FDFF00"
}

// function that gets called when it is a draw (displays text DRAW)
function winnerTitleTie() {
	document.getElementById('print').innerHTML = "Draw!";
	document.getElementById('print').style.color = "#FDFF00"
}

//function that changes the style for the winning cells
function light(winnerComb) {
	winnerComb.forEach(item => {
		item.style.borderColor = "#FDFF00";
	});
}

//function that remos the style from the winning cells
function unlight(winnerComb) {
	winnerComb.forEach(item => {
		item.style.borderColor = "gray";
	});
}

// function that sets all the cell to be disabled
function unclick() {
	for (i = 0; i < IDs.length; i++) {
		document.getElementById(IDs[i]).disabled = true;
	}
}

//function that sets all the cell to be enabled
function click() {
	for (i = 0; i < IDs.length; i++) {
		document.getElementById(IDs[i]).disabled = false;
	}
}

// function for the button Go back to Home
function goHome() {
	location.reload();
}

// function that gets called when Single-player Mode is choosen, it displays the inputs that need to be filled
function singlePlayerInput() {
	document.querySelector(".single-player-input").classList.remove("hidden");
	document.querySelector("button.single-player").classList.add("hidden");
	document.querySelector("button.multi-player").classList.add("hidden");
	document.querySelector("button.go-home").classList.remove("hidden");
}

// function that gets called when Multi-player Mode is choosen, it displays the inputs that need to be filled
function multiPlayerInput() {
	document.querySelector(".multi-player-input").classList.remove("hidden");
	document.querySelector("button.single-player").classList.add("hidden");
	document.querySelector("button.multi-player").classList.add("hidden");
	document.querySelector("button.go-home").classList.remove("hidden");
}


//function that gets called in single player mode when user is X
function clickerAI0(id) {
		unclick();
		moves++;
		checkTurnSingle();
		document.getElementById(id).value = "X";
		document.getElementById(id).disabled = true;
		myfunc();
		var index = IDs.indexOf(id);
		IDs.splice(index, 1);
		setTimeout(AI0, 2000);
}
//function that gets called in single player mode when user is 0
function clickerAIX(id) {
		unclick();
		moves++;
		checkTurnSingle();
		document.getElementById(id).value = "0";
		document.getElementById(id).disabled = true;
		myfunc();
		var index = IDs.indexOf(id);
		IDs.splice(index, 1);
		setTimeout(AIX, 2000)
}

//function that gets called when the robot needs to chose a cell X
function AIX() {
	click();
	let options = IDs.length - 1;
	let randomNumber = Math.round(Math.random() * options);
	randomBox = IDs[randomNumber];
	if (win == 0) {
		document.getElementById(randomBox).value = "X";
		document.getElementById(randomBox).disabled = true;
		index = IDs.indexOf(randomBox);
		IDs.splice(index, 1);
		moves++;
		checkTurnSingle();
		myfunc();
	}
}

//function that gets called when the robot needs to chose a cell 0
function AI0() {
	click();
	let options = IDs.length - 1;
	let randomNumber = Math.round(Math.random() * options)
	let randomBox = IDs[randomNumber];
	if (win == 0) {
		document.getElementById(randomBox).value = "0";
		document.getElementById(randomBox).disabled = true;

		index = IDs.indexOf(randomBox);
		IDs.splice(index, 1);
		moves++;
		checkTurnSingle();
		myfunc();
	}

}
// delay for robot first move when robot is X
function startAIX() {
	setTimeout(AIX, 2000);
}

//function that gets called in single player mode when user choose too be X
function clickX () {
	clickedX = 1;
	if (clickedX == 1) {
		document.getElementById("player0").disabled = true;
		document.getElementById("playerX").style.backgroundColor = "#E3C770"
	}
	if (clickedX == 0) {
		document.querySelector("#player0").disabled = false;
	}
	return clickedX
}

//function that gets called in single player mode when user choose too be 0
function click0 () {
	clicked0 = 1;
	if (clicked0 == 1) {
		document.querySelector("#playerX").disabled = true
		document.getElementById("player0").style.backgroundColor = "#E3C770"
	}
	if (clicked0 == 0) {
		document.querySelector("#playerX").disabled = false
	}
	return clicked0
}

// function to start game on single player mode
function startGame() {
	if (clickedX == 1 || clicked0 == 1) {
		win = 0;
		document.querySelector("div.inputUser").classList.add("hidden");
		document.querySelector("div.game").classList.remove("hidden");
		moves = 0;
		checkTurnSingle();
		click();
		// checks if user will be X or 0
		if (clickedX == 1) {
			singlePlayerUserX();
		}
		if (clicked0 == 1) {
			startAIX();
			singlePlayerUser0();
		}
	} else {
		alert("Choose a player to start game!")
	}	
}



//function that sets the function onclick for the boxes when user chooses to be X
function singlePlayerUserX() {
	for (i = 0; i < IDs.length; i++) {
		document.getElementById(IDs[i]).setAttribute("onclick", "clickerAI0('" + IDs[i] + "')");
	}
}

//function that sets the function onclick for the boxes when user chooses to be 0
function singlePlayerUser0() {
	for (i = 0; i < IDs.length; i++) {
		document.getElementById(IDs[i]).setAttribute("onclick", "clickerAIX('" + IDs[i] + "')");
	}
}

// Function to reset game
function restart() {
	//removes style if somebody won
	if ( win == 1) {
		unlight(winnerComb);
		document.getElementById('print').style.color = "#ffffff";
	}
	//reload options for robot
	IDs = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
	//clears all boxes
	document.getElementById("b1").value = "";
	document.getElementById("b2").value = "";
	document.getElementById("b3").value = "";
	document.getElementById("b4").value = "";
	document.getElementById("b5").value = "";
	document.getElementById("b6").value = "";
	document.getElementById("b7").value = "";
	document.getElementById("b8").value = "";
	document.getElementById("b9").value = "";
	// enables all boxes
	document.getElementById("b1").disabled = false;
	document.getElementById("b2").disabled = false;
	document.getElementById("b3").disabled = false;
	document.getElementById("b4").disabled = false;
	document.getElementById("b5").disabled = false;
	document.getElementById("b6").disabled = false;
	document.getElementById("b7").disabled = false;
	document.getElementById("b8").disabled = false;
	document.getElementById("b9").disabled = false;
	if (multiplayer) {
		startMultiplayerGame();
	} else {
		startGame();
	}

}


// MULTIPLAYER

// function for multi player mode that gets called when a box is clicked by a player, it sets if it was playerX's turn or 0 and checks if somebody won
function clicker(id) {
	if (moves == 0 || moves == 2 || moves % 2 == 0) {
		document.getElementById(id).value = "X"
	}
	else {
		document.getElementById(id).value = "0";
	}
	document.getElementById(id).disabled = true;
	myfunc();
	moves++;
	if (win == 0) {
		checkTurnMultiplayer();
	}
}

// function that gets called when press start for multiplayer mode
function startMultiplayerGame() {
	multiplayerX();
	multiplayer0();
	if (playerXName != undefined && player0Name != undefined){
		multiplayer = true;
		win = 0;
		document.querySelector("div.inputUser").classList.add("hidden");
		document.querySelector("div.game").classList.remove("hidden");
		moves = 0;
		checkTurnMultiplayer();
		click();
		for (i = 0; i < IDs.length; i++) {
			document.getElementById(IDs[i]).setAttribute("onclick", "clicker(id)");
		} 
	} else {
			alert("Fill in players names!")
		}
	}

// function that gets colled when player 1 chooses X and sets who is X and Who is 0
function multiplayerX () {
	if (document.getElementById("playerXmulti").checked == true) {
		playerXName = document.getElementById("player1-name").value;
		player0Name = document.getElementById("player2-name").value;
		document.getElementById("player0multi").disabled = true;
	}
	if (document.getElementById("playerXmulti").checked == false) {
		document.getElementById("player0multi").disabled = false;
	}
	console.log(playerXName, player0Name);
	return playerXName, player0Name;
}

// function that gets called when player 1 chooses 0 and sets who is X and Who is 0
function multiplayer0 () {
	if (document.getElementById("player0multi").checked == true) {
		player0Name = document.getElementById("player1-name").value;
		playerXName = document.getElementById("player2-name").value;
		document.getElementById("playerXmulti").disabled = true;
	}
	if (document.getElementById("player0multi").checked == false) {
		document.getElementById("playerXmulti").disabled = false;
	}
	return player0Name
}
