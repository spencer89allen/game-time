import React, { Component } from 'react';
import Phaser from 'phaser';

// import config from '../Phaser-Files/config/config';
import Game from '../Phaser-Files/Game';


class GameComponent extends Component {

    state = {
        score: 0,
    }

    componentDidMount() {
        // new Phaser.Game(config);
        window.game = new Game();

    }

    handleQuit = () => {
        this.props.history.goBack()
    }


    render() {
        return (
            <div>
                <section className="hero is-dark">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Game Time
                            </h1>
                            <h2 className="subtitle">
                                <section className="button is-small is-rounded is-danger is-inverted is-outlined" onClick={() => this.handleQuit()}>
                                    Quit
                                </section>
                            </h2>
                        </div>
                    </div>
                </section>
                <div className='notification'>
                    <div className='level'>
                        <div id='game' className='level-item has-text-centered'>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameComponent;