"use strict";

/*
 Filename:    gradelist-done.js
 Student:     Michael Grzesina (grzesinam)
 Course:      CWEB 190 (Internet Programming/Web Applications 1)
 Instructor:  Michael Grzesina
 Date:        Winter 2024
 Purpose:     Practice JavaScript constructs by creating a sorted list of grades that the user enters
*/

/**
 * Number of marks available on evaluation
 * @type {number}
 */
const NUMBER_OF_MARKS = 50;

/**
 * Array to keep track of marks
 * @type {*[]}
 */
let arMarks = [];

/**
 * Index of the current mark being processed in the array
 * @type {number}
 */
let markCount = 0;


/**
 * Anonymous function to take mark from input box and add to list of marks
 */
document.getElementById("btnProcessMark").onclick = function() {
    let textMark = document.getElementById("mark").value;
    let mark = parseFloat(textMark);

    if (isNaN(textMark) || isNaN(mark) || mark < 0 || mark > NUMBER_OF_MARKS) {
        window.alert("Enter a valid mark from 0 to " + NUMBER_OF_MARKS + "!");
    } else {
        processMark(mark);
        document.getElementById("percentage").innerHTML = formatMark(mark);
    }
};


/**
 * Displays given mark as a percentage of NUMBER_OF_MARKS
 * @param mark          the raw mark to be formatted
 * @returns {string}    the mark out of NUMBER_OF_MARKS as a percentage
 */
function formatMark(mark) {
    let percent = (mark / NUMBER_OF_MARKS) * 100;
    percent = percent.toFixed(1);
    return mark + " / " + NUMBER_OF_MARKS + " = " + percent + "%";
}


/**
 * Display marks in an ordered list from highest to lowest
 * @param mark          mark to be added to the list
 */
function processMark(mark) {
    // let markString = ""; // early version

    document.getElementById("btnProcessMark").disabled = true;
    arMarks.push(mark);
    arMarks.sort(function(a, b) {
        return b - a;
    });

    markCount = 0;
    document.getElementById("gradesList").innerHTML = "";
    setTimeout(displayGradesOneByOne, 1000);

    // early version - just display all marks immediately
    // for (let i = 0; i < arMarks.length; i++) {
    //     markString += "<li>" + arMarks[i] + "</li>";
    // }
    // document.getElementById("gradesList").innerHTML = markString;
}


/**
 * Display the current mark in the array as a list item
 */
function displayGradesOneByOne() {
    document.getElementById("gradesList").innerHTML +=
            "<li>" + formatMark(arMarks[markCount]) + "</li>";
    markCount++;

    if  (markCount < arMarks.length) {
        setTimeout(displayGradesOneByOne, 1000);
    } else {
        document.getElementById("btnProcessMark").disabled = false;
        document.getElementById("mark").value = "";
        document.getElementById("mark").focus();
    }
}
