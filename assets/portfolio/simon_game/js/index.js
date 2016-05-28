
var greenAudio  = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var redAudio    = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var yellowAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var blueAudio   = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

var game = [];
var user = [];
var rand = 1;
var count = 0;
var counter = 0;
var userCount = 0;
var n = 0;

// User click events trigget functions for each button:
$('#green').click(function() {
	green();
	user.push(1);
	userPlay();
});

$('#red').click(function() {
	red();
	user.push(2);
	userPlay();	
});

$('#yellow').click(function() {
	yellow();
	user.push(3);
	userPlay();	
});

$('#blue').click(function() {
	blue();
	user.push(4);
	userPlay();	
});

// Functions for each button:
function green() {
	reset();
	$('#green').toggleClass("clickedGreen");
	greenAudio.play();
}
function red() {
	reset()
	$('#red').toggleClass("clickedRed");
	redAudio.play();
}
function yellow() {
	reset()	
	$('#yellow').toggleClass("clickedYellow");
	yellowAudio.play();
}
function blue() {
	reset()
	$('#blue').toggleClass("clickedBlue");
	blueAudio.play();
}

// Reset function for all buttons:
function reset() {
	$("#green").removeClass("clickedGreen");
	$("#red").removeClass("clickedRed");
	$("#yellow").removeClass("clickedYellow");
	$("#blue").removeClass("clickedBlue");			
}


function random() {
	rand = Math.floor((Math.random() * 4) + 1);
	game.push(rand);
	return rand;
}

function simon() {

	if (rand === 1) {
		green();
		console.log("Clicked Green");
	}
	else if (rand === 2) {
		red();
		console.log("Clicked Red");
	}
	else if (rand === 3) {
		yellow();
		console.log("Clicked Yellow");		
	}
	else if (rand === 4) {
		blue();
		console.log("Clicked Blue");			
	}

}

function userPlay() {

	// Game ends function:
	if ( game.length === 3 && user.length === game.length ) {
		console.log("game over, you win!");
	}

	// User correctly completed a round:
	else if ( user.length === game.length && user[userCount] === game[userCount] ) {
		console.log("correct!");
		user = [];
		userCount = 0;

		setTimeout(function() {
			counter++;
			document.getElementById("gameCounter").innerHTML = counter + 1;			
			reset();
			check();
		}, 500);
	}

	// User correctly identifies next element in series:
	else if ( user[userCount] === game[userCount] ) {
		console.log("correct!");
		userCount++;
		setTimeout(function() {
			reset();
		}, 500);
	}

	else {
		console.log("wrong!");
	}

}

function repeat() {

	if ( game[n] === 1 ) {
		green();
		n++;
	}
	else if ( game[n] === 2) {
		red();
		n++;
	}
	else if ( game[n] === 3) {
		yellow();
		n++;
	}
	else if (game[n] === 4) {
		blue();
		n++;
	}	

}

function check() {

	function clear() {
		clearInterval(timeFunction);
	}

	var timeFunction = setInterval(function() {

		reset();

		if ( n !== game.length ) {
			repeat();
		}
		else if ( n === game.length ) {
			n = 0;
			clear();
			machine();
		}

	}, 750);

}


function machine() {

	var x = 1;
	var y = 1;

	function clear() {
		clearInterval(machine);
	}

	if ( count > 0 ) {
		x = 0;
		y = 0;
	}

	var machine = setInterval(function() {

			reset();
			random();
			simon();
			count++;

			// Resets buttons after machine plays final round, so the user can continue:
			if (count === counter + 1) {
				clear();
				setTimeout(function() {
					reset();
				}, 500);
			}

		 // 500 millisecond pause before first button press

	}, 750 * x); // Pause between iterations of button press functions

};


$("#startGame").click(function() {

	console.log("clicked");
	document.getElementById("gameCounter").innerHTML = 1;	
	machine();

});








// Show and hide the game instructions:
$("#instructions").click(function() {
	$('#box').show();
});
$("#close").click(function() {
	$('#box').hide();
});