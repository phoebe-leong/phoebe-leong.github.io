function toggle()
{
	if (window.localStorage.theme == "dark")
	{
		document.querySelector("html").id = "theme-light";
		document.querySelector("html").style.backgroundColor = "#FCF1F1"

		window.localStorage.setItem("theme", "light")
	}
	else
	{
		document.querySelector("html").id = "theme-dark";
		document.querySelector("html").style.backgroundColor = "#16171A"

		window.localStorage.setItem("theme", "dark")
	}
}

function loadThemes() {
	// Assuming that index.html is the first page visited
	if (window.location.pathname == "/")
	{
		window.localStorage.setItem("theme", "dark")

		// CSS makes the background go weird, so it happens in JS instead
		document.querySelector("html").style.backgroundColor = "#16171A"
	}
	else
	{
		if (window.localStorage.getItem("theme") == "light") 
		{
			document.querySelector("html").id = "theme-light";
			document.querySelector("html").style.backgroundColor = "#FCF1F1";
		}
		else
		{
			document.querySelector("html").style.backgroundColor = "#16171A";
		}
	}
}