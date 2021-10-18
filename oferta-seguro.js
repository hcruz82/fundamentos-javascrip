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
    function oferecerSeguro(obj){
        const propsClientes = Object.keys(obj);
        if(propsClientes.includes("dependentes"))
        {
            console.log(`Oferta de seguro de vida para ${obj.nome}`);
        }
    }
    //console.log(Object.values(cliente))
    console.log(Object.entries(cliente))
    oferecerSeguro(cliente)