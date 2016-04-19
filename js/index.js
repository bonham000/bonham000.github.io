// Waiting for user to click Welcome Icon:
$("#enter").click(function() {
  
  // Welcome Icon slides up and out of the window:
  $("#enter").animate({top: "-500px"}, 700);
  
  // Primary blue background fades out;
  $("#img_1").fadeOut(1000);
  
  // All other elements animate out of the window:
  $("#img_2").animate({bottom: "-45px"}, 300);
  $("#img_2").animate({left: "-1000px"}, 1500);
  
  $("#img_3").animate({top: "-25px"}, 300);
  $("#img_3").animate({right: "-150px", top: "-350px"}, 1500);
  
  $("img_4").animate({right: "25px", bottom: "25px"}, 300);
  $("#img_4").animate({right: "-350px", bottom: "-1000px"}, 1500);
  $("#img_4").animate({left: "-3000px"}, 10);

  // Code for content animation on main page: 
  $("#sub_title").animate({"margin-top":"0"}, 2000);
  $("#work").animate({"margin-top":"60"}, 1750);
  $("#paragraph").animate({"margin-top":"60"}, 1500);
  $("#cv").animate({"margin-top":"-10"}, 1000);
  $("#contact").animate({"margin-top":"50"}, 750);

});