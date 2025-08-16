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
