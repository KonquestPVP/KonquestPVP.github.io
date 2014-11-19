var open = false;

$(document).ready(function() {
   $("#menuicon").click (function() {
      if (!open) {
         $("html").css("overflow-x", "hidden");
         $("#menu").css("display", "block");
         $("#screen").animate({left: "-=200px"}, 400);
         open = true;
      } else if (open) {
         $("#screen").animate({left: "+=200px"}, 400, function() {
            $("html").css("overflow-x", "hidden");
            $("#menu").css("display", "none");
         });
         
         open = false;
      }
   });
});
