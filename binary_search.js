// search for target element in a sorted array
function binarySearch(arr, target) {
    if (!arr || !arr.length) return 'No array'
    // left and right indices initialisation
    let left = 0;
    right = arr.length - 1


    // repeat the searching until the right and left indices cross(switch sides)
    // that is the right index is >= to the left index
    // if it is less than this shows we have searched the entire array and not found the target
    while (right >= left) {
        // get the midpoint index
        let mid = Math.floor((left + right) / 2)


        console.log('right', right, 'left', left, 'mid', mid)

        // if the value at the mid point is equal to the target 
        // return the mid point index
        if (arr[mid] == target) return mid

        // if the mid point value is > target
        // move the right pointer to the left
        // to search on the left side
        if (target < arr[mid]) right = mid - 1

        // if the mid point value is < target
        // move the left pointer to the right
        // to search on the right side

        if (target > arr[mid]) left = mid + 1

        console.log('right', right, 'left', left, 'mid', mid)
    }
    return -1
}
// console.log(binarySearch([-2, 3, 4, 7, 8, 9, 11, 13], 11))

// shifted binary search
function shiftedBinarySearch(arr, target) {
    if (!arr || !arr.length) return 'No array'

    // init the left and right indices
    let left = 0;
    let right = arr.length - 1

    // get the pivot index
    while (left < right) {
        // get the mid index
        let mid = Math.floor((left + right) / 2)

        // if the value at the mid > value at the right index
        // move the left pointer
        if (arr[mid] > arr[right]) left = mid + 1

        // otherwise if the value at the mid is <=
        // move the right pointer
        else right = mid - 1
    }


    // reset index and keep track of pivot index
    let start = left
    left = 0;
    right = arr.length - 1

    // determine the side of the rotated array to search from
    // make the search area the right side
    // if the target is within the pivot and index and the extreme right index
    if (target >= arr[start] && target <= arr[right]) left = start

    // make the search area to the left side
    // 

}

// console.log(shiftedBinarySearch([4,5,6,7,0,1,2], 0))
