import { Recipe } from '../json/types.ts';

export interface RecipeMap {
  name: string;
  recipe: Recipe;
}

export const AllRecipes: RecipeMap = {
  name: '100YearOldCigar',
  recipe: {
    garnish: 'none',
    ingredients: [
      { name: 'aged rum', qty: 1.75, unit: 'oz' },
      { name: 'Cynar', qty: 0.5, unit: 'oz' },
      { name: 'Benedictine', qty: 0.5, unit: 'oz' },
      { name: 'Scotch whisky', qty: 0.25, unit: 'oz' },
      { name: 'Angostura bitters', qty: 1, unit: 'dash' },
      { name: 'absinthe', qty: 1, unit: 'rinse' },
    ],
    name: '100 Year-Old Cigar',
    style: 'stirred',
  },
};
