'use strict'

let data = {
  commercial: 3,
  url: 'https://www.diskinternals.com/outlook-recovery/',
  version: {
    selector: '.divh5'
  },
  download: {
    plain: 'https://www.diskinternals.com/download/Outlook_Recovery.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
