// Advent Of Code
// Day 4 - Giant Squid

const { getWinningScore } = require('./bingoWinner');
const { getLastWinningScore } = require('./bingoLastWinner');

// Import AoC Input
const filename = './aoc2021_day4_input.txt';

console.log(getWinningScore(filename));
console.log(getLastWinningScore(filename));
