// fun with anagrams
function funWithAnagrams(text) {
    // Write your code here
    let result = []

    // loop through all elements in array
    for (let i = 0; i < text.length; i++) {
        // console.log('i', i)
        // current element in array
        let current = text[i]
        console.log('current', current)

        // loop through all elements from current one
        for (let j = (i + 1); j < text.length; j++) {
            // comparison element
            let compare = text[j]
            console.log('compare', compare)
            console.log(current.split('').sort().join(''), compare.split('').sort().join(''))

            // sort both current and compare if equal to see if they are anagrams
            // console.log(j, current.split('').sort().join(''), compare.split('').sort().join(''))
            // if equal they are anagrams
            // remove current comparison element from text array
            if (current.split('').sort().join('') == compare.split('').sort().join('')) {
                text.splice(j, 1)

                // console.log(text)
                // result.push(current)
            }
            console.log(text)
        }
    }
    return text

}

console.log(funWithAnagrams(["code", "aaagmnrs", "anagrams", "doce"]))

console.log(funWithAnagrams(["poke", "pkoe", "okpe", "ekop"]))