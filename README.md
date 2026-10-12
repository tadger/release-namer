# release-namer
A tool for generating random release names

## Usage in JavaScript/Typescript:

```bash
$ npm install @farts/release-namer
```

```javascript
const { generate } = require('@farts/release-namer')

// es6
import { generate } from '@farts/release-namer'
```

## Global CLI usage:

```bash
$ npm install -g @farts/release-namer

# once installed, use it from any terminal session
$ release-namer
```

### ... or just:

```bash
$ npx @farts/release-namer
```

## Flags (only available using CLI):

`--plain-text` or `-t`: Removes the default formatting and simply writes a plain-text string to `stdout` *(This is useful for scripts or CI actions that need to generate a name for a release)*
## Local development

```sh
npm run generate                      # one name from the built-in lists
npm run generate -- -n 5 -d _         # five names joined with "_"
npm run generate -- -a adj.txt -o nouns.txt
npm run generate -- --help
```
