const menuMobile = document.querySelector(".menu-mobile")

const nav = document.querySelector("header nav")

menuMobile.addEventListener("click", () =>{
    // adiciona/remove a classe ativie

    nav.classList.toggle("active")
})