'use strict'

let data = {
  url: 'https://github.com/WikidPad/WikidPad/releases/',
  version: {
    selector: '.muted-link.css-truncate',
    match: /WikidPad-(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.inno(output, iPath)
  }
}
module.exports = data
