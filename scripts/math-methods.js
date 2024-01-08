"use strict";

/* 
 Filename:    math-methods.js
 Student:     Sample Student (student1234)
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Michael Grzesina 
 Date:        Winter 2024
 Purpose:     Demonstrate Math methods
*/

let myNumber = Math.random() * 10;

let outputString = "<p>The number is " + myNumber + "</p>";
outputString += "<p>The cube of the number is " + Math.pow(myNumber, 3) + "</p>"; // could also just use (myNumber ** 3)
outputString += "<p>The square root of the number is " + Math.sqrt(myNumber) + "</p>";
outputString += "<p>The integer just below the number is " + Math.floor(myNumber) + "</p>";
outputString += "<p>The first 1 in the number is at position " + myNumber.toString().indexOf("1") + "</p>"

document.getElementById("output").innerHTML = outputString;
