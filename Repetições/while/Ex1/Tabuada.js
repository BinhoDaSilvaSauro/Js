let Min = document.querySelector('#min')
let Número = document.querySelector('#numero')
let Max = document.querySelector('#max')
if (Min.value.length || Número.value.length || Max.value.length) {
    window.alert('Preencha todos os campos')
} else {
    function Vai() {
    
        let min = Number(Min.value)
        let max = Number(Max.value)
        let n = Number(Número.value)
        for (min; min <= max; min++) {
        item.text = `${n} * ${min} = ${n * min}`
        toolbar.appendChild(item)
        }
    }
}