// Advent Of Code 2021
// Day 10 - Syntax Scoring

const { getArrayStringsFromFile } = require('./fileIO');
const { getSyntaxScore } = require('./getSyntaxScore');

// Import AoC Input
const filename = './input.txt';
const navSubsystemR = getArrayStringsFromFile(filename).map((x) => x.split(''));
const navSubsystem = [
  '[({(<(())[]>[[{[]{<()<>>',
  '[(()[<>])]({[<{<<[]>>(',
  '{([(<{}[<>[]}>{[]{[(<()>',
  '(((({<>}<{<{<>}{[]{[]{}',
  '[[<[([]))<([[{}[[()]]]',
  '[{[{({}]{}}([{[{{{}}([]',
  '{<[[]]>}<{[{[{[]{()[[[]',
  '[<(<(<(<{}))><([]([]()',
  '<{([([[(<>()){}]>(<<{{',
  '<{([{{}}[<[[[<>{}]]]>[]]',
].map((x) => x.split(''));

console.log(getSyntaxScore(navSubsystem));
