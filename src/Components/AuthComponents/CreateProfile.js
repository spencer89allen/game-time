import React, { Component } from 'react';
import { firestore } from 'firebase';


class CreateProfile extends Component {

    state = {
        youself: '',
        image: '',
    }



    handleInput = (name, value) => {
        this.setState({
            [name]: value,
        })
    }

    handleNeverMind = () => {
        this.props.history.push('/')
    }

    // handlePost = () => {

    //     if(this.state.favoriteColor || this.state.favoriteStarWars || this.state.image || === null ){
    //         return alert('hey, fill in your info')
    //     } else {
    //         const info = this.state
    //         firestore.collection('collectionName').add({
    //             info
    //         }).then(() => {
    //             something
    //         }).catch((err) => {
    //             something
    //         })
    //     }

    //         this.props.history.push('/profile')

    // }


    render() {
        return (
            <div>
                <section className="hero is-dark is-medium">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Costomize Your Profile to Make This a Full Stack Web App
                            </h1>
                        </div>
                    </div>
                </section>
                <div className='container'>
                    <br />
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Say Something About youself: </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input"
                                        type="favoriteColor"
                                        placeholder="Whatever you want"
                                        name='youself'
                                        value={this.state.youself}
                                        onChange={(e) => this.handleInput(e.target.name, e.target.value)} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Picture of you: </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input"
                                        type="email"
                                        placeholder="Find some kind of photo url"
                                        name='image'
                                        value={this.state.image}
                                        onChange={(e) => this.handleInput(e.target.name, e.target.value)} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <span className='buttons is-right'>
                    <button className="button is-success" onClick={() => this.handleNeverMind()}>NeverMind</button>
                    <button className="button is-success" onClick={() => this.handlePost()}>Post</button>
                </span>
            </div>
        )
    };
};

export default CreateProfile;