const questions = document.querySelectorAll('.question');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');

let currentQuestion = 0;

function showQuestion(index) {
    questions.forEach((q, i) => {
        q.style.display = i === index ? 'block' : 'none';
    });

    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.style.display = index === questions.length - 1 ? 'none' : 'inline-block';
    submitBtn.style.display = index === questions.length - 1 ? 'inline-block' : 'none';
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

function submitSurvey() {
    alert('Survey submitted! 🎉');
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(currentQuestion);
});
