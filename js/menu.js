var open = false;

$(document).ready(function() {
    var menu = $("#menu");
    var button = $("#menuicon");
    
    $("#menuicon").mouseover(function() {
        $("#menuicon").css("background", "#667");
    });
    
    $("#menuicon").mouseout(function() {
        $("#menuicon").css("background", "#333");
    });
    
    button.click(function() {
        if (!open) {
            open = true;
            $("#overlay").fadeIn();
        } else if (open) {
            open = false;
            $("#overlay").fadeOut();
        }
    });
    
    $("#overlay").click(function(e) {
        if (!menu.is(e.target) && menu.has(e.target).length === 0 && !button.is(e.target)) {
            open = false;
            $("#overlay").fadeOut();
        }    
    });
});
