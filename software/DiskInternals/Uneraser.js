'use strict'

let data = {
  commercial: 3,
  url: 'https://www.diskinternals.com/uneraser/',
  version: {
    selector: '.divh5'
  },
  download: {
    plain: 'https://www.diskinternals.com/download/Uneraser_Setup.exe'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
