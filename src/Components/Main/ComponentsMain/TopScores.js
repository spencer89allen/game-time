import React, { Component } from 'react';
import Axios from 'axios';


class TopScores extends Component {

    state = {
        topTenScores: []
    }

    componentWillMount() {
        Axios.get(`/score/topTen`).then((res) => {
            this.setState({
                topTenScores: res.data
            })
        })
    }


    render() {
        console.log(this.state)
        return (
            <div className='box'>
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>User</th>
                            <th>Score</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.topTenScores.map(entry => {
                            return(
                                <tr key={entry.id}>
                                    <th>{this.state.topTenScores.indexOf(entry) + 1}</th>
                                    <td>{entry.username}</td>
                                    <td>{entry.score}</td>
                                    <td>{entry.date}</td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>


            </div>
        )
    };
};

export default TopScores;