"use strict"

let outputArea = document.getElementById("results") 
let outputText = ""
// const numArrayText = ["One","two","three","four", "five"]
// const startCountDown = window.prompt("What value should I count down from?","10")
// const startCountDownInt = parseInt(startCountDown,10)

// for(let i=startCountDownInt;i>0;i--)
// {
//     let printValue
//     if(i<=5)
//     {
//         printValue = numArrayText[i-1]
//     }
//     else
//     {
//         printValue = i
//     }

//     outputText += printValue + "</br>"
// }

// const newArray = []

// let inputValue = window.prompt("Enter array element")
// let outputAlert;

// while(inputValue !== null)
// {
//     newArray.push(inputValue)
//     inputValue = window.prompt("Enter array element") 
//     window.alert(newArray.toString())
// }


function addFunc(value1,value2=700)
{
    let sum //local variable
    sum = value1+value2
    return sum
}

outputText = "Call the function and print value: "+ addFunc(2)
outputText += "</br> Trying to access local variable form addFunc: sum= "+ sum

outputArea.innerHTML = outputText
