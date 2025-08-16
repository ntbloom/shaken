import { expect, test } from '@jest/globals';

import ingredients from '../json/barIngredients.json';
import recipes from '../json/recipes.json';
import { Recipe, BarIngredient, CocktailIngredient } from '../json/types.ts';

const allIngredients = new Array<string>();
Object.values(ingredients).forEach((ingred) => {
  allIngredients.push(ingred['name']);
});

describe.each(Object.entries(recipes))(
  'Recipe integrity check for %s',
  (_: string, recipe: Recipe) => {
    test('all ingredients are accounted for', () => {
      recipe.ingredients.forEach((ingredient: CocktailIngredient) => {
        expect(allIngredients).toContain(ingredient.name);
      });
    });

    test('ingredients are properly formatted', () => {
      recipe.ingredients.forEach((ingredient: CocktailIngredient) => {
        expect(ingredient).toHaveProperty('name');
        expect(ingredient).toHaveProperty('qty');
        expect(ingredient.qty).toBeGreaterThanOrEqual(0);
        expect(ingredient.qty).toBeLessThanOrEqual(10);
        expect(ingredient).toHaveProperty('unit');
      });
    });

    test('recipe has a garnish', () => {
      expect(recipe).toHaveProperty('garnish');
      expect(recipe.garnish.length).toBeLessThan(50);
    });

    test('recipe has at least 1 ingredient', () => {
      expect(recipe).toHaveProperty('ingredients');
      expect(recipe.ingredients.length).toBeGreaterThan(0);
    });

    test('recipe has a name', () => {
      expect(recipe).toHaveProperty('name');
    });

    test('recipe has style', () => {
      expect(recipe).toHaveProperty('style');
    });
  },
);

describe.each(Object.entries(ingredients))(
  'Ingredient integrity check for %s',
  (_: string, ingredient: BarIngredient) => {
    test('ingredient has abv', () => {
      expect(ingredient).toHaveProperty('abv');
      expect(ingredient.abv).toBeGreaterThanOrEqual(0);
      expect(ingredient.abv).toBeLessThan(1);
    });

    test('ingredient has name', () => {
      expect(ingredient).toHaveProperty('name');
    });

    test('ingredient name is concise', () => {
      expect(ingredient.name.length).toBeLessThan(50);
    });
  },
);
