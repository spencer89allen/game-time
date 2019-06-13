import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';


class Profile extends Component {


    render() {
        return (
            <div className=''>
                <section className="hero is-medium is-dark is-bold">
                    <div className="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Profile
                            </h1>
                            <h2 class="subtitle">
                                Click Here to <button className="button is-small is-rounded is-danger is-inverted is-outlined">Play</button>
                            </h2>
                        </div>
                    </div>
                </section>
                <div className="tabs is-medium is-centered">
                    <ul>
                        <li className="is-active">
                            <Link to={`${this.props.match.url}scores`}>
                                <p>Game History</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${this.props.match.url}game`}>
                                <p>Info</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    };
};

export default Profile;