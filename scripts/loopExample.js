"use strict"

let outputString = ""

let upperRange = window.prompt("Enter value: ","10")

upperRange = parseInt(upperRange)

// for(let counter=10; counter>0; counter--)
// {
//     if( counter == 5)
//     {
//         outputString += " Five <br />"
//     }
//     else
//     {
//         outputString += counter+ "<br />"
//     }
// }

let ouputValue = ""

for(let counter=upperRange; counter>0; counter--)
{

   switch(counter)
   {
        case 5:
            ouputValue += "Five <br />"
            break;
        case 4:
            ouputValue += "Four <br />"
            break;
        case 3:
            ouputValue += "Three <br />"
            break;
        case 2:
            ouputValue += "two <br />"
            break;
        case 1:
            ouputValue += "one <br />"
            break;
        default:
            ouputValue += counter + "<br />"
            break;    
                    
   }

}

ouputValue += "<strong>Blastoff!</strong>";

const outputArea = document.getElementById("output");
// document.getElementById("output").innerHTML = ouputValue
outputArea.innerHTML = ouputValue