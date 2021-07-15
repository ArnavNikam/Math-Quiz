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
    word = document.getElementById("word").value;

    QuestionNumber = "<h4 id='Word'> Q."+ NewLL + "</h4>";
}

function Check() {
    answer = document.getElementById("Ans").value;
}