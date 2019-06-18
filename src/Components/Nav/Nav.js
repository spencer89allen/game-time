import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { logout } from '/Users/spencerallen/new-projects/game-time/src/redux/authReducer.js';


class Nav extends Component {


    state = {
        showRegisterModal: false,
        showLoginModal: false,
        login: false,
    }


    // toggleRegisterModal = () => {
    //     this.setState({
    //         showRegisterModal: !this.showRegisterModal,
    //     });
    // };

    // toggleLoginModal = () => {
    //     this.setState({
    //         showLoginModal: !this.showLoginModal,
    //     })
    // }



    
    render(props) {
        console.log(this.props.auth)
        console.log(this.props.auth.uid)
        // cosnt { auth } = this.props.auth;
        // const logIn = this.props.auth.uid ?
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
                    {
                        !this.state.login ? 
                            (
                                <div id="navbarBasicExample" className="navbar-menu">
                                    <div className="navbar-end">
                                        <div className="navbar-item">
                                            <div className="buttons">
                                                <button className="button is-dark is-outlined"
                                                        onClick={() => this.props.logout()}>
                                                    <strong>Log Out</strong>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div id="navbarBasicExample" className="navbar-menu">
                                    <div className="navbar-end">
                                        <div className="navbar-item">
                                            <div className="buttons">
                                                <button className="button is-dark is-outlined">
                                                    <Link to='/register'>
                                                        <strong>Register</strong>
                                                    </Link>
                                                </button>

                                                <button className="button is-dark is-outlined">
                                                    <Link to='/login'>
                                                        <strong>Log In</strong>
                                                    </Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </nav>

            </div>
        )
    };
};

const mapStateToProps = (state) => {
    // console.log(state.rootReducer)
    return {
        auth: state.rootReducer.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

