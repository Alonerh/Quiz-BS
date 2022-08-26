/* Initial Data */
let currentQuestion= 0;
let correctAnswers = 0;
// Events
document.querySelector('#start').addEventListener('click', showQuestion) // Dá inicio ao apertar no botão;
// document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.reset').forEach((item)=>{
    item.addEventListener('click', reset);
})
// Functions
function showQuestion() {
    if (questions[currentQuestion]) { // Tem questões ainda
        let q = questions[currentQuestion];
        document.querySelector('.modal-title.title-question').innerHTML = q.question;
        document.querySelector('.options').innerHTML = ''; // Limpa as opções
        let optionsHtml = '';
        for (let i in q.options) {     // ParsInt transforma em número inteiro fazendo o número da questão aparecer a partir do 1   
            optionsHtml += `<button data-op=${i} class="option btn btn-primary p-1 mb-2 rounded">${(q.options[i])}</button>` // Concatena com o que já tem    
        } 
        document.querySelector('.options').innerHTML = optionsHtml; // Essa é mais eficiente
        document.querySelectorAll('.options .option').forEach(item=>{ // Evento de clique nas perguntas
            item.addEventListener('click', optionClickEvent)
        })
    } else { // Se acabar as questões
        finishQuiz();
        document.querySelector('#container-2 p').innerHTML = `Você acertou: ${correctAnswers} de ${questions.length}!`;
        showResult();
    }
}
function optionClickEvent(e) {;
    let clickedOption = parseInt(e.target.getAttribute('data-op')); // De string vira number
    if (questions[currentQuestion].answer === clickedOption) {
        console.log("Acertou")
        correctAnswers++;
    } else {
        console.log("Errou")
    }
    currentQuestion++
    showQuestion()
}
function finishQuiz() {
    // Fecha as perguntas
    $('#foo').modal('hide'); 
    // Abre os resultados;
    showResult();
}
function reset() {
    window.location.reload();
}
function showResult() {
    document.querySelector('#container-1').classList.replace('d-flex', 'd-none');
    document.querySelector('#container-2').classList.replace('d-none', 'd-flex');
}