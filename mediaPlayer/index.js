import MediaPlayer from "./mediaPlayer.js";
import AutoPlay from "./plugins/Autoplay.js";
import AutoPause from "./plugins/AutoPause.js";

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
