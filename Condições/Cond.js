const vR = window.document.querySelector('#P')
const v = window.document.querySelector('#P2')
const R = window.document.querySelector('#R')
function Clicar() {
    if (Number(vR.value <= 0 || v.value <= 0)) { 
        R.innerHTML = `A velocidade máxima da rodovia ou sua velocidade não podem ser igual a 0 ou algum número negativo.`
    } else if (Number(v.value <= vR.value))  {
            R.innerHTML = `<p>Sua velocidade é de <strong>${v.value}Km/h</strong>.</p>`
        } else if (Number(v.value >= vR.value && v.value <=1.2*vR.value)) {
                R.innerHTML = `<p>Tome cuidado! Você está dentro da tolerância de 20% de velociade máxima permitida na rodovia. Você será multado ao passar dos <strong>${Number(1.2*vR.value)}Km/h</strong>.</p>`
            } else {
                R.innerHTML = `<p>Sua velocidade é de <strong>${v.value}Km/h</strong>. Multado, valor: <b>R$ 200,00<b> e 5 pontos na carteira.</p>`
            }
        }
    
