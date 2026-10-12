import Haikunator, { type Config } from 'haikunator'
import { adjectives } from './words/adjectives.js'
import { nouns } from './words/nouns.js'

const defaultConfig = { tokenLength: 0, delimiter: '-' }

export function generate(config?: Partial<Config>) {
  const params = { ...defaultConfig, ...config }

  const haikunator = new Haikunator({
    adjectives,
    nouns,
    seed: new Date().getTime().toString(),
    defaults: {
      tokenLength: 0,
    },
  })

  return haikunator.haikunate(params)
}
