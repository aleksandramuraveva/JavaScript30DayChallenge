const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");



	
// function showTime() {
	// const time = new Date();
	// let seconds = time.getSeconds() + 45;
	// let sec = seconds + 60;

	// // secondHand.style.transform = `rotate(${sec}deg)`;
	// console.log(time);
	// if (time.getSeconds() === 0) {
	// 	sec = 45;
	// }
	
// }

// setInterval(showTime, 1000);
// const seconds = time.getSeconds();
// console.log(seconds)



// 	// let seconds = time.getSeconds();
// function showTime() {
// 	let time = new Date();
// 	setInterval => (() {
// 		console.log(this.time);
// 	}, 1000)
// }






setInterval(function showTime(){
	let time = new Date()
	let hours = time.getHours();
	let seconds = time.getSeconds();
	let minutes = time.getMinutes();
	let hdegrees = (hours * 30) + 90;
	let mdegrees = (minutes * 6)+ 90;
	let sdegrees = (seconds * 6) + 90;
	console.log(time);
	console.log(hours);
	console.log(minutes);
	console.log(seconds);
	hourHand.style.transform = `rotate(${hdegrees}deg)`;
	minuteHand.style.transform = `rotate(${mdegrees}deg)`;
	secondHand.style.transform = `rotate(${sdegrees}deg)`;
},1000)


