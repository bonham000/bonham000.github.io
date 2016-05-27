
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

$("#instructions").click(function() {
	$('#box').show();
});
$("#close").click(function() {
	$('#box').hide();
})