function sumPreviousThree(arr, i) {
  return arr[i] + arr[i - 1] + arr[i - 2];
}

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

module.exports = {
  countIncSlidingWindow,
};
