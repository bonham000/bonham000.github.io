
// Resize body height to veritcally center game box within window:
$(document).ready(function() {
  
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('body').css('min-height', windowHeight);
  };
  
  setHeight();
  $(window).resize(function() {
    setHeight();
  });

});

function reset() {
	$('.square').empty();
  $('.gameEnd').empty();
  game   = [0,0,0,0,0,0,0,0,0];
  choose = ["zero","one","two","three","four","five","six","seven","eight"];
  turn = 0;
};

// Game reset button:
$("#reset").click(function() {
  reset();
});

// User/Machine Variable Declarations:
var user    = '';
var machine = '';
var turn = 0;

// Game Character Initialization:

$("#X").click(function() {

  user = 'X';
  machine = 'O';
  reset();

  $('.pageLoad').fadeOut(750, function() {
    $(this);
  });
});

$("#O").click(function() {

  user = 'O';
  machine = 'X';
  reset();

  $('.pageLoad').fadeOut(750, function() {
    $(this);
  });
});

// game array declaration

var game   = [0,0,0,0,0,0,0,0,0];
var choose = ["zero","one","two","three","four","five","six","seven","eight"];

// Win function:

function win() {
  console.log("You win!");
  $('.pageLoad').append("<div class='begin gameEnd'><span id='winner'>You won!</span><p id='replay'>Select X or O above to replay</p></div>");
  $('.pageLoad').fadeIn(500);
}

function lose() {
  console.log("You lose!");
  $('.pageLoad').append("<div class='begin gameEnd'><span id='loser'>You lost!</span><p id='replay'>Select X or O above to replay</p></div>");
  $('.pageLoad').fadeIn(500);
}


// review function reviews for any winning combinations

function check() {

  // check for a winner:
  if      ( game[0] === user && game[1] === user && game[2] === user) { win(); }
  else if ( game[3] === user && game[4] === user && game[5] === user) { win(); }
  else if ( game[6] === user && game[7] === user && game[8] === user) { win(); }  
  else if ( game[0] === user && game[3] === user && game[6] === user) { win(); }
  else if ( game[1] === user && game[4] === user && game[7] === user) { win(); }  
  else if ( game[2] === user && game[5] === user && game[8] === user) { win(); }
  else if ( game[0] === user && game[4] === user && game[8] === user) { win(); }  
  else if ( game[6] === user && game[4] === user && game[2] === user) { win(); }

  // if no winner and game is not finished, computer plays:
  else {
      computerPlay();
  }
}
  
function checkMachine() {

  if      ( game[0] === machine && game[1] === machine && game[2] === machine) { lose(); }
  else if ( game[3] === machine && game[4] === machine && game[5] === machine) { lose(); }
  else if ( game[6] === machine && game[7] === machine && game[8] === machine) { lose(); }  
  else if ( game[0] === machine && game[3] === machine && game[6] === machine) { lose(); }
  else if ( game[1] === machine && game[4] === machine && game[7] === machine) { lose(); }  
  else if ( game[2] === machine && game[5] === machine && game[8] === machine) { lose(); }
  else if ( game[0] === machine && game[4] === machine && game[8] === machine) { lose(); }  
  else if ( game[6] === machine && game[4] === machine && game[2] === machine) { lose(); }
  else {
    turn = 0;
    return;
  }

}

// click functions for each box; each function initiates a computer click event

function computerPlay() {

    setTimeout(function() {

    var index = -1;
    var elemId = undefined;

    while (typeof elemId !== "string") {
        index = Math.floor(Math.random() * choose.length);
        elemId = choose[index];
    }

    $("#" + elemId).html(machine);
    console.log("Current elemId is: " + elemId);

    game[index] = machine;
    delete choose[index];

    checkMachine();

  }, 500);

};

setTimeout(computerPlay, 500);


function checkTurn() {

  if (turn === 1) {
    alert("Wait your turn!");
    return false;
  }
  else {
    return true;
  }

}

// Add X on click:
$("#zero").click(function() {

  if (typeof game[0] !== "string") {

      if ( checkTurn() ) {

      $("#zero").html(user);
      game[0] = user;
      delete choose[0];

      turn = 1;

      check();

      }

  }

  else { return; }

});

$("#one").click(function() {

  if (typeof game[1] !== "string") {

      if ( checkTurn() ) {

      $("#one").html(user);
      game[1] = user;
      delete choose[1];

      turn = 1;

      check();

      }

  }

  else { return; }

});

$("#two").click(function() {

  if (typeof game[2] !== "string") {

      if ( checkTurn() ) {

      $("#two").html(user);
      game[2] = user;
      delete choose[2];

      turn = 1;

      check();

      }

  }

  else { return; }

});


$("#three").click(function() {

  if (typeof game[3] !== "string") {

      if ( checkTurn() ) {

      $("#three").html(user);
      game[3] = user;
      delete choose[3];

      check();

      }

  }

  else { return; }

});

$("#four").click(function() {

  if (typeof game[4] !== "string") {

      if ( checkTurn() ) {

      $("#four").html(user);
      game[4] = user;
      delete choose[4];

      turn = 1;
      check();

      }

  }

  else { return; }

});

$("#five").click(function() {

  if (typeof game[5] !== "string") {

      if ( checkTurn() ) {

      $("#five").html(user);
      game[5] = user;
      delete choose[5];

      turn = 1;
      check();

      }

  }

  else { return; }

});


$("#six").click(function() {

  if (typeof game[6] !== "string") {

      if ( checkTurn() ) {

      $("#six").html(user);
      game[6] = user;
      delete choose[6];

      turn = 1;    
      check();

      }

  }

  else { return; }

});

$("#seven").click(function() {

  if (typeof game[7] !== "string") {

      if ( checkTurn() ) {

      $("#seven").html(user);
      game[7] = user;
      delete choose[7];

      turn = 1;    
      check();

      }

  }

  else { return; }

});

$("#eight").click(function() {

  if (typeof game[8] !== "string") {

      if ( checkTurn() ) {

      $("#eight").html(user);
      game[8] = user;
      delete choose[8];

      turn = 1;
      check();

      }
  }

  else { return; }

});














