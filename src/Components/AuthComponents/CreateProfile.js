import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';



class CreateProfile extends Component {

    state = {
        // isEdit: false,
        username: '',
        userInfo: '',
        image: '',
    }

    componentWillMount() {
        this.setState({
            username: this.props.match.params.username
        })



    }


    handleInput = (name, value) => {
        this.setState({
            [name]: value,
        })
    }

    handleNeverMind = () => {
        this.props.history.goBack()
    }

    handlePost = () => {

        const { username, userInfo, image } = this.state
        const body = { username, userInfo, image }
 
        Axios.post(`/profile/info`, body).then(() => {
            this.props.history.push('/profile/' + this.state.username)
        })


    }


    render() {
        console.log(this.props.match)
        console.log(this.state.username)
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
                            <label className="label">Say Something About Yourself: </label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                    <textarea className="textarea"
                                        type="favoriteColor"
                                        placeholder="Whatever you want"
                                        name='userInfo'
                                        value={this.state.userInfo}
                                        onChange={(e) => this.handleInput(e.target.name, e.target.value)} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Picture: </label>
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

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(CreateProfile);
// export default CreateProfile;