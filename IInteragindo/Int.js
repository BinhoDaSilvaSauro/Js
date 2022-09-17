function Somar() {
    const tn1 = window.document.getElementById("txtn1")
    const tn2 = window.document.getElementById("txtn2")
    const res = window.document.getElementById("res")
    const n1 = Number(tn1.value)
    const n2 = Number(tn1.value)
    const s = n1 + n2
    res.innerHTML = `O resultado da soma entre ${n1} e ${n2} é <strong> ${s} </strong>`
}