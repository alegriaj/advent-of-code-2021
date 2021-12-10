const syntaxPairs = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>',
};
const scoreTable = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4,
};

function completionMiddleScore(navSubsystem) {
  let scores = [];
  for (let lineNo = 0; lineNo < navSubsystem.length; lineNo++) {
    const syntaxStack = [];
    const line = navSubsystem[lineNo];
    // console.log('Line: ', LineNo, navSubsystem[LineNo]);

    if (hasBadSymbol(line)) {
      continue;
    }

    for (let tokenNo = 0; tokenNo < line.length; tokenNo++) {
      const token = line[tokenNo];
      if (syntaxPairs[token] !== undefined) {
        syntaxStack.push(token);
      } else {
        const openToken = syntaxStack.pop();
        if (token !== syntaxPairs[openToken]) {
          throw 'ERROR';
        }
      }
    }

    // console.log(syntaxStack);
    let lineScore = 0;
    while (syntaxStack.length !== 0) {
      const openToken = syntaxStack.pop();
      lineScore *= 5;
      lineScore += scoreTable[syntaxPairs[openToken]];
    }
    scores.push(lineScore);
    // console.log(lineNo, lineScore, score);
  }

  scores.sort((a, b) => a - b);
  return scores[(scores.length - 1) / 2];
}

function hasBadSymbol(line) {
  const syntaxStack = [];
  for (let tokenNo = 0; tokenNo < line.length; tokenNo++) {
    const token = line[tokenNo];
    if (syntaxPairs[token] !== undefined) {
      syntaxStack.push(token);
    } else {
      const openToken = syntaxStack.pop();
      if (token !== syntaxPairs[openToken]) {
        // score += scoreTable[token];
        return true;
      }
    }
  }
  return false;
}

module.exports = {
  completionMiddleScore,
};
