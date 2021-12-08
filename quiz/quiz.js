// question prototype
function quizApp(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0 ; 

}

//total questions 
quizApp.prototype.getTotalQuestion = function (){
    return this.questions[this.questionIndex];
}