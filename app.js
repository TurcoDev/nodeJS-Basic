// import con commonJS
// const fizzbuzz = require("./fizzbuzz.js");
/* import con ES Module
  debo agregar la linea   "type": "module", en package.json
*/
import { fizzbuzz } from "./fizzbuzz.mjs";

console.log(fizzbuzz(8));


