let currentQuestionIndex = 0;


const questions = document.querySelectorAll(".bloco")

function activateQuestion() {
    questions[currentQuestionIndex].classList.add("active")
}

function answer(isCorrect) {
    // se a resposta estiver correta
    if(isCorrect) {
        /* */
        questions[currentQuestionIndex].classList.remove("active")

        currentQuestionIndex = currentQuestionIndex + 1;

        activateQuestion();
    } else {
        return alert("Errou")
    }
}

// seleciona todos os botões 
const buttons = document.querySelectorAll(".quiz-option")
/* */


for (let i = 0; i < buttons.length; i++) {


    buttons[i].addEventListener("click", () => {

        const isCorrect = buttons[i].classList.contains("correct");

        answer(isCorrect);
    });
}