// input - array of string commands
//      forward x = increase horizontal position by x, increase depth by aim * x
//      down x = increase depth by x, increase aim by x
//      up x = decrease depth by x, decrease aim by x
// return - position tuple as (horizontal, vertical) position
const getFinalPositionWithAim = (commands) => {
  const position = { horizontal: 0, vertical: 0 };
  let aim = 0;
  for (let i = 0; i < commands.length; i++) {
    let [command, distance] = commands[i].split(' ');
    distance = parseInt(distance);

    switch (command) {
      case 'forward':
        position.horizontal += distance;
        position.vertical += aim * distance;
        break;
      case 'down':
        aim += distance;
        break;
      case 'up':
        aim -= distance;
        break;
    }
  }
  return position;
};

module.exports = {
  getFinalPositionWithAim,
};
