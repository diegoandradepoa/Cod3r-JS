function compras(trabalho1, trabalho2) {
    const comparSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const compartTv32 = !!(trabalho1 ^ trabalho2) // bit a bit com "OU" exclusivo
    const compartTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comparSorvete // operador unario

    return { comparSorvete, comprarTv50, compartTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false)) 
console.log(compras(false, true))
console.log(compras(false, false))
