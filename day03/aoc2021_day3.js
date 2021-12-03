// Advent Of Code
// Day 3 - Binary Diagnostic

const { getArrayStringsFromFile } = require('./fileIO');
const { calcGammaEpsilon } = require('./calcGammaEpsilon');
const { calcO2CO2 } = require('./calcO2CO2');

// Import AoC Input
const diagnostic = getArrayStringsFromFile('./aoc2021_day3_input.txt');

// Question 1 Solution
const final1 = calcGammaEpsilon(diagnostic);
console.log(`Question 1:`);
console.log(`Gamma: ${final1.gamma}`); // 2028
console.log(`Epsilon: ${final1.epsilon}`); // 2067
console.log(`Gamma * Epsilon: ${final1.gamma * final1.epsilon}`); // 4191876

// Question 2 Solution
const final2 = calcO2CO2(diagnostic);
console.log(`Question 2:`);
console.log(`O2: ${final2.O2}`); // 1391
console.log(`CO2: ${final2.CO2}`); //2455
console.log(`O2 * CO2: ${final2.O2 * final2.CO2}`); // 3414905
