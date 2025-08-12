import { Cocktails, CocktailMap } from './drinkParams';
import { Manhattan, Negroni } from './recipes';

export const allCocktails: Cocktails = { cocktails: [Manhattan, Negroni] };
export const cocktailMap: CocktailMap = {
  lookup: new Map([
    ['Manhattan', Manhattan],
    ['Negroni', Negroni],
  ]),
};
