function fizzbuzz(number) {
  // Agregado de comprobacion del dato ingresado
  if(Number.isInteger(number) && Number.isSafeInteger(number)){
    if (number % 15 == 0) {
      return "FizzBuzz";
    }
    if (number % 3 == 0) {
      return "Fizz";
    }
    if (number % 5 == 0) {
      return "Buzz";
    } 
    return number.toString();
  }
  return "No es un numero";
}

function main(x) {
  for (let num = 1; num <= x; num++){
    console.log(fizzbuzz(num));
  } 
}

// main(100);

export { fizzbuzz };

