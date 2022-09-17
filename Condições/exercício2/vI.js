function Clicar() {
    const data = new Date()
    const ano = data.getFullYear()
    const fAno = document.querySelector('#Idade')
    const R = window.document.querySelector('#d2')
    const I = ano - fAno.value
    const S = document.getElementsByName('genero')
    let g 
    if (fAno.value == 0 || fAno.value > ano) {
        window.alert('Verifique o ano!')
    } else {
        if (S[0].checked) { //Se o primero input radio estiver marcado 
            g = 'masculino'
            if (I >= 0 && I <= 10) {
                R.innerText = `Você é um bebê de ${I} anos`
            } else if (I <= 12) {
                R.innerText = `Você é uma criança de ${I} anos`        
            } else if (I <= 14) {
                R.innerText = `Você é um pré-adolescente de ${I} anos`        
            } else if (I <= 17) {
                R.innerText = `Você é um adolescente de ${I} anos`        
            }  else if (I <= 23) {
                R.innerText = `Você é um jovem de ${I} anos`        
            }  else if (I <= 59) {
                R.innerText = `Você é um adulto de ${I} anos`        
            }  else {
                R.innerText = `Você é um idoso de ${I} anos`       
            }
        } else {
            g = 'feminino'
            if (I <= 3 && I >= 10) {
                R.innerText = `Você é um bebê de ${I} anos, so sexo &{g}`
            } else if (I <= 11) {
                R.innerText = `Você é uma criança de ${I} anos`        
            } else if (I <= 13) {
                R.innerText = `Você é um pré-adolescente de ${I} anos`        
            } else if (I <= 17) {
                R.innerText = `Você é um adolescente de ${I} anos`        
            }  else if (I <= 23) {
                R.innerText = `Você é um jovem de ${I} anos`        
            }  else if (I <= 59) {
                R.innerText = `Você é um adulto de ${I} anos`        
            }  else {
                R.innerText = `Você é um idoso de ${I} anos`       
            }
        }
    }
}