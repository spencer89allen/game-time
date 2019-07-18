import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';


class Info extends Component {

    state = {
        isEdit: false,
        username: this.props.match.params,
        image: '',
        info: '',
    }

    componentWillMount() {
        const { username } = this.props.match.params
        const body = { username }

        Axios.post(`/profile/get`, body).then((res) => {
            if (res.data[0]) {
                this.setState({
                    image: res.data[0].image,
                    info: res.data[0].user_info
                })
            }
        })
    }

    handleEdit() {
        this.setState({
            isEdit: true,
        })
    }

    handleInput = (name, value) => {
        this.setState({
            [name]: value,
        })
    }

    handleUpdate() {
        const { username, image, info } = this.state
        const body = { username, image, info }
        
        Axios.put(`profile/edit`, body).then((res => {
            this.setState({
                isEdit: false
            })
        }))
    }


    render() {
        // console.log(this.props.match.params.username)
        return (
            <div>
                {
                    !this.state.isEdit ?

                        <div className="tile is-ancestor">
                            <div className="tile is-4 is-vertical is-parent">
                                <div className="tile is-child box">
                                    <p className="title">Picture</p>
                                    <figure className="image is-1x1">
                                        <img className="is-rounded" src={this.state.image} alt='' />
                                    </figure>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <div className="tile is-child box">
                                    <nav className="navbar" role="navigation" aria-label="main navigation">
                                        <div className="level-left">
                                            <div className="level-item">
                                                <p className="subtitle is-5">
                                                    <strong>About You!</strong>
                                                </p>
                                            </div>
                                        </div>
                                        {
                                            !this.state.image ?
                                                <div id="navbarBasicExample" className="navbar-menu">
                                                    <div className="navbar-end">
                                                        <div className="navbar-item">
                                                            <div className="buttons">
                                                                <Link to={'/create_profile/' + this.props.match.params.username}>
                                                                    <button className="button is-dark is-outlined">
                                                                        <strong>Create a Profile</strong>
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <div id="navbarBasicExample" className="navbar-menu">
                                                    <div className="navbar-end">
                                                        <div className="navbar-item">
                                                            <div className="buttons">
                                                                <button className="button is-dark is-outlined"
                                                                    onClick={() => this.handleEdit()}>
                                                                    <strong>Edit Profile</strong>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        }
                                    </nav>
                                    <div className="tile is-parent">
                                        <article className="tile is-child">
                                            <div className="content">
                                                {this.state.info}
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='box'>
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
                                                    name='info'
                                                    value={this.state.info}
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
                            <br/>
                            <span className='buttons is-right'>
                                <button className="button is-success" onClick={() => this.handleUpdate()}>Update</button>
                            </span>
                        </div>
                }
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return state

}

export default connect(mapStateToProps)(Info);
