const form = document.getElementById('form');
const inputNome = document.getElementById('nome');
const inputIdade = document.getElementById('idade');
const anos = document.getElementById('anos');
const resultado = document.getElementById('resultado');

const pessoa = {}

const calopsita1 = {
  nome: 'Albus',
  idade: 1,
}

const calopsita2 = {
  nome: 'Minerva',
  idade: 1,
}

form.onsubmit = adicionarPessoa;

function adicionarPessoa(e){
  e.preventDefault();
  pessoa.nome = inputNome.value;
  pessoa.idade = Number(inputIdade.value);
  tempo = Number(anos.value);
  console.log('Usando Call ->', calcularIdade.call(pessoa, tempo));
  console.log('Usando Apply ->',calcularIdade.apply(pessoa, [tempo]));
}

function calcularIdade(anos) {
  resultado.innerHTML = ''

  const msg = `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
  
  const p = document.createElement('p');
  p.append(msg);
  resultado.append(p);

  return msg;
}



