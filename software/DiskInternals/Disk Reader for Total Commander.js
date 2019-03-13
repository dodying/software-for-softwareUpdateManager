'use strict'

let data = {
  url: 'https://www.diskinternals.com/reader-for-tc/',
  version: {
    selector: '.divh5'
  },
  download: {
    plain: 'https://www.diskinternals.com/download/DiskInternals_Reader.zip'
  },
  install: function (output, iPath) {
    return require('./../../js/install')(output, iPath)
  }
}
module.exports = data
