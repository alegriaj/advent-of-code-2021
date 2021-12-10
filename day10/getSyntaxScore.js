function getSyntaxScore(navSubsystem) {
  const syntaxPairs = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>',
  };
  const scoreTable = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137,
  };

  let score = 0;
  for (let LineNo = 0; LineNo < navSubsystem.length; LineNo++) {
    const syntaxStack = [];
    console.log('Line: ', LineNo, navSubsystem[LineNo]);

    for (let tokenNo = 0; tokenNo < navSubsystem[LineNo].length; tokenNo++) {
      const token = navSubsystem[LineNo][tokenNo];
      console.log(token);
      if (syntaxPairs[token] !== undefined) {
        console.log('pushing: ', token);
        syntaxStack.push(token);
      } else {
        const openToken = syntaxStack.pop();
        console.log('checking: ', openToken, token);
        if (token !== syntaxPairs[openToken]) {
          score += scoreTable[token];
          console.log('error: ', LineNo, tokenNo, token);
          // continue; // only find the first error on each line
        }
      }
    }
    // console.log(syntaxStack);
    // if (syntaxStack.length !== 0) {
    //   const openToken = syntaxStack.pop();
    //   score += scoreTable[syntaxPairs[openToken]];
    // }
    // break;
  }
  return score;
}

module.exports = {
  getSyntaxScore,
};
