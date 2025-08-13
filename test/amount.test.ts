import { getAmountString } from '../src/utils/amount';
import { Amount } from '../src/types/drinkParams';

import { expect, test } from '@jest/globals';

describe.each([
  ['oz', 0.5, '1/2 oz'],
  ['oz', 0.25, '1/4 oz'],
  ['tsp', 0.75, '3/4 tsp'],
  ['dashes', 2, '2 dashes'],
  ['oz', 1, '1 oz'],
  ['oz', 1.5, '1 1/2 oz'],
  ['oz', 1.75, '1 3/4 oz'],
  ['oz', 2.5, '2 1/2 oz'],
])('.getAmountString %s, %i', (unit: string, qty: number, expected: string) => {
  test('convert decimal to fraction', () => {
    const amount: Amount = { unit: unit, qty: qty };
    expect(getAmountString(amount)).toBe(expected);
  });
});
