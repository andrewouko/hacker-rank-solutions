/** 
         * Stack operations
         * Debug the code to ensure it works correctly
        */
 function stack(stackOperation, stackValue = null) {

    const stackHolder = {
        count: 4,
        storage: [
            1,
            '{id: 1,value: "obj"}',
            "stringHolder",
            46
        ]
    };
    const push = function (value) {
        stackHolder.storage[stackHolder.count] = value;
        stackHolder.count++
        return stackHolder.storage;
    }

    const pop = function () {
        if (stackHolder.count <= 0) {
            return [];
        }

        const poppedItem = stackHolder.storage[stackHolder.count - 1];
        stackHolder.storage.splice(stackHolder.count - 1, 1)
        stackHolder.count--;
        return [poppedItem];
    }

    const peek = function () {
        return [stackHolder.storage[stackHolder.count - 1]];
    }

    const swap = function () {
        const top = stackHolder.count - 1
        const temp = stackHolder.storage[top]
        stackHolder.storage[top] = stackHolder.storage[top - 1]
        stackHolder.storage[top - 1] = temp
        return stackHolder.storage;
    }

    switch (stackOperation) {
        case 'push':
            return push(stackValue);
        case 'pop':
            return pop();
        case 'swap':
            return swap();
        case 'peek':
            return peek();
        default:
            return stackHolder.storage;
    }
}
console.log(stack('push', 'new item'))
console.log(stack('pop'))
console.log(stack('peek'))
console.log(stack('swap'))
// console.log(stackHolder)