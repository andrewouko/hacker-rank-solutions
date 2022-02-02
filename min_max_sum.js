/** Min max sum function
         * 
         * Return the highest and the lowest sum 
         * 
         * of 4 numbers in any given 5 number array
         * 
         * */
 function minMaxSum(arr) {
    const min = Math.min(...arr)
    const max = Math.max(...arr)

    const sum = arr.reduce((a, b) => a + b)

    const max_sum = sum - min
    const min_sum = sum - max

    return `${min_sum} ${max_sum}`
}

console.log(minMaxSum([1, 3, 5, 7, 9]))