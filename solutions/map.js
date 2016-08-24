module.exports = map

function map (collection, fn) {
    const result = []
    for (i = 0; i < collection.length; i++) {
        result[i] = fn(collection[i], i)
    }
    return result
}
