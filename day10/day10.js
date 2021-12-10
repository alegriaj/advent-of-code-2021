// Advent Of Code 2021
// Day 10 - Syntax Scoring

const { getArrayStringsFromFile } = require('./fileIO');
const { getSyntaxScore } = require('./getSyntaxScore');
const { completionMiddleScore } = require('./completionMiddleScore');

// Import AoC Input
const filename = './input.txt';
const navSubsystem = getArrayStringsFromFile(filename).map((x) => x.split(''));
const navSubsystemd = [
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

console.log(completionMiddleScore(navSubsystem));
