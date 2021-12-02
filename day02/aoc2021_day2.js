// Advent Of Code
// Day 2 - Submarine instructions

const { getArrayStringsFromFile } = require('./fileIO');
const { getFinalPosition } = require('./getFinalPosition');
const { getFinalPositionWithAim } = require('./getFinalPositionWithAim');

// Import AoC Day2 Input as array of depths
const instructions = getArrayStringsFromFile('./aoc2021_day2_input.txt');

// Question 1 Solution
const final1 = getFinalPosition(instructions);
console.log(`Question 1:`);
console.log(`Horizontal ${final1.horizontal}`); // 1911
console.log(`Vertical ${final1.vertical}`); // 779
console.log(`Multiplied ${final1.horizontal * final1.vertical}`); // 1488669

// Question 1 Solution
const final2 = getFinalPositionWithAim(instructions);
console.log(`Question 2:`);
console.log(`Horizontal ${final2.horizontal}`); // 1911
console.log(`Vertical ${final2.vertical}`); // 615654
console.log(`Multiplied ${final2.horizontal * final2.vertical}`); // 1176514794
