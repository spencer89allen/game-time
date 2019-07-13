import React, { Component } from 'react';


class AboutGame extends Component {


    render() {
        return (
            <div>
                <div className="tile is-ancestor">
                    <div className="tile is-4 is-vertical is-parent">
                        <div className="tile is-child box">
                            <figure className="image is-1x1">
                                <img className="" src="https://phaser.io/images/img.png" alt='' />
                            </figure>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="title">Phaser 3</p>
                            <p>I developed the game using Phaser. Phaser is a free software 2D game framework for making HTML5 games for desktop and mobile. It is developed by Photon Storm.
                            Phaser uses both a Canvas and WebGL renderer internally and can automatically swap between them based on browser support. This allows for fast rendering across desktop and mobile. It uses the Pixi.js library for rendering. Games can be compiled to iOS, Android and native desktop apps via 3rd party tools like Apache Cordova.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default AboutGame;