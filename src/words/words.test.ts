import { describe, expect, test } from 'vitest'
import { adjectives } from './adjectives.js'
import { nouns } from './nouns.js'

describe.each([
  ['adjectives', adjectives],
  ['nouns', nouns],
])('%s', (_name, words) => {
  test('are non-empty, unique, lowercase single words', () => {
    expect(words.length).toBeGreaterThan(0)
    expect(new Set(words).size).toBe(words.length)
    for (const word of words) expect(word).toMatch(/^[a-z]+$/)
  })
})
