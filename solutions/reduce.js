module.exports = reduce

function reduce (array, callback, initialValue) {
    let result = initialValue || array[0]
    let i = 0
    if (!initialValue) { i++ }

    for (i; i < array.length; i++) {
        result = callback(result, array[i], i)
    }

    return result
}
