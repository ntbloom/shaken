import { Cocktail } from '../types/drinkParams';
import { allCocktails, cocktailMap } from '../types/indices';

export function getKeyname(raw: string): string {
  let result = '';
  const deleted = [' ', "'", '.', '-'];
  raw.split(' ').forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      const ch = word.charAt(i);
      if (deleted.includes(ch)) {
        continue;
      } else if (ch === '&') {
        result += 'And';
      } else {
        result += i === 0 ? ch.toUpperCase() : ch;
      }
    }
  });
  return result;
}

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
