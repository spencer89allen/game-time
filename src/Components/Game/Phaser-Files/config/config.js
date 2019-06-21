import Phaser from "phaser";

export default {
    parent: 'game',
    type: Phaser.AUTO,
    width: 700,
    height: 400,
    pixelArt: true,
    roundPixels: true,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y: 0 }
      }
    }
  };