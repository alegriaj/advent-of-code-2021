const { countIncSlidingWindow } = require('./countIncSlidingWindow');

test('Empty - returns 0', () => {
  let data = [];
  expect(countIncSlidingWindow(data)).toBe(0);
});

test('Single item - returns 0', () => {
  const data = [1];
  expect(countIncSlidingWindow(data)).toBe(0);
});

test('Two items - returns 0', () => {
  const data = [1, 2];
  expect(countIncSlidingWindow(data)).toBe(0);
});

test('Three items - returns 0', () => {
  const data = [1, 2, 3];
  expect(countIncSlidingWindow(data)).toBe(0);
});

test('Descending items - returns 0', () => {
  const data = [4, 3, 2, 1];
  expect(countIncSlidingWindow(data)).toBe(0);
});

test('Descending items (Longer List) - returns 0', () => {
  const data = [5, 4, 3, 2, 1];
  expect(countIncSlidingWindow(data)).toBe(0);
});

test('Ascending items - returns 1', () => {
  const data = [1, 2, 3, 4];
  expect(countIncSlidingWindow(data)).toBe(1);
});

test('Ascending items (Longer List) - returns 2', () => {
  const data = [1, 2, 3, 4, 5, 6];
  expect(countIncSlidingWindow(data)).toBe(3);
});

test('Ascending and Descending - returns 1', () => {
  const data = [1, 2, 1, 2, 1];
  expect(countIncSlidingWindow(data)).toBe(1);
});

test('Ascending and Descending (Longer List) - returns 6', () => {
  const data = [1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2];
  //                  3  4  5  6  5  4  3  4  5  6
  expect(countIncSlidingWindow(data)).toBe(6);
});

test('Sample Input - returns 5', () => {
  const data = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
  expect(countIncSlidingWindow(data)).toBe(5);
});
