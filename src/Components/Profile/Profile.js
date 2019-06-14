import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

import GameHistory from './ComponentsProfile.js/GameHistory.js';
import Info from './ComponentsProfile.js/Info.js';


class Profile extends Component {


    render() {
        return (
            <div className=''>
                <section className="hero is-medium is-dark is-bold">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Profile
                            </h1>
                            <h2 className="subtitle">
                                Click Here to <button className="button is-small is-rounded is-danger is-inverted is-outlined">Play</button>
                            </h2>
                        </div>
                    </div>
                </section>
                <div className="tabs is-medium is-centered">
                    <ul>
                        <li className="is-active">
                            <Link to={`${this.props.match.url}/gameHistroy`}>
                                <p>Game History</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${this.props.match.url}/info`}>
                                <p>Info</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route component={GameHistory} exact path={`${this.props.match.path}/gameHistroy`} />
                        <Route component={Info} path={`${this.props.match.path}/info`} />

                        <Redirect to={`${this.props.match.path}/gameHistroy`}/>

                    </Switch>
            </div>
        </div>
        )
    };
};

export default Profile;