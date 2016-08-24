const test = require('tape')
const testRequire = require('./helpers/testRequire.js')

test('===EACH===', t => {
    eachPath = 'functional-library/each.js'
    const each = testRequire(t, eachPath)

    t.test('... passes each item in the array as the first parameter of its callback', t => {
        const testArray = []
        each([1, 2], n => testArray.push(n))
        t.equal(testArray[0], 1, 'each has side effects!')
        t.equal(testArray[1], 2, 'each reaches the second item')
        t.end()
    })

    t.test('... never calls its callback for an empty array', t => {
        each([], n => t.fail('each should not call its function for an empty array'))
        t.end()
    })

    t.test('... passes each index of the array as the second parameter of its callback', t => {
        const testArray = []
        each(['bob', 'joe'], (name, index) => testArray.push(name + ' ' + index))
        t.equal(testArray[0], 'bob 0')
        t.equal(testArray[1], 'joe 1')
        t.end()
    })

    t.end()
})