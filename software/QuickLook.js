'use strict'

let data = {
  url: 'https://github.com/QL-Win/QuickLook/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".zip"]'
  },
  install: function (output, iPath) {
    return require('./../js/install')(output, iPath)
  }
}
module.exports = data