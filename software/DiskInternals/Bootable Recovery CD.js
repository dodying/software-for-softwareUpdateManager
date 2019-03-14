'use strict'

let data = {
  url: 'https://www.diskinternals.com/boot-cd/',
  version: {
    selector: '.divh5'
  },
  download: {
    plain: 'https://www.diskinternals.com/download/Boot_CD.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
