//var

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area)
// var pode ser utlizado em qlq parte do codigo, e não precisa colocar o valor da variavel
//var area;

//let
/* let forma = "retangulo"
let altura = 5;
let comprimento = 7;
//diferente do var a opcao let precisa ser declarada junto do objeto "let=area"
let = area

if (forma === "retangulo"){
    area = altura * comprimento;
} else {
    area = (altura * comprimento)/2;
}   
console.log(area) */

//const - sempre que declarar uma const é necessario adicionar um valor na variavel
const forma = "triangulo";
const altura = 5;
const comprimento = 7;
// usar let quando o valor da variavel precisa ser manipulado dentro do codigo
let area;

if (forma === "quadrado"){
    area = altura * comprimento;
}else{
    area = (altura * comprimento) /2 ;
}

console.log(area)
