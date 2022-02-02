/** 
         * Find all duplicates in array
         * 
         * Numbers are between 1 and n
         * 
         * Solution 3 implementation (Refer to handwritten notes)
        */
 function findDuplicates(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let index = Math.abs(arr[i])

        // check if the nth element is negative
        // if negative we add it to the result set
        // e.g if the index is 4
        // we check if 4th element in arr is negative
        // if it is negative we add it to the result set
        // we mark the 4th element as negative
        if (arr[index - 1] < 0) result.push(Math.abs(arr[index - 1]))

        arr[index - 1] *= -1

    }

    return result
}
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))