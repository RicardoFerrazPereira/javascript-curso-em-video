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

const verificar = () => {
    var data = new Date()
    var ano = data.getFullYear()
    var txtcaixa = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (txtcaixa.value.lenght == 0 || Number(txt.value) > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente!')
    } else {
        window.alert('ok')
    }
}