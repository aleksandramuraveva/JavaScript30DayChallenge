function playDrum(event) { 
const keys = Array.from(document.querySelectorAll(`div[data-key="${event.keyCode}"]`));
const audio = Array.from(document.querySelectorAll(`[data-key="${event.keyCode}"]`))
keys.forEach(key => {key.classList.add("playing");})
audio.forEach(sound => {sound.setAttribute("autoplay", "autoplay");
	sound.currentTime = 0;
	})

document.addEventListener("keyup", function() {
		keys.forEach(key => {key.classList.remove("playing");})
		audio.forEach(sound => {sound.removeAttribute("autoplay", "autoplay");})
});
}

document.addEventListener("keydown", playDrum);
