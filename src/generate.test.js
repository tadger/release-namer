'use strict'

const { generate } = require('./generate')

describe('release-namer', () => {
  test('should render a name', async () => {
    const expected = /([A-Z]+-[A-Z]+)/gi
    const out = generate()
    expect(out.toString()).toEqual(expect.stringMatching(expected))
  })
})
