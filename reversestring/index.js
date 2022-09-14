// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + (str.charAt(0));
    }
}

module.exports = reverse;


///// Solution with split reverse join methods
// function reverse(str) {
//     return str.split("").reverse().join("");
// }

///// Solution with decrementing for loop
// function reverse(str) {
//     let reverseString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseString += str[i];
//     }
//     return reverseString;
// }