function uniqueValidNumbers(N, inputArray) {
    // sort the array
    const sorted = [...inputArray].sort((a, b) => a -b)

    // console.log(sorted)

    // console.log(inputArray)

    let count = 0

    for(let i = 0; i < N; i++) {
        // check if duplicate
        if(sorted[i] === sorted[i + 1]) {
            let cur_index = inputArray.indexOf(sorted[i])

            // mark the current index's value as negative
            // in the input array
            // to avoid searching for it again
            inputArray[cur_index] *= -1

            let next_index = inputArray.indexOf(sorted[i + 1])
            // console.log('cur', cur_index, 'next', next_index)
            // console.log(inputArray)

            
            // check if index of next is divisible by index of current
            if(next_index % cur_index === 0) count++
        } else count++
    }
    return count

}
console.log(uniqueValidNumbers(5, [1, 2, 1, 2, 2]))