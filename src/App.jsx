import { Component } from 'react';
import Navbar from './components/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="siteWrapper">
        <Navbar />
      </div>
    );
  }
}

export default App;
