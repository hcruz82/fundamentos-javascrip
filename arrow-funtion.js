function apresentar (nome){
    return `Meu nome é ${nome}`;
}
console.log(apresentar("Henrique"))

function somar (n1, n2){
    return n1 + n2;
}
console.log(somar(2, 2))

//arrow function
const apresentarArrow = nome => `Meu nome é ${nome}`;
console.log(apresentarArrow("Henrique Cruz"))

const soma = (n1, n2) => n1 + n2;
console.log(soma(1, 2))

//arrow functio com + de 1 linha de instrução

const numerosPequenos = (n1, n2) => {
    if (n1 && n2 > 10){
        return "somente numeros de 1 a 9"
    } else {
        return n1 + n2;
    }
} 
console.log(numerosPequenos(1, 2))