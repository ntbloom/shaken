import { Component } from 'react';

import Ingredientsearch from './Ingredientsearch';
import { ipAddress } from '../../ipAddress';

const allDrinksURL = ipAddress.concat('allDrinks/');

export function setIngSearch() {
  // styles ingredient search button when active
  let element1 = document.getElementById('ingButton');
  element1.style.borderBottom = '3px solid var(--main-accent-color)';
  let element2 = document.getElementById('nameButton');
  element2.style.borderBottom = 'none';
}

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viz: false,
    };
    this.getAllDrinks = this.getAllDrinks.bind(this);
  }

  componentDidMount() {
    this.getAllDrinks();
  }

  getAllDrinks() {
    //gets all drinks for Viz
    fetch(allDrinksURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          allDrinks: data,
        });
        const drinkList = {};
        for (let i = 0; i < data.Drinks.length; i++) {
          const tempObj = {};
          const name = data.Drinks[i].Name;
          const info = data.Drinks[i].Data;
          const recipe = data.Drinks[i].Recipe;
          tempObj['Data'] = info;
          tempObj['Recipe'] = recipe;
          drinkList[name] = tempObj;
        }
        this.setState({
          drinkList: drinkList,
          vizReady: true,
        });
      })
      .catch((error) => {
        console.log('Fetch error in IndexResults.js:', error);
      });
  }

  render() {
    return (
      <Ingredientsearch
        viz={this.state.viz}
        allDrinks={this.state.allDrinks}
        drinkList={this.state.drinkList}
        vizReady={this.state.vizReady}
      />
    );
  }
}

export default Searchbar;
