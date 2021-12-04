const { calcGammaEpsilon } = require('./calcGammaEpsilon');

// input -
//  diagnostics - array of binary strings
//  commonality - either 'most' (for O2) or 'least' (for CO2)
//  bit - (internal for recursion) current digit to filter on, start at 0
// return - O2 or CO2 generator rating as a binary string
//    example: '10111'
//
//  calculation for O2:
//    To find oxygen generator rating,
//      determine the most common value (0 or 1) in the current bit position,
//      and keep only numbers with that bit in that position.
//    If 0 and 1 are equally common,
//      keep values with a 1 in the position being considered.
//  calculation for CO2:
//    To find CO2 scrubber rating,
//      determine the least common value (0 or 1) in the current bit position,
//      and keep only numbers with that bit in that position.
//    If 0 and 1 are equally common,
//      keep values with a 0 in the position being considered.
// Time Complexity: O(nlog(n))
// Space Complexity: O(n)
function calcRecurse(diagnostics, commonality, bit = 0) {
  const bitToMatch = diagnostics.reduce(
    (acc, x) => (x[bit] === '1' ? [acc[0], acc[1] + 1] : [acc[0] + 1, acc[1]]),
    [0, 0]
  );

  let bitMatch = '';
  if (commonality === 'most') {
    bitMatch = bitToMatch[0] > bitToMatch[1] ? '0' : '1';
  } else {
    bitMatch = bitToMatch[0] > bitToMatch[1] ? '1' : '0';
  }

  const newDiagnostic = diagnostics.filter((x) => x[bit] === bitMatch);

  if (newDiagnostic.length === 1) {
    return parseInt(newDiagnostic[0], 2);
  }

  return calcRecurse(newDiagnostic, commonality, ++bit);
}

// input - array of binary strings
// return - O2 (x) and CO2 (y) Generator ratings, packaged in an object
//      {O2: x, CO2: y}
const calcO2CO2 = (diagnostics) => {
  // handle empty data
  if (diagnostics.length < 1) {
    return { O2: 0, CO2: 0 };
  }

  let O2 = calcRecurse(diagnostics, 'most');
  let CO2 = calcRecurse(diagnostics, 'least');

  return { O2, CO2 };
};

module.exports = {
  calcO2CO2,
};
