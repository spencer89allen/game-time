import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
  }
  preload() {
    this.load.image("phaser-logo", "src/Components/Game/Phaser-Files/assets/logo copy.png");
  }

  create() {
    this.scene.start("Preloader");
  }
}