var agora = new Date() // hora do sistema
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 6) {
    console.log('Dormindo Madrugada')
}else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else if (hora < 24) {
    console.log('Boa noite!')
}


