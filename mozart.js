const audio = document.getElementById("mozart");

audio.play();

audio.pause();
audio.muted = true; 
audio.muted = false; 
audio.volume = 10; 

console.log(audio.duration);
function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}