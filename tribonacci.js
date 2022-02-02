/** 
         * Get the tribonacci number at position n
         * Next element is determined by the sum of the preceding 3 elements
         * The signature contains the first 3 elements of the sequence
        */
 function tribonacci(signature, n) {
    if (n <= 0) return 0
    else if (n >= 4) return tribonacci(signature, n - 1) + tribonacci(signature, n - 2) + tribonacci(signature, n - 3)
    else return signature[n - 1]
}
console.log(tribonacci([0, 0, 1], 9))

/** 
         * Print n tribonacci numbers
         * Next element is determined by the sum of the preceding 3 elements
         * The signature contains the first 3 elements of the sequence
        */
 function printTribonacci(signature, n) {
    let result = [...signature]
    for (let i = signature.length; i < n; i++) {
        let next = result[result.length - 1] + result[result.length - 2] + result[result.length - 3]
        result.push(next)
    }
    return result
}
console.log(printTribonacci([0, 0, 1], 9))