// Advent Of Code 2021
// Day 8 - Seven Segment Search

const { getArrayStringsFromFile } = require('./fileIO');
const { decode1478 } = require('./decode1478');
const { decodeAll } = require('./decodeAll');

// Import AoC Input
const filename = './input.txt';
const dataLines = getArrayStringsFromFile(filename);

console.log('Question 1: ', decode1478(dataLines));
console.log('Question 2: ', decodeAll(dataLines));
