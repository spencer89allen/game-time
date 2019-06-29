import Phaser from "phaser";


export default {
    parent: 'isaacgame',
    type: Phaser.AUTO,
    width: 700,
    height: 400,
    pixelArt: true,
    roundPixels: true,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        // gravity: { y: 1900 }
      }
    }
  };
  