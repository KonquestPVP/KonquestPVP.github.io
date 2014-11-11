var open = false;

$(document).ready(function() {
   $("#menuicon").click (function() {
      if (!open) {
         $("#menu").css("display", "block");
         $("#screen").animate({left: "-=15%"}, 1000);
         open = true;
      } else if (open) {
         $("#screen").animate({left: "+=15%"}, 1000, function() {$("#menu").css("display", "none");});
         
         open = false;
      }
   });
});
