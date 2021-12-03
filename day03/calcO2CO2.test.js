const { calcO2CO2 } = require('./calcO2CO2');

test('[] => {O2: 0, CO2: 0}', () => {
  let data = [];
  expect(calcO2CO2(data)).toStrictEqual({ O2: 0, CO2: 0 });
});

test('[0, 1] => {O2: 1, CO2: 0}', () => {
  let data = ['0', '1'];
  expect(calcO2CO2(data)).toStrictEqual({ O2: 1, CO2: 0 });
});

test('Sample Data => {O2: 23, CO2: 10}', () => {
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
  expect(calcO2CO2(data)).toStrictEqual({ O2: 23, CO2: 10 });
});
