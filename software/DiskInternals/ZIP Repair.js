'use strict'

let data = {
  url: 'https://www.diskinternals.com/zip-repair/',
  version: {
    selector: '.divh5'
  },
  download: {
    plain: 'https://www.diskinternals.com/download/zip_repair.exe'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
