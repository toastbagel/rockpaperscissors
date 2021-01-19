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
  let randomNumber = Math.random();
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
  
});