
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