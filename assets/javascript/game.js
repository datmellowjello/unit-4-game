

$(document).ready(function () {


// need to make array for random computer number (19 - 120)
var randNum = [];
for (var i = 19; i < 121; i++) {
    randNum.push(i);
}
// need to make array for random crystal numbers ( 1 -12)
var crystalNum = [];
for (var c = 1; c < 13; c++) {
    crystalNum.push(c);
}
// need to make variables for wins, loses, 
var totalScore = 0;
var wins = 0;
var loses = 0;


// array for storing the random numbers computer picked 
var randomNumber = []; // number to match
var crystalNumbers = []; //array for number randomly chosen

// need varibales for each crystal
var c1;
var c2;
var c3;
var c4;



// need function to pick random crystal numbers 

function pickRandomNumber(arr) {

    var x = arr[Math.floor(Math.random() * arr.length)];
    randNumber = x;
    $("#randomNumber").html(randNumber);

    console.log("random number: " + randNumber);

} 

// pick random numbers for crystals

function pickRandomCrystals(arr) {

    for (var y = 0; y < 4; y++){

        var a = arr[Math.floor(Math.random() * arr.length)];

        crystalNum.push(a);
    }

// need function to pick random computer number to match 


// need to make reset function


// function to update score when a crystal is clicked

// need function to 

});