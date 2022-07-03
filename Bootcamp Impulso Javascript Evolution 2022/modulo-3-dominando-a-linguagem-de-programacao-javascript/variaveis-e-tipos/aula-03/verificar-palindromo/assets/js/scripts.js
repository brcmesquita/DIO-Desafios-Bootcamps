// DESAFIO
// Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.
// Palíndromo: frase ou palavra que se pode ler, indiferentemente,
//             da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)

// SOLUÇÃO
const form = document.getElementById('form');
const input = document.getElementById('input');
const resultado = document.getElementById('resultado');


function verificaPalindromo(e){
  e.preventDefault();

  if (input.value.length === 0) {
    resultado.innerHTML = 'Digite uma palavra.';
    return;
  }

  const texto = input.value;
  const textoInvertido = texto.split('').reverse().join('');
  
  resultado.innerHTML = `
    ${texto}, ${texto === textoInvertido ? 'é um palíndromo' : 'não é um palíndromo'}
  `;
}

form.onsubmit = verificaPalindromo;