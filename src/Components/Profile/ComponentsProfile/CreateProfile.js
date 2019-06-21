import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from 'firebase';


class CreateProfile extends Component {

    state = {
        favoriteColor: '',
        favoriteStarWars: '',
        image: '',
    }



    handleInput = (name, value) => {
        this.setState({
            [name]: value,
        })
    }

    handleNeverMind = () => {
        this.props.history.goBack()
    }

    // handlePost = () => {

    //     if(this.state.favoriteColor || this.state.favoriteStarWars || this.state.image || === null ){
    //         return alert('hey, fill in you info')
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

    // }


    render() {
        return (
            <div>
                <section className="hero is-dark is-medium">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Costomize Your Profile
                            </h1>
                        </div>
                    </div>
                </section>
                <div className='container'>
                    <br />
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Favorite Color: </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input"
                                        type="favoriteColor"
                                        placeholder="I don't know, like blue or something"
                                        name='favoriteColor'
                                        value={this.state.favoriteColor}
                                        onChange={(e) => this.handleInput(e.target.name, e.target.value)} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Favorite Star Wars Character: </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <input className="input"
                                        type="email"
                                        placeholder="Darth Vader is pretty cool"
                                        name='favoriteStarWars'
                                        value={this.state.favoriteStarWars}
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

                    <button className="button is-success" onClick={() => this.handleNeverMind()}>
                        Never Mind
                    </button>
                    <button className="button is-success" onClick={() => this.handlePost()}>
                        Post
                    </button>
                </span>
            </div>
        )
    };
};

export default CreateProfile;