#!/usr/bin/env node

const path = require('path')
const boxen = require('boxen')
const chalk = require('chalk')
const { bold } = require('chalk')
const { generate } = require('./generate')
const { name, version } = require(path.resolve(process.cwd(), 'package.json'))

const strong = '#f36'
const muted = '#999'

const content = [
  chalk.hex(strong).bold(generate()),
  name + chalk.hex(muted).bold('@v' + version),
].join('\n')

const box = boxen(content, {
  borderColor: strong,
  borderStyle: 'round',
  margin: 1,
  padding: 2,
})

process.stdout.write(box + '\n')
