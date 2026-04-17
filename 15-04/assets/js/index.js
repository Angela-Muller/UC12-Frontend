// pegar cada elemento que vamos usar
// como podemos identificar estes elementos?

// entre no documento HTML, e oegue o elemento que tem o id
const titulo = document.getElementById("titulo1")
const text1 = document.getElementById("text1")
const botao = document.getElementById("btn1")
const baby = document.getElementById("baby")
const baby1 = document.getElementById("baby1")

let tituloOrigin = titulo.textContent
let text1Origin = text1.textContent

let tituloAlter = "Baby disintegrating"
let text1Alter = "O Baby disintegrating é uma carta rara. ela faz seu oponente escolher uma carta da mão dele para banir ela de jogo, assim não pode utiliza."
let mudou = false


function trocaCard1 (){
    if(mudou){
        titulo.textContent = tituloOrigin
        text1.textContent = text1Origin
    } else {
        titulo.textContent = tituloAlter
        text1.textContent = text1Alter
    }
    mudou = !mudou
}

function trocaImg1(){
    // classList serve para adicionar uma nova classe
    // classList.toggle(class) ativa OU desativa uma classe
    // ou seja, se ja tiver a classe, desativa
    // e se não tiver, ativa
    baby.classList.toggle('escondida') 
    baby1.classList.toggle('escondida')
}


// -------------------------------------------------


const titulo2 = document.getElementById("titulo2")
const text2 = document.getElementById("text2")
const botao2 = document.getElementById("btn2")
const gato = document.getElementById("gato")
const gatoBiz = document.getElementById("gatoBiz")

let titulo2Origin = titulo2.textContent
let text2Origin = text2.textContent

let titulo2Alter = "Gato Zorp+"
let text2Alter = "O Gato Zorp+ é uma carta Mítica e Nobre. ela fala uma lingua não compreesivel e requintada para outros alem dos Zops, causando 1000 de dano não bloqueavel além de destruir uma carta de raridade mais baixa que ela de sua escolha"

function trocaCard2 (){
    if(mudou){
        titulo2.textContent = titulo2Origin
        text2.textContent = text2Origin
    } else {
        titulo2.textContent = titulo2Alter
        text2.textContent = text2Alter
    }
    mudou = !mudou
}

function trocaImg2(){

    gato.classList.toggle('escondida') 
    gatoBiz.classList.toggle('escondida')
}

// ------------------------------------------------

const titulo3 = document.getElementById("titulo3")
const text3 = document.getElementById("text3")
const botao3 = document.getElementById("btn3")
const gali = document.getElementById("galinha")
const eis = document.getElementById("eis")

let titulo3Origin = titulo3.textContent
let text3Origin = text3.textContent

let titulo3Alter = "Rahhhhhhh"
let text3Alter = "O Rahhhhhhh é uma carta Épica. ela chma atenção de todas as cartas fazendo a focar ela até ela ser destruida."

function trocaCard3 (){
    if(mudou){
        titulo3.textContent = titulo3Origin
        text3.textContent = text3Origin
    } else {
        titulo3.textContent = titulo3Alter
        text3.textContent = text3Alter
    }
    mudou = !mudou
}

function trocaImg3(){

    gali.classList.toggle('escondida') 
    eis.classList.toggle('escondida')
}




// adiciona um evento ao botao
// um ebento é uma ação nossa
// addEventListener precisa de dois argumentos:
// o primeiro é a ação (o que dispara a função)
//o segundo é qual a função será disparada
botao.addEventListener('click', trocaImg1)
botao.addEventListener('click', trocaCard1)

botao2.addEventListener('click', trocaImg2)
botao2.addEventListener('click', trocaCard2)

botao3.addEventListener('click', trocaImg3)
botao3.addEventListener('click', trocaCard3)