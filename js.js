player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	
	if ((number1 != "")&&(number2 != "")){
		document.getElementById("error-nan").style.visibility = "hidden";
		document.getElementById("output").style.visibility = "visible";
		actual_answer = parseInt(number1) * parseInt(number2);
		console.log(actual_answer);
	
	
		question_number = "<h4>" + number1 + " x "+ number2 +"</h4>";
		input_box = "<span>Answer : </span><input type='text' id='input_check_box'>";
		check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
		row =  question_number + input_box + check_button ; 
		document.getElementById("output").innerHTML = row;
		document.getElementById("number1").value = "";
		document.getElementById("number2").value = "";
	} else{
		document.getElementById("error-nan").style.visibility = "visible";
        document.getElementById("error-nan").innerHTML = "You must first set usernames for 'Number 1' and 'Number 2'!";
		console.log("error-nan");
	}
}


question_turn = "player1";
answer_turn = "player2";

function check()
{
	document.getElementById("output").style.visibility = "hidden";
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}

