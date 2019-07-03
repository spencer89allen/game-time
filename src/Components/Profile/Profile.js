import React, { Component } from 'react';
import { Link, NavLink, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import GameHistory from './ComponentsProfile/GameHistory.js';
import Info from './ComponentsProfile/Info.js';



class Profile extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
        uid: '',
        firstName: '',
        info: '',
        image: '',
    }
}

    componentWillMount() {
        this.setState({
            // uid: ,
            firstName: this.props.match.params.username,
        })
    }
    // + this.props.params


    render() {
        // console.log(this.props.match.params.username)
        // console.log(this.state.firstName)
        // console.log(this.props.authReducer.user)
        console.log('user:',this.props)
        if(!this.props.authReducer.user) return <Redirect to='/login' />

        return (
            <div className=''>
                <section className="hero is-medium is-dark is-bold">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Welcome {`${this.state.firstName}`}
                            </h1>
                            <h2 className="subtitle">
                                Click Here to
                                <Link to={`/play_game/${this.props.match.params.username}`}>
                                    <button className="button is-small is-rounded is-danger is-inverted is-outlined">
                                        Play
                                    </button>
                                </Link>
                            </h2>
                        </div>
                    </div>
                </section>
                <div className="tabs is-medium is-centered">
                    <ul>
                        <li>
                            <NavLink to={`${this.props.match.url}/gameHistroy`}
                                activeClassName='is-active'>
                                <p>Game History</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${this.props.match.url}/info`}
                                activeClassName='is-active'>
                                <p>Info</p>
                            </NavLink>
                            {/* in styling specify what the active tab looks like */}
                        </li>
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route component={GameHistory} exact path={`${this.props.match.path}/gameHistroy`} />
                        <Route component={Info} path={`${this.props.match.path}/info`} />

                        <Redirect to={`${this.props.match.path}/gameHistroy`} />

                    </Switch>
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    // console.log(state.rootReducer.firebase.auth)
    return state
    
}

export default connect(mapStateToProps)(Profile);
