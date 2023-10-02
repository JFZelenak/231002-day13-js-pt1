// for (let i = 1; i < 101; i++) {
//     if (i % 15 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

function fizzBuzz(start, end) {
    let answer = "";
    for (let i = start; i < (end+1); i++) {
        if (i % 15 === 0) {
            answer += " FizzBuzz";
        } else if (i % 3 === 0) {
            answer += " Fizz";
        } else if (i % 5 === 0) {
            answer += " Buzz";
        } else {
            answer += " " + i;
        }
    }
    return answer;
}

let message = fizzBuzz(1, 100);
document.getElementById("solution").innerHTML = message;