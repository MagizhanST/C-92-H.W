function login() {
    player1_value = document.getElementById("player1_login").value;
    player2_value = document.getElementById("player2_login").value;
    if ((player1_value != "")&&(player2_value != "")){
        if(player1_value != player2_value){
            localStorage.setItem("player1_name", player1_value);
            localStorage.setItem("player2_name", player2_value);
            document.getElementById("error-login").style.visibility = "hidden";
            window.location = "html.html";
        } else{
            document.getElementById("error-login").style.visibility = "visible";
            document.getElementById("error-login").innerHTML = "'Player 1' and 'Player 2' cannot have the same username!";
        }
    } else{
        document.getElementById("error-login").style.visibility = "visible";
        document.getElementById("error-login").innerHTML = "You must first set usernames for 'Player 1' and 'Player 2'!";
    }
}