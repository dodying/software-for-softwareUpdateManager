'use strict'

let data = {
  url: 'https://github.com/aria2/aria2/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /release-(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href*="win-64bit"][href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'aria2c.exe')
  }
}
module.exports = data
