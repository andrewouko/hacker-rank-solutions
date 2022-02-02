// number of substrings that have the same number of 1s and 0s
function countBinarySubstrings(string) {
    /** 
     * Init vars
     * 
     * current tracks the number of similar characters we found in string
     * previous keeps track of the prevous number of similar characters we found
     * result is the number of valid substrings counted
    */
    let current = 0, previous = 0, result = 0
    for (let i = 1; i < string.length; i++) {
        // increment current if similar binary digit found
        if (string[i] == string[i - 1]) current++
        // if a different binary digit is found
        // set the previous to the current count of similar chars found
        // reset the current count to 1 as we starting to count a different type of digit
        else {
            previous = current
            current = 1
        }
        // as long as we have a a greater equal amount of the opposite char(stored in previous)
        // and current char we have a valid substring
        if (previous >= current) result++
    }
    return result
}
console.log(countBinarySubstrings('00001110011'))