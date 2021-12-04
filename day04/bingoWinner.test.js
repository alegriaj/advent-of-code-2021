const { getWinningScore } = require('./bingoWinner');

test('sample data => 4512', () => {
  expect(getWinningScore('./sample_data.txt')).toBe(4512);
});

test('real data => 58838', () => {
  expect(getWinningScore('./aoc2021_day4_input.txt')).toBe(58838);
});
