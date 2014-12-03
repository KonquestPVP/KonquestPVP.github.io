var open = false;

$(document).ready(function() {
    $("#menuicon").click(function() {
        if (!open) {
            open = true;
            $("#overlay").fadeIn();
        } else if (open) {
            open = false;
            $("#overlay").fadeOut();
        }
    });
    
    var container = $("#menu");
    
    $("html").mouseup(function(e) {
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            open = false;
            $("#overlay").fadeOut();
        }    
    });
});
