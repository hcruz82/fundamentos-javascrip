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
    let relatorio = " ";
    for (let info in cliente){
        if (typeof cliente[info] === "object" || typeof cliente[info] === "function")
        {
            continue 
        }else {
            relatorio +=  `
            ${info} ==> ${cliente[info]}
            `
        }
        
    }

    console.log(relatorio)