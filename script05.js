
const studentNames = ["john", "jane", "jim", "jack", "jill"];
const mathGrades = ["70", "85", "50", "101", "65"];

// display names plus grades in database
let namesString = "";
let gradesString = "";

for (let i = 0; i < studentNames.length; i++) {
    namesString += "<li>" + studentNames[i] + "</li>";
    gradesString += "<li>" + mathGrades[i] + "</li>";
}

document.getElementById("namesOutput").innerHTML = namesString;
document.getElementById("gradesOutput").innerHTML = gradesString;

let validCheck = false;
let mathGradeIndex;

// start check grade of student by name
function checkGradeOfStudent() {
    // prompt the user to input a name as string
    let newName = prompt("Enter name of student:");

    // change the string of the user input to lower case
    newName = newName.toLowerCase();
    
    // check if the input name is in the database
    if (checkValid(newName) === true) {

        // check what grade and choose color of text accordingly
        if(mathGrades[mathGradeIndex] < 60) {
            document.getElementById("message").style.color = "red";
        } else if(mathGrades[mathGradeIndex] < 70) {
            document.getElementById("message").style.color = "yellow";            
        } else if(mathGrades[mathGradeIndex] < 100) {
            document.getElementById("message").style.color = "green";            
        } else {
            document.getElementById("message").style.color = "blue";            
        }
        // change the backgroundcolor of the text
        document.getElementById("message").style.backgroundColor = "lightgray";

        // change the first letter from lower case to upper case
        newName = changeFirstLetterToUppercase(newName);

        return `${newName} has reached ${mathGrades[mathGradeIndex]} points in Math this season.`;
    } else {
        // change the first letter from lower case to upper case
        newName = changeFirstLetterToUppercase(newName);

        return `There is no "${newName}" in the database.`;
    }
}

// change the first letter from lower case to upper case
function changeFirstLetterToUppercase(name) {
            let nameArray = name.split("");
            let firstLetter = nameArray[0].toUpperCase();
            nameArray.shift();
            nameArray.unshift(firstLetter);
            name = nameArray.join("");
            return name;
}

function checkValid(name) {
    for (let i = 0; i < studentNames.length; i++) {
        if (name === studentNames[i]) {
            mathGradeIndex = i;
            return true;
        } else {
            continue;
        }
    }
    return false;
}

document.getElementById("startButton").addEventListener("click",function() {
    let message = checkGradeOfStudent();
    document.getElementById("message").innerHTML = message;
});

// for (let i = 0; i < studentNames.length; i++) {
//     console.log(studentNames.length);
//     if (newName === studentNames[i]) {
//         if(mathGrades[i] < 60) {
//             document.getElementById("message").style.color = "red";
//         } else if(mathGrades[i] < 70) {
//             document.getElementById("message").style.color = "yellow";
//         } else if(mathGrades[i] < 100) {
//             document.getElementById("message").style.color = "green";
//         } else {
//             document.getElementById("message").style.color = "blue";
//         }
//         document.getElementById("message").innerHTML = `${studentNames[i]} has reached ${mathGrades[i]} points in Math this season.`;
//     } else {
//         continue;
//     }
// }