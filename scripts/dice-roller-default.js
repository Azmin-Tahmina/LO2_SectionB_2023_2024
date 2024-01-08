"use strict";

/* 
 Filename:    dice-roller-default.js
 Student:     Sample Student (student1234)
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Michael Grzesina 
 Date:        Winter 2024
 Purpose:     Practice creating and using functions in JavaScript
*/


// Constants
/**
 * Number of rolls of the die to make
 * @type {number}
 */
const NUM_ROLLS = 3;


// Global variables
/**
 * Total of all the dice rolled
 * @type {number}
 */
let total = 0;


/**
 * Generates a random integer between 1 and a supplied value (inclusive).
 * Assumes that the supplied number is an integer greater than 0
 *
 * @param max           the largest random integer that can be created (default 6)
 * @returns {number}    a random integer between 1 and max (inclusive)
 */
function getRandomInt(max = 6) {
    return Math.floor(Math.random() * max) + 1;
}


// Global code
for (let i = 1; i <= NUM_ROLLS; i++) {
    let roll = getRandomInt();
    document.getElementById("diceRolls").innerHTML +=
        `<p id="die${i}">${roll.toString()}</p>`
    total += roll;
}

document.getElementById("total").innerHTML = "Total of all "
        + NUM_ROLLS + " rolls: " + total;
