import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';


import { login } from '/Users/spencerallen/new-projects/game-time/src/redux/authReducer.js'



class LoginModal extends Component {

    state = {
        username: '',
        email: '',
        password: '',
    }



    handleInput = (name, value) => {
        this.setState({
            [name]: value,
        })
    }

    handleLogin = () => {
        
        this.props.login(this.state)
        
    }
    
    
    render() {

        console.log(this.props)

        if(this.props.auth.uid) return <Redirect to='/profile' />
            
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
                            <label className="label">Email</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input"
                                        type="email"
                                        placeholder="User email"
                                        name='email'
                                        value={this.state.email}
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

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user))
    }
}

const mapStateToProps = (state) => {
    console.log(state.rootReducer.firebase.auth)
    return {
        authError: state.rootReducer.firebase.auth.authError,
        auth: state.rootReducer.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);