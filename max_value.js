/** 
         * Get the maximum value of two numbers
         * after +, -, * and / operations
        */
 function maxvalue(arr) {
    //Insert your code here 
    let max = 0

    // operations
    const operations = [
        arr.reduce((a, b) => a + b),
        arr.reduce((a, b) => a - b),
        arr.reduce((a, b) => a * b),
        arr.reduce((a, b) => a / b)
    ]

    console.log(operations)

    // check for math errors
    if (!operations.every(result => ![Infinity, -Infinity, NaN].includes(result))) return 'Undefined behavior'

    return Math.max(...operations)

}

console.log(maxvalue([5, 5]))
