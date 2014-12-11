var open = false;

function hoverOn() {
    $("#menuicon").css("background", "#667");
}

function hoverOff() {
    $("#menuicon").css("background", "#333");
}

function setMenuVisible(visible) {
    if (visible) {
        open = true;
        $("#overlay").fadeIn({
            done : function(animation, jumpToEnd) {
                $("#container-main").css("-webkit-filter", "blur(1px)");
                $("#dropdown").slideDown(); // change #dropdown to #menu if test css fails
            }
        });
    } else {
        open = false;
        $("#dropdown").slideUp({ // change #dropdown to #menu if test css fails
            done : function(animation, jumpToEnd) {
                $("#container-main").css("-webkit-filter", "blur(0px)");
                $("#overlay").fadeOut();
            }
        });
    }
}

function hoverOnMenuItem() {
    $(this).animate({"border-left-width": "5px"}, 200);
}

function hoverOffMenuItem() {
    $(this).animate({"border-left-width": "0px"}, 200);
}

$(document).ready(function() {
    var menu = $("#menu");
    var button = $("#menuicon");

    $("#menuicon").on("touchstart", hoverOn);
    $("#menuicon").on("mouseenter", hoverOn);
    $("#menuicon").on("mouseleave", hoverOff);
    $("#menuicon").on("touchmove", hoverOff);
    $("#menuicon").on("click", hoverOff);

    button.click(function() {
        setMenuVisible(!open);
    });
            
    var menuItem = $("#overlay li");
    menuItem.on("touchstart", hoverOnMenuItem);
    menuItem.on("mouseenter", hoverOnMenuItem);
    menuItem.on("mouseleave", hoverOffMenuItem);
    menuItem.on("touchmove", hoverOffMenuItem);

    $("#overlay").click(function(e) {
        if (!menu.is(e.target)
                && menu.has(e.target).length === 0
                && !button.is(e.target)) {
            setMenuVisible(false);
        }
    });
});