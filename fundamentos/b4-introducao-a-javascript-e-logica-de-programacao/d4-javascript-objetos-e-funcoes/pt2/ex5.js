

function repeat(numbers) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numbers) {
    let verificaNumero = numbers[index];
    for (let index2 in numbers) {
      if (verificaNumero === numbers[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numbers[indexNumeroRepetido];
}



console.log(repeat([2, 3, 2, 5, 8, 2, 3]));