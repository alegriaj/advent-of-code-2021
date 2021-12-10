const { sumLowPoints } = require('./sumLowPoints');

test('[[1,2],[3,4]] => 2', () => {
  const data = [[1, 2], [3, 4], []];
  expect(sumLowPoints(data)).toBe(2);
});

test('[[2,1],[4,3]] => 2', () => {
  const data = [[2, 1], [4, 3], []];
  expect(sumLowPoints(data)).toBe(2);
});

test('[[3,4],[1,2]] => 2', () => {
  const data = [[3, 4], [1, 2], []];
  expect(sumLowPoints(data)).toBe(2);
});

test('[[4,3],[2,1]] => 2', () => {
  const data = [[2, 1], [4, 3], []];
  expect(sumLowPoints(data)).toBe(2);
});

test('[corners] => 8', () => {
  const data = [[1, 2, 1], [2, 3, 2], [1, 2, 1], []];
  expect(sumLowPoints(data)).toBe(8);
});

test('[center] => 2', () => {
  const data = [[3, 2, 3], [2, 1, 2], [3, 2, 3], []];
  expect(sumLowPoints(data)).toBe(2);
});

test('[sides] => 8', () => {
  const data = [[2, 1, 2], [1, 3, 1], [2, 1, 2], []];
  expect(sumLowPoints(data)).toBe(8);
});

test('Sample Data => 15', () => {
  const data = [
    [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
    [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
    [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
    [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
    [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
    [],
  ];
  expect(sumLowPoints(data)).toBe(15);
});
