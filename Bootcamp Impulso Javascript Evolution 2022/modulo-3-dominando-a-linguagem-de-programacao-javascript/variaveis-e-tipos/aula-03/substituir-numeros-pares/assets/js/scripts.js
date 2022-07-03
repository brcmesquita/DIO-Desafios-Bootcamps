const form = document.getElementById('form');
const numbers = document.getElementById('numbers');
const resultado = document.getElementById('resultado');

form.onsubmit = trocarNumeros;

function trocarNumeros(e){
  e.preventDefault();

  const numerosRecebidos = numbers.value.split(',');

  const nulo = numbers.value === null;
  const indefinido = numbers.value === 'undefined';
  const zero = numbers.value === '0' || numbers.value === 0;
  const regex =  /[^a-z\d]/i;
  const validacao = !(regex.test(numbers.value));

  if (nulo || indefinido || zero || validacao) {
    resultado.innerText = 'Entrada inválida (erro: -1)'
    return;
  }

  const novoArray = [];

  for (num of numerosRecebidos) {
    if ( num % 2 == 0 ) {
      novoArray.push(0);
    } else {
      novoArray.push(num);
    }
  }

  resultado.innerText = novoArray;
}