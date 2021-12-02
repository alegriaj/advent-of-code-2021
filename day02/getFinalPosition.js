// input - array of string commands
//      forward x = increase horizontal position by x
//      down x = increase depth by x
//      up x = decrease depth by x
// return - final position as a tuple [horizontal, vertical]
// Time Complexity: O(n)
// Space Complexity: O(1)
const getFinalPosition = (commands) => {
  const position = { horizontal: 0, vertical: 0 };
  for (let i = 0; i < commands.length; i++) {
    let [command, distance] = commands[i].split(' ');
    distance = parseInt(distance);

    switch (command) {
      case 'forward':
        position.horizontal += distance;
        break;
      case 'down':
        position.vertical += distance;
        break;
      case 'up':
        position.vertical -= distance;
        break;
    }
  }
  return position;
};

module.exports = {
  getFinalPosition,
};
