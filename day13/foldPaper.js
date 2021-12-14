function foldOnce(paper) {
  const [coordinates, instructions] = splitCoordinatesAndInstructions(paper);
  let [map, maxX, maxY] = createMap(coordinates);
  [map, maxX, maxY] = foldPaper(map, instructions[0], maxX, maxY);

  return [...map.keys()].length;
}

function fold(paper) {
  const [coordinates, instructions] = splitCoordinatesAndInstructions(paper);
  let [map, maxX, maxY] = createMap(coordinates);

  for (instruction of instructions) {
    [map, maxX, maxY] = foldPaper(map, instruction, maxX, maxY);
  }

  return printMap(map, maxX, maxY);
}

function printMap(map, maxX, maxY) {
  const lines = [];
  for (let y = 0; y <= maxY; y++) {
    let lineArray = [];
    for (let x = 0; x <= maxX; x++) {
      lineArray.push(map.has(x + ',' + y) ? '#' : '.');
    }
    lines.push(lineArray.join(''));
  }
  return lines;
}

// convert coordinates into a map object
function createMap(coordinates) {
  const set = new Set();
  let maxX = 0;
  let maxY = 0;

  for (let i = 0; i < coordinates.length; i++) {
    [x, y] = coordinates[i];
    maxX = maxX > x ? maxX : x;
    maxY = maxY > y ? maxY : y;
    set.add(x + ',' + y);
  }

  return [set, maxX, maxY];
}

// break paper up into coordinates and instructions
function splitCoordinatesAndInstructions(paper) {
  const coordinates = [];
  const instructions = [];
  let section = 0;
  for (let i = 0; i < paper.length; i++) {
    if (paper[i] === '') {
      section++;
      continue;
    }
    switch (section) {
      case 0:
        coordinates.push(paper[i].split(',').map((x) => parseInt(x)));
        break;
      case 1:
        instructions.push(paper[i].split(' ')[2].split('='));
        break;
      default:
        break;
    }
  }
  return [coordinates, instructions];
}

function foldPaper(map, instruction, maxX, maxY) {
  const [foldDirection, foldLocation] = instruction;
  const foldedMap = new Set(map);

  for (let coordinates of foldedMap.keys()) {
    const [x, y] = coordinates.split(',').map((n) => parseInt(n));

    if (foldDirection === 'y') {
      // horizontal fold
      if (y === foldLocation) {
        foldedMap.delete(coordinates);
      } else if (y > foldLocation) {
        const newY = foldLocation - (y - foldLocation);
        foldedMap.add(x + ',' + newY);
        foldedMap.delete(coordinates);
      }
    } else {
      // vertical fold
      if (x === foldLocation) {
        foldedMap.delete(coordinates);
      } else if (x > foldLocation) {
        const newX = foldLocation - (x - foldLocation);
        foldedMap.add(newX + ',' + y);
        foldedMap.delete(coordinates);
      }
    }
  }

  maxX = foldDirection === 'x' ? foldLocation - 1 : maxX;
  maxY = foldDirection === 'y' ? foldLocation - 1 : maxY;

  return [foldedMap, maxX, maxY];
}

module.exports = {
  foldOnce,
  fold,
};
