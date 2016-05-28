
$('#green').click(function() {
	green();
});

$('#red').click(function() {
	red();
});

$('#yellow').click(function() {
	yellow();
});

$('#blue').click(function() {
	blue();
});

// Functions for each button:
function green() {
	$('#green').toggleClass("clickedGreen");
}
function red() {
	$('#red').toggleClass("clickedRed");
}
function yellow() {
	$('#yellow').toggleClass("clickedYellow");
}
function blue() {
	$('#blue').toggleClass("clickedBlue");
}

function reset() {
	$("#green").removeClass("clickedGreen");
	$("#red").removeClass("clickedRed");
	$("#yellow").removeClass("clickedYellow");
	$("#blue").removeClass("clickedBlue");			
}


var game = [];
var rand = 1;
var counter = 3;

function random() {
	rand = Math.floor((Math.random() * 4) + 1);
	game.push(rand);
	return rand;
}

function simon() {

	var greenAudio  = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
	var redAudio    = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
	var yellowAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
	var blueAudio   = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

		if (rand === 1) {
			green();
			greenAudio.play();
			console.log("Clicked Green");
		}
		else if (rand === 2) {
			red();
			redAudio.play();
			console.log("Clicked Red");
		}
		else if (rand === 3) {
			yellow();
			yellowAudio.play();
			console.log("Clicked Yellow");		
		}
		else if (rand === 4) {
			blue();
			blueAudio.play();
			console.log("Clicked Blue");			
		}

}




function machine() {

	var count = 0;

	function clear() {
		clearInterval(machine);
	}

	var machine = setInterval(function() {

	setTimeout(function() {

		reset();
		random();
		simon();
		count++;

		if (count === counter) {
			clear();
			setTimeout(function() {
				reset();
			}, 2000);
		}

	}, 500);

	}, 2000);


};


$("#startGame").click(function() {

	machine();

});


	// Reset all to zero:
	// setTimeout(function() {
	// 	reset();
	// }, 1500);

	// User plays to confirm sequence:







// Show and hide the game instructions:
$("#instructions").click(function() {
	$('#box').show();
});
$("#close").click(function() {
	$('#box').hide();
});