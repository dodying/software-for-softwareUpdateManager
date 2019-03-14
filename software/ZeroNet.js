'use strict'

let data = {
  url: 'https://github.com/HelloZeroNet/ZeroNet/releases/latest',
  version: {
    selector: '.muted-link.css-truncate',
    match: /v(.*)/
  },
  download: {
    plain: 'https://github.com/HelloZeroNet/ZeroNet-win/archive/dist/ZeroNet-win.zip'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
