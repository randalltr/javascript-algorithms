// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);    
}

module.exports = reverseInt;

// function reverseInt(n) {
//     if (n < 0) {
//         return Number("-" + String(Math.abs(n)).split("").reverse().join(""));
//     } else {
//         return Number(String(n).split("").reverse().join(""));
//     }