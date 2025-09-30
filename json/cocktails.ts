import { Recipe } from '../json/types.ts';
import recipes from '../json/recipes.json';

export const AllRecipes = new Map<string, Recipe>(Object.entries(recipes));
