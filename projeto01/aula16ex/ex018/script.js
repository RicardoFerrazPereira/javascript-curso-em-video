let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []  // Vetor usado para analisar os dados

const isNum = (n) => {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

const inLista = (n, lis) => {
    if (lis.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

const adicionar = () => {
    if(isNum(num.value) && !inLista(num.value, valores)) { // analisa pra ver se é um numero && so vai adicionar se o numero não estiver na lista
        valores.push(Number(num.value)) // 'push' adicionar um elemento no vetor
        let item = document.createElement('option') // criar uma variável (item) para receber o elemento [tag(option)] e adicionar no "select" - retorno visual
        item.text = `Valor ${num.value} adicionado.` // o 'item' vai ter o valor text, vai ser uma string com possibilidade de interpolação
        lista.appendChild(item) // adicionar item na lista
        res.innerHTML = '' // apagar o 'res' - quando eu adicionar outro número depois de clicar em 'finalizar', ele limpa o resultado.
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // limpar a tela - num recebe vazio 
    num.focus() // cursor voltar a piscar, sem ter que clicar

}

const finalizar = () => {
    // verificar se o vetor está vazio
    if (valores.length == 0) { // se o vetor estiver vazio, manda um alerta
        window.alert('Adicione valores antes de finalizar')
    }
    else {
        let tot = valores.length // total de elementos que o vetor tem
        // maior e menor número
        let maior = valores[0] // o maior e menor número até e o momento é o primeiro
        let menor = valores[0]
        let soma = 0
        let media = 0

        // FOR vai verificar um por um pra saber quem é maior/menor
        for(let pos in valores) { // para cada posição em valores, vou fazer um teste
            soma += valores[pos] // Somar o valor atual com o proximo
            if (valores[pos] > maior) { // vou verificar se o 'valores na posição[pos] for maior que o maior valor
                maior = valores[pos] // maior valor passa a ser valores[pos]
            }
            if (valores[pos] < menor) { // vou verificar se o 'valores na posição[pos] for menor que o menor valor
                menor = valores[pos] // menor valor passa a ser valores[pos]
            }

        }
        media = soma / tot
        
        res.innerHTML = '' // Zerar o valor ('res')
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.<p>` // É o que ele tem ('+=' - concatenado) + uma string
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores informados é ${media}.</p>`
    }
}
