
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

// Game reset button:
$("#reset").click(function() {
	$('.square').empty();
  game   = [0,0,0,0,0,0,0,0,0];
  choose = ["zero","one","two","three","four","five","six","seven","eight","nine"];
})

// User/Machine Variable Declarations:
var user    = '';
var machine = '';

// Game Character Initialization:

$("#X").click(function() {

  user = 'X';
  machine = 'O';

  $('.pageLoad').fadeOut(750, function() {
    $(this).remove();
  });
});

$("#O").click(function() {

  user = 'O';
  machine = 'X';

  $('.pageLoad').fadeOut(750, function() {
    $(this).remove();
  });
});

// game array declaration

var game   = [0,0,0,0,0,0,0,0,0];
var choose = ["zero","one","two","three","four","five","six","seven","eight"];

// review function reviews for any winning combinations



// click functions for each box; each function initiates a computer click event

function computerPlay() {

  for (var i = 0; i < game.length; i++) {
    if (typeof game[i] === "number") {

    var index = -1;
    var elemId = undefined;

    while (typeof elemId !== "string") {
      index = Math.floor(Math.random() * choose.length);
      elemId = choose[index];
    }

    $("#" + elemId).html(machine);

    game[index] = machine;
    delete choose[index];

    console.log("Machine plays: " + index + elemId);
    }

  }

  else {
    console.log("It seems the game has ended.");
  }
}




// Add X on click:
$("#zero").click(function() {

  $("#zero").html(user);
  game[0] = user;
  delete choose[0];

  console.log(game, choose);

  computerPlay();

});

$("#one").click(function() {

  $("#one").html(user);
  game[1] = user;
  delete choose[1];

  console.log(game, choose);

  computerPlay();

});

$("#two").click(function() {

  $("#two").html(user);
  game[2] = user;
  delete choose[2];

  console.log(game, choose);

  computerPlay();

});


$("#three").click(function() {

  $("#three").html(user);
  game[3] = user;
  delete choose[3];

  console.log(game, choose);

  computerPlay();

});

$("#four").click(function() {

  $("#four").html(user);
  game[4] = user;
  delete choose[4];
  computerPlay();

});

$("#five").click(function() {

  $("#five").html(user);
  game[5] = user;
  delete choose[5];
  computerPlay();

});


$("#six").click(function() {

  $("#six").html(user);
  game[6] = user;
  delete choose[6];
  computerPlay();

});

$("#seven").click(function() {

  $("#seven").html(user);
  game[7] = seven;
  delete choose[7];
  computerPlay();

});

$("#eight").click(function() {

  $("#eight").html(user);
  game[8] = user;
  delete choose[8];

  computerPlay();

});














