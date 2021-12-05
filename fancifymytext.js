function bigger(){
	document.getElementById("textfield").style.fontSize = "24pt";
}

function moo(){
	var text = document.getElementById("textfield")
	text.value = text.value.split(".").join("-Moo.")
	text.style.textTransform = "uppercase"
}

function fancyRadio(){
	document.getElementById("boring").checked = false;
	
	var text = document.getElementById("textfield")
	text.style.textDecoration = "underline";
	text.style.color = "blue";
	text.style.fontWeight = "bold";
}
function boringRadio(){
	document.getElementById("fancy").checked = false;
	
	var text = document.getElementById("textfield")
	text.style.textDecoration = "none";
	text.style.color = "black";
	text.style.fontWeight = "normal";
}








