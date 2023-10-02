// Intermediate ex 1 | Compare two numbers
let gradesMartin = [76,64,81,57,94];
let gradesThomas = [85,49,81,72,55];
let gradesKlaus = [65,91,84,67,85];
let gradesMaria = [93,70,81,64,84];
let gradesDavid = [81,99,71,100,69];

let grade = "F";
let classGrade = "F";

function getAverageGrade(array03) {
    let sum02 = 0;
    let average02 = 0;
    for(let i = 0; i < array03.length; i++) {
        sum02 += array03[i];
    };
    average02 = sum02 / array03.length;
    grade = checkGrade(average02);
    let result = [sum02, average02, grade];
    return result;
}

function checkGrade(average) {
    if (average < 60) {
        grade = "F";
    } else if (average < 70) {
        grade = "D";
    } else if (average < 80) {
        grade = "C";
    } else if (average < 90) {
        grade = "B";
    } else if (average < 100) {
        grade = "A";
    }
    return grade;
}

function getClassAverage() {
    let one = getAverageGrade(gradesMartin)[1];
    let two = getAverageGrade(gradesThomas)[1];
    let three = getAverageGrade(gradesKlaus)[1];
    let four = getAverageGrade(gradesMaria)[1];
    let five = getAverageGrade(gradesDavid)[1];

    let classSum = one + two + three + four + five;
    let classAvg = classSum / 5;
    classGrade = checkGrade(classAvg); 

    let classResult = classGrade;
    return classResult;
}

document.getElementById("martin").innerHTML = `Sum: ${getAverageGrade(gradesMartin)[0]}, Average: ${getAverageGrade(gradesMartin)[1]}, Grade: ${getAverageGrade(gradesMartin)[2]}`;

document.getElementById("thomas").innerHTML = `Sum: ${getAverageGrade(gradesThomas)[0]}, Average: ${getAverageGrade(gradesThomas)[1]}, Grade: ${getAverageGrade(gradesThomas)[2]}`;

document.getElementById("klaus").innerHTML = `Sum: ${getAverageGrade(gradesKlaus)[0]}, Average: ${getAverageGrade(gradesKlaus)[1]}, Grade: ${getAverageGrade(gradesKlaus)[2]}`;

document.getElementById("maria").innerHTML = `Sum: ${getAverageGrade(gradesMaria)[0]}, Average: ${getAverageGrade(gradesMaria)[1]}, Grade: ${getAverageGrade(gradesMaria)[2]}`;

document.getElementById("david").innerHTML = `Sum: ${getAverageGrade(gradesDavid)[0]}, Average: ${getAverageGrade(gradesDavid)[1]}, Grade: ${getAverageGrade(gradesDavid)[2]}`;

let classResultGrade = getClassAverage();
document.getElementById("classAverage").innerHTML = `Grade: ${classResultGrade}`;