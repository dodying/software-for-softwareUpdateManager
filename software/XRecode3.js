'use strict'

let data = {
  commercial: 3,
  url: 'https://xrecode.com/',
  version: '[href$=".7z"][href*="64bit"]',
  changelog: {
    url: 'https://xrecode.com/whatsnew/whatsnew.txt',
    match: /- version [\d.]+/,
    split: true
  },
  download: '[href$=".7z"][href*="64bit"]',
  install: 'install',
  other: {
    cli: {
      version: '[href$=".7z"][href*="64bit"][href*="console"]',
      download: '[href$=".7z"][href*="64bit"][href*="console"]'
    }
  }
}
module.exports = data
