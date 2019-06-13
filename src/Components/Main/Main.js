import React, { Component } from 'react';
import MainRoutes from './MainRoutes';
import { Link, withRouter } from 'react-router-dom';



class Main extends Component {


    render() {
        console.log(this.props.match.url)
        return (
            <div>
                <section className="hero is-dark is-medium">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Game Time
                            </h1>
                            <h2 className="subtitle">
                                <button className="button is-small is-rounded is-danger is-inverted is-outlined">Log In</button> or <button className="button is-small is-rounded is-danger is-inverted is-outlined">Register</button> to Play
                            </h2>
                        </div>
                    </div>
                </section>
                <div className="tabs is-medium is-centered">
                    <ul>
                        <li className="is-active">
                            <Link to={`${this.props.match.url}scores`}>
                                <p>Top 10 Scores</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${this.props.match.url}game`}>
                                <p>About the Game</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${this.props.match.url}us`}>
                                <p>About Us</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${this.props.match.url}something`}>
                                <p>Something Else</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                { MainRoutes }
            </div>
        )
    };
};

export default Main;