const pessoa = {
  nome: "henrique",
  email: "123@emial.com",
  imprimeNome: function(){
    console.log(`nome: ${this.nome}, email: ${this.nome}`)
  }
} 
pessoa.imprimeNome()