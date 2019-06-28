import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


import routes from './routes';
import Footer from './Components/Footer/Footer';
import { login } from './redux/authReducer';

class App extends Component {

  componentWillMount() {
    axios.get('/me').then((res) => {
      this.props.login(res.data)
    })
  }

  render() {

    return (
      <div className='container'>
        <br />
        {routes}
        <br />
        <Footer />
        <br />
      </div>
    )
  };

}

export default connect(null, { login })(App);
