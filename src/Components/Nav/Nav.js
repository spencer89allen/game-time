import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Nav extends Component {


    state = {
        showRegisterModal: false,
        showLoginModal: false,
        login: false,
    }


    toggleRegisterModal = () => {
        this.setState({
            showRegisterModal: !this.showRegisterModal,
        });
    };

    toggleLoginModal = () => {
        this.setState({
            showLoginModal: !this.showLoginModal,
        })
    }


    render() {
        console.log(this.props.location.pathname)
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
                        this.state.login !== false ?
                            (
                                <div id="navbarBasicExample" className="navbar-menu">
                                    <div className="navbar-end">
                                        <div className="navbar-item">
                                            <div className="buttons">
                                                <button className="button is-dark is-outlined">
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
    console.log(state)
    return {

    }
}

export default connect(mapStateToProps)(Nav);

