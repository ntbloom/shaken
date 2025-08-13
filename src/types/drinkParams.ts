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

export enum Glass {
  coupe,
  old_fashioned,
  collins,
  mug,
  flute,
  double_rocks,
  highball,
  margarita,
  julep,
  rocks,
  mule,
  sling,
  hurricane,
}

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
  sweetness: number;
  ingredients: Array<Ingredient>;
  garnish: string | null;
}

export interface Cocktails {
  cocktails: Array<Cocktail>;
}

export interface CocktailMap {
  lookup: Map<string, Cocktail>;
}
