import recipes from '../json/recipes.json';
import barIngredients from '../json/barIngredients.json';

export interface BarIngredient {
  abv: number;
  name: string;
}

export interface CocktailIngredient {
  name: string;
  qty: number;
  unit: string;
}

export interface Recipe {
  garnish: string;
  ingredients: Array<CocktailIngredient>;
  name: string;
  style: string;
}

export const AllRecipes = new Map<string, Recipe>(Object.entries(recipes));
export const AllIngredients = new Map<string, BarIngredient>(
  Object.entries(barIngredients),
);
