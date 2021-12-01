const fs = require('fs');

function getArrayFromFile(fileName) {
  const fileString = fs.readFileSync(fileName).toString();
  const arr = fileString.split('\r\n').map((depth) => Number(depth));
  return arr;
}

module.exports = {
  getArrayFromFile,
};
