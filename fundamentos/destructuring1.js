// novo recurso do ES2015

//Objeto
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        longradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // extrair  o atributo nome e idade do objeto pessoa

console.log(nome, idade)

const { nome: n, idade: i } = pessoa // extraia  o atributo nome e idade e referencie com novas variaveis n e i.
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // Caso voce inclua algum dado inexistente será retornado undefined
console.log(sobrenome, bemHumorada)

const { endereco: { longradouro, numero, cep }} = pessoa // Maneira de extrair dentro de outro objeto
console.log(longradouro, numero, cep)

