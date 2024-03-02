
alert("put in your score in the comment box 🤩🤩")

//Questions array
let quizArray = [
{
question: "What does HTML stand for ?",
answer : "Hypertext Markup Language",
options : [
"Hypertensive Money Loan",
"Hypertext Manual Log",
"Hypertext Markup Language",
"Hypertech Math Link"
]

},
{
question: "What does XML stand for ?",
answer : "eXtensible Markup Language",
options : [
"eXtended Markup Language",
"eXtensible Markup Language",
"eXtension Math Link",
"eXpensive Money Loan"  
]

},
{
question: "What does URL stand for ?",
answer : "Uniform Resource Locator",
options : [ 
"Universal Resource Language",
"Uniform Resource Locator",
"Universal Resource Locator",
"University Resource Link "
]

},
{
question: "What does HTTP stand for ?",
answer : "Hypertext Transfer Protocol",
options : [
"Hypertext Transmitter Protocol",
"Hypertest Transfer Protocol",
"Hypertech Transit Protocol",
"Hypertext Transfer Protocol"
]
}, 
{
question: "What does SEO stand for ?",
answer : "Search Engine Optimization",
options : [ 
"Search Engine Orientation",
"Script Engine Optimization",
"Script Entension Order",
"Search Engine Optimization"
]
},
{
question: "What does API stand for ?",
answer : "Application Programming Interface",
options : [
"Application Programming Interface",
"Appliances Programming Interface",
"Application Programming Instruction",
"Appliances Programming Instruction"
]
},
{
question: "What does CSS stand for ?",
answer : "Cascading Style Sheet",
options : [
"Colorful Style Sheet",
"Cascading Sheet Style",
"Cascading Style Sheet",
"Creative Style Sheet"
]
},
{
question: "What does DOM stand for ?",
answer : "Document Object Model",
options : [
"Document Object Model",
"Docstring Object Model",
"Doctype Object Model",
"Document Object Module"
]
},
{
question: "What does CMS stand for ?",
answer : "Content Management System",
options : [
"Content Managent System",
"Content Manager System",
"Content Managing System",
"Content Management System"
]
}
];    
//getting the references
const  startBtn = document.querySelector(".start")         
const quizBox = document.querySelector(".quiz-box")
const nextBtn = quizBox.querySelector(".next");            
const optionList = quizBox.querySelector(".option-list");    
const resultBox = document.querySelector(".result-box" )
const timeCount = quizBox.querySelector(".timer .sec")
const timeLine = quizBox.querySelector("header .timeline")
const timeOut = quizBox.querySelector(".timer .text")
const body = document.getElementsByTagName("body")[0];
//
//


//start button click event
startBtn.onclick = () => {
    quizBox.classList.add("quiz")    
    startBtn.classList.add("start")   
    showQuestions(0);
    queCount(1);
    que_count = 0
    que_numb = 1;
    userScore = 0;
    showQuestions(que_count); 
    queCount(que_numb);  
    nextBtn.classList.remove("show"); //hide the next button 
    nextBtn.classList.remove("rightnext")
    nextBtn.classList.remove("wrongnext")
    timeLine.classList.remove("right")
    timeLine.classList.remove("wrong") 
    quizBox.classList.remove("oops")
    }
    //          
    //  
    
//defining objects
let que_count = 0;
let que_numb = 1;
let userScore = 0;

let tickIcon = '<div class = "icon tick"><i class = "fas fa-check"></i></div>';
let crossIcon = '<div class = "icon wrong"><i class = "fas fa-times"></i></div>';
//

//next button click event
nextBtn.onclick = () => {
    if(que_count < quizArray.length - 1){
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCount(que_numb);
    nextBtn.style.display = "none";
    nextBtn.classList.remove("rightnext")
    nextBtn.classList.remove("wrongnext")
    body.classList.remove("right");
    body.classList.remove("wrong");
    }
    else{
showResult();
quizBox.classList.remove("quiz")//hides quix box
resultBox.classList.add("result")//shows resultBox
        
        }
    }

//replay button click event
const replayBtn = resultBox.querySelector(".button .restart")  
replayBtn.onclick = () => { 
startBtn.classList.add("start")
quizBox.classList.remove("quiz"); //show quiz box
resultBox.classList.remove("result"); //hide result box
}; 

//display questions
function showQuestions(index){
    const queText = document.querySelector(".question");
    
    let queTag = "<span>" +
    quizArray[index].question + 
    "</span>"
    
    let optionsTag =
    '<div class = "option">' +
    quizArray[index].options[0] + 
    '<span></span></div>' +
    '<div class = "option">' +
    quizArray[index].options[1] +
    '<span></span></div>' +
    '<div class = "option">' +
    quizArray[index].options[2] + 
    '<span></span></div>' +
    '<div class = "option">' +
    quizArray[index].options[3] +
    '<span></span></div>';
    
    queText.innerHTML = queTag;
    optionList.innerHTML = optionsTag;
    
    for (let i of quizArray) {
    //to randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    }
    const option = optionList.querySelectorAll(".option")
    for(let x = 0; x < option.length ; x++){
    option[x].setAttribute("onclick", "optionSelected(this)")
    }
    };
    //


    //when any option is selected ,all options are disabled 
for(let x = 0; x < allOptions; x++){
    optionList.children[x].classList.add("disabled");
    };   
    nextBtn.style.display = "block";//shows next button when option is clicked





    function showResult(){
        quizBox.classList.remove("quiz")//hide quix box
        resultBox.classList.add("result")//shows resultBox
        body.classList.remove("right")
        body.classList.remove("wrong");
        nextBtn.classList.remove("rightnext")
        nextBtn.classList.remove("wrongnext")
        const scoreText = resultBox.querySelector(".score-text")
        if(userScore == quizArray.length){
        let scoreTag = '<span>🥳👌Perfect!! Your score is<p>'
        +  userScore +
        '</p>out of<p>' 
        + quizArray.length +
        '</span>'
        scoreText.innerHTML = scoreTag;
        }
        else  if(userScore > 6 ){
        let scoreTag = '<span>💫Congrats! Your score is<p>'
        +  userScore +
        '</p>out of<p>' 
        + quizArray.length +
        '</span>'
        scoreText.innerHTML = scoreTag;
        }
        else if(userScore > 3){
        let scoreTag = '<span>👍Nice, Your score is<p>'
        +  userScore +
        '</p>out of<p>' 
        + quizArray.length +
        '</span>'
        scoreText.innerHTML = scoreTag;
        }
        else{
        let scoreTag = '<span>😟Sadly, Your score is<p>'
        +  userScore +
        '</p>out of<p>' 
        + quizArray.length +
        '</span>'
        scoreText.innerHTML = scoreTag;
        }
        };
        //
        //
        //           

//count of questions 
function queCount(index){ 
    const bottomQueCount = quizBox.querySelector(".total-questions");
    
    let totalQuestionsCount =
    '<span><p>' +
    index +
    '</p>/<p>'  +
    quizArray.length +
    '</p>Questions</span>';
    
    bottomQueCount.innerHTML = totalQuestionsCount      
    };
    //        
    //    
    //      

    function optionSelected(answer) {
        let userAns = answer.textContent;
        let correctAns = quizArray[que_count].answer;
        let allOptions = optionList.children.length;
        if (userAns == correctAns){
        userScore += 1
        answer.classList.add("correct")
        //to show that question is correct
        answer.insertAdjacentHTML("beforeend", tickIcon)
        body.classList.add("right")
        nextBtn.classList.add("rightnext")
        }



        else{
            var myQuizBox = false;
            if (myQuizBox) clearTimeout(myquizBox);
            myQuizBox = setTimeout(function() {quizBox.style.animation = '';}, 500);//so that the animation can continue
            answer.classList.add("incorrect");
            //to show that question is wrong
            answer.insertAdjacentHTML("beforeend", crossIcon);
            quizBox.style.animation = "shake 0.25s 2";
            body.classList.add("wrong");    
            nextBtn.classList.add("wrongnext")
            window.navigator.vibrate(500);//for phone to vibrate 
            //to automatically select correct option if answer is wrong
            for(let x = 0; x < allOptions; x++){
            if (optionList.children[x].textContent == correctAns){   
            optionList.children[x].setAttribute("class", "option correct");
            optionList.children[x].insertAdjacentHTML("beforeend",tickIcon);
            }
            }
            }
            //when any option is selected ,all options are disabled 
            for(let x = 0; x < allOptions; x++){
            optionList.children[x].classList.add("disabled");
            };   
            nextBtn.style.display = "block";//shows next button when option is clicked
            } 
            //             
            // 
            //       








































