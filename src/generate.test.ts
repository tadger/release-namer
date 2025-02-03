import { describe, expect, test } from 'vitest'
import { generate } from './generate.js'

describe('release-namer', () => {
  test('should render a name', async () => {
    const expected = /([A-Z]+-[A-Z]+)/gi
    const out = generate()
    expect(out.toString()).toEqual(expect.stringMatching(expected))
  })
})
