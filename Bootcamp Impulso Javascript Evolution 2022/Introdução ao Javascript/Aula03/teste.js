function mostrarNumerosPares(caixa){
  for (contador = 0; contador < caixa.length; contador++)
  {
    if (caixa[contador] % 2 == 0) {
      console.log(caixa[contador]);
    }
  }
}

let caixa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 15, 34, 84, 102, 103, 101]

mostrarNumerosPares(caixa);