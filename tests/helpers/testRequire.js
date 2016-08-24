module.exports = testRequire

function testRequire(t, path) {
    let module
    try {
        module = require(__dirname + '/../../' + path)
    } catch (e) {
        t.fail('Could not find "' + path + '" - have you implemented it?')
        t.end()
        process.exit()
    }

    if (typeof module !== 'function') {
        t.fail('"' + path + '" does not export a function')
        t.end()
        process.exit()
    }

    return module
}

