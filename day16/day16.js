// Advent Of Code 2021
// Day 16 - Packet Decoder

const { getArrayStringsFromFile } = require('./fileIO');
const { sumVersions, calculateValue } = require('./decodeBITS');

// Import AoC Input
const filename = './input.txt';

const [transmission] = getArrayStringsFromFile(filename);

console.log('Question 1:', sumVersions(transmission));
console.log('Question 2:', calculateValue(transmission));
