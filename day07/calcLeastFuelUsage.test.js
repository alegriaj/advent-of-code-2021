const { calcLeastFuelUsage } = require('./calcLeastFuelUsage');

test('[16,1,2,0,4,2,7,1,2,14] => 37', () => {
  const input = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];
  expect(calcLeastFuelUsage(input)).toBe(37);
});
