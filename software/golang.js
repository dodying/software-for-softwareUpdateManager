'use strict'

let data = {
  url: 'https://golang.org/dl/',
  preferPath: 'golang.exe',
  version: {
    selector: '.toggleButton'
  },
  download: {
    selector: '.download[href$="amd64.msi"]'
  },
  install: function (output, iPath, fns) {
    return fns.install.msi(output, iPath, null, data.preferPath)
  }
}
module.exports = data
