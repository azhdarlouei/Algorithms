const array = [2, 4, 5, 8, 9, 14, 20, 26, 33, 67, 91, 100]

const binarySearch = (array, item) => {
    let low = 0
    let high = array.length - 1

    while (high >= low) {
        const mid = Math.floor((low + high) / 2)
        const guess = array[mid]

        if (item === guess) {
            return mid
        } else if (item < guess) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return -1
}

console.log(binarySearch(array, 14))