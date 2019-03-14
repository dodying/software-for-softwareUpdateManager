'use strict'

let data = {
  url: 'https://github.com/freenet/fred/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /(.*)/
  },
  download: {
    selector: 'a[href*="freenet-build"][href*="/releases/download/"][href$=".jar"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.single(output, iPath)
  }
}
module.exports = data
