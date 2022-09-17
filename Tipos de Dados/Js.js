const nome = window.prompt('Olá, qual é o seu nome?')
const salário = Number(window.prompt(`Seja bem vindo(a) ${nome}. Qual é o seu salário?`))
//document.write(`Seu salário é R$ ${salário.toFixed(2).replace('.' , ',')}<br>`)
document.write(`Seu salário é ${salário.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)