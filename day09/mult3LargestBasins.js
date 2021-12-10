function mult3LargestBasins(heightMap) {
  basins = [];
  for (let row = 0; row < heightMap.length; row++) {
    for (let col = 0; col < heightMap[row].length; col++) {
      if (heightMap[row][col] !== undefined && heightMap[row][col] !== 9) {
        basins.push(getBasinSize(heightMap, row, col));
      }
    }
  }
  basins.sort((a, b) => a - b);
  return basins.pop() * basins.pop() * basins.pop();
}

function getBasinSize(heightMap, row, col, direction = 'c') {
  if (
    row < 0 ||
    col < 0 ||
    row >= heightMap.length ||
    col >= heightMap[row].length ||
    heightMap[row][col] === undefined ||
    heightMap[row][col] === 9
  ) {
    return 0;
  }

  let sum = 1;
  heightMap[row][col] = undefined;

  if (['c', 'u', 'l', 'r'].includes(direction)) {
    sum += getBasinSize(heightMap, row - 1, col, 'u');
  }
  if (['c', 'd', 'l', 'r'].includes(direction)) {
    sum += getBasinSize(heightMap, row + 1, col, 'd');
  }
  if (['c', 'u', 'd', 'l'].includes(direction)) {
    sum += getBasinSize(heightMap, row, col - 1, 'l');
  }
  if (['c', 'u', 'd', 'r'].includes(direction)) {
    sum += getBasinSize(heightMap, row, col + 1, 'r');
  }

  return sum;
}

module.exports = {
  mult3LargestBasins,
};
