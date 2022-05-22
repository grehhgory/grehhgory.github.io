var bg_w;

if (screen.width <= 960) bg_w = 960;
else if (screen.width > 960 && screen.width <= 1920) bg_w = 1920;
else if (screen.width > 1920) bg_w = 3840;

$(".background").attr("src", "assets/carousel-0" + "-" + bg_w + ".png");

$(".carousel").flickity({
	freeScroll: false,
	draggable: true,
	dragThreshold: 1, // default: 3(px)
	prevNextButtons: false,
	pageDots: false,
	percentPosition: true,
	cellAlign: "center",
});

$(".carousel").on("change.flickity", function (event, index) {
	console.log("Slide changed to " + index);
	$(".background")
		.hide()
		.attr("src", "assets/carousel-" + index + "-" + bg_w + ".png")
		.show();
	console.log(bg_w);
});
