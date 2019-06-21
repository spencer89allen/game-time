import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Info extends Component {


    render() {
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="level-left">
                        <div className="level-item">
                            <p className="subtitle is-5">
                                <strong>  BAM!</strong>
                            </p>
                        </div>
                    </div>
                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    Click  <button className="button is-dark is-outlined is-small"><Link to='/create_profile'>Here</Link></button>  to Create or Edit your Profile
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="tile is-ancestor">
                    <div className="tile is-4 is-vertical is-parent">
                        <div className="tile is-child box">
                            <p className="title">Picture</p>
                            <figure class="image is-1x1">
                                <img class="is-rounded" src="https://images.unsplash.com/photo-1561058195-308d234bfc0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt='' />
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
            </div>
        )
    };
};

export default Info;