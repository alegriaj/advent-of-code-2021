function countFlashes(map, steps) {
  let flashCount = 0;
  for (let step = 0; step < steps; step++) {
    incEnergy(map);
    flashCount += getFlashes(map);
    resetFlashers(map);
  }
  return flashCount;
}

function getFlashes(map) {
  let flashCount = 0;
  for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[r].length; c++) {
      if (map[r][c] > 9) {
        flashCount += flash(map, r, c);
      }
    }
  }
  return flashCount;
}

function incEnergy(map) {
  for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[r].length; c++) {
      map[r][c] += 1;
    }
  }
}

function resetFlashers(map) {
  for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[r].length; c++) {
      if (map[r][c] === 'F') {
        map[r][c] = 0;
      }
    }
  }
}

function flash(map, r, c) {
  if (
    r < 0 ||
    c < 0 ||
    r >= map.length ||
    c >= map[r].length ||
    map[r][c] === 'F'
  ) {
    return 0;
  }

  map[r][c] += 1;

  if (map[r][c] > 9) {
    let flashCount = 1;
    map[r][c] = 'F';

    flashCount += flash(map, r - 1, c - 1); // top left
    flashCount += flash(map, r - 1, c); // top
    flashCount += flash(map, r - 1, c + 1); // top right
    flashCount += flash(map, r + 1, c - 1); // bottom left
    flashCount += flash(map, r + 1, c); // bottom
    flashCount += flash(map, r + 1, c + 1); // bottom right
    flashCount += flash(map, r, c - 1); // left
    flashCount += flash(map, r, c + 1); // right
    return flashCount;
  }

  return 0;
}

module.exports = {
  countFlashes,
};
