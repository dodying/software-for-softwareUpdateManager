'use strict'

let data = {
  url: 'https://github.com/listen1/listen1_desktop/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href$="win64.exe"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped(output, iPath, 'install', 'app-64.7z')
  }
}
module.exports = data
