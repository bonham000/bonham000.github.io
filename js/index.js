
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

window.onload = function() {

	// Show/Hide page scroll links on mouseover of main text:
	$("#wrapper").mouseover(function() {
		$(".name").css("color", "rgba(15,15,15,.35");
		$(".nameAbout").css("color", "rgba(15,15,15,.15");
		$(".scroll").css("opacity", "1");
	});

	$("#wrapper").mouseout(function() {
		$(".name").css("color", "rgb(45,45,45)");
		$(".nameAbout").css("color", "rgb(45,45,45");
		$(".scroll").css("opacity", "0");
	});

};

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
	window.open('/assets/portfolio/new_river/index.html', '_blank') ;
});

$("#asia").click(function() {
	window.open('/assets/portfolio/asia/index.html', '_blank') ;
});

$("#sejong").click(function() {
	window.open('/assets/portfolio/sejong/index.html', '_blank') ;
});

$("#quotes").click(function() {
	window.open('/assets/portfolio/quotes/index.html', '_blank') ;
});

$("#weather").click(function() {
	window.open('/assets/portfolio/weather/index.html', '_blank') ;
});

$("#wikipedia").click(function() {
	window.open('/assets/portfolio/wikipedia/index.html', '_blank') ;
});

$("#stocks").click(function() {
	window.open('/assets/portfolio/stocks/index.html', '_blank') ;
});

$("#twitch").click(function() {
	window.open('/assets/portfolio/twitch/index.html', '_blank') ;
});

$("#calculator").click(function() {
	window.open('/assets/portfolio/calculator/index.html', '_blank') ;
});

$("#pomodoro").click(function() {
	window.open('/assets/portfolio/pomodoro/index.html', '_blank') ;
});

$("#ticTacToe").click(function() {
	window.open('/assets/portfolio/tic_tac_toe/index.html', '_blank') ;
});

$("#simon").click(function() {
	window.open('/assets/portfolio/simon_game/index.html', '_blank') ;
});

$("#unix").click(function() {
	window.open('https://unix-time-stamp.herokuapp.com/', '_blank') ;
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




