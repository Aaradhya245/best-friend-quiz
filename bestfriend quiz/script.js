const quizQuestions = [
    {
        question: "What is your best friend's favorite color?",
        answers: ["Red", "Blue", "Green", "Yellow"],
        correct: "Blue"
    },
    {
        question: "What is your best friend's favorite food?",
        answers: ["Pizza", "Sushi", "Burgers", "Pasta"],
        correct: "Pizza"
    },
    {
        question: "What is your best friend's favorite hobby?",
        answers: ["Reading", "Gaming", "Hiking", "Cooking"],
        correct: "Gaming"
    }
];

function loadQuiz() {
    const quizDiv = document.getElementById('quiz');
    quizQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = question.question;
        questionDiv.appendChild(questionTitle);
        
        question.answers.forEach(answer => {
            const answerLabel = document.createElement('label');
            const answerInput = document.createElement('input');
            answerInput.type = 'radio';
            answerInput.name = `question${index}`;
            answerInput.value = answer;
            
            answerLabel.appendChild(answerInput);
            answerLabel.appendChild(document.createTextNode(answer));
            questionDiv.appendChild(answerLabel);
            questionDiv.appendChild(document.createElement('br'));
        });
        
        quizDiv.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;
    quizQuestions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === question.correct) {
            score++;
        }
    });
    
    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = `You scored ${score} out of ${quizQuestions.length}`;
}

document.addEventListener('DOMContentLoaded', loadQuiz);
