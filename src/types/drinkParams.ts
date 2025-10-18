import recipes from '../data/json/recipes.json';
import barItems from '../data/json/barItems.json';

export type Style =
  | 'built'
  | 'stirred'
  | 'shaken'
  | 'bubbly'
  | 'fizz'
  | 'swizzle'
  | 'default'
  | 'hot'
  | 'double shake';

export interface Amount {
  unit: string;
  qty: number;
}

// export interface Ingredient {
//   name: string;
//   amount: Amount;
// }

// export interface Cocktail {
//   name: string;
//   volume: number;
//   style: Style;
//   abv: number;
//   ingredients: Array<Ingredient>;
//   garnish: string | null;
// }

// export interface Cocktails {
//   cocktails: Array<Cocktail>;
// }

// export interface CocktailMap {
//   lookup: Map<string, Cocktail>;
// }

export interface BarItem {
  abv: number;
  name: string;
}

export interface Ingredient {
  name: string;
  qty: number;
  unit: string;
}

export interface Recipe {
  garnish: string;
  ingredients: Array<Ingredient>;
  name: string;
  style: string;
}

export const AllRecipes = new Map<string, Recipe>(Object.entries(recipes));
export const BarItems = new Map<string, BarItem>(Object.entries(barItems));
