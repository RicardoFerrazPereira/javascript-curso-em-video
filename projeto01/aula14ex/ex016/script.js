const contar = () => {
    var num1 = document.getElementById('inic')
    var num2 = document.getElementById('end')
    var incr = document.getElementById('pas')
    var resp = document.getElementById('res')

    if (num1.value.length == 0 || num2.value.length == 0 || incr.value.length == 0) {
        window.alert('Erro')
        resp.innerHTML = 'Impossível contar'
    } else {
        resp.innerHTML = 'Contando: <br>'
        let i = Number(num1.value)
        let f = Number(num2.value)
        let p = Number(incr.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                resp.innerHTML += `${c} \u{1F449}` // emoji U+1F449
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                resp.innerHTML += `${c} \u{1F449}` // emoji U+1F449
            }

        }
        resp.innerHTML += `\u{1F3C1}` // '+=' concatenação
    }
}