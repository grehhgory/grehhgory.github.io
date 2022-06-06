// set background according to monitor width
function setBackground() {
	$(".background").attr("src", "assets/carousel-0" + "-" + bg_w + ".png");
}

// load rest of page after images have been loaded
function loadPage() {
	$("loadee").css("opacity", "1");
	$("loader").hide();

	// set up carousel
	$(".carousel").flickity({
		freeScroll: false,
		draggable: true,
		dragThreshold: 1, // default: 3(px)
		prevNextButtons: false,
		pageDots: false,
		percentPosition: true,
		cellAlign: "center",
	});
}

window.addEventListener("load", function () {
	// change background according to selected carousel cell
	$(".carousel").on("change.flickity", function (event, index) {
		console.log("Slide changed to " + index);
		$(".background")
			.hide()
			.attr("src", "assets/carousel-" + index + "-" + bg_w + ".png")
			.show();
		console.log(bg_w);
	});
});
