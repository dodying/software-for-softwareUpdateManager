'use strict'

let data = {
  url: 'https://github.com/mazehall/eintopf/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="x64.exe"]'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
