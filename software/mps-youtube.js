'use strict'

let data = {
  url: 'https://github.com/mps-youtube/mps-youtube/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".exe"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_single')(output, iPath)
  }
}
module.exports = data
