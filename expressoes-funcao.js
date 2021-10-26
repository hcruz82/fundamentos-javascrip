// declaração de função


function minhaFuncao(n1, n2){
    return n1 + n2;
}
console.log (minhaFuncao(2, 2))

// expressão de função

const soma = function (n1, n2) { return n1 + n2 }
console.log(soma(2, 2))

// diferença entre as 2 modos é que no caso de function a chamanda (hoisting)
// console.log pode ser feita antes da função...já no const a chamada so pode ser feita depois

console.log (minhaFuncao(2, 2))
function minhaFuncao(n1, n2){
    return n1 + n2;
}

console.log(soma1(2, 2))
const soma1 = function (n1, n2) { return n1 + n2 }
