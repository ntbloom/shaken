import { Cocktail, Style } from './drinkParams';

const Negroni: Cocktail = {
  name: 'Negroni',
  volume: 4,
  style: Style.built,
  abv: 0.15,
  sweetness: 40,
  ingredients: [
    { name: 'Campari', amount: { unit: 'oz', qty: 1 } },
    { name: 'gin', amount: { unit: 'oz', qty: 1 } },
    { name: 'sweet vermouth', amount: { unit: 'oz', qty: 1 } },
  ],
  build: 'This is how you build it. Make sure glass/garnish is included',
};

const Manhattan: Cocktail = {
  name: 'Manhattan',
  volume: 4,
  style: Style.built,
  abv: 0.27,
  sweetness: 12,
  ingredients: [
    { name: 'Angostura bitters', amount: { unit: 'dashes', qty: 2 } },
    { name: 'rye whiskey', amount: { unit: 'oz', qty: 2 } },
    { name: 'sweet vermouth', amount: { unit: 'oz', qty: 0.75 } },
  ],
  build: 'This is how you build it. Make sure glass/garnish is included',
};

export const allCocktails = new Array<Cocktail>(Manhattan, Negroni);
export const cocktailMap: Map<string, Cocktail> = new Map([
  ['Manhattan', Manhattan],
  ['Negroni', Negroni],
]);
