// input - array of string commands
//      forward 1 = increase horizontal position by 1
//      down 2 = increase depth by 2
//      up 3 = decrease depth by 3
// return - position tuple as (horizontal, vertical) position
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
