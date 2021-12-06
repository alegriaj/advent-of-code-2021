const { growFish } = require('./growFish');

test('[3, 4, 3, 1, 2], 18 => 26', () => {
  const input = [3, 4, 3, 1, 2];
  expect(growFish(input, 18)).toBe(26);
});

test('[3, 4, 3, 1, 2], 80 => 5934', () => {
  const input = [3, 4, 3, 1, 2];
  expect(growFish(input, 80)).toBe(5934);
});

test('[3, 4, 3, 1, 2], 256 => 26984457539', () => {
  const input = [3, 4, 3, 1, 2];
  expect(growFish(input, 256)).toBe(26984457539);
});
