const panels = document.querySelectorAll(".panel");

function toggleOpen() {
	panels.forEach(panel => panel.classList.remove("open"));

	if (!this.className.includes("open")) {
		this.classList.toggle("open");
	}
}

function toggleActive(event) {
	if (event.propertyName.includes("flex-grow")) {
		this.classList.toggle("open-active");
	}
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
