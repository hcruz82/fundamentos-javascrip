const cliente = [
    {
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
        }],
    },
    {
    nome: "Maria Cruz",
    idade: 58,
    cpf: "309.037.468.40",
    email: "maria_cruz@hotmail.com",
    fone: ["11-970400715","11-963374294"],
    dependentes: [{
        nome: "Milena Cruz",
        parentesco: "Filha",
        dataNasc: '04/03/1991'},
        {
        nome: "Marco Cruz",
        parentesco: "Filho",
        dataNasc: '12/05/1952'
        }],
    }]
    const listaDependentes = [...cliente[0
    ].dependentes, ...cliente[1].dependentes]

    console.log(listaDependentes)