import MediaPlayer from "./mediaPlayer";
import AutoPlay from "./plugins/Autoplay";
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector("video");

const player = new MediaPlayer({
  element: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const playButton: HTMLElement = document.querySelector("#playButton")!;
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector("#muteButton")!;
muteButton.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../../../serviceWorker.js")
    .catch((error) => {
      console.log(error.message);
    });
}
