//tipo de dados
//booleanos

//conversao implicita
const numero = 456;
const numeroString = "456";

// quando usa 3 sinais de igual === esta compara valor e o tipo da string
console.log(numero === numeroString) 
// quando usa 2 sinais de igual == esta comparando se os dados sáo equivalentes - compara os valores 
console.log(numero == numeroString)
// quando usa "+" em uma string o JS concatena
console.log(numero + numeroString)
//convertendo string em numero
console.log(numero + Number(numeroString))