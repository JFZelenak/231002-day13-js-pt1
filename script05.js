const studentNames = ["john", "jane", "jim", "jack", "jill"];
const mathGrades = ["70", "85", "50", "101", "65"];

let newName = prompt("Enter name of student:");
newName = newName.toLowerCase();

let validCheck = false;
let mathGradeIndex;

if (checkValid(newName)) {

    if(mathGrades[mathGradeIndex] < 60) {
        document.getElementById("message").style.color = "red";
    } else if(mathGrades[mathGradeIndex] < 70) {
        document.getElementById("message").style.color = "yellow";
    } else if(mathGrades[mathGradeIndex] < 100) {
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").style.color = "blue";
    }

    document.getElementById("message").innerHTML = `${newName} has reached ${mathGrades[mathGradeIndex]} points in Math this season.`;
} else {
    alert("There is no " + newName + " in the database.");
}

function checkValid(name) {
    for (let i = 0; i < studentNames.length; i++) {
        if (name === studentNames[i]) {
            mathGradeIndex = i;
            validCheck = true;
        } else {
            continue;
        }
    }
    return validCheck;
}

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