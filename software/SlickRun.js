'use strict'

let data = {
  url: 'https://bayden.com/SlickRun/updates.asp',
  version: {
    selector: '.Code>b'
  },
  download: {
    plain: 'https://bayden.com/dl/sr-setup64.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
