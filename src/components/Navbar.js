import { Component } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router';

import Ingredientsearch from './Ingredientsearch';
import Namesearch from './Namesearch';
import { ipAddress } from '../ipAddress';

const allDrinksURL = ipAddress.concat('allDrinks/');
const smallLogo = require('../images/smallLogo.png');

export function setIngSearch() {
  // styles ingredient search button when active
  let element1 = document.getElementById('ingButton');
  element1.style.borderBottom = '3px solid var(--main-accent-color)';
  let element2 = document.getElementById('nameButton');
  element2.style.borderBottom = 'none';
}

export function setNameSearch() {
  // styles name search button when active
  let element1 = document.getElementById('nameButton');
  element1.style.borderBottom = '3px solid var(--main-accent-color)';
  let element2 = document.getElementById('ingButton');
  element2.style.borderBottom = 'none';
}

class Navbar extends Component {
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
      <>
        <BrowserRouter>
          <>
            <nav className="navbar">
              <div id="smallLogoDiv">
                  <img
                    id="smallLogo"
                    src={smallLogo}
                    alt="drinkBase small logo"
                    height="30"
                  />
              </div>
              <button
                title="query the database by individual ingredients"
                className="navbutton"
                id="ingButton"
                onClick={setIngSearch}
              >
                <Link to="/ingredientsearch">
                  filter by
                  <br />
                  ingredient
                </Link>
              </button>
              <button
                title="query the database by drink name"
                className="navbutton"
                id="nameButton"
                onClick={setNameSearch}
              >
                <Link to="/namesearch">
                  filter by
                  <br />
                  drink name
                </Link>
              </button>
            </nav>
            <Routes>
              <Route
                path="/ingredientsearch"
                element={
                  <Ingredientsearch
                    viz={this.state.viz}
                    allDrinks={this.state.allDrinks}
                    drinkList={this.state.drinkList}
                    vizReady={this.state.vizReady}
                  />
                }
              />
              <Route
                path="/namesearch"
                element={
                  <Namesearch
                    viz={this.state.viz}
                    allDrinks={this.state.allDrinks}
                    drinkList={this.state.drinkList}
                    vizReady={this.state.vizReady}
                  />
                }
              />
            </Routes>
          </>
        </BrowserRouter>
      </>
    );
  }
}

export default Navbar;
