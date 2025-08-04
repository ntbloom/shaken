import { Component } from 'react';
import Searchbar from './components/searchforms/Searchbar';
import Navbar from './components/navbar/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="siteWrapper">
        {/* <Searchbar /> */}
        <Navbar />
      </div>
    );
  }
}

export default App;
