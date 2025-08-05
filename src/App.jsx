import { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

import querySql from './database/database';

class App extends Component {
  render() {
    return (
      <>
        {querySql().then()}
        <div className="siteWrapper">
          <Navbar />
        </div>
        <div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
