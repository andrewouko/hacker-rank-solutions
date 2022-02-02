 // m from the back
 function mFromBack(l, m) {
    let reverse = []
    let r_index = 0
    let start = (l.length - 1)
    while (start > -1) {
        reverse[r_index] = l[start]
        start--
        r_index++
    }
    // console.log(reverse)
    for (let i = 1; i <= l.length; i++) {
        if (i == m) return console.log(reverse[(i - 1)])
    }
    console.log('NIL')
}
mFromBack([10, 200, 3, 40000, 5], 4)
mFromBack([42], 2)