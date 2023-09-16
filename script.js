function newTab(url) {
	window.open(url, "_blank")
}

// --------------- PAGE THEME CODE STARTS HERE --------------- \\

var html = document.querySelector("html")

const colours = {
	dark: "#16171A",
	light: "#212226"
}

function storage(action, data) {
	if (action == "get") {
		return sessionStorage.getItem("theme")
	} else {
		sessionStorage.setItem("theme", data)
	}
}

function themeToggle() {
	if (storage("get") == "dark") {
		html.style.backgroundColor = colours.light
		storage("set", "light")
	} else {
		html.style.backgroundColor = colours.dark
		storage("set", "dark")
	}
}

window.onload = () => {
	if (storage("get") == "dark") {
		html.style.backgroundColor = colours.dark
	}

	document.addEventListener("click", (e) => {
		/*if (e.target.tagName != "BUTTON" && e.target.tagName != "LI") {
			themeToggle()
		}
		console.log(e.target.tagName)*/

		themeToggle()
	})

	document.body.addEventListener("click", (event) => {
		event.stopPropagation()
	})
}