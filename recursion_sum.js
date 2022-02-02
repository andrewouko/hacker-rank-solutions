function sum(numb) {
    if (numb == 1) return 1
    console.log(numb)
    return sum(numb - 1) + 1
}
console.log(sum(3))
