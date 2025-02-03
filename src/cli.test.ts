import { execSync } from 'child_process'
import { describe, expect, test } from 'vitest'

describe('release-namer', () => {
  test('should render a name', async () => {
    const expected = /(?<= +)([A-Z]+-[A-Z]+)(?= +)/gim
    const out = execSync('npm run cli')
    expect(out.toString()).toEqual(expect.stringMatching(expected))
  })
})
