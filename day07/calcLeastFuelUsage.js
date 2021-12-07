// Input - numeric array with crab locations
// Return - minimum fuel used to move all crabs to single location
// Time: O(n^2)
// Space: O(n)
function calcLeastFuelUsage(input) {
  // figure out the min and max positions
  // and load the map with the crabs
  let min = input[0];
  let max = input[0];
  const crabMap = new Map();
  for (let i = 0; i < input.length; i++) {
    min = Math.min(min, input[i]);
    max = Math.max(max, input[i]);
    incrementMapElement(crabMap, input[i], 1);
  }

  // Calculate the fuel used to move all crabs to each location in the range
  const fuelMap = new Map();
  for (let i = min; i <= max; i++) {
    let fuelUsed = 0;
    for (loc of crabMap.keys()) {
      fuelUsed += Math.abs(loc - i) * (crabMap.get(loc) || 0);
    }
    fuelMap.set(i, fuelUsed);
  }

  // Figure out which location used least fuel
  let minFuel = undefined;
  for (fuelUsed of fuelMap.values()) {
    if (!minFuel) {
      minFuel = fuelUsed;
    } else if (fuelUsed < minFuel) {
      minFuel = fuelUsed;
      minFuelLocation = loc;
    }
  }
  return minFuel;
}

function incrementMapElement(map, key, amount) {
  if (!map.has(key)) {
    map.set(key, 0);
  }
  map.set(key, map.get(key) + amount);
}

module.exports = {
  calcLeastFuelUsage,
};
