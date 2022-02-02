function median(arr) {
    const sorted_arr = arr.sort((a, b) => a - b)
    // console.log(sorted_arr)

    let mid = Math.floor(sorted_arr.length / 2)

    return sorted_arr[mid]
}
console.log(median(['5', '3', '1', '2', '4']))