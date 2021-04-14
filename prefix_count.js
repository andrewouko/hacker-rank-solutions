function test(arr) {
    let prefix = "";
    for(let i; i<first.length; i++){
        next_char = arr[0][k];

        for (j = 0; j < arr.length; j++) {
            if (arr[j][k] != next_char) {
                return prefix;
            }
        }
        prefix = prefix + next_char;
    }
}