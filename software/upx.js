'use strict'

let data = {
  url: 'https://github.com/upx/upx/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    selector: 'a[href*="/releases/download/"][href*="win64"][href$=".zip"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.zipped.single(output, iPath, 'upx.exe')
  }
}
module.exports = data
