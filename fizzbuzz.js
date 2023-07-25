function fizzbuzz(number) {
    if (number % 15 == 0) {
      return "FizzBuzz";
    }
    if (number % 3 == 0) {
      return "Fizz";
    }
    if (number % 5 == 0) {
      return "Buzz";
    } 
    return number;
}

function main() {
  for (let num = 1; num <= 100; num++){
    console.log(fizzbuzz(num));
  } 
}

main();

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