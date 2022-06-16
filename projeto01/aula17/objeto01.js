let amigo = {
    nome: 'Jose',
    sexo: 'M',
    peso: 85.4,
    engordar(p = 0) {
        console.log('Engordou')
        this.peso += p

    }
}

console.log(typeof amigo)

console.log(amigo.nome)
console.log(amigo.sexo)
console.log(amigo.peso)

amigo.engordar(5)
console.log(amigo.peso)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
