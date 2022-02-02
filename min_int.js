// get the minimum integer not in the input array
function solutionDemo(A) {
    // sort and filter positive integers
    const arr = A.sort((a, b) => a - b).filter(v => v >= 1)

    let x = 1
    for (let i = 0; i < arr.length; i++) {
        console.log(x, arr[i])
        // since x is less than return it
        if (x < arr[i])
            return x
        else
            // increment x to the next value
            x = arr[i] + 1
    }

    return x

}
// console.log(solution( [1, 3, 6, 4, 1, 2]))