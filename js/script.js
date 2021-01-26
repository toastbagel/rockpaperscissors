// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
let user_choice = '';
let computer_choice = '';
let winner = '';
  
let randomNumber = 0;

$("#shoot").click(function(){
  let valid = false;
  let randomNumber = Math.random();
  console.log(randomNumber)
  user_choice = $("#input").val();
  $("#userChoice").html(user_choice);
  
  
  if ( randomNumber <= .33 ){
    computer_choice = "rock";
  } else if (
  (randomNumber >.33 && randomNumber <.66)){
    computer_choice = "paper";
  } else {
    computer_choice ="scissors"
  }
  $("#computerChoice").html(computer_choice)
  
  if (user_choice == "rock") {
    valid = true;
    if (computer_choice == "rock"){
      $("#result").html("Tie");
    } 
    if (computer_choice == "paper"){
      $("#result").html("Computer Wins");
    } 
     if (computer_choice == "scissors"){
      $("#result").html("User Wins");
    } 
  }
  
  
 if (user_choice == "paper") {
   valid = true;
    if (computer_choice == "rock"){
      $("#result").html("User Wins");
    } 
    if (computer_choice == "paper"){
      $("#result").html("Tie");
    } 
     if (computer_choice == "scissors"){
      $("#result").html("Computer Wins");
    } 
  }
  
  
  if (user_choice == "scissors") {
    valid = true;
    if (computer_choice == "rock"){
      $("#result").html("Computer Wins");
    } 
    if (computer_choice == "paper"){
      $("#result").html("User Wins");
    } 
     if (computer_choice == "scissors"){
      $("#result").html("Tie");
    } 
  }
  
  if (!valid){
     $("#result").html("Not valid input");
  }
      $("#input").val('');
});