import { includeIngredients } from '../src/utils/search';

test('basic match a Negroni', () => {
  const params = new Set<string>();
  params.add('Campari');
  const query = includeIngredients(params);

  const results = new Set();
  query.forEach((element) => {
    results.add(element.name);
  });
  expect(results.has('Negroni')).toBe(true);
  expect(results.has('Manhattan')).toBe(false);
});

test('basic match Manhattan', () => {
  const params = new Set<string>();
  params.add('rye whiskey');
  const query = includeIngredients(params);

  const results = new Set();
  query.forEach((element) => {
    results.add(element.name);
  });
  expect(results.has('Manhattan')).toBe(true);
  expect(results.has('Negroni')).toBe(false);
});

test('basic empty results', () => {
  const query = includeIngredients(new Set<string>());
  expect(query.size).toBe(0);
});

test('basic mismatch', () => {
  const query = includeIngredients(new Set<string>('not a real ingredient'));
  expect(query.size).toBe(0);
});
