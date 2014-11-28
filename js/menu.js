var open = false;

$(document).ready(function() {
    $("#menuicon").click (function() {
        if (!open) {
            open = true;
            $("#overlay").fadeIn();
        } else if (open) {
            open = false;
            $("#overlay").fadeOut();
        }
   });
});
