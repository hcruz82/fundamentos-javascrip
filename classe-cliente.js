//definição de classe = cliente
class cliente {
    //definição das propriedade da classe
    constructor (nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
        }
        //definição de comportamentos
        depositar(saldo){
        this.saldo += valor
        }
        exibirSaldo(){
            console.log(this.saldo)
        }
}
//definindo a instancia da classe cliente
const henrique = new cliente("Henrique", "henri@cruz@hotmail.com", "309.037.468-40", 100 )

henrique.exibirSaldo()
console.log(henrique)