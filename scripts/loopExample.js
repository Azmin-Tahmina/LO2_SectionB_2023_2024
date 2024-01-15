"use strict"

let outputString = ""

for(let counter=10; counter>0; counter--)
{
    if( counter == 5)
    {
        outputString += " Five <br />"
    }
    else
    {
        outputString += counter+ "<br />"
    }
}

outputString += "<strong>Blastoff!</strong>";

document.getElementById("output").innerHTML = outputString