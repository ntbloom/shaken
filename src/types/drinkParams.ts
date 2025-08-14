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

export interface Ingredient {
  name: string;
  amount: Amount;
}

export interface Cocktail {
  name: string;
  volume: number;
  style: Style;
  abv: number;
  ingredients: Array<Ingredient>;
  garnish: string | null;
}

export interface Cocktails {
  cocktails: Array<Cocktail>;
}

export interface CocktailMap {
  lookup: Map<string, Cocktail>;
}
