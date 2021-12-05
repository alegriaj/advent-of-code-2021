// Advent Of Code
// Day 5 - Hydrothermal Venture

const { getVertHorizOverlaps } = require('./getVertHorizOverlaps');
const { getArrayStringsFromFile } = require('./fileIO');

// Import AoC Input
const filename = './input.txt';
const input = getArrayStringsFromFile(filename);

// Question 1, get overlaps of only horizontal and vertical line segments
console.log('Question 1: ', getVertHorizOverlaps(input, false));

// Question 2, same as question 1, but with diagonals as well
console.log('Question 2: ', getVertHorizOverlaps(input, true));
