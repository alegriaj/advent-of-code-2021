// input - array of positive numeric depths
// return - numeric count
//    How many times a successive depth sliding window sum
//    was deeper than the sliding window sum
//    Sliding window set to be 3 elements
// Time Complexity: O(n)
// Space Complexity: O(1)
function countIncSlidingWindow(depths) {
  // ensure input is valid
  if (depths.length < 4) {
    return 0;
  }

  let previousDepth = sumPreviousThree(depths, 2);
  let deeperCount = 0;

  for (let i = 3; i < depths.length; i++) {
    const slidingDepthWindow = sumPreviousThree(depths, i);

    if (slidingDepthWindow > previousDepth) {
      deeperCount++;
    }

    previousDepth = slidingDepthWindow;
  }

  return deeperCount;
}

function sumPreviousThree(arr, i) {
  return arr[i] + arr[i - 1] + arr[i - 2];
}

module.exports = {
  countIncSlidingWindow,
};
