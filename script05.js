const studentNames = ["John", "Jane"];
const mathGrades = ["70", "85"];

let newName = prompt("Enter name of student:");

for (let i = 0; i < studentNames.length; i++) {
    if (newName === studentNames[i]) {
        alert(`${studentNames[i]} has reached ${mathGrades[i]} points in Math this season.`);
    } else {
        continue;
    }
}