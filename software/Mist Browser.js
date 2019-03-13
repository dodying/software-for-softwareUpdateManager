'use strict'

let data = {
  url: 'https://github.com/ethereum/mist/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href*="win64"][href$=".zip"]'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data