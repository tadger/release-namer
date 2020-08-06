'use strict'

const { execSync } = require('child_process')

describe('release-namer', () => {
  test('should render a name', async () => {
    const expected = /(?<= +)([A-Z]+-[A-Z]+)(?= +)/gim
    const out = execSync('node ./src/cli.js')
    expect(out.toString()).toEqual(expect.stringMatching(expected))
  })
})
