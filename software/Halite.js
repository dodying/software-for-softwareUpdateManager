'use strict'

let data = {
  url: 'https://github.com/Eoinocal/Halite/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /Release-(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="x64.7z"]'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
