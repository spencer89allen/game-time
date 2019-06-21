import React from 'react';


import routes from './routes';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='container'>
      <br />
      { routes }
      <br />
      <Footer />
      <br />
    </div>
  );
}

export default App;
