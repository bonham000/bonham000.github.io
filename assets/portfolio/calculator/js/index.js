
// Initialize variable to store expression string:
var answer = '';

// Clear function:
function clear() {

		setTimeout(function() {
			document.getElementById("answer").innerHTML = "";
		}, 2500);

	};

function review() {

	if (answer.length == 40) {
		document.getElementById("answer").innerHTML = "Your expression is getting so long!";
		answer = '';
		clear();
	}

};

// CE button calls clear function:
$("#clear").click(function() {
	answer = '';
	document.getElementById("answer").innerHTML = "";
});

// Functions to handle operations!

	function add() {
		answer += "+";
		document.getElementById("answer").innerHTML += "+";
		review();
	}

	function subtract() {
		answer += "-";
		document.getElementById("answer").innerHTML += "-";
		review();
	};

	function multiply() {
		answer += "*";
		document.getElementById("answer").innerHTML += "*";
		review();
	};

	function divide() {
		answer += "/";
		document.getElementById("answer").innerHTML += "/";
		review();
	};

	// Operator buttons call corresponding functions:
	$("#add").click(function() {
		add();
	});

	$("#subtract").click(function() {
		subtract();
	});

	$("#multiply").click(function() {
		multiply();
	});

	$("#divide").click(function() {
		divide();
	});

// Functions for number buttons:

	function backspace() {
		answer = answer.slice(0,-1);
		console.log(answer);
		document.getElementById("answer").innerHTML = answer;
		review();
	};

	$("#backspace").click(function() {
		backspace();
	});

	function decimal() {
		answer += ".";
		document.getElementById("answer").innerHTML += ".";
		review();
	};


	$("#float").click(function() {
		decimal();
	});

	function zero() {
		answer += "0";
		document.getElementById("answer").innerHTML += "0";
		review();
	};

	$("#zero").click(function() {
		zero();
	});

	function one() {
		answer += "1";
		document.getElementById("answer").innerHTML += "1";
		review();
	};

	$("#one").click(function() {
		one();
	});

	function two() {
		answer += "2";
		document.getElementById("answer").innerHTML += "2";
		review();
	};

	$("#two").click(function() {
		two();
	});

	function three() {
		answer += "3";
		document.getElementById("answer").innerHTML += "3";
		review();
	};

	$("#three").click(function() {
		three();
	});

	function four() {
		answer += "4";
		document.getElementById("answer").innerHTML += "4";
		review();
	};

	$("#four").click(function() {
		four();
	});

	function five() {
		answer += "5";
		document.getElementById("answer").innerHTML += "5";
		review();
	};

	$("#five").click(function() {
		five();
	});

	function six() {
		answer += "6";
		document.getElementById("answer").innerHTML += "6";
		review();
	};

	$("#six").click(function() {
		six();
	});

	function seven() {
		answer += "7";
		document.getElementById("answer").innerHTML += "7";
		review();
	};

	$("#seven").click(function() {
		seven();
	});

	function eight() {
		answer += "8";
		document.getElementById("answer").innerHTML += "8";
		review();
	};

	$("#eight").click(function() {
		eight();
	});

	function nine() {
		answer += "9";
		document.getElementById("answer").innerHTML += "9";
		review();
	};

	$("#nine").click(function() {
		nine();
	});


function evaluate() {

		try {
			// easily use eval() to evaluate string expression and return result:
			var result = eval(answer);
			document.getElementById("answer").innerHTML = result;
		}

		catch(err) {
			// catches user input errrors, such as 5 * + - / 10
			console.log("There was an error");
			document.getElementById("answer").innerHTML = "Your calculation contained an error... Sorry!";
			clear();
		}

	};

// Enter evaluates expression:
	$("#enter").click(function() {
		console.log(answer);
		evaluate();
	});

// Keyboard events call functions:
document.body.onkeyup = function(e){
    if(e.keyCode == 83)        {evaluate();}
    else if (e.keyCode == 8)   {backspace();}
    else if (e.keyCode == 187) {add();}
    else if (e.keyCode == 189) {subtract();}
    else if (e.keyCode == 88)  {multiply();}
	else if (e.keyCode == 191) {divide();}
    else if (e.keyCode == 48)  {zero();}
    else if (e.keyCode == 49)  {one();}
    else if (e.keyCode == 50)  {two();}
    else if (e.keyCode == 51)  {three();}    
    else if (e.keyCode == 52)  {four();}
    else if (e.keyCode == 53)  {five();}
    else if (e.keyCode == 54)  {six();}
    else if (e.keyCode == 55)  {seven();}
    else if (e.keyCode == 56)  {eight();}
    else if (e.keyCode == 57)  {nine();}
    else if (e.keyCode == 190) {decimal();}
    else if (e.keyCode == 67) {answer = ''; document.getElementById("answer").innerHTML = "";}
}
