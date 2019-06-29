import Phaser from "phaser";

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  init(data) {
    this.readyCount = 1;
    this.data = data;
  }

  preload() {
    // time event for logo
    // TODO - update delayedCall to 3000
    this.timedEvent = this.time.delayedCall(2000, this.ready, [], this);
    this.createPreloader();
    this.loadAssets();
  }

  createPreloader() {
    this.width = this.cameras.main.width;
    this.height = this.cameras.main.height;
    // add logo image
    this.logo = this.add.image(this.width / 2, this.height / 2 - 100, "phaser-logo");

    // build loading bar and container
    this.progressBar = this.add.graphics();
    this.progressBox = this.add.graphics();

    // display progess bar
    this.progressBox.fillStyle(0x222222, 0.8);
    this.progressBox.fillRect(
      this.width / 2 - 160,
      this.height / 2 - 30,
      320,
      50,
    );

    // loading text
    this.loadingText = this.make.text({
      x: this.width / 2,
      y: this.height / 2 - 50,
      text: "Loading...",
      style: {
        font: "20px monospace",
        fill: "#ffffff",
      },
    });
    this.loadingText.setOrigin(0.5, 0.5);

    // percent text
    this.percentText = this.make.text({
      x: this.width / 2,
      y: this.height / 2 - 5,
      text: "0%",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    this.percentText.setOrigin(0.5, 0.5);
    // loading assets
    this.loadingAssetsText = this.make.text({
      x: this.width / 2,
      y: this.height / 2 + 50,
      text: "",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    this.loadingAssetsText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on("progress", value => {
      this.percentText.setText(parseInt(value * 100) + "%");
      this.progressBar.clear();
      this.progressBar.fillStyle(0xfffff, 1);
      this.progressBar.fillRect(
        this.width / 2 - 150,
        this.height / 2 - 20,
        300 * value,
        30,
      );
    });

    // update file progress text
    this.load.on("fileprogress", file => {
      this.loadingAssetsText.setText(`Loading asset: ${file.key}`);
    });

    // remove progress bar when complete
    this.load.on("complete", () => {
      this.progressBox.destroy();
      this.progressBar.destroy();
      this.loadingAssetsText.destroy();
      this.loadingText.destroy();
      this.percentText.destroy();
      this.ready();
    });
  }

  loadAssets() {
    // load assets for game
    this.load.spritesheet('explosion', 'https://dils-game.s3-us-west-2.amazonaws.com/IsaacGame/splosion.png', { frameWidth: 64, frameHeight: 64 })
    this.load.spritesheet('ship' , 'https://dils-game.s3-us-west-2.amazonaws.com/IsaacGame/spritesheet1.png' , { frameWidth: 64, frameHeight: 54 })
    this.load.spritesheet('shot', 'https://dils-game.s3-us-west-2.amazonaws.com/IsaacGame/shottrue.png', { frameWidth: 30, frameHeight: 20 })
    this.load.spritesheet('pillarTall', 'https://dils-game.s3-us-west-2.amazonaws.com/IsaacGame/rock pillar tall.png', {frameWidth: 64, frameHeight: 150} )
    this.load.spritesheet('pillarTallInverted', 'https://dils-game.s3-us-west-2.amazonaws.com/IsaacGame/rock pillar tall inverted.png', {frameWidth: 64, frameHeight: 150} )
    this.load.spritesheet('coin', 'https://dils-game.s3-us-west-2.amazonaws.com/IsaacGame/boulder.png', { frameWidth: 64, frameHeight: 64 })
    this.load.spritesheet('boulder', 'https://dils-game.s3-us-west-2.amazonaws.com/IsaacGame/boulder-nb.png', { frameWidth: 64, frameHeight: 64 })
    this.load.spritesheet('boulder-explosion', 'https://dils-game.s3-us-west-2.amazonaws.com/IsaacGame/boulder-explode-1.png', {frameWidth: 64, frameHeight: 64})
    this.load.spritesheet('boulder-break', 'https://dils-game.s3-us-west-2.amazonaws.com/IsaacGame/boulder-break.png', {frameWidth: 64, frameHeight: 64})
    this.load.spritesheet('game-over', 'https://dils-game.s3-us-west-2.amazonaws.com/IsaacGame/game-over-1.png', {frameWidth: 700, frameHeight: 125})
    this.load.spritesheet('click-restart', 'https://dils-game.s3-us-west-2.amazonaws.com/IsaacGame/click-restart.png', {frameWidth: 150, frameHeight: 100})
    this.load.image('score', 'https://dils-game.s3-us-west-2.amazonaws.com/IsaacGame/score.png')
    this.load.image('fore', 'https://dils-game.s3-us-west-2.amazonaws.com/IsaacGame/bgfore.png')
    this.load.image('near', 'https://dils-game.s3-us-west-2.amazonaws.com/IsaacGame/bgnear.png')
    this.load.image('far', 'https://dils-game.s3-us-west-2.amazonaws.com/IsaacGame/bgfar.png')
    this.load.image('furthest', 'https://dils-game.s3-us-west-2.amazonaws.com/IsaacGame/bgfurthest.png')
    this.load.image('pillar', 'https://dils-game.s3-us-west-2.amazonaws.com/IsaacGame/testpillar.png')
  }

  ready() {
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start("Game", this.data);
    }
  }
}
