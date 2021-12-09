// input array of strings.  Each is split into input and output by |
//  for the purposes of this decode,
//  only consider the right side / output
// output count of decoded digits
// Time: O(n^2)
// Space: O(1)
function decode1478(dataLines) {
  // 1(cf) 2 wires
  // 4(bcdf) 4 wires
  // 7(acf) 3 wires
  // 8(abcdefg) 7 wires

  const counters = new Map();
  counters.set(1, 0);
  counters.set(4, 0);
  counters.set(7, 0);
  counters.set(8, 0);

  for (const dataLine of dataLines) {
    if (!dataLine) {
      continue;
    }

    const [inputString, outputString] = dataLine.split('|');
    const outputs = outputString.trim().split(' ');

    for (output of outputs) {
      switch (output.length) {
        case 2: // 1(cf)
          incrementMapElement(counters, 1, 1);
          break;
        case 4: // 4(bcdf)
          incrementMapElement(counters, 4, 1);
          break;
        case 3: // 7(acf)
          incrementMapElement(counters, 7, 1);
          break;
        case 7: // 8(abcdefg)
          incrementMapElement(counters, 8, 1);
          break;
      }
    }
  }

  return [...counters.values()].reduce((acc, x) => acc + x, 0);
}

function incrementMapElement(map, key, amount) {
  if (!map.has(key)) {
    map.set(key, 0);
  }
  map.set(key, map.get(key) + amount);
}

module.exports = {
  decode1478,
};
