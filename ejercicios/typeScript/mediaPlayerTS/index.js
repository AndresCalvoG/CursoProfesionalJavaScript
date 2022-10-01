import MediaPlayer from "./mediaPlayer.js";
import AutoPlay from "./plugins/Autoplay.js";
import AutoPause from "./plugins/AutoPause.ts";

const video = document.querySelector("video");
const button = document.querySelector("button");
const mute = document.querySelector("#sound");

const player = new MediaPlayer({
  element: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

button.onclick = () => {
  player.togglePlay();
};

mute.onclick = () => {
  player.toggleMute();
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../../../serviceWorker.js")
    .catch((error) => {
      console.log(error.message);
    });
}
