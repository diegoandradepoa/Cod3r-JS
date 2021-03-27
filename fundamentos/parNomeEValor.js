//par nome/valor
const saudacao = 'Opa' // Contexto Lexico 1

function exec() {
    const saudacao = 'Falaaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares de nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32, 
    peso: 90,
    endereço: {
        longradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
