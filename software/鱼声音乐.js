'use strict'

let data = {
  url: 'https://github.com/AnyListen/YaVipCore/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /V(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".rar"]'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data
