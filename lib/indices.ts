import { Cocktail, Cocktails, CocktailMap } from './drinkParams';
import { Manhattan, Negroni } from './recipes';

export const allCocktails: Cocktails = new Array<Cocktail>(Manhattan, Negroni);
export const cocktailMap: CocktailMap = new Map([
  ['Manhattan', Manhattan],
  ['Negroni', Negroni],
]);
