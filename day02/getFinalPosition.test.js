const { getFinalPosition } = require('./getFinalPosition');

test('[]', () => {
  let data = [];
  expect(getFinalPosition(data)).toStrictEqual({ horizontal: 0, vertical: 0 });
});

test('forward 1', () => {
  let data = ['forward 1'];
  expect(getFinalPosition(data)).toStrictEqual({ horizontal: 1, vertical: 0 });
});

test('down 1', () => {
  let data = ['down 1'];
  expect(getFinalPosition(data)).toStrictEqual({ horizontal: 0, vertical: 1 });
});

test('up 1', () => {
  let data = ['up 1'];
  expect(getFinalPosition(data)).toStrictEqual({ horizontal: 0, vertical: -1 });
});

test('forward 1 and down 1', () => {
  let data = ['forward 1', 'down 1'];
  expect(getFinalPosition(data)).toStrictEqual({ horizontal: 1, vertical: 1 });
});

test('forward 5', () => {
  let data = ['forward 5'];
  expect(getFinalPosition(data)).toStrictEqual({ horizontal: 5, vertical: 0 });
});

test('down 5', () => {
  let data = ['down 5'];
  expect(getFinalPosition(data)).toStrictEqual({ horizontal: 0, vertical: 5 });
});

test('down 5 up 4', () => {
  let data = ['down 5', 'up 4'];
  expect(getFinalPosition(data)).toStrictEqual({ horizontal: 0, vertical: 1 });
});

test('forward 2 forward 3', () => {
  let data = ['forward 2', 'forward 3'];
  expect(getFinalPosition(data)).toStrictEqual({ horizontal: 5, vertical: 0 });
});

test('sample data', () => {
  let data = [
    'forward 5',
    'down 5',
    'forward 8',
    'up 3',
    'down 8',
    'forward 2',
  ];
  expect(getFinalPosition(data)).toStrictEqual({
    horizontal: 15,
    vertical: 10,
  });
});
