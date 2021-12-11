const { getFirstAllFlash } = require('./getFirstAllFlash');

test('9 1s', () => {
  const data = ['111', '111', '111'].map((x) =>
    x.split('').map((y) => parseInt(y))
  );
  expect(getFirstAllFlash(data)).toBe(9);
});

test('Sample', () => {
  const data = [
    '5483143223',
    '2745854711',
    '5264556173',
    '6141336146',
    '6357385478',
    '4167524645',
    '2176841721',
    '6882881134',
    '4846848554',
    '5283751526',
  ].map((x) => x.split('').map((y) => parseInt(y)));
  expect(getFirstAllFlash(data)).toBe(195);
});
