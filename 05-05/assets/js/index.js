const div = document.getElementById('container');
const btn = document.getElementById('btn');

// Criar novos elementos e fazé-los aparecer no html



btn.addEventListener('click', () => {
    
const novo = document.createElement("p");
novo.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate ratione suscipit asperiores repudiandae maiores ut ex inventore aut odio molestias quos assumenda enim at voluptatem sapiente eum, in consectetur labore?";

// Depois de criado o elemento, precisamos dizer aonde ele irá onde ser posicionado

div.appendChild(novo)

})

