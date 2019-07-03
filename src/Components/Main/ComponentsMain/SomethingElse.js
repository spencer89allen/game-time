import React, { Component } from 'react';


class SomethingElse extends Component {


    render() {
        return (
            <div className="tile is-ancestor">
                <div className="tile is-4 is-vertical is-parent">
                    <div className="tile is-child box">
                        <p className="title">Picture</p>
                        <figure className="image is-1x1">
                            <img className="is-rounded" src="https://images.unsplash.com/photo-1561058195-308d234bfc0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt='' />
                        </figure>
                    </div>
                </div>
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <p className="title">About You!</p>
                        <p>Your Favorite Color is: </p>
                        <p>Your Favorite Star Wars character is is: </p>
                    </div>
                </div>
            </div>
        )
    };
};

export default SomethingElse;