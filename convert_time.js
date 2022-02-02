/** 
         * Convert to 24 hour time
        */
 function convertTime(string) {
    string = string.replace('AM', '')
    let time = string.split(':')
    let hours = parseInt(time[0], 10)

    hours += 12
    if (hours >= 24) hours -= 24

    time[0] = ('00' + hours).slice(-2)
    return time.join(':')
}

console.log(convertTime('12:01:00AM'))
console.log(convertTime('07:05:45PM'))