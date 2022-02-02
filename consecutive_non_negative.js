// Find a solution to ensure two consecutive elements do not add up to a negative number
function solutionCount(A) {
    console.log(A)
    let sum = 0, count = 0
    for (let i = 0; i < A.length; i++) {
        /* let v = A[i]
        console.log('v',v, 'i', i)
        // check if postive hence a revenue
        sum += v
        console.log('sum', sum)
        if(sum < 0){
            count++
            A.splice(i, 1)
            A.push(v)
            i--
            // console.log()
            console.log(A, count)
        } */
        let curr = A[i]
        let next = A[i + 1]
        console.log('curr', curr, 'next', next)
        if (curr + next < 0) {
            count++
            A.splice(A.indexOf(curr), 1)
            A.push(curr)
            console.log(A, count)
        }

    }

    console.log(A, count)
    return count
}
// console.log(solutionCount([10, -10, -1, -1, 10]))
// console.log(solutionCount([-1, -1, -1, 1, 1, 1, 1]))

// Cleaning robot
// ['.','.','.','X','.','.'],['']