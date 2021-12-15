function insertElements(instructions, insertSteps) {
  const [polymerTemplate, pairInsertionRules] = splitInstructions(instructions);
  const rulesMap = generateRules(pairInsertionRules);

  let [pairMap, elementMap] = generateMaps(polymerTemplate);

  for (let stepNumber = 0; stepNumber < insertSteps; stepNumber++) {
    [pairMap, elementMap] = doInserts(pairMap, elementMap, rulesMap);
  }

  return elementMap;
}

function doInserts(pairMap, elementMap, ruleMap) {
  const newPairMap = {};
  for (pair of Object.keys(pairMap)) {
    const newFirstPair = pair[0] + ruleMap[pair];
    const newSecondPair = ruleMap[pair] + pair[1];
    const pairCount = pairMap[pair];

    elementMap[ruleMap[pair]] = elementMap[ruleMap[pair]] || 0;
    elementMap[ruleMap[pair]] += pairCount;

    newPairMap[newFirstPair] = newPairMap[newFirstPair] || 0;
    newPairMap[newFirstPair] += pairCount;
    newPairMap[newSecondPair] = newPairMap[newSecondPair] || 0;
    newPairMap[newSecondPair] += pairCount;
  }

  return [newPairMap, elementMap];
}

function generateMaps(polymer) {
  const pairMap = {};
  const elementMap = {};

  for (let i = 0; i < polymer.length - 1; i++) {
    const pair = polymer[i] + polymer[i + 1];
    pairMap[pair] = pairMap[pair] || 0;
    pairMap[pair] += 1;
    elementMap[polymer[i]] = elementMap[polymer[i]] | 0;
    elementMap[polymer[i]] += 1;
  }

  elementMap[polymer[polymer.length - 1]] =
    elementMap[polymer[polymer.length - 1]] | 0;
  elementMap[polymer[polymer.length - 1]] += 1;

  return [pairMap, elementMap];
}

function generateRules(pairInsertionRules) {
  const rulesMap = {};
  for (rule of pairInsertionRules) {
    const [pair, element] = rule.split(' -> ');
    rulesMap[pair] = element;
  }
  return rulesMap;
}

function splitInstructions(instructions) {
  const polymerTemplate = instructions[0];
  const pairInsertionRules = instructions.slice(2);
  return [polymerTemplate, pairInsertionRules];
}

module.exports = { insertElements };
