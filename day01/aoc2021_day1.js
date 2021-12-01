// Advent Of Code
// Day 1 - Depth Measurements

const { getArrayFromFile } = require('./fileIO');
const { countDepthIncreases } = require('./countDepthIncreases');
const { countIncSlidingWindow } = require('./countIncSlidingWindow');

// Import AoC Day1 Input as array of depths
const depths = getArrayFromFile('./aoc2021_day1_input.txt');

// Question 1 Solution
console.log('Question 1: ', countDepthIncreases(depths)); // 1482

// Question 2 Solution
console.log('Question 2: ', countIncSlidingWindow(depths)); // 1518
