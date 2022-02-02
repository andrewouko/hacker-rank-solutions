/** 
         * Two sum
         * 
         * find the sum of two numbers in array that add up to the target
        */
 function twoSum(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            // console.log(nums[i], nums[j], target)
            if ((nums[i] + nums[j]) == target) return [i, j]
        }
    }
}
console.log(twoSum([1, 3, 5, 7, 9], 10))

/** 
         * Two sum
         * 
         * find the sum of two numbers in array that add up to the target
         * 
         * using a hashmap to speed up the time complexity
        */
 function twoSumHashMap(nums, target) {
    let map = {}
    for (i = 0; i < nums.length; i++) {
        let complement_pair = target - nums[i]
        // console.log(nums[i], complement_pair, map)

        // add the current number to map
        // if the complement_pair does not exist
        if (!map[complement_pair])
            map[nums[i]] = i
        // return the complement_pair key's value
        // and the current index
        else return [map[complement_pair], i]
    }
}
console.log(twoSumHashMap([1, 3, 5, 7, 9], 10))
