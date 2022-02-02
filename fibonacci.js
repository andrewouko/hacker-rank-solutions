// get the fibonnaci number at position n
function fibo(n) {
    // assume n is only integers

    // recursive step (for n>= 3 n = sum of two previous solutions to the fibo function)
    if (n >= 3) return fibo(n - 1) + fibo(n - 2)
    // base case (for n = 1 || n = 2)
    return 1
}
// console.log(fibo(5))