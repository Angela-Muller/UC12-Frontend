const div = document.querySelector("div")
const btn = document.querySelector("button")
const btnRem = document.getElementById("btn-rem")

let contador = 0;
let numeroItens =0;

btn.addEventListener('click', () => {
    if(numeroItens == 0) {
        contador = numeroItens;
    }
    const box = document.createElement("div");
    box.classList.add("container");
    contador += 1;
    box.textContent = contador;
    div.appendChild(box); 

    box.addEventListener('click', () => {
        box.remove();
    })
    box.appendChild(div);
});

// elemento.chilldren é um array que contém todos os filhos de um elemento
// revome() remove um elemento

btnRem.addEventListener("click", () => {
    if(div.children.length > 0) {
        div.children[0].remove()
    }
})

/*
    criem uma div e um botão que vai adicionar novos elementos dentro desta div quando eu clicar dentro deste elemento,removo ele
*/