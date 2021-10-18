function cliente(nome, cpf, email, saldo)
{
    this.nome=nome
    this.cpf=cpf
    this.email=email
    this.saldo=saldo
        this.depositar=function(valor){
            this.saldo += valor 
        }
}

function clientePoupanca(nome,cpf,email,saldo,saldoPoup){
    cliente.call(this,nome,cpf,email,saldo,saldoPoup)
    this.saldoPoup = saldoPoup
}

const henrique = new clientePoupanca("Henrique", "309.037.468-40", "henri_cruz@hotmail.com", 100, 200)
console.log(henrique)

clientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor
}

henrique.depositarPoup(50)
console.table(henrique.saldoPoup)
