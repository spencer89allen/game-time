import React, { Component } from 'react';


class GameHistory extends Component {


    render() {
        return(
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
                        <tr>
                            <th>1</th>
                            <td>Somebody</td>
                            <td>38</td>
                            <td>0/0/0</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Somebody Else</td>
                            <td>37</td>
                            <td>0/0/0</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Somebody Else</td>
                            <td>36</td>
                            <td>0/0/0</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Somebody Else</td>
                            <td>35</td>
                            <td>0/0/0</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>Somebody Else</td>
                            <td>34</td>
                            <td>0/0/0</td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>Somebody Else</td>
                            <td>33</td>
                            <td>0/0/0</td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td>Somebody Else</td>
                            <td>32</td>
                            <td>0/0/0</td>
                        </tr>
                        <tr>
                            <th>8</th>
                            <td>Somebody Else</td>
                            <td>31</td>
                            <td>0/0/0</td>
                        </tr>
                        <tr>
                            <th>9</th>
                            <td>Somebody Else</td>
                            <td>30</td>
                            <td>0/0/0</td>
                        </tr>
                        <tr>
                            <th>10</th>
                            <td>Somebody Else</td>
                            <td>29</td>
                            <td>0/0/0</td>
                        </tr>
                    </tbody>
                </table>


            </div>
        )
    };
};

export default GameHistory;