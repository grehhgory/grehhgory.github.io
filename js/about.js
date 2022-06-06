// set background according to monitor width
function setBackground() {
	$(".background").attr("src", "assets/lofi-" + bg_w + ".webp");
}

// load rest of page after images have been loaded
function loadPage() {
	$("loadee").css("opacity", "1");
	$("loader").hide();
}
