function parimp(n) {
    if (n%2 == 0) {
        return 'par'
    }else {
        return 'impar'
    }
}

let res = parimp(5235)
console.log(res)

// ou assim

console.log(parimp(5235))