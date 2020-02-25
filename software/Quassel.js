'use strict'

let data = {
  url: 'https://quassel-irc.org/downloads',
  version: '.content>h2',
  changelog: {
    url: 'https://raw.githubusercontent.com/quassel/quassel/master/ChangeLog',
    match: /^Version [\d.]+/,
    split: true
  },
  download: '[href*="x64-setup"][href$=".7z"]',
  install: 'install'
}
module.exports = data
