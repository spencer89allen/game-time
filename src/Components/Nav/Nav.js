import React, { Component } from 'react';


class Nav extends Component {


    state = {
        showRegisterModal: false,
        showLoginModal: false,
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
                        this.props.location.pathname !== `/` ?
                            (
                                <div id="navbarBasicExample" className="navbar-menu">
                                    <div className="navbar-end">
                                        <div className="navbar-item">
                                            <div className="buttons">
                                                <a className="button is-dark is-outlined">
                                                    <strong>Log Out</strong>
                                                </a>
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
                                                <a className="button is-dark is-outlined">
                                                    <strong>Register</strong>
                                                </a>
                                                <a className="button is-dark is-outlined">
                                                    <strong>Log In</strong>
                                                </a>
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

export default Nav;

