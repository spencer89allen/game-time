import React, { Component } from 'react';



class GameComponent extends Component {

    handleQuit = () => {
        this.props.history.goBack()
    }



    render() {
        return (
            <div>
                <section className="hero is-dark">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Game Time
                            </h1>
                            <h2 className="subtitle">
                                <section className="button is-small is-rounded is-danger is-inverted is-outlined" onClick={() => this.handleQuit()}>
                                    Quit
                                </section>
                            </h2>
                        </div>
                    </div>
                </section>
                <div className='box'>
                    
                </div>

            </div>
        )
    }
}

export default GameComponent;