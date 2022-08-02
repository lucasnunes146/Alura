//lista de elementos
console.log("Trabalhando com condicionais");
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
console.log(listaDeDestinos);
//variáveis
const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true
//acrescentando um elemento na lista
listaDeDestinos.push(`Curitiba`);
//lista com condicional
console.log("Destinos possíveis");
if (idadeComprador >= 18 || estaAcompanhada == true) {
    listaDeDestinos.splice(1, 1);
    if(estaAcompanhada == true) console.log("Menor, mas está acompanhada.\n");
    else console.log("Comprador maior de idade\n");
} 
else console.log("Não é maior de idade e não posso vender\n");
//condicional aninhada

console.log("Embarque: ");
if (idadeComprador >= 18 && temPassagemComprada == true)console.log("Boa viagem");
else console.log("Não pode embarcar");

console.log(listaDeDestinos);
