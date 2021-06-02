// const key = document.querySelectorAll("div[data-key]");
// function() {
// 	key.classList.add("playing")
// }
const keys = document.querySelectorAll(".key");
const audio = document.querySelectorAll("audio");


const keysArr = Array.from(keys);

keysArr.forEach(key => key.classList.add("playing"));




