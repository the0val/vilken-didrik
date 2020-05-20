let images = document.getElementById("img-grid").children
let selected = undefined

function select(i) {
	selected = i
	for (let i=0;i<9;i++) {
		if (i == selected) {
			images[i].style.border = "solid blue 4px"
			images[i].style.margin = "-4px"
		} else {
			images[i].style.border = ""
			images[i].style.margin = ""
		}
	}
}
