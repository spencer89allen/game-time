import Phaser from "phaser";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  create(data) {
    console.log(data)
    this.createTitle();
    this.scene.start('Game', data);
  }

  centerObject(gameObject, offset = 0) {
    this.width = this.cameras.main.width;
    this.height = this.cameras.main.height;

    gameObject.x = this.width / 2;
    gameObject.y = this.width / 2 - offset * 100;
  }

  createTitle() {
    // title image
    this.titleImage = this.add.image(0, 0, "phaser-logo");
    this.centerObject(this.titleImage, 1);
  }
}
