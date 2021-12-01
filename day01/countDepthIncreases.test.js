const { countDepthIncreases } = require('./countDepthIncreases');

test('Empty - returns 0', () => {
  let data = [];
  expect(countDepthIncreases(data)).toBe(0);
});

test('Single item - returns 0', () => {
  const data = [1];
  expect(countDepthIncreases(data)).toBe(0);
});

test('Descending items - returns 0', () => {
  const data = [2, 1];
  expect(countDepthIncreases(data)).toBe(0);
});

test('Descending items (Longer List) - returns 0', () => {
  const data = [5, 4, 3, 2, 1];
  expect(countDepthIncreases(data)).toBe(0);
});

test('Ascending items - returns 1', () => {
  const data = [1, 2];
  expect(countDepthIncreases(data)).toBe(1);
});

test('Ascending items (Longer List) - returns 4', () => {
  const data = [1, 2, 3, 4, 5];
  expect(countDepthIncreases(data)).toBe(4);
});

test('Ascending and Descending - returns 2', () => {
  const data = [1, 2, 1, 2];
  expect(countDepthIncreases(data)).toBe(2);
});

test('Ascending and Descending (Longer List) - returns 5', () => {
  const data = [1, 2, 1, 2, 10, 20, 5, 30];
  expect(countDepthIncreases(data)).toBe(5);
});

test('Sample Input - returns 7', () => {
  const data = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
  expect(countDepthIncreases(data)).toBe(7);
});
