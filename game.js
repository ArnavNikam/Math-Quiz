Name1 = localStorage.getItem("Inp1");
Name2 = localStorage.getItem("Inp2");

console.log(Name1);


document.getElementById("player1name").innerHTML = Name1;
document.getElementById("player2name").innerHTML = Name2;

Player1Score = 0;
Player2Score = 0;

Questurn = "Player1";
Ansturn = "Player2";

document.getElementById("player1score").innerHTML = Player1Score;
document.getElementById("player2score").innerHTML = Player2Score;

document.getElementById("Ques").innerHTML = Name1;
document.getElementById("Ans").innerHTML = Name2;

function send() {
    document.getElementById("output").style.visibility; inerth;

    word1 = document.getElementById("word1").value;

    word2 = document.getElementById("word2").value;

    Get_number_1 = localStorage.getItem("Inp1");

    document.getElementById("number1").innerHTML = Get_number_1;

    Get_number_2 = localStorage.getItem("Inp2");

    document.getElementById("number2").innerHTML = Get_number_2;

    QuestionNumber = "<h4 id='Word'> Q."+ NewLL + "</h4>";
}

function Check() {
   
}