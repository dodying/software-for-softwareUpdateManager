'use strict'

let data = {
  url: 'https://github.com/liamg/aminal/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="-windows-amd64.exe"]'
  },
  install: function (output, iPath) {
    return require('./../js/install_single')(output, iPath)
  }
}
module.exports = data
