const form = document.getElementById('form');
const inputAluno = document.getElementById('aluno');
const inputNota = document.getElementById('nota');
const inputTurma = document.getElementById('turma');
const tabela = document.getElementById('lista');
const listaAprovados = document.getElementById('listaAprovados');
const formAprovados = document.getElementById('formAprovados');
const inputMedia = document.getElementById('media')

const alunos = []

const alunosAprovados = [];

function renderAlunos(){
  tabela.innerHTML = ''

  for (let i = 0; i < alunos.length; i++){
    const tr = document.createElement('tr');
    
  tr.innerHTML = `
  <td>${alunos[i].aluno}</td>
  <td>${alunos[i].turma}</td>
  <td>${alunos[i].nota}</td>
  `;

  tabela.append(tr);
 }
}

renderAlunos();

form.onsubmit = adicionarAluno;

function adicionarAluno(e){
  e.preventDefault();
  console.log(inputAluno.value);
  console.log(inputNota.value);
  console.log(inputTurma.value);

  alunos.push({
      aluno: inputAluno.value,
      turma: Number(inputTurma.value),
      nota: Number(inputNota.value)
    })

  renderAlunos();
}

formAprovados.onsubmit = mostrarAprovados;

function mostrarAprovados(e){
  e.preventDefault();

  listaAprovados.innerHTML = '';

  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= inputMedia.value) {
      alunosAprovados.push(alunos[i].aluno);
    }
  }
  
  listaAprovados.innerHTML = alunosAprovados;

  for (let i = 0; i < alunos.length; i++) {
    alunosAprovados.shift();
      alunosAprovados.pop();
  }
}