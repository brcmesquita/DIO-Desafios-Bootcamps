function calculadora() {
  const operacao = Number(prompt(`
  Digite a operação desejada:
  1 - Adição (+)
  2 - Subtração (-)
  3 - Multiplicação (*)
  4 - Divisão real (/)
  5 - Divisão inteira (%)
  6 - Potenciação (**)
  `));

  if (!operacao || operacao >= 7) {
    alert("Erro - Operação inválida");
    calculadora();
  } else {

    let n1 = Number(prompt("Digite o primeiro valor:"));
    let n2 = Number(prompt("Digite o segundo valor:"));
    let resultado;

    function soma(n1, n2) {
      resultado = n1 + n2;
      alert(`${n1} + ${n2} = ${resultado}`);
    }

    function subtracao(n1, n2) {
      resultado = n1 - n2;
      alert(`${n1} - ${n2} = ${resultado}`);
    }

    function multiplicacao(n1, n2) {
      resultado = n1 * n2;
      alert(`${n1} * ${n2} = ${resultado}`);
    }

    function divisaoReal(n1, n2) {
      resultado = n1 / n2;
      alert(`${n1} / ${n2} = ${resultado}`);
    }

    function divisaoInteira(n1, n2) {
      resultado = n1 % n2;
      alert(`O resto da divisão ${n1} % ${n2} = ${resultado}`);
    }

    function potenciacao(n1, n2) {
      resultado = n1 ** n2;
      alert(`${n1} elevado a ${n2} = ${resultado}`);
    }

    function novaOperacao() {
      let opcao = prompt(`
    Deseja fazer outra operação?
    1 - Sim
    2 - Não
    `);

      if (opcao == 1) {
        calculadora();
      } else if (opcao == 2) {
        alert("Até a próxima!");
      } else {
        alert("Opção inválida!");
      }
    }

    // fazendo no modo padrão com IF
    // if (operacao == 1) {
    //   soma(n1, n2);
    // } else if (operacao == 2) {
    //   subtracao(n1, n2);
    // } else if (operacao == 3) {
    //   multiplicacao(n1, n2);
    // } else if (operacao == 4) {
    //   divisaoReal(n1, n2);
    // } else if (operacao == 5) {
    //   divisaoInteira(n1, n2);
    // } else if (operacao == 6) {
    //   potenciacao(n1, n2);
    // }

    // alterando o modo de fazer a operação com SWITCH
    switch (operacao) {
      case 1:
        soma(n1, n2);
        break;
      case 2:
        subtracao(n1, n2);
        break;
      case 3:
        multiplicacao(n1, n2);
        break;
      case 4:
        divisaoReal(n1, n2);
        break;
      case 5:
        divisaoInteira(n1, n2);
        break;
      case 6:
        potenciacao(n1, n2);
        break;
      default:
        break;
    }

    novaOperacao();

  }
}
calculadora();