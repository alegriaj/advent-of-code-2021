const { getArrayStringsFromFile } = require('./fileIO');

// Brute Force approach to problem
// input - filename
//      file contains one line with bingo draw numbers
//      blank line
//      bingo boards 5x5, space seperated numbers
//      blank line between boards
// output - score of winning board
// Time: O(n^5)
// Space: O(nm)
function getWinningScore(filename) {
  const input = getArrayStringsFromFile(filename);

  const drawOrder = getDrawOrder(input);
  const boards = getBoards(input);

  const [winningBoard, winningDraw] = doDraws(drawOrder, boards);
  const winningSum = calcWinningSum(boards[winningBoard]);
  return winningSum * winningDraw;
}

// Read bingo draw numbers from first array element
// Advance past first blank line between draw numbers and boards
// input - array
// output - array of numbers to draw
// Time: O(n)
// Space: O(1) - data just moves and shrinks from one array to another
function getDrawOrder(input) {
  const drawOrder = input
    .shift()
    .split(',')
    .map((x) => parseInt(x));
  input.shift();

  return drawOrder;
}

// Read bingo game boards into array of arrays (array of boards)
// Time: O(n)
// Space: O(1)
function getBoards(input) {
  const boards = [];
  while (input.length) {
    const board = [];
    while (input[0] !== '') {
      lineStr = input.shift();

      board.push([
        [parseInt(lineStr.substring(0, 2)), false],
        [parseInt(lineStr.substring(3, 5)), false],
        [parseInt(lineStr.substring(6, 8)), false],
        [parseInt(lineStr.substring(9, 11)), false],
        [parseInt(lineStr.substring(12, 14)), false],
      ]);
    }
    input.shift();
    boards.push(board);
  }
  return boards;
}

// Time: O(nm)
// Space: O(1)
function calcWinningSum(board) {
  let sum = 0;
  for (let l = 0; l < board.length; l++) {
    for (let c = 0; c < board[l].length; c++) {
      if (!board[l][c][1]) {
        sum += board[l][c][0];
      }
    }
  }
  return sum;
}

// Time: O(n)
// Space: O(1)
function hasWinningLine(board, l) {
  for (let c = 0; c < board[l].length; c++) {
    if (board[l][c][1] === false) {
      return false;
    }
  }
  return true;
}

// Time: O(n)
// Space: O(1)
function hasWinningColumn(board, c) {
  for (let l = 0; l < board.length; l++) {
    if (board[l][c][1] === false) {
      return false;
    }
  }
  return true;
}

// Time: O(n^3)
// Space: O(1)
function applyDrawToBoard(draw, board) {
  for (let l = 0; l < board.length; l++) {
    const line = board[l];
    for (let s = 0; s < line.length; s++) {
      const [spot] = line[s];
      if (spot === draw) {
        board[l][s][1] = true;
        if (hasWinningLine(board, l)) {
          return true;
        }
        if (hasWinningColumn(board, s)) {
          return true;
        }
      }
    }
  }
  return false;
}

// Time: O(n^4)
// Space: O(1)
function applyDrawToBoards(draw, boards) {
  for (let b = 0; b < boards.length; b++) {
    board = boards[b];
    if (applyDrawToBoard(draw, board)) {
      return b;
    }
  }
  return -1;
}

// Time: O(n^5)
// Space: O(1)
function doDraws(drawOrder, boards) {
  for (draw of drawOrder) {
    const b = applyDrawToBoards(draw, boards);
    if (b !== -1) {
      return [b, draw];
    }
  }
}

module.exports = {
  getWinningScore,
};
