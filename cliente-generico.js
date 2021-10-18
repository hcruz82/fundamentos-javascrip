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
const henrique = new cliente("Henrique", "309.037.468-40", "henri_cruz@hotmail.com", 100)
console.log(henrique)