const fs = require('fs');

function getArrayStringsFromFile(fileName) {
  const fileString = fs.readFileSync(fileName).toString();
  const arr = fileString.split(/\r?\n/);
  return arr;
}

module.exports = {
  getArrayStringsFromFile,
};
