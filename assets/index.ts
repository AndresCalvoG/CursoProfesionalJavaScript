import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector("video");
const button1 = document.getElementById('player');
const button2 = document.getElementById('sound');

const player = new MediaPlayer({el: video, plugins: [new AutoPlay(), new AutoPause(), new Ads()]});
button1.onclick = () => player.togglePlay();
button2.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error =>{console.log(error.message);});
}