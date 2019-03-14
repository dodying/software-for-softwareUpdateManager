'use strict'

let data = {
  url: 'https://github.com/jusu/Elephant/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /V(\d+)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="win.zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath)
  }
}
module.exports = data
