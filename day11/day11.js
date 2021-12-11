// Advent Of Code 2021
// Day 11 - Dumbo Octopus

const { getArrayStringsFromFile } = require('./fileIO');
const { countFlashes } = require('./countFlashes');
const { getFirstAllFlash } = require('./getFirstAllFlash');

// Import AoC Input
const filename = './input.txt';

const energyLevels1 = getArrayStringsFromFile(filename).map((x) =>
  x.split('').map((y) => parseInt(y))
);
console.log('Question 1:', countFlashes(energyLevels1, 100));

// re-read energyLevels as countFlashes modifies the map
const energyLevels2 = getArrayStringsFromFile(filename).map((x) =>
  x.split('').map((y) => parseInt(y))
);
console.log('Question 2:', getFirstAllFlash(energyLevels2));
