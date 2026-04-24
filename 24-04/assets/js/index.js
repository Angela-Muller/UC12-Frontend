// pego o elemento H3 por TAG
const img1 = document.getElementById('img1')
// pego o elemento button por TAG
const btn1 = document.getElementById('btn1')

const img2 = document.getElementById('img2')
const btn2 = document.getElementById('btn2')

const img3 = document.getElementById('img3')
const btn3 = document.getElementById('btn3')

//adiciono um evento ao botão
btn1.addEventListener('click', () => {
    //quando clicarmos no botão a função
    // vai adicionar uma classe ao titulo
    img1.classList.toggle('esconder')

    if(btn1.textContent == "Mostrar") {
        btn1.textContent = "Esconder"
    } else {
        btn1.textContent = "Mostrar"
    }
})

btn2.addEventListener('click', () => {
    //quando clicarmos no botão a função
    // vai adicionar uma classe ao titulo
    img2.classList.toggle('esconder')

    if(btn2.textContent == "Mostrar") {
        btn2.textContent = "Esconder"
    } else {
        btn2.textContent = "Mostrar"
    }
})

btn3.addEventListener('click', () => {
    //quando clicarmos no botão a função
    // vai adicionar uma classe ao titulo
    img3.classList.toggle('esconder')

    if(btn3.textContent == "Mostrar") {
        btn3.textContent = "Esconder"
    } else {
        btn3.textContent = "Mostrar"
    }
})