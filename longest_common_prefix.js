// longest common prefix
function getLongestCommonPrefix(strs) {
    first = strs[0]
    let prefix = ''
    // loop through all the letters in first string
    for (let i = 0; i < first.length; i++) {
        // current char in first string for comparison against the rest of the strings
        let current = first[i]

        // loop through all the other strings
        for (let j = 1; j < strs.length; j++) {
            // compare current char in the first string against the current char in the current other string
            // if there is a mismatch return the current state of the prefix string
            if (current != strs[j][i]) return prefix
        }

        // if the loop hasn't broken (returned) then the current character is added to the prefix string
        // as it exists in all the string elements
        prefix += current
    }
}

// console.log(getLongestCommonPrefix( ["flower","flow","flight"]) )