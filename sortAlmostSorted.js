/**
 * sortAlmostSorted: takes an array of almost sorted numbers with
 * one pair of numbers out of order and returns a sorted array
 * 
 * almostSortedNums: array
 * 
 * return: array
 */
function sortAlmostSorted(almostSorted) {
    for (let i = almostSorted.length - 1; i > 0; i--) {
        
        if (almostSorted[i] < almostSorted[i - 1]) {
            let j = i - 1;

            while (j > -1 && almostSorted[i] < almostSorted[j]) {
                j--;
            }

            [almostSorted[i], almostSorted[j + 1]] = [almostSorted[j + 1], almostSorted[i]];

            break;
        }
    }
    
    return almostSorted;
}