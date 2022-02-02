// New Year's chaos
function minimumBribes(queue) {
    // new array to store the queue in asc order
    // represents the original queue
    const qSorted = [...queue].sort()
    console.log('originaL', qSorted)
    console.log('current', queue)

    // bribe count
    let count = 0

    // loop through the original queue
    for (let i = 0; i < qSorted.length; i++) {

        // get the current position of person in queue
        let queue_index = queue.indexOf(qSorted[i])


        console.log('current', queue_index, 'original', i)
        // check if the current postion of person in queue is lower than the original position
        // if it is, update the bribe count
        if (queue_index < i) {
            // update the number of positions moved forward to the current count
            count += i - queue_index
        }

        // check if a person has bribed more than two people
        // that is, if the current position is more than two positions lower
        if (i - queue_index > 2) return 'Too chaotic'

    }
    return count
}
console.log(minimumBribes([2, 1, 5, 3, 4]))

console.log(minimumBribes([2, 5, 1, 3, 4]))