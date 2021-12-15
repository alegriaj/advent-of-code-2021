const { insertElements } = require('./insertElements');

test('NNCB One Step => NCNBCHB', () => {
  const data = [
    'NNCB',
    '',
    'CH -> B',
    'HH -> N',
    'CB -> H',
    'NH -> C',
    'HB -> C',
    'HC -> B',
    'HN -> C',
    'NN -> C',
    'BH -> H',
    'NC -> B',
    'NB -> B',
    'BN -> B',
    'BB -> N',
    'BC -> B',
    'CC -> N',
    'CN -> C',
  ];
  expect(insertElements(data, 1)).toStrictEqual({ N: 2, C: 2, B: 2, H: 1 });
});

test('NNCB Two Steps => NBCCNBBBCBHCB', () => {
  const data = [
    'NNCB',
    '',
    'CH -> B',
    'HH -> N',
    'CB -> H',
    'NH -> C',
    'HB -> C',
    'HC -> B',
    'HN -> C',
    'NN -> C',
    'BH -> H',
    'NC -> B',
    'NB -> B',
    'BN -> B',
    'BB -> N',
    'BC -> B',
    'CC -> N',
    'CN -> C',
  ];
  expect(insertElements(data, 2)).toStrictEqual({ N: 2, C: 4, B: 6, H: 1 });
});

test('NNCB Three Steps => NBBBCNCCNBBNBNBBCHBHHBCHB', () => {
  const data = [
    'NNCB',
    '',
    'CH -> B',
    'HH -> N',
    'CB -> H',
    'NH -> C',
    'HB -> C',
    'HC -> B',
    'HN -> C',
    'NN -> C',
    'BH -> H',
    'NC -> B',
    'NB -> B',
    'BN -> B',
    'BB -> N',
    'BC -> B',
    'CC -> N',
    'CN -> C',
  ];
  expect(insertElements(data, 3)).toStrictEqual({ N: 5, C: 5, B: 11, H: 4 });
});

test('NNCB Four Steps => NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB', () => {
  const data = [
    'NNCB',
    '',
    'CH -> B',
    'HH -> N',
    'CB -> H',
    'NH -> C',
    'HB -> C',
    'HC -> B',
    'HN -> C',
    'NN -> C',
    'BH -> H',
    'NC -> B',
    'NB -> B',
    'BN -> B',
    'BB -> N',
    'BC -> B',
    'CC -> N',
    'CN -> C',
  ];
  expect(insertElements(data, 4)).toStrictEqual({ N: 11, C: 10, B: 23, H: 5 });
});

test('NNCB Ten Steps => {B:1749 C:298 H:161 N:865}', () => {
  const data = [
    'NNCB',
    '',
    'CH -> B',
    'HH -> N',
    'CB -> H',
    'NH -> C',
    'HB -> C',
    'HC -> B',
    'HN -> C',
    'NN -> C',
    'BH -> H',
    'NC -> B',
    'NB -> B',
    'BN -> B',
    'BB -> N',
    'BC -> B',
    'CC -> N',
    'CN -> C',
  ];
  expect(insertElements(data, 10)).toStrictEqual({
    B: 1749,
    C: 298,
    H: 161,
    N: 865,
  });
});

test('NNCB Forty Steps => {B:2192039569602 C:298 H:161 N:865}', () => {
  const data = [
    'NNCB',
    '',
    'CH -> B',
    'HH -> N',
    'CB -> H',
    'NH -> C',
    'HB -> C',
    'HC -> B',
    'HN -> C',
    'NN -> C',
    'BH -> H',
    'NC -> B',
    'NB -> B',
    'BN -> B',
    'BB -> N',
    'BC -> B',
    'CC -> N',
    'CN -> C',
  ];

  const elementCounts = [...Object.values(insertElements(data, 40))].sort(
    (a, b) => a - b
  );

  const highCount = elementCounts.pop();
  const lowCount = elementCounts.shift();

  expect(highCount - lowCount).toBe(2188189693529);
});
