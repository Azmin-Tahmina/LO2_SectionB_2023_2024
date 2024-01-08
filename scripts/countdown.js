"use strict";

/*
 Filename:    countdown.js
 Student:     Sample Student (student1234)
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Michael Grzesina 
 Date:        Winter 2024
 Purpose:     Practice JavaScript language constructs with a countdown
*/

let countdownString = "";

for (let counter = 10; counter > 0; counter--) {
    if (counter === 5) {
        countdownString += "Five<br />";
    } else {
        countdownString += counter + "<br />";
    }
}

countdownString += "<strong>Blastoff!</strong>";

document.getElementById("output").innerHTML = countdownString;
