let CTxt = document.querySelector("#P")
let Tabela = document.querySelector("#Tabela")
let R = document.querySelector("#Resultado")
let MenorValor = 100
let MaiorValor = 0
let ValorTotal = 0
let Elementos = []
function Adicionar() {
    let Valor = Number(CTxt.value)
    if (Valor < 1  || Valor > 100 || Elementos.indexOf(Valor) > -1 || Valor/Valor != 1 /*Caso o usuário não coloque um número.*/) { //Nesse caso não é necessário colocar esse filtro "CTxt.value == 0", porque undefinid é igual a 0, e já temos um filtro que não permite 0.
        window.alert("Digite outro número")
    } else {
        Elementos.push(Valor)
        ValorTotal += Valor
        let item = document.createElement("option")
        item.text = `Valor ${Valor} adicionado`
        Tabela.appendChild(item)
        if (Valor < MenorValor) {
            MenorValor = Valor
        }
        if (Valor > MaiorValor) {
            MaiorValor = Valor
        }
        R.innerHTML = ``
    }
}
function Verificar() {
    if (Elementos.length == 0) {
        window.alert("Adicione Valores")
    } else {
        if (Elementos.length == 1) {
            R.innerHTML = `<p>Ao todo temos <strong>${Elementos.length}</strong> valor cadastrado</p>`
        } else {
            R.innerHTML = `<p>Ao todo temos <strong>${Elementos.length}</strong> valores cadastrados</p>`
        }
        R.innerHTML += `<p>O maior valor foi <strong>${MaiorValor}</strong></p>`
        R.innerHTML += `<p>O menor valor foi <strong>${MenorValor}</strong></p>`
        R.innerHTML += `<p>A média de total todos os elementos foi <strong>${ValorTotal/Elementos.length}</strong></p>`
        R.innerHTML += `<p>A soma total dos elementos foi <strong>${ValorTotal}</strong></p>`
    }
}

function Limpar() {
    Elementos = []
    MenorValor = 0
    MaiorValor = 0
    ValorTotal = 0
    Tabela.innerHTML = "<option>Os números aparecem aqui</option>"
    window.alert(`O setor foi limpo ${Elementos}`)
    R.innerHTML = ``
}