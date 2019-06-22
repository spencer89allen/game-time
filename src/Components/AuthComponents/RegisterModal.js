import React, { Component } from 'react';
// import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { register } from '/Users/spencerallen/new-projects/game-time/src/redux/authReducer.js';


class RegisterModal extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }

    handleInput = (name, value) => {
        this.setState({
            [name]: value,
        })
    }

    handleRegister = (e) => {
        this.props.register(this.state)
        this.props.history.push('/create_profile')
    }

    handleNeverMind = () => {
        this.props.history.push('/')
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <section className="hero is-dark is-medium">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Register
                            </h1>
                        </div>
                    </div>
                </section>
                <div className='container'>

                    <br />

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Email:</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input"
                                        type="email"
                                        placeholder="Recipient email"
                                        name='email'
                                        value={this.state.email}
                                        onChange={(e) => this.handleInput(e.target.name, e.target.value)} />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Password:</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input"
                                        type="email"
                                        placeholder="Password"
                                        name='password'
                                        value={this.state.password}
                                        onChange={(e) => this.handleInput(e.target.name, e.target.value)} />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">First Name:</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input"
                                        type="email"
                                        placeholder="First Name"
                                        name='firstName'
                                        value={this.state.firstName}
                                        onChange={(e) => this.handleInput(e.target.name, e.target.value)} />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Last Name:</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input"
                                        type="email"
                                        placeholder="Last Name"
                                        name='lastName'
                                        value={this.state.lastName}
                                        onChange={(e) => this.handleInput(e.target.name, e.target.value)} />
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <br />
                <span className='buttons is-right'>
                    <button className="button is-success" onClick={() => this.handleNeverMind()}>NeverMind</button>
                    <button className="button is-success" onClick={() => this.handleRegister()}>Register</button>
                </span>
            </div>
        )
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        register: (newUser) => dispatch(register(newUser))
    }
}

export default connect(null, mapDispatchToProps)(RegisterModal);