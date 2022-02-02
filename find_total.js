/** 
         * 1 point for even
         * 3 points for odd
         * 5 points for each 5
        */
 function find_total(my_numbers) {
    // Insert your code here 

    let sum = 0

    // loop to test add add points
    for (let i = 0; i < my_numbers.length; i++) {
        if (my_numbers[i] % 2 === 0) sum += 1
        else if (my_numbers[i] === 5) sum += 5
        else sum += 3
    }

    return sum
}
console.log(find_total([1, 2, 3, 4, 5]))
console.log(find_total([17, 19, 21]))
console.log(find_total([5, 5, 5]))