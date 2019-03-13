'use strict'

let data = {
  url: 'https://github.com/mintty/wsltty/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".exe"]'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data