'use strict'

let data = {
  commercial: 3,
  url: 'https://www.diskinternals.com/cd-dvd-recovery/',
  version: {
    selector: '.divh5'
  },
  download: {
    plain: 'https://www.diskinternals.com/download/CD_DVD_Recovery.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
