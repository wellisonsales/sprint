
import readlineSync from "readline-sync";

let propriedadeCss = readlineSync.question("digite uma propriedade CSS:");
console.log("você digitou " + propriedadeCss);

let fontSize = readlineSync.question("ok, agora digite um valor para sua fonte:");
console.log("O tamanho da sua fonte será " + fontSize);

let textAlign = readlineSync.question("otimo tamanho, agora, digite o alinhamento do texto: ");
console.log("O alinhamento será " + textAlign);