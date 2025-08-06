import { Component } from 'react';
import Drink from './Drink';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRecipe: false,
    };
    this.printDrinks = this.printDrinks.bind(this);
  }

  printDrinks() {
    // prints drink names with full recipes and other data
    let picks = this.props.picks.Names;
    const drinkList = this.props.drinkList;
    if (picks === undefined) {
      picks = Object.keys(drinkList).sort();
    }

    if (picks.length === 0) {
      return <p id="noResults">Sorry, no drinks match your results</p>;
    } else {
      const pickNames = picks.map((drink) => (
        <Drink
          key={drink}
          name={drink}
          allDrinks={drinkList}
          viz={this.props.viz}
        />
      ));
      return <>{pickNames}</>;
    }
  }
  componentDidUpdate(prevProps) {
    if (this.state.drinks !== prevProps.drinks) {
      this.setState({ drinks: this.props.drinks });
    }
  }
  render() {
    return this.printDrinks();
  }
}

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
    const api = this.props.url;
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
