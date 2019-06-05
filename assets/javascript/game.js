

$(document).ready(function () {


// need to make array for random computer number (19 - 120)
var randNum = Math.floor(Math.random()*102+19)

$("#randomNumber").text(randNum);
// need for random crystal numbers ( 1 -12)
var gem1 = Math.floor(Math.random()*12+1)
var gem2 = Math.floor(Math.random()*12+1)
var gem3 = Math.floor(Math.random()*12+1)
var gem4 = Math.floor(Math.random()*12+1)
// need to make variables for wins, loses, 
var totalScore = 0;
var wins = 0;
var losses = 0;

$('#wins').text(wins);
$('#losses').text(losses);

//need win and lose functions
function winner () {
    alert("winner winner chicken dinner!");
    wins++;
    $("#wins").text(wins);

}
function loser() {
    alert("too bad so sad you lost!");
    losses++;
    $("#losses").text(losses);
//on click of gem functions
}
 $('.purple').on ('click', function(){
    totalScore = totalScore + gem1;
    $('#userPtns').text(totalScore); 
        if (totalScore == randNum){
          winner();
        }
        else if ( totalScore > randNum){
          loser();
        }   
  })  

  $('.green').on ('click', function(){
    totalScore = totalScore + gem2;
    $('#userPtns').text(totalScore); 
        if (totalScore == randNum){
          winner();
        }
        else if ( totalScore > randNum){
          loser();
        }   
  })  
  $('.blue').on ('click', function(){
    totalScore = totalScore + gem3;
    $('#userPtns').text(totalScore); 
        if (totalScore == randNum){
          winner();
        }
        else if ( totalScore > randNum){
          loser();
        }   
  })  
  $('.red').on ('click', function(){
    totalScore = totalScore + gem4;
    $('#userPtns').text(totalScore); 
        if (totalScore == randNum){
          winner();
        }
        else if ( totalScore > randNum){
          loser();
        }   
  })  

// need to make reset function
function reset () {
    randNum=Math.floor(Math.random()*102+19);
    $('#randomNumber').text(randNum);
    gem1= Math.floor(Math.random()*12+1);
    gem2= Math.floor(Math.random()*12+1);
    gem3= Math.floor(Math.random()*12+1);
    gem4= Math.floor(Math.random()*12+1);
    totalScore= 0;
    $('#userPtns').text(totalScore);
} 


// function to update score when a crystal is clicked

// need function to 

});