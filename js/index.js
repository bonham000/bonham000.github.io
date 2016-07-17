
// Resive top and bottom divs based on window height:
$(document).ready(function() {

  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.main').css('min-height', windowHeight);
    $('.contact').css('min-height', windowHeight);

  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });

});

// Show/Hide scroll to top arrow based on page position:
$(window).scroll(function() {
	if ($(this).scrollTop()) {
		$("#topPage").fadeIn();
	}
	else {
		$('#topPage').fadeOut();
	}
});

// Animate scrolling of page through internal links:
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Click functions link portfolio image divs to assets:
$("#google").click(function() {
	window.open('/assets/portfolio/google/index.html', '_blank') ;
});

$("#facebook").click(function() {
	window.open('/assets/portfolio/facebook/index.html', '_blank') ;
});

$("#new_river").click(function() {
	window.open('/assets/portfolio/new-river/index.html', '_blank') ;
});

$("#asia").click(function() {
	window.open('/assets/portfolio/asia/index.html', '_blank') ;
});

$("#sejong").click(function() {
	window.open('/assets/portfolio/sejong/index.html', '_blank') ;
});

$("#quotes").click(function() {
	window.open('/assets/portfolio/quotes-2/index.html', '_blank') ;
});

$("#weather").click(function() {
	window.open('/assets/portfolio/weather-2/index.html', '_blank') ;
});

$("#wikipedia").click(function() {
	window.open('/assets/portfolio/wikipedia-2/index.html', '_blank') ;
});

$("#stocks").click(function() {
	window.open('/assets/portfolio/stocks/index.html', '_blank') ;
});

$("#twitch").click(function() {
	window.open('/assets/portfolio/twitch-2/index.html', '_blank') ;
});

$("#calculator").click(function() {
	window.open('/assets/portfolio/calculator-2/index.html', '_blank') ;
});

$("#pomodoro").click(function() {
	window.open('/assets/portfolio/pomodoro-2/index.html', '_blank') ;
});

$("#ticTacToe").click(function() {
	window.open('/assets/portfolio/tic-tac-toe-2/index.html', '_blank') ;
});

$("#simon").click(function() {
	window.open('/assets/portfolio/simon-2/index.html', '_blank') ;
});

$("#fccFrontEnd").click(function() {
	window.open('/assets/portfolio/front-end-projects/index.html', '_blank') ;
});

$("#reactProjects").click(function() {
	window.open('/assets/portfolio/25-react-projects/index.html', '_blank') ;
});

$("#markdown").click(function() {
	window.open('/assets/portfolio/react-markdown/index.html', '_blank') ;
});

$("#leaderboard").click(function() {
	window.open('/assets/portfolio/leaderboard/index.html', '_blank') ;
});

$("#recipeBox").click(function() {
	window.open('/assets/portfolio/recipe-box/index.html', '_blank') ;
});

$("#notesApp").click(function() {
	window.open('/assets/portfolio/notes-app/index.html', '_blank') ;
});

$("#conway").click(function() {
	window.open('/assets/portfolio/conway/index.html', '_blank') ;
});

$("#dungeon").click(function() {
	window.open('/assets/portfolio/dungeon/index.html', '_blank') ;
});

$("#unix").click(function() {
	window.open('https://unix-time-stamp.herokuapp.com/', '_blank') ;
});

$("#barChart").click(function() {
	window.open('/assets/portfolio/bar-chart/index.html', '_blank') ;
});

$("#scatterplot").click(function() {
	window.open('/assets/portfolio/scatterplot/index.html', '_blank') ;
});

$("#heatMap").click(function() {
	window.open('/assets/portfolio/heat-map/index.html', '_blank') ;
});

$("#forceLayout").click(function() {
	window.open('/assets/portfolio/force-layout/index.html', '_blank') ;
});

$("#globalMap").click(function() {
	window.open('/assets/portfolio/global-map/index.html', '_blank') ;
});

$("#requestHeader").click(function() {
	window.open('https://request-header-parser-service.herokuapp.com/', '_blank') ;
});

$("#microUrl").click(function() {
	window.open('https://micro-url-service.herokuapp.com/', '_blank') ;
});

$("#imageSearch").click(function() {
	window.open('https://custom-image-search.herokuapp.com/', '_blank') ;
});

$("#fileMeta").click(function() {
	window.open('https://upload-metadata-microservice.herokuapp.com/', '_blank') ;
});




