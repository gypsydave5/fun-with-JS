module.exports = each

function each(collection, fn) {
    for (i = 0; i < collection.length; i++) {
        fn(collection[i], i)
    }
}
