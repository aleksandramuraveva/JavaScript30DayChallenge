function playDrum(event) { 
const keys = Array.from(document.querySelectorAll(`div[data-key="${event.keyCode}"]`));
const audio = Array.from(document.querySelectorAll(`[data-key="${event.keyCode}"]`))
const add = keys.forEach(key => {key.classList.add("playing");})
const play = audio.forEach(sound => {sound.setAttribute("autoplay", "autoplay");
	sound.currentTime = 0;
	})
document.addEventListener("keyup", function() {
		keys.forEach(key => {key.classList.remove("playing");})
		audio.forEach(sound => {sound.removeAttribute("autoplay", "autoplay");})
});

	if(event.code === "KeyA") {
		console.log("hey");
		add;
		
	} else if (event.code === "KeyS") {
		console.log("pressed S");
		add;
		
	} else if (event.code === "KeyD") {
		console.log("pressed D");
		add;
	} else if (event.code === "KeyF") {
		console.log("pressed F");
		add;
	} else if (event.code === "KeyG") {
		console.log("pressed G");
		add;
	} else if (event.code === "KeyH") {
		console.log("pressed H");
		add;
	} else if (event.code === "KeyJ") {
		console.log("pressed J");
		add;

	} else if (event.code === "KeyK") {
		console.log("pressed K");
		add;

	} else if (event.code === "KeyL") {
		console.log("pressed L");
		add;
	}
}



document.addEventListener("keydown", playDrum);
