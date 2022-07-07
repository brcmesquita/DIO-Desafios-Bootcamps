function validaArray(arr, num) {
  
  try {
    if (!arr && !num) throw new ReferenceError('Envie os parâmetros');

    if (typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');

    if (typeof num !== 'number') throw new TypeError('Num precisa ser do tipo number');

    if (arr.length !== num) throw new RangeError('O tamanho é inválido');

    return arr;

  } catch (e) {

    if (e instanceof ReferenceError) {
      console.log('Ocorreu um erro do tipo: ReferenceError. ', e.message)
    } else if (e instanceof TypeError) {
      console.log('Ocorreu um erro do tipo: TypeError. ', e.message)
    } else if (e instanceof RangeError) {
      console.log('Ocorreu um erro do tipo: RangeError. ', e.message)
    } else {
      console.log('Ocorreu um erro de um tipo inesperado. ', e.message);
    }

  }
}

console.log(validaArray([], 5));