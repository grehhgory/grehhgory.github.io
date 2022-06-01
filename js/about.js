window.addEventListener("load", function () {
	// get monitor width
	var bg_w;

	if (screen.width <= 960) bg_w = 960;
	else if (screen.width > 960 && screen.width <= 1920) bg_w = 1920;
	else if (screen.width > 1920) bg_w = 3840;

	// set background according to monitor width
	$(".background").attr("src", "assets/lofi-" + bg_w + ".png");
});
