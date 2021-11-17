const question = document.getElementById("question");
const resetAnswer = document.getElementById('form');
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', getAnswer)
var header = document.getElementById('wrap1')
var btnGrid = document.getElementById('wrap2')
const hide = document.getElementById('container')
const pageReset = document.getElementById('reset')


var problemCount = 0 
var operator
var correct = 0
var num1
var num2
var int1
var int2
var answer
function setOperator(element){
    header.classList.add('hide')
    btnGrid.classList.add('hide')
    if(element == add){
        operator = '+'
        int1 = 10
        int2 = 25
    } else if(element == sub){
        operator = '-'
        int1 = 30
        int2 = 10
    } else if(element == mult){
        operator = '*'
        int1 = 10
        int2 = 10
    } else if(element == div){
        operator = '/'
        int1 = 70
        int2 = 2
    }
    questionOut()
}


function questionOut() {
    
     num1 = Math.floor(Math.random() * int1) +1
    num2 = Math.floor(Math.random() * int2) + 1
    if( problemCount < 10){
        hide.classList.remove('hide')
        console.log(operator)
        question.innerText = num1 +" "+ operator + " " + num2
    } else {
        score()
    }

}


function getAnswer(){
    if(operator == '+'){
        answer = num1 + num2
    } else if(operator == '-'){
        answer = num1 - num2
    } else if(operator == '*'){
        answer = num1 * num2
    } else if(operator == '/'){
        answer = num1 / num2
    }
    parseInt(input =  document.getElementById('answer').value)
    document.getElementById('answer').focus()

    if(answer == input){
        correct++
        problemCount++
        console.log(correct, problemCount)
        
    } else {
        problemCount++
    }
    questionOut()
    resetAnswer.reset()
}
function score(){
    pageReset.classList.remove('hide')
    resetAnswer.classList.add('hide')
    var percent = Math.round((100 * correct) /(problemCount))
    question.innerText = (correct + '/' + (problemCount ) + "You got " + percent + " percent! You got "  );

}
function reload() {
    window.location.reload(true)
    
}