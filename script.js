const colorArr = ["#094074", "#3C6997", "#5ADBFF", "#FFDD4A", "#FE9000", 
"#8E9B90", "#93C0A4", "#B6C4A2", "#D4CDAB", "#DCE2BD",
"#2D7DD2", "#97CC04", "#EEB902", "#F45D01", "#474647"];

const randBG = () => {
	let rand = Math.floor(Math.random()*15);
	document.body.style.backgroundColor = colorArr[rand];
	document.querySelector("span").innerHTML = colorArr[rand];
}

document.querySelector("button").addEventListener("click",randBG);