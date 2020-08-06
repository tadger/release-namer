const Haikunator = require('haikunator')
const { rawData } = require('namor')

const defaultConfig = { tokenLength: 0, delimiter: '-' }

function generate(config) {
  const params = { ...defaultConfig, ...config }
  const { nouns, adjectives } = rawData.manly

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

exports.generate = generate
