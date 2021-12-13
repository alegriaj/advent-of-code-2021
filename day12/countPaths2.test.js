const { countPaths2 } = require('./countPaths2');

test('Small Sample', () => {
  const data = ['start-A', 'start-b', 'A-c', 'A-b', 'b-d', 'A-end', 'b-end'];
  expect(countPaths2(data)).toBe(36);
});

test('Slightly Larger Sample', () => {
  const data = [
    'dc-end',
    'HN-start',
    'start-kj',
    'dc-start',
    'dc-HN',
    'LN-dc',
    'HN-end',
    'kj-sa',
    'kj-HN',
    'kj-dc',
  ];
  expect(countPaths2(data)).toBe(103);
});

test('Even Larger Sample', () => {
  const data = [
    'fs-end',
    'he-DX',
    'fs-he',
    'start-DX',
    'pj-DX',
    'end-zg',
    'zg-sl',
    'zg-pj',
    'pj-he',
    'RW-he',
    'fs-DX',
    'pj-RW',
    'zg-RW',
    'start-pj',
    'he-WI',
    'zg-he',
    'pj-fs',
    'start-RW',
  ];
  expect(countPaths2(data)).toBe(3509);
});
