'use strict'

let data = {
  url: 'https://github.com/Jigsaw-Code/outline-client/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
