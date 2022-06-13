
// Arrow Function
const verificar = () => {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '' // variável genero string vazio
        // inserir imagem pelo javaScript
        var img = document.createElement('img') // criei um elemento, uma tag 'img'
        img.setAttribute('id', 'foto') // criei um atributo 'id' com nome 'foto' para o elemento 'img
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'homembebe.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 65) {
                // adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'homemidoso.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 65) {
                // adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                // idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center' // centralizar o texto pelo javaScript
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) // mostrar a imagem
    }
}
/*
// Funcão regular
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente!')
    } else {
        window.alert('ok')
    }
}
*/

// Verificar se está funcionando
/*
const verificar = () => {
    window.alert('Funcionou')
}
*/
/*
function verificar() {
    window.alert('Funcionou')
}
*/