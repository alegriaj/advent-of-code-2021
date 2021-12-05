const { getVertHorizOverlaps } = require('./getVertHorizOverlaps');

test('sample data (no diagonals) => 5', () => {
  const input = [
    '0,9 -> 5,9',
    '8,0 -> 0,8',
    '9,4 -> 3,4',
    '2,2 -> 2,1',
    '7,0 -> 7,4',
    '6,4 -> 2,0',
    '0,9 -> 2,9',
    '3,4 -> 1,4',
    '0,0 -> 8,8',
    '5,5 -> 8,2',
    '',
  ];
  expect(getVertHorizOverlaps(input, false)).toBe(5);
});

test('sample data (diagonals) => 12', () => {
  const input = [
    '0,9 -> 5,9',
    '8,0 -> 0,8',
    '9,4 -> 3,4',
    '2,2 -> 2,1',
    '7,0 -> 7,4',
    '6,4 -> 2,0',
    '0,9 -> 2,9',
    '3,4 -> 1,4',
    '0,0 -> 8,8',
    '5,5 -> 8,2',
    '',
  ];
  expect(getVertHorizOverlaps(input, true)).toBe(12);
});
