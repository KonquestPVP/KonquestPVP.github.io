var open = false;

$(document).ready(function() {
   $("#menuicon").click (function() {
      if (!open) {
         $("#menu").css("display", "block");
         $("#bar, #menu, #content").animate({left: "-=15%"}, 1000);
         open = true;
      } else if (open) {
         $("#bar, #menu, #content").animate({left: "+=15%"}, 1000, function() {$("#menu").css("display", "none");});
         
         open = false;
      }
   });
});
