import Haikunator, { type Config } from 'haikunator'
import * as namor from 'namor'

const defaultConfig = { tokenLength: 0, delimiter: '-' }

export function generate(config?: Partial<Config>) {
  const params = { ...defaultConfig, ...config }
  const { nouns, adjectives } = namor.rawData.rugged

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
