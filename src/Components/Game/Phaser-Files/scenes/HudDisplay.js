import Phaser from 'phaser';


export default class HudDisplay extends Phaser.Scene {
    constructor() {
        super({
            key: 'HudDisplay',
            active: true,
        })
    }

    init() {
        this.gameState = {
            score: 0,
        }
    }

    preload() {

    }

    create() {

        this.GameScene = this.scene.get('Game')
        this.gameState.scoreText = this.add.text(25, 350, 'Score: 0', { fontSize: '15px', fill: '#ffffff' });

        this.GameScene.events.on('updateScore', () => {
            this.gameState.score += 10;
            this.gameState.scoreText.setText(`Score: ${this.gameState.score}`);
            
        })

        this.GameScene.events.on('resetScore', () => {
            this.gameState.score =  0;
            this.gameState.scoreText.setText(`Score: ${this.gameState.score}`);
            
        })


        
    }

    update() {

    }
}