'use strict'

const { execSync } = require('child_process')

describe('release-namer', () => {
  test('should render a name', async () => {
    const expected = /(?<= +)([A-Z]+-[A-Z]+)(?= +)/gim
    var out = execSync('node ./src/index.js')
    expect(out.toString()).toEqual(expect.stringMatching(expected))
  })
})
