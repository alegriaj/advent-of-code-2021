// Advent Of Code
// Day 6 - Lanternfish

const { getArrayStringsFromFile } = require('./fileIO');
const { growFish } = require('./growFish');

// Import AoC Input
const filename = './input.txt';
const input = getArrayStringsFromFile(filename)[0]
  .split(',')
  .map((x) => parseInt(x));

console.log(growFish(input, 80));
console.log(growFish(input, 256));
