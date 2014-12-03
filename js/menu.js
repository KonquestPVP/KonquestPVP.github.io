var open = false;

function hoverOn() {
    $("#menuicon").css("background", "#667");
}

function hoverOff() {
    $("#menuicon").css("background", "#333");
}

$(document).ready(function() {
    var menu = $("#menu");
    var button = $("#menuicon");
    
    $("#menuicon").on("touchstart", hoverOn);
    $("#menuicon").on("mouseenter", hoverOn);
    $("#menuicon").on("mouseleave", hoverOff);
    $("#menuicon").on("touchmove", hoverOff);
    $("#menuicon").on("click", function() {
        if($("#menuicon").mouseleave()) {
            hoverOff;
        }
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
