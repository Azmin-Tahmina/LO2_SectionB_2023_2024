"use strict";

/* 
 Filename:    add-to-array.js 
 Student:     Sample Student (student1234)
 Course:      CWEB 190 (Internet Programming/Web Applications 1) 
 Instructor:  Michael Grzesina 
 Date:        Winter 2024
 Purpose:     Practice adding elements to an array
*/

let arEntries = []; // or new Array();

for (let i = 0; i < 5; i++) {
    let entry = window.prompt("Enter an element to add to the array", "");
    arEntries.push(entry);

    let resultString = "";
    for (let j = 0; j < arEntries.length; j++) {
        resultString += j + ": " + arEntries[j] + "\n";
    }

    window.alert( "Current array contents:\n" + arEntries + "\nOr with indices\n" + resultString);
}
