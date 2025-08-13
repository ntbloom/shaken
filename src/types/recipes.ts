import { Cocktail } from './drinkParams';

export const Negroni: Cocktail = {
  name: 'Negroni',
  volume: 4,
  style: 'built',
  abv: 0.15,
  sweetness: 40,
  ingredients: [
    { name: 'Campari', amount: { unit: 'oz', qty: 1 } },
    { name: 'gin', amount: { unit: 'oz', qty: 1 } },
    { name: 'sweet vermouth', amount: { unit: 'oz', qty: 1 } },
  ],
  garnish: 'lemon twist',
};

export const Manhattan: Cocktail = {
  name: 'Manhattan',
  volume: 4,
  style: 'built',
  abv: 0.27,
  sweetness: 12,
  ingredients: [
    { name: 'Angostura bitters', amount: { unit: 'dashes', qty: 2 } },
    { name: 'rye whiskey', amount: { unit: 'oz', qty: 2 } },
    { name: 'sweet vermouth', amount: { unit: 'oz', qty: 0.75 } },
  ],
  garnish: 'brandied cherry',
};
