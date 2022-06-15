let valores = [8, 1, 7, 4, 2, 9]

console.log(valores) // forma padrão

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for (let i = 0; i < valores.length; i++) { // "i < valores.length" - enquanto 'i' for menor que o tamanho do vetor (length)
    console.log(`Posição: ${i} e Valor: ${valores[i]}`) // forma personalizada
}
//Forma mais simples ('for in')

for (let i in valores) { // para cada posição ('i') no array (valores), vou mostrar o valores(i)
    console.log(`Posição: ${i} e Valor: ${valores[i]}`) 
    }

// buscar valores dentro do vetor

let pos = valores.indexOf(8) // valor '8'
console.log(`${pos}`) // está na posição '0'


