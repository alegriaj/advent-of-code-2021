// Advent Of Code 2021
// Day 9 - Smoke basin

const { getArrayStringsFromFile } = require('./fileIO');
const { sumLowPoints } = require('./sumLowPoints');
const { mult3LargestBasins } = require('./mult3LargestBasins');

// Import AoC Input
const filename = './input.txt';
const heightMap = getArrayStringsFromFile(filename).map((x) =>
  x.split('').map((y) => parseInt(y))
);

console.log('Question 1: ', sumLowPoints(heightMap));
console.log('Question 2: ', mult3LargestBasins(heightMap));
