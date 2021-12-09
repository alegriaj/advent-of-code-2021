// input - array of strings.  Each is split into input and output by |
//  use the known wires lengths (1,3,7,8) to decode the other wire combinations
// output - sum of decoded numbers
// Wire Diagram - pre-scramble
//  -00-    [11]    *22*    *33*    [44]
//  aaaa    ....    aaaa    aaaa    ....
// b    c  .    c  .    c  .    c  b    c
// b    c  .    c  .    c  .    c  b    c
//  ....    ....    dddd    dddd    dddd
// e    f  .    f  e    .  .    f  .    f
// e    f  .    f  e    .  .    f  .    f
//  gggg    ....    gggg    gggg    ....

//  *55*     -66-    [77]    [88]    -99-
//  aaaa    aaaa    aaaa    aaaa    aaaa
// b    .  b    .  .    c  b    c  b    c
// b    .  b    .  .    c  b    c  b    c
//  dddd    dddd    ....    dddd    dddd
// .    f  e    f  .    f  e    f  .    f
// .    f  e    f  .    f  e    f  .    f
//  gggg    gggg    ....    gggg    gggg
function decodeAll(dataLines) {
  // acedgfb: 8 (7 wires)
  // cefabd: 9 (6 wires)
  // cdfgeb: 6 (6 wires)
  // cagedb: 0 (6 wires)
  // cdfbe: 5 (5 wires)
  // gcdfa: 2 (5 wires)
  // fbcad: 3 (5 wires)
  // eafb: 4 (4 wires)
  // dab: 7 (3 wires)
  // ab: 1 (2 wires)

  let sum = 0;
  for (const dataLine of dataLines) {
    if (!dataLine) continue;

    const [inputString, outputString] = dataLine.split('|');
    const inputs = inputString.trim().split(' ');
    const outputs = outputString.trim().split(' ');

    // catalog the knowns.
    const keys = new Map();
    const unknown5s = [];
    const unknown6s = [];
    const wires = new Map();
    for (let input of inputs) {
      input = input.split('').sort().join('');
      switch (input.length) {
        case 2: // 1(cf)
          keys.set(input, 1);
          wires.set(1, new Set(input.split('')));
          break;
        case 4: // 4(bcdf)
          keys.set(input, 4);
          wires.set(4, new Set(input.split('')));
          break;
        case 3: // 7(acf)
          keys.set(input, 7);
          wires.set(7, new Set(input.split('')));
          break;
        case 7: // 8(abcdefg)
          keys.set(input, 8);
          wires.set(8, new Set(input.split('')));
          break;
        case 5: // 2 3 5
          unknown5s.push(new Set(input));
          break;
        case 6: // 0 6 9
          unknown6s.push(new Set(input));
          break;
        default:
          throw 'INPUT ERROR';
      }
    }

    if (keys.size != 4 || unknown5s.length != 3 || unknown6s.length != 3) {
      throw 'INPUT ERROR';
    }

    // Decode/Translate and save to keys map
    wires.set('a', symmetricDifference(wires.get(7), wires.get(1)));
    wires.set('bd', symmetricDifference(wires.get(4), wires.get(1)));
    wires.set(3, findIncludes(wires.get(1), unknown5s));
    keys.set([...wires.get(3)].sort().join(''), 3);
    removeSetFromArray(unknown5s, wires.get(3));
    wires.set('b', difference(wires.get('bd'), wires.get(3)));
    wires.set('d', difference(wires.get('bd'), wires.get('b')));
    wires.set(0, findNotIncludes(wires.get('d'), unknown6s));
    keys.set([...wires.get(0)].sort().join(''), 0);
    removeSetFromArray(unknown6s, wires.get(0));
    wires.set('aeg', difference(wires.get(8), wires.get(4)));
    wires.set('eg', difference(wires.get('aeg'), wires.get('a')));
    wires.set(6, findIncludes(wires.get('eg'), unknown6s));
    keys.set([...wires.get(6)].sort().join(''), 6);
    removeSetFromArray(unknown6s, wires.get(6));
    wires.set(9, unknown6s[0]);
    keys.set([...wires.get(9)].sort().join(''), 9);
    removeSetFromArray(unknown6s, wires.get(9));
    wires.set(2, findIncludes(wires.get('eg'), unknown5s));
    keys.set([...wires.get(2)].sort().join(''), 2);
    removeSetFromArray(unknown5s, wires.get(2));
    wires.set(5, unknown5s[0]);
    keys.set([...wires.get(5)].sort().join(''), 5);
    removeSetFromArray(unknown5s, wires.get(5));

    // decode output
    let placeValue = 1000;
    let number = 0;
    for (let output of outputs) {
      output = output.split('').sort().join('');
      number += keys.get(output) * placeValue;
      placeValue /= 10;
    }

    sum += number;
  }
  return sum;
}

function removeSetFromArray(arr, set) {
  for (let i = 0; i < set.size; i++) {
    if (arr[i] === set) {
      return arr.splice(i, 1);
    }
  }
  return arr;
}

function findNotIncludes(setA, arr) {
  for (element of arr) {
    if (!includes(setA, element)) {
      return element;
    }
  }
}

function findIncludes(setA, arr) {
  for (element of arr) {
    if (includes(setA, element)) {
      return element;
    }
  }
}

// true if setB includes all of setA
function includes(setA, setB) {
  for (key of setA.keys()) {
    if (!setB.has(key)) {
      return false;
    }
  }
  return true;
}

// From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
function difference(setA, setB) {
  let _difference = new Set(setA);
  for (let elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

// From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
function symmetricDifference(setA, setB) {
  let _difference = new Set(setA);
  for (let elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

module.exports = {
  decodeAll,
};
