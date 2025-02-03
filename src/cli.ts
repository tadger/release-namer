#!/usr/bin/env ts-node

import { readFileSync } from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import boxen, { type Options } from 'boxen'
import chalk from 'chalk'
import meow from 'meow'

import { generate } from './generate.js'

const cli = meow(
  `
  Usage
    $ release-namer <input>

  Options
    --plain-text, -t  Output unformatted plain text

  Examples
    $ release-namer
    $ release-namer --plain-text
    $ release-namer -t
`,
  {
    importMeta: import.meta,
    flags: {
      plainText: {
        type: 'boolean',
        shortFlag: 't',
      },
    },
  },
)

const strong = '#f36'
const muted = '#999'
const generated = generate()
const formatted = chalk.hex(strong).bold(`${generated}\n`)

if (cli.flags.plainText) {
  process.stdout.write(formatted)
} else {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const packageJson = JSON.parse(
    readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8'),
  )
  const { name, version } = packageJson

  const content = [
    formatted,
    name + chalk.hex(muted).bold(`@v${version}`),
  ].join('\n')

  const options: Options = {
    borderColor: strong,
    borderStyle: 'round',
    margin: 1,
    padding: 2,
  }

  const box = boxen(content, options)

  process.stdout.write(`${box}\n`)
}
