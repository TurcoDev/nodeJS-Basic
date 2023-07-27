import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

// console.log(typeof(rl));

const answer = await rl.question('What do you think of Node.js? ');

console.log(`Thank you for your valuable feedback: ${answer}`);

rl.close();

// Version con readline-sync en commonJS
// let readlineSync = require('readline-sync');

// let userName = readlineSync.question('Escribe tu nombre? ');
// console.log(`Hola ${userName} !`);
