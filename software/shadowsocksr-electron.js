'use strict'

let data = {
  url: 'https://github.com/erguotou520/electron-ssr/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$=".exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'app-32.7z')
  }
}
module.exports = data
