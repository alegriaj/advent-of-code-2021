const { countFlashes } = require('./countFlashes');

test('Mini Sample Step 1', () => {
  const data = ['11111', '19991', '19191', '19991', '11111'].map((x) =>
    x.split('').map((y) => parseInt(y))
  );
  expect(countFlashes(data, 1)).toBe(9);
});

test('Mini Sample Step 2', () => {
  const data = ['34543', '40004', '50005', '40004', '34543'].map((x) =>
    x.split('').map((y) => parseInt(y))
  );
  expect(countFlashes(data, 1)).toBe(0);
});

test('Sample Step 1', () => {
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
  expect(countFlashes(data, 1)).toBe(0);
});

test('Sample Step 2', () => {
  const data = [
    '6594254334',
    '3856965822',
    '6375667284',
    '7252447257',
    '7468496589',
    '5278635756',
    '3287952832',
    '7993992245',
    '5957959665',
    '6394862637',
  ].map((x) => x.split('').map((y) => parseInt(y)));
  expect(countFlashes(data, 1)).toBe(35);
});

test('Sample Step 3', () => {
  const data = [
    '8807476555',
    '5089087054',
    '8597889608',
    '8485769600',
    '8700908800',
    '6600088989',
    '6800005943',
    '0000007456',
    '9000000876',
    '8700006848',
  ].map((x) => x.split('').map((y) => parseInt(y)));
  expect(countFlashes(data, 1)).toBe(45);
});

test('Sample Data 2 Steps', () => {
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
  expect(countFlashes(data, 2)).toBe(35);
});

test('Sample Data 3 Steps', () => {
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
  expect(countFlashes(data, 3)).toBe(80);
});

test('Sample Data 10 Steps', () => {
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
  expect(countFlashes(data, 10)).toBe(204);
});

test('Sample Data 100 Steps', () => {
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
  expect(countFlashes(data, 100)).toBe(1656);
});
