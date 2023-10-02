
// basic exercise 1 - highest value in array
let highestValue = 0;

function getHighestValueInArray(array1) {
    for (let i = 0; i < array1.length; i++) {
        
        if (array1[i] > highestValue) {
            highestValue = array1[i];
        }
    }
    return highestValue;
}

console.log(getHighestValueInArray([1,2,3,4,5]));
console.log(getHighestValueInArray([10,30,20,100,70]));


// random number generator
function randomNumber(min, max) {
    let randomNr = Math.floor(Math.random()*(max - min+1)+min);
    return randomNr;
}

// ex 1 | Temperature v1.0
document.getElementById("btn01").addEventListener("click",function() {
    let message01 = calcTemp1();
    document.getElementById("output01").innerHTML = message01;
});

let imageCold = "url(\"./images/cold.jpg\")";
let imageModerate = "url(\"./images/moderate.jpg\")";
let imageHot = "url(\"./images/hot.jpg\")";

function calcTemp1() {
    let todaysTemp = randomNumber(-5,42);
    message01 = "";
    if (todaysTemp <= 10) {
        message01 = ` ${todaysTemp}c. The temperature is cold`;
        document.getElementById("card01").style.backgroundImage = imageCold;
    } else if (todaysTemp >= 32) {
        message01 = ` ${todaysTemp}c. The temperature is hot`;
        document.getElementById("card01").style.backgroundImage = imageHot;
    } else {
        message01 = ` ${todaysTemp}c. The temperature is moderate`;
        document.getElementById("card01").style.backgroundImage = imageModerate;
    }
    return message01;
}

// Intermediate ex 1 | Compare two numbers
let gradesMartin = [76,64,81,57,94];
let gradesThomas = [85,49,81,72,55];
let gradesKlaus = [65,91,84,67,85];
let gradesMaria = [93,70,81,64,84];
let gradesDavid = [81,99,71,100,69];

let sum02 = 0;
let average02 = 0;
let grade = "F";

function getAverageGrade(array03) {
    for(let i = 0, len = array03.length; i < len; i++) {
        sum02 += array03[i];
    }
    console.log(sum02);
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

console.log(getAverageGrade(gradesMartin));


document.getElementById("martinSum").innerHTML = getAverageGrade(gradesMartin)[0];
document.getElementById("martinAverage").innerHTML = getAverageGrade(gradesMartin)[1];
document.getElementById("martinGrade").innerHTML = getAverageGrade(gradesMartin)[2];

// document.getElementById("thomas").innerHTML = getAverageGrade(gradesThomas);
// document.getElementById("klaus").innerHTML = getAverageGrade(gradesKlaus);
// document.getElementById("maria").innerHTML = getAverageGrade(gradesMaria);
// document.getElementById("david").innerHTML = getAverageGrade(gradesDavid);