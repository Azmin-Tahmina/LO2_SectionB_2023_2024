// Constants
const PASSING_GRADE = 49.5;
const gradeArray = [];

// Global variables
let total = 0; // total of all grades entered
let numGrades = 0; // number of grades entered // take array length
let numPasses = 0; // number of passing grades entered

// Global code
let textGrade = window.prompt("Enter a grade from 0 to 100 (hit Cancel to stop)", "");

while (textGrade !== null) { // null will be returned if the user chooses Cancel from the dialog box
    let grade = parseFloat(textGrade);
    // check for a valid grade
    if (grade < 0 || grade > 100 || Number.isNaN(grade) || isNaN(textGrade)) {
        window.alert("Invalid grade - must be between 0 and 100");
    } else {
        gradeArray.push(grade);
        //window.alert(gradeArray.toString())
        // let result;

        // numGrades++;
        // total += grade;

        // // check for passing grade
        // if (grade >= PASSING_GRADE) {
        //     result = "Pass";
        //     numPasses++;
        // } else {
        //     result = "Fail";
        // }

        // display results so far
           
    }
    textGrade = window.prompt("Enter a grade from 0 to 100 (hit Cancel to stop)", "");
}



for(let values of gradeArray)
{
    total += values
    if (values >= PASSING_GRADE) 
    {
        result = "Pass";
        numPasses++;
    } 
    else 
    {
        result = "Fail";
    }
}

window.alert("Status: " + result
+ "\nAverage so far: " + (total / gradeArray.length)
+ "\nNumber passed so far: " + numPasses + " out of " + gradeArray.length );

// display final results
gradeArray.sort().reverse();
document.getElementById("output").innerHTML = "Out of " + gradeArray.length + " total grades, "
        + "there were " + numPasses + " passing grades. "
        + "The average grade was " + (total / gradeArray.length) + ". "
        + "The grades sorted in reverse order are " + gradeArray.join(", ") + ".";
