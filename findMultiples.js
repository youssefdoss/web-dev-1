/**
 * findNumFreqs: Creates a frequency counter for the number of times
 * each number appears in the given array
 * 
 * nums: array
 * 
 * return: object
 */
function findNumFreqs(nums) {
    let freqs = {};

    for (let num of nums) {
        const curr = freqs[num] || 0;
        freqs[num] = curr + 1;
    }

    return freqs;
}

/**
 * findMultiples: returns an array of the numbers found in an array of numbers
 * that appear more than the designated minimum number of times
 * 
 * nums: array
 * minimumCount; number
 * 
 * return: array
 */

// TODO: MAKE IT RUN FASTER IT CAN'T USE INCLUDES
function findMultiples(nums, minimumCount) {
    const numFreqs = findNumFreqs(nums);
    let numerousNums = [];

    for (let num of nums) {

        if (numFreqs[num] >= minimumCount && !numerousNums.includes(num)) {
            numerousNums.push(num);
        }
    }

    return numerousNums;
}
