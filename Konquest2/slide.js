var open = false;

$(document).ready(function() {
    $("#toggle").click(function(){
            if (!open) {
                $("#slider").animate({left: "+=46px"});
                open = true;
            } else {
                $("#slider").animate({left: "-=46px"});
                open = false;
            }
    });
});