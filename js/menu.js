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
				$("#overlay ul").slideDown();
			}
		});
	} else {
		open = false;
		$("#overlay ul").slideUp({
			done : function(animation, jumpToEnd) {
				$("#overlay").fadeOut();
			}
		});
	}
}

$(document).ready(
		function() {
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

			$("#overlay").click(
					function(e) {
						if (!menu.is(e.target)
								&& menu.has(e.target).length === 0
								&& !button.is(e.target)) {
							setMenuVisible(false);
						}
					});
		});
