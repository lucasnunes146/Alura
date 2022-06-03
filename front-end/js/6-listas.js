console.log(`Trabalhando com listas`);	
// const salvador = ;
// const saoPaulo = ;
// const rioDeJaneiro = ;


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) //adicionando um item na lista
console.log("Destinos possíveis");
// console.log(salvador, saoPaulo, rioDeJaneiro);
listaDeDestinos.splice(1, 1); // deletar itens, onde o primeiro é a posição do elemento e o segundo é a quantidade de elementos
console.log(listaDeDestinos);
console.log(listaDeDestinos[0],",", listaDeDestinos[1]," e ", listaDeDestinos[2]); // localizar elementos de acordo com a posição



