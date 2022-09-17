function Clicar() {
    const r = document.querySelector('#r')
    const nome = document.querySelector('#texto')
    switch (nome.value) {
        case 'Day':
            r.innerText = 'Bom dia!'
            break
        default:
            r.innerText = 'Boa Noite'
    }
}