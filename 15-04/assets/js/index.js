// pegar cada elemento que vamos usar
// como podemos identificar estes elementos?

// entre no documento HTML, e oegue o elemento que tem o id
const titulo = document.getElementById("titulo")
const botao = document.getElementById("btn")
const baby = document.getElementById("baby")

function trocaCor() {
    titulo.style.color = 'Black '
}

function trocaMensagem (){
    if(a){
        baby.textContent = "./assets/images/baby-disintegrating.PNG"
        titulo.textContent = "Baby disintegrating"
    } else {}
}

// adiciona um evento ao botao
// um ebento é uma ação nossa
// addEventListener precisa de dois argumentos:
// o primeiro é a ação (o que dispara a função)
//o segundo é qual a função será disparada
botao.addEventListener('click', trocaMensagem)
