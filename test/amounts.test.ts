import { AllRecipes, Amount } from '../src/types/drinkParams';
import { getVolumeAbv, getAmountString } from '../src/utils/amounts';

import { expect, test } from '@jest/globals';
import { getKeyname } from '../src/utils/search';

describe.each([
  ['oz', 0.5, '1/2 oz'],
  ['oz', 0.25, '1/4 oz'],
  ['tsp', 0.75, '3/4 tsp'],
  ['dashes', 2, '2 dashes'],
  ['oz', 1, '1 oz'],
  ['oz', 1.25, '1 1/4 oz'],
  ['oz', 1.5, '1 1/2 oz'],
  ['oz', 1.75, '1 3/4 oz'],
  ['oz', 2.25, '2 1/4 oz'],
  ['oz', 2.75, '2 3/4 oz'],
  ['oz', 2.5, '2 1/2 oz'],
  ['oz', 5, '5 oz'],
])('.getAmountString %s, %i', (unit: string, qty: number, expected: string) => {
  test('convert decimal to fraction', () => {
    const amount: Amount = { unit: unit, qty: qty };
    expect(getAmountString(amount)).toBe(expected);
  });
});

describe.each([
  ['Alabazam', 0.25],
  ['Americano', 0.08],
  ['Bitter French', 0.16],
  ['Hanky Panky', 0.23],
])('get abv for %s', (name: string, abv: number) => {
  test('get abv', () => {
    const drink = AllRecipes.get(getKeyname(name));
    if (drink === undefined) {
      fail();
    }
    const [_, actualAbv] = getVolumeAbv(drink);
    expect(actualAbv).toBeCloseTo(abv, 1);
  });
});
