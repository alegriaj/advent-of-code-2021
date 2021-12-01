// input:   array of at least 2 positive numbers
// output:  count of times depth increases over previous entry
function countDepthIncreases(depths) {
  // ensure input is valid
  if (depths.length < 2) {
    return 0;
  }

  let deeperCount = 0;
  let previousDepth = depths[0];

  for (let i = 1; i < depths.length; i++) {
    const currentDepth = depths[i];

    if (currentDepth > previousDepth) {
      deeperCount++;
    }

    previousDepth = currentDepth;
  }

  return deeperCount;
}

module.exports = {
  countDepthIncreases,
};
