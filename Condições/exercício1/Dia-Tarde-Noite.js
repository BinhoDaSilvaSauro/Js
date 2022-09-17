function Carregar() {
const data = new Date()
const hora = data.getHours()
//const hora = 11
const msg = window.document.getElementById('msg')
const corpo = window.document.body
msg.innerHTML = `Agora são ${hora} horas. `
if (hora > 0 && hora < 6) {
    msg.innerHTML += `Boa Madrugada!`
    corpo.style.background = 'rgb(92, 97, 104)'
} else if (hora >= 6 && hora < 12) {
    msg.innerHTML += `Bom Dia!`
} else if (hora >= 12 && hora < 18) {
    msg.innerHTML += `Boa Tarde!`
    corpo.style.background = 'rgb(241, 127, 33)'
} else {
    msg.innerHTML += `Boa Noite!`
    corpo.style.background = 'rgb(29, 27, 27)'
}
}
