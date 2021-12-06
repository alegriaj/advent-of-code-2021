// input - array of fish, number of days to grow fish for
//      fish array is numbers with number of days until doubling
// return - fish count at the end of the number of days
// fish 'age' counts down until -1 where it goes back to 6 and spawns another 8
function growFish(input, numberOfDays) {
  let fishByAge = populateAges(input);

  for (let day = 0; day < numberOfDays; day++) {
    const todayAges = initNumberMap(0, 8);

    // age the non-reproducers
    for (let age = 1; age <= 8; age++) {
      todayAges.set(age - 1, fishByAge.get(age));
    }

    // handle the day's reproducers
    incrementMapElement(todayAges, 8, fishByAge.get(0));
    incrementMapElement(todayAges, 6, fishByAge.get(0));

    fishByAge = todayAges;
  }

  // return fish count
  return [...fishByAge.values()].reduce((acc, value) => acc + value);
}

function populateAges(input) {
  const fishMap = initNumberMap(0, 8);

  for (let i = 0; i < input.length; i++) {
    incrementMapElement(fishMap, input[i], 1);
  }

  return fishMap;
}

function incrementMapElement(map, key, amount) {
  map.set(key, map.get(key) + amount);
}

function initNumberMap(start, end) {
  const newMap = new Map();
  for (let i = start; i <= end; i++) {
    newMap.set(i, 0);
  }
  return newMap;
}

module.exports = {
  growFish,
};
