 function adduser()
 {
   person1=document.getElementById("player1_name_input").value;
   person2=document.getElementById("player2_name_input").value;
   localStorage.setItem("person1",person1);
   localStorage.setItem("person2",person2);
   window.location="game_page.html";
 }