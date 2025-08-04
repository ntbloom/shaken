import { Component } from 'react';
import Info from './Info';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      received: false,
      picks: [],
    };
    this.apiCall = this.apiCall.bind(this);
  }

  apiCall() {
    // calls Flask API
    let api = this.props.url;
    const url = api.concat(this.props.query);
    fetch(url).then((response) => {
      response
        .json()
        .then((data) => {
          this.setState({ picks: data, received: true });
        })
        .catch((error) => {
          console.log('Fetch error in Results.js:', error);
        });
    });
  }

  componentDidMount() {
    if (this.state.received) {
      this.apiCall();
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.apiCall();
    }
  }
  render() {
    const drinkList = this.props.drinkList;
    const picks = this.state.picks;
    return this.props.allDrinks ? (
      <div id="nv_results">
        <Info drinkList={drinkList} picks={picks} viz={this.props.viz} />
      </div>
    ) : null;
  }
}

export default Results;
