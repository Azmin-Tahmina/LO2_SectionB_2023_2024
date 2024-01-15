"use strict"

let gradeInput = window.prompt("Enter valid grade(1-100)", "")

//window.alert(gradeInput)

let outputVariable = ""
let grade;
let numberOfGrades = 0
let totalNumber = 0
let displayAlert = ""

while( gradeInput !== null)
{
    grade = parseFloat(gradeInput)

    if( grade < 0 || grade > 100 || Number.isNaN(grade))
    {
        window.prompt ("You entered invalid grade!Enter valid grade(1-100)")
    }
    else
    {
        numberOfGrades ++;
        totalNumber += grade
        displayAlert += "Numbers entered" + numberOfGrades + "\n"
        displayAlert += "Total Number " + totalNumber + "\n"

        window.alert(displayAlert)

    }
    
    gradeInput = window.prompt("Enter valid grade(1-100)", "")
}


