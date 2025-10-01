import { Amount } from '../types/drinkParams';
import { Ingredient, BarItems, Recipe } from '../types/drinkParams';

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

export function getVolumeAbv(recipe: Recipe): Array<number> {
  let totalAlc = 0.0;
  let volume = 0.0;
  recipe.ingredients.forEach((ingredient: Ingredient) => {
    const item = BarItems.get(ingredient.name);
    if (item == undefined) {
      return 0.0;
    }
    const getVolumeFactor = (item: Ingredient) => {
      switch (item.unit) {
        case 'dash':
          return 0.02083;
        case 'oz':
          return 1.0;
        case 'rinse':
          return 0.0625;
        case 'tbl':
          return 0.5;
        case 'tsp':
          return 0.16667;
        case 'each':
          return 0.0;
        default:
          return 0.0;
      }
    };

    const getStyleFactor = (drink: Recipe) => {
      switch (drink.style) {
        case 'built':
          return 0.2;
        case 'stirred':
          0.3;
        case 'shaken':
          return 0.35;
        case 'bubbly':
          return 0.1;
        case 'fizz':
          return 0.33;
        case 'swizzle':
          return 0.4;
        case 'default':
          return 0.28;
        case 'hot':
          return 0.0;
        case 'double shake':
          return 0.35;
        default:
          return 0.28;
      }
    };
    totalAlc += getVolumeFactor(ingredient) * ingredient.qty * item.abv;
    volume +=
      getVolumeFactor(ingredient) *
      ingredient.qty *
      (1 + getStyleFactor(recipe));
  });

  return [volume, totalAlc / volume];
}
