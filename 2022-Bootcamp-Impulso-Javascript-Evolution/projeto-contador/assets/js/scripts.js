var currentNumber = document.getElementById("currentNumber")
var newNumber = 0

var btnSubtrair = document.getElementById("subtrair")
var btnAdicionar = document.getElementById("adicionar")

function subtrair() {
  if (newNumber >= - 9) {
    newNumber = newNumber - 1
    currentNumber.innerHTML = newNumber
  }

  if (newNumber < 0) {
    currentNumber.style.color = "red"
  }
}

function adicionar() {
  if (newNumber <= 9) {
  newNumber = newNumber + 1
  currentNumber.innerHTML = newNumber
  }

  if (newNumber >= 0) {
    currentNumber.style.color = "white"
  }
}

btnSubtrair.addEventListener('click', subtrair)
btnAdicionar.addEventListener('click', adicionar)

