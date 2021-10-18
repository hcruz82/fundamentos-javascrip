const fichaGuerreiro = {
 nome: "Aragorn",
 classe: "guerreiro"
}

const equipoGuerreiro = {
 espada: "Andúril",
 capa: "capa élfica +2"
}

const forca = {
    energia: "100"
}
const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro, ...forca }
console.table(guerreiro)
