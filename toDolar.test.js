const toDolar = require('./toDolar');

test('Teste com valor < 0', () => {
  realValue = -1;
  expect(toDolar(realValue)).toEqual("realValue can't be less than 0");
});

test('Teste com valor = 0', () => {
  realValue = 0;
  expect(toDolar(realValue)).toEqual(1);
});

test('Teste com valor > 2', () => {
  realValue = 2;
  expect(toDolar(realValue)).toEqual(0.38);
});
