
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

	$(".name").hide();
	$(".nameAbout").hide();

	setTimeout(function() {

		$(".name").fadeIn(500);
		$(".nameAbout").fadeIn(500);

	}, 500);

	setTimeout(function() {

		// Show/Hide page scroll links on mouseover of main text:
		$("#wrapper").mouseover(function() {
			$(".name").hide();
			$(".nameAbout").hide();
			$(".scroll").show();
		});

		$("#wrapper").mouseout(function() {
			$(".name").show();
			$(".nameAbout").show();
			$(".scroll").hide();
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

	}, 1250);

}



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
})

$("#facebook").click(function() {
	window.open('/assets/portfolio/facebook/index.html', '_blank') ;
})

$("#new_river").click(function() {
	window.open('/assets/portfolio/new_river/index.html', '_blank') ;
})

$("#asia").click(function() {
	window.open('/assets/portfolio/asia/index.html', '_blank') ;
})

$("#sejong").click(function() {
	window.open('/assets/portfolio/sejong/index.html', '_blank') ;
})

$("#quotes").click(function() {
	window.open('/assets/portfolio/quotes/index.html', '_blank') ;
})

$("#weather").click(function() {
	window.open('/assets/portfolio/weather/index.html', '_blank') ;
})

$("#wikipedia").click(function() {
	window.open('/assets/portfolio/wikipedia/index.html', '_blank') ;
})

$("#stocks").click(function() {
	window.open('/assets/portfolio/stocks/index.html', '_blank') ;
})

$("#twitch").click(function() {
	window.open('/assets/portfolio/twitch/index.html', '_blank') ;
})

$("#calculator").click(function() {
	window.open('/assets/portfolio/calculator/index.html', '_blank') ;
})

$("#pomodoro").click(function() {
	window.open('/assets/portfolio/pomodoro/index.html', '_blank') ;
})

$("#ticTacToe").click(function() {
	window.open('/assets/portfolio/tic_tac_toe/index.html', '_blank') ;
})

$("#simon").click(function() {
	window.open('/assets/portfolio/simon_game/index.html', '_blank') ;
})





