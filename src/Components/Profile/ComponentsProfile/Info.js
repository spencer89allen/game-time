import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';


class Info extends Component {

    state = {
        image: '',
        info: '',
    }

    componentWillMount() {
        const { username } = this.props.match.params
        const body = { username }

        Axios.post(`/profile/get`, body).then((res) => {
            if(res.data[0]) {
                this.setState({
                    image: res.data[0].image,
                    info: res.data[0].user_info
                })
            } 
        })
    }


    render() {
        // console.log(this.props.match.params.username)
        return (
            <div>
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
                                                    <Link to={'/create_profile/' + this.props.match.params.username}>
                                                        <button className="button is-dark is-outlined">
                                                            <strong>Edit Profile</strong>
                                                        </button>
                                                    </Link>
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
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return state

}

export default connect(mapStateToProps)(Info);
