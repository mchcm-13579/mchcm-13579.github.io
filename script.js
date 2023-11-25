function toggleMusic() {
    var audio = document.getElementById("bg-music");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  