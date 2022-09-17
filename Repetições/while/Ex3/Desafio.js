var CTxt = document.querySelector("#P")
let MenorValor
let MaiorValor
let ValorTotal
let Elementos = []
function Adicionar() {
    let Valor = Number(CTxt.value)
    if (Valor < 1  || Valor > 100 || Elementos.indexOf(Valor) > -1 || Valor/Valor != 1 /*Caso o usuário não coloque um número.*/) { //Nesse caso não é necessário colocar esse filtro "CTxt.value == 0", porque undefinid é igual a 0, e já temos um filtro que não permite 0.
        window.alert("Digite outro número")
    } else {
        Elementos.push(Valor)
        ValorTotal += Valor
        window.alert("Adicionado")
        window.alert(Elementos.indexOf(Valor))
        if (Valor < MenorValor) {
            MenorValor = Valor
        }
        if (Valor > MaiorValor) {
            MaiorValor = Valor
        }
    }
}
function Verificar() {
    window.alert(`O valor do setor é ${Elementos}`)  
}

function Limpar() {
    Elementos = []
    MenorValor = 0
    MaiorValor = 0
    ValorTotal = 0
    window.alert(`O setor foi limpo ${Elementos}`)
}

/*
    Faltam as opções
    Limpar as opções
    Exibição final
*/