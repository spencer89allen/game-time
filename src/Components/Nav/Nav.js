import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { logout } from '../../redux/authReducer';

class Nav extends Component {
    
    
    handleLogout() {
        axios.get(`/auth/logout`).then((res) => {
            this.props.logout()
        })
    }

    render() {
       console.log(this.props.authReducer.user)
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
                        this.props.authReducer.user ?
                            (
                                <div id="navbarBasicExample" className="navbar-menu">
                                    <div className="navbar-end">
                                        <div className="navbar-item">
                                            <div className="buttons">
                                                <Link to='/'>
                                                    <button className="button is-dark is-outlined"
                                                        onClick={() => this.props.logout()}>
                                                        <strong>Log Out</strong>
                                                    </button>
                                                </Link>
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

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { logout })(Nav);

