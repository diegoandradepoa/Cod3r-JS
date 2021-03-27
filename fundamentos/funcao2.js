// armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// armazenando um funcao arrow em uma variavel
const soma  = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito
const substracao = (a, b) => a - b // funcao com uma sentença e dois parametros
console.log(substracao(2, 3))


const imprimir2 = a => console.log(a) // funcao com 1 parametro não precisa de parenteses

