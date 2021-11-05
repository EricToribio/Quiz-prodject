const question = document.getElementById("question");
const resetAnswer = document.getElementById('form');
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', getAnswer)
const start = document.getElementById('start-btn');
start.addEventListener('click', startGame);
var answer = document.getElementById("answer")
const hide = document.getElementById('container')
hide.classList.add('hide')
var arrLength
var problemCount = 1
var correct = 0
var incorrect = 0
let currentQuestionsIndex = 0, shuffledQuestions

function score(correct, incorrect) {
    answer.classList.add('hide')
    submitBtn.classList.add('hide')
    var percent = Math.round((100 * correct) / arrLength)
    question.innerText = ("Your score is " + percent + " percent! You got " + incorrect + " questions wrong." );
    
}



var mathProblems = [
    "1 + 1", "2 + 2", "3 + 3", "4 + 4", "5 + 5", "6 + 6", "7 + 7", "8 + 8",
    "9 + 9", "10 + 10", "21 + 31", "68 + 14", '65 + 8', "32 + 56", "82 + 17", "75 + 62", "75 + 36", "14 + 16",
    "25 + 48", "37 + 28", "71 + 46", "46 + 38", "18 + 146", "47 + 65", "24 + 98", "49 + 256", "456 + 148", "315 + 486"


]
var problemAnswers = [
    '2', '4', '6', '8', '10', '12', '14', '16', '18', '20',
    '52', '82', '73', '88', '99', '132', '101', '30', '73',
    '65', '117', '84', '164', '112', '122', '305', '604', '801'
]


function startGame() {
    arrLength = mathProblems.length
    start.classList.add('hide')
    hide.classList.remove('hide')
    console.log('start');
    questionOut()
    return arrLength

}
function getAnswer() {
    var y = currentQuestionsIndex
    var answer = document.getElementById("answer").value
    console.log(answer);
    if (problemCount <= 27) {
        if (mathProblems[y] == question.innerText) {
            console.log(y);
            if (answer == problemAnswers[y]) {
                console.log(y);
                nextQuestion()
                correct++
                return correct
            } else if (answer != problemAnswers[y]) {
                incorrect++
                console.log('what');
                nextQuestion()
            }
        }
    } else {
        score(correct, incorrect)
    }
    
}



function questionOut() {

    question.innerText = mathProblems[currentQuestionsIndex]


}
function nextQuestion() {
    problemCount++
console.log(problemCount);
    mathProblems.splice(currentQuestionsIndex, 1)
    problemAnswers.splice(currentQuestionsIndex, 1)
    console.log(mathProblems, problemAnswers);
    console.log(correct)
    resetAnswer.reset()
    currentQuestionsIndex = Math.floor(Math.random() * mathProblems.length)
    questionOut(question[currentQuestionsIndex])
}



