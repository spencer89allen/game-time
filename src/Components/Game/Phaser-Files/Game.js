import Phaser from "phaser";
import config from "./config/config";
import GameScene from "./scenes/GameScene";
import BootScene from "./scenes/BootScene";
import PreloaderScene from "./scenes/PreloaderScene";
import TitleScene from "./scenes/TitleScene";
import HudDisplay from './scenes/HudDisplay';

export default class Game extends Phaser.Game {
  constructor(username) {
    super(config);

    this.scene.add("Boot", BootScene);
    this.scene.add("Preloader", PreloaderScene);
    this.scene.add("Game", GameScene);
    this.scene.add("Title", TitleScene);
    this.scene.start("Boot", { username });
    this.scene.add('HudDisplay', HudDisplay);
  }
}

window.onload = function() {
  // window.game = new Game();
  // resize();
  // window.addEventListener("resize", resize, false);
};

function resize() {
  console.log('jggffdfd')
  let canvas = document.querySelector("canvas");
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  let windowRatio = windowWidth / windowHeight;
  let gameRatio = config.width / config.height;
  if (windowRatio < gameRatio) {
    canvas.style.width = windowWidth + "px";
    canvas.style.height = windowWidth / gameRatio + "px";
  } else {
    canvas.style.width = windowHeight * gameRatio + "px";
    canvas.style.height = windowHeight + "px";
  }
}
