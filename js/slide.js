var open = false;

$(document).ready(function() {
   $("#menuicon").click (function() {
      if (!open) {
         $("#menu").css("display", "block");
         $("nav ul, .content, #menu").animate({left: "-=15%"}, 1000);
         open = true;
      } else if (open) {
         $("nav ul, .content, #menu").animate({left: "+=15%"}, 1000, function() {$("#menu").css("display", "none");});
         
         open = false;
      }
   });
});