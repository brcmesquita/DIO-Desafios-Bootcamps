const tarefas = [
  'hoje',
  'amanhã',
  'sempre',
  'futuro',
  'próximo'
]

const tarefasLista = document.getElementById('tarefas');
const ul = document.createElement('ul');
tarefasLista.appendChild(ul);

function renderizaTarefas(){
  ul.innerHTML = ''
for (tarefa of tarefas) {
  const li = document.createElement('li');
  const p = document.createElement('p');
  const chkbox = document.createElement('input');
  chkbox.setAttribute('type', 'checkbox');

  ul.appendChild(li)
  li.appendChild(chkbox)
  li.appendChild(p)
  p.innerText = tarefa
}}

renderizaTarefas();

const inpuText = document.getElementById('texto');
const form = document.getElementById('form');

form.onsubmit = addTarefa;

function addTarefa(e){
  e.preventDefault();
  tarefas.push(inpuText.value);
  inpuText.value = ''
  renderizaTarefas();
}

// mark task done
ul.onclick = function(e){
  if(e.target.tagName === 'INPUT'){
    e.target.parentElement.classList.toggle('concluido');
  }
}