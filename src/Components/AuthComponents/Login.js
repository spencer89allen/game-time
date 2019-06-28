import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import { login } from '/Users/spencerallen/new-projects/game-time/src/redux/authReducer.js'



class Login extends Component {

    state = {
        username: '',
        password: '',
    }


    handleInput = (name, value) => {
        this.setState({
            [name]: value,
        })
    }

    handleLogin = () => {
        if (this.state.username.length === 0 || this.state.password.length === 0) {
            alert('Please fill in Username, and Password input fields')
        } else {
            const { username, password } = this.state
            const body = { username, password }
            
            axios.post(`/auth/login`, body).then((res) => {
                console.log(res)
                this.props.login(res.data)
                this.props.history.push('/profile/' + res.data.username)
            })
        }
    }
    
    
    render() {
        
            
        return (
            <div>
                <section className="hero is-dark is-medium">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Login
                            </h1>
                        </div>
                    </div>
                </section>
                <div className='container'>
                    <br />
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Username</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input"
                                        type="name"
                                        placeholder="Username"
                                        name='username'
                                        value={this.state.username}
                                        onChange={(e) => this.handleInput(e.target.name, e.target.value)} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Password</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input"
                                        type="email"
                                        placeholder="User Password"
                                        name='password'
                                        value={this.state.password}
                                        onChange={(e) => this.handleInput(e.target.name, e.target.value)} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <br />
                <span className='buttons is-right'>
                    
                        <button className="button is-success" onClick={() => this.handleLogin()}>
                            Login
                        </button>
                    
                        <div>
                            {this.props.authError ? <p>{this.props.authError}</p> : null }
                        </div>
                </span>
            </div>
        )
    };
};


// const mapStateToProps = (state) => {
//     return state
// }

export default connect(null, {login})(Login);