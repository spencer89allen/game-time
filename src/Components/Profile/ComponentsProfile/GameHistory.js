import React, { Component } from 'react';
import Axios from 'axios';


class GameHistory extends Component {

    state = {
        gameHistory: []
    }

    
    componentWillMount() {

        const { username } = this.props.match.params
        const body =  { username }

        Axios.post(`/profile/gameHistory/get`, body).then((res) => {
            this.setState({
                gameHistory: res.data
            })
        })
    }

    render() {
    //    console.log(this.state)
        return(
            <div className='box'>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>Game</th>
                            <th>Date</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.gameHistory.map(entry => {
                            return(
                                <tr key={entry.id}>
                                    <th>{this.state.gameHistory.indexOf(entry) + 1}</th>
                                    <td>{entry.date}</td>
                                    <td>{entry.score}</td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>



            </div>
        )
    };
};

export default GameHistory;