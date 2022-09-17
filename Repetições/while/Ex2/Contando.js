function Verificar() {
    let Init = document.querySelector('#In')
    let Fim = document.querySelector('#Fim')
    let Passo = document.querySelector('#Passo')
    let R = document.querySelector('.r')

    if (Init.value.length == 0 || Fim.value.length == 0 || Passo.value.length == 0) {
        R.innerHTML = `Impossível contar, faltam dados!`
    } else {
        R.innerHTML = `Contando:<br>`
        let i = Number(Init.value)
        let f = Number(Fim.value)
        let p = Number(Passo.value)
        if (p <= 0) {
            R.innerHTML = `Passo precisa ser maior que 0!`            
            p = 1
        }
        if (i < f) {
            //Contagem Crescente
            for (i; i < f; i += p) {
                R.innerHTML += ` ${i} \u{1F449}`
            }
        } else {
            //Contagem Decrescente
            for (i; i > f; i -= p) {
                R.innerHTML += ` ${i} \u{1F449}`
                } 
        }
        R.innerHTML += `\u{1F3C1}`
    }
}
