//Your quiz functionality goes here


// question prototype
function quizApp(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0 ; 

}
// total questionIndex
quizApp.prototype.getQuestionIndex = function() {
  
    return this.questions[this.questionIndex];
}
// scores function 
quizApp.prototype.checkGuess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}
// Quiz has ended 
quizApp.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
// question & answer prototype
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
//correct answer 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}




// ----------------------------------------------------------------------------//
// populate the question 

function populate() {
    if(quiz.isEnded()) {
       
    }
    else {
        // show question
        let element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
      
        // show options 
        let choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
                let newNode = document.createElement("label");
                let t = document.createTextNode(choices[i]);
                newNode.setAttribute("for", "btn"+i);
                newNode.setAttribute("id","btn"+i)
                newNode.appendChild(t);
                  document.getElementById("form").insertBefore(newNode,document.getElementById("btn"+i));
                }
            
        
 
        showProgress();
    }
};

// 

//  Progress bar 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

let questions = [
    new Question("Question text here 1 ", ["Answer A", "Answer B","Answer C", "Answer D"], "Answer A"),
    new Question("Question text here 2 ", ["Answer A", "Answer B","Answer C", "Answer D"], "Answer D")
]
 
// create quiz
let quiz = new quizApp(questions);
 
// display quiz
populate();