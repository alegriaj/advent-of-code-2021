const { fold, foldOnce } = require('./foldPaper');

test('Question 1: Sample Data => 17', () => {
  const data = [
    '6,10',
    '0,14',
    '9,10',
    '0,3',
    '10,4',
    '4,11',
    '6,0',
    '6,12',
    '4,1',
    '0,13',
    '10,12',
    '3,4',
    '3,0',
    '8,4',
    '1,10',
    '2,14',
    '8,10',
    '9,0',
    '',
    'fold along y=7',
    'fold along x=5',
    '',
  ];
  expect(foldOnce(data)).toBe(17); // 737
});

test('Question 2: Sample Data => box', () => {
  const data = [
    '6,10',
    '0,14',
    '9,10',
    '0,3',
    '10,4',
    '4,11',
    '6,0',
    '6,12',
    '4,1',
    '0,13',
    '10,12',
    '3,4',
    '3,0',
    '8,4',
    '1,10',
    '2,14',
    '8,10',
    '9,0',
    '',
    'fold along y=7',
    'fold along x=5',
    '',
  ];
  expect(fold(data)).toStrictEqual([
    '#####',
    '#...#',
    '#...#',
    '#...#',
    '#####',
    '.....',
    '.....',
  ]);
});
