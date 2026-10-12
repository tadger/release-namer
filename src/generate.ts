import Haikunator, { type Config } from 'haikunator'
import { adjectives } from './words/adjectives.js'
import { nouns } from './words/nouns.js'

const defaultConfig = { tokenLength: 0, delimiter: '-' }

export type GenerateOptions = Partial<Config> & {
  adjectives?: string[]
  nouns?: string[]
}

export function generate(options: GenerateOptions = {}) {
  const {
    adjectives: customAdjectives,
    nouns: customNouns,
    ...config
  } = options
  const params = { ...defaultConfig, ...config }

  const haikunator = new Haikunator({
    adjectives: customAdjectives ?? adjectives,
    nouns: customNouns ?? nouns,
    seed: new Date().getTime().toString(),
    defaults: {
      tokenLength: 0,
    },
  })

  return haikunator.haikunate(params)
}
