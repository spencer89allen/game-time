import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

import TopScores from './ComponentsMain/TopScores';
import AboutUs from './ComponentsMain/AboutUs';
import AboutGame from './ComponentsMain/AboutGame';
import SomethingElse from './ComponentsMain/SomethingElse';


class Main extends Component {


    render() {
        // console.log(this.props.match.path)
        console.log(this.props)
        return (
            <div>
                <section className="hero is-dark is-medium">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Game Time
                            </h1>
                            {/* <h2 className="subtitle">
                                <Link to='/login'>
                                    <button className="button is-small is-rounded is-danger is-inverted is-outlined">Log In</button>
                                </Link>
                                or <button className="button is-small is-rounded is-danger is-inverted is-outlined">Register</button> to Play
                            </h2> */}
                        </div>
                    </div>
                </section>
                <div className="tabs is-medium is-centered">
                    <ul>
                        <li className="is-active">
                            <Link to='/scores'>
                                <p>Top 10 Scores</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/game`}>
                                <p>About the Game</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/us`}>
                                <p>About Us</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/something`}>
                                <p>Free Play</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route component={TopScores} exact path='/scores' />
                        <Route component={AboutUs} path='/us' />
                        <Route component={AboutGame} path='/game' />
                        <Route component={SomethingElse} path='/something' />

                        <Redirect to='/scores' />

                    </Switch>
                </div>
            </div>
        )
    };
};

export default Main;