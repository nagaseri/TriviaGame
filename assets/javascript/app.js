//Questions object
 var questionObject = {
	q1: {
		question: "Who said 'no no no' to rehab?",
		answers: ["Britney Spears", "Amy Winehouse", "Adele", "Ke$ha"],
		correct: "Amy Winehouse"
	},
	q2: {
		question: "Who's hips don't lie?",
		answers: ["Shakira", "Jennifer Lopez", "Madonna", "Miley Cyrus"],
		correct: "Shakira"
	},
	q3: {
		question: "Who partnered up on 'Empire State of Mind' with Alicia Keys?",
		answers: ["Eminem", "Kanye West", "Jay-Z", "Tupac"],
		correct: "Jay-Z"
	},
	q4: {
		question: "Which rapper started on Degrassi and now he here?",
		answers: ["Lil Wayne", "Lil Bow Wow", "Drake", "Kendrick Lamar"],
		correct: "Drake"
	},
	q5: {
		question: "Who brought sexy back?",
		answers: ["Ne-yo", "Usher", "Justin Timberlake", ""],
		correct: "Justin Timberlake"
	}
 }

//global variables
//scoreboard variables
var wins = 0;
var losses = 0;
var unanswered = 0;
//timer variable?
var inTime;
//Object.keys is a function that returns all of the object's keys as an array when taking an object as an argument
var questionKeys = Object.keys(questionObject);
//start with the first index
var i = 0;

//Displays the questions
var renderQuestion = function (){
	//assigns the last question to be rendered
	var limit = questionKeys.length - 1;
	//conditional to run if we haven't gone through the questions already
	if (i <= limit) {
		//delay variable
		var delay = 2000;
		//timer starts
		timer = setTimeout(renderQuestion, delay);
		console.log('timer', timer);
		//temporary var to hold on to each key of the question object (q1,q2,q3...)
		var tempKey = questionKeys[i];
		//new var to access the question value of each key
		var question = questionObject[tempKey].question;
		//new div to hold each of the questions being displayed
		var individualQuestions = $("<div>");
		//appending each var question to the individualQuestions div 
		individualQuestions.append("<h1>" + question + "</h1>");
		//appending each individualQuestions to the HTML questionDiv
		$("#questionDiv").append(individualQuestions);
		console.log(individualQuestions);
		//iterate through each question
		i++;
		//show the questions on the page
		$("#questionDiv").show();
		//hide the start button
		$("#start").hide();
		//hide the start page heading
		$("h2").hide();
		//answer keys from questions object are displayed as buttons
			//three of them are wrong
			//one of them is the correct answer
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

	}
	//if we go through all the questions, go to score page 
	else{
		//timer stops
		clearTimeout(timer);
		//hide the questions on the page
		$("#questionDiv").hide();
		console.log('questionDiv', questionDiv);
		//new div to put the scoreboard and congrats message on
		var scoreboard = $('<div class="scoreboardHTML">')
		console.log('scoreboard', scoreboard);
		//new var to display the wins score
		var winScore = $('<h2>').text('Correct: ' + wins);
		console.log(winScore);
		//append the wins score to the scoreboard var
		scoreboard.append(winScore);
		//new var to display the losses score

		//append the losses score to the scoreboard var

		//new var to display the unanswered score

		//append the unanswered score to the scoreboard var

		//appending the scoreboard to the HTML
		$("#scoreboardHTML").append(scoreboard);
    	//"Congrats on finishing!" message is displayed
    	var congratsMessage = $('<h1>').text("Congratulations on finishing!");
    	console.log(congratsMessage);
    	//prepend congratsMessage to scoreboardHTML
    	$("#scoreboardHTML").prepend(congratsMessage);
    	//start over button is displayed
		// $("#start").show();
     		//restarts game
     		// start(); 
	}
	
	// if (inTime === false){
	// 	i++;
	// 	unanswered++;
	// 	console.log('unanswered', unanswered);
	// }
}

//function that resets the game
var reset = function(){
	wins = 0;
	losses = 0;
	unanswered = 0;
}

//start function renders questions and resets game 
var start = function(){
	renderQuestion();
	reset();
	// timerRunning = false;
}

// Holds js until loaded and start button is clicked
$(document).ready(function(){
	$('#start').on("click", function(){
		start()
	})
})