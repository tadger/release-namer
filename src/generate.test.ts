import { describe, expect, test } from 'vitest'
import { generate } from './generate.js'

describe('release-namer', () => {
  test('should render a name', async () => {
    const expected = /([A-Z]+-[A-Z]+)/gi
    const out = generate()
    expect(out.toString()).toEqual(expect.stringMatching(expected))
  })
})

describe('generate options', () => {
  test('uses a custom delimiter and word lists', () => {
    expect(
      generate({ delimiter: '_', adjectives: ['big'], nouns: ['cat'] }),
    ).toBe('big_cat')
  })
})
