// Advent Of Code 2021
// Day 6 - The Treachery of Whales

const { getArrayStringsFromFile } = require('./fileIO');
const { calcLeastFuelUsage } = require('./calcLeastFuelUsage');

// Import AoC Input
const filename = './input.txt';
let input = [];

input = getArrayStringsFromFile(filename)[0]
  .split(',')
  .map((x) => parseInt(x));

console.log('Question1: ', calcLeastFuelUsage(input));
