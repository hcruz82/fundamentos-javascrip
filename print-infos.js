const cliente = {
    nome: "Henrique",
    idade: 38,
    cpf: "309.037.468.40",
    email: "henri_cruz@hotmail.com",
    fone: ["11-970400715","11-963374294"],
    dependentes: [{
        nome: "Gabryelle Cruz",
        parentesco: "Esposa",
        dataNasc: '04/03/1991'},
        {
        nome: "Maria Cruz",
        parentesco: "Mãe",
        dataNasc: '12/05/1952'
        }
    ],
    saldo:100,
    depositar:function(valor){
       this.saldo += valor
    }
}

// console.log(cliente.nome)

   // acessando dados com notação "." console.log (`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)
   // console.log (cliente.cpf.substring(0,3))

   // const chaves =["nome","idade","cpf","email"]
   // acessando dados com a notação chaves "apenas 1 info" console.log (cliente[chaves[0]])
   // acessando dados com a notação chaves "todos dados do objeto" chaves.forEach(info => console.log(cliente[info])) 

    //adicionando campos no objeto console.log(cliente);
    // cliente.fone = "11-970400715"
    // cliente.cidade = "Barueri"
    // console.log(cliente);

    // deletando infos de um objeto --- delete cliente.email

    // acessando lista de dados ""array" --- cliente.fone.forEach(fone => console.log(fone))

    // adicionando objetos dentro de objetos --- cliente.dependentes = {
        //nome: "Gabryelle",
        //parentesco: "Esposa",
        //dataNasc: "04/03/1991"
    //}
    //console.log(cliente)
    //alterando dados do objeto dento do objeto --- cliente.dependentes.nome = "Gabryelle Cruz"
    //console.log(cliente)

    // adicionando dados no objeto com "push" ---cliente.dependentes.push({
        //nome: "Maria Cruz",
        //parentesco: "Mãe",
        //dataNasc: "12/05/1952"
    //})
    //console.log(cliente)
    //consulta de dados com filtro ---const filhaMaisNova = cliente.dependentes.filter(dependentes => dependentes.dataNasc==="12/05/1952")
    //console.log(filhaMaisNova[0].nome)

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)
cliente.depositar(50)
console.log(cliente.saldo)