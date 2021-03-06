// set background according to monitor width
function setBackground() {
	$(".background").attr("src", "assets/carousel-0" + "-" + bg_w + ".png");
}

// set up carousel
window.addEventListener("load", function () {
	// initialise carousel
	$(".carousel").flickity({
		freeScroll: false,
		draggable: true,
		dragThreshold: 1, // default: 3(px)
		prevNextButtons: false,
		pageDots: false,
		percentPosition: true,
		cellAlign: "center",
	});

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
