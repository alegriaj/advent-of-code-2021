const { getLastWinningScore } = require('./bingoLastWinner');

test('sample data => 1924', () => {
  expect(getLastWinningScore('./sample_data.txt')).toBe(1924);
});

test('real data => 6256', () => {
  expect(getLastWinningScore('./aoc2021_day4_input.txt')).toBe(6256);
});
