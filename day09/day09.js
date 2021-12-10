// Advent Of Code 2021
// Day 9 - Smoke basin

const { getArrayStringsFromFile } = require('./fileIO');
const { sumLowPoints } = require('./sumLowPoints');

// Import AoC Input
const filename = './input.txt';
const heightMap = getArrayStringsFromFile(filename).map((x) =>
  x.split('').map((y) => parseInt(y))
);

console.log(sumLowPoints(heightMap));
