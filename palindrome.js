// check if a string is a palindrome
function checkIfPalindrome(string) {
    // check if each of the characters in opposite side of the string  match
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[string.length - 1 - i]) continue
        else return false
    }
    return true
}

function checkIfPalindromeMiddleOut(string) {
    // get the midpoint of string
    const mid = (0 + string.length - 1) / 2
    // if string is of even length we will have two chars at middle
    let left = mid - 1, right = mid + 1
    if (string.length % 2 == 0) {
        left = Math.floor(mid)
        right = Math.floor(mid) + 1
    }

    console.log(mid, left, right)

    while (left >= 0 && right < string.length // if indices are within the string bounds
        && string[left] === string[right]) { // and the character match
        // expand out until the loop breaks
        left--
        right++
    }
    console.log(left, right)


}

// console.log(checkIfPalindrome('ABBA'))
// console.log(checkIfPalindrome('mierda'))
// console.log(checkIfPalindromeMiddleOut('ABBA'))