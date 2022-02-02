// Given a string S with columns & rows get sum of column C
function solution(S, C) {
    const arr = S.split('\n').map(col => col.split(','))
    // console.log(arr)
    const index = arr[0].indexOf(C)
    const c_arr = arr.map(v => v[index]).filter((v, i) => i > 0)
    // console.log(c_arr)
    const min = Math.min(...c_arr)
    // console.log(min)
    return min
}
solution("id,name,age,act.,room,dep.\n1,Jack,68,T,13,8\n17,Betty,28,F,15,7", "age")
solution("area,land\n3722,CN\n6612,RU\n3855,CA\n3797,USA", "area")