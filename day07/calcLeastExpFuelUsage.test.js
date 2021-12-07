const { calcLeastExpFuelUsage } = require('./calcLeastExpFuelUsage');

test('[16,1,2,0,4,2,7,1,2,14] => 37', () => {
  const input = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];
  expect(calcLeastExpFuelUsage(input)).toBe(168);
});
