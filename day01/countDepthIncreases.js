// input - array of positive numeric depths
// return - numeric count
//    how many times a successive depth is deeper than previous depth
// Time Complexity: O(n)
// Space Complexity: O(1)
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
