/** 
         * Get product of lowercase letters 
         * cnt1 --> number of vowels
         * cnt2 --> number of consonants with even numerical value
         * cnt3 --> number of consonants with odd numerical value
        */
 function productFromString(s_array) {
    //Insert your code here 
    let cnt1 = 0, cnt2 = 0, cnt3 = 0

    for (let i = 0; i < s_array.length; i++) {
        // check for vowels
        if (['a', 'e', 'i', 'o', 'u'].includes(s_array[i])) cnt1++
        // check the consonants
        else {
            let number = s_array[i].charCodeAt(0) - 96
            // even numerical value
            if (number % 2 === 0) cnt2++
            else cnt3++
        }
    }
    return cnt1 * cnt2 * cnt3
}
console.log(productFromString(['a', 'b', 'c']))