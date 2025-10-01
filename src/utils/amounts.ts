import { Amount } from '../types/drinkParams';
import {
  // CocktailIngredient,
  // AllIngredients,
  Recipe,
} from '../types/drinkParams';

export function getAmountString(amount: Amount): string {
  const fraction = (num: number): string => {
    if (num === 0.25) {
      return '1/4';
    } else if (num === 0.5) {
      return '1/2';
    } else if (num === 0.75) {
      return '3/4';
    } else if (num === 1.25) {
      return '1 1/4';
    } else if (num === 1.5) {
      return '1 1/2';
    } else if (num === 1.75) {
      return '1 3/4';
    } else if (num === 2.25) {
      return '2 1/4';
    } else if (num === 2.5) {
      return '2 1/2';
    } else if (num === 2.75) {
      return '2 3/4';
    } else {
      return num.toString();
    }
  };
  return fraction(amount.qty) + ' ' + amount.unit;
}

export function getAbv(recipe: Recipe): number {
  // let total = 0.0;
  // recipe.ingredients.forEach((ingredient: CocktailIngredient) => {
  //   const percentAlcohol = AllIngredients.get(ingredient.name);
  //   if (percentAlcohol == undefined) {
  //     console.error(`Can't find abv for ${ingredient.name}`);
  //   }
  //   total += percentAlcohol *
  // });
  console.log(recipe.name);
  return 0.0;
}
