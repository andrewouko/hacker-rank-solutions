function factorial(n) {
    // assume n is only positive integers and 0

    // recursive step (for n>= 1 n = the product of n and the previous solution to the factorial)
    if (n >= 1) return n * factorial(n - 1)
    // base case (for n = 0)
    else return 1
}
// console.log(factorial(5))