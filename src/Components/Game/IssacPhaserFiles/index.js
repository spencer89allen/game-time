import Phaser from "phaser";
import config from "../IssacPhaserFiles/config/config";
import GameScene from "../IssacPhaserFiles/Scenes/GameScene";
import BootScene from "../IssacPhaserFiles/Scenes/BootScene";
import PreloaderScene from "../IssacPhaserFiles/Scenes/PreloaderScene";
// import UIScene from "./scenes/UIScene";
import TitleScene from "../IssacPhaserFiles/Scenes/TitleScene";
// import HUDScene from '.scenes/HUDScene';

export default class Game extends Phaser.Game {
  constructor(username) {
    super(config);
    console.log(username)
    this.scene.add("Boot", BootScene);
    this.scene.add("Preloader", PreloaderScene);
    this.scene.add("Game", GameScene);
    // this.scene.add("UI", UIScene);
    this.scene.add("Title", TitleScene);
    this.scene.start("Boot", {username});
    // this.scene.add('HUDScene', HUDScene)
  }
}

window.onload = function() {
//   window.game = new Game();
//   resize();
//   window.addEventListener("resize", resize, false);
};

function resize() {
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
