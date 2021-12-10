function sumLowPoints(heightMap) {
  let sum = 0;
  for (let row = 0; row < heightMap.length; row++) {
    for (let col = 0; col < heightMap[row].length; col++) {
      //   console.log('checking: ', row, col, heightMap[row][col]);
      if (isLowPoint(heightMap, row, col)) {
        sum += heightMap[row][col] + 1;
        // console.log('lowpoint', sum);
      }
    }
  }
  return sum;
}

function isLowPoint(map, r, c) {
  const height = map[r][c];

  const up = r - 1 >= 0 && map[r - 1][c] !== undefined ? map[r - 1][c] : 99;
  const down =
    r + 1 < map.length && map[r + 1][c] !== undefined ? map[r + 1][c] : 99;
  const left = c - 1 >= 0 && map[r][c - 1] !== undefined ? map[r][c - 1] : 99;
  const right =
    c + 1 < map[r].length && map[r][c + 1] !== undefined ? map[r][c + 1] : 99;

  if (
    up === undefined ||
    down === undefined ||
    left === undefined ||
    right === undefined
  ) {
    console.log(height, r, c, up, down, left, right);
    throw Error;
  }

  //   console.log(height, up, down, left, right);
  return height < up && height < down && height < left && height < right;
}

module.exports = {
  sumLowPoints,
};
