import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';


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

    handleLogin = (e) => {
        //e.preventDefault();
        this.props.login(this.state)
    }


    render() {
        //console.log(this.state)
        return(
            // <div className="modal">
            //     <div className="modal-background"></div>
            //     <div className="modal-card">
            //         <header className="modal-card-head">
            //             <p className="modal-card-title">Login</p>
            //             <button className="delete" aria-label="close"></button>
            //         </header>
            //         <section className="modal-card-body">
                        
            //         </section>
            //         <footer className="modal-card-foot">
            //             <button className="button is-success">Save changes</button>
            //             <button className="button">Cancel</button>
            //         </footer>
            //     </div>
            // </div>

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
                                    <input  className="input" 
                                            type="email" 
                                            placeholder="User email" 
                                            name='email'
                                            value={this.state.email}
                                            onChange={(e) => this.handleInput(e.target.name, e.target.value)}/>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Username</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input  className="input" 
                                            type="email" 
                                            placeholder="Username" 
                                            name='username'
                                            value={this.state.username}
                                            onChange={(e) => this.handleInput(e.target.name, e.target.value)}/>
                                </p>
                            </div>
                        </div>
                    </div> */}

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Password</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input  className="input" 
                                            type="email" 
                                            placeholder="User Password" 
                                            name='password'
                                            value={this.state.password}
                                            onChange={(e) => this.handleInput(e.target.name, e.target.value)}/>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <br />
                <span className='buttons is-right'>
                    <button className="button is-success" onClick={() => this.handleLogin()} >Login</button>
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

export default connect(null, mapDispatchToProps)(LoginModal);