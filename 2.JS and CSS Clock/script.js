const secondHand = document.querySelector(".second-hand");


setInterval(showTime, 1000);
let x = 0;
function showTime() {
	x = x + 1;
	secondHand.style.transform = "rotate(" + x + "deg)";
	const time = new Date();
	// console.log(time);
}