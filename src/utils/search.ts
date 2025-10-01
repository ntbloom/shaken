import { AllRecipes, Recipe } from '../types/drinkParams';

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
function naiveSearch(ingredients: Set<string>): Set<Recipe> {
  const drinks = new Set<Recipe>();
  AllRecipes.forEach((recipe: Recipe) => {
    for (let i = 0; i < recipe.ingredients.length; i++) {
      if (ingredients.has(recipe.ingredients[i].name)) {
        const res = recipe;
        if (res) {
          drinks.add(res);
        }
        break;
      }
    }
  });
  return drinks;
}

export function includeIngredients(ingredients: Set<string>): Set<Recipe> {
  return naiveSearch(ingredients);
}
