const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const themeSetting = localStorage.getItem("color-schema") || "auto";
if (themeSetting === "dark" || (prefersDark && themeSetting !== "light-mode")) {
	document.documentElement.classList.toggle("dark-mode", true);
}

window.addEventListener("click", () => document.documentElement.classList.toggle("dark-mode"), false);
