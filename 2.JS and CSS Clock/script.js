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






setInterval(function showSeconds(){
	let time = new Date()
	let seconds = time.getSeconds();
	let degrees = (seconds * 6) + 90
	console.log(seconds)
	secondHand.style.transform = `rotate(${degrees}deg)`
},1000)


