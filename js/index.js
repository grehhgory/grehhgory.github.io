$("loadee").css("opacity", "0");

window.addEventListener("load", function () {
	// get monitor width
	var bg_w;

	if (screen.width <= 960) bg_w = 960;
	else if (screen.width > 960 && screen.width <= 1920) bg_w = 1920;
	else if (screen.width > 1920) bg_w = 3840;

	// set background according to monitor width
	$(".background").attr("src", "assets/carousel-0" + "-" + bg_w + ".png");

	// fade body in
	setTimeout(function () {
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
	}, 3000);

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
