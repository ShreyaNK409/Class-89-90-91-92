score1 = 0;
score2 = 0;
player1name = localStorage.getItem("person1");
player2name = localStorage.getItem("person2");
document.getElementById("player1_name").innerHTML = player1name + ":";
document.getElementById("player2_name").innerHTML = player2name + ":";
document.getElementById("player1_score").innerHTML = score1;
document.getElementById("player2_score").innerHTML = score2;
document.getElementById("player_question").innerHTML = "questionturn=" + player1name;
document.getElementById("player_answer").innerHTML = "answerturn=" + player2name;

function send() {
    get_word = document.getElementById("word").value; //Actions
    word = get_word.toLowerCase(); // actions;
    console.log(word);
    charAt1 = word.charAt(1);
    console.log(charAt1);
    lenght_divide_2 = Math.floor(word.length / 2); // 7/2 = 3.5 = 3 
    charAt2 = word.charAt(lenght_divide_2);
    console.log(charAt2); //i
    lenght_minus_1 = word.length - 1; //7-1 = 6 
    charAt3 = word.charAt(lenght_minus_1);
    console.log(charAt3); // s

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    all = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = all;
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    get_answer = get_answer.toLowerCase();
    console.log(get_answer);

    if (get_answer == word) {
        if (answer_turn == "player1") {
           score1 = score1 + 1;
            document.getElementById("player1_score").innerHTML = score1;
        } else {
            score2 = score2 + 1;
            document.getElementById("player2_score").innerHTML = score2;
        }
    }

    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2name;
    }
     else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
    }
      
    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;
    }
     else {
        question_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1name;
    }

    document.getElementById("output").innerHTML="";

}