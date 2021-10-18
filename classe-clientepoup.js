//definição de classe = cliente
class Cliente {
    //definição das propriedade da classe
    constructor (nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
        }
        //definição de comportamentos
        depositar(valor){
        this.saldo += valor
        }
        exibirSaldo(){
            console.log(this.saldo)
        }
    }

    class ClientePoupanca extends Cliente{
        constructor (nome, email, cpf, saldo, saldoPoupanca){
            super(nome, email, cpf, saldo)
            this.saldoPoupanca = saldoPoupanca
      }
       depositarPoupanca(valor){
            this.saldoPoupanca += valor
       }
    }
    const henrique = new ClientePoupanca("Henrique","henrique@email.com","123.456.789", 100, 200)

    console.log(henrique)

    henrique.depositar(50)
    henrique.depositarPoupanca(50)

    console.log(henrique)
