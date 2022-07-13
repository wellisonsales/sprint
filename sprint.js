
import readlineSync from "readline-sync";

let propriedadeCss = readlineSync.question("digite uma propriedade CSS:");
console.log("você digitou " + propriedadeCss);

let fontSize = readlineSync.question("ok, agora digite um valor para sua fonte:");
console.log("O tamanho da sua fonte será " + fontSize)