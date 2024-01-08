"use strict";

/* 
 Filename:    convertnumbers.js 
 Student:     Sample Student (student1234)
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Michael Grzesina 
 Date:        Winter 2024
 Purpose:     Number conversion practice
*/

const testValue = window.prompt("Enter a number to convert", "");
const outputElement = document.getElementById("output");

outputElement.innerHTML = "<p>The number entered was: " + testValue + "</p>";
outputElement.innerHTML += "<p>Converted using parseInt: " + parseInt(testValue) + "</p>";
outputElement.innerHTML += "<p>Converted to binary: " + parseInt(testValue, 2) + "</p>";
outputElement.innerHTML += "<p>Converted to octal: " + parseInt(testValue, 8) + "</p>";
outputElement.innerHTML += "<p>Converted to hexadecimal: " + parseInt(testValue, 16) + "</p>";
outputElement.innerHTML += "<p>Converted using parseFloat: " + parseFloat(testValue) + "</p>";
outputElement.innerHTML += "<p>Converted using Number: " + Number(testValue) + "</p>";
