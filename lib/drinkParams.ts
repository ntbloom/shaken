  export enum Style {
    built,
    stirred,
    shaken,
    bubbly,
    fizz,
    swizzle,
    default,
    hot,
    double_shake,
  }

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
    build: string;
  }
