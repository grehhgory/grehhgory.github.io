const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const themeSetting = localStorage.getItem("color-schema") || "auto";
if (themeSetting === "dark" || (prefersDark && themeSetting !== "light-mode")) {
	document.documentElement.classList.toggle("dark-mode", true);
}

window.addEventListener("click", () => document.documentElement.classList.toggle("dark-mode"), false);

$("loadee").css("opacity", "0");
var bg_w;

window.addEventListener("load", function () {
	// get monitor width and set background according to monitor width
	if (screen.width < 960) bg_w = 960;
	else if (screen.width >= 960 && screen.width < 1920) bg_w = 1920;
	else if (screen.width >= 1920) bg_w = 3840;
	setBackground();

	// force load images
	var imgs = document.images,
		len = imgs.length,
		counter = 0;

	[].forEach.call(imgs, function (img) {
		if (img.complete) incrementCounter();
		else img.addEventListener("load", incrementCounter, false);
	});

	function incrementCounter() {
		counter++;
		if (counter === len) {
			console.log("All " + len + " images loaded!");
			setTimeout(loadPage, 500);
		}
	}
});
