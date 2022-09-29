// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    result = []
    hash = ""
    for (i = 0; i < n; i++) {
        for (j = 0; j <= i; j++) {
            hash += "#"
        }
        result.push(hash);
    }
    return result;
}

console.log(steps(3));

module.exports = steps;
