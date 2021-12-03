const { calcGammaEpsilon } = require('./calcGammaEpsilon');

test('[] => {gamma: 0, epsilon: 0}', () => {
  let data = [];
  expect(calcGammaEpsilon(data)).toStrictEqual({ gamma: 0, epsilon: 0 });
});

test('[0] => {gamma: 0, epsilon: 1}', () => {
  let data = ['0'];
  expect(calcGammaEpsilon(data)).toStrictEqual({ gamma: 0, epsilon: 1 });
});

test('[1] => {gamma: 1, epsilon: 0}', () => {
  let data = ['1'];
  expect(calcGammaEpsilon(data)).toStrictEqual({ gamma: 1, epsilon: 0 });
});

test('[00] => {gamma: 0, epsilon: 3}', () => {
  let data = ['00'];
  expect(calcGammaEpsilon(data)).toStrictEqual({ gamma: 0, epsilon: 3 });
});

test('[11] => {gamma: 3, epsilon: 0}', () => {
  let data = ['11'];
  expect(calcGammaEpsilon(data)).toStrictEqual({ gamma: 3, epsilon: 0 });
});

test('[0,0] => {gamma: 0, epsilon: 1}', () => {
  let data = ['0', '0'];
  expect(calcGammaEpsilon(data)).toStrictEqual({ gamma: 0, epsilon: 1 });
});

test('[1,1] => {gamma: 1, epsilon: 0}', () => {
  let data = ['1', '1'];
  expect(calcGammaEpsilon(data)).toStrictEqual({ gamma: 1, epsilon: 0 });
});

test('[1,0,1,0,1] => {gamma: 1, epsilon: 0}', () => {
  let data = ['1', '0', '1', '0', '1'];
  expect(calcGammaEpsilon(data)).toStrictEqual({ gamma: 1, epsilon: 0 });
});

test('[0,1,0,1,0] => {gamma: 0, epsilon: 1}', () => {
  let data = ['0', '1', '0', '1', '0'];
  expect(calcGammaEpsilon(data)).toStrictEqual({ gamma: 0, epsilon: 1 });
});

test('Sample Data => {gamma: 22, epsilon: 9}', () => {
  let data = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
  ];
  expect(calcGammaEpsilon(data)).toStrictEqual({ gamma: 22, epsilon: 9 });
});
