import React, { Component } from 'react';
import { firestoreConnect } from 'react-redux-firebase';


class RegisterModal extends Component {


    render() {
        return (
            // <div className="modal">
            //     <div className="modal-background"></div>
            //     <div className="modal-card">
            //         <header className="modal-card-head">
            //             <p className="modal-card-title">Register</p>
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
                                Register
                            </h1>
                        </div>
                    </div>
                </section>
                <div className='container'>

                    <br />

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">email</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input" type="email" placeholder="Recipient email" />
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Username</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input" type="email" placeholder="Recipient email" />
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
                                    <input className="input" type="email" placeholder="Recipient email" />
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <br />
                <span className='buttons is-right'>
                    <button className="button is-success" >Register</button>
                </span>
            </div>
        )
    };
};

export default RegisterModal;