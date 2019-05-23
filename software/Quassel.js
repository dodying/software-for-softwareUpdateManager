'use strict'

let data = {
  url: 'https://quassel-irc.org/downloads',
  version: {
    selector: '.content>h2'
  },
  download: {
    selector: '[href*="x64-setup"][href$=".7z"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
