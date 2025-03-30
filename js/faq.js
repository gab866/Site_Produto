// assets/js/faq.js

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todas as perguntas do FAQ
    const questions = document.querySelectorAll('.faq-question');
    
    // Adiciona o evento de clique a cada pergunta
    questions.forEach(question => {
        question.addEventListener('click', toggleFAQ);
    });
});

function toggleFAQ() {
    const answer = this.nextElementSibling;
    const isOpen = this.classList.contains('active');
    
    // Fecha todas as respostas primeiro
    closeAllFAQs();
    
    // Abre apenas a resposta clicada se não estava aberta
    if (!isOpen) {
        this.classList.add('active');
        answer.classList.add('open');
    }
}

function closeAllFAQs() {
    document.querySelectorAll('.faq-answer').forEach(ans => {
        ans.classList.remove('open');
    });
    document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
    });
}