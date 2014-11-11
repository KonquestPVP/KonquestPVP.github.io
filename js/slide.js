var open = false;

$(document).ready(function() {
   $("#menuicon").click (function() {
      if (!open) {
         $("#menu").css("display", "block");
         $("h1, #menu, #content").animate({left: "-=15%"}, 1000);
         open = true;
      } else if (open) {
         $("h1, #menu, #content").animate({left: "+=15%"}, 1000, function() {$("#menu").css("display", "none");});
         
         open = false;
      }
   });
});
