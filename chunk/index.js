// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(unchunked, size) {
    // create empty array to hold chunks called 'chunked'
    chunked = [];
    // for each element in 'unchunked' array
    for (let element in unchunked) {
    // retrieve last element in 'chunked'
        if (!chunked[-1] || chunked[-1].length === size) {
    // if last element does not exist or if length equal to chunk size
            [element].push(chunked);
    // push a new chunk into 'chunked' with the current element
        } else {
    // else add the current element into the chunk
            chunked[-1] += element;
    } }

}

console.log(chunk([1, 2, 3, 4], 2))

module.exports = chunk;
