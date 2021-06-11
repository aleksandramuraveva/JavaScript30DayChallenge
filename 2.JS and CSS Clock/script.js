const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

setInterval(function showTime(){
	let time = new Date()
	let hours = time.getHours();
	let seconds = time.getSeconds();
	let minutes = time.getMinutes();
	let hdegrees = (hours * 30) + 90;
	let mdegrees = (minutes * 6)+ 90;
	let sdegrees = (seconds * 6) + 90;

	hourHand.style.transform = `rotate(${hdegrees}deg)`;
	minuteHand.style.transform = `rotate(${mdegrees}deg)`;
	secondHand.style.transform = `rotate(${sdegrees}deg)`;
},1000)


