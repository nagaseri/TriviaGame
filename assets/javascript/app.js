//start page 
 //start button 
  //game (re)starts
var wins = 0;
var losses = 0;
var unanswered = 0;

var questions;
var current_question = 0;
var question_data;
var correct_answer;
var answers;


var start = function(){
	renderQuestion();
	// reset();
	// console.log(start);
}

var reset = function(){
	wins = 0;
	losses = 0;
	unanswered = 0;
}

 $("#start").click(function(){
  	start();
  });

function renderQuestion(){
	//Creating a variable to hold all the keys belonging to the question object
	//Object.keys is a function that returns all of the object's keys as an array when taking an object as an argument
	var questionKeys = Object.keys(questionObject);
	//creating a for loop to iterate through the questions 
	for(var i = 0; i < questionKeys.length; i++){
		//created a temporary var to hold on to each key of the question object
		var tempKey = questionKeys[i];
		var question = questionObject[tempKey].question;
		var newDiv = $("<div>")
		newDiv.append("<h1>" + question + "</h1>");
		$("#questionDiv").append(newDiv);
		console.log(newDiv);
	// $("#questionDiv").show();
	// $(".button").hide();
	// $("h2").hide();
		

	}
}



// Question page
 // var list of questions
 var questionObject = {
	q1: {
		question: "Why are you?",
		answers: ["because", "you", "suck", "balls"],
		correct: "balls",
	},
	q2: {
		question: "Why are you",
		answers: ["because", "you", "suck", "balls"],
		correct: "balls",
	},
	q3: {
		question: "Why are you",
		answers: ["because", "you", "suck", "balls"],
		correct: "balls",
	},
	q4: {
		question: "Why are you",
		answers: ["because", "you", "suck", "balls"],
		correct: "balls",
	},
	q5: {
		question: "Why are you",
		answers: ["because", "you", "suck", "balls"],
		correct: "balls",
	},
 }


//  //trivia header
//  //timer starts 30 seconds decrementing at one second each
// 	$(#timeRemaining).text(?????????)
// 	30SEC TIMER

//  //Question is displayed
// $(#questionDiv).text(questionArray[0]);


//  //four buttons are displayed
// $("answerButton").on("click", function(event){
// 	if(event === answerArray);
// 	wins++;
// 	$("#message").html()
// }


// for(var i=0, i < questionArray.length -1, i++)
  //if the correct button is clicked
   //Winner page is displayed
    //Timer stops
    //congratulations message is displayed
    //shown for five seconds 
  //if one of the three wrong buttons is clicked  
   //loser page is displayed
    //timer stops 
    //"Aww, next time!" message is displayed
    //correct answer is displayed 
    //shown for five seconds
  //if timer runs out 
   //timer stops 
   //"You're out of time!" message is displayed
   //Correct answer is displayed
  //if we loop through all questions
   //Game over page is shown 
    //timer stops 
    //"Congrats on finishing!" message is displayed
    //Number of correct answers is displayed
    //number of incorrect answers is displayed
    //number of unanswered questions is displayed
    //start over button is displayed
     //restarts game 
