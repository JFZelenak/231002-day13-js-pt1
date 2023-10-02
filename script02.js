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
    // console.log(sum02);
    average02 = sum02 / array03.length;
    if (average02 < 60) {
        grade = "F";
    } else if (average02 < 70) {
        grade = "D";
    } else if (average02 < 80) {
        grade = "C";
    } else if (average02 < 90) {
        grade = "B";
    } else if (average02 < 100) {
        grade = "A";
    }
        
    let result = [sum02, average02, grade];
    return result;
    
}

function getClassAverage() {
    let one = getAverageGrade(gradesMartin)[1];
    let two = getAverageGrade(gradesThomas)[1];
    let three = getAverageGrade(gradesKlaus)[1];
    let four = getAverageGrade(gradesMaria)[1];
    let five = getAverageGrade(gradesDavid)[1];

    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);

    let classSum = one + two + three + four + five;

    console.log(classSum);

    let classAvg = classSum / 5;

    console.log(classAvg);

    if (classAvg < 60) {
        classGrade = "F";
    } else if (classAvg < 70) {
        classGrade = "D";
    } else if (classAvg < 80) {
        classGrade = "C";
    } else if (classAvg < 90) {
        classGrade = "B";
    } else if (classAvg < 100) {
        classGrade = "A";
    }

    console.log(classGrade);
    let classResult = classGrade;
    return classResult;
}

document.getElementById("martin").innerHTML = `Sum: ${getAverageGrade(gradesMartin)[0]}, Average: ${getAverageGrade(gradesMartin)[1]}, Grade: ${getAverageGrade(gradesMartin)[2]}`;

document.getElementById("thomas").innerHTML = `Sum: ${getAverageGrade(gradesThomas)[0]}, Average: ${getAverageGrade(gradesThomas)[1]}, Grade: ${getAverageGrade(gradesThomas)[2]}`;

document.getElementById("klaus").innerHTML = `Sum: ${getAverageGrade(gradesKlaus)[0]}, Average: ${getAverageGrade(gradesKlaus)[1]}, Grade: ${getAverageGrade(gradesKlaus)[2]}`;

document.getElementById("maria").innerHTML = `Sum: ${getAverageGrade(gradesMaria)[0]}, Average: ${getAverageGrade(gradesMaria)[1]}, Grade: ${getAverageGrade(gradesMaria)[2]}`;

document.getElementById("david").innerHTML = `Sum: ${getAverageGrade(gradesDavid)[0]}, Average: ${getAverageGrade(gradesDavid)[1]}, Grade: ${getAverageGrade(gradesDavid)[2]}`;

let classResultGrade = getClassAverage();
console.log(classResultGrade);

document.getElementById("classAverage").innerHTML = `Grade: ${classResultGrade}`;