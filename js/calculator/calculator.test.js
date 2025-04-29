const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//division
test('divide 20 / 4 to equal 5', () => {
  expect(calculator.divide(20, 4)).toBe(5);
});
test('divide 64 / 8 to equal 8', () => {
  expect(calculator.divide(64, 8)).toBe(8);
});
//multiplicacion
test('multiply 25 * 25 to equal 625', () => {
  expect(calculator.multiply(25, 25)).toBe(625);
});
test('multiply 4 * 3 to equal 12', () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});
//dividir por 0
test('divide 64 / 0 to equal: no se puede dividir por 0', () => {
  expect(calculator.divide(64, 0)).toBe("no se puede dividir por 0");
});