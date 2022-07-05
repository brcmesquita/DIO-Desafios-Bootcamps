// DESAFIO JS BOOTCAMP DIO
// 1. Crie uma função que recebe dois números como parâmetros.
// 2. Confira se os números são iguais.
// 3. Confira se a soma dos números é maior que 10 ou menor que 20.
// 4. Retorne uma string dizendo "Os números num1 e num2 não/são iguais.
//    Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".

// SOLUÇÃO
const form = document.getElementById('form');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const resultado = document.getElementById('resultado');

form.onsubmit = fazerComparacao;

function fazerComparacao(e) {
  e.preventDefault();

  const num1 = Number(input1.value);
  const num2 = Number(input2.value);

  const soma = Number(num1) + Number(num2);

  const msg = `
  <p>Os números ${num1} e ${num2} ${num1 === num2 ? 'são' : 'não são'} iguais.
  Sua soma é ${soma}, que é ${soma > 10 ? 'maior' : 'menor'} que 10
  e ${soma < 20 ? 'menor' : 'maior'} que 20.</p>
  `;

  resultado.innerHTML = msg;
}