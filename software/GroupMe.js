'use strict'

let data = {
  url: 'https://github.com/dcrousso/GroupMe/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href*="windows"][href$=".zip"]'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data