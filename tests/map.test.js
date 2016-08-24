const test = require('tape')
const testRequire = require('./helpers/testRequire.js')

test('===MAP===', t => {
    mapPath = 'functional-library/map.js'
    const map = testRequire(t, mapPath)

    t.test('... returns an array of the same length', t => {
        const result = map([1,2], increment)
        t.equal(result.length, 2)
        t.end()
    })

    t.test('... passes each item in the array as the first parameter of its callback', t => {
        const result = map([1,2], increment)
        t.equal(result[0], 2)
        t.equal(result[1], 3)
        t.end()
    })

    t.test('... returns an empty array when given an empty array', t => {
        const result = map([], n => t.fail('should not be called'))
        t.same(result, [])
        t.end()
    })

    t.test('... passes each index of the array as the second parameter of its callback', t => {
        result = map([10, 10, 10], addTheIndex)
        t.equal(result[0], 10)
        t.equal(result[1], 11)
        t.equal(result[2], 12)
        t.end()
    })

    t.end()
})

function increment(number) {
    return number + 1
}

function addTheIndex(number, index) {
    return number + index
}
