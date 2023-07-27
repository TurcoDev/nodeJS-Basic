function fizzbuzz(number) {
  // if(typeof(number) == "number");
  // console.log(number);
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

// console.log(fizzbuzz(99999999999999999999999999999999999999999999999999999999));

// console.log('a' % 3);

function main(x) {
  for (let num = 1; num <= x; num++){
    console.log(fizzbuzz(num));
  } 
}

// main(100);

module.exports = fizzbuzz;

/*
Devuelve el resultado de la division
// let resultado = 3478 / 26;
Devuelve el resto de la division
// let resto = 3478 % 26;
*/

/* 
&& (AND) todas condiciones deben ser verdaderas
|| (OR) al menos una de las condiciones debe ser verdadera
XOR
x y or xor and
0 0 0  0    0
1 0 1  1    0
0 1 1  1    0
1 1 1  0    1
*/