var open = false;

$(document).ready(function() {
   $(".menuicon").click (function() {
      if (!open) {
         $("#closeicon").css("visibility", "visible"); 
         $("#menuicon").css("visibility", "hidden");
         $("html").css("overflow-x", "hidden");
         $("#menu").css("display", "block");
         $("#screen").animate({left: "-=200px"}, 400);
         open = true;
      } else if (open) {
         $("#closeicon").css("visibility", "hidden"); 
         $("#menuicon").css("visibility", "visible");
         $("#screen").animate({left: "+=200px"}, 400, function() {
            $("html").css("overflow-x", "hidden");
            $("#menu").css("display", "none");
         });
         
         open = false;
      }
   });
});
