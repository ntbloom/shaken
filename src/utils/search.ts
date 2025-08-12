import { Cocktail } from '../types/drinkParams';
import { allCocktails, cocktailMap } from '../types/indices';

// brute force search through drinks
function naiveSearch(ingredients: Set<string>): Set<Cocktail> {
  const drinks = new Set<Cocktail>();
  allCocktails.cocktails.forEach((cocktail: Cocktail) => {
    for (let i = 0; i < cocktail.ingredients.length; i++) {
      if (ingredients.has(cocktail.ingredients[i].name)) {
        const res = cocktailMap.lookup.get(cocktail.name);
        if (res) {
          drinks.add(res);
        }
        break;
      }
    }
  });
  return drinks;
}

export function includeIngredients(ingredients: Set<string>): Set<Cocktail> {
  return naiveSearch(ingredients);
}
