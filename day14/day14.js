// Advent Of Code 2021
// Day 14 - Extended Polymerization

const { getArrayStringsFromFile } = require('./fileIO');
const { insertElements } = require('./insertElements');

// Import AoC Input
const filename = './input.txt';

const instructions = getArrayStringsFromFile(filename);

// Question 1:
{
  const elementCounts = [
    ...Object.values(insertElements(instructions, 10)),
  ].sort((a, b) => a - b);

  const highCount = elementCounts.pop();
  const lowCount = elementCounts.shift();
  console.log('Question 1: ', highCount - lowCount);
}

// Question 2:
{
  const elementCounts = [
    ...Object.values(insertElements(instructions, 40)),
  ].sort((a, b) => a - b);

  const highCount = elementCounts.pop();
  const lowCount = elementCounts.shift();
  console.log('Question 2: ', highCount - lowCount);
}
