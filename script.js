const $startGameButton = document.querySelector('.start-quiz');
const $wordQuiz = document.querySelector('.quiz');
const $questionsContainer = document.querySelector('.questions-container');
const $answersContainer = document.querySelector('.answers-container');
const $questionText = document.querySelector('.question');
const $nextQuestionButton = document.querySelector('.next-question');

$startGameButton.addEventListener('click', startGame);
$nextQuestionButton.addEventListener('click', displayNextQuestion);

let currentQuestionIndex = 0;
let totalCorrect = 0;

function startGame() {
    $wordQuiz.classList.add('hide')
    $startGameButton.classList.add('hide')
    $questionsContainer.classList.remove('hide')
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions.length === currentQuestionIndex) {
        return finishGame()
    }

    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement('button')
        newAnswer.classList.add('button', 'answer')
        newAnswer.textContent = answer.text

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    while($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }

    $nextQuestionButton.classList.add('hide');
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        totalCorrect++
    }

    document.querySelectorAll('.answer').forEach(button => {
        button.disabled = true
    })

    $nextQuestionButton.classList.remove('hide')
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions.length;
    const performance = Math.floor(totalCorrect * 100 / totalQuestion);

    let message = '';

    switch (true) {
        case (performance >= 90):
            message = 'Parabéns, você é o fã número 1 : )'
            break
        case (performance >= 70):
            message = 'Muito bom, você realmente é um fã : )'
            break
        case (performance >= 50):
            message = 'Bom, mas você ainda não é um fã : /'
            break
        default:
            message = 'Você realmente assistiu todos os episódios? : ('
    }

    $questionsContainer.innerHTML = 
    `
        <p class='final-message'>
            Você acertou ${totalCorrect} de ${totalQuestion} perguntas!
            <span>Resultado: ${message}</span>
        </p>
        <button onclick=window.location.reload() class='button'>
            Recomeçar o Quiz!
        </button>
    `
}





const questions = [
    {
        question: '01) No episódio 1, Erick, Anna e Raul saem do abrigo para procurar suprimentos. Durante a busca, Anna machuca as costas por ter caído da cobertura de qual destes estabelecimentos?',
        answers: [
            {text: 'Padaria', correct: false},
            {text: 'Lanchonete', correct: false},
            {text: 'Farmácia', correct: true},
            {text: 'Mercado', correct: false}
        ]
    },
    {
        question: '02) No episódio 2, Erick, Anna e Raul saem do abrigo para procurar suprimentos. Durante a busca, Anna machuca as costas por ter caído da cobertura de qual destes estabelecimentos?',
        answers: [
            {text: 'Padaria', correct: false},
            {text: 'Lanchonete', correct: false},
            {text: 'Farmácia', correct: true},
            {text: 'Mercado', correct: false}
        ]
    },
    {
        question: '03) No episódio 3, Erick, Anna e Raul saem do abrigo para procurar suprimentos. Durante a busca, Anna machuca as costas por ter caído da cobertura de qual destes estabelecimentos?',
        answers: [
            {text: 'Padaria', correct: false},
            {text: 'Lanchonete', correct: false},
            {text: 'Farmácia', correct: true},
            {text: 'Mercado', correct: false}
        ]
    },
    {
        question: '04) No episódio 3, Erick, Anna e Raul saem do abrigo para procurar suprimentos. Durante a busca, Anna machuca as costas por ter caído da cobertura de qual destes estabelecimentos?',
        answers: [
            {text: 'Padaria', correct: false},
            {text: 'Lanchonete', correct: false},
            {text: 'Farmácia', correct: true},
            {text: 'Mercado', correct: false}
        ]
    },
    {
        question: '05) No episódio 3, Erick, Anna e Raul saem do abrigo para procurar suprimentos. Durante a busca, Anna machuca as costas por ter caído da cobertura de qual destes estabelecimentos?',
        answers: [
            {text: 'Padaria', correct: false},
            {text: 'Lanchonete', correct: false},
            {text: 'Farmácia', correct: true},
            {text: 'Mercado', correct: false}
        ]
    },
    {
        question: '06) No episódio 3, Erick, Anna e Raul saem do abrigo para procurar suprimentos. Durante a busca, Anna machuca as costas por ter caído da cobertura de qual destes estabelecimentos?',
        answers: [
            {text: 'Padaria', correct: false},
            {text: 'Lanchonete', correct: false},
            {text: 'Farmácia', correct: true},
            {text: 'Mercado', correct: false}
        ]
    },
    {
        question: '07) No episódio 3, Erick, Anna e Raul saem do abrigo para procurar suprimentos. Durante a busca, Anna machuca as costas por ter caído da cobertura de qual destes estabelecimentos?',
        answers: [
            {text: 'Padaria', correct: false},
            {text: 'Lanchonete', correct: false},
            {text: 'Farmácia', correct: true},
            {text: 'Mercado', correct: false}
        ]
    },
    {
        question: '08) No episódio 3, Erick, Anna e Raul saem do abrigo para procurar suprimentos. Durante a busca, Anna machuca as costas por ter caído da cobertura de qual destes estabelecimentos?',
        answers: [
            {text: 'Padaria', correct: false},
            {text: 'Lanchonete', correct: false},
            {text: 'Farmácia', correct: true},
            {text: 'Mercado', correct: false}
        ]
    },
    {
        question: '09) No episódio 3, Erick, Anna e Raul saem do abrigo para procurar suprimentos. Durante a busca, Anna machuca as costas por ter caído da cobertura de qual destes estabelecimentos?',
        answers: [
            {text: 'Padaria', correct: false},
            {text: 'Lanchonete', correct: false},
            {text: 'Farmácia', correct: true},
            {text: 'Mercado', correct: false}
        ]
    },
    {
        question: '10) No episódio 3, Erick, Anna e Raul saem do abrigo para procurar suprimentos. Durante a busca, Anna machuca as costas por ter caído da cobertura de qual destes estabelecimentos?',
        answers: [
            {text: 'Padaria', correct: false},
            {text: 'Lanchonete', correct: false},
            {text: 'Farmácia', correct: true},
            {text: 'Mercado', correct: false}
        ]
    },
]