const test = require('tape')
const testRequire = require('./helpers/testRequire.js')

test('===REDUCE===', t => {
    path = 'functional-library/reduce.js'
    const reduce = testRequire(t, path)

    t.test('... returns undefined for an empty array when there is no starting value', t => {
        const result = reduce([], addThemUp)
        t.notOk(result)
        t.end()
    })

    t.test('... returns the starting value for an empty array', t => {
        const result = reduce([], addThemUp, 55)
        t.equals(result, 55)
        t.end()
    })

    t.test('... reduces against the collection, starting with the starting value', t => {
        const result = reduce([20, 5], addThemUp, 55)
        t.equals(result, 80)
        t.end()
    })

    t.test('... uses the first value in the collection as the starting value when none is given', t => {
        const result = reduce([20, 5], addThemUp)
        t.equals(result, 25)
        t.end()
    })

    t.test('... passes the index of the current item as the third parameter to the callback, starting at index 1 when there is no starting value', t => {
        const result = reduce([1,1,1], sumMultiplyWithIndex)
        t.equals(result, 6)
        t.end()
    })

    t.test('... passes the index of the current item as the third parameter to the callback, starting at index 0 when there is a starting value', t => {
        const result = reduce([1,1,1], sumMultiplyWithIndex, 55)
        t.equals(result, 4)
        t.end()
    })

    t.end()
})

function addThemUp (previousValue, currentValue) {
    return previousValue + currentValue
}

function sumMultiplyWithIndex (previousValue, currentValue, index) {
    return (previousValue + currentValue) * index
}
