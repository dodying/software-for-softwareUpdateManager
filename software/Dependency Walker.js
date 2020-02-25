'use strict'

let data = {
  url: 'http://dependencywalker.com/',
  version: '[size="4"]>[href^="depends"][href$="x64.zip"]',
  download: '[size="4"]>[href^="depends"][href$="x64.zip"]',
  install: 'install',
  other: {
    'x86': {
      version: '[size="4"]>[href^="depends"][href$="x86.zip"]',
      download: '[size="4"]>[href^="depends"][href$="x86.zip"]'
    },
    'x64': {
      version: '[size="4"]>[href^="depends"][href$="x64.zip"]',
      download: '[size="4"]>[href^="depends"][href$="x64.zip"]'
    },
    'ia64': {
      version: '[size="4"]>[href^="depends"][href$="ia64.zip"]',
      download: '[size="4"]>[href^="depends"][href$="ia64.zip"]'
    }
  }
}
module.exports = data
