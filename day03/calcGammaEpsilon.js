// input - array of binary strings
// return - gamma (g) and epsilon (e) packaged in an object
//      {gamma: g, epsilon: e}
//  calculation for gamma:
//      calculate most common bit setting (0 or 1) for each bit
//      convert binary number result to decimal
//  calculation for epsilon:
//      calculate least common bit setting (0 or 1) for each bit
//      convert binary number result to decimal
// Time Complexity: O(mn)
// Space Complexity: O(n)
const calcGammaEpsilon = (diagnostics) => {
  // handle empty data
  if (diagnostics.length < 1) {
    return { gamma: 0, epsilon: 0 };
  }

  // initialize counters
  let gammas = [];
  let epsilons = [];
  const accumulators = [];
  for (let i = 0; i < diagnostics[0].length; i++) {
    accumulators.push(0);
    gammas.push(0);
    epsilons.push(0);
  }

  // sum the bits by position
  for (diagnostic of diagnostics) {
    for (let i = 0; i < diagnostic.length; i++) {
      accumulators[i] += parseInt(diagnostic[i], 2);
    }
  }

  // calculate gamma and epsilon bit by bit
  for (let i = 0; i < diagnostics[0].length; i++) {
    gammas[i] = accumulators[i] > diagnostics.length / 2 ? 1 : 0;
    epsilons[i] = accumulators[i] < diagnostics.length / 2 ? 1 : 0;
  }

  // convert arrays of bits to decimal for gamma and epsilon
  const gamma = parseInt(gammas.join(''), 2);
  const epsilon = parseInt(epsilons.join(''), 2);

  return { gamma, epsilon };
};

module.exports = {
  calcGammaEpsilon,
};
