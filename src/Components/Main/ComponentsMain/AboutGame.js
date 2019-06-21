import React, { Component } from 'react';


class AboutGame extends Component {


    render() {
        return (
            <div>
                <div className="tile is-ancestor">
                    <div className="tile is-4 is-vertical is-parent">
                        <div className="tile is-child box">
                            <p className="title">Picture</p>
                            <figure className="image is-1x1">
                                <img className="" src="https://phaser.io/images/img.png" alt='' />
                            </figure>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="title">Phaser 3</p>
                            <p>Bacon ipsum dolor amet in ut boudin, cupidatat velit dolor bresaola drumstick et chicken nulla in deserunt ut. Pig labore anim cow meatball pariatur kielbasa filet mignon nisi flank brisket. Pork turducken id pig pastrami ex t-bone duis. Magna drumstick alcatra, ipsum veniam elit salami flank biltong. Venison voluptate esse pork chop tail. Andouille eu shank, laboris doner ullamco pork loin dolore lorem sunt landjaeger tongue ut tempor.
Cillum voluptate est, ut sed sunt sint. Landjaeger nostrud deserunt ad ham hock ea chuck jerky chicken et. Tenderloin meatball salami short loin, veniam pork belly pig deserunt ham elit ea lorem pork loin filet mignon. Ex t-bone chicken tempor occaecat aliqua. T-bone non commodo, chuck exercitation rump velit doner labore occaecat venison.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default AboutGame;