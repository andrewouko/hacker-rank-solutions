function parkingDillema(cars, k) {
    cars = cars.sort((a, b) => a - b)
    // console.log(cars)
    let shortest = cars[cars.length - 1] - cars[0] + 1
    for (let i = 0; i < cars.length; i++) {
        if (cars[(i + k - 1)]) {
            // distance between current element and next k - 1 cars
            // console.log(cars[i], cars[i + k - 1],  cars[i + k - 1] - cars[i] + 1)
            let distance = cars[i + k - 1] - cars[i] + 1
            if (distance < shortest) shortest = distance
        }
    }
    return shortest
}


// console.log(parkingDillema([ 2, 10, 8, 17 ], 3))
// console.log(parkingDillema([ 1, 2, 3, 10 ], 4))