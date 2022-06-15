const tabuada = () => {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor digite um número')
    } else {
        let n = Number(num.value)
        tab.innerHTML = '' // limpar a área de tabuada

        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option') // cria o elemento 'option'
            item.text = `${n} x ${i} = ${n * i}` // texto que vai dentro de cada 'option'
            item.value = `tab${i}` // sem sentido para o javaScript, mas é bom usar pra outras linguagens  
            tab.appendChild(item) // fazer aparecer o elemento na tela. tab recebe os filhos (item)
        }
    }
}

