// Advent Of Code 2021
// Day 12 - Passage Pathing

const { getArrayStringsFromFile } = require('./fileIO');
const { countPaths } = require('./countPaths');
const { countPaths2 } = require('./countPaths2');

// Import AoC Input
const filename = './input.txt';
const pathMap = getArrayStringsFromFile(filename);

console.log('Question 1:', countPaths(pathMap)); // 4792
console.log('Question 2:', countPaths2(pathMap)); // 133360
