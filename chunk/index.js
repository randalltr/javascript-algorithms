// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, index + size))
        index = index + size;
    }
    return chunked;
}

console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

module.exports = chunk;

// function chunk(unchunked, size) {
//     // create empty array to hold chunks called 'chunked'
//     const chunked = [];
//     // for each element in 'unchunked' array
//     for (let element of unchunked) {
//         const last = chunked[chunked.length - 1];
//     // retrieve last element in 'chunked'
//         if (!last || last.length === size) {
//     // if last element does not exist or if length equal to chunk size
//             chunked.push([element]);
//     // push a new chunk into 'chunked' with the current element
//         } else {
//     // else add the current element into the chunk
//             last.push(element);
//     } }
//     return chunked;
// }