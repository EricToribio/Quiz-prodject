const question = document.getElementById("question");
const resetAnswer = document.getElementById('form');
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', getAnswer)
const addStart = document.getElementById('btn-add');
addStart.addEventListener('click', addGame)
var answer = document.getElementById("answer")
const hide = document.getElementById('container')
var header = document.getElementById('wrap1')
var btnGrid = document.getElementById('wrap2')
const pageReset = document.getElementById('reset')
pageReset.addEventListener('click', reload)
const subStart = document.getElementById('btn-sub')
subStart.addEventListener('click', subGame)
var arrLength
var problemCount = 1
var correct = 0
var incorrect = 0
let currentQuestionsIndex = 0, shuffledQuestions
var currentProblem
var currentAnswer

var addProblems = [
    "1 + 1", "2 + 2", "3 + 3", "4 + 4", "5 + 5", "6 + 6", "7 + 7", "8 + 8",
    "9 + 9", "10 + 10", "21 + 31", "68 + 14", '65 + 8', "32 + 56", "82 + 17", "75 + 62", "75 + 36", "14 + 16",
    "25 + 48", "37 + 28", "71 + 46", "46 + 38", "18 + 146", "47 + 65", "24 + 98", "49 + 256", "456 + 148", "315 + 486"
]

var addAnswers = [
    '2', '4', '6', '8', '10', '12', '14', '16', '18', '20',
    '52', '82', '73', '88', '99', '137', '111', '30', '73',
    '65', '117', '84', '164', '112', '122', '305', '604', '801'
]

var subProblems = [
    '1 - 1', '21 - 14', '76 - 42', '96 - 25', '78 - 9', '89 - 53', '45 - 36',
    '65 - 21', '756 - 685', '45 - 9', '36 - 17'
]

var subAnswers = [
    '0', '7', '34', '71', '69', '36', '9', '44', '71', '36', '19'
]

var multProblems  = [
    
]









function getAnswer() {
    var y = currentQuestionsIndex
    var answer = document.getElementById("answer").value
    console.log(answer);
    if (problemCount < arrLength ) {
        if (currentProblem[y] == question.innerText) {
    console.log(y);
            if (answer == currentAnswer[y]) {
                console.log(y);
                next()
                correct++
                return correct
            } else if (answer != currentAnswer[y]) {
                incorrect++
                console.log('what');
                next()
            }
        }
    } else {
        score(correct, incorrect)
    }
    
}

function score(correct, incorrect) {
    pageReset.classList.remove('hide')
    answer.classList.add('hide')
    submitBtn.classList.add('hide')
    var percent = Math.round((100 * correct) / arrLength)
    question.innerText = ("Your score is " + percent + " percent! You got " + incorrect + " questions wrong." );
    
}
function subGame() {
    currentAnswer = subAnswers
    currentProblem = subProblems
    header.classList.add('hide')
    btnGrid.classList.add('hide')
    arrLength = subProblems.length
    hide.classList.remove('hide')
    console.log('start');
    questionOut()
    return arrLength
}






function addGame() {
    currentProblem = addProblems
    currentAnswer = addAnswers
    header.classList.add('hide')
    btnGrid.classList.add('hide')
    arrLength = addProblems.length
    hide.classList.remove('hide')
    console.log('start');
    questionOut()
    return arrLength
    
}

function questionOut() {    
    question.innerText = currentProblem[currentQuestionsIndex]     
}

function next() {
    addStart.classList.add('hide')
    problemCount++
    console.log(problemCount);
    currentProblem.splice(currentQuestionsIndex, 1)
    currentAnswer.splice(currentQuestionsIndex, 1)
    resetAnswer.reset()
    currentQuestionsIndex = Math.floor(Math.random() * currentProblem.length)
    
    questionOut()
    console.log(currentProblem.length, currentQuestionsIndex);
}

function reload() {
    window.location.reload(true)
    
}


