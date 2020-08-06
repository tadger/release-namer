#!/usr/bin/env node

const path = require('path')
const Haikunator = require('haikunator')
const { rawData } = require('namor')
const boxen = require('boxen')
const chalk = require('chalk')
const { bold } = require('chalk')
const { name, version } = require(path.resolve(process.cwd(), 'package.json'))

const { nouns, adjectives } = rawData.manly

const haikunator = new Haikunator({
  adjectives,
  nouns,
  seed: new Date().getTime().toString(),
  defaults: {
    tokenLength: 0,
  },
})

const releaseName = haikunator.haikunate({
  tokenLength: 0,
  delimiter: '-',
})

const strong = '#f36'
const muted = '#999'

const content = [
  chalk.hex(strong).bold(releaseName),
  name + chalk.hex(muted).bold('@v' + version),
].join('\n')

const box = boxen(content, {
  borderColor: strong,
  borderStyle: 'round',
  margin: 1,
  padding: 2,
})

process.stdout.write(box + '\n')
