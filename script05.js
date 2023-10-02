const studentNames = ["john", "jane"];
const mathGrades = ["70", "85"];

let newName = prompt("Enter name of student:");
console.log(newName);
newName = newName.toLowerCase();
console.log(newName);

for (let i = 0; i < studentNames.length; i++) {
    // if (i === studentNames.length) {
    //     alert("The name is not in the database!");
    //     break;
    // }
    console.log(studentNames.length);
    if (newName === studentNames[i]) {
        if(mathGrades[i] < 60) {
            document.getElementById("message").style.color = "red";
        } else if(mathGrades[i] < 70) {
            document.getElementById("message").style.color = "yellow";
        } else if(mathGrades[i] < 100) {
            document.getElementById("message").style.color = "green";
        } else {
            document.getElementById("message").style.color = "blue";
        }
        document.getElementById("message").innerHTML = `${studentNames[i]} has reached ${mathGrades[i]} points in Math this season.`;
    } else {
        continue;
    }
}