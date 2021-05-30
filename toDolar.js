/**
 * Returns the value Real (R$) to Dolar ($)
 * @param { double } realValue
 */

function toDolar(realValue) {
  const valueDolar = 5.23; // Valor coletado em 29/05/2021

  if (realValue < 0) {
    return "realValue can't be less than 0;
  }

  const realDolar = parseFloat((realValue / valueDolar).toFixed(2));

  return realDolar;
}

console.log('2R$ em Dólar:' + toDolar(2));

module.exports = toDolar;
