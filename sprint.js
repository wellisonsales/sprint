
import readlineSync from "readline-sync";

let usuario = [];

while(true){

        const name = readlineSync.question("digite seu nome ou apelido:")
        console.log("hmm..seu nome é " + name);

        const propriedadeCss = readlineSync.question("agora, " + name + ", digite uma propriedade CSS:");

        const checkpoint = readlineSync.question("Vc digitou:" + propriedadeCss + " esta certo?");

            if (checkpoint === 'sim') {
                usuario.push(propriedadeCss);
                break;
            } else { 
                console.log("poxa que pena amore, tente novamente!");
                break;
            };

        };

    const final = propriedadeCss.sort ((a,b)=>{
        return a.localeCompare(b);
})

console.log("aqui está a sua lista: " + final)