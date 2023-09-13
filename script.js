const $startGameButton = document.querySelector('.start-quiz');
const $wordQuiz = document.querySelector('.quiz');
const $questionsContainer = document.querySelector('.questions-container');
const $answersContainer = document.querySelector('.answers-container');
const $questionText = document.querySelector('.question');
const $nextQuestionButton = document.querySelector('.next-question');
const $imgOpm = document.querySelector('.img-opm');

$startGameButton.addEventListener('click', startGame);
$nextQuestionButton.addEventListener('click', displayNextQuestion);

let currentQuestionIndex = 0;
let totalCorrect = 0;

function startGame() {
    $imgOpm.classList.add('hide')
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
            message = 'Parabéns, você é o fã número 1!'
            break
        case (performance >= 70):
            message = 'Muito bom, você realmente é um fã!'
            break
        case (performance >= 50):
            message = 'Bom, mas você ainda não é um fã!'
            break
        default:
            message = 'Você realmente assistiu todos os episódios?'
    }

    $questionsContainer.innerHTML = 
    `
        <p class='final-message'>
            Você acertou ${totalCorrect} de ${totalQuestion} perguntas.
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
        question: '02) No episódio 1, Anna pergunta se o alimento que Erick achou acabou e Lia responde que tudo que é novidade acaba rápido. Qual destes alimentos elas estão se referindo?',
        answers: [
            {text: 'Biscoito água e sal', correct: false},
            {text: 'Barra de cereal', correct: true},
            {text: 'Bolacha recheada', correct: false},
            {text: 'Alfajor', correct: false}
        ]
    },
    {
        question: '03) No episódio 1, a moto de Lucas não pega e junto aparece uma orda de zumbis, o fazendo sair da estrada e correr para a mata. Quando volta e vê que sua moto sumiu, o que ele diz?',
        answers: [
            {text: 'Mano', correct: true},
            {text: 'Cara', correct: false},
            {text: 'Irmão', correct: false},
            {text: 'Véi', correct: false}
        ]
    },
    {
        question: '04) No episódio 2, Henrique passa por dificuldades com um zumbi. Por quê?',
        answers: [
            {text: 'Ele não conseguiu achar nenhum tipo de arma para poder matá-lo', correct: false},
            {text: 'A pessoa quando era viva disse para ele não matá-lo caso virasse zumbi', correct: false},
            {text: 'Ele tem medo de zumbi', correct: false},
            {text: 'É o irmão dele e por isso ele não tem coragem de matá-lo', correct: true}
        ]
    },
    {
        question: '05) No episódio 2, quem conseguiu fazer a kombi funcionar?',
        answers: [
            {text: 'Anna', correct: false},
            {text: 'Luísa', correct: false},
            {text: 'Erick', correct: true},
            {text: 'Laura', correct: false}
        ]
    },
    {
        question: '06) No episódio 2, como Lucas descobriu que seus amigos embarcaram em uma viagem?',
        answers: [
            {text: 'Henrique contou para ele sobre a gravação da Lia', correct: false},
            {text: 'Ele viu seus amigos saindo do abrigo com mochilas nas costas', correct: false},
            {text: 'Ele foi ao depósito e ouviu a décima segunda faixa do walkman', correct: false},
            {text: 'Ele aproveita que Henrique largou o walkman e ouve sua décima segunda faixa', correct: true}
        ]
    },
    {
        question: '07) No episódio 3, o que faz eles deixarem a kombi?',
        answers: [
            {text: 'A ponte está caída, portanto é preciso seguir a pé', correct: false},
            {text: 'O motor estragou', correct: false},
            {text: 'Acabou a gasolina', correct: true},
            {text: 'Furo no pneu', correct: false}
        ]
    },
    {
        question: '08) No episódio 3, Lucas entra em apuros com um zumbi que inicialmente se fingiu de morto. Henrique está usando o walkman e não percebe o ocorrido. O que Lucas faz?',
        answers: [
            {text: 'Mata o zumbi com um tijolo', correct: true},
            {text: 'Não mata o zumbi, pois prefere atingir o amigo com um tijolo', correct: false},
            {text: 'Grita muito alto', correct: false},
            {text: 'Mata o zumbi com uma faca', correct: false}
        ]
    },
    {
        question: '09) No episódio 3, os amigos são atacados e Raul é atingido por:',
        answers: [
            {text: 'Uma bala', correct: false},
            {text: 'Uma flecha', correct: false},
            {text: 'Uma flecha e uma bala', correct: false},
            {text: 'Duas flechas', correct: true}
        ]
    },
    {
        question: '10) Com base no episódio 4, complete a fala: "Daí brota um cara no dia seguinte também usando preto e igualmente ---, numa terra praticamente ---".',
        answers: [
            {text: 'agressivo, deserta', correct: false},
            {text: 'hostil, deserta', correct: true},
            {text: 'hostil, desabitada', correct: false},
            {text: 'agressivo, desabitada', correct: false}
        ]
    },
    {
        question: '11) No episódio 4, quem consegue antibiótico para o Raul?',
        answers: [
            {text: 'Lia encontra em um dos armários da casa', correct: false},
            {text: 'Lucas oferece o remédio que ele encontrou em uma de suas expedições', correct: false},
            {text: 'Henrique tinha um frasco consigo', correct: true},
            {text: 'Eles não conseguem nenhum antibiótico', correct: false}
        ]
    },
    {
        question: '12) No episódio 4, quem retira a flecha do corpo de Raul?',
        answers: [
            {text: 'Lucas', correct: true},
            {text: 'Anna', correct: false},
            {text: 'Ian', correct: false},
            {text: 'Lia', correct: false}
        ]
    },
    {
        question: '13) Quando a série estreou no YouTube?',
        answers: [
            {text: '15 de ago. de 2022', correct: false},
            {text: '16 de ago. de 2022', correct: false},
            {text: '15 de nov. de 2022', correct: false},
            {text: '16 de nov. de 2022', correct: true}
        ]
    },
    {
        question: '14) A série se passa em qual dos estados brasileiros abaixo?',
        answers: [
            {text: 'Rio de Janeiro', correct: false},
            {text: 'Goiás', correct: true},
            {text: 'São Paulo', correct: false},
            {text: 'Santa Catarina', correct: false}
        ]
    },
]