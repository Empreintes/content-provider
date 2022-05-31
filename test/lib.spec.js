"use strict"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { contentProvider } = require('../dist/')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {describe,it} = require('mocha')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const assert = require('assert')

describe("Content Provider", () => {
    const testArgs = {
        base_path: "test/views",
        file_extension: "html"
    }
    const cp = contentProvider(testArgs)
    it("basic usage", () => {
        assert.equal(cp('stuff'), '👌')
        assert.equal(cp('a.path.very.long.and.boring.hey'), '👍')
    })
})
