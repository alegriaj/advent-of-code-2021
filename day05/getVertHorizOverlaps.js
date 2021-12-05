// Input -
//  array of strings in the form:
//      x1,y1 -> x2,y2
//      These are the coordinates of two points that form a line segment.
//  considerDiag - true to consider diagonal lines, false to disregard them
// Return - number of line segment overlaps
function getVertHorizOverlaps(input, considerDiag = false) {
  const map = {};

  for (line of input) {
    if (line === '') {
      continue;
    }

    [[x1, y1], [x2, y2]] = line.split(' -> ').map((coord) => coord.split(','));

    plotLine(
      map,
      parseInt(x1),
      parseInt(y1),
      parseInt(x2),
      parseInt(y2),
      considerDiag
    );
  }

  return countPosOverMax(map, 1);
}

// Time: O(n) Space: O(1)
function countPosOverMax(map, maxValue) {
  return Object.values(map).filter((value) => value > maxValue).length;
}

// Time: O(n) Space: O(n)
function plotLine(map, x1, y1, x2, y2, considerDiag) {
  const m = calcSlope(x1, y1, x2, y2);

  // Only consider horizontal and vertical lines
  switch (m) {
    case 0:
    case -0:
      plotHorizontal(map, Math.min(x1, x2), Math.max(x1, x2), y1);
      break;
    case Infinity:
    case -Infinity:
      plotVertical(map, Math.min(y1, y2), Math.max(y1, y2), x1);
      break;
    case 1:
      if (considerDiag) {
        plotDiag(map, x1, y1, x2, y2);
      }
      break;
    case -1:
      if (considerDiag) {
        plotDiag(map, x1, y1, x2, y2);
      }
      break;
  }
}

// Time: O(n) Space: O(n)
function plotDiag(map, x1, y1, x2, y2) {
  let x = x1;
  let y = y1;
  while (x != x2 && y != y2) {
    incMapPos(map, x, y);
    x = x < x2 ? x + 1 : x - 1;
    y = y < y2 ? y + 1 : y - 1;
  }
  incMapPos(map, x, y);
}

// Time: O(n) Space: O(n)
function plotVertical(map, y1, y2, x) {
  for (let y = y1; y <= y2; y++) {
    incMapPos(map, x, y);
  }
}

// Time: O(n) Space: O(n)
function plotHorizontal(map, x1, x2, y) {
  for (let x = x1; x <= x2; x++) {
    incMapPos(map, x, y);
  }
}

// Time: O(1) Space: O(1)
function incMapPos(map, x, y) {
  coordStr = `${x}_${y}`;
  map[coordStr] = map[coordStr] || 0;
  map[coordStr]++;
  return map[coordStr] === 2 ? 1 : 0;
}

// Time: O(1) Space: O(1)
function calcSlope(x1, y1, x2, y2) {
  return (1.0 * (y2 - y1)) / (1.0 * (x2 - x1));
}

module.exports = {
  getVertHorizOverlaps,
};
