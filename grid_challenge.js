// Hacker rank grid challenge
function gridChallenge(grid) {
    // use map to modify the grid such that;
    // each string in grid is sorted alphabetically
    grid = grid.map(string => {
        return string.split('').sort().join('')
    });
    console.log(grid)

    // get the first string in grid
    let first_string = grid[0];

    // loop through each char in first string
    for (let n = 0; n < first_string.length; n++) {
        // loop through each string in grid except the last one 
        // as it can't be compared with anything else
        for (let i = 0; i < grid.length - 1; i++) {
            let current_string = grid[i];
            let next_string = grid[i + 1]
            // console.log(current_string, next_string)
            // console.log(current_string[n], next_string[n])

            // check if the current string's nth character is alaphabettically
            // lower than the next string's nth character
            // if it not return string NO to break out of the loop and function
            if (!(current_string[n] < next_string[n])) return 'NO'
        }
    }
    // if the loop did not break/return then return string YES
    return 'YES'
}

// console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']))