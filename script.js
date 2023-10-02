
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