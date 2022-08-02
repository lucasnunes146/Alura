//lista de elementos
console.log("Trabalhando com loops");
const listaDeDestinos = new Array(`Salvador`, `Sao Paulo`, `Rio de Janeiro`);

//variáveis
const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

//lista com condicional
console.log("\nDestinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

//let contador = 0;
let destinoExiste = false;

for (let index = 0; index < listaDeDestinos.length; index++) {
  if (listaDeDestinos[index] == destino) {
    console.log(`Você escolheu ${destino}. Boa viagem!!`);
    destinoExiste = true;
    break;
  }
}
// while (contador < listaDeDestinos.length){
//     if (listaDeDestinos[contador] == destino) {
//         console.log(`Você escolheu ${destino}. Boa viagem!!`);
//         destinoExiste = true;
//         break;
//     }
//     contador += 1;
// }

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
  console.log("Boa Viagem!");
} else {
  console.log("Desculpe, tivemos um erro!");
}
