// Advent Of Code 2021
// Day 13 - Transparent Origami

const { getArrayStringsFromFile } = require('./fileIO');
const { fold, foldOnce } = require('./foldPaper');

// Import AoC Input
const filename = './input.txt';

const transparentPaper = getArrayStringsFromFile(filename);

console.log('Question 1: ', foldOnce(transparentPaper));
console.log('Question 2: ');
console.log(fold(transparentPaper).join('\n'));
